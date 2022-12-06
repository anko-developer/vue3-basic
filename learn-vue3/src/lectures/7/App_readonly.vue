<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		const copy = readonly(original);
		original.count++;
		copy.count++; // readonly로 만들어진 객체는 변경 불가
		console.log(original.count);
		console.log(copy.count);

		return {
			original,
		};
	},
};
</script>

<style></style>
