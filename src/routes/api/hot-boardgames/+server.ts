import { json, error } from '@sveltejs/kit';
import { getHotBoardGames } from '$lib/utils/bgg';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const boardGames = await getHotBoardGames();

	if (!boardGames) {
		throw error(404, `Unable to load hot board games`);
	}

	return json(boardGames);
}
