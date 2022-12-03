// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = d3.select("filters")

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let filter = d3.select("filters").property("id");
    // 4b. Save the value that was changed as a variable.
    let filteredData = tableData;
    // 4c. Save the id of the filter that was changed as a variable.
    if (filter) {
  
    // 5. If a filter value was entered then add that filterId and value to the filters list. Otherwise, clear that filter from the filters object.
    filteredData = filteredData.filter(row => row.datetime === filter);
  }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(tableData);
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    data.forEach((dataRow) => {
  
    // 9. Loop through all of the filters and keep any data that matches the filter values
    let row = tbody.append("tr");
  
    // 10. Finally, rebuild the table using the filtered data
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#filter-btn").on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
