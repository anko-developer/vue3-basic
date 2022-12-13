<template>
	<div class="container py-4">
		<button class="btn btn-primary" @click="changeCurrentComp(DynamicApple)">
			사과
		</button>
		<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp" />
	</div>
</template>

<script setup>
import { shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

const currentComp = shallowRef(DynamicApple);
const changeCurrentComp = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>
