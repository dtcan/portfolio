<script lang="ts">
	import { onMount } from 'svelte';
	import type { Background } from '../back/base';
	import { Graph } from '../back/graph/graph';
	import { Sample } from '../back/sample/sample';
	import Nav from '../components/Nav.svelte';

	export let segment: string;

	const BACKGROUNDS = [Graph, Sample];
	let backgroundClass = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];

	let background: Background = new backgroundClass();
	let canvas: HTMLCanvasElement;
	let resized: boolean = false;

	const REPO_BACKGROUND_LINK = "https://github.com/dtcan/portfolio/tree/master/src/back/"

	function resizeCanvas(): void {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		resized = true;
	}

	function loop(lastTick: number): void {
		if(background) {
			let time: number = new Date().valueOf() / 1000;
			background.draw(canvas, time - lastTick, resized);
			resized = false;
			requestAnimationFrame(() => loop(time));
		}
	}

	function disableCanvas(): void {
		background = undefined;
	}

	onMount((): void => {
		resizeCanvas();
		requestAnimationFrame(() => loop(new Date().valueOf() / 1000));
	});
</script>

<style>
	#content {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	#background {
		position: fixed;
		min-height: 100vh;
		z-index: -1;
	}
	main {
		flex-grow: 1;
		padding: 2em;
		margin: 0;
	}
	footer {
		padding: 1em;
		margin: 0;
	}
</style>

<svelte:window on:resize={resizeCanvas}></svelte:window>

<div id="content">
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
	{#if background}
	<canvas id="background" bind:this={canvas}></canvas>
	<footer>
		Current background: <a target="blank" href={REPO_BACKGROUND_LINK + background.tag}>{background.name}</a>
		<small>(click <a on:click={disableCanvas} href={segment || "."}>here</a> to disable)</small>
	</footer>
	{/if}
</div>