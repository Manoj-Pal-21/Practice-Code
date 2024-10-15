"use client";
import React from "react";
import { CustomHeading, CustomText } from "../../common-components";
import CalendarCard from "./components/CalendarCard";

export default function RevisionProgram() {
  return (
    <div>
      <CustomHeading order={1} className="mt-8 mb-10 text-center !text-3xl">
        UPSC CSE Prelims 2024 Revision Program
      </CustomHeading>
      <CustomText className="text-center !text-base">
        Welcome to our 60-day UPSC CSE Prelims 2024 Revision Program!
      </CustomText>
      <CustomText className="mb-6 text-center !text-base">
        With our 60-day revision program, we ensure that you are not just
        prepared but confident for UPSC CSE Prelims 2024.
      </CustomText>
      <div className="flex flex-col gap-4">
        <CalendarCard />
      </div>
    </div>
  );
}
