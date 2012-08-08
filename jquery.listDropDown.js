(function( $ ) {

	$.fn.listDropDown = function( options ) {

		listDropDown.settings = $.extend({
			'minWidth'     : false, // The minimum width the list should be converted.
			'maxWidth'     : false, // The maxiumum width the list should be converted.
			'interval'     : 250,   // The polling interval to check screen width.
			'activate'     : false  // Activates the conversion instantly, no screen size polling.
		}, options);


		listDropDown.original = this;
		listDropDown.init(this);

		return this;
	};

	var listDropDown = {

		settings:{},

        active:false,
		original:null,
		dropdown:null,

		init:function(obj){
			// Need to set the event listener.
			setInterval(function(){
				listDropDown.listen(obj);
			}, listDropDown.settings.interval);
		},

        /**
         * Polls the window size and options to see if we should be activating/deactivating
         * the dropdown.
         */
		listen:function(obj){
			if(listDropDown.settings.activate == true){
				return listDropDown.activate(obj);
			}
			if($(window).width() < listDropDown.settings.minWidth || ($(window).width() > listDropDown.settings.maxWidth && listDropDown.settings.maxWidth != false)){
				return listDropDown.activate(obj);
			}
			listDropDown.deactivate(obj);
		},

		/**
		 * Converts the list to a dropdown.
	     */
		activate:function(obj){
			if(listDropDown.active){
				return false;
			}
			// Get all the list items.
			var list_items = obj.children('li');
			// Start building the dropdown.
			var dropdown = $('<select></select>');
			// Transfer all attributes to the new dropdown.
			dropdown[0].attributes = obj[0].attributes;
			// Generate options from list items.
			list_items.each(function(i, val){
				dropdown.append('<option>'+ $(val).text() +'</option>');
				if($(val).data('value') !== false){
					dropdown.children('option').eq(i).attr('value', $(val).data('value'));
				}else{
					dropdown.children('option').eq(i).attr('value', $(val).text());
				}
			});
			dropdown.addClass('toDropDown dropdown');
			listDropDown.dropdown = dropdown;
			obj.replaceWith(listDropDown.dropdown);
			listDropDown.active = true;
		},

		/**
		 * Converts the select box back to the list.
		 */
		deactivate:function(obj){
			if(!listDropDown.active){
				return false;
			}
			$('select.toDropDown.dropdown').replaceWith(obj.addClass('list'));
			listDropDown.active = false;
		}


	}

})( jQuery );