function buttonClick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
console.log("Working")

function clearDisplay(){
    document.getElementById("screen").value="" //values cleares
}

function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
