<template>
  <nav class="nav">
    <nuxt-link
class="nav__link"
to="/">
      Home
    </nuxt-link>
    <nuxt-link
class="nav__link"
to="/tailgater_registration">
      Tailgater Registration
    </nuxt-link>
    <nuxt-link
class="nav__link"
to="/volunteer">
      Volunteer
    </nuxt-link>
  </nav>
</template>

<script>
export default {
	name: "Navbar"
};
</script>

<style scoped lang="scss">
.nav {
  padding: 1rem;
	background-color: black;
  opacity: 0.9;
  position: sticky;
  top: 0;
  z-index: 10;

	&__link {
		color: white;
		font-family: "Istok Web", sans-serif;
		font-size: 1.2rem;
		height: 2rem;
    margin-right: 0.8rem;
	}
}
</style>
