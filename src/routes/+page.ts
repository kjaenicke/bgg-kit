import type { BoardGame } from '../types/BoardGame';
import { makeBGGRequest, flatten } from '../utils/bgg';

export async function load(): Promise<{ boardgames: BoardGame[] }> {
	const data = await makeBGGRequest({ path: '/hot?type=boardgame' });
	const boardgames = data.items.item.map(flatten) ?? [];

	return {
		boardgames
	} as { boardgames: BoardGame[] };
}

export const csr = false;
