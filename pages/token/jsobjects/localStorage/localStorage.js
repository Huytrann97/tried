export default {
  clearCache: async () => {
    await window.localStorage.clear();
    return true;
  },

  get_token: async () => {
    await this.clearCache(); // Sử dụng "this" để gọi hàm clearCache() trong cùng đối tượng
    const token = appsmith.store.token;
    console.log(token);
    return token;
  },
};
