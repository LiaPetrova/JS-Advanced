function timeToWalk (steps, meters,speed) {
let distance = steps * meters;
let speedInMpS = speed / 3.6;
let timeNeeded = distance / speedInMpS;
let breaksCount = Math.floor(distance /500);
timeNeeded += breaksCount*60;
let hours = Math.floor(timeNeeded /3600);
let minutes = Math.floor((timeNeeded%3600) / 60);
let seconds = Math.ceil(timeNeeded % 60);

return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`

}
console.log(timeToWalk (4000, 0.60, 5)); 
console.log(timeToWalk(2564, 0.70, 5.5));