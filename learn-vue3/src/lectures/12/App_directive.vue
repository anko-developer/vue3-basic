<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<p v-text="htmlStr"></p>
		<hr />
		<div v-memo="[subscribers]">
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>

		<button @click="subscribers++">sub++</button>
		<button @click="views++">views++</button>
		<button @click="likes++">likes++</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>하하하</strong>');
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);

		return {
			msg,
			htmlStr,
			subscribers,
			views,
			likes,
		};
	},
};
</script>

<style></style>
