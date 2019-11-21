<template>
	<nav class="navbar is-black" role="navigation" aria-label="main navigation">
		<div class="navbar-menu">
			<div class="navbar-start">
				<nuxt-link class="navbar-item" to="/">
					Home
				</nuxt-link>
				<nuxt-link class="navbar-item" to="/tailgater_registration">
					Tailgater Registration
				</nuxt-link>
				<nuxt-link class="navbar-item" to="/volunteer">
					Volunteer
				</nuxt-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar {
	opacity: 0.9;
	position: sticky;
	top: 0;
	z-index: 10;
}
</style>
