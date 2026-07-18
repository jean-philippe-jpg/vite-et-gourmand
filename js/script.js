
const tokenCookiName = 'accesToken';
const signout = document.getElementById('sign-up');

signout.addEventListener('click', signup);

function signup(){

    eraseCookie(tokenCookiName);
    window.location.reload();
}

function setToken(Token){
     setCookie(tokenCookiName, tokenCookiName, 7);
}

function getToken(){
    return getCookie(tokenCookiName)
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isConnected(){

    if( getToken() == null || getToken == undefined){

        return true


    } else{

        return false

    }
}


        if(getToken()){

            console.log(' vous etes connécter')
        } else {
            console.log(` vous n'etes pas connécter`)

        }