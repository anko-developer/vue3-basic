<template>
	<div>
		<div :style="styleObj">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti
			fuga, velit saepe, voluptates ipsum hic ea quibusdam quidem ipsam
			provident numquam doloribus vel? Rem eum sequi dolore saepe nemo
		</div>
		<button @click="fontSize--">-</button>
		<button @click="fontSize++">+</button>
	</div>
</template>

<script>
import { reactive, ref, computed } from 'vue';

export default {
	setup() {
		// const styleObj = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);
		const styleObj = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return {
			fontSize,
			styleObj,
		};
	},
};
</script>

<style></style>
