//获取某个学生的数据集合
// 
var user_id="24110101000032A011520223841980";
var dataList;
userList["统计数据"].forEach((val,ind) => {
	if(val.user_id==user_id){
		dataList=val.data;
		$(".classes_user_panel dl:eq(0) span").html(dataList['累计阅读教材数']);
		$(".classes_user_panel dl:eq(1) span").html(dataList['累计阅读时长']);
		$(".classes_user_panel dl:eq(2) span").html(dataList['累计学习学科数']);
		$(".classes_user_panel dl:eq(3) span").html(dataList['累计分享资源数']);
		$(".classes_time_num").html(dataList['累计学习时长'])
		return false;
	}
});
//学习时间
$(function(){
	var dom = document.getElementById("study_left");
	echarts.init(dom, 'infographic');
	var myChart = echarts.init(dom);
	option = null;
	option = {
		tooltip: {
			// trigger: 'item'
			trigger: 'axis',
        	formatter: "学习时长    <br/>  {b}   :   {c}   "
		},
		xAxis: {
			type: 'category',
			data: dataList["学习时间-横轴"],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
		},
		series: [{
			data: dataList["学习时间-纵轴"],
			type: 'line',
			smooth: true
		}]
	};	
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
})

//登录次数
$(function(){
	var dom = document.getElementById("study_right");
	echarts.init(dom, 'infographic');
	var myChart = echarts.init(dom);
	option = null;
	
	option = {
		tooltip: {
			// trigger: 'item'
			trigger: 'axis',
        	formatter: "登录次数    <br/>{b} : {c}"
		},
		xAxis: {
			type: 'category',
			data: dataList["登录次数-横轴"],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		series: [{
			data: dataList["登录次数-纵轴"],
			type: 'line',
			smooth: true
		}]
	};	
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
});

//教材使用情况
$(function(){
	var dataY=dataList["教材使用情况-纵轴"];
	var dom = document.getElementById("use_left");
	echarts.init(dom, 'infographic');
	var myChart = echarts.init(dom);
	option = null;
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			right: 20,
			bottom: 40,
			data:dataList["教材使用情况-横轴"],
			icon: 'circle',
			formatter: function(name){
				var total = 0;
				var target;
				for (var i = 0, l = dataY.length; i < l; i++) {
				total += dataY[i].value;
				if (dataY[i].name == name) {
					target = dataY[i].value;
					}
				}
				return name + '     ' + ((target/total)*100).toFixed(2) + '%';
			}
		},
		series: [
			{
				name:'访问来源',
				type:'pie',
				radius: ['40%', '60%'],
				center: ['40%', '50%'],
				avoidLabelOverlap: false,
				label: {
					normal: {
						show: false,
						position: 'center'
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '18',
							fontWeight: 'bold'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:dataY
			}
		]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
	myChart.on('click', function (params) {
		console.log(params);
	});
});
//资源分享情况
$(function(){
	var dom = document.getElementById("use_right");
	echarts.init(dom, 'infographic');
	var myChart = echarts.init(dom);
	option = null;
	option = {
		tooltip: {
			trigger: 'item',
        	formatter: "资源分享情况    <br/>{b} : {c}"
		},
		xAxis: {
			type: 'category',
			data: dataList["资源分享情况-横轴"],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		series: [{
			data: dataList["资源分享情况-纵轴"],
			type: 'bar'
		}]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
});
