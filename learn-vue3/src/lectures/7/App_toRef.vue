<template>
	<div>
		<p>{{ author }}</p>
		<p>{{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'vue',
			year: '2020',
			title: 'vue3 타이틀',
			description: '당신',
			price: '무료',
		});

		const { author, title } = toRefs(book);

		return {
			author,
			title,
		};
	},
};
</script>

<style></style>
