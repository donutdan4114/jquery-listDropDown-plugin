#jQuery listDropDown Plugin#
*********************************************************
Created by: Daniel J Pepin  
Contact:    me@danieljpepin.com


What is it?
-----------
This plugin will allow you to convert a list to a dropdown.  
The most common use for this will be to convert a menu list to a dropdown on smaller screens.  

How to use
----------
Simply call **.listDropDown()** on your list.

    $('my_list').listDropDown({settings});


Options
-------
	'minWidth' : false, // The minimum width the list should be converted.
	'maxWidth' : false, // The maxiumum width the list should be converted.
	'interval' : 250,   // The polling interval to check screen width.

Examples
--------
To enable the dropdown on mobile width, simply do:

    // Convert list to dropdown when browser is small than 500px.
    $('my_list').listDropDown({minWidth:500})

To enable the dropdown when the browser width is over a certain size:

    // Convert list to dropdown when browser width is over 1000px.
    $('my_list').listDropDown({maxWidth:1000});



