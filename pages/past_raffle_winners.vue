<template>
	<section class="section">
		<div class="container is-fluid">
			<div class="content">
				<div class="box has-text-centered">
					<h2 class="is-size-2">Past Raffle Winners</h2>
					<div
						v-for="(
							winnersForTheYear, year
						) in pastRaffleWinnersSettings.past_winners"
					>
						<div :key="year">
							<h4 class="is-size-4 has-text-weight-bold">
								{{ year }}
							</h4>
							<div
								class="winners"
								:key="winner.prize"
								v-for="winner in winnersForTheYear"
							>
								<div>{{ winner.name }}</div>
								<div>{{ winner.prize }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import pastRaffleWinnersSettings from "../assets/settings/pages/past_raffle_winners.json";

export default {
	name: "volunteer",
	data() {
		return {
			pastRaffleWinnersSettings,
		};
	},
};
</script>

<style scoped>
.winners {
	display: grid;
	grid-template-columns: 50% 50%;
}
</style>
