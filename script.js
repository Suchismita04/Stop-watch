let startBtn=document.getElementById('start');
let stopBtn=document.getElementById("stop");
let resetBtn=document.getElementById('restart');
let hour=0o0;
let minitue=0o0;
let second= 0o0;
let count = 0o0;

function showBtn() {
   
    
}

startBtn.addEventListener('click',function() { //it's like an onclick function without write the functio in the html  
   
        timer=true;
        stopWatch();
        // startBtn.textContent="Stop"

})
stopBtn.addEventListener('click',function() {
    timer=false;
    // stopBtn.textContent="Start"
})

resetBtn.addEventListener('click',function () {

    timer=false;
    hour=0;
    minitue=0;
    second=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
})



function stopWatch() {
 if (timer) {
    count++;
    if (count==100) {
        second++;
        count=0;
    }
    if (second==60) {
        minitue++;
        second=0;
    }
    if (minitue==60) {
        hour++;
        minitue=0
        second=0
    }
    let hrString=hour;
    let minString=minitue;
    let secString=second;
    let couString=count;
    if (hrString<10) {
        hrString="0"+hrString;
    }
    if (minString<10) {
        minString="0"+minString;
    }
    if (secString<10) {
        secString="0"+secString;
    }
    if (couString<10) {
        couString="0"+couString;
    }
    document.getElementById("hr").innerHTML=hrString;
    document.getElementById("min").innerHTML=minString;
    document.getElementById("sec").innerHTML=secString;
    document.getElementById("count").innerHTML=couString;
    setTimeout(stopWatch,10);

 }
    
}