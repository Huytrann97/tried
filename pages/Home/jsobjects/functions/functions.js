export default {
	topOrderedProductsChart: async () => {
		const orderedProductsCount = await getOrderProductCount.run();

		return orderedProductsCount.map(p => {
			return {
				x: p.product_name,
				y: p.total_sales_qty
			}
		})
	},
	
	orderStatusCount: async () => {
		const orders = await getOrders.run();

		const allOrders = orders.length
		const fulfilledOrders = orders.filter(o => o.status === 'DELIVERED').length;
		const unfulfilledOrders = orders.filter(o => o.status === 'UNFULFILLED').length;
		const cancelledOrders = orders.filter(o => o.status === 'CANCELLED').length;
		const shippedOrders = orders.filter(o => o.status === 'SHIPPED').length;
		const packedOrders = orders.filter(o => o.status === 'PACKED').length;

		return {
			allOrders,
			fulfilledOrders,
			unfulfilledOrders,
			cancelledOrders,
			shippedOrders,
			packedOrders,
		}
	},
	
		revenueChart: async () => {
		const revenueByMonth = await getRevenueByMonth.run();
		
		  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

		return revenueByMonth.map(r => {
			return {
				x: months[parseInt(r.month.substring(5)) - 1] + ' ' + r.month.substring(2, 4),
				y: r.total,
			}
		})
	},
}