
Caviar39 on React. Development mode.

Basic functionality is ready. Responsive design should be rendered pretty good 
on full HD and HD screens and mobiles. Tested on various notebooks on Windows 
in Firefox, Opera and Chrome; Android mobiles.

Basic structure is modular. Catalog and GiftBoxes are rendered dynamically from 
json files.

Catalog filter and sorting implemented now! Catalog Items are stored in State, 
full items list in ref. State is always sorted and filtered, fullList is only 
sorted (used as initial data for filtering to be able to reset any filters). 
Filtering algorithm: button press sends current state of the form Checkboxes 
into sorting function where it is parsed into a Set of Filters according to 
Checkboxes. If Filters Set is not empty fullList clone is filtered according 
to Filters. Then new Catalog state is set with sorted and filtered list which 
triggers a re-render.

Orders can be placed now. Form pre-validation enables Order Button if any valid 
name is given. Email pre-validation after button is pressed. If both field are 
valid, data is sent to php script via Axios. Php script parses data, if anything 
is present in POST, performs final validation and checks if received catalog ID 
exists in the json data. When all 3 checks are good, sends email to manager's 
email. If any of checks are not passed, script sends error message back to Axios.

Used for development: Webpack, basic React, Popper-React, Axios, react-yandex-maps.

Todo:
- fix order popup reseting issue
- add 'Order a Callback" button and functionality;
- rework filter and sorting section and functionality;
- add a proper shopping cart;
- test in older browsers and Edge;
- tidy up css, maybe split the source sheets in multiple files. It is getting a bit crowded there :)

Known Issues:
- order popup does not reset properly upon closing after order submission;
- layout is a bit off on some less used screen widths;
- yandex map widget spits out warnings.

