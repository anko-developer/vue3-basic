<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAbout">About 이동</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAbout = () => {
	// router.push('/about');
	router.push({
		name: 'About',
	});
};
</script>

<style lang="scss" scoped></style>
