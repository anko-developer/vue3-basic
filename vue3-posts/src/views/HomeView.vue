<template>
	<div class="row">
		<div class="col">테스트1</div>
		<div class="col-8">테스트2</div>
		<div class="col-auto">테스트3asdasdasdasd</div>
	</div>
	<div>
		<h2>Home view</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="my-4" />
	</div>
	<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
	<!-- <p>{{ $person.name }}</p>
	<button class="btn btn-primary" @click="person.say">click person</button> -->
</template>

<script>
export default {
	created() {
		// console.log(this.$person.name);
		// this.$person.say();
	},
};
</script>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

// person.js 에서 provide 가져오기
// const person = inject('person');
// console.log('person.name', person.name);
</script>

<style lang="scss" scoped></style>
