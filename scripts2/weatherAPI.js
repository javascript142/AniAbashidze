async function weatherForecast() {
  let longitute = document.getElementById("longitute").value;
  let latitude = document.getElementById("latitute").value;

  longitute = parseFloat(longitute);
  latitude = parseFloat(latitude);

  let apiData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitute}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`,
    {
      method: "GET",
    }
  );

  let apiDataInJson = await apiData.json();
  console.log(apiDataInJson);
}
