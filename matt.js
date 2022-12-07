function adduser(){
    jogadorumnome= document.getElementById("jogadorumnome").value ;
    jogadordoisnome= document.getElementById("jogadordoisnome").value ;
     
    localStorage.setItem("jogadorumnome", jogadorumnome);
    localStorage.setItem("jogadordoisnome",jogadordoisnome);

    window.location="maat.html";
}