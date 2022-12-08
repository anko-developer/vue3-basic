<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reversMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('Hello');
		const reversMessage = ref('');

		const reverseFunction = newValue => {
			reversMessage.value = newValue.split('').reverse().join('');
		};

		watch(message, reverseFunction);
		reverseFunction(message.value);

		return {
			message,
			reversMessage,
		};
	},
};
</script>

<style></style>
