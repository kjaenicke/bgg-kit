import type { Load } from '@sveltejs/kit';
import type { BoardGameListItem } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load: Load = async ({
	fetch
}): Promise<{
	boardgames: BoardGameListItem[];
}> => {
	const response = await fetch(`${PUBLIC_BASE_URL}/api/hot-boardgames`);
	const boardgames = await response.json();

	return {
		boardgames
	} as { boardgames: BoardGameListItem[] };
};
