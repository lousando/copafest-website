<template>
	<div>
		<intro-banner />
		<section class="section">
			<div class="container has-text-centered">
				<div class="box">
					<p>
						Please Join Us For A Day Full Of Vendor Exhibits,
						Seminars, VE Testing, Card Checking, Prizes And More!​
					</p>
					<a href="/flyers/copafest_2020_flyer.jpg" target="_blank">
						Please click here for the official flyer.
					</a>
				</div>

				<div class="columns">
					<div class="column">
						<div class="is-size-3 has-text-weight-bold">
							General Public
						</div>
						<div>
							<p>
								Hours will be from 7:00 AM to 1:00 PM.
							</p>
							<p>
								Admission donation is $5.00 per person<span
									class="has-text-danger"
									>**</span
								>
							</p>
							<p>Raffle tickets are $1 each.</p>
							<br />
							<p class="has-text-danger">
								**Each admission comes with 1 entry for the door
								prize. All door prizes are to be picked up by
								the end of CopaFest. Any unclaimed door prizes
								will become property of Maricopa Amateur
								Association.
							</p>
						</div>

						<br />
						<p>
							For more information, contact us at:
							<a href="mailto:fest@copafest.org">
								fest@copafest.org
							</a>
						</p>
					</div>
					<div class="column">
						<div class="is-size-3 has-text-weight-bold">
							Location
						</div>
						<div>
							<figure class="image is-square">
								<iframe
									class="has-ratio"
									width="100"
									height="100"
									frameborder="0"
									style="border:0"
									:src="
										`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4yE0slTlKocRxtZoIp7yU4o&key=${NUXT_ENV_GMAPS_API_KEY}`
									"
									allowfullscreen
								></iframe>
							</figure>
						</div>
						<p>
							On top of CopaFest, there are also many activities
							available inside the UltraStar Multitainment Center
							including: laser tag, bowling, movies, games, dining
							and more. Dining and Hotel also available.
						</p>
					</div>
				</div>

				<div class="box is-size-3">
					<p>
						Raffle Prizes
					</p>
				</div>

				<div class="level grand-prize-container">
					<div class="level-item">
						<div class="card">
							<div class="card-header">
								<div class="card-header-title">
									1st Prize
								</div>
							</div>
							<div class="card-image">
								<figure class="image">
									<img
										src="imgs/prizes/prize_1.jpg"
										alt="Xiegu G90 SDR 20W HF"
										title="Xiegu G90 SDR 20W HF"
									/>
								</figure>
							</div>
							<div class="card-content">
								Xiegu G90 SDR 20W HF
							</div>
						</div>
					</div>
				</div>

				<div class="level minor-prize-container">
					<div class="level-item">
						<div class="card">
							<div class="card-header">
								<div class="card-header-title">
									2nd Prize
								</div>
							</div>
							<div class="card-image">
								<figure class="image">
									<img
										src="imgs/prizes/prize_2.jpg"
										alt="Icom IC-2730 Dual Band D-Star Mobile"
										title="Icom IC-2730 Dual Band D-Star Mobile"
									/>
								</figure>
							</div>
							<div class="card-content">
								Icom IC-2730 Dual Band D-Star Mobile
							</div>
						</div>
					</div>
					<div class="level-item">
						<div class="card">
							<div class="card-header">
								<div class="card-header-title">
									3rd Prize
								</div>
							</div>
							<div class="card-image">
								<figure class="image is-2by3">
									<img
										src="imgs/prizes/prize_3.jpg"
										alt="Yaesu FT-70DR Dual Band Fusion"
										title="Yaesu FT-70DR Dual Band Fusion"
									/>
								</figure>
							</div>
							<div class="card-content">
								Yaesu FT-70DR Dual Band Fusion
							</div>
						</div>
					</div>
				</div>

				<div class="box">
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

					<p>
						<i>
							*All ticket sales final.<br />
							Minimum online purchase is $10. Smaller increments
							will be available in-person the day of Copafest.<br />
							Last day to purchase online tickets will be Monday,
							October, 19th, 2020 @ 23:59 MST.<br />
						</i>
					</p>
				</div>

				<div class="level box">
					<div class="level-item">
						We are beginning to plan for #CopaFest20! If you are
						interested in helping, please click the Volunteer button
						and let us know!
					</div>
					<div class="level-item">
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
		</section>
	</div>
</template>

<script>
	import intro_banner from "../components/intro_banner";

	export default {
	data() {
		return {
			NUXT_ENV_GMAPS_API_KEY: process.env.NUXT_ENV_GMAPS_API_KEY
		};
	},
	components: {
		introBanner: intro_banner
	}
};
</script>

<style scoped="true" lang="scss">
@import "../assets/global";

.grand-prize-container {
	img {
		transform: scale(0.3);
	}
}

.minor-prize-container {
	img {
		transform: scale(0.3);
	}
}

.raffle-button-container {
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
}
</style>
