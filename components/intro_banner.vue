<template>
	<div class="intro-banner">
		<div class="intro-banner__upper">
			<div class="intro-banner__upper-left">Maricopa<br />ARA</div>
			<div class="intro-banner__upper-middle">
				<!-- spacer-->
			</div>
			<div class="intro-banner__upper-right">
				Presents
			</div>
		</div>
		<div class="intro-banner__main-text">
			CopaFest {{this.copaFestYear}}
		</div>
		<div class="intro-banner__sub-text">
			{{ this.copaFestDate }}
		</div>
	</div>
</template>

<script>
	import settings from "../assets/settings.json";
	import { DateTime } from "luxon";

	export default {
	name: "intro_banner",
	data() {
		let copaFestDateTime = DateTime.fromISO(
			settings.copa_fest_date
		);

		return {
			copaFestDate: copaFestDateTime.toLocaleString(DateTime.DATE_HUGE),
			copaFestYear: copaFestDateTime.year
		};
	}
};
</script>

<style scoped lang="scss">
@import "../assets/global.scss";

@mixin intro-banner-text-properties {
	color: white;
	text-shadow: -0.1rem -0.1rem 0 black, 0.1rem -0.1rem 0 black,
		-0.1rem 0.1rem 0 black, 0.1rem 0.1rem 0 black;
	background-color: $az-blue;
}

.intro-banner {
	text-align: center;
	font-family: "Lalezar", sans-serif;
	background-color: $az-blue;

	&__upper {
		display: flex;
		justify-content: space-around;
		@include intro-banner-text-properties;
		@include header-vertical-adjustment;
	}

	&__upper-left,
	&__upper-right {
		font-size: 2rem;
		transform: translateY(-20%);

		// mobile styles
		@media (max-width: 600px) {
			& {
				font-size: 1.5rem;
				transform: translateY(-100%);
			}
		}
	}

	&__main-text {
		font-size: 4rem;
		color: white;
		@include intro-banner-text-properties;
		@include header-vertical-adjustment;
	}

	&__sub-text {
		font-size: 2.3rem;
		color: white;
		@include intro-banner-text-properties;
		@include header-vertical-adjustment;
	}
}
</style>
