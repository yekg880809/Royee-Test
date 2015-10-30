(function($) {  
	function debug($obj){
		if(window.console && window.console.log){  
			window.console.log();  
		}  
	}; 

	function _initHTML(){
        var f_node = $('<ul data-role="listview"></ul>');
        return f_node;
	};

    function _putData2HTML(fNode,datas){
         $(datas).each(function(){
            fNode.append('<li id='+this.id+' class="listItem"><a href="#">'+this.title+'</a></li>');
         });
    }

	function _getResource(resource){
        var data;
		$.ajax({ 
            url: resource,
            type:'post',
            async:false,
            contentType: "application/json", 
            dataType:'json',
            success: function(result){
                data = eval(result);
            }
        });

        return data.result;
	};
    
    var methods = {
        init: function (options) {
            var defaults = {
                resource:'',
            }
            var options = $.extend(defaults, options);
            var _listContainer = _initHTML();
            this.append(_listContainer);
            _putData2HTML(_listContainer,_getResource(options.resource));
            window.console.log(_listContainer);
            return this.each(function() { 
            });
        }
    };

    $.fn.moblieList = function() { 
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
        
    };
        
	
})(jQuery);  