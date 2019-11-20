<template>
	<div>
		<header class="header">
      <div class="header__rays" />
      <img
        class="header__az-star"
        src="/imgs/arizona_star.svg"
        alt="AZ Star"
      />
      <div class="header__upper">
        <div class="header__upper-left">
          Maricopa ARA
        </div>
        <div class="header__upper-right">
          Presents
        </div>
      </div>
      <div class="header__main-text">
        CopaFest 2020
      </div>
      <div class="header__sub-text">
        Saturday, October 24th, 2020
      </div>
		</header>
		<nuxt />
		<footer>
			Maricopa Amateur Radio Association is a 501(c)(3) non-profit
			corporation
		</footer>
	</div>
</template>

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
		height: 30vh;
	}

  @mixin vertical-adjustment {
    transform: translateY(-80px);
  }

	&__az-star {
		width: 10rem;
		height: 10rem;
    @include vertical-adjustment;
	}

	@mixin header-text-properties {
		color: white;
		text-shadow: -0.1rem -0.1rem 0 black, 0.1rem -0.1rem 0 black,
			-0.1rem 0.1rem 0 black, 0.1rem 0.1rem 0 black;
		background-color: $az-blue;
	}

	&__upper {
		display: flex;
    align-items: baseline;
		justify-content: space-around;
		@include header-text-properties;
    @include vertical-adjustment;
  }

	&__upper-left {
		font-size: 1.5rem;
	}

	&__upper-right {
		font-size: 1.5rem;
	}

	&__main-text {
		font-size: 4rem;
		color: white;
		@include header-text-properties;
    @include vertical-adjustment;
	}

  &__sub-text {
    font-size: 2.3rem;
    color: white;
    @include header-text-properties;
    @include vertical-adjustment;
  }

}
</style>
