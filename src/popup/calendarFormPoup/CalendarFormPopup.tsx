import Image from "next/image";
import React, { useState } from "react";
import close from "../../images/cross.svg";
import CalendarInput from "@/components/input/calendar/CalendarInput";
import Clock from "@/components/clock/Clock";

export interface CalendarFormPopup {
  closeModel: any;
  model: boolean;
}

const CalendarFormPopup = (props: CalendarFormPopup) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);

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
          <Clock />
        </div>
      </div>
    </>
  );
};

export default CalendarFormPopup;
