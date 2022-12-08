<template>
	<div>
		<button @click="printEventInfo('Hello Vue', $event)">버튼</button>
		<hr />
		<input type="text" @keyup="onKeyupHandler" />
		<hr />
		<div id="modifiers">
			<div @click="clickDiv">
				Div 영역
				<p @click="clickP">
					p 영역
					<span @click.stop="clickSpan">span 영역</span>
					<a @click.prevent="clickA" href="https://naver.com">a 영역</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
// import { ref } from 'vue';
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message', message);
			console.log('event.target', event.target);
			console.log('event.target', event.target.tagName);
		};

		const onKeyupHandler = event => {
			console.log('event.key:', event.key);
		};

		const clickDiv = () => {
			console.log('div');
		};

		const clickP = () => {
			console.log('p');
		};

		const clickSpan = () => {
			console.log('span');
			// e.stopPropagation();
		};

		const clickA = e => {
			// e.preventDefault();
			alert('알림!');
		};

		return {
			printEventInfo,
			onKeyupHandler,
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}

#modifiers div {
	background-color: #b0b0b0;
}

#modifiers p {
	background-color: #777;
}

#modifiers span {
	display: block;
	background-color: #444;
}
</style>
