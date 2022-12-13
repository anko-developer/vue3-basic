<template>
	<div>
		{{ $parent.fruits }}
		<ul>
			<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('Hello 차일드');
const sayHello = () => {
	alert(message.value);
};
defineExpose({
	message,
	sayHello,
});
</script>

<style></style>
