import Image from "next/image";
import React, { useState } from "react";
import close from "../../images/cross.svg";
import CalendarInput from "@/components/input/calendar/CalendarInput";

export interface CalendarFormPopup {
  closeModel: any;
  model: boolean;
}

const CalendarFormPopup = (props: CalendarFormPopup) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  const hors: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minute: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60,
  ];

  React.useEffect(() => {}, [modelOpen]);
  return (
    <>
      <div className="popup" style={{ width: "65%" }}>
        <div className="popupTitle my-3">
          <p className="font-bold text-lg">Calendar Meeting Form</p>
          <button
            onClick={() => {
              props.closeModel(false);
            }}
          >
            <Image src={close} height={15} width={15} alt="closeIcon" />
          </button>
        </div>
        <div className="border-t flex items-center justify-between">
          <CalendarInput placeHolder={"Enter task Name"} />
          <div className="container mx-auto my-12 p-12 bg-gray-100">
            <div className="inline-flex text-lg border rounded-md shadow-lg p-2">
              <select
                name=""
                id=""
                className="px-2 outline-none appearance-none bg-transparent"
              >
                {hors.map((item: any, index: number) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <span className="px-2">:</span>
              <select
                name=""
                id=""
                className="px-2 outline-none appearance-none bg-transparent"
              >
                {minute.map((item: any, index: number) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <select
                name=""
                id=""
                className="px-2 outline-none appearance-none bg-transparent"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 
               text-white font-bold py-2 px-4 rounded"
          >
            OK
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 
               text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              props.closeModel(false);
            }}
          >
            CANCLE
          </button>
        </div>
      </div>
    </>
  );
};

export default CalendarFormPopup;
