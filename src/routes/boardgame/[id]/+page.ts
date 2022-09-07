import type { BoardGame } from '../../../types/BoardGame';
import { makeBGGRequest, flatten } from '../../../utils/bgg';

export async function load({
	params
}: {
	params: { id: string };
}): Promise<{ boardgame: BoardGame }> {
	const data = await makeBGGRequest({ path: `/thing?type=boardgame&id=${params.id}` });
	const boardgame = flatten(data.items.item[0]);

	return {
		boardgame
	} as { boardgame: BoardGame };
}

export const csr = false;
