<template>
	<main>
		<div class="container py-4">
			<div class="row g-0">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:isLike="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
						disabled
					></AppCard>
					<button @click="post.isLike = !post.isLike">toogle</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from '@/components/AppCard.vue';

export default {
	components: {
		AppCard,
	},
	setup() {
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'notice',
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice',
			},
		]);

		return {
			posts,
		};
	},
};
</script>

<style></style>
