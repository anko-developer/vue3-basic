<template>
	<div class="card">
		<div class="card-body">Lifecycle Child</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';
export default {
	setup() {
		// console.log('[child] setup');
		onBeforeMount(() => {
			console.log('[child] onBeforeMount');
		});
		onMounted(() => {
			console.log('[child] onMounted');
		});
		onBeforeUnmount(() => {
			console.log('[child] onBeforeUnmount');
			console.log(document.querySelector('#input'));
		});
		onUnmounted(() => {
			console.log('[child] onUnmounted');
			console.log(document.querySelector('#input'));
		});
		return {};
	},
};
</script>

<style></style>
