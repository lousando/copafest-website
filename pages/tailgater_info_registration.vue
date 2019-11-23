<template>
	<section class="section">
		<div class="container is-fluid">
			<section class="hero">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">
							Welcome Tailgaters!
						</h1>
						<h2 class="subtitle">
							To register, please fill out the form below:
						</h2>
					</div>
				</div>
			</section>

			<div class="level">
				<div class="level-item">
					<div>
						Set up begins at 5:00 AM<br />
						Two parking spaces are $10
					</div>
				</div>
			</div>

			<form
				action="https://www.paypal.com/cgi-bin/webscr"
				method="post"
				target="_top"
			>
				<input type="hidden" name="cmd" value="_s-xclick" />
				<input
					type="hidden"
					name="hosted_button_id"
					value="JT7CB98ACTZGS"
				/>

				<div class="field">
					<label class="label" for="name_and_call">
						Name and Call:
					</label>
					<div class="control">
						<input
							class="input"
							type="text"
							name="os0"
							id="name_and_call"
							placeholder="e.g. Bob W1ABC"
							autocomplete="name"
							maxlength="200"
						/>
					</div>
					<input type="hidden" name="on0" value="Name and Call" />
				</div>

				<div class="field">
					<label class="label" for="contact_info">
						Contact Information:
					</label>
					<div class="control">
						<input
							class="input"
							type="text"
							name="os1"
							id="contact_info"
							placeholder="e.g. (555) 123-4567"
							autocomplete="tel"
							maxlength="200"
						/>
					</div>
					<input
						type="hidden"
						name="on1"
						value="Contact Information"
					/>
				</div>

				<button
					type="submit"
					class="square-button square-button--yellow"
				>
					Reserve 2 Parking Spaces
				</button>

				<p style="margin-top: 0.5rem">
					Need more space? Contact us directly at:
					<a href="mailto:fest@copafest.org">fest@copafest.org</a>
				</p>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	name: "TailgaterRegistration"
};
</script>

<style scoped lang="scss">
form {
	label {
		cursor: pointer;
	}
}
</style>
