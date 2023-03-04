<script lang="ts">
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import LastProject from "./components/LastProject.svelte";
</script>

<Header />

<main>
	<div class="body__line" />
	<div class="presentation">
		<h2>Développeuse web junior passionnée</h2>
		<p>
			Étudiante en MMI et alternante chez l’agence web Ideclap, je cherche
			une nouvelle alternance en développement web front-end.
		</p>
		<div class="presentation__category">
			<div class="presentation__mots">
				<p class="presentation__category--p">Me définir en 3 mots :</p>
				<p>Curieuse, motivée, dynamique</p>
			</div>
			<div class="presentation__maitrise">
				<p class="presentation__category--p">Je maitrise :</p>
				<p>HTML/CSS</p>
			</div>
			<div class="presentation__learning">
				<p class="presentation__category--p">J'apprends :</p>
				<p>Javascript, Typescript, Svelte</p>
			</div>
		</div>
		<div class="presentation__button">
			<a href="#">Voir mes projets dev</a>
			<a href="#">Voir mes autres projets</a>
		</div>
	</div>
	<LastProject />
</main>
<Footer />

<style>
	h2 {
		font-size: 24px;
	}
	.presentation__button {
		margin: 2vh 0;
		display: flex;
		flex-direction: column;
	}
	.presentation__button a {
		font-weight: 500;
		color: #79a671;
		text-decoration: underline;
	}
	.presentation__category--p {
		font-weight: 500;
	}
	.presentation__category p {
		padding: 0;
		margin: 0;
	}
</style>
