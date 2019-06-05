var name;
var secondName;
var patronymic;
var age;
var isPensia = false;
do {
name = prompt('your name');
} while (typeof name == 'undefined' || name == null||name=="");

do {
    secondName=prompt ('Second name:');
}while(secondName=="");

do{
    patronymic = prompt('Patronymic:');
}while (patronymic=="");

do{
    age = prompt('Age:');
}while (age<'0'||age>'9'||age>120||age=="");

var sex = 'Male';
var isMale = confirm('Male?');
if (isMale == false)
    sex = 'Female';
    
var yearsToDays = (age) => age*365;
var inFiveYears = (age) => parseInt(age)+5;

if ((age)>65&&(sex='Male')||(age>63)&&(sex = 'Female'))
    isPensia = true;

alert ('Full name: '+name+ ' ' + secondName + ' ' + patronymic + '\n' + 'Age in years: ' + age + '\n'+'Age in days: '+ yearsToDays(age) + '\n' + 'Your age in 5 years: ' + inFiveYears(age) +'\n' + 'Sex: ' + sex + '\n' + 'You are on pensia:' + isPensia); 



