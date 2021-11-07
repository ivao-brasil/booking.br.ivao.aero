export function useUrlQuery<T>(): T {
	const search = document.location.search.replace('?', '');
	const params = search.split('&');
	const data = params.map((param) => param.split('=')).reduce((acc, val) => ({ ...acc, [val[0]]: val[1] }), {});
	return JSON.parse(JSON.stringify(data));
}
