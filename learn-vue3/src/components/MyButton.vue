<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			My Button
		</button>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	setup(props, context) {
		console.log(context.attrs);
		return {};
	},
};
</script>

<style></style>
