<script lang="ts">
	export let segment: string;

	interface Page {
		name: string
		href?: string
	}

	interface Contact {
		icon: string
		text: string
		href: string
	}

	const pages: Page[] = [
		{ name: 'home' },
		{ name: 'about', href: 'about' },
		{ name: 'projects', href: 'projects' }
	];

	const contacts: Contact[] = [
		{ icon: 'email', text: "Email", href: "mailto:david@dtcan.dev" },
		{ icon: 'github', text: "Github", href: "https://github.com/dtcan" }
	];
</script>

<style>
	nav {
		display: flex;
		border-bottom: 1px solid #222;
		padding: 0 1em;
	}

	#spacer {
		flex-grow: 1;
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
	<div id="spacer"></div>
	<ul>
		{#each contacts as contact}
			<li><a target="blank" href={contact.href} title={contact.text}>{contact.icon}</a></li>
		{/each}
	</ul>
</nav>
