<template>
	<div>
		<navbar />
		<header class="header">
			<div class="header__rays" />
			<img
				class="header__az-star"
				src="/imgs/arizona_star.svg"
				alt="AZ Star"
			/>
		</header>
		<nuxt />
		<footer class="footer">
			<div class="level">
				<div class="level-item">
					<p>
						Please consider donating, it'll fund
						future CopaFests and other club activities to keep the
						hobby of ham radio alive.
					</p>
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
			<div class="content">
				Maricopa Amateur Radio Association is a 501(c)(3) non-profit
				corporation.
			</div>
		</footer>
	</div>
</template>

<script>
	import navbar from "../components/navbar";

	export default {
	mounted() {
		document.documentElement.classList.add("has-navbar-fixed-top");
	},
	components: {
		navbar
	}
};
</script>

<style lang="scss">
@import "../assets/global.scss";

body {
	color: black;
	background: whitesmoke;
	font-family: "Istok Web", sans-serif;
}
</style>

<style scoped lang="scss">
@import "../assets/global.scss";

.header {
	text-align: center;
	font-family: "Lalezar", sans-serif;
	background-color: $az-blue;

	&__rays {
		background-image: url("/imgs/arizona_rays.svg");
		background-size: cover;
		background-position: bottom;
		height: 20vh;
	}

	&__az-star {
		width: 10rem;
		height: 10rem;
		@include header-vertical-adjustment;
	}
}
</style>
