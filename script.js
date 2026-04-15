const api_key = "http://ip-api.com/json/"
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
        var response = JSON.parse(this.responseText);
        if(response.status!='sucess'){
            console.log('failed query');
            return
        }
    }
    if(response.countryCode == "US") {
        window.location.replace("https://google.com/");
    }
    if(response.countryCode == "CA") {
        window.location.replace("https://google.ca/");
    }
};
xhr.open('GET',api_key,true)
xhr.send()