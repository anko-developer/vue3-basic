<template>
	<div>
		<form @submit.prevent="save(title, contents)">
			<input type="text" v-model="title" placeholder="title" />
			<textarea v-model="contents" placeholder="contents"></textarea>
			<hr />
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title ${title}, content: ${contents}`);
		};

		watchEffect(() => {
			save(title.value, contents.value);
		});

		return {
			title,
			contents,
			save,
		};
	},
};
</script>

<style></style>
