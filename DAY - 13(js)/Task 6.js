//BMI Advanced calculator

function bmiCalculator(weight,height) {
    var bmi= weight/(height*height);

    if (bmi<18.5){
        return `Your BMI is ${bmi.toFixed(1)}, So you are Underweight.`
    }
    else if(bmi>18.5 && bmi<24.9){
        return `Your BMI is ${bmi.toFixed(1)}, So you have Normal weight.`
    }
    else if(bmi>24.9){
        return `Your BMI is ${bmi.toFixed(1)}, So you are Overweight.`
    }
}
let msg = bmiCalculator(60,1.7);
console.log(msg);
