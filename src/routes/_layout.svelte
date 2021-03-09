<script lang="ts">
	import { onMount } from 'svelte';
	import type { Background } from './back/_base';
	import { Graph } from './back/graph/_graph';
	import Nav from '../components/Nav.svelte';

	export let segment: string;
	let background: Background;
	let canvas: HTMLCanvasElement;

	function resizeCanvas(): void {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function loop(lastTick: number): void {
    	let time: number = new Date().valueOf() / 1000;
		background.draw(canvas, time - lastTick);
    	requestAnimationFrame(() => loop(time));
	}

	onMount((): void => {
		background = new Graph();
		requestAnimationFrame(() => loop(new Date().valueOf() / 1000));
		resizeCanvas();
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
		margin: 0 0;
	}
</style>

<svelte:window on:resize={resizeCanvas}></svelte:window>

<div id="content">
	<canvas id="background" bind:this={canvas}></canvas>
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
</div>