<template>
	<footer class="footer has-text-centered">
		<div class="content">
			<div class="columns">
				<div class="column">
					<p>
						Please consider donating, it'll fund future CopaFests
						and other club activities to keep the hobby of ham radio
						alive.
					</p>
				</div>
				<div class="column">
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
			<div class="columns">
				<div class="column">
					Maricopa Amateur Radio Association is a 501(c)(3) non-profit
					corporation.
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "footer"
};
</script>

<style scoped lang="scss"></style>
