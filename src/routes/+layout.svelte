<script>
	import '../app.css';
</script>

<div class="min-h-full bg-gray-100">
	<header class="bg-sky-700 pb-24">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="relative flex items-center justify-center py-5 lg:justify-between">
				<!-- Logo -->
				<div class="absolute left-0 flex-shrink-0 lg:static">
					<a href="/">
						<span class="sr-only">Your Company</span>
					</a>
				</div>

				<!-- Right section on desktop -->
				<div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
					<!-- Profile dropdown -->
					<div class="relative ml-4 flex-shrink-0" />
				</div>

				<!-- Search -->
				<div class="min-w-0 flex-1 px-12 lg:hidden">
					<div class="mx-auto w-full max-w-xs">
						<label for="desktop-search" class="sr-only">Search</label>
						<div class="relative text-white focus-within:text-gray-600">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<!-- Heroicon name: mini/magnifying-glass -->
								<svg
									class="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<input
								id="desktop-search"
								class="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
								placeholder="Search"
								type="search"
								name="search"
							/>
						</div>
					</div>
				</div>

				<!-- Menu button -->
			</div>
			<div class="hidden border-t border-white border-opacity-20 py-5 lg:block">
				<div class="grid grid-cols-3 items-center gap-8">
					<div class="col-span-2">
						<nav class="flex space-x-4">
							<!-- Current: "text-white", Default: "text-indigo-100" -->
							<a
								href="/"
								class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
								aria-current="page">Home</a
							>
						</nav>
					</div>
					<div>
						<div class="mx-auto w-full max-w-md" />
					</div>
				</div>
			</div>
		</div>
	</header>
	<main class="-mt-24 pb-8">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 class="sr-only">Page title</h1>
			<!-- Main 3 column grid -->
			<div class="grid grid-cols-1 items-start gap-4 lg:gap-8">
				<div class="grid grid-cols-1 gap-4 lg:col-span-2">
					<section aria-labelledby="section-1-title">
						<h2 class="sr-only" id="section-1-title">Section title</h2>
						<div class="overflow-hidden rounded-lg bg-white shadow">
							<div class="p-6">
								<slot />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
				<span class="block sm:inline" />
			</div>
		</div>
	</footer>
</div>
