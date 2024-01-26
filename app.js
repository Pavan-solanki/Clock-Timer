const dayEle = document.querySelector(".day");
const hourEle = document.querySelector(".hour");
const minuteEle = document.querySelector(".minutes");
const secondEle = document.querySelector(".seconds");
const countainTimer = document.querySelector(".containTimer");
const heading = document.querySelector("h1");
let second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const counterTimer = () => {
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"), // Added 1 to month to make it 1-based (January is 1)
    yyyy = now.getFullYear();

  now = `${mm}/${dd}/${yyyy}`;
    let enterDay, enterMonth;

  do {
    enterDay = prompt("Enter day (less than 31)").padStart(2, "0");
  } while (parseInt(enterDay) >= 31);

  do {
    enterMonth = prompt("Enter month (less than 12)").padStart(2, "0");
  } while (parseInt(enterMonth) >= 12);
  let target = `${enterMonth}/${enterDay}/${yyyy}`;

  if (now > target) {
    target = `${enterMonth}/${enterDay}/${yyyy + 1}`;
  }

  const invalid = setInterval(() => {
    let timer = new Date(target).getTime();
    let today = new Date().getTime();
    let diff = timer - today;
    let leftDay = Math.floor(diff / day);
    let leftHour = Math.floor((diff % day) / hour);
    let leftMinute = Math.floor((diff % hour) / minute);
    let leftSeconds = Math.floor((diff % minute) / second);

    dayEle.innerText = leftDay;
    hourEle.innerText = leftHour;
    minuteEle.innerText = leftMinute;
    secondEle.innerText = leftSeconds;

    if (diff <=0) {
      countainTimer.style.display = "none";
      heading.innerText = "Time's Up!";
      clearInterval(invalid);
    }
  }, 0);
};

counterTimer();
