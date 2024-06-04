import React, { useState } from "react";
import {
  getCurrentDay,
  getCurrentWeekName,
  getMonthDay,
  getMonthName,
  getStartMonthWeekNumber,
  getTotalMonthDayArray,
} from "@/utils/calendar";
import moment from "moment";
import { space } from "postcss/lib/list";
import CalendarButton from "@/components/button/calendarButton";

const calendar = () => {
  // const monthDay = getMonthDay();
  // const currentWeekName = getCurrentWeekName();
  // const currentDay = getCurrentDay();
  const StartMonthWeekNumber = getStartMonthWeekNumber("2024-06-01");
  const currentDate = moment().format("YYYY-MM-DD");
  const currentMonth = moment().format("MM");
  const currentYear = moment().format("YYYY");
  const [updatedDate, setUpdatedDate] = useState(
    `${currentYear}-${currentMonth}-01`
  );
  const [newMonth, setNewMonth] = useState(currentMonth);
  const [NewYear, setNewYear] = useState(currentYear);
  const TotalMonthDay = getTotalMonthDayArray(updatedDate);
  const monthName = getMonthName(updatedDate);

  const allWeekName: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  // let a = moment(newDate).day()
  console.log("mmmmmm ---", updatedDate);

  return (
    <>
      <div
        style={{ minWidth: "500px", width: "512px" }}
        className="bg-white shadow-xl overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center"
      >
        <div className="flex items-center justify-around px-4 py-6">
          <CalendarButton
            svg={
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            }
            date={updatedDate}
            currentMonthNumber={Number(newMonth)}
            currentYearNumber={Number(NewYear)}
            position={"lessThan"}
            newDate={(updateDate: any) => {
              setUpdatedDate(updateDate);
            }}
            updatedMonth={(updatemonth: any) => {
              setNewMonth(updatemonth);
            }}
            updatedYear={(updateYear: any) => {
              setNewYear(updateYear);
            }}
          />
          <button
           className="text-lg"
            onClick={() => {
              setUpdatedDate(`${currentYear}-${currentMonth}-01`);
            }}
          >
             {monthName}, {NewYear}
          </button>

          <CalendarButton
            svg={
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            }
            date={updatedDate}
            currentMonthNumber={Number(newMonth)}
            currentYearNumber={Number(NewYear)}
            position={"greaterThan"}
            newDate={(updateDate: any) => {
              setUpdatedDate(updateDate);
            }}
            updatedMonth={(updatemonth: any) => {
              setNewMonth(updatemonth);
            }}
            updatedYear={(updateYear: any) => {
              setNewYear(updateYear);
            }}
          />
        </div>
        <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
          {allWeekName.map((item: any, index: number) => {
            return (
              <div className="text-indigo-600" key={index}>
                {item}
              </div>
            );
          })}
          {TotalMonthDay.map((item: any, index: number) => {
            return (
              <a
                href="#"
                className="hover:bg-indigo-100 rounded-md p-2"
                key={index}
              >
                {item == 0 ? "" : item}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default calendar;
