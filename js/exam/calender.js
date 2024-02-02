function printCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  console.log(`${year}년 ${month}월`);
  console.log("일 월 화 수 목 금 토");

  let dayCounter = 0;
  let calendar = "";

  for (let i = 0; i < startingDay; i += 1) {
    calendar += "   ";
    dayCounter++;
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    if (day < 10) {
      calendar += ` ${day} `;
    } else {
      calendar += `${day} `;
    }

    dayCounter++;
    if (dayCounter % 7 === 0) {
      calendar += "\n";
    }
  }

  console.log(calendar);
}

const date = new Date("2024-02-01");
printCalendar(date);
