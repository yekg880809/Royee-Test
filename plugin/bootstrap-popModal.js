(function($) {  
				$.fn.popModal = function(options) { 
					debug(this);  
					$this = $(this);
					var defaults = {
						/* model's id */
						modal:'',
						/* alert type , select from warning,info,success,error */
						type:'type',
						/* model's title */
						title:'popModel',
						/* model's content */
						content:'content',

						closeOther:true,

						buttons:{'确认':function(){alert('确认1')},'取消':function(){alert('取消1')}}

					};

					var options = $.extend(defaults, options);  
					
					$('#'+options.modal).find('.title').text(options.title);
					$('#'+options.modal).find('.content').text(options.content);
					
					if('none'==options.buttons){
						//$('#'+options.modal).find('.modal-footer').hide();
					}else{
						bindButton(options.buttons,options.modal);
						$('#'+options.modal).find('.modal-footer').show();
					}
					setAlertType(options.type,options.modal);
			
					bindEvents($(this),options.modal,options.closeOther,showModal);

					return this.each(function() { 
					});
					
					function setAlertType(type,modal){
						$('#'+modal).find('.alert').removeClass('alert-warning').removeClass('alert-info').removeClass('alert-danger').addClass('alert-'+type);
					}

					function bindButton(buttons,modal){
						$('#'+modal).find('.modal-footer').empty();
						$.each(buttons,function(n,value){
							var button = $('<button class="btn btn-primary" data-dismiss="modal" type="button">'+n+'</button>');
							$(button).on('click',function(e){$(value);e.stopPropagation();});
							$('#'+modal).find('.modal-footer').append(button);
						});
					}

					function showModal(modal,closeFlag){
						if(closeFlag){
							$('.modal').each(function(){
								if($(this).attr('id')!= modal){
									$(this).modal('hide');
								}
							});
						}
						$('#'+modal).modal('show');
					}

					function bindEvents(target,modal,closeFlag,callback){
						$(target).bind('click',function(){callback(modal,closeFlag);});
					}

				}

				$.fn.popModal.setAttr = function(options) {
					$('#'+options.modal).find('.title').text(options.title);
					$('#'+options.modal).find('.content').text(options.content);
				}
					
				function debug($obj){
					if(window.console && window.console.log){  
						window.console.log('tabs selection count: ' + $obj.size());  
					}  
				}; 
				
			})(jQuery);  