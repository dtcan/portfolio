<script lang="ts">
	export let segment: string;

	interface Page {
		name: string
		href: string
	}

	const pages: Page[] = [
		{ name: 'home', href: undefined },
		{ name: 'about', href: 'about' },
		{ name: 'blog', href: 'blog' }
	]
</script>

<style>
	nav {
		border-bottom: 1px solid #222;
		font-weight: 300;
		padding: 0 1em;
	}

	/*
		Reference: "Bold on Hover... Without The Layout Shift", by Chris Coyier
		https://css-tricks.com/bold-on-hover-without-the-layout-shift/
	*/
	ul {
		display: flex;
		margin: 0;
		padding: 0;
	}

	li {
		display: inline-flex;
  		flex-direction: column;
	}

	[aria-current] {
		font-weight: bold;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
	}

	a::after {
		display: block;
		content: attr(data-text);
		height: 0;
		visibility: hidden;
		overflow: hidden;
		font-weight: bold;
	}
</style>

<nav>
	<ul>
		{#each pages as page}
			<li><a aria-current="{segment === page.href ? 'page' : undefined}" href={page.href || '.'} data-text={page.name}>{page.name}</a></li>
		{/each}
	</ul>
</nav>
