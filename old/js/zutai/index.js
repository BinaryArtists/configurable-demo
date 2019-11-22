//  var basePath = $("#basePath").val();
 var basePath = '..';
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});
//模拟滚动条
(function($)
{
	$(window).on("load",function(){
		$(".ul_textcontrol_on").mCustomScrollbar(
		{
			theme:"dark",
		});
		$(".avast_left_ico, .index_tabs_echarts, .tab-right").mCustomScrollbar(
		{
			theme:"dark-2",
		});
		$(".click_xuanze_chuanganqi, .click_xuanze_shebei").mCustomScrollbar(
		{
			theme:"dark-2",
		});
	});
})(jQuery);

$(function()
{ 
	//提示消息
	$('[data-toggle="tooltip"]').tooltip()
	//判断浏览器宽度选择展开还是显示左右两侧工具栏
	var win_width = $(window).width(); 
	if(win_width <= 1366)
	{
		$(".avast_left_a").hide(200);
		$(".avast_left_b").show(200);
		$(".avast_left").hide(200);
		$(".avast_right_a").hide(200);
		$(".avast_right_b").show(200);
		$(".avast_right").hide(200);
	}else
	if(win_width >=1367)
	{
		$(".avast_left_a").show(200);
		$(".avast_left_b").hide(200);
		$(".avast_left").show(200);
		$(".avast_right_a").show(200);
		$(".avast_right_b").hide(200);
		$(".avast_right").show(200);
	}
});
$(function()
{
	/*网格是否显示 --》以更换图片进行填充*/
	$(".avast_top_icon_a_11").click(function(){
		
		$("#avast_index").toggle();
	});
	//保存
	$(".avast_top_icon_a_1").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_1_1");
	});
	$(".avast_top_icon_a_1").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_1_1");
	});
	//撤销
	$(".avast_top_icon_a_2").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_2_1");
	});
	$(".avast_top_icon_a_2").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_2_1");
	});
	//取消撤销
	$(".avast_top_icon_a_3").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_3_1");
	});
	$(".avast_top_icon_a_3").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_3_1");
	});
	//上中下对齐
	$(".avast_top_icon_a_5").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_5_1");
	});
	$(".avast_top_icon_a_5").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_5_1");
	});
	//水平垂直等间距
	$(".avast_top_icon_a_6").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_6_1");
	});
	$(".avast_top_icon_a_6").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_6_1");
	});
	//图层顺序调整
	$(".avast_top_icon_a_7").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_7_1");
	});
	$(".avast_top_icon_a_7").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_7_1");
	});
	//成组
	$(".avast_top_icon_a_8").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_8_1");
	});
	$(".avast_top_icon_a_8").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_8_1");
	});
	//取消成组
	$(".avast_top_icon_a_9").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_9_1");
	});
	$(".avast_top_icon_a_9").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_9_1");
	});
	//网格
	$(".avast_top_icon_a_11").on("mouseenter",function(){
		$(this).addClass("avast_top_icon_a_11_1");
	});
	$(".avast_top_icon_a_11").on("mouseleave",function(){
		$(this).removeClass("avast_top_icon_a_11_1");
	});
	//左侧展开隐藏
	$(".avast_left_a").click(function(){
		
		$(this).hide();
		$(".avast_left_b").show(200);
		$(".avast_left").hide(200);
	});
	$(".avast_left_b").click(function(){
		
		$(this).hide();
		$(".avast_left_a").show(200);
		$(".avast_left").show(200);
	});
	//右侧展开隐藏
	$(".avast_right_a").click(function(){
		
		$(this).hide();
		$(".avast_right_b").show(200);
		$(".avast_right").hide(200);
	});
	$(".avast_right_b").click(function(){
		
		$(this).hide();
		$(".avast_right_a").show(200);
		$(".avast_right").show(200);
	});
});
//图形放置和编辑
$(function() 
{ 
   
	//自定义文字颜色按钮样式
	var font_color = $(".font_color");
	font_color.find(".jPicker").addClass("Icon_font_color");
	font_color.find(".Icon").addClass("Icon_font_span");
	font_color.find(".Alpha").addClass("Alpha_color");
	font_color.find(".Image").addClass("Img_font_color");
	/** 让左侧工具栏展开与折叠 **/
	$(".avast-left-h2").on("click",function()
	{
		if($(this).siblings(".avast-left-div").css("display")=='none')
		{
			
			$(this).siblings(".avast-left-div").slideDown(300);
			$(this).removeClass("ui-icon-triangle-1-e");
			$(this).addClass("ui-icon-triangle-1-s");
		}else
		{
			$(this).siblings(".avast-left-div").slideUp(300);
			$(this).removeClass("ui-icon-triangle-1-s");
			$(this).addClass("ui-icon-triangle-1-e");
		}
	})
	/** 让左侧工具栏可拖动 **/
		//文本输入//svg图形//数值//开关//图表//组态库//设备通信//图形
	var  l_draggable = $(".avast_left_txt span, .avast_left_svg,.tabs_echarts_SZ, .tabs_echarts_KG, .tabs_echarts_img, .avast_left_ico li, .tabs_equipment, .avast_left_zheng , .avast_left_yuan");
	l_draggable.draggable(
	{
		appendTo:".avast_index_li",
		helper:"clone",
		addClass:false,
		revert: false,
		scope:'a',
		cursor:"move"
    });
	/** 让编辑区接收拖动过来的元素 **/
	$(".avast_index_li").droppable(
	{
		activeClass: "ui-state-default",
		hoverClass: "ui-state-hover",
		scroll: false,
		scope:'a',		
		drop:function(event, ui)
		{
			//克隆并放置元素
			var el = ui.helper.clone();
			var wl = el.appendTo($(this)).css("margin","0");
			
			//放置后允许拖动
			wl.draggable(
			{
				opacity: 1,
				containment:'.avast_index_li',
				scroll: false,
			});
			//放置后允许拖拽
			wl.resizable(
			{
				addClass:false,
				containment:'.avast_index_li',
				handles:"n,e,s,w,se,sw,ne,nw" ,
			});
			//为每个元素初始化样式
			wl.css({"transform":"rotate(0deg)","z-index":"1","border-style":"solid","border-width":"0px","border-color":"rgba(0, 0, 0, 0)","opacity":"1","font-weight":"400"});
			wl.addClass("index_html"); //对齐方式
			wl.addClass("edit_html"); // 编辑方式
			wl.addClass("html");
			wl.siblings(".html").removeClass("html");
			//初始化文本链接按钮显示
			wl.find(".avast_left_txt_div_img").remove();
			wl.find(".avast_left_text").show();
			//初始化文本链接样式
			wl.find(".avast_width").parents(".avast_left_txt_div_span").css({"width":"120px","height":"35px","line-height":"35px"});
			//初始化时间控件
			wl.find(".avast_left_text").parents(".avast_left_time").css({"width":"180px","height":"35px","line-height":"35px"});
			wl.find(".add-time").addClass("time");
			//初始化按钮样式
			wl.find(".avast_link_bottom").parents(".avast_left_txt_div_span").css({"width":"120px","height":"40px","background-color":"#5bc0de","color":"#fff","line-height":"40px"});
			//初始化上传图片显示和样式
			wl.find(".avast_left_shangchuan_img").show();
			wl.find(".avast_left_shangchuan_img").parents(".avast_left_shangchuan").css({"width":"60px","height":"60px"});	
			//初始化图表
			var chart_type = wl.find("img").attr("id");
			if(undefined != chart_type){
			   var src = "./html/"+chart_type+".html";
			   wl.find(".iframe").append('<iframe class="avast_iframe" frameborder="0" scrolling="no" src="'+src+'"></iframe>');
			}
			wl.find(".iframe").show();

			//初始化图表宽高
			wl.find(".avast_sensor").parents(".tabs_echarts_img").css({"width":"500px","height":"300px"});
			wl.find(".avast_sensor img").remove();
			//初始化数值
			wl.find(".avast_sensor_SZ img").remove();
			wl.find(".avast_sensor_SZ").parents(".tabs_echarts_SZ").css({"width":"100px","height":"30px","border":"1px solid #ddd","background-color":"#fff","border-radius":"5px","text-align":"center","line-height":"30px"});
			wl.find(".avast_sensor_SZ").find(".avast_sensorSZ").show();
			//初始化开关
			wl.find(".avast_sensor_png").remove();
			wl.find(".avast_sensor_KG").parents(".tabs_echarts_A").css({"width":"100px","height":"44px"});
			wl.find(".avast_sensor_KG").parents(".tabs_echarts_B").css({"width":"100px","height":"154px"});
			wl.find(".avast_sensor_KG").parents(".tabs_echarts_C").css({"width":"100px","height":"63px"});
			wl.find(".avast_sensor_KG").parents(".tabs_echarts_D").css({"width":"100px","height":"100px"});
			wl.find(".avast_sensor_KG").find(".avast_sensorKG").show();
			//初始化设备通信
			wl.find(".tabs_equipment_off").remove();
			wl.find(".tabs_equipment_on").show();
			wl.find(".tabs_equipment_on").parents(".tabs_equipment").css({"width":"60px","height":"60px"});
			//抛弃原事件从新绑定
			/**兼容低版本浏览器动态增加宽高**/
			$(wl).one("mouseenter" , function()
			{
				var width_x = $(this).css("width");
				var height_y = $(this).css("height");
				$(this).css("width",width_x );
				$(this).css("height",height_y);
			});
			//初始化时间插件
			if(wl.hasClass("avast_left_time"))
			{
				startTime();
			}
			/**动态添加编辑区事件**/
				//svg
			if(wl.hasClass("avast_left_svg"))
			{
				wl.addClass("html_svg");
				wl.removeClass("avast_left_svg");
			}
				//数值
			if(wl.hasClass("tabs_echarts_SZ"))
			{
				wl.addClass("tabs_echartss_avastZ");
				wl.removeClass("tabs_echarts_SZ");
			}
				//开关类型
			if(wl.hasClass("tabs_echarts_KG"))
			{
				wl.addClass("tabs_echarts_avastKG");
				wl.removeClass("tabs_echarts_KG");
			}
			//图表类型
			if(wl.hasClass("tabs_echarts_img"))
			{
				wl.addClass("tabs_echarts_avsstIMG");
				wl.removeClass("tabs_echarts_img");
			}

			if( wl.parent(".avast_index_li").find(".tabs_equipment").hasClass("history"))
			{
				wl.parent(".avast_index_li").find(".tabs_equipment").addClass("tabs_equipment_in");
			}else
			{
				wl.parent(".avast_index_li").find(".tabs_equipment").addClass("tabs_equipment_in");
				wl.parent(".avast_index_li").find(".tabs_equipment").addClass("tabs_equipment_ino");
			}
			wl.removeClass("tabs_equipment");
			if( wl.hasClass("avast_left_zheng"))
			{
				wl.addClass("avast_leftZheng");
				wl.removeClass("avast_left_zheng");
			}
			if( wl.hasClass("avast_left_yuan"))
			{
				wl.addClass("avast_leftYuan");
				wl.removeClass("avast_left_yuan");
			}
			bindClick(wl);
		}
	});
});
/*** 编辑区事件 ***/
function bindClick(avast)
{
	$(avast).on("mouseup mousedown" , function()
	{				

		//放置后允许拖拽
		$(this).resizable(
		{
			addClass:false,
			containment:'.avast_index_li',
			handles:"n,e,s,w,se,sw,ne,nw" ,
		});
		//动态添加元素当前时间指定遍历元素
		if(!$(this).hasClass("html"))
		{
			$(this).addClass("html");
		}
		//删除禁用宽高
		$("#avast_input_kuangaoX").removeAttr("disabled","disabled");
		$("#avast_input_kuangaoY").removeAttr("disabled","disabled");
		$(this).siblings(".html").removeClass("html");
		//删除同胞元素拖拽事件
		$(this).siblings(".ui-resizable").resizable("destroy");
		//如果为文本编辑器类型则显示和传感器文本编辑器
		if($(this).hasClass("avast_left_txt_div_span") || $(this).hasClass("tabs_echartsSZ") || $(this).hasClass("avast_left_time"))
		{
			$(".avast_text").show();
		}else
		{
			$(".avast_text").hide();
		}
		//如果为超链接则显示
		if($(this).hasClass("avast_link"))
		{
			$(".avast_text_link").show();
		}else
		{
			$(".avast_text_link").hide();
		}
		/** 如果元素为自定义图片则绑定 **/
		if($(this).hasClass("avast_left_shangchuan"))
		{
			$(".index_file").show();
		}else
		{
			$(".index_file").hide();
		}
		/**图表库**/
		//绑定传感器
		$(this).parent(".avast_index_li").find(".tabs_echarts_avsstIMG").addClass("tabs_echartsIMG");
		$(this).siblings(".tabs_echartsIMG").removeClass("tabs_echartsIMG");	
			//绑定传感器数值文本编器
		$(this).parent(".avast_index_li").find(".tabs_echartss_avastZ").addClass("tabs_echartssZ");
		$(this).siblings(".tabs_echartssZ").removeClass("tabs_echartssZ");
			//绑定传感器数值
		$(this).parent(".avast_index_li").find(".tabs_echartss_avastZ").addClass("tabs_echartsSZ");
		$(this).siblings(".tabs_echartsSZ").removeClass("tabs_echartsSZ");
		//绑定传感器开关
		$(this).parent(".avast_index_li").find(".tabs_echarts_avastKG").addClass("tabs_echartsKG");
		$(this).siblings(".tabs_echartsKG").removeClass("tabs_echartsKG");
		//传感器数值事件操作
		if( $(this).hasClass("tabs_echartsSZ"))
		{
			$(".tubiao_transparent_1").show();
		}else
		{
			$(".tubiao_transparent_1").hide();
		}
			//判断是否可以输入文字显示连接
		if( $(this).hasClass("tabs_echartsSZ"))
		{
			$("#textarea").attr("disabled","disabled");
		}else
		{
			$("#textarea").removeAttr("disabled","disabled");
		}
		//传感器开关事件操作//传感器图表操作//设备通信
		if( $(this).hasClass("tabs_echartsKG") || $(this).hasClass("tabs_echartsIMG") || $(this).hasClass("tabs_equipment_in") || $(this).hasClass("tabs_echartsSZ"))
		{
			$(".avast_chuanganqi").show();
		}else
		{
			$(".avast_chuanganqi").hide();
		}
			//开关图形自定义
		if( $(this).hasClass("tabs_echarts_ZDY"))
		{
			$(".avast-zidingyi-kaiguan").show();
		}else
		{
			$(".avast-zidingyi-kaiguan").hide();
		}
		/** SVG图层编辑相关事件**/
		if($(this).hasClass("html_svg"))
		{
			$(".avast_index_index").hide();
			$(".index_svg").show();	
		}else
		{
			$(".avast_index_index").show();
			$(".index_svg").hide();
		}			
		/** 组态库 **/
		$(this).parent(".avast_index_li").find(".Component_library").addClass("ComponentLibrary");
		/** 图层旋转 有问题待修复 **/
		if ($(this).find(".ui-resizable-a").length != 1)
		{
			$(this).append("<div class='ui-resizable-a'></div>")
		};
		$(this).siblings(".ui-draggable").find(".ui-resizable-a").remove();
		/*** 显示图层上下级编辑面板***/
		$(".avast_index_top_txt").show();
		/***显示编辑区面板***/
		$(".avast_index_left_txt").show();
		
		/**************************************获取传感器隐藏域数据并更新传感器面板*******************************************/
		if($(".avast_chuanganqi").css("display") == "block")//是否执行传感器事件
		{
			if(!$(this).hasClass("CGQ"))//判断标识只执行一次事件
			{
				$(this).addClass("CGQ");//添加标识
				$(".add_choice_chuanganqi").html("");// 清空传感器显示
			    var flag = $(this).find(".avast_chuanganqi_ico").attr("flag"); //获取图表类型
				if("yibiao" == flag)//是仪表盘则显示最大值和最小值
				{
				   $("#_yibiao").show();
				}else
				{
				   $("#_yibiao").hide();
				}
				
				if("tongxin" == flag || "history" == flag)
				{
				    $(".html").find(".index_choice_chuanganqi").each(function(){  
						var id = $(this).attr("title");
						var txtStr = $(this).text();
						var txt = $.trim(txtStr);
						if(txt.length > 5){
						   txt = txt.substring(0,5);
						}
						$(".add_choice_chuanganqi").append("<li class='li_choice_chuanganqi' title='"+txtStr+"' sensorId='"+id+"'>" + '<div class="dele_choice_chuanganqi"></div>' +txt+"</li>");
		
					});
				}else
				{
					//是否显示时间
					if($(".html").find(".st").attr("title") == "1"){
					   $(".tubiao_transparent_2").addClass("tubiao_transparent_3");
					   $(".html").find("._time").show();
					}else{
					   $(".tubiao_transparent_2").removeClass("tubiao_transparent_3");
					   $(".html").find("._time").hide();
					}
					//获取当前元素title值
					$(".add_choice_shebei").html("");//清空设备
					
					var max_input = $(this).find(".index_choice_sc").find(".index_choice_max").val();
					if(undefined == max_input){
						$("#_max").val("");
					}else{
						$("#_max").val(max_input);
					}
					var min_input = $(this).find(".index_choice_sc").find(".index_choice_min").val();
					if(undefined == min_input){
						$("#_min").val("");
					}else{
						$("#_min").val(min_input);
					}
					var title = $(this).find(".index_choice_shebei").attr("title");
					if(undefined != title && ""!=title){
						getSensor(title);
						//获取当前元素txt值
						var textStr = $(this).find(".index_choice_shebei").text();
						var text = $.trim(textStr);
						if(text.length > 5){
						   text = text.substring(0,5);
						}
						//更新面板显示值
						$(".add_choice_shebei").html('<li class="li_choice_shebei" title="'+textStr+'" deviceId="'+title+'">' + '<div class="dele_choice_shebei"></div>' + text + '</li>');	
						//设备删除事件绑定
						dele_choice(".dele_choice_shebei");
						//更新面板选中值
						$(".click_li_shebei").each(function()
						{
							var add_title = $(this).attr("title");
							if(add_title == title)
							{
								$(this).find(".click_span_shebei").addClass("click_yes_shebei");
							}else
							{
								$(this).find(".click_span_shebei").removeClass("click_yes_shebei");
							}
						});
						/**********************更新传感器********************/
						var sel_num = $(this).find(".avast_chuanganqi_ico").attr("title");
						var sel = 1;
						$(".html").find(".index_choice_chuanganqi").each(function()
						{  
							var id = $(this).attr("title");
							var snameStr = $(this).text();
							var sname = snameStr;
							if(sname.length > 5){
							   sname = sname.substring(0,5);
							}
							$(".add_choice_chuanganqi").append("<li class='li_choice_chuanganqi' title='"+snameStr+"' sensorId='"+id+"'>" + '<div class="dele_choice_chuanganqi"></div>' +sname+"</li>");
							//传感器删除事件绑定
							dele_chuanganqi(".dele_choice_chuanganqi");
							$(".click_li_chuanganqi").each(function(){
								var add_title = $(this).attr("sensorId");
								if(id == add_title){
								   $(this).find(".click_span_chuanganqi").removeClass("click_yes_chuanganqi");
								   $(this).find(".click_span_chuanganqi").addClass("click_yes_chuanganqi");
								   sel++;
								}
							});
						});
						if(undefined!=sel_num && sel > sel_num){
							$(".click_span_chuanganqi").not(".click_yes_chuanganqi").parent(".click_li_chuanganqi").attr("disabled","disabled");
						}
					}else{
					   $(".click_li_shebei").find(".click_span_shebei").removeClass("click_yes_shebei");
					   $(".click_li_chuanganqi").find(".click_span_chuanganqi").removeClass("click_yes_chuanganqi");
					}
				}
			}
		}
	});
	
	/** 动态获取当前元素相关属性 **/
	$(avast).on("mousemove" ,function()
	{
		if($(this).hasClass("html"))
		{
			// 读取边框宽
			var this_border = $(".html").css('border-right-width');
			var this_width = this_border.replace(/[a-z]/g,"");			
			$("#avast_border").val(this_width);
			if(this_width >= 50)
			{
				$(".avast_border_jia").attr("disabled","disabled");
			}else
			{
				$(".avast_border_jia").removeAttr("disabled","disabled");	
			};
			if(this_width <= 0)
			{
				$(".avast_border_jian").attr("disabled","disabled");
			}else
			{
				$(".avast_border_jian").removeAttr("disabled","disabled");	
			};
			//读取z-index
			var this_Zindex = $(".html").css('z-index'); 
			if( this_Zindex >= 999)
			{
				$(".move_span_top").attr("disabled","disabled");
				$(".move_span_most_top").attr("disabled","disabled");
				
			}else
			{
				$(".move_span_top").removeAttr("disabled","disabled");
				$(".move_span_most_top").removeAttr("disabled","disabled");

			};
			if( this_Zindex <= 0)
			{
				$(".move_span_bottom").attr("disabled","disabled");
				$(".move_span_most_bottom").attr("disabled","disabled");
				
			}else
			{
				$(".move_span_bottom").removeAttr("disabled","disabled");
				$(".move_span_most_bottom").removeAttr("disabled","disabled");
			};
			//读取元素背景色
			var this_backgroudn_color = $(".html").css("background-color");
			$("input.dropdown-toggle").css("background-color",this_backgroudn_color);
			//读取元素边框色
			var this_border_color = $(".html").css("border-color");
			$("input.dropdown-border").css("background-color",this_border_color);
			//读取元素圆角
			var this_borderRadius = $(".html").css("border-top-left-radius");//兼容IE9
			var this_border_radius = this_borderRadius.replace(/[a-z]/g,"");
			$("#amount").val(this_border_radius);
			var this_border_radiusW = (this_border_radius / 1000)*100 + "%";
			$(".avast_yuanjiao").find(".ui-slider-handle").css("left",this_border_radiusW);
			var this_border_radiusH = (1 - this_border_radius / 1000)*100 + "%";
			$(".avast_yuanjiao").find(".ui-slider-range").css("width",this_border_radiusH);
			//读取元素透明度
			var this_opacity = $(".html").css("opacity");
			var this_opacityS = this_opacity * 10;
			$("input.avast_touming_touming").val(this_opacityS);
			var this_opacityW = this_opacity * 100 + "%";
			$(".avast_touming").find(".ui-slider-handle").css("left",this_opacityW);
			var this_opacityH = 100 - (this_opacity * 100) + "%";
			$(".avast_touming").find(".ui-slider-range").css("width",this_opacityH);
			//读取文本框内容
			var avast_text_txt = $(".html").find(".avast_left_text").text();
			if( $(".html").hasClass("avast_left_txt_div_span"))
			{
				var avast_textarea = avast_text_txt.replace(/<br>/ig, "\n").replace(/&nbsp;/g, "\s");
				$("#textarea").val(avast_textarea);
			}else
			{
				$("#textarea").val("");
			}
			if($(".html").hasClass("avast_link"))
			{
				//获取超链接
				var Alink = $(".html a").attr('href');
				$("#avast_text_link_input").val(Alink);
				//获取超链接状态
				if($(".html").find(".avast_link_none").css("display") == "none")
				{
					$(".avast_text_link_2").addClass("avast_text_link_3");
				}else
				{
					$(".avast_text_link_2").removeClass("avast_text_link_3"); 
				}
			}
			//读取元素位置
			var position_x = $(".html").css("top");
			var absolute_x = position_x.replace(/[^0-9\.]/g,"");
			$("input.avast_input_weizhiX").val(absolute_x);
			var position_y = $(".html").css("left");
			var absolute_y = position_y.replace(/[^0-9\.]/g,"");
			$("input.avast_input_weizhiY").val(absolute_y);
			//读取元素大小
			var width_x = $(".html").css("width");
			var width_px_x = width_x.replace(/[^0-9\.]/g,"");
			$("input.avast_input_kuangaoX").val(width_px_x);
			var height_y = $(".html").css("height");
			var height_px_y = height_y.replace(/[^0-9\.]/g,"");
			$("input.avast_input_kuangaoY").val(height_px_y);
			/*读取元素旋转角度*/
			var lBxuanzhuan = $(".html").css("rotate");
			if(undefined != lBxuanzhuan && lBxuanzhuan != 0 )
			{
				 lBxuanzhuan = lBxuanzhuan.replace(/[a-z]/g,"");
			}
			$("input.avast_xuanzhuan_xuanzhuan").val(lBxuanzhuan);
			var this_transformW = (lBxuanzhuan / 360)*100 + "%";
			$(".avast_xuanzhuan").find(".ui-slider-handle").css("left",this_transformW);
			var this_transformH = (1 - lBxuanzhuan / 360)*100 + "%";
			$(".avast_xuanzhuan").find(".ui-slider-range").css("width",this_transformH);
		}
	});
	//点击或按下非元素本身删除元素所绑定相关事件
	$(function()
	{
		$(document).on("click mousedown",function(e)
		{
			var html_length = $(".html").length;
			if(html_length >= 1)
			{
				var target = $(e.target);
				if(target.closest(".html").length == 0 && target.closest(".avast_index_top_txt").length == 0 && target.closest(".avast_index_left_txt").length == 0 && target.closest(".avast-container").length == 0 && target.closest(".avast_chuanganqi").length == 0 && target.closest(".avast_text").length == 0 && target.closest(".index_file").length == 0  && target.closest(".right_click").length == 0 && target.closest(".avast-zidingyi-kaiguan").length == 0 && target.closest(".zidiying-index").length == 0   && target.closest(".dele_choice_shebei").length == 0 && target.closest(".dele_choice_chuanganqi").length == 0)
				{
				
					$(".avast_index_li").find(".ui-resizable").resizable("destroy");
					$(".ui-resizable-a").remove();
					$(".html").removeClass("html");
					//顶部面板
					$(".avast_index_top_txt").hide();
					//右侧面板
					$(".avast_index_left_txt").hide();
					//颜色面板
					$(".avast-container").hide();
					//传感器
					$(".avast_chuanganqi").hide();
					//文本编辑器
					$(".avast_text").hide();
					//文本编辑器功能
					$(".ul_textcontrol_on").hide();
					//自定义图片
					$(".index_file").hide();
					//自定义开关图片
					$(".avast-zidingyi-kaiguan").hide();
					//删除传感器标识
					$(".CGQ").removeClass("CGQ");

				};
			}	
		})
	});
}
// 时间控件
function startTime() 
{  
    var today = new Date();  
    var y = today.getFullYear();  
    var M = today.getMonth()+1;  
    var d = today.getDate();  
    var w = today.getDay();  
    var h = today.getHours();  
    var m = today.getMinutes();  
    var s = today.getSeconds();  
    //var week=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];  
    // add a zero in front of numbers<10  
    m = checkTime(m);  
    s = checkTime(s);  
    $('.time').html(y+'-'+M+'-'+d+ ' ' +h+':'+m+':'+ s );//可改变格式  
    t = setTimeout(startTime, 500);  
    function checkTime(i) {  
        if (i < 10) {  
            i = "0" + i;  
        }  
        return i;  
    }  
} 

