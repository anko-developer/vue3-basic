<template>
	<div>
		<h2 v-if="visible">Hello!</h2>
		<h2 v-else>두번째 else</h2>
		<button @click="visible = !visible">토글</button>
		<hr />
		<h2 v-if="type === 'A'">A입니다</h2>
		<h2 v-else-if="type === 'B'">B입니다</h2>
		<h2 v-else-if="type === 'C'">C입니다</h2>
		<h2 v-else-if="type === 'D'">D입니다</h2>
		<h2 v-else>A, B, C, D 가 아닙니다.</h2>
		<hr />
		<template v-if="visible">
			<h1>title</h1>
			<p>블라블라</p>
			<p>블라블라</p>
			<p>블라블라</p>
			<p>블라블라</p>
		</template>
		<hr />
		<h1 v-show="ok">오키도키야</h1>
		<button @click="ok = !ok">오키도키 토글</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);
		const type = ref('A');
		const ok = ref(true);

		return {
			visible,
			type,
			ok,
		};
	},
};
</script>

<style></style>
