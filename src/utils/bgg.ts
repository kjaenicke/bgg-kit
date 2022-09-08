import axios from 'axios';
import type { BoardGameListItem } from 'src/types';
import { parseString } from 'xml2js';
import { flatten } from './xml';

export async function getHotBoardGames() {
	const data = await makeBGGRequest<{ items: { item: object[] } }>({ path: '/hot?type=boardgame' });
	return data.items.item.map((i) => flatten<BoardGameListItem>(i)) ?? [];
}

export async function getBoardGame(id: string) {
	const data = await makeBGGRequest<{ items: { item: object[] } }>({
		path: `/thing?type=boardgame&id=${id}`
	});
	return flatten(data.items.item[0]);
}

interface MakeBGGRequestOpts {
	path: string;
}

const baseURL = `https://www.boardgamegeek.com/xmlapi2`;

async function makeBGGRequest<T>({ path }: MakeBGGRequestOpts) {
	const { data } = await axios.get(`${baseURL}/${path}`);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return new Promise<T>((resolve, reject) => {
		parseString(data, (err, result) => {
			if (err) {
				reject(err);
			}

			resolve(result as T);
		});
	});
}
