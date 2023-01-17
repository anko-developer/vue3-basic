<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		></PostFilter>
		<hr class="my-4" />

		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="error.message" />
		<template v-else>
			<AppGrid :items="posts">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:created-at="item.createdAt"
						@click="goPage(item.id)"
						@modal="openModal(item)"
					></PostItem>
				</template>
			</AppGrid>
			<AppPagination
				:current-page="params._page"
				:page-count="pageCount"
				@page="page => (params._page = page)"
			/>
		</template>

		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:create-at="modalCreatedAt"
			/>
		</Teleport>

		<template v-if="posts && posts.length > 0">
			<hr class="my-4" />
			<AppCard>
				<PostDetailView :id="posts[0].id"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import { watchEffect, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import { getPosts } from '@/api/posts';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

const router = useRouter();
const posts = ref([]);
const error = ref(null);
const loading = ref(false);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	// title_like: 9,
});

// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
	try {
		// ({ data: posts.value } = await getPosts());
		loading.value = true;
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (err) {
		// console.log(err);
		error.value = err;
	} finally {
		loading.value = false;
	}
};
// fetchPosts();
watchEffect(fetchPosts);

const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

// modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
