<script>
	/** @type {import('./$types').PageData }*/
	export let data;
</script>

<svelte:head>
	<title>BGG Kit</title>
</svelte:head>

<div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
	<ul class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
		{#each data.boardgames as boardgame}
			<a href="/boardgame/{boardgame.id}">
				<li class="relative">
					<div
						class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
					>
						<img
							src={boardgame.thumbnail}
							alt=""
							class="pointer-events-none object-cover group-hover:opacity-75"
						/>
						<button type="button" class="absolute inset-0 focus:outline-none">
							<span class="sr-only">View details for {boardgame.name}</span>
						</button>
					</div>
					<p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
						{boardgame.name}
					</p>
					<p class="pointer-events-none block text-sm font-medium text-gray-500">
						{boardgame.yearpublished}
					</p>
				</li>
			</a>
		{/each}
	</ul>
</div>
