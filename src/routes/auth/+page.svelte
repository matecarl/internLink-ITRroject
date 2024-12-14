<script lang="ts">
	import { goto } from '$app/navigation';

	import { Auth } from '@supabase/auth-ui-svelte';
  import { ThemeSupa } from '@supabase/auth-ui-shared';

  export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	console.log(supabase);
	console.log(session);

	$: if(session) {
		goto("/");
	}
</script>

<div class="hero min-h-screen bg-base-300">
	<div class="hero-content w-[800px]">
		<div class="flex flex-col">
			<p>Create an account or login below!</p>
			<!-- Supabase Auth UI-->
			<Auth
				supabaseClient={supabase}
				theme="dark"
				appearance={{
					theme: ThemeSupa,
					style: {
						input: "width: 400px"
					}
				}}
			/>
		</div>
	</div>
</div>