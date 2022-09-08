import type { BoardGame } from '../../../types/BoardGame';
import { getBoardGame } from '../../../utils/bgg';

export async function load({ params }: { params: { id: string } }): Promise<{
	boardgame: Awaited<ReturnType<typeof getBoardGame>>;
}> {
	const boardgame = await getBoardGame(params.id);

	return {
		boardgame
	} as { boardgame: BoardGame };
}

export const csr = false;
