<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput label="이름" data-id="id입니다"></LabelInput>
			<hr />
			<FancyButton>Click! <span style="color: red">@@@</span></FancyButton>
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<hr />
			<AppCard>
				<!-- <template #[slotArgs]>제목입니다</template> -->
				<!-- <template #default>내용입니다</template> -->
				<!-- 암시적으로 default 슬롯입니다.
				<template #footer>푸터입니다</template> -->
				<!-- <template #default="obj">{{ obj.childmessage }} {{ message }}</template> -->
				<template #header="{ headerMessage }">{{ headerMessage }}</template>
				<template #default="{ childMessage, helloMessage }"
					>{{ childMessage }} {{ helloMessage }}</template
				>
				<template #footer="{ footerMessage }">{{ footerMessage }}</template>
			</AppCard>
			<hr />
			<AppCard> 게시글 입니데이. </AppCard>
		</div>
	</main>
</template>

<script>
import { ref } from 'vue';
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('hi');
		};
		const slotArgs = ref('header');
		const message = ref('하이');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style></style>
