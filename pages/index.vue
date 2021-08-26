<template>
	<div>
		<intro-banner />
		<section class="section">
			<div class="container has-text-centered">
				<div class="box">
					<p v-html="indexSettings.event_pitch" />
					<a
						:href="indexSettings.event_flyer_path"
						rel="noopener"
						target="_blank"
						v-text="indexSettings.event_flyer_text"
					/>
				</div>

				<!-- sponsors list -->
				<div class="box has-text-centered">
					<h3 class="is-size-3">{{ copaFestYear }} Sponsors</h3>
					<div class="is-flex is-justify-content-center">
						<div class="card card--sponsor">
							<div class="card-image">
								<figure class="image">
									<img
										data-src="/imgs/sponsors/hro.jpg"
										alt="Ham Radio Outlet"
										title="Ham Radio Outlet"
										class="lozad"
									/>
								</figure>
							</div>
							<div class="card-content" data-v-2a183b29="">
								<a
									href="https://www.hamradio.com/"
									target="_blank"
									rel="noopener"
									>Ham Radio Outlet</a
								>
							</div>
						</div>
					</div>
				</div>

				<div class="box">
					<div class="columns">
						<div class="column">
							<div class="is-size-3 has-text-weight-bold">
								General Public
							</div>
							<div>
								<div class="notification">
									<p>
										<span class="has-text-weight-semibold"
											>Hours:</span
										>
										7:00 AM to 1:00 PM
									</p>
									<p>
										<span class="has-text-weight-semibold"
											>Admission donation:</span
										>
										$5.00/person
									</p>
									<p>
										<span class="has-text-weight-semibold"
											>Raffle tickets:</span
										>
										$1 each at the door
									</p>
								</div>
								<div class="notification is-info">
									Each admission comes with 1 entry for the
									door prize.
								</div>
								<div class="notification is-danger">
									All door prizes are to be picked up by the
									end of CopaFest. Any unclaimed door prizes
									will become property of Maricopa Amateur
									Radio Association.
								</div>
							</div>

							<br />
							<p>
								For more information, contact us at:
								<a :href="mailtoHref" rel="noopener">
									{{
										this.$store.state.globalSettings
											.copa_fest_email
									}}
								</a>
							</p>
						</div>
						<div class="column">
							<div class="is-size-3 has-text-weight-bold">
								Location
							</div>
							<div class="is-size-5">
								{{ copafestVenueName }}
							</div>
							<div class="is-size-6">
								{{ copafestVenueFullAddress }}
							</div>
							<div>
								<figure class="image is-square">
									<iframe
										class="has-ratio lozad"
										width="100"
										height="100"
										frameborder="0"
										style="border: 0"
										:data-src="`https://www.google.com/maps/embed/v1/place?key=${NUXT_ENV_GMAPS_API_KEY}&q=${encodeURIComponent(
											copafestVenueFullAddress
										)}`"
										allowfullscreen
									></iframe>
								</figure>
							</div>
						</div>
					</div>
				</div>

				<div class="box is-size-3">
					<p>Raffle Prizes</p>
				</div>

				<div class="columns is-vcentered prizes-container">
					<div
						class="column"
						v-for="(
							prize, prizeIndex
						) in indexSettings.raffle_prizes"
						:key="prize.image_path"
					>
						<div class="card">
							<div class="card-header">
								<div class="card-header-title">
									{{ getOrdinal(prizeIndex + 1) }} Prize
								</div>
							</div>
							<div class="card-image">
								<figure class="image">
									<img
										class="lozad"
										:data-src="prize.image_path"
										:alt="prize.name"
										:title="prize.name"
									/>
								</figure>
							</div>
							<div class="card-content">
								{{ prize.name }}
							</div>
						</div>
					</div>
				</div>

				<div class="box" v-if="hasRaffleTicketCutoffPassed === false">
					<div class="raffle-button-container">
						<form
							target="_blank"
							action="https://www.paypal.com/cgi-bin/webscr"
							method="post"
						>
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input
								type="hidden"
								name="hosted_button_id"
								value="X9ALR8DMAEFTN"
							/>
							<input
								type="hidden"
								name="on0"
								value="Raffle tickets ..."
							/>
							<input
								type="hidden"
								name="os0"
								value="14 raffle tickets @"
							/>
							<input
								type="hidden"
								name="currency_code"
								value="USD"
							/>
							<button
								type="submit"
								class="square-button square-button--yellow"
							>
								Buy 14 raffle tickets for $10.00 USD*
							</button>
						</form>
						<form
							target="_blank"
							action="https://www.paypal.com/cgi-bin/webscr"
							method="post"
						>
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input
								type="hidden"
								name="hosted_button_id"
								value="X9ALR8DMAEFTN"
							/>
							<input
								type="hidden"
								name="on0"
								value="Raffle tickets ..."
							/>
							<input
								type="hidden"
								name="os0"
								value="30 raffle tickets @"
							/>
							<input
								type="hidden"
								name="currency_code"
								value="USD"
							/>

							<button
								type="submit"
								class="square-button square-button--yellow"
							>
								Buy 30 raffle tickets for $20.00 USD*
							</button>
						</form>
					</div>

					<div class="notification is-info">
						Last day to purchase online tickets will be:
						{{ this.lastDayForOnlineRaffleTicketSale }}.
					</div>

					<div class="notification is-danger">
						*All ticket sales final.
					</div>
				</div>

				<div class="box">
					<div class="columns">
						<div class="column">
							We are beginning to plan for #CopaFest, if you are
							interested in helping, please click the Volunteer
							button and let us know!
						</div>
						<div class="column">
							<nuxt-link to="/volunteer">
								<button
									type="button"
									class="square-button square-button--yellow"
								>
									Volunteer
								</button>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import intro_banner from "../components/intro_banner";
import indexSettings from "../assets/settings/pages/index";
import globalSettings from "../assets/settings/global.json";
import ordinal from "ordinal";
import lozad from "lozad";
import { DateTime } from "luxon";

export default {
	mounted() {
		lozad().observe(); // lazy load our .lozad selectors
	},
	data() {
		let lastDayForOnlineRaffleTicketSale = DateTime.fromISO(
			this.$store.state.globalSettings
				.last_day_for_online_raffle_ticket_sale
		);

		let copaFestDateTime = DateTime.fromISO(
			this.$store.state.globalSettings.copa_fest_date
		);

		return {
			NUXT_ENV_GMAPS_API_KEY: process.env.NUXT_ENV_GMAPS_API_KEY,
			indexSettings,
			copaFestYear: copaFestDateTime.year,
			lastDayForOnlineRaffleTicketSale:
				lastDayForOnlineRaffleTicketSale.toLocaleString(
					DateTime.DATETIME_HUGE_WITH_SECONDS
				),
			hasRaffleTicketCutoffPassed:
				DateTime.local() > lastDayForOnlineRaffleTicketSale,
			mailtoHref: `mailto:${this.$store.state.globalSettings.copa_fest_email}`,
			copafestVenueName: globalSettings.copa_fest_venue_name,
			copafestVenueFullAddress:
				globalSettings.copa_fest_venue_full_address,
		};
	},
	components: {
		introBanner: intro_banner,
	},
	methods: {
		getOrdinal(number) {
			return ordinal(number);
		},
	},
};
</script>

<style scoped="true" lang="scss">
@import "../assets/global";

.card--sponsor {
	max-width: 300px;
}

.prizes-container {
	.image {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 400px;
	}

	img {
		max-height: 400px;
		max-width: 80%;
	}
}

.raffle-button-container {
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
}
</style>
