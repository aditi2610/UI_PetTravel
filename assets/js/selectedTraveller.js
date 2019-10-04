function selectedTravellerDetails(){

    var urlParams = new URLSearchParams(window.location.search);
    var flyerId = urlParams.get('flyerId');
    var flyer_data = JSON.parse(localStorage.getItem(flyerId))
    var from = flyer_data["Departure"]["AirportName"]
    var to = flyer_data["Arrival"]["AirportName"]
    var sel = document.getElementById("travelDetails");
    sel.innerHTML = `${from}<br> to <br>${to}<br>`

    var sel = document.getElementById("travelTime");
    sel.innerHTML = `${flyer_data["Departure"]["Date"]} &nbsp;<br>${flyer_data["Departure"]["Time"]} - ${flyer_data["Arrival"]["Time"]}<br><br>Main Cabin<br>Non-Stop<br>`
}