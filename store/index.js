export const state = () => ({
	showNavbar: false
});

export const mutations = {
	toggleNavbar(state) {
		state.showNavbar = !state.showNavbar;
	},
	hideNavbar(state) {
		state.showNavbar = false;
	}
};
