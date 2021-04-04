function show_value(x){
    document.getElementById("slider_value").innerHTML=x;
}
function compute(){
    var principal = document.getElementById("principal");
    //check that user enters a positive number
    if(principal.value<=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    var rate = document.getElementById("rate");
    var years = document.getElementById("years"); 
    var interest = Number(principal.value) * Number(years.value) * Number(rate.value) / 100;
    //var total = Number(principal.value) + interest;
    var end = Number(years.value) + 2021;

    document.getElementById("result1").innerHTML = "If you deposit " + "<span class='highlight'>" + principal.value + "</span>" + ",";
    document.getElementById("result2").innerHTML = "at an interest rate of " + "<span class='highlight'>" + rate.value + "%" + "</span>" + ".";
    document.getElementById("result3").innerHTML = "You will receive " + "<span class='highlight'>" + interest + "</span>"+ ",";
    document.getElementById("result4").innerHTML = "in the year " + "<span class='highlight'>" + end + "</span>" + ".";
}