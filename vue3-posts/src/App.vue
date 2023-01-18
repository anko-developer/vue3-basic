<template>
	<TheHeader></TheHeader>
	<TheView></TheView>
	<div style="background-color: #000">
		<SvgIcon name="logo" color="#fff"></SvgIcon>
	</div>
	<AppAlert :items="alerts"></AppAlert>
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
import AppAlert from './components/app/AppAlert.vue';
import SvgIcon from './components/SvgIcon.vue';
import { useAlert } from '@/composables/alert';

const { alerts } = useAlert();
</script>

<style></style>
