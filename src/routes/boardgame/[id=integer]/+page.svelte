<script>
	/** @type {import('./$types').PageData }*/
	export let data;
</script>

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
					<h3 class="sr-only">Reviews</h3>
					<div class="flex items-center">
						<div class="flex items-center">
							<!--
                Heroicon name: mini/star

                Active: "text-indigo-500", Inactive: "text-gray-300"
              -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-indigo-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
									clip-rule="evenodd"
								/>
							</svg>

							<!-- Heroicon name: mini/star -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-indigo-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
									clip-rule="evenodd"
								/>
							</svg>

							<!-- Heroicon name: mini/star -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-indigo-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
									clip-rule="evenodd"
								/>
							</svg>

							<!-- Heroicon name: mini/star -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-indigo-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
									clip-rule="evenodd"
								/>
							</svg>

							<!-- Heroicon name: mini/star -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-gray-300"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<p class="sr-only">4 out of 5 stars</p>
					</div>
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
