<template>
	<div>
		<h2>보간법</h2>
		<p v-once>{{ message }}</p>
		<button @click="message = message + '!'">클릭</button>
		<hr />
		<h2>HTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />
		<h2 :title="dynamicTitle">마우스를 올려보세요</h2>
		<input type="text" value="홍길동" :disabled="isInputDisabled" />
		<input type="text" v-bind="attrs" />
		<p>
			{{ message.split('').reverse().join() }}
		</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요!');
		const rawHtml = ref('<strong>안녕하세요</strong>');
		const attrs = ref({
			type: 'password',
			value: '1234556',
			disabled: false,
		});

		const dynamicTitle = ref('하이하이!!!');
		const isInputDisabled = ref(true);

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style></style>
