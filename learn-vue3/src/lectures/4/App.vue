<template>
  <div>
    <h2>반응형 메세지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addRectiveMessage">addBtn</button>
    <h2>일반 메세지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMessage">addBtn</button>
  </div>
</template>

<script>
import { isRef, ref, onMounted, onBeforeMount } from 'vue';

export default {
  setup() {
    console.log('setup');
    const reactiveMessage = ref('Hello reactive message');
    const addRectiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!';
    }

    let normalMessage = 'Hello normal message';
    const addNormalMessage = () => {
      normalMessage = normalMessage + '!';
    };

    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    return {
      reactiveMessage,
      addRectiveMessage,
      normalMessage,
      addNormalMessage,
    }
  }
}
</script>

<style>

</style>