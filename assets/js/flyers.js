function fillFlyers() {
    var urlParams = new URLSearchParams(window.location.search);
    var source = urlParams.get('source')
    var dest = urlParams.get('dest')
    var source_date = urlParams.get('source_date')

    const url = `http://localhost:8000/united/plan?source=${source}&dest=${dest}&source_date=${source_date}`;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            localStorage.setItem("plan", JSON.stringify(data));
            console.log(data["onwards"]);
            var onwards = data["onwards"]
            var count = 1;
            for (var key in onwards) {
                if (count > 3) {
                    break;
                }

                console.log(onwards[key])
                var flyer_data = onwards[key]

                var sel = document.getElementById(`flyer${count}_data`);
                sel.innerHTML = `${flyer_data["Departure"]["Time"]} | ${flyer_data["Departure"]["AirportCode"]} -&gt; ${flyer_data["Arrival"]["AirportCode"]}<br>Rating Stars: 4/5
                <br>Testimonials: Super Awesome!<br>`

                var sel = document.getElementById(`flyer${count}_name`);
                sel.innerHTML = `${flyer_data["kinship_name"]} | ${flyer_data["kinship_id"]}`
                var storagename = `flyer${count}`;
                localStorage.setItem(storagename, JSON.stringify(flyer_data));
                count++;
            }
        } else {
            console.log("I met an Error");
        }
    }

    request.onerror = function () {
        console.error('An error occurred fetching the JSON from ' + url);
    };
    request.send()
}

function flyer(flyerId){
    url = "../../selectedTraveller.html?" + "flyerId=" + flyerId;
    window.location = url;
}
