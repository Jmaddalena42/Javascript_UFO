// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

var $ = jQuery;


// Update table with a new dataset
function updateTable(data) {
    tbody.html('');
    data.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  }
  
  // Filter date function (just compare a string)
  function filterByDate(data) {
      var filteredData = data.filter(function (d) {
        return d.datetime === $("#datetime").val();
      });
      return filteredData;
  }
  
  
  // update table
  updateTable(data); 
  button.on("click", function() {
    // When filter is clicked
    // Filter data by datetime and update the table
    var result = filterByDate(data);
    updateTable(result);
  });




















// button.on("click", function() {

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);

//   // Set the span tag in the h1 element to the text
//   // that was entered in the form
//   //d3.select("h1>span").text(inputValue);
// //   var rows = $('ufo-table tr').filter(":contains('none')");
//       // Then, select the unordered list element by class name
//   var list = d3.select(".summary");
// });
