<template>
	<div>
		<h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
		<hr class="my-4" />
		<PostForm
			v-if="visibleForm"
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(),
		});
		// router.push({
		// 	name: 'PostList',
		// });
		vSuccess('등록이 완료되었습니다.');
	} catch (error) {
		vAlert(error.message);
		console.log(error);
	}
};

const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};
const visibleForm = ref(true);
</script>

<style lang="scss" scoped></style>
