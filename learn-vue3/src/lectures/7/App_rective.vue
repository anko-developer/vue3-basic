<template>
	<div>
		<p>{{ message }}</p>
		<button @click="addMessage">클릭</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		let message = ref('Hello Vue!');

		const addMessage = () => {
			message.value = message.value + '!';
		};

		return {
			message,
			addMessage,
		};
	},
};
</script>

<style></style>
