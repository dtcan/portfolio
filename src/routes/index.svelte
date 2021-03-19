<script lang="ts">
	import TypedText from "../components/TypedText.svelte";
</script>
<style>
	h1, p {
		text-align: center;
	}

	h1 {
		font-family: monospace;
		font-size: 2.8em;
		font-weight: bold;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>David Canagasabey</title>
</svelte:head>

<h1><TypedText text="david canagasabey"></TypedText></h1>

<p>Some information about me goes here.</p>
