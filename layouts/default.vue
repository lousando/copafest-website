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
		<footer>
			Maricopa Amateur Radio Association is a 501(c)(3) non-profit
			corporation
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
	background: white;
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
