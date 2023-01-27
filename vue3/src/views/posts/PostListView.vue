<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="(post, index) in posts" :key="index" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import PostItem from '@/components/posts/PostItem.vue';

const posts = ref([]);
const fetchPosts = () => {
	posts.value = getPosts();
};
fetchPosts();

const router = useRouter();
const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// query: {
		// 	searchText: '테스트중',
		// },
		// hash: '#world',
	});
};
</script>

<style lang="scss" scoped></style>
