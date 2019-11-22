<template>
	<form
		action="https://www.paypal.com/cgi-bin/webscr"
		method="post"
		target="_top"
	>
		<input type="hidden" name="cmd" value="_s-xclick" />
		<input type="hidden" name="hosted_button_id" value="JT7CB98ACTZGS" />

		<div class="form-row">
			<label for="name_and_call">
				Name and Call:
			</label>
			<input
				type="text"
				name="os0"
				id="name_and_call"
				autocomplete="name"
				maxlength="200"
			/>
			<input type="hidden" name="on0" value="Name and Call" />
		</div>

		<div class="form-row">
			<label for="contact_info">
				Contact Information:
			</label>
			<input
				type="text"
				name="os1"
				id="contact_info"
				autocomplete="tel"
				maxlength="200"
			/>
			<input type="hidden" name="on1" value="Contact Information" />
		</div>

		<button type="submit" class="button-submit"
>
			Reserve 2 Parking Spaces
		</button>

		<p style="margin-top: 0.5rem">
			Need more space? Contact us directly at:
			<a href="mailto:fest@copafest.org">fest@copafest.org</a>
		</p>
	</form>
</template>

<script>
export default {
	name: "TailgaterRegistration"
};
</script>

<style scoped lang="scss">
form {
	text-align: center;

	label {
		font-family: sans-serif;
		cursor: pointer;
	}

	input[type="text"] {
		border-radius: 0.2rem;
	}

	.button-submit {
		margin-right: 1rem;
		max-height: 4rem;
		cursor: pointer;
		background-color: #ffc439;
		padding: 0.5rem;
		border-radius: 2rem;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.form-row {
		display: flex;
		justify-content: flex-end;
		padding: 0.5em;
		margin-top: 1rem;
		margin-bottom: 1rem;

		label {
			padding: 0.5em 1em 0.5em 0;
			flex: 1;
		}

		input {
			flex: 2;
		}
	}
}
</style>
