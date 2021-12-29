// when we press button displaying on the input screen

function clickBtn(val){

 document.getElementById('inputScreen').value=document.getElementById('inputScreen').value+val;
    
}
//Clearing the input screen

function clearScreen(){

    document.getElementById('inputScreen').value="";
}

//Making the button to calculate
//1.Target the inputscreen 
//2.make the value of the inputscreen to eval(evaluate)
//3.make the value of the inputscreen to be the result of the eval..

function define(){
    let text = document.getElementById('inputScreen').value;
    let result = eval(text);
    document.getElementById('inputScreen').value=result;
}