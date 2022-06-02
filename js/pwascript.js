if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
	const url = "https://github.com/Jaozin04/pwa";
	  navigator.serviceWorker
		.register(`${url}/js/sw.js`)
		.then(res => console.log("service worker registered"))
		.catch(err => console.log("service worker not registered", err))
	})
}

async function Location(n) {
	const result = await fetch (`https://rickandmortyapi.com/api/location/${n}`);
	const location = await result.json();
	console.log(location.name);

	const p = `<p> Mundo 15: ${location.name}<p>`;
	document.body.insertAdjacentHTML('afterbegin',p);
}

async function Character(n) {
	const result = await fetch (`https://rickandmortyapi.com/api/character/${n}`);
	const character = await result.json();

	console.log(character.name);
	console.log(character.status);

	const pn = `<p> Personagem: ${character.name}<p>`;
	const ps = `<p> Status: ${character.status}<p>`;
	document.body.insertAdjacentHTML('afterbegin',pn);
	document.body.insertAdjacentHTML('afterbegin',ps);
}

async function Episode(n) {
	const result = await fetch (`https://rickandmortyapi.com/api/episode/${n}`);
	const episode = await result.json();
	console.log(episode.name);

	const p = `<p> Nome do episodio 5: ${episode.name}<p>`;
	document.body.insertAdjacentHTML('afterbegin',p);
}

if ('getBattery' in navigator || ('battery' in navigator && 'Promise' in window)) {
	var target = document.getElementById('target');
  
	function handleChange(change) {
	  var timeBadge = new Date().toTimeString().split(' ')[0];
	  var newState = document.createElement('p');
	  newState.innerHTML = '' + timeBadge + ' ' + change + '.';
	  target.appendChild(newState);
	}
	
	function onChargingChange() {
	  handleChange('Battery charging changed to ' + (this.charging ? 'carregando' : 'descarregando') + '')
	}
	function onChargingTimeChange() {
	  handleChange('Battery charging time changed to ' + this.chargingTime + ' s');
	}
	function onDischargingTimeChange() {
	  handleChange('Battery discharging time changed to ' + this.dischargingTime + ' s');
	}
	function onLevelChange() {
	  handleChange('Battery level changed to ' + this.level + '');
	}
  
	var batteryPromise;
	
	if ('getBattery' in navigator) {
	  batteryPromise = navigator.getBattery();
	} else {
	  batteryPromise = Promise.resolve(navigator.battery);
	}
	
	batteryPromise.then(function (battery) {
	  document.getElementById('charging').innerHTML = battery.charging ? 'carregando' : 'descarregando';
	  document.getElementById('chargingTime').innerHTML = battery.chargingTime + ' s';
	  document.getElementById('dischargingTime').innerHTML = battery.dischargingTime + ' s';
	  document.getElementById('level').innerHTML = battery.level;
	  
	  battery.addEventListener('chargingchange', onChargingChange);
	  battery.addEventListener('chargingtimechange', onChargingTimeChange);
	  battery.addEventListener('dischargingtimechange', onDischargingTimeChange);
	  battery.addEventListener('levelchange', onLevelChange);
	});
}

document.getElementById('result').innerHTML = navigator.deviceMemory || 'unknown'













