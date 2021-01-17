//Assign the data from 'data.js' to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
const tableBody = d3.select("tbody")
    //append objects from the data file (data.js) into the new table rows
    tableData.forEach(item => {
        var tableRow = tableBody.append('tr');
        tableRow.append('td').text(item.datetime);
        tableRow.append('td').text(item.city);
        tableRow.append('td').text(item.state);
        tableRow.append('td').text(item.country);
        tableRow.append('td').text(item.shape);
        tableRow.append('td').text(item.durationMinutes);
        tableRow.append('td').text(item.comments);
        });    

button.on("click",function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select('#city').property("value");
    var stateInput = d3.select('#state').property("value");
    var countryInput = d3.select('#country').property("value");
    var shapeInput = d3.select("#shape").property("value");

    // Get the value property of the input element
    console.log(dateInput);
    console.log(cityInput);
    console.log(stateInput);
    console.log(countryInput);
    console.log(shapeInput);

    filteredData = tableData;

    if (dateInput != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.datetime === dateInput);
    }
    if (cityInput != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.city === cityInput);
    }
    if (stateInput != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.state === stateInput);
    }
    if (countryInput != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.country === countryInput);
    }
    if (shapeInput != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.shape === shapeInput);
    }
    console.log("filtered data", filteredData);

    // Select the table body and assigning it to a variable
    var tableBody = d3.select("tbody");

    //clear the table before appending the data
    tableBody.html("");

    // Append filtered data to the table 
    filteredData.forEach(function(info) {
        var tableRow = tableBody.append("tr");
        Object.entries(info).forEach(function([key,value]) {
            console.log(key,value);
            var cell = tableRow.append("td");
            cell.text(value);
        });
    });
});
