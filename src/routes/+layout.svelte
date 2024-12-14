<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte'

	let { data, children } = $props()
	let { session, supabase } = $derived(data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="bg-base-100 justify-between fixed tip-0 left-0 right-0">
	<div class="navbar max-w-3xl mx-auto justify-between">
		<!--		left side navbar-->
		<div class="">
			<a href="/" class="btn btn-ghost text-xl">Homepage</a>
			{#if session !== null}
				<a href="/user" class="btn btn-ghost">My Page</a>
			{/if}
		</div>
		<!--		right side navbar-->
		<div>
			{#if session == null}
				<button onclick={() => goto("/login")} class="btn btn-ghost text-xl">Login</button>
			{:else}
				<span class="text-white text-lg ml-2">{session.user.email}</span>
				<button onclick={async () => { await supabase.auth.signOut() }} class="btn btn-ghost text-xl">Logout</button>
			{/if}
		</div>
	</div>
</div>

{@render children()}