export async function get({params}: any) {
	const item: string = 'hello pants!!';
	if (item)
		return {
			body: { item }
		};
	else
		return {
			status: 404
		};
}
