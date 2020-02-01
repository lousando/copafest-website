import globalSettings from "../assets/settings/global";
import { DateTime } from "luxon";

export const state = () => ({
	showNavbar: false,
	// from the config file
	globalSettings,
	copaFestYear: DateTime.fromISO(globalSettings.copa_fest_date).year
});

export const mutations = {
	toggleNavbar(state) {
		state.showNavbar = !state.showNavbar;
	},
	hideNavbar(state) {
		state.showNavbar = false;
	}
};
