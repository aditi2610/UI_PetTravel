function getToAirports() {

    const url = 'http://localhost:8000/united/airports/';

    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
        
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