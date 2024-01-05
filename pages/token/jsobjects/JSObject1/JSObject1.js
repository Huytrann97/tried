export default {
	create_token: (token) => {
		token= "token dang su dung";
		storeValue('token', token);
	},
	get_token: async () => {
		const token = await appsmith.store.token;
		console.log(token);
		return token;
	},
	remove_token: () => {
		removeValue('token');
	},
	remove_all_token: () => {
		clearStore();
	},
};
