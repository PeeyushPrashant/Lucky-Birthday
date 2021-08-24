const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const Output= document.querySelector("#output");


checkBtn.addEventListener("click",checkBirthdayIsLucky);

function compareValues(sum , luckyNo)
{
   if(sum%luckyNo==0)
     {
       Output.innerText= "Hurray!! You b'day is lucky ";

     }
    else{
        Output.innerText= "Sorry! You b'day is not lucky ";
    }
}

function checkBirthdayIsLucky(){
    
    if(dateOfBirth.value && luckyNumber.value)
    {
        if(luckyNumber.value<=0)
        Output.innerText= "Lucky number should be greater than 0";
        else{
            const dob=dateOfBirth.value;
            const sum= calculateSum(dob);
            compareValues(sum,luckyNumber.value);
        }
       
    }
    
    else{
         Output.innerText= "Please enter both the feilds."
    }
}

function calculateSum(dob)
{
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0; index<dob.length; index++)
    {
        sum+= Number(dob.charAt(index));
    }
    return sum;
}

