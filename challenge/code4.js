const clockTitle = document.querySelector(".js-clock");

function count() {
  const xmas = new Date('2022-12-25T00:00:00').getTime();
  const nowTime = new Date().getTime();
  const difference = xmas - nowTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0");
  const seconds = String(Math.floor(difference % (1000 * 60) / 1000)).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

count();
setInterval(count, 1000);