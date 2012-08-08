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

    // Convert list to dropdown when browser is smaller than 500px.
    $('my_list').listDropDown({minWidth:500})

To enable the dropdown when the browser width is over a certain size:

    // Convert list to dropdown when browser width is over 1000px.
    $('my_list').listDropDown({maxWidth:1000});

Advanced
--------
You can give custom values to your select options by specifying the **data-value** attribute.

    <ul>
      <li data-value='192003'>Dan</li>
      <li data-value='193443'>Bob</li>
      <li data-value='939483'>Tim</li>
    </ul>

This will become:

    <select class='toDropDown dropdown'>
      <option value='192003'>Dan</li>
      <option value='193443'>Bob</li>
      <option value='939483'>Tim</li>
    </select>

If you don't specify the **data-value** attribute, the text from the list will be used as the value.    
  
You can also specify a **data-selected** on your list to change the default selected index. 

    <ul data-selected='3'> ... </ul>

You can also specify a **data-null** on your list to have a null first item.

    <ul data-null='-- Select a user --'> ... </ul>



