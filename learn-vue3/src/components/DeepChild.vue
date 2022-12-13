<template>
	<div class="card">
		<div class="card-header">DeepChild Component</div>
		<div class="card-body">
			{{ staticMessage }} | {{ message }} |
			{{ count }}
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
	setup() {
		const staticMessage = inject('static-message', 'default-message');
		const { message, updateMessage } = inject('message');
		const count = inject('count');
		updateMessage('!!!asdasd!');
		return {
			staticMessage,
			message,
			updateMessage,
			count,
		};
	},
};
</script>

<style></style>
