const getObjValue = (obj: any) => {
	let ret;

	if (obj.$ && obj.$.value) {
		ret = obj.$.value;
	}

	return ret;
};

export function flatten<T extends object>(input: any): T {
	const out: any = {};

	if (typeof input?.$?.id === 'string') {
		out.id = input.$.id;
	}

	for (const key in input) {
		if (typeof input[key] === 'string') {
			out[key] = input[key];
		} else if (Array.isArray(input[key])) {
			if (typeof input[key][0] === 'object') {
				out[key] = getObjValue(input[key][0]);
			} else {
				out[key] = input[key][0];
			}
		} else if (typeof input[key] === 'object') {
			const val = getObjValue(input[key]);
			out[key] = val;
		}
	}

	return out;
}
