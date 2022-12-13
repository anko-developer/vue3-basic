<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p v-if="input">{{ input.value }}, {{ $refs.input.value }}</p>

		<hr />
		<ul>
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';

export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);
		onMounted(() => {
			input.value.value = 'hi';
			console.log(input.value);
			// itemRefs.value.forEach(item => console.log(item));
			itemRefs.value.forEach(item => console.log(item));
			console.log(child.value.message);
			// console.log(child.value.sayHello());
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);

		const child = ref(null);

		return { input, fruits, itemRefs, child };
	},
};
</script>

<style></style>
