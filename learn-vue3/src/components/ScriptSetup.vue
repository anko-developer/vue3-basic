<template>
	<div class="container py-4">
		{{ msg }}
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">눌러</button>
		<PostItem
			type="news"
			title="제목"
			content="내용쓰"
			:is-like="true"
			disabled
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			content="내용쓰"
			:is-like="true"
			disabled
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			content="내용쓰"
			:is-like="true"
			disabled
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">
			{{ child.message }}
		</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import axios from 'axios';
import PostItem from './setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello! 홀리';
const message = ref('');
const sayHello = () => {
	console.log('good');
};
const child = ref(null);
defineExpose({
	msg,
});
const response = await axios(
	'https://dummy.restapiexample.com/ /api/v1/employees',
);
console.log(response);
</script>

<style lang="scss" scoped></style>
