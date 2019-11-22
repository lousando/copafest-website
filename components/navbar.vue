<template>
	<nav
		class="navbar is-fixed-top is-black is-transparent"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<nuxt-link class="navbar-item" to="/">
				CopaFest 2020
			</nuxt-link>
			<a
				role="button"
				:class="{ 'navbar-burger': true, 'is-active': this.showNavbar }"
				aria-label="menu"
				aria-expanded="false"
				@click="onClickHamburgerMenu"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div :class="{ 'navbar-menu': true, 'is-active': this.showNavbar }">
			<div class="navbar-start">
				<nuxt-link class="navbar-item" to="/tailgater_info_registration">
					Tailgater Info &amp; Registration
				</nuxt-link>
				<nuxt-link class="navbar-item" to="/volunteer">
					Volunteer
				</nuxt-link>
			</div>
			<div class="navbar-end is-hidden-mobile">
				<div class="navbar-item">
					Saturday, October 24th, 2020
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			showNavbar: false
		};
	},
	methods: {
		onClickHamburgerMenu() {
			this.showNavbar = !this.showNavbar;
		}
	}
};
</script>

<style scoped lang="scss">
.navbar-brand {
	animation: fade-in 1s ease-in-out;
}

@keyframes fade-in {
	0% {
		transform: translateX(-5vw);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
</style>
