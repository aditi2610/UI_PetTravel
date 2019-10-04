function doFunction() {

    var x = document.getElementById("b1");

    var request = new XMLHttpRequest()
    var kinship_id = localStorage.getItem("kinship_id")
    request.open('GET', `http://localhost:8000/kinship/${kinship_id}/`, true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)
        if (request.status >= 200 && request.status < 400) {
            // alert("Hello");
            //alert(data.name);
            localStorage.setItem("pet_data", JSON.stringify(data));
            document.getElementById("userName").innerHTML = data.name;
            // data.forEach(movie => {
            // console.log(movie.title)
            // })
        } else {
            console.log('error')
        }
    }

    request.send()
}