/*** 操作面板允许拖动 ***/
$(function(e)
{					
	//传感器面板拖动
	$(".avast_chuanganqi").draggable(
	{
		opacity: 0.5,
		handle: ".avast_chuanganqi_title",
		containment:'.index',
		scroll: false,
	});
	//元素上传面板拖动
	$(".index_file").draggable(
	{
		opacity: 0.5,
		 handle: ".index_file_title",
		containment:'.index',
		scroll: false,
	});
	//允许文本编辑面板拖动
	$(".avast_text").draggable(
	{
		opacity: 0.5,
		handle: ".avast_text_title",
		containment:'.index',
		scroll: false,
	});
});
/*** 文本编辑面板 ***/
$(function(e)
{
	//动态更新超链接
	$("#avast_text_link_input").on('input propertychange', function()
	{
		var link = $(this).val();
		
		if( link.indexOf("http://")>=0 || link.indexOf("https://")>=0 )
		{
			var str = $.trim(link);
		}
		else
		{
			var str = 'http://' + $.trim(link);
		}
		$(".html a").attr('href',str);

	});
	//是否允许点击超链接
	$(".avast_text_link_2").on("click", function()
	{
		$(this).toggleClass("avast_text_link_3");
		if($(this).hasClass("avast_text_link_3"))
		{
			$(".html").find(".avast_link_none").hide();
		}else
		{
			$(".html").find(".avast_link_none").show();
		}
	});
	//动态更新文本内容
	$("#textarea").on('input propertychange', function()
	{
		var textarea = $(this).val().replace(/(\r)*\n/g,"<br>").replace(/\s/g,"&nbsp;");
		$(".html").find(".avast_left_text").html(textarea)
	});
	//更新文字大小
	$(".font_size").on("click", function()
	{
		$(".ul_font_size").show();
		if( $(".ul_font_line").css("display") != 'none' )
		{  
			$(".ul_font_line").hide();
		}  
		if( $(".ul_font_aling").css("display") != 'none' )
		{  
			$(".ul_font_aling").hide();
		}  
		if( $(".ul_font_padding").css("display") != 'none' )
		{  
			$(".ul_font_padding").hide();
		}						
	});
	$(".li_font_size").on("click", function()
	{
		$(".ul_font_size").hide();
		var li_font_size = $(this).text();
		var font_size = li_font_size.replace(/[^0-9]/g,"") + "px";
		$(".html").css("font-size",font_size);
	});
	//更新文本行高
	$(".font_line").on("click", function()
	{
		$(".ul_font_line").show();
		if( $(".ul_font_size").css("display") != 'none' )
		{  
			$(".ul_font_size").hide();
		}
		if( $(".ul_font_aling").css("display") != 'none' )
		{  
			$(".ul_font_aling").hide();
		}
		if( $(".ul_font_padding").css("display") != 'none' )
		{  
			$(".ul_font_padding").hide();
		}
	});
	$(".li_font_line").on("click", function()
	{
		$(".ul_font_line").hide();
		var li_font_size = $(this).text();
		var font_size = li_font_size.replace(/[^0-9\.]/g,"");
		$(".html").css("line-height",font_size);
		
	});
	//行高自适应
	$(".li_font_line_height").on("click", function()
	{
		$(".ul_font_line").hide();
		var li_font_line_height = $(".html").css("height");
		$(".html").css("line-height",li_font_line_height);
		
	});
	//更新文本左中右
	$(".font_aling").on("click", function()
	{
		$(".ul_font_aling").show();
		if( $(".ul_font_size").css("display") != 'none' )
		{  
			$(".ul_font_size").hide();
		}
		if( $(".ul_font_line").css("display") != 'none' )
		{  
			$(".ul_font_line").hide();
		}
		if( $(".ul_font_padding").css("display") != 'none' )
		{  
			$(".ul_font_padding").hide();
		}
	});
	$(".li_font_aling").on("click", function()
	{
		$(".ul_font_aling").hide();
		var font_aling = $(this).attr("id");
		if( font_aling == "font_aling1")
		{
			$(".html").css("text-align","center");
		}else
		if (font_aling == "font_aling2")
		{
			$(".html").css("text-align","left");
		}else
		if (font_aling == "font_aling3")
		{
			$(".html").css("text-align","right");
		}
	});
	//更新文本内边距更改为更新字体样式
	$(".font_padding").on("click", function()
	{
		$(".ul_font_padding").show();
		if( $(".ul_font_size").css("display") != 'none' )
		{  
			$(".ul_font_size").hide();
		}
		if( $(".ul_font_line").css("display") != 'none' )
		{  
			$(".ul_font_line").hide();
		}
		if( $(".ul_font_aling").css("display") != 'none' )
		{  
			$(".ul_font_aling").hide();
		}
	});
	$(".li_font_padding").on("click", function()
	{
		$(".ul_font_padding").hide();
		var li_font_size = $(this).text();
		var font_size = $.trim(li_font_size);
		$(".html").css("font-family",font_size);
	});
	//更新文字是否加粗
	$(".font-weight").on("click", function()
	{
		var font_weight = $(".html").css("font-weight");
		if(font_weight == "400")
		{
			$(".html").css("font-weight","700");
			
		}else
		{
			$(".html").css("font-weight","400");
		}
	});
	//更新文字倾斜
	$(".font_italic").on("click", function()
	{
		var font_style = $(".html").css("font-style");
		if(font_style == "normal")
		{
			$(".html").css("font-style","oblique");
			
		}else
		{
			$(".html").css("font-style","normal");
		}
	});
	//更新下划线
	$(".font_underline").on("click", function()
	{
		var font_decoration = $(".html").css("text-decoration");
		if(font_decoration == "none")
		{
			$(".html").css("text-decoration","underline");
			
		}else
		{
			$(".html").css("text-decoration","none");
		}
	});
	//更新文字颜色
	$('.input_font_color').jPicker(
	{

	},
	function(color, context)
	{
	},
	function(color, context)
	{
		var LiveCallbackElement = $(".html");
		var Livea = $(".html a");
		var hex = color.val('hex');
		LiveCallbackElement.css(
		{
			color: hex && '#' + hex || 'transparent'
		});
		Livea.css(
		{
			color: hex && '#' + hex || 'transparent'
		});
	});
});
/*** 图层上下级编辑面板 ***/
$(function(e)
{
	//允许拖动
	$(".avast_index_top_txt").draggable(
	{
		opacity: 0.5,
		handle: ".move_span_tuodong",
		containment:'.index',
		scroll: false,
	});
	//移至顶层
	$(".move_span_most_top, .right_click_most_top").on("click" ,function()
	{
		Zindex = 999;
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("z-index",Zindex); 
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("z-index",Zindex); 
		}
		if( Zindex >= 998)
		{
			$(".move_span_most_top").attr("disabled","disabled");
			$(".move_span_most_bottom").removeAttr("disabled","disabled");
			$(".move_span_bottom").removeAttr("disabled","disabled");
			$(".move_span_top").attr("disabled","disabled");
		}
	});
	//上移一层
	$(".move_span_top, .right_click_top").on("click", function()
	{
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			var z_index = $(".html").css("z-index"); 
			var Zindex = z_index.replace(/[a-z]/g,"");
			if(Zindex >= 998)
			{
				$(".move_span_top").attr("disabled","disabled");
				$(".move_span_most_top").attr("disabled","disabled");
			}else
			{
				Zindex ++;
				$(".html").css("z-index",Zindex);
				$(".move_span_bottom").removeAttr("disabled","disabled");
				$(".move_span_most_bottom").removeAttr("disabled","disabled");
			}
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			var z_index = $(".click_Group").css("z-index"); 
			var Zindex = z_index.replace(/[a-z]/g,"");
			if(Zindex >= 998)
			{
				$(".move_span_top").attr("disabled","disabled");
				$(".move_span_most_top").attr("disabled","disabled");
			}else
			{
				Zindex ++;
				$(".click_Group").css("z-index",Zindex);
				$(".move_span_bottom").removeAttr("disabled","disabled");
				$(".move_span_most_bottom").removeAttr("disabled","disabled");
			}
		}
	});
	//移至底层
	$(".move_span_most_bottom, .right_click_most_bottom").on("click", function()
	{
		Zindex = 0;
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("z-index",Zindex);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("z-index",Zindex);
		}
		if( Zindex <= 0)
		{
			$(".move_span_most_bottom").attr("disabled","disabled");
			$(".move_span_most_top").removeAttr("disabled","disabled");
			$(".move_span_top").removeAttr("disabled","disabled");
			$(".move_span_bottom").attr("disabled","disabled");
		}
	});
	//下移一层
	$(".move_span_bottom, .right_click_bottom").on("click", function()
	{
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			var z_index = $(".html").css("z-index"); 
			var Zindex = z_index.replace(/[a-z]/g,"");
			if(Zindex <= 0)
			{
				$(".move_span_bottom").attr("disabled","disabled");
				$(".move_span_most_bottom").attr("disabled","disabled");
			}else
			{
				Zindex --;
				$(".html").css("z-index",Zindex); 
				$(".move_span_most_top").removeAttr("disabled","disabled");
				$(".move_span_top").removeAttr("disabled","disabled");
			}
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			var z_index = $(".click_Group").css("z-index"); 
			var Zindex = z_index.replace(/[a-z]/g,"");
			if(Zindex <= 0)
			{
				$(".move_span_bottom").attr("disabled","disabled");
				$(".move_span_most_bottom").attr("disabled","disabled");
			}else
			{
				Zindex --;
				$(".click_Group").css("z-index",Zindex); 
				$(".move_span_most_top").removeAttr("disabled","disabled");
				$(".move_span_top").removeAttr("disabled","disabled");
			}
		}
	});
	//元素复制事件
	$(".copy_span, .right_click_most_copy").on("click", function()
	{	
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			var and_clone = $(".html").clone();
			var x = $(".html").css("top");
			var ix = x.replace(/[^0-9\.]/g,"");
			var cx = ((+ix) + 100) + "px";
			and_clone.css({"top":cx});
			//and_clone.off();
			and_clone.removeClass("avast_index_txt html ui-draggable ui-draggable-handle ui-draggable ui-draggable-handle ui-resizable tabs_echartssZ avast_index_link avast_index_shangchuan tabs_echartsIMG tabs_echartsSZ tabs_echartsKG html_svg");
			and_clone.find(".ui-resizable-handle, .ui-resizable-a").remove();
			and_clone.draggable(
			{
				opacity: 1,
				containment:'.avast_index_li',
				scroll: false,
			});
			and_clone.appendTo($(".avast_index_li"));
			bindClick(and_clone);
		};	
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			avast_and_clone = $(".click_Group").clone();
			var x = $(".click_Group").css("top");
			var ix = x.replace(/[^0-9\.]/g,"");
			var cx = ((+ix) + 100) + "px";
			avast_and_clone.css({"top":cx});
			avast_and_clone.removeClass("click_Group");
			avast_and_clone.find(".ui-resizable-handle, .ui-resizable-a").remove();
			avast_and_clone.draggable(
			{
				opacity: 1,
				containment:'.avast_index_li',
				scroll: false,
			});
			avast_and_clone.appendTo($(".avast_index_li"));
			onClick(avast_and_clone);
		};
			 
	});
	//删除元素
	$(".delete_span").click(function()
	{
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".avast_index_top_txt").hide();
			$(".html").remove();
			$(".avast_index_left_txt").hide();
			$(".avast_chuanganqi").hide();
			$(".avast_text").hide();
			$(".index_file").hide();
			$(".avast-container").hide();
			$(".ul_textcontrol_on").hide();
			$(".right_click").hide();
			$(".avast-zidingyi-kaiguan").hide();
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").remove();
			$(".avast_index_top_txt").hide();
			$(".avast_index_left_txt").hide();
			$(".avast-container").hide();
			$(".right_click").hide();
		}
	});
	//禁用键盘滚动条事件
	$("body").keydown(function(event)
	{
		var k=event.which;
		if(k>36&&k<41)
		{
			return false
		}
	});
	//增加键盘delete按键删除功能
	$("body").on("keydown", function(event)
	{
		var key = event.which;
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			//删除
			if(key == 46)
			{
				$(".avast_index_top_txt").hide();
				$(".html").remove();
				$(".avast_index_left_txt").hide();
				$(".avast_chuanganqi").hide();
				$(".avast_text").hide();
				$(".index_file").hide();
				$(".avast-container").hide();
				$(".ul_textcontrol_on").hide();
				$(".avast-zidingyi-kaiguan").hide();
				$(".right_click").hide();
			}
			//上
			if(key == 38)
			{
				var i = $(".html").css("top");
				var o = i.replace(/[^0-9\.]/g,"");
				if(o >= 0)
				{
					o--;
					var ox = o + "px";
					$(".html").css("top",ox);
				}
			}
			//下
			if(key == 40)
			{
				var i = $(".html").css("top");
				var o = i.replace(/[^0-9\.]/g,"");
				//获取画布高度
				var h = $(".avast_index_li").css("height");
				var hg = h.replace(/[a-z]/g,"");
				//获取当前元素高度
				var y = $(".html").css("height");
				var yg = y.replace(/[a-z]/g,"");
				//计算移动范围
				var hy = hg - yg;
				if(o <= hy)
				{
					o++;
					var ox = o + "px";
					$(".html").css("top",ox);
				}
			}
			//左
			if(key == 37)
			{
				var i = $(".html").css("left");
				var o = i.replace(/[^0-9\.]/g,"");
				if(o >= 0)
				{
					o--;
					var ox = o + "px";
					$(".html").css("left",ox);
				}
			}
			//右
			if(key == 39)
			{
				
				var i = $(".html").css("left");
				var o = i.replace(/[^0-9\.]/g,"");
				//获取画布宽度
				var w = $(".avast_index_li").css("width");
				var wg = w.replace(/[a-z]/g,"");
				//获取当前元素宽度
				var y = $(".html").css("width");
				var yg = y.replace(/[a-z]/g, "");
				//计算移动范围
				var hy = wg - yg;
				if(o <= hy)
				{
					o++;
					var ox = o + "px";
					$(".html").css("left",ox);
				}
			}
			//模拟键盘复制事件
			if (event.ctrlKey && event.keyCode === 67)
			{ 
				$(".ctrl_c").show();
				avast_and_clone = $(".html").clone();
				
			}
			if (event.ctrlKey && event.keyCode === 86)
			{ 
				if($(".ctrl_c").css("display") != "none")
				{
					$(".ctrl_c").hide();
					var x = $(".html").css("top");
					var ix = x.replace(/[^0-9\.]/g,"");
					var cx = ((+ix) + 100) + "px";
					avast_and_clone.css({"top":cx});
					avast_and_clone.removeClass(" avast_index_txt html ui-draggable ui-draggable-handle ui-draggable ui-draggable-handle ui-resizable tabs_echartssZ avast_index_link avast_index_shangchuan tabs_echartsIMG tabs_echartsSZ tabs_echartsKG html_svg");
					avast_and_clone.find(".ui-resizable-handle, .ui-resizable-a").remove();
					avast_and_clone.draggable(
					{
						opacity: 1,
						containment:'.avast_index_li',
						scroll: false,
					});
					avast_and_clone.appendTo($(".avast_index_li"));
					bindClick(avast_and_clone);
				}
			}
		};
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			//删除
			if(key == 46)
			{
				$(".avast_index_top_txt").hide();
				$(".click_Group").remove();
				$(".avast_index_left_txt").hide();
				$(".avast-container").hide();
				$(".right_click").hide();
			}
			//上
			if(key == 38)
			{
				var i = $(".click_Group").css("top");
				var o = i.replace(/[^0-9\.]/g,"");
				o--;
				$(".click_Group").css("top",o);
			}
			//下
			if(key == 40)
			{
				var i = $(".click_Group").css("top");
				var o = i.replace(/[^0-9\.]/g,"");
				o++;
				$(".click_Group").css("top",o);
			}
			//左
			if(key == 37)
			{
				var i = $(".click_Group").css("left");
				var o = i.replace(/[^0-9\.]/g,"");
				o--;
				$(".click_Group").css("left",o);
			}
			//右
			if(key == 39)
			{
				var i = $(".click_Group").css("left");
				var o = i.replace(/[^0-9\.]/g,"");
				o++;
				$(".click_Group").css("left",o);
			}
			//模拟键盘复制事件
			if (event.ctrlKey && event.keyCode === 67)
			{ 
				$(".ctrl_c").show();
				avast_and_clone = $(".click_Group").clone();
				
			}
			if (event.ctrlKey && event.keyCode === 86)
			{ 
				$(".ctrl_c").hide();
				var x = $(".click_Group").css("top");
				var ix = x.replace(/[^0-9\.]/g,"");
				var cx = ((+ix) + 100) + "px";
				avast_and_clone.css({"top":cx});
				avast_and_clone.removeClass("click_Group");
				avast_and_clone.find(".ui-resizable-handle, .ui-resizable-a").remove();
				avast_and_clone.draggable(
				{
					opacity: 1,
					containment:'.avast_index_li',
					scroll: false,
				});
				avast_and_clone.appendTo($(".avast_index_li"));
				onClick(avast_and_clone);
			}
		};
	});	
});	
/*** 编辑区 面板  ***/
$(function(e)
{
	//编辑面板允许拖动
	$(".avast_index_left_txt").draggable(
	{
		opacity: 0.5,
		handle: ".avast_index_left_txt_title",
		containment:'.index',
		scroll: false,
	});
	//动态更新位置
	$('#avast_input_weizhiX').on('input propertychange', function()
	{
		var position_x = $(this).val();
		var position_px_x = position_x + "px";
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("top",position_px_x);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("top",position_px_x);
		}
	});
	$('#avast_input_weizhiY').on('input propertychange', function()
	{		
		var position_y = $(this).val();
		var position_px_y = position_y + "px";
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("left",position_px_y);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("left",position_px_y);
		}
	});
	//动态更新大小
	$('#avast_input_kuangaoX').on('input propertychange', function()
	{
		var width_x = $(this).val();
		var width_px_x = width_x + "px";
		$(".html").css("width",width_px_x);
	});
	$('#avast_input_kuangaoY').on('input propertychange', function()
	{
		var height_y = $(this).val();
		var height_px_y = height_y + "px";
		$(".html").css("height",height_px_y);
	});
	//更新背景颜色
	$('.dropdown-toggle').jPicker(
	{	
	},
	function(color, context)
	{
	},
	function(color, context)
	{
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			var LiveCallbackElement = $(".html");
			var hex = color.val('hex');
			LiveCallbackElement.css(
			{
				backgroundColor: hex && '#' + hex || 'transparent'
			});
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			var LiveCallbackElement = $(".click_Group");
			var hex = color.val('hex');
			LiveCallbackElement.css(
			{
				backgroundColor: hex && '#' + hex || 'transparent'
			});
		}
	});
	//更新基本图形背景颜色
	$('.index_svg_color').jPicker(
	{	
	},
	function(color, context)
	{
	},
	function(color, context)
	{
		var hex = color.val('hex');
		var svg_hex ="#" + hex;
		$(".html_svg").find(".myCircleB").css("stroke",svg_hex)

	});
	//更新边框和颜色
	$(".avast_border_right_select").change(function()
	{
		var avast_border_right_select = $(".avast_border_right_select").val();
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("border-style",avast_border_right_select);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("border-style",avast_border_right_select);
		}

	});
	$(".avast_border_jia").on("click" ,function()
	{
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			var border = $(".html").css('border-right-width');
			var border_width = border.replace(/[a-z]/g,"");
			border_width ++;
			if(border_width >= 50)
			{
				$(this).attr("disabled","disabled");
			}
			$(".avast_border_jian").removeAttr("disabled","disabled");
			$("#avast_border").val(border_width);
			var border_w = border_width + "px";
			$(".html").css("border-width",border_w);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			var border = $(".click_Group").css('border-right-width');
			var border_width = border.replace(/[a-z]/g,"");
			border_width ++;
			if(border_width >= 50)
			{
				$(this).attr("disabled","disabled");
			}
			$(".avast_border_jian").removeAttr("disabled","disabled");
			$("#avast_border").val(border_width);
			var border_w = border_width + "px";
			$(".click_Group").css("border-width",border_w);
		}
	});
	$(".avast_border_jian").on("click" ,function()
	{
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			var border = $(".html").css('border-right-width');
			var border_width = border.replace(/[a-z]/g,"");
			border_width --;
			if(border_width <= 0)
			{
				$(this).attr("disabled","disabled");
			}
			$(".avast_border_jia").removeAttr("disabled","disabled");
			$("#avast_border").val(border_width);
			var border_w = border_width + "px";
			$(".html").css("border-width",border_w);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			var border = $(".click_Group").css('border-right-width');
			var border_width = border.replace(/[a-z]/g,"");
			border_width --;
			if(border_width <= 0)
			{
				$(this).attr("disabled","disabled");
			}
			$(".avast_border_jia").removeAttr("disabled","disabled");
			$("#avast_border").val(border_width);
			var border_w = border_width + "px";
			$(".click_Group").css("border-width",border_w);
		}
	});
	//输入框动态更新边框
	$('#avast_border').on('input propertychange', function(e)
	{
		if($(this).val() < 50)
		{
			$(this).val();
		}else
		{
			$(this).val("50");
		}
		var slider_px = $(this).val();
		var avast_border = slider_px.replace(/[a-z]/g,"");
		var avast_border_y = avast_border + "px";
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("border-width",avast_border_y);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("border-width",avast_border_y);
		}
	});
	//更新边框颜色
	$('.dropdown-border').jPicker(
	{	
	},
	function(color, context)
	{
	},
	function(color, context)
	{
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			var LiveCallbackElement = $(".html");
			var hex = color.val('hex');
			LiveCallbackElement.css(
			{
				borderColor: hex && '#' + hex || 'transparent'
			});
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			var LiveCallbackElement = $(".click_Group");
			var hex = color.val('hex');
			LiveCallbackElement.css(
			{
				borderColor: hex && '#' + hex || 'transparent'
			});
		}
	});
	//更新圆角
	$( ".slider-range-max" ).slider(
	{
		range: "max",
		min: 0,
		max: 1000,
		value: 0,
		slide: function( event, ui ) 
		{
			$( "#amount" ).val( ui.value );
			var slider_px =   ui.value + "px";
			//新增
			if($(".avast_index_li").children(".edit_html").hasClass("html"))
			{
				$(".html").css("border-radius",slider_px);
			}
			if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
			{
				$(".click_Group").css("border-radius",slider_px);
			}
		}
	});
	$( "#amount" ).val( $( ".slider-range-max" ).slider( "value" ));
	//输入框动态更新圆角
	$('#amount').on('input propertychange', function(e)
	{
		if($(this).val() < 1000)
		{
			$(this).val();
		}else
		{
			$(this).val("1000");
		}
		var slider_px = $(this).val();
		var this_border_radius = slider_px.replace(/[a-z]/g,"");
		var slider_px_y = this_border_radius + "px";
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("border-radius",slider_px_y);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("border-radius",slider_px_y);
		}
		var this_border_radiusW = (this_border_radius / 1000)*100 + "%";
		$(".avast_yuanjiao").find(".ui-slider-handle").css("left",this_border_radiusW);
		var this_border_radiusH = (1 - this_border_radius / 1000)*100 + "%";
		$(".avast_yuanjiao").find(".ui-slider-range").css("width",this_border_radiusH);
	});
	//更新透明度
	$(".slider-range-touming").slider(
	{
		range: "max",
		min: 0,
		max: 10,
		value:10,
		slide: function( event, ui ) 
		{
			$( "#avast_touming" ).val( ui.value );
			var slider_opacity = ui.value /10;
			//新增
			if($(".avast_index_li").children(".edit_html").hasClass("html"))
			{
				$(".html").css("opacity",slider_opacity);
			}
			if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
			{
				$(".click_Group").css("opacity",slider_opacity);
			}
		}
	});
	$( "#avast_touming" ).val( $( ".slider-range-touming" ).slider( "value" ) );
	//输入框动态更新透明度
	$('#avast_touming').on('input propertychange', function(e)
	{
		if($(this).val() < 10)
		{
			$(this).val();
		}else
		{
			$(this).val("10");
		}
		var this_opacity = $(this).val();
		var this_opacityS = this_opacity.replace(/[a-z]/g,"");
		var this_opacityI = this_opacityS/10;
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("opacity",this_opacityI);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("opacity",this_opacityI);
		}
		var this_opacityW = this_opacity * 10 + "%";
		$(".avast_touming").find(".ui-slider-handle").css("left",this_opacityW);
		var this_opacityH = 100 - (this_opacity * 10) + "%";
		$(".avast_touming").find(".ui-slider-range").css("width",this_opacityH);
	});
	//更新旋转角度
	$(".slider-range-xuanzhuan").slider(
	{
		range: "max",
		min: 0,
		max: 360,
		value:0,
		slide: function( event, ui ) 
		{
			$( "#avast_xuanzhuan" ).val( ui.value );
			var slider_opacity ="rotate(" + ui.value + ")deg";
			//alert(slider_opacity)
			//新增
			if($(".avast_index_li").children(".edit_html").hasClass("html"))
			{
				$(".html").css("transform",slider_opacity);
			}
			if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
			{
				$(".click_Group").css("transform",slider_opacity);
			}
		}
	});
	$( "#avast_xuanzhuan" ).val( $( ".slider-range-xuanzhuan" ).slider( "value" ) );
	//输入框动态更新旋转角度
	$('#avast_xuanzhuan').on('input propertychange', function(e)
	{
		if($(this).val() < 360)
		{
			$(this).val();
		}else
		{
			$(this).val("360");
		}
		var AtransformA = $(this).val();
		var this_transformS = AtransformA.replace(/[a-z]/g,"");
		var slider_opacity ="rotate(" + this_transformS + ")deg";
		//新增
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".html").css("transform",slider_opacity);
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").css("transform",slider_opacity);
		}
		var this_transformW = (this_transformS / 360)*100 + "%";
		$(".avast_xuanzhuan").find(".ui-slider-handle").css("left",this_transformW);
		var this_transformH = (1 - this_transformS / 360)*100 + "%";
		$(".avast_xuanzhuan").find(".ui-slider-range").css("width",this_transformH);
	});
})
/***读取编辑前画布相关初始值***/
$(function(e)
{
	$(".avast_index_html").on("mousedown mouseup" ,function()
	{
		//读取画布大小
		var width_x = $(this).css("width");
		var width_px_x = width_x.replace(/[^0-9\.]/g,"");
		$("#index_background_input_kuangaoX").val(width_px_x);
		var height_y = $(this).css("height");
		var height_px_y = height_y.replace(/[^0-9\.]/g,"");
		$("#index_background_input_kuangaoY").val(height_px_y);
		//读取元素背景色
		var this_backgroudn_color = $(this).css("background-color");
		$(".dropdown_index_background").css("background-color",this_backgroudn_color);
		//读取元素透明度
		var this_opacity = $(this).css("opacity");
		var this_opacityS = this_opacity * 10;
		$("#index_touming_touming").val(this_opacityS);
		var this_opacityW = this_opacity * 100 + "%";
		$(".index_background_touming").find(".ui-slider-handle").css("left",this_opacityW);
		var this_opacityH = 100 - (this_opacity * 100) + "%";
		$(".index_background_touming").find(".ui-slider-range").css("width",this_opacityH);
		// 读取边框宽度
		var this_border = $(this).css('border-right-width');
		var this_width = this_border.replace(/[a-z]/g,"");			
		$("#index_border").val(this_width);
		if(this_width >= 10)
		{
			$(".index_border_jia").attr("disabled","disabled");
		}else
		{
			$(".index_border_jia").removeAttr("disabled","disabled");	
		};
		if(this_width <= 0)
		{
			$(".index_border_jian").attr("disabled","disabled");
		}else
		{
			$(".index_border_jian").removeAttr("disabled","disabled");	
		};
	});
});
/***开始编辑画布***/
$(function(e)
{
	//初始化画布
	var win_width = $(document.body).width(); 
	var win_height = $(document.body).height();
	var index_width = win_width;
	var index_height = (win_height *3);
	$(".index").css({"width":index_width + "px","height":index_height + "px"});
	var avast_index_width = $(".avast_index_html").css("width");
	var avastIndexWidth = avast_index_width.replace(/[a-z]/g,"");
	var left_index_avast= (index_width - avastIndexWidth)/2 + "px";
	$(".avast_index_html").css({"left":left_index_avast});
	//是否开启编辑画布
	$(".index_background_span").on("click", function()
	{
		$(this).toggleClass("index_background_span_on");
		if($(this).hasClass("index_background_span_on"))
		{
			//允许拖动增加减少画布大小
			$(".avast_index_html").resizable(
			{
				addClass:false,
				containment:'.index',
				handles:"n,e,s,w,se,sw,ne,nw" ,
				resize:function(event,ui)
				{
					var resize_index_width = $(".avast_index_html").css("width");
					var resizeIndexWidth = resize_index_width.replace(/[a-z]/g,"");
					var left_index_avast= (index_width - resizeIndexWidth)/2 + "px";
					$(".avast_index_html").css("left",left_index_avast);
				}
			});
			$(".index_background_con_off").hide();
		}else
		{
			$(".avast_index_li").parent(".ui-resizable").resizable("destroy");
			$(".index_background_con_off").show();
		}
	
	});	
	$(function()
	{
	
		// 读取边框宽度
		var this_border = $(".avast_index_html").css('border-right-width');
		var this_width = this_border.replace(/[a-z]/g,"");			
		$("#index_border").val(this_width);
		if(this_width >= 10)
		{
			$(".index_border_jia").attr("disabled","disabled");
		}else
		{
			$(".index_border_jia").removeAttr("disabled","disabled");	
		};
		if(this_width <= 0)
		{
			$(".index_border_jian").attr("disabled","disabled");
		}else
		{
			$(".index_border_jian").removeAttr("disabled","disabled");	
		};
		//读取画布大小
		var width_x = $(".avast_index_html").css("width");
		var width_px_x = width_x.replace(/[^0-9\.]/g,"");
		$("#index_background_input_kuangaoX").val(width_px_x);
		var height_y = $(".avast_index_html").css("height");
		var height_px_y = height_y.replace(/[^0-9\.]/g,"");
		$("#index_background_input_kuangaoY").val(height_px_y);
		/***************************** 动态添加事件 ************************/		
		//更新画布背景颜色
		$('.dropdown_index_background').jPicker(
		{	
		},
		function(color, context)
		{
		},
		function(color, context)
		{
			var LiveCallbackElement = $(".avast_index_html");
			var hex = color.val('hex');
			LiveCallbackElement.css(
			{
				backgroundColor: hex && '#' + hex || 'transparent'
			});
		});
		//更新画布透明度
		$(".index-range-touming").slider(
		{
			range: "max",
			min: 0,
			max: 10,
			value:10,
			slide: function( event, ui ) 
			{
				$( "#index_touming_touming" ).val( ui.value );
				var slider_opacity = ui.value /10;
				$(".avast_index_html").css("opacity",slider_opacity);
			}
		});
		//输入框动态更新透明度
		$('#index_touming_touming').on('input propertychange', function(e)
		{
			if($(this).val() < 10)
			{
				$(this).val();
			}else
			{
				$(this).val("10");
			}
			var this_opacity = $(this).val();
			var this_opacityS = this_opacity.replace(/[a-z]/g,"");
			var this_opacityI = this_opacityS/10;
			$(".avast_index_html").css("opacity",this_opacityI);
			var this_opacityW = this_opacity * 10 + "%";
			$(".index_background_touming").find(".ui-slider-handle").css("left",this_opacityW);
			var this_opacityH = 100 - (this_opacity * 10) + "%";
			$(".index_background_touming").find(".ui-slider-range").css("width",this_opacityH);
		});
		$( "#index_touming_touming" ).val( $( ".index-range-touming" ).slider( "value" ) );
		//更新边框宽度
		$(".index_border_jia").on("click" ,function()
		{
			var border = $(".avast_index_html").css('border-right-width');
			var border_width = border.replace(/[a-z]/g,"");
			border_width ++;
			if(border_width >= 10)
			{
				$(this).attr("disabled","disabled");
			}
			$(".index_border_jian").removeAttr("disabled","disabled");
			$("#index_border").val(border_width);
			var border_w = border_width + "px";
			$(".avast_index_html").css("border-width",border_w);
		});
		$(".index_border_jian").on("click" ,function()
		{
			var border = $(".avast_index_html").css('border-right-width');
			var border_width = border.replace(/[a-z]/g,"");
			border_width --;
			if(border_width <= 0)
			{
				$(this).attr("disabled","disabled");
			}
			$(".index_border_jia").removeAttr("disabled","disabled");
			$("#index_border").val(border_width);
			var border_w = border_width + "px";
			$(".avast_index_html").css("border-width",border_w);
		});
		//输入框动态更新边框宽度
		$('#index_border').on('input propertychange', function(e)
		{
			if($(this).val() < 10)
			{
				$(this).val();
			}else
			{
				$(this).val("10");
			}
			var slider_px = $(this).val();
			var avast_border = slider_px.replace(/[a-z]/g,"");
			var avast_border_y = avast_border + "px";
			$(".avast_index_html").css("border-width",avast_border_y);
		});
		//更新边框颜色
		$('.index_dropdown_border').jPicker(
		{	
		},
		function(color, context)
		{
		},
		function(color, context)
		{
			var LiveCallbackElement = $(".avast_index_html");
			var hex = color.val('hex');
			LiveCallbackElement.css(
			{
				borderColor: hex && '#' + hex || 'transparent'
			});
		});
		//更新边框样式
		$(".index_border_select").change(function()
		{
			var avast_border_right_select = $(".index_border_select").val();
			$(".avast_index_html").css("border-style",avast_border_right_select);

		});
		//输入框动态更新画布大小
		$('#index_background_input_kuangaoX').on('input propertychange', function()
		{
			if($(this).val() < index_width)
			{
				$(this).val();
			}else
			{
				$(this).val(index_width);
			}
			var width_x = $(this).val();
			var width_px_x = width_x + "px";
			var left_index_avast= (index_width - width_x)/2 + "px";
			$(".avast_index_html").css({"width":width_px_x,"left":left_index_avast});

		});
		$('#index_background_input_kuangaoY').on('input propertychange', function()
		{
			if($(this).val() < index_height)
			{
				$(this).val();
			}else
			{
				$(this).val(index_height);
			}
			var height_y = $(this).val();
			var height_px_y = height_y + "px";
			$(".avast_index_html").css("height",height_px_y);
		});
	});
	//点击非指定区域删除画布可编辑事件
	$(function()
	{
		$(document).on("click mousedown",function(e)
		{
			var target = $(e.target);			
			if(target.closest(".avast_index_html").length == 0 && target.closest(".avast_right").length == 0  && target.closest(".avast-container").length == 0 && target.closest(".avast_right_a").length == 0 && target.closest(".avast_right_b").length == 0 && target.closest(".avast_left_a").length == 0 && target.closest(".avast_left_b").length == 0)
			{
				$(".avast_index_li").parent(".ui-resizable").resizable("destroy");
				$(".index_background_con_off").show();
				$(".index_background_span").removeClass("index_background_span_on");
			}
			//隐藏设备列表
			if(target.closest(".click_shebei").length == 0)
			{
				$(".click_xuanze_shebei").hide();
			}
			//隐藏传感器列表
			if(target.closest(".click_chuanganqi").length == 0)
			{
				$(".click_xuanze_chuanganqi").hide();
			}	
		})
	});
});
/*** 鼠标右键功能 ***/
//禁用鼠标原有功能
$(document).on('contextmenu',function(e)
{ 
	return false; 
});
//添加右键弹出功能
$(document).on("mousedown", function(e)
{
	//获取鼠标位置
	var xx = e.originalEvent.x || e.originalEvent.layerX || 0; 
	var yy = e.originalEvent.y || e.originalEvent.layerY || 0; 
	var XX = xx + "px";
	var YY = yy + "px";
	if ($(".html").length == 1 || $(".click_Group").length == 1)
	{
		if(3 == e.which)
		{
			$(".right_click").show();
			$(".right_click").css({"left":xx,"top":yy});
		}else
		{
			var target = $(e.target);
			if(target.closest(".right_click").length == 0)
			{
				$(".right_click").hide();
			}	
		}
	}
 })
