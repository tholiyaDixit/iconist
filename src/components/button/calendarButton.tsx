import React, { useEffect, useState } from "react";

interface CalendarButtonProps {
  svg: any;
  currentMonthNumber: number;
  position: string;
  date: string;
  currentYearNumber: number;
  newDate: any; // function
  updatedMonth: any; // function
  updatedYear: any; // function
}
const CalendarButton = (props: CalendarButtonProps) => {

  const [updateCalenderMonth, setUpdateCalenderMonth] = useState<number>(
    props.currentMonthNumber
  );
  const [updateCalenderYear, setUpdateCalenderYear] = useState<number>(
    props.currentYearNumber
  );
  const [updateDate, setUpdateDate] = useState<string>(props.date);

  const changeDate = () => {
    let currenMonth = props.currentMonthNumber;
    let currenYear = props.currentYearNumber;
    if (props.position == "greaterThan" && currenMonth !== 12) {
      setUpdateCalenderMonth(currenMonth + 1);
      setUpdateDate(`${currenYear}-${currenMonth + 1}-01`);
    } else if (props.position == "greaterThan" && currenMonth == 12) {
      setUpdateCalenderMonth(1);
      setUpdateCalenderYear(currenYear + 1);
      setUpdateDate(`${currenYear + 1}-${1}-01`);
    }
    else if (props.position == "lessThan" && currenMonth !== 1) {
        setUpdateCalenderMonth(currenMonth - 1);
        setUpdateDate(`${currenYear}-${currenMonth - 1}-01`);
      } else if (props.position == "lessThan" && currenMonth == 12) {
        setUpdateCalenderMonth(12);
        setUpdateCalenderYear(currenYear - 1);
        setUpdateDate(`${currenYear - 1}-${12}-01`);
      }
  };
  useEffect(() => {
    // console.log("updateDate ---", updateDate);

    !!updateDate && props.newDate(updateDate);
    !!updateCalenderMonth && props.updatedMonth(updateCalenderMonth);
    !!updateCalenderYear && props.updatedYear(updateCalenderYear)
  }, [updateDate]);
  return (
    <button
      className="p-4 rounded-md bg-indigo-200 text-indigo-600"
      onClick={changeDate}
    >
      {props.svg}
    </button>
  );
};

export default CalendarButton;
