
function compute()
{   // Since we didn't wrap the input elements inside a form, we make any validations here.
    if (! validatePrincipal()){
        return false;
    }

    var principal = parseFloat(document.getElementById("principal").value);
    var rate      = parseFloat(document.getElementById("rate").value);
    var years     = parseFloat(document.getElementById("years").value);
    var interest  = principal * years * rate / 100;

    var resultObj = document.getElementById("result");
    resultObj.innerHTML =   `<p> If you deposit <mark>${principal}</mark>,<br>
                            at an interest rate of <mark>${rate}%</mark>.<br>
                            You will receive an amout of <mark>${interest}</mark>,<br> 
                            in the year <mark>${yearInFuture(years)}</mark> </p>`;
    return true;  
}


function validatePrincipal()
{
    var principal = document.getElementById("principal");
    // If the field is lesser or equal than 0 or is empty, yield and error and return the focus.
    if (parseFloat(principal.value) <= 0 || principal.value == ""){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    return true;
}

function yearInFuture(nYears)
{
    // n-years in the future is todays years + n years.
    return (new Date()).getFullYear() + nYears;
}

function setSliderTextOutput()
{   
    var rateValue = parseFloat(document.getElementById("rate").value);
    document.getElementById("rate:rateValue").textContent = (rateValue.toFixed(2) + " %" );
}