<template>
	<section class="section">
		<div class="container is-fluid">
			<div class="content">
				<div class="box">
					<h2 v-text="volunteerSettings.header" />
					<div v-html="volunteerSettings.content" />
					<div>
						<a :href="mailtoHref">
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
			volunteerSettings,
			mailtoHref: `mailto:${
				this.$store.state.globalSettings.copa_fest_email
			}?subject=${encodeURIComponent(
				`CopaFest ${this.$store.state.copaFestYear}: ${volunteerSettings.volunteer_email_subject}`
			)}&body=${encodeURIComponent(
				volunteerSettings.volunteer_email_body
			)}`
		};
	}
};
</script>

<style scoped></style>
