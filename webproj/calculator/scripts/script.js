let dsp=document.getElementById("disp");
let op;
let oval=0;
let val=0;
function buttonpress(x){
    console.log(x);
    val=val*10+x;
    console.log(val);
    dsp.textContent=val;
    
}

function oppress(x){
    console.log(x);
    op=x
    oval=+dsp.textContent;
    val=0;
    console.log(oval);
    console.log(val);
    dsp.textContent=x;
    
}
function eqpress(){
    switch (op) {
        case "x":
            result=oval*val;
            break;
        case "+":
            result=oval+val;
            break;
        case "-":
            result=oval-val;
            break;
        case "÷":
            result=oval/val;
            break;
        case "%":
            result=oval/100
    };
    dsp.textContent=result;
}
function cbutton(){
    dsp.textContent="0";
    oval=0;
    op=0;
    val=0;
}
function eraseb(){
    val=Math.trunc(val/10);
    console.log(val);
    dsp.textContent=val;
    
}