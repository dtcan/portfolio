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

<p>
	Full-stack web developer, also familiar with low-level and functional programming<br />
	Strong theoretical background (Computer Science Specialist & Math Major @ UofT)<br />
	Always excited to learn new skills
</p>
<p>
	Email: <a target="blank" href="mailto:david@dtcan.dev">david@dtcan.dev</a><br />
	Phone: 647.336.2595<br />
	Github: <a target="blank" href="https://github.com/dtcan">dtcan</a>
</p>
