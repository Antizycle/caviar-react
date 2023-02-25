Caviar39 on React. Development mode.

Basic functionality is ready.
Responsive design should be rendered pretty good on full HD and HD screens
and mobiles. Tested on various notebooks on Windows in Firefox, Opera and Chrome; 
Android mobiles and iphone6.

Basic structre is modular.
Catalog and GiftBoxes are rendered dynamicly from json files.

Catalog filter and sorting implemented now!
Catalog Items are stored in State, full items list in ref.
State is always sorted and filtered, fullList is only sorted (used as initial data 
for filtering to be able to reset any filters).
Filtering algorythm: 
button press sends current state of the form Checkboxes into sorting function where 
it is parsed into a Set of Filters according to Checkboxes. If Filters Set is not 
empty fullList clone is filtered according to Filters. Then new Catalog state is set 
with sorted and filtered list which triggers a rerender.


Used for development: webpack, basic react, popper-react.

Todo:
- implement an order page;
- add collapsability to filters and sorting section
  and some layout tuning up;
- add a proper shopping cart;
- test in older browsers and Edge;
- tidy up css, maybe split the source sheets in multiple files. It is getting a bit crowded there :)

Known Issues:
- layout is a bit off on some less used screen widths;
- some buttons have a wrong height.