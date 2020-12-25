var subect1 = prompt ("Enter the marks of first subject");
subject1 = Number(subect1);

var subject2 = prompt("Enter the marks of second subject");
subject2 = Number(subject2);

var subject3 = prompt("Enter the marks of third subject");
subject3 = Number(subject3);

var average = (subject1 + subject2 + subject3) / 3

if (average >= 80){
    alert( "you are above standard, Admission Granted!")
}