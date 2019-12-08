import globalSettings from "../assets/settings/global";

export const state = () => ({
	showNavbar: false,
	// from the config file
	globalSettings
});

export const mutations = {
	toggleNavbar(state) {
		state.showNavbar = !state.showNavbar;
	},
	hideNavbar(state) {
		state.showNavbar = false;
	}
};
