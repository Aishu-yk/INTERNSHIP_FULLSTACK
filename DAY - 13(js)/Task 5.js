//BMI calculator

function bmical(weight,height) {
    var bmi=weight/(height*height);
    return Math.round(bmi);  // or use parseInt()
}
var bmi = bmical(65,1.8);
console.log(bmi);
