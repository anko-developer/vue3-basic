<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			const: 0,
		});

		// watch(
		// 	() => x.value + y.value,
		// 	sum => {
		// 		console.log('sum:', sum);
		// 	},
		// );

		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		watch(obj, (newValue, oldValue) => {
			console.log('newValue', newValue);
		});

		return {
			x,
			y,
			obj,
		};
	},
};
</script>

<style></style>
