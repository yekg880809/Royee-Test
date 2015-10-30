(function($) {

	"use strict";

	var options = {
		events_source: 'events.json',
		view: 'month',
		tmpl_path: 'tmpls/',
		tmpl_cache: false,
		language:'zh-CN',
		first_day:1,
		day: '2015-09-29',
		onAfterEventsLoad: function(events) {
			if(!events) {
				return;
			}
			var list = $('#eventlist');
			list.html('');
			
			$.each(events, function(key, val) {
				$(document.createElement('li'))
					.html('<a class="info test-status test-'+ val.status +'"data-uuid="'+val.uuid+'" href="' + val.url + '"><b>' + val.title + '</b><span>'+ val.progress +'</span></a><div class="progress"><div class="progress-bar progress-'+ val.status +'" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: '+ val.progress +';"></div></div>')
					.appendTo(list);
					alert('dddd');
			});
		},
		onAfterViewLoad: function(view) {
			$('.page-header h3').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('button[data-calendar-view="' + view + '"]').addClass('active');
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var calendar = $('#calendar').calendar(options);

	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.view($this.data('calendar-view'));
		});
	});

	$('.time-container').children().click(function(){
		if ($(this).attr('data-calendar-view')=='day'||$(this).attr('data-calendar-view')=='year') {
			$('.time-container').prev().children().eq(1).html('今'+$(this).html());
		}else{
			$('.time-container').prev().children().eq(1).html('本'+$(this).html());
		};

		// var str = '2015-09-30'; // 日期字符串

		// str = str.replace(/-/g,'/'); // 将-替换成/，因为下面这个构造函数只支持/分隔的日期字符串

		// var date = new Date(str); // 构造一个日期型数据，值为传入的字符串
		// var time = date.getTime();
		// alert(time);
	});
	
}(jQuery));

