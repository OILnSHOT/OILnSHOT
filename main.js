pogoda(document.getElementById("main__searchbar").value);
document.getElementById("main__searchbar").addEventListener("change", () => {
  pogoda(document.getElementById("main__searchbar").value);
});

async function pogoda(miasto) {
  const wynik = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${miasto}&appid=695e07855565e7f3f7717c4c470f77ce&units=metric`
  );
  const data = await wynik.json();
  console.log(data);
  document.getElementById("main__city").innerHTML = data.name;
  document.getElementById("main__temp").innerHTML = data.main.temp + "°C";
  document.getElementById("main__hum").innerHTML = data.main.humidity + "%";
  document.getElementById("main__wind").innerHTML = data.wind.speed + "m/s";
}
pogoda(document.getElementById("main__searchbar").value);

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let PMorAM = "AM";

  if (hour > 12) {
    PMorAM = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let time = hour + ":" + minute + ":" + second + " " + PMorAM;

  document.getElementById("main__clock").innerText = time;
  var wynik = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
