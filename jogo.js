jogadorumnome = localStorage.getItem("jogadorumnome");
jogadordoisnome = localStorage.getItem("jogadordoisnome");
document.getElementById("jogadorumNome").innerHTML = jogadorumnome + ":";
document.getElementById("jogadordoisNome").innerHTML= jogadordoisnome + ":";
jogadorumponto = 0;
jogadordoisponto = 0;
document.getElementById("jogadorumScore").innerHTML = jogadorumponto;
document.getElementById("jogadordoisScore").innerHTML = jogadordoisponto;
document.getElementById("jogadorquestoes").innerHTML = "turno de pengunta - " + jogadorumnome;
document.getElementById("jogadorrespostas").innerHTML= "turno de resposta - " + jogadordoisnome;
function send(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    actual_answer = parseInt(numero1)*parseInt(numero2);
    question_number="<h4>"+numero1+"X"+numero2+"</h4>"
    input_box = "<br>Resposta : <input type='text' id='inputcheckbox'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>checar</button>";
    row = question_number+ input_box + checkbutton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}
turnoquestao="jogadorum";
turnoresposta="jogadordois";

function check(){
    getAnswer = document.getElementById("inputcheckbox").value;
    answer=getAnswer.toLowerCase();
    if(getAnswer == actual_answer){
        if(turnoresposta == "jogadorum"){
            jogadorumponto = jogadorumponto +1;
            document.getElementById("jogadorumScore").innerHTML = jogadorumponto;
        }
        else{
            jogadordoisponto = jogadordoisponto + 1;
            document.getElementById("jogadordoisScore").innerHTML = jogadordoisponto;
        }
    }
    if(turnoquestao == "jogadorum"){
        turnoquestao = "jogadordois";
        document.getElementById("jogadorquestoes").innerHTML= "Turno de pergunta: "+jogadordoisnome;
    }
    else{
        turnoquestao = "jogadorum";
        document.getElementById("jogadorquestoes").innerHTML= "Turno de pergunta: "+jogadorumnome;
    }
    if(turnoresposta == "jogadorum"){
        turnoresposta = "jogadordois";
        document.getElementById("jogadorrespostas").innerHTML= "Turno de resposta: "+jogadordoisnome;
    }
    else{
        turnoresposta = "jogadorum";
        document.getElementById("jogadorrespostas").innerHTML= "Turno de resposta: "+jogadorumnome;
    }
    document.getElementById("output").innerHTML="";

}