//添加右键功能
$(function()
{
	$(".right_click_delete").on("click", function()
	{
		if($(".avast_index_li").children(".edit_html").hasClass("html"))
		{
			$(".avast_index_top_txt").hide();
			$(".html").remove();
			$(".avast_index_left_txt").hide();
			$(".avast_chuanganqi").hide();
			$(".avast_text").hide();
			$(".index_file").hide();
			$(".avast-container").hide();
			$(".ul_textcontrol_on").hide();
			$(".right_click").hide();
			$(".avast-zidingyi-kaiguan").hide();
		}
		if($(".avast_index_li").children(".edit_html").hasClass("click_Group"))
		{
			$(".click_Group").remove();
			$(".avast_index_top_txt").hide();
			$(".avast_index_left_txt").hide();
			$(".avast-container").hide();
			$(".right_click").hide();
		}
	})
});
/*** 自定义开关 ***/
$(function()
{
	//开关编辑面板允许拖动
	$(".avast-zidingyi-kaiguan").draggable(
	{
		opacity: 0.5,
		handle: ".avast-zidingyi-kaiguan-title",
		containment:'.index',
		scroll: false,
	});
	/********************* 组态库选择 *********************/
	//弹出组态库操作面板
	$(".zidingyi-kaiguan-1").on("click",function()
	{
	    var a = $(".zutaiku_xuanze_img").html();
	    if(a.trim().length < 10){
	        var img_html = "";
	        for (var n = 1; n < 38; n++){
               img_html += '<li class="avast_tuxingkaiguan"><img src="./images/zutai/tubiao/PID-deng/' + n + '.png"></li>';
			}
			for (var o = 1; o < 53; o++) {
               img_html += '<li class="avast_tuxingkaiguan"><img src="./images/zutai/tubiao/PID-anniu/' + o + '.png"></li>';
			}
	        $(".zutaiku_xuanze_img").html(img_html);
	        //让组态库允许拖动
			$(".zutaiku_xuanze_img li").draggable(
			{
				appendTo:".zutaiku_xuanze_bianji_on",
				helper:"clone",
				addClass:false,
				revert: false,
				scope:'c',
				cursor:"move"
		    });
	    }
		$(".zutaiku_xuanze").show();
	});
	//关闭组态库操作面板
	$(".zutaiku_tijiao_quxiao").on("click", function()
	{
		$(".zutaiku_xuanze").hide();
	});
	//放置开关的样式
	$(".zutaiku_xuanze_bianji_on, .zutaiku_xuanze_bianji_off").droppable(
	{
		activeClass: "ui-state-default",
		hoverClass: "ui-state-hover",
		scroll: false,
		scope:'c',		
		drop:function(event, ui)
		{
			var el = $(ui.draggable.html()).appendTo( this );
			$(".zutaiku_xuanze_bianji_on").find(el).addClass("on");
			$(".zutaiku_xuanze_bianji_off").find(el).addClass("off");
			el.siblings(".on").remove();
			el.siblings(".off").remove();
		}
	});
	//开关预览
	$(".avast_switch_yulan_title").on("click", function()
	{
		var a = $(".zutaiku_xuanze_bianji_on").html();
		$(".avast_switch_yulan_on").append(a);
		var a_length = $(".avast_switch_yulan_on").find(".on").length;
		if( a_length >= 2)
		{
			$(".avast_switch_yulan_on").find(".on").first().remove();
		}
		var b = $(".zutaiku_xuanze_bianji_off").html();
		$(".avast_switch_yulan_off").append(b);
		var b_length = $(".avast_switch_yulan_off").find(".off").length;
		if( b_length >= 2)
		{
			$(".avast_switch_yulan_off").find(".off").first().remove();
		}
	});
	//开关预览效果
	$(".avast_switch_yulan_on").on("click", function()
	{
		$(this).hide();
		$(".avast_switch_yulan_off").show();
	});
	$(".avast_switch_yulan_off").on("click", function()
	{
		$(this).hide();
		$(".avast_switch_yulan_on").show();
	});
	//输入到编辑区
	$(".zutaiku_tijiao_tijiao").on("click", function()
	{
		var a = $(".zutaiku_xuanze_bianji_on").html();
		$(".html").find(".avast_on").append(a);
		var a_length = $(".html").find(".avast_on").find(".on").length;
		if( a_length >= 2)
		{
			$(".html").find(".avast_on").find(".on").first().remove();
		}
		var b = $(".zutaiku_xuanze_bianji_off").html();
		$(".html").find(".avast_off").append(b);
		var b_length =$(".html").find(".avast_off").find(".off").length;
		if( b_length >= 2)
		{
			$(".html").find(".avast_off").find(".off").first().remove();
		}
		$(".zutaiku_xuanze").hide();
	});
	/*是否显示时间*/
	$(".tubiao_transparent_2").on("click", function()
	{
		$(this).toggleClass("tubiao_transparent_3");
		if($(this).hasClass("tubiao_transparent_3"))
		{			
			var height_y = $(".html").css("height");
			var height_px_y = height_y.replace(/[^0-9\.]/g,"");
			if(height_px_y < 100)
			{
				 $(".html").css("height","100px");
			}
		}
	    if("tubiao_transparent_2" == $(this).attr("class")){
	        $(".html").find("._time").hide();
	    	$(".html").find(".st").remove();
	    }else{
	       $(".html").find("._time").show();
	       $(".html").find(".index_choice_sc").append('<li class="st" title="1"></li>');
	    }
	});
	/********************* 组态库选择end *********************/
	/********************* 自定义上传 *********************/
	$(".zidingyi-kaiguan-2").on("click",function()
	{
		$(".zidingyi_xuanze").show();
	});
	//开关预览
	$(".zidingyi_yulan").on("click", function()
	{
		var a = $(".upd_open").attr("src");
		$(".zidingyi_switch_yulan_on img").attr("src",a);
		var b = $(".upd_close").attr("src");
		$(".zidingyi_switch_yulan_off img").attr("src",b);
	});
	//开关预览效果
	$(".zidingyi_switch_yulan_on").on("click", function()
	{
		$(this).hide();
		$(".zidingyi_switch_yulan_off").show();
	});
	$(".zidingyi_switch_yulan_off").on("click", function()
	{
		$(this).hide();
		$(".zidingyi_switch_yulan_on").show();
	});
	//输入到编辑区
	$(".zidingyi_tijiao_tijiao").on("click", function()
	{
		var a = $(".upd_open").attr("src");
		$(".html").find(".avast_on img").attr("src",a);
		var b = $(".upd_close").attr("src");
		$(".html").find(".avast_off img").attr("src",b);
		$(".zidingyi_xuanze").hide();
	});
	//关闭自定义操作面板
	$(".zidingyi_tijiao_quxiao").on("click", function()
	{
		$(".zidingyi_xuanze").hide();
	});
	/********************* 自定义上传end *********************/
	/********************* 图形库自定义 *********************/
	$(".zidingyi-kaiguan-3").on("click",function()
	{
		$(".tuxingku_xuanze").show();
	});
	//让组态库允许拖动
	$(".tuxingku_svg").draggable(
	{
		appendTo:".tuxingku_svg_on",
		helper:"clone",
		addClass:false,
		revert: false,
		scope:'d',
		cursor:"move"
    });
	//放置开关的样式
	$(".tuxingku_svg_on, .tuxingku_svg_off").droppable(
	{
		activeClass: "ui-state-default",
		hoverClass: "ui-state-hover",
		scroll: false,
		scope:'d',		
		drop:function(event, ui)
		{
			var el = $(ui.draggable.html()).appendTo( this );
			$(".tuxingku_svg_on").find(el).addClass("on");
			$(".tuxingku_svg_off").find(el).addClass("off");
			el.siblings(".on").remove();
			el.siblings(".off").remove();
		}
	});
	//开关预览
	$(".tuxingku_svg_yulan").on("click", function()
	{
		var a = $(".tuxingku_svg_on").html();
		$(".tuxingku_svg_switch_yulan_on").append(a);
		var a_length = $(".tuxingku_svg_switch_yulan_on").find(".on").length;
		if( a_length >= 2)
		{
			$(".tuxingku_svg_switch_yulan_on").find(".on").first().remove();
		}
		var b = $(".tuxingku_svg_off").html();
		$(".tuxingku_svg_switch_yulan_off").append(b);
		var b_length = $(".tuxingku_svg_switch_yulan_off").find(".off").length;
		if( b_length >= 2)
		{
			$(".tuxingku_svg_switch_yulan_off").find(".off").first().remove();
		}
	});
	//开关预览效果
	$(".tuxingku_svg_switch_yulan_on").on("click", function()
	{
		$(this).hide();
		$(".tuxingku_svg_switch_yulan_off").show();
	});
	$(".tuxingku_svg_switch_yulan_off").on("click", function()
	{
		$(this).hide();
		$(".tuxingku_svg_switch_yulan_on").show();
	});
	//输出到编辑区
	$(".tuxingku_svg_tijiao_tijiao").on("click", function()
	{
		var a = $(".tuxingku_svg_on").html();
		$(".html").find(".avast_on").append(a);
		var a_length = $(".html").find(".avast_on").find(".on").length;
		if( a_length >= 2)
		{
			$(".html").find(".avast_on").find(".on").first().remove();
		}
		var b = $(".tuxingku_svg_off").html();
		$(".html").find(".avast_off").append(b);
		var b_length =$(".html").find(".avast_off").find(".off").length;
		if( b_length >= 2)
		{
			$(".html").find(".avast_off").find(".off").first().remove();
		}
		$(".tuxingku_xuanze").hide();
	});
	//关闭图形库面板
	$(".tuxingku_svg_tijiao_quxiao").on("click", function()
	{
		$(".tuxingku_xuanze").hide();
	});
	/********************* 图形库自定义end *********************/
});
/*** 自定义开关end  ***/

