<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			<DeepChild></DeepChild>
		</div>
	</div>
</template>

<script>
import DeepChild from '@/components/DeepChild.vue';

export default {
	components: {
		DeepChild,
	},
};
</script>

<style></style>
