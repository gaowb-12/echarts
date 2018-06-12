$(function(){
	/* 超链接文字提示 */
			//清除所有a标签的title
			$(".tooltip").removeAttr("title");
				//替换所有a连接的#
			//$("a").each(function(){		
			//		if($(this).attr("href") == "#"){
			//			$(this).attr("href","javascript:void(0)");
			//		}
			//});
			
			$(document).on('mouseover','.tooltip',function(){
				showDiv(".tooltip");
			});
			
			showDiv(".tooltip");
			var $divTitle = $("<div class='showtitle'>"+
				    	 		"<span></span>"+
				    		  "</div>")
			$("body").append($divTitle);
			//鼠标hover显示全部内容的方法
			function showDiv(obj){
				//console.log(111)
				$(obj).hover(function (e){
					var scrollTop = $(document).scrollTop();
				    var x = e.pageX;
				    var y = e.pageY + 10 -scrollTop;
				    var $txt = $(this).text();
				    if($txt != ""){
				    	$(".showtitle").find("span").html($txt);
					    $(".showtitle").css({left:x,top:y}).show();
				    } 
				}, function () {
				    $(".showtitle").hide();
				});
			}
	//rem计算
//	(function (doc, win) {
//	    var docEl = doc.documentElement,
//	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//	        recalc = function () {
//	            var clientWidth = docEl.clientWidth;
//	            if (!clientWidth) return;
//	            if(clientWidth<=1048){
//	                docEl.style.fontSize = '100px';
//	            }else{
//	                docEl.style.fontSize = 100 * (clientWidth / 1048) + 'px';
//	            }
//	        };
//	
//	    if (!doc.addEventListener) return;
//	    win.addEventListener(resizeEvt, recalc, false);
//	    doc.addEventListener('DOMContentLoaded', recalc, false);
//	})(document, window)
	function setRem(){
	    var w=document.documentElement.clientWidth||$(document).width(); //获取浏览器可视区域宽度
	    if(w < 1204){
	      document.querySelector('html').style.fontSize = 150 +'px';
	      document.querySelector('html').style.display = "block";
	    }else{
	      document.querySelector('html').style.fontSize = 100 * ( w / 1048) + 'px';
	      document.querySelector('html').style.display = "block";
	      
	    }
	  }
		setRem();
		window.onresize=function(){
		    setRem(); //当窗口尺寸改变时，再次设置rem的值
		    
		    //平台首页--轮播图
		    var oneWidth = window.outerWidth;
			//console.log(window.outerWidth);
			$(".imgs").find("img").width(oneWidth);
		}
//页面的可视高度
	/*$("#menu").css("height",$(window).height());
	$("body").css("height",$(window).height());
	$("#content").css("height",$(window).height());
	$(".login").css("top",($(window).height()-467)/2);
	$(".login").css("left",($(window).width()-290)/2);*/
//	alert(($(window).height()-467)/2);
	/*$(".login").css("display","block");*/
	$(window).resize(function() {
 		/*$(".login").css("top",($(window).height()-467)/2);
		$(".login").css("left",($(window).width()-290)/2);
		$("#menu").css("height",$(window).height());
		$("#content").css("height",$(window).height());*/
	});
//当页面登录后
	$("header").css("display","none"); 
    $(".zhezhao").css("display","none"); 
    $(".login").css("display","none"); 
	$("#header").css("height",0);
    
//记住密码切换
	var togger=false;
		$(".jz_password").click(function(){
			if(togger==false){
				$(this).addClass("on");togger=true;
			}else{
				$(this).removeClass("on");togger=false;
			}
	})
})
	function on_submit()  {
		 	// 验证数据的合法性  
	         if(form1.username.value=="")
	         {  
//	              alert("用户名不能为空，请输入用户名!");  
	              $(".user_yanz").html("用户名不能为空，请输入用户名!");
	              form1.username.blur();  
	              return false;  
	         }  
	         if(form1.userpassword.value=="")  
	         {  
//	              alert("用户密码不能为空，请输入密码!");  
	               $(".password_yanz").html("用户密码不能为空，请输入密码!");
	              form1.username.focus();  
	              return false;  
	         }
	         if(form1.reuserpassword.value=="")  
	         {  
//	              alert("用户确认密码不能为空，请输入密码!");  
	              form1.reuserpassword.focus();  
	              return false;  
	         }  
	         if(form1.userpassword.value!=form1.reuserpassword.value)  
	         {  
//	             alert("密码与确认密码不同");  
	             form1.userpassword.focus();  
	             return false;  
	         }
	          if(form1.email.value.length==0)  
	         {  
	             for(i=0;i<form1.email.value.length;i++)  
	             {  
	                  if(form1.email.value.charAt(i)=="@")  
	                      break;  
	                  if(i==form1.email.value.length)  
	                  {  
//	                      alert("非法E-Mail地址");  
	                      form1.email.focus();  
	                      return false;  
	                  }  
	             }  
	         }  
	         else  
	         {  
//	             alert("请输入E-mail!");  
	             form1.email.focus();  
	             return false;  
	         }  
	        
	        
		 }
	function on_submit1()  {
		 	// 验证数据的合法性  
	         if(form2.j_password.value=="")
	         {  
	              alert("用户名不能为空，请输入用户名!");  
	              $("#jiumm").html("旧密码不能为空，请输入旧密码!");
	              form2.j_password.focus();  
	              return false;  
	         }  
	         if(form2.x_password.value=="")  
	         {  
	              $("#xinmm").html("新密码不能为空，请输入新密码!");
	              form2.x_password.focus();  
	              return false;  
	         }
	         if(form2.z_password.value=="")  
	         {  
				$("#zaicsrmm").html("新密码不能为空，请输入新密码!");	
	              form2.z_password.focus();  
	              return false;  
	         }  
	         if(form2.x_password.value!=form2.z_password.value)  
	         {  
//	             alert("密码与确认密码不同");
				$("#zaicsrmm").html("密码与确认密码不同");	
	             form2.z_password.focus();  
	             return false;  
	         }
	        
	        
		 }
	function selectAllDels() {  
    	var desc = document.getElementById("allChecked"); 
   		var isCheck = desc.checked;  
    	var uploadIds = document.getElementsByName("preDelCheck");
   		for(var i = 0; i < uploadIds.length; i ++ ){ 
			uploadIds[i].checked=isCheck
		}
}  

$(function(){
  $.ajaxSetup ({
      cache: false, //关闭AJAX缓存
      async:false, //同步请求
      contentType:"application/x-www-form-urlencoded;charset=utf-8",  
      complete:function(XMLHttpRequest,textStatus){  
          //通过XMLHttpRequest取得响应头，sessionstatus，  
          var sessionstatus=XMLHttpRequest.getResponseHeader("sessionstatus");   
          if(sessionstatus=="timeout"){  
              //alert("由于您长时间未操作,登录已失效,请重新登录！");
              //window.location.href = "<%=request.getContextPath()%>";
              window.parent._location();
          }  
      }  
  });  
});
