import type { BoardGameListItem } from '../types';
import { getHotBoardGames } from '../utils/bgg';

export async function load(): Promise<{
	boardgames: Awaited<ReturnType<typeof getHotBoardGames>>;
}> {
	const boardgames = await getHotBoardGames();

	return {
		boardgames
	} as { boardgames: BoardGameListItem[] };
}

export const csr = false;
