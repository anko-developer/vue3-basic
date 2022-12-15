<template>
	<TheHeader></TheHeader>
	<TheView></TheView>
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
</script>
<script>
// document.documentElement.setAttribute('color-theme', 'dark');
</script>

<style>
:root {
	--background: #fff;
	--fontColor: #000;
}

:root[color-theme='dark'] {
	--background: #000;
	--bs-card-bg: #000;
	--fontColor: #fff;
}

body {
	color: var(--fontColor);
	background-color: var(--background);
}
</style>
