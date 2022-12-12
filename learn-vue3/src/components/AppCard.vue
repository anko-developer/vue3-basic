<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="헤더 메세지">#Header</slot>
		</div>
		<div class="card-body">
			<slot :child-message="childMessage" hello-message="하이유">#Body</slot>
		</div>
		<!-- <div v-if="$slots.footer" class="card-footer text-muted"> -->
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footer-message="푸터 메세지">#Footer</slot>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 컴포넌트 메세지');
		const hasFooter = computed(() => !!slots.footer);
		return {
			childMessage,
			hasFooter,
		};
	},
};
</script>

<style></style>
