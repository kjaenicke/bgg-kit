import type { Load } from '@sveltejs/kit';
import type { BoardGame } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load: Load = async ({
	params,
	fetch
}): Promise<{
	boardgame: BoardGame;
}> => {
	const response = await fetch(`${PUBLIC_BASE_URL}/api/boardgame/${params.id}`);
	const boardgame = await response.json();

	return {
		boardgame
	} as { boardgame: BoardGame };
};
