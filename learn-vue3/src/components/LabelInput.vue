<template>
	<label class="form-label">
		{{ label }}
	</label>
	<input v-model="value" class="form-control" v-bind="$attrs" type="text" />
</template>

<script>
import { ref, computed } from 'vue';
export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
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
