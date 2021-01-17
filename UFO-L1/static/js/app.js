// from data.js
var tableData = data;
var button = = d3.select("#filter-btn");

//Read the table from data.js
var tbody = d3.select("tbody");

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

