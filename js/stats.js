var chart;
var colors = ["rgba(0,89,45,.7)","rgba(59,89,152,.7)", "rgba(255,121,0,.7)", "rgba(225,34,42,.7)", "rgba(63,0,102,.7)"]

$("#stats-select-menu a").click(function(){	
	$("#stats-select-menu > a").removeClass("stat-nav-selected");
	$(this).addClass("stat-nav-selected");
});

$("#reading-appointment").click(function(){
	alert("Reading - Hatcher has been added to your calendar on Wednesday, April 10th from 7:00-9:00pm")
});

// reset stats dashboard
function resetDashboard(){
	$("#chart-block").html("<p class='content-block'>You do your best reading:<a href='#' onclick='locationEfficiency();' class='stats-dashboard-item'>at Hatcher</a><a href='#' onclick='dayEfficiency();' class='stats-dashboard-item'>on Wednesday</a><a href='#' onclick='timeEfficiency();' class='stats-dashboard-item'>between 7:00 and 8:00pm</a></p>");
}

// begin day efficiency
function dayEfficiency(){
	chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart-block',
            type: 'column',
			height:'340',
			width:'725'
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

// begin location efficiency
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
			   height:'340',
  			   width:'725'			   
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
// end location efficiency		

// begin time of day efficiency
function timeEfficiency(){
	chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart-block',
            type: 'line',
			height:'340',
			width:'725'
           },
		credits: {
			enabled:false
		},
           title: {
               text: 'Efficiency Score by Time of Day'
           },
           xAxis: {
               categories: [
                   '6a',
                   '8a',
                   '10a',
                   '12p',
                   '2p',
                   '4p',
                   '6p',
                   '8p',
                   '10p',
                   '12a',
                   '2a',
                   '4a'
               ],
			title: {
                   text: 'Time'
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
                   if (this.y > 0){
					   return ''+
	                   this.x +': '+ this.y;
				   }
				   else{
						return ''+
		                this.x +': '+ 'no readings';
				   }
               }
           },
           plotOptions: {
               column: {
                   pointPadding: 0.2,
                   borderWidth: 0
               }
           },
               series: [{
               data: [0, 60, 55, 0, 35, 43, 76, 95, 88, 43, 36, 22]
           }]
       });
}

//begin noise efficiency
function noiseEfficiency(){
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-block',
			type: 'scatter',
			height:'340',
			width:'725'			
		},
		credits:{
			enabled:false
		},
		title: {
			text: 'Location - reading efficiency vs. decibel level'
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'Decibels'
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true,
			min:0,
			max: 90
		},
		yAxis: {
			title: {
				text: 'Comprehension'
			},
			max:6,
			showLastLabel: false,
			tickInterval:1
		},
		tooltip: {
			formatter: function() {
					return ''+
					this.x +' db, '+ this.y +' comprehension';
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 560,
			y: 40,
			floating: true,
			backgroundColor: '#FFFFFF',
			borderWidth: 1,
			itemStyle:{
				paddingBottom:'10px'
			}
		},
		plotOptions: {
			scatter: {
				marker: {
					symbol: "circle",
					radius: 9,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				}
			}
		},
		series: [{
			name: 'Starbucks',
			color: colors[0],
			data: [[80, 2]]

		},{
			name: 'Home',
			color: colors[1],
			data: [[45, 3]]

		},
		{
			name: 'UGLI',
			color: colors[2],
			data: [[60, 3]]

		},
		{
			name: 'Hatcher',
			color: colors[3],
			data: [[30, 4]]

		},{
			name: 'SI Lounge',
			color: colors[4],
			data: [[48, 2]]

		}]
	});
}

// begin light efficiency
function lightEfficiency(){
	chart = new Highcharts.Chart({
           chart: {
               renderTo: 'chart-block',
               type: 'column',
			   height:'340',
 			   width:'725'			
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

// begin subject efficiency
function subjectEfficiency(){
	chart = new Highcharts.Chart({
           chart: {
               renderTo: 'chart-block',
               type: 'column',
			   height:'340',
 			   width:'725'			
           },
		credits: {
			enabled:false
		},
           title: {
               text: 'Efficiency Score by Group'
           },
           xAxis: {
               categories: [
                   'Personal Informatics',
                   'Interaction Design',
                   'Puppies'
               ],
			title: {
                   text: 'Group'
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
               data: [85, 57, 100]
           }]
       });
}

// begin efficiency breakdown
function breakdown(){
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-block',
			type: 'scatter',
			height:'340',
			width:'725'			
		},
		credits:{
			enabled:false
		},
		title: {
			text: 'Reading Efficiency - pages per minute vs. average comprehension'
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'Pages per minute'
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true,
			min:0,
			max: 1
		},
		yAxis: {
			title: {
				text: 'Comprehension'
			},
			max:6,
			showLastLabel: false,
			tickInterval:1
		},
		tooltip: {
			formatter: function() {
					return ''+
					this.x +' ppm, '+ this.y +' comprehension';
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 550,
			y: 70,
			floating: true,
			backgroundColor: '#FFFFFF',
			borderWidth: 1,
			itemStyle:{
				paddingBottom:'10px'
			}
		},
		plotOptions: {
			scatter: {
				marker: {
					symbol: "circle",
					radius: 7,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				}
			}
		},
		series: [{
			name: 'Starbucks',
			color: colors[0],
			data: [[.25, 2], [.32, 2], [.38, 4], [.28, 3]]

		},{
			name: 'Home',
			color: colors[1],
			data: [[.51, 3], [.42, 4], [.53, 2], [.41, 3]]

		},
		{
			name: 'UGLI',
			color: colors[2],
			data: [[.33, 3], [.41, 2], [.58, 4]]

		},
		{
			name: 'Hatcher',
			color: colors[3],
			data: [[.48, 4], [.52, 4], [.55, 5]]

		},{
			name: 'SI Lounge',
			color: colors[4],
			data: [[.21, 2], [.33, 4], [.21, 3], [.11, 3]]

		}]
	});
}