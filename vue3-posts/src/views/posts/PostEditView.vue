<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />

	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<AppError v-if="error" :message="editError.message" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary" :disabled="editLoading">
					<template v-if="editLoading">
						<span
							class="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						></span>
						<span class="visually-hidden">Loading...</span>
					</template>
					<template v-else>
						<button class="btn btn-primary">수정</button>
					</template>
				</button>
			</template>
		</PostForm>
		<!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" /> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import useAlert from '@/composables/alert';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const error = ref(null);
const loading = ref(false);

const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	try {
		loading.value = true;
		const { data } = await getPostById(id);
		setForm(data);
	} catch (err) {
		// console.log(err);
		error.value = err;
		vAlert('네트워크 오류');
	} finally {
		loading.value = false;
	}
};

const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};
fetchPost();

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

const editError = ref(null);
const editLoading = ref(false);
const edit = async () => {
	try {
		editLoading.value = true;
		await updatePost(id, { ...form.value });
		vSuccess('수정이 완료되었습니다.');
		router.push({
			name: 'PostDetail',
			params: {
				id,
			},
		});
	} catch (err) {
		// console.log(err);
		editError.value = err;
		vAlert('수정이 실패되었습니다.', 'error');
	} finally {
		editLoading.value = false;
	}
};
</script>

<style lang="scss" scoped></style>
