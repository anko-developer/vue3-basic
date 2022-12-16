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
		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
		vAlert('수정이 완료되었습니다.', 'success');
		// router.push({
		// 	name: 'PostDetail',
		// 	params: {
		// 		id,
		// 	},
		// });
	} catch (error) {
		console.log(error);
		vAlert('수정이 실패되었습니다.', 'error');
	}
};

// alert
// const showAlert = ref(false);
// const alertMessage = ref('');
// const alertType = ref('');
const alerts = ref([]);

const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	// showAlert.value = true;
	// alertMessage.value = message;
	// alertType.value = type;
	setTimeout(() => {
		// showAlert.value = false;
		alerts.value.shift();
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
