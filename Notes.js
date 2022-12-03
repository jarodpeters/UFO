// Printing a string with JavaScript
console.log("Hello, world!");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// Run previous functions with 4+5
console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Converted to an arrow function
doubleAddition = (c, d) => addition(c, d) * 2;

// Run previous functions with 4+5
console.log(doubleAddition(4, 5));



// Arrow function vs normal functions
//Normal
function square(num) {
  return num ** 2;
}

// Arrow
let square = (num) => num**2;

// Callback for both
console.log(square(2))


// Simple JavaScript log statement
function printHello() {
  return "Hello there!";
}

// Arrow Function
printHello = () => "Hello there!";

// Create an array
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// Create a for loop
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

// Call the array
listLoop(friends);

// Create an array and for loop
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// explicitly telling JavaScript to count up to a fifth value
for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
}

// Create dynamic tables
function buildTable(data) {
  tbody.html("");
}

// Setting up a forEach function
// Create array
let numbers = [1,2,3,4,5,6];
// forEach function
numbers.forEach(function (element) {
  console.log(element**2);
})

data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

// COMPLETE buildTable FUNCTION
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
      }
    );
  });
}

// Create handleClick function
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
  Filter the default data to show only the date entered
};

if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);
};

// Full handleClick function
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);