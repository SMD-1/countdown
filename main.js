const DaysEl = document.getElementById('days');
const HoursEl = document.getElementById('hours');
const MinutesEl = document.getElementById('minutes');
const SecondsEl = document.getElementById('seconds');


const birthDay = '11 Oct 2020';

function countDown(){
	const birthDayDate = new Date(birthDay);
	const currentDate = new Date();
	const totalSeconds =Math.floor( (birthDayDate - currentDate) / 1000);

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor((totalSeconds / 3600) %24 );
	const minutes = Math.floor((totalSeconds / 60) % 60);
	const seconds = Math.floor((totalSeconds) % 60);
	// console.log(days, hours, minutes, seconds);

	DaysEl.innerHTML = format(days);
	HoursEl.innerHTML = format(hours);
	MinutesEl.innerHTML = format(minutes);
	SecondsEl.innerHTML = format(seconds);
	if(new Date() === birthDay)
	{
		document.getElementById('afterBirthDay').innerHTML = `Happy BirthDay Danish😎🥳 One more year has been past🥱.`;
	}
}

function format(time){
	return time < 10 ? `0${time}` : time;
}

countDown(); 



setInterval(countDown,1000);
