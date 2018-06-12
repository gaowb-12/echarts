//tab切换
$(".condition_tab li").on("click",function () {
	$(this).addClass("active").siblings().removeClass("active");
	$(".condition .condition_panel").eq($(this).index()).addClass("visible").css("visibility","visible").siblings().removeClass("visible").css("visibility","hidden");
	$(".condition").height($(".visible").height());
});
//数据渲染
var echarts_list = "";
$.ajax({
	type:"get",
	url:"js/class.json",
	dataType: "json",
	success: function (data) {
		//console.log(data);
		echarts_list = data;
		$(".classes_name em").text(data['学校名称']);
		$(".classes_name i").text(data['班级名称']);
		$(".classes_name span").text(data['学生人数']);
		$(".classes_user_panel dl:eq(0) span").text(data['累计登录次数']);
		$(".classes_user_panel dl:eq(1) span").text(data['平均使用时长']);
		$(".classes_user_panel dl:eq(2) span").text(data['使用教材']);
		$(".classes_user_panel dl:eq(3) span").text(data['生成资源总数']);
		
		var students_teachers = echarts_list['统计数据'];
		var students = [];
		$.each(students_teachers, function(i,item) {
			if(item.type=="student"){
				students.push(item);
			}
		});
		for(var i=0; i<students.length; i++){
			$(".list_table").append("<tr><td>"+students[i].user_name+"</td><td>"+students[i].data['累计登录次数']+"</td><td>"+students[i].data['累计学习时长']+"</td><td>"+students[i].data['累计阅读教材数']+"</td><td>"+students[i].data['累计阅读时长']+"</td><td>"+students[i].data['累计分享资源数']+"</td><td>"+students[i].data['累计阅读教材数']+"</td><td>"+students[i].data['资源播放时长']+"</td></tr>");
		}
		$(".condition").height($(".visible").height());
	},
	error: function () {
		
	}
});


//学习时间
$(function(){
	var dom = document.getElementById("rank_left");
	echarts.init(dom, 'infographic');
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	//app.title = '学习时间（时长）';
	
	var studyDuring = echarts_list['统计数据'];
	var studyName = [], studyTime = [];
	$.each(studyDuring, function(i,item) {
		studyName.push(item.user_name);
		studyTime.push(item.data['累计学习时长']);
	});
	
	option = {
		/*
	    title: {
	        text: '学习时间（时长）',
	        //subtext: '数据来自网络'
	    },
	    */
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['小时'],
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        data: studyName.slice(0,10)
	    },
	    series: [
	        {
	            //name: '小时',
	            type: 'bar',
	            data: studyTime.slice(0,10),
	            //color: ['#c0f3e2']
	        }
	    ]
	};
	;
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
})

//资源分享榜
$(function(){
	var dom = document.getElementById("rank_right");
	echarts.init(dom, 'infographic');
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '资源分享榜（条）';
	
	var studyDuring = echarts_list['统计数据'];
	var studyName = [], studyTime = [];
	$.each(studyDuring, function(i,item) {
		studyName.push(item.user_name);
		studyTime.push(item.data['累计分享资源数']);
	});
	
	option = {
		/*
	    title: {
	        text: '资源分享榜（条）',
	        //subtext: '数据来自网络'
	    },
	    */
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['小时']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        data: studyName.slice(10,20)
	    },
	    series: [
	        {
	            //name: '小时',
	            type: 'bar',
	            data: studyTime.slice(10,20),
	            //color: ['#c0f3e2']
	        }
	    ]
	};
	;
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
});

//使用情况
$(function(){
	var dom = document.getElementById("condition");
	echarts.init(dom, 'infographic');
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '堆叠条形图';
	
	var studyDuring = echarts_list['统计数据'];
	var studyName = [], studyTime = [], readTime = [], playTime = [];
	$.each(studyDuring, function(i,item) {
		if(item.type=="student"){
			studyName.push(item.user_name);
			studyTime.push(item.data['累计学习时长']);
			readTime.push(item.data['累计阅读时长']);
			playTime.push(item.data['资源播放时长']);
		}
	});
	
	option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['登录时长', '教材阅读时长','资源播放时长']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value'
	    },
	    yAxis: {
	        type: 'category',
	        data: studyName
	    },
	    series: [
	        {
	            name: '登录时长',
	            type: 'bar',
	            stack: '总量',
	            //color: ['#c0f3e2','#b4e3f7','#ffc1c2'],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: studyTime
	        },
	        {
	            name: '教材阅读时长',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: readTime
	        },
	        {
	            name: '资源播放时长',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: playTime
	        }	       
	    ]
	};;
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
});