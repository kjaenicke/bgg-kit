import axios from 'axios';
import { parseString } from 'xml2js';

const baseURL = `https://www.boardgamegeek.com/xmlapi2`;

interface MakeBGGRequestOpts {
	path: string;
}

export async function makeBGGRequest<T>({ path }: MakeBGGRequestOpts) {
	const { data } = await axios.get(`${baseURL}/${path}`);

	return new Promise((resolve, reject) => {
		parseString(data, (err, result) => {
			if (err) {
				reject(err);
			}

			resolve(result as T);
		});
	});
}

const getObjValue = (obj: any) => {
	let ret;

	if (obj.$ && obj.$.value) {
		ret = obj.$.value;
	}

	return ret;
};

export const flatten = (stacked: any) => {
	const out: any = {};

	if (stacked.$ && stacked.$.id) {
		out.id = stacked.$.id;
	}

	for (const key in stacked) {
		if (typeof stacked[key] === 'string') {
			out[key] = stacked[key];
		} else if (Array.isArray(stacked[key])) {
			if (typeof stacked[key][0] === 'object') {
				out[key] = getObjValue(stacked[key][0]);
			} else {
				out[key] = stacked[key][0];
			}
		} else if (typeof stacked[key] === 'object') {
			const val = getObjValue(stacked[key]);
			out[key] = val;
		}
	}

	return out;
};
