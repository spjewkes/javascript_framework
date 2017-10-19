import moment from 'moment';

console.log("Executing JavaScript!");
console.log("The day will end " + moment().endOf('day').fromNow());

var name = "Dave", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

