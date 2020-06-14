// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

//Import JQuery to make the filter function easy
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
  $('#datetime').on('keyup', function () {
    // Filter data by datetime and 
    //update the table as new inputs are entered.
    var result = filterByDate(data);
    updateTable(result);
  }); 
