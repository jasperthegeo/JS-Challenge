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

        button.on("click",function() {
            //Clear TBODY
            tbody.html("");
        
            // select input and convert to date object and condition to value
            var userDate = d3.select("#datetime");
            var dateValue = userDate.property("value");
           
            // Filter the data based on the input
            var filteredData = tableData.filter(tableData => tableData.datetime === dateValue);
        
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
                cell.text("NO DATA AVAILABLE FOR INPUT DATE");
            };
        
        });