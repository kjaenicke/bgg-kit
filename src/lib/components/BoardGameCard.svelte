<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Eye } from '@steeze-ui/heroicons';
	import type { BoardGameListItem } from '$lib/types';

	export let boardGame: BoardGameListItem;

	let showDetails = false;

	function toggleShowDetails() {
		showDetails = !showDetails;
	}
</script>

<a href="/boardgame/{boardGame.id}">
	<li class="relative">
		<div
			class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
		>
			<img
				src={boardGame.thumbnail}
				alt=""
				class="pointer-events-none object-cover group-hover:opacity-75"
			/>
			<button type="button" class="absolute inset-0 focus:outline-none">
				<span class="sr-only">View details for {boardGame.name}</span>
			</button>
		</div>
		<div class="grid grid-cols-2 place-content-between gap-12">
			<div>
				<p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
					{boardGame.name}
				</p>
				<p class="pointer-events-none block text-sm font-medium text-gray-500">
					{boardGame.yearpublished}
				</p>
			</div>
			<div on:click|preventDefault={toggleShowDetails} class="flex items-center justify-self-end">
				<Icon src={Eye} theme="solid" class="text-gray-400 h-6" />
			</div>
		</div>
	</li>
</a>
