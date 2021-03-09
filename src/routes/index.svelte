<script lang="ts">
	import TypedText from "../components/TypedText.svelte";
</script>
<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-family: monospace;
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1><TypedText text="david canagasabey"></TypedText></h1>

<p>Some information about me goes here.</p>
