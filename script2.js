var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/aruba?fullText=true");
request.open("GET", "https://restcountries.com/v3.1/region/europe");
request.open("GET", "https://restcountries.com/v3.1/subregion/Northern%20Europe");
request.open("GET", "https://restcountries.com/v3.1/demonym/peruvian");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
    console.log(result);
}