function updateTime() {
  //los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss"
  )} <small>${losAngelesTime.format("A")}</small>`;

  //Jakarta
  let jakartaElement = document.querySelector("#jakarta");
  let jakartaDateElement = jakartaElement.querySelector(".date");
  let jakartaTimeElement = jakartaElement.querySelector(".time");
  let jakartaTime = moment().tz("Asia/Jakarta");

  jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
  jakartaTimeElement.innerHTML = `${jakartaTime.format(
    "h:mm:ss"
  )} <small>${jakartaTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
