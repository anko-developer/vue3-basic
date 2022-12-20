<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
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
				<button class="btn btn-primary">수정</button>
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

const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (error) {
		console.log(error);
		vAlert('네트워크 오류');
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

const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		vSuccess('수정이 완료되었습니다.');
		router.push({
			name: 'PostDetail',
			params: {
				id,
			},
		});
	} catch (error) {
		console.log(error);
		vAlert('수정이 실패되었습니다.', 'error');
	}
};
</script>

<style lang="scss" scoped></style>
