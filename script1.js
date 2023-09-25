var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all?fields=name,flags");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
    console.log(result);
}