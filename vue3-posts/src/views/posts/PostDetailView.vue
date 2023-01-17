<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
		</p>
		<hr class="my-4" />
		<AppError v-if="removeError" :message="removeError.message" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button
					class="btn btn-outline-danger"
					@click="remove"
					:disabled="removeLoading"
				>
					<template v-if="removeLoading">
						<span
							class="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						></span>
						<span class="visually-hidden">Loading...</span>
					</template>
					<template v-else>
						<button class="btn btn-primary">삭제</button>
					</template>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';

const error = ref(null);
const loading = ref(false);
const props = defineProps({
	id: [String, Number],
});

// const route = useRoute();
const router = useRouter();
// const id = route.params.id;

/**
 * ref
 * 장점) 객체 할당 가능
 * 단점) .value로 접근해야함
 *
 * reactive
 * 장점) .value 안붙이고 접근 가능
 * 단점) 객체 할당 불가능
 */
const post = ref({});

const fetchPost = async () => {
	try {
		loading.value = true;
		const { data } = await getPostById(props.id);
		setPost(data);
	} catch (err) {
		// console.log(err);
		error.value = err;
	} finally {
		loading.value = false;
	}
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
fetchPost();

const removeError = ref(null);
const removeLoading = ref(false);
const remove = async () => {
	try {
		if (confirm('삭제 하실?') === false) {
			return;
		}
		removeLoading.value = true;
		await deletePost(props.id);
		router.push({ name: 'PostList' });
	} catch (err) {
		// console.log(err);
		removeError.value = err;
	} finally {
		removeLoading.value = false;
	}
};
const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};
const goEditPage = () => {
	router.push({
		name: 'PostEdit',
		params: {
			id: props.id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
