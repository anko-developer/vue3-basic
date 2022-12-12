<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
		<!-- :value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)" -->
	</label>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	props: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return {
			value,
		};
	},
};
</script>

<style></style>