/*** 选项卡and发布应用 ***/
$(function(e) 
{
	//选项卡
	$( "#tabs" ).tabs();
	//发布应用 展开
	$(".avast_top_icon_a_15").on("click",function()
	{
		$(".fabu_index").show();
	})
	//发布应用 关闭
	$(".fabu_index_cn_anniu_quxiao").on("click",function()
	{
		$(".fabu_index").hide();
	})	
	//应用 加密
	$(".fubu_checkbox_div_off").on("click",function()
	{
		$(this).find(".fubu_checkbox_span").addClass("fubu_checkbox_span_on");
		$(".fubu_checkbox_div_on").find(".fubu_checkbox_span").removeClass("fubu_checkbox_span_on");
		$(".fabu_input_on").removeAttr("disabled","disabled");
		$("#isLogin").val("1");
	})
	//应用 公开
	$(".fubu_checkbox_div_on").on("click",function()
	{
		$(this).find(".fubu_checkbox_span").addClass("fubu_checkbox_span_on");
		$(".fubu_checkbox_div_off").find(".fubu_checkbox_span").removeClass("fubu_checkbox_span_on");
		$(".fabu_input_on").attr("disabled","disabled");
		$("#isLogin").val("0");
	})
});
$(function()
{
	//自定义文字颜色按钮样式
	$(".font_color").find(".jPicker").addClass("Icon_font_color");
	$(".font_color").find(".Icon").addClass("Icon_font_span");
	$(".font_color").find(".Alpha").addClass("Alpha_color");
	$(".font_color").find(".Image").addClass("Img_font_color");
});
/****************对齐方式*****************************/
$(function()
{
	$(".avast_top_icon_a_6").on("click", function()
	{
		var a = $(".avast_index_li").children(".edit_html");
		//判断是否存在可编辑元素
		if(a.length > 0)
		{
			//判断是否执行事件
			if($(".avast_alignment").css("display") == 'none' )
			{
				$(".avast_alignment").show();
				//原始元素
				$(".avast_index_li").find(".index_html").off();
				$(".avast_index_li").find(".index_html").draggable( "destroy" );
				//成组元素
				$(".avast_index_li").find(".html_Group").off();
				$(".avast_index_li").find(".html_Group").draggable( "destroy" );
				//面板允许拖动
				$(".avast_alignment").draggable(
				{
					opacity: 0.5,
					handle: ".avast_alignment_title",
					containment:'.index',
					scroll: false,
				});
				//编辑操作
				$(".index_html,.html_Group").unbind("click").click(function()
				{
					if($(".avast_alignment").css("display") != 'none' )
					{
						if($(this).hasClass("index_alignment"))
						{
							$(this).removeClass("index_alignment");
						}else
						{
							$(this).addClass("index_alignment");
						}
					}
				});
			}else
			{
				alert("对齐面板已经打开！");
			}
			//左对齐
			$(".avast_alignment_left").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("left");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						shuzu_alignment.push(index_shuzu);
					});
					var min_px = (Math.min.apply(null, shuzu_alignment));
					var index_px = min_px + "px";
					$(".index_alignment").css("left",index_px);
				}else
				{
					alert("未选中任何元素，无法对齐");
				}
			})
			//右对齐
			$(".avast_alignment_right").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("right");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						shuzu_alignment.push(index_shuzu);
					});
					var min_px = (Math.min.apply(null, shuzu_alignment));
					var index_px = min_px + "px";
					$(".index_alignment").css({"right":index_px, "left":"auto"});
				}else
				{
					alert("未选中任何元素，无法对齐");
				}
			});
			/*垂直居中对齐*/	
			$(".avast_alignment_conter_cn").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					var shuzu_width = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("left");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						shuzu_alignment.push(index_shuzu);
						var index_width = $(this).css("width");
						var index_width_a = index_width.replace(/[a-z]/g,"");
						shuzu_width.push(index_width_a);
						
						
					});
					var min_px = (Math.min.apply(null, shuzu_alignment));
					var min_width = (Math.max.apply(null, shuzu_width));
					$(".index_alignment").each(function(index)
					{
						var a = (min_width - shuzu_width[index])/2;
						var b = min_px + a + "px";
						$(this).css("left",b);
					});
				}else
				{
					alert("未选中任何元素，无法对齐");
				}
			});
			/*垂直平均分布*/
			$(".avast_alignment_conter_fen").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					var shuzu_len = [];
					var shuzu_height = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("top");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						var index_height = $(this).css("height");
						var index_height_a = index_height.replace(/[a-z]/g,"");
						//存储对象
						var obj = new Object();
						obj.shuzi = index_shuzu;
						obj.height_a = index_height_a;
						obj.obj = $(this);
						shuzu_alignment.push(obj);
						//存储数组
						shuzu_len.push(index_shuzu);
						shuzu_height.push(index_height_a);

					});
					//数组排序
					var sageOrder = shuzu_alignment.sort
					(
						function(a, b)
						{
						return (a.shuzi - b.shuzi);
						}
					);
					//获取所选元素最大值和最小值并计算可分布值
					var min_px = (Math.min.apply(null, shuzu_len));
					var max_px = (Math.max.apply(null, shuzu_len));
					var min_max = max_px - min_px;
					//计算所选元素和并抛弃最后一个
					var sum = 0;
					$.each(sageOrder, function(a, vas)
					{
						 if( a <= sageOrder.length -2 )
						 {
							 sum += Number(vas.height_a);
						 }else
						 {
							 return false; 
						 }
					});
					//计算元素平均分不值
					var x_len = shuzu_height.length;
					var x_js = parseInt((min_max - sum)/(x_len-1));
					var gao = 0;
					var k = 0;
					$.each(sageOrder, function(i, val)
					{
						var heights = $(val.obj).css("height").replace(/[a-z]/g,"");
						if(k==0){
							$(val.obj).css("top",val.shuzi);
							gao = Number(val.shuzi) + Number(heights);
						}else{
							gao = Number(gao) + Number(x_js);
							$(val.obj).css("top",gao);
							gao = Number(gao) + Number(heights);
						}
						k++;	
					});
				}else
				{
					alert("未选中任何元素，无法对齐");
				}
			});
			//上对齐
			$(".avast_alignment_top").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("top");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						shuzu_alignment.push(index_shuzu);
					});
					var min_px = (Math.min.apply(null, shuzu_alignment));
					var index_px = min_px + "px";
					$(".index_alignment").css("top",index_px);
				}else
				{
					alert("未选中任何元素，无法对齐");
				}	
			})
			//下对齐
			$(".avast_alignment_bottom").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("bottom");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						shuzu_alignment.push(index_shuzu);
					});
					var min_px = (Math.min.apply(null, shuzu_alignment));
					var index_px = min_px + "px";
					$(".index_alignment").css({"bottom":index_px, "top":"auto"});
				}else
				{
					alert("未选中任何元素，无法对齐");
				}
			})
			//水平居中对齐	
			$(".avast_alignment_conter").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					var shuzu_width = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("top");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						shuzu_alignment.push(index_shuzu);
						var index_width = $(this).css("height");
						var index_width_a = index_width.replace(/[a-z]/g,"");
						shuzu_width.push(index_width_a);
						
						
					});
					var min_px = (Math.min.apply(null, shuzu_alignment));
					var min_width = (Math.max.apply(null, shuzu_width));
					$(".index_alignment").each(function(index)
					{
						var a = (min_width - shuzu_width[index])/2;
						var b = min_px + a + "px";
						$(this).css("top",b);
					});
				}else
				{
					alert("未选中任何元素，无法对齐");
				}
			})
			//水平平均分布
			$(".avast_alignment_conterfen").unbind("click").click(function()
			{
				if($(".avast_index_li").find(".edit_html").hasClass("index_alignment"))
				{
					var shuzu_alignment = [];
					var shuzu_len = [];
					var shuzu_height = [];
					$(".index_alignment").each(function()
					{
						var index_alignment = $(this).css("left");
						var index_shuzu = index_alignment.replace(/[a-z]/g,"");
						var index_height = $(this).css("width");
						var index_height_a = index_height.replace(/[a-z]/g,"");
						//存储对象
						var obj = new Object();
						obj.shuzi = index_shuzu;
						obj.height_a = index_height_a;
						obj.obj = $(this);
						shuzu_alignment.push(obj);
						//存储数组
						shuzu_len.push(index_shuzu);
						shuzu_height.push(index_height_a);

					});
					//数组排序
					var sageOrder = shuzu_alignment.sort
					(
						function(a, b)
						{
						return (a.shuzi - b.shuzi);
						}
					);
					//获取所选元素最大值和最小值并计算可分布值
					var min_px = (Math.min.apply(null, shuzu_len));
					var max_px = (Math.max.apply(null, shuzu_len));
					var min_max = max_px - min_px;
					//计算所选元素和并抛弃最后一个
					var sum = 0;
					$.each(sageOrder, function(a, vas)
					{
						 if( a <= sageOrder.length -2 )
						 {
							 sum += Number(vas.height_a);
						 }else
						 {
							 return false; 
						 }
					});
					//计算元素平均分不值
					var x_len = shuzu_height.length;
					var x_js = parseInt((min_max - sum)/(x_len-1));
					var gao = 0;
					var k = 0;
					$.each(sageOrder, function(i, val)
					{
						var heights = $(val.obj).css("width").replace(/[a-z]/g,"");
						if(k==0){
							$(val.obj).css("left",val.shuzi);
							gao = Number(val.shuzi) + Number(heights);
						}else{
							gao = Number(gao) + Number(x_js);
							$(val.obj).css("left",gao);
							gao = Number(gao) + Number(heights);
						}
						k++;	
					});
				}else
				{
					alert("未选中任何元素，无法对齐");
				}
			})
		}else
		{
			alert("未发现可对齐元素！");
		}
	});
	$(function()
	{
		$(document).on("click mousedown",function(e)
		{
			if($(".avast_alignment").css("display") != 'none' )
			{
				var target = $(e.target);
				if(target.closest(".avast_alignment").length == 0 && target.closest(".avast_top_icon_a_6").length == 0 && target.closest(".avast_index_html").length == 0 )
				{
					$(".avast_alignment").hide();
					$(".html_Group").removeClass("index_alignment");
					$(".index_html").removeClass("index_alignment");
					bindClick(".index_html");
					onClick(".html_Group");
					$(".index_html, .html_Group").draggable(
					{
						opacity: 1,
						containment:'.avast_index_li',
						scroll: false,
					});
				};
			}
		})
	});
});
/*******************成组*****************/
$(function()
{
	$(".avast_top_icon_a_8").on("click", function()
	{
		var a = $(".avast_index_li").children(".edit_html");
		//判断是否存在可编辑元素
		if(a.length > 0)
		{
			//判断是否执行事件
			if($(".avast_Group").css("display") == 'none' )
			{
				$(".avast_Group").show();
				//原始元素
				$(".avast_index_li").find(".index_html").off();
				$(".avast_index_li").find(".index_html").draggable( "destroy" );
				//成组元素
				$(".avast_index_li").find(".html_Group").off();
				$(".avast_index_li").find(".html_Group").draggable( "destroy" );
				//面板允许拖动
				$(".avast_Group").draggable(
				{
					opacity: 0.5,
					handle: ".avast_Group_title",
					containment:'.index',
					scroll: false,
				});
				//已经成组标识
				$(".html_Group").addClass("existence_Group");
				//编辑操作
				$(".index_html, .html_Group").on("click",function()
				{
					if($(".avast_Group").css("display") != 'none' )
					{
						if($(this).hasClass("html_Group"))
						{
							alert("当前元素已成组，不可再次成组！");
						}else
						{
							if($(this).hasClass("index_alignment"))
							{
								$(this).removeClass("index_alignment");
							}else
							{
								$(this).addClass("index_alignment");
							}
						}
					}
				});
			}else
			{
				alert("成组控制面板已经打开！");
			}
		}else
		{
			alert("未发现可成组元素！");
		}
		//成组
		$(".avast_Group_html_on").unbind("click").click(function()
		{
			var a = $(".avast_index_li").children(".index_alignment");
			if(a.length > 0)
			{
				//动态添加成组域
				$(".avast_index_li").append('<div class="index_Group edit_html"><div class="index_Group_con"></div><div class="index_Group_off"></div></div>');
				//拷贝选中元素添加成组域
				$(".index_alignment").clone().appendTo($(".index_Group").find(".index_Group_con"));
				//删除原件
				$(".avast_index_li").children(".index_alignment").remove();
				var shuzu_top = [];
				var shuzu_bottom = [];
				var shuzu_right = [];
				var shuzu_left = [];
				$(".index_Group").find(".index_html").each(function()
				{
					//获取选中元素top数组
					var index_alignment = $(this).css("top").replace(/[a-z]/g,"");
					shuzu_top.push(index_alignment);
					//获取选中元素bottom数组
					var index_bottom = $(this).css("bottom").replace(/[a-z]/g,"");
					shuzu_bottom.push(index_bottom);
					//获取选中元素left数组
					var index_left = $(this).css("left").replace(/[a-z]/g,"");
					shuzu_left.push(index_left);
					//获取选中元素right数组
					var index_right = $(this).css("right").replace(/[a-z]/g,"");
					shuzu_right.push(index_right);
				});
				//计算成组后高度
				var index_li_height = $(".avast_index_li").css("height").replace(/[a-z]/g,""); 
				var min_top = (Math.min.apply(null, shuzu_top));
				var min_bottom = (Math.min.apply(null,shuzu_bottom));
				var m_height= Number(index_li_height) - ( Number(min_top)+ Number(min_bottom) )+ "px";
				//计算成组后宽度
				var index_li_width = $(".avast_index_li").css("width").replace(/[a-z]/g,""); 
				var min_left = (Math.min.apply(null, shuzu_left));
				var min_right = (Math.min.apply(null, shuzu_right));
				var m_width= Number(index_li_width) - ( Number(min_left)+ Number(min_right) )+ "px";
				//计算成组后top left
				var left_min = min_left + "px";
				var top_min  = min_top + "px";
				//添加成组域样式
				$(".index_Group").css({"position":"absolute","width": m_width,"height":m_height,"top":top_min,"left":left_min});
				//添加与成组域对齐样式
				var left_fu = "-" + min_left + "px";
				var top_fu  = "-" + min_top + "px";
				$(".index_Group").children(".index_Group_con").css({"position":"absolute","width": m_width,"height":m_height,"top":top_fu,"left":left_fu});
				//添加成组域标识
				$(".avast_index_li").children(".index_Group").addClass("html_Group");
				//添加成组域成员标识
				//删除辅助线
				$(".avast_index_li").children(".html_Group").children(".index_Group_con").children(".index_html").removeClass("index_alignment");
				//删除动态成组域标识
				$(".avast_index_li").children(".html_Group").removeClass("index_Group");
				//删除已成组标识
				$(".html_Group").removeClass("existence_Group");
				//成组后允许拖动
				$(".html_Group").draggable(
				{
					opacity: 1,
					containment:'.avast_index_li',
					scroll: false,
				});
				//回绑事件
				$(".avast_Group").hide();
				bindClick(".index_html");
				$(".index_html").draggable(
				{
					opacity: 1,
					containment:'.avast_index_li',
					scroll: false,
				});
				//成组调整
				$(".html_Group").unbind("click").click(function()
				{
					$(this).addClass("click_Group");
					$(this).siblings(".html_Group").removeClass("click_Group");
					onClick(".click_Group");
				})		
			}else
			{
				alert("未选中任何元素，无法成组！")
			}
		})
	});
	$(function()
	{
		$(document).on("click mousedown",function(e)
		{
			if($(".avast_Group").css("display") != 'none' )
			{
				var target = $(e.target);
				if(target.closest(".avast_Group").length == 0 && target.closest(".avast_top_icon_a_8").length == 0 && target.closest(".avast_index_html").length == 0)
				{
					$(".avast_Group").hide();
					$(".index_html").removeClass("index_alignment");
					$(".html_Group").removeClass("existence_Group");
					bindClick(".index_html");
					onClick(".html_Group");
					$(".index_html, .html_Group").draggable(
					{
						opacity: 1,
						containment:'.avast_index_li',
						scroll: false,
					});
				};
			}
			var click_length = $(".click_Group").length;
			if(click_length >= 1)
			{
				var target = $(e.target);
				if(target.closest(".click_Group").length == 0 && target.closest(".avast_index_top_txt").length == 0 && target.closest(".avast_index_left_txt").length == 0 && target.closest(".avast-container").length == 0 && target.closest(".right_click").length == 0)
				{
					$(".avast_index_top_txt").hide();
					$(".avast_index_left_txt").hide();
					$(".right_click").hide();
					$(".html").removeClass("html");
					$(".html_Group").removeClass("click_Group");
				};
			}
		})
	});
});
/***编辑成组删除****/
$(function()
{
	$(".avast_top_icon_a_9").on("click", function()
	{
			var a = $(".avast_index_li").children(".html_Group");
			if(a.length > 0)
			{
				//判断是否执行事件
				if($(".edit_Group").css("display") == 'none' )
				{
					$(".edit_Group").show();
					//原始元素
					$(".avast_index_li").find(".index_html").off();
					$(".avast_index_li").find(".index_html").draggable( "destroy" );
					//成组元素
					$(".avast_index_li").find(".html_Group").off();
					$(".avast_index_li").find(".html_Group").draggable( "destroy" );
					//面板允许拖动
					$(".edit_Group").draggable(
					{
						opacity: 0.5,
						handle: ".edit_Group_title",
						containment:'.index',
						scroll: false,
					});
					$(".html_Group").addClass("delete_edit_Group");
					//添加是否选中样式
					$(".avast_index_li").find(".html_Group").append('<div class="edit_Group_span"></div>');
					//取消成组操作标识
					$(".index_html, .html_Group").unbind("click").click(function()
					{
						if($(".edit_Group").css("display") != 'none' )
						{
							if($(this).hasClass("index_html"))
							{
								alert("当前元素未成组不可取消操作！");
							}else
							{
								if($(this).find(".edit_Group_span").hasClass("edit_Group_span_on"))
								{
									$(this).find(".edit_Group_span").removeClass("edit_Group_span_on");
								}else
								{
									$(this).find(".edit_Group_span").addClass("edit_Group_span_on");
									$(this).siblings(".html_Group").find(".edit_Group_span").removeClass("edit_Group_span_on");
								}
							}
						}
					});
				}else
				{
					alert("编辑成组控制面板已经打开！");
				}
			}else
			{
				alert("未找到已成组元素！");
			}
	});
	//取消成组
	$(".edit_Group_index_off").unbind("click").click(function()
	{
		//取消选中成组
		var c = $(".html_Group").children(".edit_Group_span_on");
		if(c.length > 0)
		{
			//取消成组后 从新计算成组后内部各元素与画布实际距离
			var shuzu_top = [];
			var shuzu_left = [];
			var avast_index_li_top =  $(".avast_index_li").offset().top;
			var avast_index_li_left =  $(".avast_index_li").offset().left;
			$(".edit_Group_span_on").parent(".html_Group").find(".index_html").each(function()
			{
				//获取选中元素top数组
				var index_alignment = $(this).offset().top;
				shuzu_top.push(index_alignment);
				//获取选中元素left数组
				var index_left = $(this).offset().left;
				shuzu_left.push(index_left);
			});
			$(".edit_Group_span_on").parent(".html_Group").find(".index_html").each(function(index)
			{
				var top = (shuzu_top[index] - avast_index_li_top) + "px";
				var left = (shuzu_left[index] - avast_index_li_left) + "px";
				$(this).css({"top":top,"left":left});
			});
			$(".edit_Group_span_on").parent(".html_Group").find(".index_html").clone().appendTo($(".avast_index_li"));
			//删除原件
			$(".edit_Group_span_on").parent(".html_Group").remove();
			//回绑事件
			$(".edit_Group").hide();
			bindClick(".index_html");
			$(".index_html").draggable(
			{
				opacity: 1,
				containment:'.avast_index_li',
				scroll: false,
			});
			//回绑未取消成组元素事件
			var d = $(".html_Group");
			if(d.length > 0)
			{
				$(".html_Group").removeClass("delete_edit_Group");
				$(".html_Group").find(".edit_Group_span").remove();
				onClick(".html_Group");
				$(".html_Group").draggable(
				{
					opacity: 1,
					containment:'.avast_index_li',
					scroll: false,
				});
			}
		}else
		{
			alert("未选中已成组元素！")
		}
	
	});
	//点击空白处事件判定
	$(function()
	{
		$(document).on("click mousedown",function(e)
		{
			if($(".edit_Group").css("display") != 'none' )
			{
				//取消成组事件
				if($(".edit_Group_index").css("display") !='none')
				{
					var target = $(e.target);
					if(target.closest(".edit_Group").length == 0 && target.closest(".avast_top_icon_a_9").length == 0 && target.closest(".avast_index_html").length == 0 )
					{
						$(".edit_Group").hide();
						$(".html_Group").removeClass("delete_edit_Group");
						$(".html_Group").find(".edit_Group_span").remove();
						bindClick(".index_html");
						onClick(".html_Group");
						$(".index_html,.html_Group").draggable(
						{
							opacity: 1,
							containment:'.avast_index_li',
							scroll: false,
						});
					};
				}
				//编辑成组事件
				if($(".edit_Group_body").css("display") != 'none')
				{
					var target = $(e.target);
					if(target.closest(".edit_Group").length == 0 && target.closest(".avast_top_icon_a_9").length == 0 && target.closest(".avast_index_html").length == 0 )
					{
						$(".edit_Group").hide();
						$(".html_Group").removeClass("delete_edit_Group");
						$(".html_Group").find(".edit_Group_span").remove();
						$(".html_Group").find(".index_html").removeClass("index_alignment");
						$(".html_Group").find(".index_Group_off").show();
						$(".edit_Group_body").hide();
						$(".edit_Group_index").show();
						bindClick(".index_html");
						onClick(".html_Group");
						$(".index_html,.html_Group").draggable(
						{
							opacity: 1,
							containment:'.avast_index_li',
							scroll: false,
						});
					};
				}
			}
		})
	});
});
/****** 编辑成组 ******/
$(function()
{
	//成组选中
	$(".edit_Group_index_on").on("click", function()
	{
		//取消选中成组
		var c = $(".html_Group").children(".edit_Group_span_on");
		if(c.length > 0)
		{
			$(".edit_Group_body").show();
			$(".edit_Group_index").hide();
			//判断是否执行事件
			if($(".edit_Group_body").css("display") != 'none' )
			{
				//取消成组元素事件
				$(".avast_index_li").find(".html_Group").off();
				$(".avast_index_li").find(".index_html").off();
				//删除成组元素是否选中状态
				$(".html_Group").find(".edit_Group_span").hide();
				//删除同胞标识
				$(".html_Group").each(function()
				{
					if($(this).find(".edit_Group_span").hasClass("edit_Group_span_on"))
					{
						$(this).find(".index_html").addClass("index_alignment");
						$(this).siblings(".html_Group").removeClass("delete_edit_Group")
						$(this).find(".index_Group_off").hide();
						$(this).find(".index_html").unbind("click").click(function()
						{
							if($(".edit_Group_body").css("display") != 'none' )
							{
								if($(this).hasClass("index_alignment"))
								{
									$(this).removeClass("index_alignment");
								}else
								{
									$(this).addClass("index_alignment");
								}
							}
						});
					}
				});
			}
			
		}else
		{
			alert("未选中已成组元素！")
		}
	});
	//编辑完成
	$(".edit_Group_body_on").on("click", function()
	{
		
		if($(".delete_edit_Group").find(".index_html").hasClass("index_alignment"))
		{
			$(".avast_index_li").append('<div class="index_Group edit_html"><div class="index_Group_con"></div><div class="index_Group_off"></div></div>');
		}
		$(".delete_edit_Group").find(".index_html").each(function()
		{
			if($(this).hasClass("index_alignment"))
			{
				$(this).clone().appendTo($(".index_Group").find(".index_Group_con"));
				
			}else
			{
				var ab = $(this).clone().appendTo($(".avast_index_li"));
				bindClick(ab)
				ab.draggable(
				{
					opacity: 1,
					containment:'.avast_index_li',
					scroll: false,
				});
			}
		})
		//删除原件
		$(".delete_edit_Group").remove();
		//隐藏编辑面板
		$(".edit_Group_body").hide();
		$(".edit_Group_index").show();
		$(".edit_Group").hide();
		$(".html_Group").find(".edit_Group_span").remove();
		//计算
		var shuzu_top = [];
		var shuzu_bottom = [];
		var shuzu_right = [];
		var shuzu_left = [];
		$(".index_Group").find(".index_html").each(function()
		{
			//获取选中元素top数组
			var index_alignment = $(this).css("top").replace(/[a-z]/g,"");
			shuzu_top.push(index_alignment);
			//获取选中元素bottom数组
			var index_bottom = $(this).css("bottom").replace(/[a-z]/g,"");
			shuzu_bottom.push(index_bottom);
			//获取选中元素left数组
			var index_left = $(this).css("left").replace(/[a-z]/g,"");
			shuzu_left.push(index_left);
			//获取选中元素right数组
			var index_right = $(this).css("right").replace(/[a-z]/g,"");
			shuzu_right.push(index_right);
		});
		//计算成组后高度
		var index_li_height = $(".avast_index_li").css("height").replace(/[a-z]/g,""); 
		var min_top = (Math.min.apply(null, shuzu_top));
		var min_bottom = (Math.min.apply(null,shuzu_bottom));
		var m_height= Number(index_li_height) - ( Number(min_top)+ Number(min_bottom) )+ "px";
		//计算成组后宽度
		var index_li_width = $(".avast_index_li").css("width").replace(/[a-z]/g,""); 
		var min_left = (Math.min.apply(null, shuzu_left));
		var min_right = (Math.min.apply(null, shuzu_right));
		var m_width= Number(index_li_width) - ( Number(min_left)+ Number(min_right) )+ "px";
		//计算成组后top left
		var left_min = min_left + "px";
		var top_min  = min_top + "px";
		//添加成组域样式
		$(".index_Group").css({"position":"absolute","width": m_width,"height":m_height,"top":top_min,"left":left_min});
		//添加与成组域对齐样式
		var left_fu = "-" + min_left + "px";
		var top_fu  = "-" + min_top + "px";
		$(".index_Group").children(".index_Group_con").css({"position":"absolute","width": m_width,"height":m_height,"top":top_fu,"left":left_fu});
		//添加成组域标识
		$(".avast_index_li").children(".index_Group").addClass("html_Group");
		//添加成组域成员标识
		//删除辅助线
		$(".avast_index_li").children(".html_Group").children(".index_Group_con").children(".index_html").removeClass("index_alignment");
		//删除动态成组域标识
		$(".avast_index_li").children(".html_Group").removeClass("index_Group");
		//删除已成组标识
		$(".html_Group").removeClass("existence_Group");
		//成组后允许拖动
		$(".html_Group").draggable(
		{
			opacity: 1,
			containment:'.avast_index_li',
			scroll: false,
		});
		//回绑事件
		$(".avast_Group").hide();
		bindClick(".index_html");
		$(".index_html").draggable(
		{
			opacity: 1,
			containment:'.avast_index_li',
			scroll: false,
		});
		//成组调整
		$(".html_Group").unbind("click").click(function()
		{
			$(this).addClass("click_Group");
			$(this).siblings(".html_Group").removeClass("click_Group");
			onClick(".click_Group");
		})		
	});
	//取消编辑
	$(".edit_Group_body_off").on("click", function()
	{
		$(".edit_Group").hide();
		$(".html_Group").removeClass("delete_edit_Group");
		$(".html_Group").find(".edit_Group_span").remove();
		$(".html_Group").find(".index_html").removeClass("index_alignment");
		$(".html_Group").find(".index_Group_off").show();
		$(".edit_Group_body").hide();
		$(".edit_Group_index").show();
		bindClick(".index_html");
		onClick(".html_Group");
		$(".index_html,.html_Group").draggable(
		{
			opacity: 1,
			containment:'.avast_index_li',
			scroll: false,
		});
	});
});
/*** 成组后获取相关元素事件 ***/
function onClick(chengzu)
{
	$(chengzu).on("mouseup mousedown" ,function ()
	{
		//动态添加元素当前时间指定遍历元素
		if($(this).hasClass("click_Group"))
		{
			
		}else
		{
			$(this).addClass("click_Group");
		}
		//禁用宽高
		$("#avast_input_kuangaoX").attr("disabled","disabled");
		$("#avast_input_kuangaoY").attr("disabled","disabled");
		$(".avast_index_top_txt").show();
		$(".avast_index_left_txt").show();
		$(this).siblings(".click_Group").removeClass("click_Group");
	});
	/** 动态获取当前元素相关属性 **/
	$(chengzu).on("mousemove" ,function()
	{
		if($(this).hasClass("click_Group"))
		{
			// 读取边框宽
			var this_border = $(this).css('border-right-width');
			var this_width = this_border.replace(/[a-z]/g,"");	
			$("#avast_border").val(this_width);
			if(this_width >= 50)
			{
				$(".avast_border_jia").attr("disabled","disabled");
			}else
			{
				$(".avast_border_jia").removeAttr("disabled","disabled");	
			};
			if(this_width <= 0)
			{
				$(".avast_border_jian").attr("disabled","disabled");
			}else
			{
				$(".avast_border_jian").removeAttr("disabled","disabled");	
			};
			//读取z-index
			var this_Zindex = $(".click_Group").css('z-index'); 
			if( this_Zindex >= 999)
			{
				$(".move_span_top").attr("disabled","disabled");
				$(".move_span_most_top").attr("disabled","disabled");
				
			}else
			{
				$(".move_span_top").removeAttr("disabled","disabled");
				$(".move_span_most_top").removeAttr("disabled","disabled");

			};
			if( this_Zindex <= 0)
			{
				$(".move_span_bottom").attr("disabled","disabled");
				$(".move_span_most_bottom").attr("disabled","disabled");
				
			}else
			{
				$(".move_span_bottom").removeAttr("disabled","disabled");
				$(".move_span_most_bottom").removeAttr("disabled","disabled");
			};
			//读取元素背景色
			var this_backgroudn_color = $(".click_Group").css("background-color");
			$("input.dropdown-toggle").css("background-color",this_backgroudn_color);
			//读取元素边框色
			var this_border_color = $(".click_Group").css("border-color");
			$("input.dropdown-border").css("background-color",this_border_color);
			//读取元素圆角
			var this_borderRadius = $(".click_Group").css("border-top-left-radius");//兼容IE9
			var this_border_radius = this_borderRadius.replace(/[a-z]/g,"");
			$("#amount").val(this_border_radius);
			var this_border_radiusW = (this_border_radius / 1000)*100 + "%";
			$(".avast_yuanjiao").find(".ui-slider-handle").css("left",this_border_radiusW);
			var this_border_radiusH = (1 - this_border_radius / 1000)*100 + "%";
			$(".avast_yuanjiao").find(".ui-slider-range").css("width",this_border_radiusH);
			//读取元素透明度
			var this_opacity = $(".click_Group").css("opacity");
			var this_opacityS = this_opacity * 10;
			$("input.avast_touming_touming").val(this_opacityS);
			var this_opacityW = this_opacity * 100 + "%";
			$(".avast_touming").find(".ui-slider-handle").css("left",this_opacityW);
			var this_opacityH = 100 - (this_opacity * 100) + "%";
			$(".avast_touming").find(".ui-slider-range").css("width",this_opacityH);
			/*读取元素旋转角度*/
			var lBxuanzhuan = $(".click_Group").css("rotate");
			if(undefined != lBxuanzhuan && lBxuanzhuan != 0 )
			{
				lBxuanzhuan =lBxuanzhuan.replace(/[a-z]/g,"");
			}
			$("input.avast_xuanzhuan_xuanzhuan").val(lBxuanzhuan);
			var this_transformW = (lBxuanzhuan / 360)*100 + "%";
			$(".avast_xuanzhuan").find(".ui-slider-handle").css("left",this_transformW);
			var this_transformH = (1 - lBxuanzhuan / 360)*100 + "%";
			$(".avast_xuanzhuan").find(".ui-slider-range").css("width",this_transformH);
			//读取元素位置
			var position_x = $(".click_Group").css("top");
			var absolute_x = position_x.replace(/[^0-9\.]/g,"");
			$("input.avast_input_weizhiX").val(absolute_x);
			var position_y = $(".click_Group").css("left");
			var absolute_y = position_y.replace(/[^0-9\.]/g,"");
			$("input.avast_input_weizhiY").val(absolute_y);
			//从新计算成组后内部各元素与画布实际距离
			//读取元素大小
			var width_x = $(".click_Group").css("width");
			var width_px_x = width_x.replace(/[^0-9\.]/g,"");
			$("input.avast_input_kuangaoX").val(width_px_x);
			var height_y = $(".click_Group").css("height");
			var height_px_y = height_y.replace(/[^0-9\.]/g,"");
			$("input.avast_input_kuangaoY").val(height_px_y);
		}
	});
}
//手机版画布
$(function()
{
	//让手机版画布允许拖动
	$(".Mobile_phone").draggable(
	{
		opacity: 0.5,
		handle: ".Cell_phone_yidong",
		containment:'.index',
		scroll: false,
	});
	$(".avast_top_icon_a_4").on("click",function()
	{
		$(this).toggleClass("avast_top_icon_a_4_1");
		if($(this).hasClass("avast_top_icon_a_4_1"))
		{
			$(".Mobile_phone").show();
			var win_width = $(document.body).width(); 
			var left_index_avast= ((win_width - 414)/2) + "px";
			$(".avast_index").css({"width":"414px","height":"736px","left":left_index_avast});
			$(".Cell_phone_x").attr("name","414");
			$(".Cell_phone_y").attr("name","736");
		}else
		{
			$(".Mobile_phone").hide();
			var win_width = $(document.body).width(); 
			var left_index_avast= ((win_width - 1020)/2) + "px";
			$(".avast_index").css({"width":"1020px","height":"620px","left":left_index_avast});
		}
	});
	$(".Cell_phone_model").on("click",function()
	{
		$(".Choice_phone").show();
	});
	$(".li_Choice_phone").on("click", function()
	{
		if($(this).find(".Choice_phone_span").hasClass("Choice_phone_span_ico"))
		{

		}else
		{
			$(this).find(".Choice_phone_span").addClass("Choice_phone_span_ico");
			$(this).siblings(".li_Choice_phone").find(".Choice_phone_span").removeClass("Choice_phone_span_ico");
		}
		var phone_id = $(this).attr("id");
		var win_width = $(document.body).width(); 
		switch(phone_id)
		{
			case "phone1":
				var phone_width = 414;
				var phone_height= 736;
				break;
			case "phone2":
				var phone_width = 375;
				var phone_height= 667;
				break;
			case "phone3":
				var phone_width = 320;
				var phone_height= 568;
				break;
			case "phone4":
				var phone_width = 320;
				var phone_height= 480;
				break;
			case "phone5":
				var phone_width = 360;
				var phone_height= 640;
				break;	
		}
		//更新手机版画布
		var width_index_avast = phone_width + "px";
		var height_index_avast = phone_height + "px";
		var left_index_avast= ((win_width - phone_width)/2) + "px";
		$(".avast_index").css({"width":width_index_avast,"height":height_index_avast,"left":left_index_avast});
		//更新面板值
		$(".Cell_phone_x").text(phone_width);
		$(".Cell_phone_y").text(phone_height);
		$(".Cell_phone_x").attr("name",phone_width);
		$(".Cell_phone_y").attr("name",phone_height);
	});
	//手机横屏或者竖屏
	$(".Cross_screen").on("click",function()
	{
		var a = $(".Cell_phone_x").attr("name");
		var b = $(".Cell_phone_y").attr("name");
		var a1 = a + "px";
		var b1 = b + "px";
		$(".Cell_phone_x").text(b);
		$(".Cell_phone_y").text(a);
		$(".Cell_phone_x").attr("name",b);
		$(".Cell_phone_y").attr("name",a);
		var win_width = $(document.body).width(); 
		var left_index_avast= ((win_width - b)/2) + "px";
		$(".avast_index").css({"width":b1,"height":a1,"left":left_index_avast});

	})
	//点击空白处事件判定
	$(function()
	{
		$(document).on("click mousedown",function(e)
		{
			if($(".Choice_phone").css("display") != 'none' )
			{
				var target = $(e.target);
				if(target.closest(".Cell_phone_model").length == 0)
				{
					$(".Choice_phone").hide();
				};
			}
		})
	});
})
/***  设备传感器 ***/
$(function(e) 
{
	//展开设备列表
	$(".click_shebei").on("click", function()
	{
		$(".click_xuanze_shebei").show();
	});
	//选择设备
	$(".click_li_shebei").on("click", function()
	{
		$(this).find(".click_span_shebei").toggleClass("click_yes_shebei");
		if($(this).find(".click_span_shebei").hasClass("click_yes_shebei"))
		{
			//获取当前元素title值
			var title = $(this).attr("title");
			getSensor(title);
			//获取当前元素txt值
			var textStr = $(this).attr("dname");
			var text = $.trim(textStr);
			if(text.length > 5){
			   text = text.substring(0,5);
			}
			//删除同胞事件
			$(this).siblings(".click_li_shebei").find(".click_span_shebei").removeClass("click_yes_shebei");
			//选中后向下添加选中值
			$(".add_choice_shebei").append('<li class="li_choice_shebei" title="'+textStr+'" deviceId="'+title+'">' + '<div class="dele_choice_shebei"></div>'+ text + '</li>');
			dele_choice(".dele_choice_shebei");
			//删除同胞选中值	
			$(".li_choice_shebei").each(function()
			{
				var add_title = $(this).attr("deviceId");
				if(add_title != title)
				{
					$(this).remove();
				}
			});
			
			var flag = $(".html").find(".avast_chuanganqi_ico").attr("flag");
			/*********************************/
			//选中后向编辑区隐藏域添加选中值
			$(".html").find(".index_choice_shebei").remove();  //清除隐藏区域的数据
			if("tongxin" != flag && "history" != flag){
				$(".add_choice_chuanganqi").html("");  //清除显示的传感器
				$(".html").find(".index_choice_chuanganqi").remove();  //清除隐藏区域的数据
			}
			$(".html").find(".index_choice_sc").append('<li class="index_choice_shebei" title= '+title+ '>'  + text + '</li>');
		}else
		{
			$(".li_choice_shebei").remove();
			$(".html").find(".index_choice_shebei").remove();
		}
	});
	//展开传感器列表
	$(".click_chuanganqi").on("click", function()
	{
		$(".click_xuanze_chuanganqi").show();
	});
	//选择传感器
	bindSeneorClick();
});
function getSensor(deviceId){
  if ("" != deviceId) {
		$.ajax({async:false,type:"POST",url:basePath+"/alarms/querySensorByDeviceId.htm",data:{"deviceId":deviceId}, success:function (data) {
			if ("" != data && null != data) {
				var senHtm = "";
				var jsonObj = $.parseJSON(data);
				var cheSensor =  $(".html").find(".index_choice_chuanganqi");
				$.each(jsonObj[0].sensorList, function (i, o) {
				    var classStr = "";
				    for(var k = 0;k<cheSensor.length;k++){
				     if($(cheSensor[k]).attr("title") == o.sensorId){
				        classStr = "click_yes_chuanganqi";
				     }
				    }
					senHtm += '<button class="click_li_chuanganqi" sensorId="'+o.sensorId+'" title="'+o.sensorName+'" unit="'+o.sensorUnit+'" type="'+o.sensorType+'"><span class="click_span_chuanganqi '+classStr+'"></span>';
					if(o.sensorName.length > 5){
					   senHtm+=o.sensorName.substring(0,5);
					}else{
					   senHtm+=o.sensorName;
					}
					senHtm += '</button>';
				});
				$("#_sensor").html(senHtm);
				bindSeneorClick();
			} else {
				$("#_sensor").html("");
			}	
		}});	
	}else{
	    $.ajax({async:false,type:"POST",url:basePath+"/queryUserAllSeneor.htm", success:function (data) {
			if ("" != data && null != data) {
				var senHtm = "";
				var jsonObj = $.parseJSON(data);
				$.each(jsonObj.sensorList,function(i,o){
				    senHtm += '<button class="click_li_chuanganqi" sensorId="'+o.id+'" title="'+o.sensorName+'" unit="'+o.unit+'" type="'+o.sensorTypeId+'"><span class="click_span_chuanganqi"></span>';
					if(o.sensorName.length > 5){
					   senHtm+=o.sensorName.substring(0,5);
					}else{
					   senHtm+=o.sensorName;
					}
					senHtm += '</button>';
			   });
				$("#_sensor").html(senHtm);
				bindSeneorClick();
			} else {
				$("#_sensor").html("");
			}	
		}});	
	}
}
function bindSeneorClick(){
   //选择传感器
	$(".click_li_chuanganqi").on("click", function()
	{
		var flag = $(".html").find(".avast_chuanganqi_ico").is("[flag]");
		var stype = $(this).attr("type");
		if(flag){
			var flagValue = $(".html").find(".avast_chuanganqi_ico").attr("flag");
			if(flagValue=="kaiguan"&&stype!="2"&&stype!="5"){
				alert("开关只能绑定开关型的传感器！");
				return;
			}
		}
		
		
		$(this).find(".click_span_chuanganqi").toggleClass("click_yes_chuanganqi");
		//获取图表允许设置传感器的数量
		var title = $(".html").find(".avast_chuanganqi_ico").attr("title");
		//获取选中传感器数量
		var text_length = $(".click_yes_chuanganqi").length;
		//根据值判断如果大于传过来的值则禁止选择
		if(text_length >= title)
		{
			$(".click_span_chuanganqi").not(".click_yes_chuanganqi").parent(".click_li_chuanganqi").attr("disabled","disabled");
		}else
		{
			$(".click_span_chuanganqi").not(".click_yes_chuanganqi").parent(".click_li_chuanganqi").removeAttr("disabled","disabled");
		}
		
		//获取当前选中传感器
		if($(this).find(".click_span_chuanganqi").hasClass("click_yes_chuanganqi"))
		{
			//获取当前元素title值
			var title = $(this).attr("sensorId");
			var unit = $(this).attr("unit");
			var stype = $(this).attr("type");
			//获取当前元素txt值
			var textStr = $(this).attr("title");
			var text = $.trim(textStr);
			if(text.length > 5){
			   text = text.substring(0,5);
			}
			//选中后向下添加传感器
			$(".add_choice_chuanganqi").append('<li class="li_choice_chuanganqi" title="'+textStr+'" sensorId="'+title+'">' + '<div class="dele_choice_chuanganqi"></div>' + text + '</li>');
			dele_chuanganqi(".dele_choice_chuanganqi");
			/*********************************/
			//选中后向编辑区隐藏域添加选中值
			$(".html").find(".index_choice_sc").append('<li class="index_choice_chuanganqi" title= '+title+ ' unit="'+unit+'" type="'+stype+'">'+ text + '</li>');
		}else
		{
			//获得当前取消传感器
			var else_title = $(this).attr("sensorId");
			//判断值相等则删除
			$(".li_choice_chuanganqi").each(function()
			{
				var add_title = $(this).attr("sensorId");
				if(add_title == else_title)
				{
					$(this).remove();
				}
			});
			//判断编辑区隐藏域值相等则删除
			$(".html").find(".index_choice_chuanganqi").each(function()
			{
				var add_title = $(this).attr("title");
				if(add_title == else_title)
				{
					$(this).remove();
				}
			});
		}
	});
}


