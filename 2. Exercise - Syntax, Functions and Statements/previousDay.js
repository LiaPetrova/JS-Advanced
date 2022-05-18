function previousDay (year, month, day) {
const date = new Date(year, month-1, day);
// console.log(date);
let milisecs = 1000*60*60*24
let resultDate = new Date();
 resultDate.setTime(date.getTime() -milisecs);
// console.log(resultDate);
let currentDate = [];
currentDate.push(resultDate.getFullYear(), (resultDate.getMonth()+1), resultDate.getDate());
console.log(currentDate.join('-'));
// let dateString = year + '-' + month + '-' + day;
// let event = new Date(dateString);
// event.setDate(day-1);
// console.log(event.getFullYear()+ '-' + (Number(event.getMonth() +1)) + '-' + event.getDate());
}
previousDay (2016,10, 1);
previousDay(2016, 09, 30)