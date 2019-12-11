<template>
	<section class="section">
		<div class="container is-fluid">
			<div class="content">
				<div class="box">
					<h2 v-text="volunteerSettings.header" />
					<div v-html="volunteerSettings.content" />
					<div>
						<a
							href="mailto:fest@copafest.org?subject=I'd%20like%20to%20volunteer%20for%20CopaFest&body=Hey!%0A%0AI'd%20like%20to%20help%20with..."
						>
							<button
								class="square-button square-button--yellow"
								v-text="volunteerSettings.button_text"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  import volunteerSettings from "../assets/settings/pages/volunteer";

  export default {
	name: "volunteer",
	data() {
		return {
			volunteerSettings
		};
	}
};
</script>

<style scoped></style>
