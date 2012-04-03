var chart;
var colors = Highcharts.getOptions().colors;
$("#stats-select-menu a").click(function(){	
	$("#stats-select-menu > a").removeClass("stat-nav-selected");
	$(this).addClass("stat-nav-selected");
});
function dayEfficiency(){
	chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart-block',
            type: 'column',
			height:'340'
           },
		credits: {
			enabled:false
		},
           title: {
               text: 'Efficiency Score by Day'
           },
           xAxis: {
               categories: [
                   'Sunday',
                   'Monday',
                   'Tuesday',
                   'Wednesday',
                   'Thursday',
                   'Friday',
                   'Saturday'
               ],
			title: {
                   text: 'Day of the Week'
               }
           },
           yAxis: {
               min: 0,
			max:100,
               title: {
                   text: 'Efficiency Score'
               }
           },
		legend: {
			enabled:false
		},
           tooltip: {
               formatter: function() {
                   return ''+
                   this.x +': '+ this.y;
               }
           },
           plotOptions: {
               column: {
                   pointPadding: 0.2,
                   borderWidth: 0
               }
           },
               series: [{
               data: [49, 71, 22, 98, 87, 44, 35]
           }]
       });
}
function locationEfficiency(){
	categories = ['Starbucks', 'Home', 'UGLI', 'Hatcher', 'SI Lounge'];
	data = [{
			y: 22,
			color: colors[0],
			drilldown: {
				name: 'Starbucks',
				categories: ['Starbucks - 2/16', 'Starbucks - 2/19', 'Starbucks - 2/25', 'Starbucks - 3/1'],
				data: [22, 20, 24, 22],
				color: colors[0]
			}
		},{
				y: 67,
				color: colors[1],
				drilldown: {
					name: 'Home',
					categories: ['Home - 1/15', 'Home - 1/28', 'Home - 2/14', 'Home - 3/10'],
					data: [64, 85, 70, 49],
					color: colors[1]
				}
		},{
				y: 15,
				color: colors[2],
				drilldown: {
					name: 'Ugli',
					categories: ['UGLI - 1/3', 'UGLI - 1/12', 'UGLI - 2/21', 'UGLI - 3/4'],
					data: [10, 15, 20, 15],
					color: colors[2]
				}
		},{
				y: 84,
				color: colors[3],
				drilldown: {
					name: 'Hatcher',
					categories: ['Hatcher - 1/15', 'Hatcher - 1/22', 'Hatcher - 2/17', 'Hatcher - 2/24'],
					data: [90, 78, 79, 89],
					color: colors[3]
				}
		},{
				y: 42,
				color: colors[4],
				drilldown: {
					name: 'SI Lounge',
					categories: ['SI Lounge - 2/27', 'SI Lounge - 3/1', 'SI Lounge - 3/3', 'SI Lounge - 3/15'],
					data: [40, 38, 30, 60],
					color: colors[4]
				}
		}]
	chart = new Highcharts.Chart({
           chart: {
               renderTo: 'chart-block',
               type: 'column',
			height:'340'
           },
		credits: {
			enabled:false
		},
           title: {
               text: 'Efficiency Score by Location'
           },
           xAxis: {
               categories: categories,
			title: {
                   text: 'Location'
               }
           },
           yAxis: {
               min: 0,
			max:100,
               title: {
                   text: 'Efficiency Score'
               }
           },
		legend: {
			enabled:false
		},
           tooltip: {
               formatter: function() {
                   return ''+
                   this.x +': '+ this.y;
               }
           },
           plotOptions: {
               column: {
                   pointPadding: 0.2,
                   borderWidth: 0,
				   cursor: 'pointer',
				   point: {
						events: {
							click: function() {
								var drilldown = this.drilldown;
								if (drilldown) { // drill down
									setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
								} else { // restore
									setChart(name, categories, data);
								}
							}
						}
					}
               },
				tooltip: {

	                formatter: function() {

	                    var point = this.point,

	                        s = this.x +':<b>'+ this.y +'% market share</b><br/>';

	                    if (point.drilldown) {

	                        s += 'Click to view '+ point.category +' versions';

	                    } else {

	                        s += 'Click to return to browser brands';

	                    }

	                    return s;

	                }

	            }
           },
           series: [{
            name: name,
			data: data,
			color: 'white'
           }]
       });
}	
function setChart(name, categories, data, color) {
	chart.xAxis[0].setCategories(categories);
	chart.series[0].remove();
	chart.addSeries({
		name: name,
		data: data,
		color: color || 'white'
	});
}	
function noiseEfficiency(){
	chart = new Highcharts.Chart({
           chart: {
               renderTo: 'chart-block',
               type: 'column',
			height:'340'
           },
		credits: {
			enabled:false
		},
           title: {
               text: 'Efficiency Score by Noise Level'
           },
           xAxis: {
               categories: [
                   'Starbucks',
                   'Home',
                   'UGLI',
                   'Hatcher',
                   'SI Lounge'
               ],
			title: {
                   text: 'Location'
               }
           },
           yAxis: {
               min: 0,
			max:100,
               title: {
                   text: 'Efficiency Score'
               }
           },
		legend: {
			enabled:false
		},
           tooltip: {
               formatter: function() {
                   return ''+
                   this.x +': '+ this.y;
               }
           },
           plotOptions: {
               column: {
                   pointPadding: 0.2,
                   borderWidth: 0
               }
           },
               series: [{
               data: [22, 67, 15, 88, 39]
           }]
       });
}
function lightEfficiency(){
	chart = new Highcharts.Chart({
           chart: {
               renderTo: 'chart-block',
               type: 'column',
			height:'340'
           },
		credits: {
			enabled:false
		},
           title: {
               text: 'Efficiency Score by Location'
           },
           xAxis: {
               categories: [
                   'Starbucks',
                   'Home',
                   'UGLI',
                   'Hatcher',
                   'SI Lounge'
               ],
			title: {
                   text: 'Location'
               }
           },
           yAxis: {
               min: 0,
			max:100,
               title: {
                   text: 'Efficiency Score'
               }
           },
		legend: {
			enabled:false
		},
           tooltip: {
               formatter: function() {
                   return ''+
                   this.x +': '+ this.y;
               }
           },
           plotOptions: {
               column: {
                   pointPadding: 0.2,
                   borderWidth: 0
               }
           },
               series: [{
               data: [22, 35, 45, 52, 59, 68, 75, 85, 82, 81]
           }]
       });
}			