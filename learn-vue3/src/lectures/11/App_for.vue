<template>
	<div>
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<li>
					{{ index }}
					{{ item.message }}
				</li>
			</template>
		</ul>

		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }}~{{ key }}~{{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'test1' },
			{ id: 2, message: 'test2' },
			{ id: 3, message: 'test3' },
			{ id: 4, message: 'test4' },
		]);

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2022-01-01',
		});

		return {
			items,
			evenItems,
			myObject,
		};
	},
};
</script>

<style></style>
