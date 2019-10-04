function getToAirports() {

    const url = 'http://localhost:8000/united/airports/';

    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            localStorage.setItem("airports", JSON.stringify(data));
            var sel = document.getElementById('SelectAirTo');
            
            for (var key in data) {
                if (!data.hasOwnProperty(key)) {           
                    continue;
                }
                var opt = document.createElement('option');
                opt.appendChild( document.createTextNode(data[key] + " (" + key + ")"));
                opt.value = data[key];
                sel.appendChild(opt);
            }
            //console.log("size: " + dropdown.length);
            
        } else {
            console.log("I met an Error");
        }
    }

    request.onerror = function () {
        console.error('An error occurred fetching the JSON from ' + url);
    };

    request.send()
}

function nextPage() {
    var toAirport = document.getElementById("SelectAirTo").value;
    var fromAirport = document.getElementById("SelectAir").value;
    var sourceDate = document.getElementById("sourceDate").value;

    var dest = "";
    var source = "";
    var source_date = "";

    airports = JSON.parse(localStorage.getItem("airports"))
    for (var key in airports) {
        if (airports[key] == fromAirport) {
            dest = key;
        }

        if (airports[key] == toAirport) {
            source = key;
        }
    }

    url = "../../pickflyer.html?" + "source=" + source + "&dest=" + dest + "&source_date=" + sourceDate;
    window.location = url;
}