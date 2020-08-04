import settings from "./settings/global";
import { DateTime } from "luxon";

const luxonCopaFestDate = DateTime.fromISO(settings.copa_fest_date, {
	zone: "America/Phoenix",
});

module.exports = {
	"@context": "https://www.schema.org",
	"@type": "Event",
	name: "CopaFest",
	url: "https://www.copafest.org/",
	description: "Come on down and finally put a face to that voice!",
	image: "https://www.copahams.org/imgs/mara_logo.svg",

	eventStatus: "https://schema.org/EventScheduled",
	eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",

	organizer: {
		"@type": "Organization",
		name: "Maricopa ARA",
		url: "https://www.copahams.org",
	},

	startDate: luxonCopaFestDate.set({ hours: 7 }).toISO(),
	endDate: luxonCopaFestDate.set({ hours: 13 }).toISO(),

	location: {
		"@type": "Place",
		name: "UltraStar Multi-tainment Center at Ak-Chin Circle",
		address: {
			"@type": "PostalAddress",
			streetAddress: "16000 N Maricopa Rd",
			addressLocality: "Maricopa",
			addressRegion: "AZ",
			postalCode: "85139",
			addressCountry: "USA",
		},
	},

	offers: {
		"@type": "Offer",
		description: "Raffle Tickets",
		url: "https://www.copafest.org/",
		price: "10.00",
		priceCurrency: "USD",
		availability: "https://schema.org/PreOrder",
	},
};
