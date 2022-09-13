import { json, error } from '@sveltejs/kit';
import { getBoardGame } from '$lib/utils/bgg';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }: { params: { id: string } }) {
	const { id } = params;
	const boardgame = await getBoardGame(id);

	if (!boardgame) {
		throw error(404, `Unable to find boardgame with id ${id}`);
	}

	return json(boardgame);
}
