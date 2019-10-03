function getAirports() {

    // document.getElementById("fromAirports").classList.toggle("show");
    
    // let dropdown = document.getElementById('fromAirports');
    // dropdown.length = 0;

    // let defaultOption = document.createElement('option');
    // defaultOption.text = 'Choose Airport';

    // dropdown.options.add(defaultOption);
    // dropdown.selectedIndex = 0;

    const url = 'http://localhost:8000/united/airports/';

    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            console.log("adiit I am outside loop")

            var sel = document.getElementById('SelectAir');

            for (var key in data) {
                if (!data.hasOwnProperty(key)) {           
                    continue;
                }
            //console.log("Here is the lenght : "+ dropdown.option.length);
                //alert(data[key]);
            //    var option = document.createElement('option');
                // dropdown.innerHTML +
                //         '<option value="' + key + '">' + data[key] + '</option>';
                console.log("hey"+ key + " "+ data[key]);

                // document.getElementById("options").innerHTML = key + " " + data[key];
                // dropdown.innerHTML +
                //         '<option value="' + key + '">' + data[key] + '</option>';

                var opt = document.createElement('option');
                opt.appendChild( document.createTextNode(data[key] + " (" + key + ")"));
                opt.value = data[key];
                sel.appendChild(opt);
            }
            console.log("size: " + dropdown.length);
            
        } else {
            console.log("I met an Error");
        }
    }

    request.onerror = function () {
        console.error('An error occurred fetching the JSON from ' + url);
    };

    request.send()
}