<template>
	<div class="columns">
		<div class="column has-text-centered">
			<div class="card">
				<div class="card-content">
					<p>
						Please Join Us For A Day Full Of Vendor Exhibits,
						Seminars, VE Testing, Card Checking, Prizes And More!​
					</p>
					<a href="/flyers/copafest_2020_flyer.jpg" target="_blank">
						Please click here for the official flyer.
					</a>
				</div>
			</div>

			<div class="is-size-6" />
			<hr />
			<i>
				Buy your raffle tickets now for a chance to win any of these
				great prizes!
			</i>

			<div class="prize-container">
				<img
					src="imgs/prizes/prize_1.jpg"
					alt="Xiegu G90 SDR 20W HF"
					title="Xiegu G90 SDR 20W HF"
				/>
				<img
					src="imgs/prizes/prize_2.jpg"
					alt="Icom IC-2730 Dual Band D-Star Mobile"
					title="Icom IC-2730 Dual Band D-Star Mobile"
				/>
				<img
					src="imgs/prizes/prize_3.jpg"
					alt="Yaesu FT-70DR Dual Band Fusion"
					title="Yaesu FT-70DR Dual Band Fusion"
				/>
			</div>

			<form
				target="paypal"
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
					value="Raffle tickets requested"
				/>

				<div style="display: none;">
					<select name="os0">
						<option value="Minimum 5 ticket purchase">
							Minimum 5 ticket purchase $10.00 USD
						</option>
						<option value="More then 5 tickets" selected="true">
							More than 5 tickets $2.00 USD
						</option>
					</select>
				</div>

				<input type="hidden" name="currency_code" value="USD" />

				<button
					type="submit"
					style="cursor: pointer; background-color: transparent; border: none"
				>
					<h3 style="color: red; font-family: sans-serif;">
						Please click here to purchase raffle tickets*
					</h3>
					<input
						type="image"
						src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
						border="0"
						name="submit"
						alt="Buy Raffle Tickets"
					/>
				</button>

				<p>
					<i>
						*All ticket sales final.<br />
						Last day to purchase tickets online wiil be Monday,
						October, 19th, 2020 @ 23:59 MST.<br />
						Single Tickets will only be available at club meetings,
						special events, or on the day of Copafest.
					</i>
				</p>

				<img
					alt=""
					border="0"
					src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
					width="1"
					height="1"
				/>
			</form>

			<div class="columns">
				<div class="column">
					General Public: Hours will be from 7:00 AM to 1:00 PM.
					Admission donation is $5.00 per person** Raffle tickets are
					$1 each. **Each admission comes with 1 entry for the door
					prize. All door prizes are to be picked up by the end of
					CopaFest. Any unclaimed door prizes will become property of
					Maricopa Amateur Association. Tailgaters: Set up begins at
					5:00 AM ​Two parking spaces are $10.00. Please click here to
					reserve your space before the big day. ​ For more
					information, contact us at: fest@copafest.org
				</div>
				<div class="column">
					<div>
						UltraStar MultiTainment Center at Ak-Chin Circle 16000 N
						Maricopa Road, Maricopa AZ
					</div>
					<div>
						<!--            <iframe-->
						<!--              width="100%"-->
						<!--              height="450"-->
						<!--              frameborder="0"-->
						<!--              style="border:0"-->
						<!--              :src="-->
						<!--                `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4yE0slTlKocRxtZoIp7yU4o&key=${NUXT_ENV_GMAPS_API_KEY}`-->
						<!--              "-->
						<!--              allowfullscreen-->
						<!--            ></iframe>-->
					</div>
					<p>
						There are also many activities available inside the
						UltraStar Multitainment Center including: laser tag,
						bowling, movies, games, dining and more. Dining and
						Hotel also available.
					</p>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					We are beginning the planning process for #CopaFest20! If
					you are interested in being on the planning committee,
					please click the Volunteer button and let us know!
				</div>
				<div class="column">
					<nuxt-link to="/volunteer">
						Volunteer
					</nuxt-link>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<form
						action="https://www.paypal.com/cgi-bin/webscr"
						method="post"
						target="_top"
					>
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input
							type="hidden"
							name="hosted_button_id"
							value="AL3TRQJ78JY6E"
						/>

						<button type="submit" class="button-donate">
							Donate
						</button>

						<img
							alt=""
							border="0"
							src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
							width="1"
							height="1"
						/>
					</form>
				</div>
				<div class="column">
					<p>
						If you have a bit of change to spare, please consider
						donating for us to continue funding future CopaFests and
						other club activities to keep the hobby of ham radio
						alive.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			NUXT_ENV_GMAPS_API_KEY: process.env.NUXT_ENV_GMAPS_API_KEY
		};
	}
};
</script>

<style scoped="true" lang="scss">
@import "../assets/global";

.prize-container {
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;

	img {
		max-width: 30vw;
		border-right: 1px solid lightgray;

		&:last-child {
			border-right: none;
		}
	}
}

.button-donate {
	margin-right: 1rem;
	max-height: 4rem;
	cursor: pointer;
	background-color: #ffc439;
	padding: 0.5rem;
	border-radius: 2rem;
	font-weight: bold;
	font-size: 1.8rem;
}
</style>
