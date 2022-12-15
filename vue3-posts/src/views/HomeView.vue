<template>
	<div>
		<h2>Home view</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="my-4" />
	</div>
	<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);
</script>

<style lang="scss" scoped></style>
