<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p>
		<!-- <p>{{ $route.name }}</p> -->
		<button class="btn btn-primary" @click="$router.push('/')">
			홈으로 이동
		</button>
		<h2>Stroe</h2>
		<p>counter: {{ counter }}</p>
		<p>doubleCount: {{ doubleCount }}</p>
		<p>플러스: {{ doubleCountPlusOne }}</p>
		<button @click="increment()">click!</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('path', route.path);

const store = useCounterStore();
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store);
const { increment } = store;
</script>

<style lang="scss" scoped></style>
