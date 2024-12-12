<script>
	import '../app.css';
	import About from './About/+page.svelte';
	import Home from './+page.svelte';
	import EditPage from './EditPage/+page.svelte';
	//import Router from 'svelte-spa-router'
	import NotFound from './NotFound/+page.svelte';
	import { Router, Route } from 'svelte-routing';

	let { children } = $props();
</script>

<div class="navbar bg-neutral text-neutral-content">
	<ul class="menu menu-horizontal px-1">
		<li><a href="/">Home</a></li>
		<li><a href="/About">About</a></li>
		<li><a href="/EditPage">Edit page</a></li>
	</ul>
</div>

{@render children()}
