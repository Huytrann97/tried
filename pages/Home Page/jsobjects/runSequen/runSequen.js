export default {
	myFun2: async () => {
		await annualContractNumber.run();
		console.log('run', 'annualContractNumber');

		// Chờ 3 giây trước khi chạy câu truy vấn tiếp theo
		await new Promise((resolve) => setTimeout(resolve, 3000));

		await getEmailCount.run();
		console.log('run', 'getEmailCount');

		await new Promise((resolve) => setTimeout(resolve, 3000));

		await getIdAppCount.run();
		console.log('run', 'getIdAppCount');

		await new Promise((resolve) => setTimeout(resolve, 3000));

		await getLanguageCount.run();
		console.log('run', 'getLanguageCount');

		await new Promise((resolve) => setTimeout(resolve, 3000));

		await queryChartWithSelect.run();
		console.log('run', 'queryChartWithSelect');

		await new Promise((resolve) => setTimeout(resolve, 3000));

		await queryChartWithSelect1.run();
		console.log('run', 'queryChartWithSelect1');

		await new Promise((resolve) => setTimeout(resolve, 3000));

		await yearHaveContract.run();
		console.log('run', 'yearHaveContract');

		await new Promise((resolve) => setTimeout(resolve, 3000));

		await yearHaveInvoices.run();
		console.log('run', 'yearHaveInvoices');

		await new Promise((resolve) => setTimeout(resolve, 3000));

		await yearHaveRevenue.run();
		console.log('run', 'yearHaveRevenue');

		return true;
	},
};
