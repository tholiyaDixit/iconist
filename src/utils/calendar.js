import moment from "moment";

export const getMonthDay = (date) => {
  // return moment().daysInMonth();
  return moment(date, "YYYY-MM-DD").daysInMonth()
};

export const getCurrentWeekName = () => {
  //    var mydate = "2017-06-28T00:00:00";
  //   var weekDayName = moment().format('dddd');
  //   console.log(weekDayName);

  return moment().format("dddd");
};

export const getCurrentDay = () => {
  return moment().day();
};

export const getStartMonthWeekNumber = (newDate) => {
  //   var mydate = "2017-06-28";
  return moment(newDate).day();
};

export const getTotalMonthDayArray = (newDate) => {
  console.log("newDate ---",newDate);
  const MonthDay = getMonthDay(newDate);
  const startMonthWeekNumber = getStartMonthWeekNumber(newDate);
  let array = [];

  for (let i = 1; i <= startMonthWeekNumber; i++) {
    array.push(0);
  }

  for (let i = 1; i <= MonthDay; i++) {
    array.push(i);
  }
  console.log("startMonthWeekNumber ---", startMonthWeekNumber);
  console.log("array ---", newDate);
  return array;
};

export const getMonthName = (date) => {
  var oneDate = moment(date);
  var monthName = oneDate.format('MMMM');
   
  console.log(monthName);
  return monthName
}
