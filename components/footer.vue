<template>
	<footer class="footer has-text-centered">
		<div class="columns">
			<div class="column">
				<p v-html="this.$store.state.globalSettings.donation_pitch" />
				<form
					action="https://www.paypal.com/cgi-bin/webscr"
					method="post"
					target="_blank"
				>
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input
						type="hidden"
						name="hosted_button_id"
						value="AL3TRQJ78JY6E"
					/>
					<button
						type="submit"
						class="square-button square-button--yellow"
					>
						Donate
					</button>
				</form>
			</div>
		</div>
		<div class="columns has-text-centered">
			<div class="column">
				<div class="content">
					<p>
						Maricopa Amateur Radio Association is a 501(c)(3)
						non-profit corporation.
					</p>
				</div>
				<a
					href="http://www.copahams.org/"
					rel="noopener"
					target="_blank"
				>
					<img
						class="mara-logo is-rounded"
						src="imgs/mara_logo.svg"
						alt="MARA Logo"
					/>
					<div>
						CopaHams.org
					</div>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "footer"
};
</script>

<style scoped lang="scss">
.mara-logo {
	width: 14rem;
	height: 14rem;
}
</style>
