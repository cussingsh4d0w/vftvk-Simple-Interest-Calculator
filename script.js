function compute(){
    var principal = document.getElementById("principal").value;
    if(principal.value<=0){
        alert("Enter a positive number");
        fname.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var end_year = 2021 + years;

    document.getElementById("result").innerHTML = "Test"
    document.getElementById("result").innerHTML = "If you deposit " + <mark>principal</mark> + "/n";
    document.write("at an interest rate of " + <mark>rate</mark> + "/n");
    document.write("You will receive an amount of " + <mark>principal + interest</mark> + "/n");
    document.write("in the year " + <mark>end_year</mark> + "/n");
}
function show_value(x){
    document.getElementById("slider_value").innerHTML=x;
}
        