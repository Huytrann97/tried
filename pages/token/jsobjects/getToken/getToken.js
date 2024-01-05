export default {
	get_token: async () => {
		const token = await appsmith.store.token;
		console.log(token);
		return token;
	},
}