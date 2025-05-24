let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

sendGetRequestBtnEl.onclick = function() {
    loadingEl.classList.toggle("d-none");
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let stringifiedData = JSON.stringify(jsonData);
            loadingEl.classList.toggle("d-none");
            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = stringifiedData;
        });
}
