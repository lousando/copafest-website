<template>
	<div>
		<header class="header">
      <div class="header__rays" />
      <div class="header__lower">
        <div class="header__lower-left">
          <div class="header__mara">
            Maricopa ARA
          </div>
          <div class="header__copafest">
            CopaFest 2020
          </div>
        </div>
        <div class="header__lower-middle">
          <img
            class="header__az-star"
            src="/imgs/arizona_star.svg"
            alt="AZ Star"
          />
        </div>
        <div class="header__lower-right">
          <div class="header__copafest-date">
            Saturday, October 24th, 2020
          </div>
        </div>
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
	background: linear-gradient(to bottom, $az-blue 25%, white);
	font-family: "Istok Web", sans-serif;
}
</style>

<style scoped lang="scss">
@import "../assets/global.scss";

.header {
	text-align: center;
	font-family: "Lalezar", sans-serif;
}

.header__rays {
	background-image: url("/imgs/arizona_rays.svg");
	background-size: cover;
	background-position: bottom;
	height: 30vh;
}

.header__lower {
	display: flex;
	justify-content: center;
	color: white;
	text-shadow: -0.1rem -0.1rem 0 black, 0.1rem -0.1rem 0 black,
		-0.1rem 0.1rem 0 black, 0.1rem 0.1rem 0 black;
	background-color: $az-blue;
}

.header__lower-left {
	text-align: right;
}

.header__lower-middle {
	text-align: center;
}

.header__az-star {
	width: 15rem;
	height: 15rem;
	transform: translateY(-100px);
}

.header__lower-right {
	text-align: left;
}

.header__mara {
	font-size: 1.5rem;
}

.header__copafest {
	font-size: 4rem;
}

.header__copafest-date {
	font-size: 2rem;
}
</style>
