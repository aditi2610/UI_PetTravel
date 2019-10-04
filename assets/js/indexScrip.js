function clickSubmit() {
    localStorage.setItem("kinship_id", document.getElementById("kinship_id_no").value);
    url = "../../veryfyingrequirement.html";
    window.location = url;
}