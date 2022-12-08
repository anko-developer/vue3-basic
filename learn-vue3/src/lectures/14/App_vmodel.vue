<template>
	<div>
		<input type="text" v-model.trim="inputValue" />
		<div>{{ inputValue }}</div>
		<hr />
		<!-- <textarea v-model="textValue"></textarea> -->
		<textarea v-model.number="textValue"></textarea>
		<div>{{ typeof textValue }}</div>
		<div>{{ textValue }}</div>
		<hr />
		<label for="checkbox">{{ checkboxValue }}</label>
		<input type="checkbox" id="checkbox" v-model="checkboxValue" />
		<hr />
		<label>
			<input type="radio" name="type" value="B" v-model="radioValue" />
			B형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<div>{{ radioValue }}</div>
		<hr />
		<select v-model="selectValue">
			<option value="html">HTML</option>
			<option value="css">CSS</option>
			<option value="javascript">javascript</option>
		</select>
		<div>{{ selectValue }}</div>
		<hr />
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JavaScript
		</label>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const inputValue = ref(null);
		const textValue = ref(null);
		const checkboxValue = ref(true);
		const radioValue = ref('B');
		const selectValue = ref('html');
		const checkboxValues = ref([]);

		return {
			inputValue,
			textValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style></style>
