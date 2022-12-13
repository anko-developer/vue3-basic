<template>
	<main>
		<ScriptSetup ref="test"></ScriptSetup>
		<template v-if="test">
			{{ test.msg }}
		</template>
	</main>
</template>

<script setup>
import { ref } from 'vue';
// import ProvideInject from '@/components/ProvideInject.vue';
// import LifecycleHooks from '@/components/LifecycleHooks.vue';
// import TemplateRefs from '@/components/TemplateRefs.vue';
import ScriptSetup from './ScriptSetup.vue';
const test = ref(null);
</script>

<style scoped></style>
