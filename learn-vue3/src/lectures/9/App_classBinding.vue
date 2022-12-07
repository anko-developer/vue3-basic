<template>
	<div>
		<div
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			텍스트 입니다.
		</div>
		<button @click="toggle">toggle</button>
		<button @click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { reactive, ref, computed } from 'vue';
export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);
		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': false,
		// });

		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return {
			isActive,
			toggle,
			hasError,
			classObject,
			activeClass,
			errorClass,
		};
	},
};
</script>

<style>
.active {
	font-weight: bold;
}
</style>
