<script>
	import BoardGameCard from '$lib/components/BoardGameCard.svelte';

	/** @type {import('./$types').PageData }*/
	export let data;
</script>

<svelte:head>
	<title>BGG Kit</title>
</svelte:head>

<div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
	<ul class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
		{#each data.boardgames as boardgame (boardgame.id)}
			<BoardGameCard boardGame={boardgame} />
		{/each}
	</ul>
</div>
