<template>
	<div>
		<p>{{ message }}</p>
		<button @click="message = message + '!'">클릭</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요!');

		return {
			message,
		};
	},
};
</script>

<style></style>
