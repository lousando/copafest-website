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
		<copa-footer />
	</div>
</template>

<script>
  import navbar from "../components/navbar";
  import footer from "../components/footer";

  export default {
	mounted() {
		_initClickyAnalytics();
		document.documentElement.classList.add("has-navbar-fixed-top");
	},
	components: {
		navbar,
		"copa-footer": footer
	}
};

function _initClickyAnalytics() {
	/**
	 * Most likely using an add blocker.
	 * Don't slow down the page by making a request
	 * that'll likely be blocked.
	 */
	if (navigator.doNotTrack !== "1") {
		window.clicky_site_ids = window.clicky_site_ids || [];
		window.clicky_site_ids.push(101225522);

		let clickyScript = document.createElement("script");
		clickyScript.src = "https://static.getclicky.com/js";
		document.head.appendChild(clickyScript);
	}
}
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