function bindMove(){
   $(".avast_left_ico li").draggable(
	{
		appendTo:".avast_index_li",
		helper:"clone",
		addClass:false,
		revert: false,
		scope:'a',
		cursor:"move"
    });
 }
 function getHtml(model){
    switch(model){
       case "jianzhu" :
         if($('.PID-jianzhu ul').html() == ""){
            var htm = "";
            for (var a = 1; a < 23; a++){
              htm+= '<li class="Component_library"><img src="./images/zutai/tubiao/PID-jianzhu/' + a + '.png"></li>';
            }
            $('.PID-jianzhu ul').html(htm);
            bindMove()
          }
          break
       case "gongchangsheshi" :
         if($('.PID-gongchangsheshi ul').html() == ""){
            var htm = "";
            for (var b = 1; b < 38; b++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-gongchangsheshi/' + b + '.png"></li>';
			}
			$('.PID-gongchangsheshi ul').html(htm);
			bindMove()
          }
         break;
         case "dianyuan" :
         if($('.PID-dianyuan ul').html() == ""){
            var htm = "";
            for (var c = 1; c < 57; c++) {
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-dianyuan/' + c + '.png"></li>';
			}
			$('.PID-dianyuan ul').html(htm);
			bindMove()
          }
         break;
         case "dianxian" :
         if($('.PID-dianxian ul').html() == ""){
            var htm = "";
            for (var d = 1; d < 11; d++) {
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-dianxian/' + d + '.png"></li>';
			}
			$('.PID-dianxian ul').html(htm);
			bindMove()
          }
         break;
         case "yibiao" :
         if($('.PID-yibiao ul').html() == ""){
            var htm = "";
            for (var e = 1; e < 17; e++) {
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-yibiao/' + e + '.png"></li>';
			}
			$('.PID-yibiao ul').html(htm);
			bindMove()
          }
         break;
         case "zhichenglengque" :
         if($('.PID-zhichenglengque ul').html() == ""){
            var htm = "";
           for (var f = 1; f < 23; f++) {
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-zhichenglengque/' + f + '.png"></li>';
			}
			$('.PID-zhichenglengque ul').html(htm);
			bindMove()
          }
         break;
         case "zhichengjiare" :
         if($('.PID-zhichengjiare ul').html() == ""){
            var htm = "";
            for (var g = 1; g < 61; g++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-zhichengjiare/' + g + '.png"></li>';
			}
			$('.PID-zhichengjiare ul').html(htm);
			bindMove()
          }
         break;
         case "shuicao" :
         if($('.PID-shuicao ul').html() == ""){
            var htm = "";
            for (var h = 1; h < 108; h++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-shuicao/' + h + '.png"></li>';
			}
			$('.PID-shuicao ul').html(htm);
			bindMove()
          }
         break;
        case "jiaobanqi" :
         if($('.PID-jiaobanqi ul').html() == ""){
            var htm = "";
            for (var r = 1; r <= 20; r++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-jiaobanqi/' + r + '.png"></li>';
			}
			$('.PID-jiaobanqi ul').html(htm);
			bindMove()
          }
         break;
       case "feishuichuli" :
         if($('.PID-feishuichuli ul').html() == ""){
            var htm = "";
           for (var j = 1; j < 127; j++) {
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-feishuichuli/' + j + '.png"></li>';
			}
			$('.PID-feishuichuli ul').html(htm);
			bindMove()
          }
         break;
        case "fadongji" :
         if($('.PID-fadongji ul').html() == ""){
            var htm = "";
            for (var k = 1; k < 19; k++) {
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-fadongji/' + k + '.png"></li>';
			}
			$('.PID-fadongji ul').html(htm);
			bindMove()
          }
         break;
        case "beng" :
         if($('.PID-beng ul').html() == ""){
            var htm = "";
           for (var l = 1; l < 82; l++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-beng/' + l + '.png"></li>';
			}
			$('.PID-beng ul').html(htm);
			bindMove()
          }
         break;
       case "wuliaoyunshu" :
         if($('.PID-wuliaoyunshu ul').html() == ""){
           var htm = "";
           for (var m = 1; m < 103; m++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-wuliaoyunshu/' + m + '.png"></li>';
			}
			$('.PID-wuliaoyunshu ul').html(htm);
			bindMove()
          }
         break;
        case "deng" :
         if($('.PID-deng ul').html() == ""){
           var htm = "";
           for (var n = 1; n < 38; n++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-deng/' + n + '.png"></li>';
			}
			$('.PID-deng ul').html(htm);
			bindMove()
          }
         break;
        case "anniu" :
         if($('.PID-anniu ul').html() == ""){
           var htm = "";
           for (var o = 1; o < 53; o++) {
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-anniu/' + o + '.png"></li>';
			}
			$('.PID-anniu ul').html(htm);
			bindMove()
          }
         break;
       case "anquan" :
         if($('.PID-anquan ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 28; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-anquan/' + p + '.png"></li>';
			}
			$('.PID-anquan ul').html(htm);
			bindMove()
          }
         break;
       case "famen" :
         if($('.PID-famen ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 24; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-famen/' + p + '.png"></li>';
			}
			$('.PID-famen ul').html(htm);
			bindMove()
          }
         break;  
       case "famenfuhao" :
         if($('.PID-famenfuhao ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 32; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-famenfuhao/' + p + '.png"></li>';
			}
			$('.PID-famenfuhao ul').html(htm);
			bindMove()
          }
         break; 
        case "gongye" :
         if($('.PID-gongye ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 28; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-gongye/' + p + '.png"></li>';
			}
			$('.PID-gongye ul').html(htm);
			bindMove()
          }
         break;  
        case "gufengji" :
         if($('.PID-gufengji ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 33; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-gufengji/' + p + '.png"></li>';
			}
			$('.PID-gufengji ul').html(htm);
			bindMove()
          }
         break;  
        case "guolu" :
         if($('.PID-guolu ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 33; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-guolu/' + p + '.png"></li>';
			}
			$('.PID-guolu ul').html(htm);
			bindMove()
          }
         break; 
        case "huaxue" :
         if($('.PID-huaxue ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 99; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-huaxue/' + p + '.png"></li>';
			}
			$('.PID-huaxue ul').html(htm);
			bindMove()
          }
         break;  
       case "jiqi" :
         if($('.PID-jiqi ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 91; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-jiqi/' + p + '.png"></li>';
			}
			$('.PID-jiqi ul').html(htm);
			bindMove()
          }
         break; 
       case "jiareqi" :
         if($('.PID-jiareqi ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 17; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-jiareqi/' + p + '.png"></li>';
			}
			$('.PID-jiareqi ul').html(htm);
			bindMove()
          }
         break;  
       case "liuliangji" :
         if($('.PID-liuliangji ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 21; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-liuliangji/' + p + '.png"></li>';
			}
			$('.PID-liuliangji ul').html(htm);
			bindMove()
          }
         break;   
      case "rongqi" :
         if($('.PID-rongqi ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 39; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-rongqi/' + p + '.png"></li>';
			}
			$('.PID-rongqi ul').html(htm);
			bindMove()
          }
         break; 
       case "rongqi" :
         if($('.PID-rongqi ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 39; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-rongqi/' + p + '.png"></li>';
			}
			$('.PID-rongqi ul').html(htm);
			bindMove()
          }
         break; 
       case "shipingjiagong" :
         if($('.PID-shipingjiagong ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 47; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-shipingjiagong/' + p + '.png"></li>';
			}
			$('.PID-shipingjiagong ul').html(htm);
			bindMove()
          }
         break;   
       case "wuliu" :
         if($('.PID-wuliu ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 66; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-wuliu/' + p + '.png"></li>';
			}
			$('.PID-wuliu ul').html(htm);
			bindMove()
          }
         break;   
        case "guandao" :
         if($('.PID-guandao ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 17; p++){
              if(p > 9){
              	 htm += '<li class="Component_library"><img src="./images/zutai/tubiao/guandao/mtxx' + p + '.png"></li>';
              }else{
              	 htm += '<li class="Component_library"><img src="./images/zutai/tubiao/guandao/mtxx0' + p + '.png"></li>';
              }
             
			}
			$('.PID-guandao ul').html(htm);
			bindMove()
          }
         break;   
        case "havc" :
         if($('.PID-havc ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 69; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/havc/' + p + '.png"></li>';
			}
			$('.PID-havc ul').html(htm);
			bindMove()
          }
         break;    
        case "tianqi" :
         if($('.PID-tianqi ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 22; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-tianqi/' + p + '.png"></li>';
			}
			$('.PID-tianqi ul').html(htm);
			bindMove()
          }
         break;   
        case "zhiwu" :
         if($('.PID-zhiwu ul').html() == ""){
           var htm = "";
           for (var p = 101; p < 155; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/PID-zhiwu/' + p + '.png"></li>';
			}
			$('.PID-zhiwu ul').html(htm);
			bindMove()
          }
         break;   
       case "biaozhu" :
         if($('.PID-biaozhu ul').html() == ""){
           var htm = "";
           for (var p = 1; p < 26; p++){
              htm += '<li class="Component_library"><img src="./images/zutai/tubiao/biaozhu/' + p + '.png"></li>';
			}
			$('.PID-biaozhu ul').html(htm);
			bindMove()
          }
         break;
       case "dongku" :
           if($('.PID-dongku ul').html() == ""){
             var htm = "";
             for (var p = 1; p < 8; p++){
                htm += '<li class="Component_library"><img src="./images/zutai/tubiao/dongku/' + p + '.gif"></li>';
  			}
  			$('.PID-dongku ul').html(htm);
  			bindMove()
            }
           break; 
    }
 }
 
 function shows(obj){
    $(".add_choice_chuanganqi").html("");
	var flag = $(obj).find(".avast_chuanganqi_ico").attr("flag");
	//仪表盘数据
	if("yibiao" == flag){
	   $("#_yibiao").show();
	}else{
	   $("#_yibiao").hide();
	}
	if("tongxin" == flag || "history" == flag){
//	    $("#_deviceDiv").hide();
//	    $(".choice_shebei").hide();
//	    getSensor('');
	    $(obj).find(".index_choice_chuanganqi").each(function(){  
			var id = $(this).attr("title");
			var txtStr = $(this).text();
			var txt = $.trim(txtStr);
			if(txt.length > 5){
			   txt = txt.substring(0,5);
			}
			$(".add_choice_chuanganqi").append("<li class='li_choice_chuanganqi' title='"+txtStr+"' sensorId = '"+id+"'>" + '<div class="dele_choice_chuanganqi"></div>' +txt+"</li>");
//			dele_chuanganqi(".dele_choice_chuanganqi");
//			$(".click_li_chuanganqi").each(function(){
//				var add_title = $(this).attr("sensorId");
//				if(id == add_title){
//				   $(this).find("span").addClass("click_yes_chuanganqi");
//				}
//			});
		});
	}else{
//	    $("#_deviceDiv").show();
//	    $(".choice_shebei").show();
		//是否显示时间
		if($(obj).find(".st").attr("title") == "1"){
		   $(".tubiao_transparent_2").addClass("tubiao_transparent_3");
		   $(obj).find("._time").show();
		}else{
		   $(".tubiao_transparent_2").removeClass("tubiao_transparent_3");
		   $(obj).find("._time").hide();
		}
		//获取当前元素title值
		$(".add_choice_shebei").html("");
		var max_input = $(obj).find(".index_choice_sc").find(".index_choice_max").val();
		if(undefined == max_input){
			$("#_max").val("");
		}else{
			$("#_max").val(max_input);
		}
		var min_input = $(obj).find(".index_choice_sc").find(".index_choice_min").val();
		if(undefined == min_input){
			$("#_min").val("");
		}else{
			$("#_min").val(min_input);
		}
		var title = $(obj).find(".index_choice_shebei").attr("title");
		if(undefined != title && ""!=title){
			getSensor(title);
			//获取当前元素txt值
			var text = $.trim($(obj).find(".index_choice_shebei").text());
			if(text.length > 5){
			   text = text.substring(0,5);
			}
			//更新面板显示值
			$(".add_choice_shebei").html('<li class="li_choice_shebei" title= '+title+ '>' + '<div class="dele_choice_shebei"></div>' + text + '</li>');			
			dele_chuanganqi(".dele_choice_chuanganqi");
			//更新面板选中值
			$(".click_li_shebei").each(function()
			{
				var add_title = $(this).attr("title");
				if(add_title == title)
				{
					$(this).find(".click_span_shebei").addClass("click_yes_shebei");
				}else
				{
					$(this).find(".click_span_shebei").removeClass("click_yes_shebei");
				}
			});
			/**********************更新传感器********************/
			var sel_num = $(obj).find(".avast_chuanganqi_ico").attr("title");
			var sel = 1;
			$(obj).find(".index_choice_chuanganqi").each(function()
			{  
				var id = $(this).attr("title");
				var snameStr = $(this).text();
				var sname = snameStr;
				if(sname.length > 5){
				   sname = sname.substring(0,5);
				}
				$(".add_choice_chuanganqi").append("<li class='li_choice_chuanganqi' title='"+snameStr+"' sensorId='"+id+"'>" + '<div class="dele_choice_chuanganqi"></div>' +sname+"</li>");
				dele_chuanganqi(".add_choice_chuanganqi");
				$(".click_li_chuanganqi").each(function(){
					var add_title = $(this).attr("sensorId");
					if(id == add_title){
					   $(this).find(".click_span_chuanganqi").removeClass("click_yes_chuanganqi");
					   $(this).find(".click_span_chuanganqi").addClass("click_yes_chuanganqi");
					   sel++;
					}
				});
			});
			if(undefined!=sel_num && sel > sel_num){
				$(".click_span_chuanganqi").not(".click_yes_chuanganqi").parent(".click_li_chuanganqi").attr("disabled","disabled");
			}
		}else{
		   $(".click_li_shebei").find(".click_span_shebei").removeClass("click_yes_shebei");
		   $(".click_li_chuanganqi").find(".click_span_chuanganqi").removeClass("click_yes_chuanganqi");
		}
	}
 }
