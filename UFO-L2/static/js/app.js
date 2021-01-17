// from data.js
var tableData = data;
var button = d3.select("#filter-btn");

//Read the table from data.js
const tbody = d3.select("tbody");

tableData.forEach(function(entry){
    var tableRow = tbody.append('tr');
    tableRow.append('td').text(entry.datetime);
    tableRow.append('td').text(entry.city);
    tableRow.append('td').text(entry.state);
    tableRow.append('td').text(entry.country);
    tableRow.append('td').text(entry.shape);
    tableRow.append('td').text(entry.durationMinutes);
    tableRow.append('td').text(entry.comments);
    });

button.on("click",function() {
    //Clear TBODY
    tbody.html("");

    //Select HTML elements, create variable for each element

    var dateFilter = d3.select("#datetime").property("value");
    var cityFilter = d3.select('#city').property("value");
    var stateFilter = d3.select('#state').property("value");
    var countryFilter = d3.select('#country').property("value");
    var shapeFilter = d3.select("#shape").property("value");

    filteredData = tableData;

    if (dateFilter != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.datetime === dateFilter);
    }
    if (cityFilter != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.city === cityFilter);
    }
    if (stateFilter != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.state === stateFilter);
    }
    if (countryFilter != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.country === countryFilter);
    }
    if (shapeFilter != ""){
    filteredData = filteredData.filter(sighting =>
    sighting.shape === shapeFilter);
    }
        
    // Append filtered data to the table 
    filteredData.forEach(function(info) {
    var tableRow = tbody.append("tr");
        Object.entries(info).forEach(function([key,value]) {
            var cell = tableRow.append("td");
            cell.text(value);
            });
        });
    
    // if statement for invalid date selection
    if (filteredData.length == 0) {
        var tableRow = tbody.append("tr");
        var cell = tableRow.append("td");
            cell.text("NO DATA AVAILABLE FOR FILTER CRITERIA");
            };         
});


