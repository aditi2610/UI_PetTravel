function doFunction() {

    var x = document.getElementById("b1");

    var request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:8000/kinship/123/', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            //  alert("Demo AsAlert");
            alert(data.owner_first_name);
            // data.forEach(movie => {
            // console.log(movie.title)
            // })
        } else {
            console.log('error')
        }
    }

    request.send()
}