function dele_choice(shebei)
{
	// 删除面板显示值
	$(shebei).on("click", function()
	{

		$(this).parent(".li_choice_shebei").remove();
		var title = $(this).parent(".li_choice_shebei").attr("deviceId");
		$(".click_li_shebei").each(function()
		{
			var c_title = $(this).attr("title");
			if(c_title == title)
			{
				$(this).find(".click_span_shebei").removeClass("click_yes_shebei");
			}
		});
		$(".html").find(".index_choice_sc").find(".index_choice_shebei").each(function()
		{
			var i_title = $(this).attr("title");
			if(i_title == title)
			{
				$(this).remove();
			}
		})
	})
}
function dele_chuanganqi(chuanganqi)
{
	$(chuanganqi).on("click",function()
	{
		$(this).parent(".li_choice_chuanganqi").remove();
		var title = $(this).parent(".li_choice_chuanganqi").attr("sensorId");
		$(".click_li_chuanganqi").each(function()
		{
			var c_title = $(this).attr("sensorId");
			if(c_title == title)
			{
				$(this).find(".click_span_chuanganqi").removeClass("click_yes_chuanganqi");
			}
		});
		$(".html").find(".index_choice_sc").find(".index_choice_chuanganqi").each(function()
		{
			var i_title = $(this).attr("title");
			if(i_title == title)
			{
				$(this).remove();
			}
		})
	})
}
