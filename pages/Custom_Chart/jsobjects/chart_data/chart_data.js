export default {


	fetchData() {
		const data = get_billings.data; 
		console.log(data)

		return {
			month: [ data[0].month ,  data[1].month,  data[2].month],
			wifi_count: [ data[0].wifi_count ,  data[1].wifi_count,  data[2].wifi_count],
			card_count: [ data[0].card_count ,  data[1].card_count,  data[2].card_count],
			utility_count: [ data[0].utility_count ,  data[1].utility_count,  data[2].utility_count],
			amount: [ data[0].amount/10000 ,  data[1].amount/10000,  data[2].amount/10000],
		};
	},


	option: {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				// data: [this.fetchData()[0].month, this.fetchData()[1].month, this.fetchData()[2].month]
				data: this.fetchData().month
			}
		],
		yAxis: [
			{
				type: 'value',
				name: ' Number of applications ',
				interval: 300,
				axisLabel: {
					formatter: '{value} '
				}
			},
			{
				type: 'value',
				name: 'Commission Fee',
				interval: 20,
				axisLabel: {
					formatter: '{value}  万円'
				}
			}
		],
		series: [
			{
				name: 'Wifi'   ,
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: this.fetchData().wifi_count
			},
			{
				name: 'Card',
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: this.fetchData().card_count
			},
			{
				name: 'Ultility',
				type: 'bar',
				stack: 'Ad',
				emphasis: {
					focus: 'series'
				},
				data: this.fetchData().utility_count
			},
			// {
			// name: 'Vide 1',
			// type: 'bar',
			// stack: 'Ad',
			// emphasis: {
			// focus: 'series'
			// },
			// data: [150, 232, 201]
			// },
			// {
			// name: 'Video 2',
			// type: 'bar',
			// stack: 'Ad',
			// emphasis: {
			// focus: 'series'
			// },
			// data: [150, 232, 201]
			// },
			{
				name: 'Total amount', 
				type: 'bar', 
				yAxisIndex: 1,
				data: this.fetchData().amount
			}
		]
	}
}
