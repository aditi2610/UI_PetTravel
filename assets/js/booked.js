function bookingDetails(){
    var urlParams = new URLSearchParams(window.location.search);
    var flyerId = urlParams.get('flyerId');
    var flyer_data = JSON.parse(localStorage.getItem(flyerId))
    var pet_data = JSON.parse(localStorage.getItem("pet_data"))

    var sel = document.getElementById("passengerName");
    sel.innerHTML = `${flyer_data["kinship_name"]} will be notified and is looking forward to the trip with your pet ${pet_data["name"]}!`
}