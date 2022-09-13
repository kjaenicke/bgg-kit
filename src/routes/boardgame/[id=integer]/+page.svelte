<script>
	import { bookmarks, toggleBookmarked } from '$lib/stores/bookmarks';

	/** @type {import('./$types').PageData }*/
	export let data;

	const updateBookmarked = () => {
		toggleBookmarked({ id: data.boardgame.id, name: data.boardgame.name });
	};
</script>

<svelte:head>
	<title>BGG Kit | {data.boardgame.name}</title>
</svelte:head>

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
			<!-- Image gallery -->
			<div class="flex flex-col-reverse">
				<!-- Image selector -->
				<div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
					<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
						<button
							id="tabs-1-tab-1"
							class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
							aria-controls="tabs-1-panel-1"
							role="tab"
							type="button"
						>
							<span class="sr-only"> Angled view </span>
							<span class="absolute inset-0 overflow-hidden rounded-md">
								<img
									src={data.boardgame.thumbnail}
									alt=""
									class="h-full w-full object-cover object-center"
								/>
							</span>
							<!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
							<span
								class="ring-transparent pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
								aria-hidden="true"
							/>
						</button>

						<!-- More images... -->
					</div>
				</div>

				<div class="aspect-w-1 aspect-h-1 w-full">
					<!-- Tab panel, show/hide based on tab state. -->
					<div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
						<img
							src={data.boardgame.thumbnail}
							alt="Angled front view with bag zipped and handles upright."
							class="h-full w-full object-cover object-center sm:rounded-lg"
						/>
					</div>

					<!-- More images... -->
				</div>
			</div>

			<!-- Product info -->
			<div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
				<h1 class="text-3xl font-bold tracking-tight text-gray-900">{data.boardgame.name}</h1>

				<div class="mt-3">
					<h2 class="sr-only">Product information</h2>
					<p class="text-3xl tracking-tight text-gray-900">{data.boardgame.yearpublished}</p>
				</div>

				<!-- Reviews -->
				<div class="mt-3">
					<button on:click={updateBookmarked}>
						{#if $bookmarks?.bookmarks?.[data.boardgame.id]}
							Remove bookmark
						{:else}
							Bookmark
						{/if}
					</button>
				</div>

				<div class="mt-6">
					<h3 class="sr-only">Description</h3>

					<div class="space-y-6 text-base text-gray-700">
						<p>
							{@html data.boardgame.description}
						</p>
					</div>
				</div>

				<section aria-labelledby="details-heading" class="mt-12">
					<h2 id="details-heading" class="sr-only">Additional details</h2>

					<div class="divide-y divide-gray-200 border-t" />
				</section>
			</div>
		</div>
	</div>
</div>
