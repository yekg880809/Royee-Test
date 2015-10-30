(function($) {  
	$.fn.jrtabs = function() { 
		debug(this);  
		$this = $(this);

        var method = arguments[0];
		if(methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if( typeof(method) == 'object' || !method ) {
            method = methods.init;
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
            return this;
        }

		 return method.apply(this, arguments);
	}

	var methods = {
        init: function (options) {
        	var defaults = {
        		position:'top',
        		useAjax:false,
        		url:''
        	}
	        var options = $.extend(defaults, options);  
	        _initHTML(this,options.position);
        	if (options.useAjax) {
        		_loadAjax();
        	};
            return this.each(function() { 
			});
        },
        add:function(options){
        	var defaults = {
        		title:'title',
        		content:'content'
        	}
        	var options = $.extend(defaults, options);
        },
        remove:function(){
        	//alert('remove');
        }
    };
	
		
	function debug($obj){
		if(window.console && window.console.log){  
			window.console.log('tabs selection count: ' + $obj.size());  
		}  
	}; 

	function _initHTML($obj,position){
		$obj.append('<ul class="tabs-header-'+position+'"></ul>');
		$obj.append('<div class="tabs-body"></div>');
	}

	function _loadAjax(){
		alert('loadajax');
	}
	
})(jQuery);  