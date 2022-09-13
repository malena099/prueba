const url="https://script.google.com/macros/s/AKfycbzGx73keTTbFXN8KJluAQzvc-Ta453N8U-gfzAGMT9shSrwS3S5izyM9ouJDd5NHyTL/exec";
    fetch(url)
    .then(response =>response.json())
    .then(data=> console.log(data))

    //{document.getElementById("app").textContent;}
//document.getElementById("btn").addEventListener("click", testGS);
//    }