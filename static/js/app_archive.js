// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// // Simple JavaScript console.log statement
// function printHello() {
//   console.log("Hello there!");
// }

// // Functions can call other functions
// function doubleAddition(c, d) {
//   var total = addition(c, d) * 2;
//   return total;
// }

// printHello = () => "Hello there!";

// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// function listLoop(userList) {
//   for (var i = 0; i < userList.length; i++) {
//     console.log(userList[i]);
//   }
// }
// let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
// for (var i = 0; i < vegetables.length; i++) {
// }

// var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// for (var i = 0; i < vegetables.length; i++) {
//     console.log("I love " + vegetables[i]);
// }
// for (var i = 0; i < 5; i++) {
//   console.log("I am " + i);
// }

// build empty table
// data is variable holding array (object)

// function buildTable(data) {
//     tbody.html("");
//   }

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


// // handle what to do with input given
// function handleClick() {
//     let date = d3.select("#datetime").property("value");
//     // default filter is table data to let user set own search terms
//     let filteredData = tableData;


// // if-statement syntax
// if ( condition ) { code to execute }

// // pseudocode practice
// if (a date is entered) {
//     Filter the default data to show only the date entered
// };

// if (date) {
//     filteredData = filteredData.filter(row => row.datetime === date);
// };

// === exact match
// == loose match


// //complete function
// function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;
  
//      // Check to see if a date was entered and filter the
//     // data using that date.
//     if (date) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//       filteredData = filteredData.filter(row => row.datetime === date);
//     };
  
//      // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
//   };

// //listen for event to run fx
// d3.selectAll("#filter-btn").on("click", handleClick);

// buildTable(tableData);


//
// FINAL DRAFT
//

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  //detects change

  // Build the table when the page loads
  buildTable(tableData);

//   if _change was made___ 
//   update_filters()


// 3.  updateFilters()
//   variabled3select

// 4a  d3.select(this)
//   variable 

// 4b d3.select(this) save value of car
   
//  4c. d3.select(this) 