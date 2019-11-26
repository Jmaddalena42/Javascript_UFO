// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

//Import JQuery to make the filter function easy and 
//streamlined
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
  
  // I used jquery for the filter as it got the job done with very few lines of code
  function filterByDate(data) {
      var filteredData = data.filter(function (d) {
        return d.datetime === $("#datetime").val();
      });
      return filteredData;
  }
  
  // update table
  updateTable(data); 
  button.on("click", function() {
    // Filter data by datetime and 
    //update the table when button is clicked
    var result = filterByDate(data);
    updateTable(result);
  });
