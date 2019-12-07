let chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		
	},
	axisX:{
		title: "Days Of The Week"
	},
	axisY:{
		title: "Usage",
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ x: 1, y: 22 },
			{ x: 2, y: 24},
			{ x: 3, y: 45, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{ x: 4, y: 34 },
			{ x: 5, y: 36 },
			{ x: 6, y: 19 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ x: 7, y: 20 },
		]
	}]
})
chart.render()
