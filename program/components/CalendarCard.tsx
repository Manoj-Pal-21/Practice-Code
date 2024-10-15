import React, { useCallback, useEffect } from "react";
import { CustomCalendar } from "../../../common-components";
import { dateInBetween, formtDate } from "@/utils/common";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { checkErollStatusService } from "@/services/revisionService";
import { useAppContext } from "@/context/AppContext";
const startDate = "04-05-2024";
const endDate = "06-03-2024";

export default function CalendarCard() {
  const router = useRouter();
  const { user } = useAppContext();

  const clickHandler = (date: any) => {
    let currentDate = formtDate(dayjs()?.toDate(), "YYYY-MM-DD");
    let formattedDate = formtDate(date, "YYYY-MM-DD");
    if (!dateInBetween(formattedDate, startDate, currentDate, "day", "[]"))
      return Swal.fire("You can't access revision questions for this date.");
    router.push(`/practice/questions?date=${formattedDate}`);
  };

  const getUserEnrolledStatus = useCallback(async () => {
    try {
      const response = await checkErollStatusService(user?.email);
      if (!response) router.push("/revision");
    } catch (err) {
      if (err instanceof Error) {
        router.push("/revision");
        console.log(err.message);
      }
    }
  }, [user?.email]);

  useEffect(() => {
    getUserEnrolledStatus();
  }, [getUserEnrolledStatus]);

  return (
    <CustomCalendar
      className="!w-full"
      minDate={new Date(startDate)}
      maxDate={new Date(endDate)}
      onChange={clickHandler}
    />
  );
}
