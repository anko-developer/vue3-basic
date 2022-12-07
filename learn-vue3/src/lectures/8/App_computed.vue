<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<p>{{ hasLecture }}</p>
		<button @click="count++">{{ count }}클릭</button>

		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '김명욱',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue'],
		});

		const hasLecture = computed(() => {
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		const count = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');
		const fullName = computed({
			get() {
				return `${firstName.value} ${lastName.value}`;
			},
			set(value) {
				console.log('value', value);

				[firstName.value, lastName.value] = value.split(' ');
				console.log(firstName.value, lastName.value);
			},
		});
		fullName.value = '김 명욱';
		return {
			teacher,
			hasLecture,
			count,
			firstName,
			lastName,
			fullName,
		};
	},
};
</script>

<style></style>
