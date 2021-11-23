document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
    hora(document.getElementById("hora").value);
    dia(document.getElementById("dia").value);
    horafi(document.getElementById("horafi").value);
    evento(document.getElementById("evento").value);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Hola Habla Calendario, tu Alarma se LLama "+texto));

}
function hora(hora){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Y comenzara a las "+hora));

}
function dia(dia){
    speechSynthesis.speak(new SpeechSynthesisUtterance("El dia "+dia));

}
function horafi(horafi){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Y hora de Terminar "+horafi));

}
function evento(evento){
    speechSynthesis.speak(new SpeechSynthesisUtterance("y tu Descripcion es "+evento));

}
