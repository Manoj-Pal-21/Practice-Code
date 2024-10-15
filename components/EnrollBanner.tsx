"use client";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAppContext } from "@/context/AppContext";
import {
  CustomHeading,
  CustomImage,
  CustomModal,
  CustomText,
} from "@/app/common-components";
import {
  checkErollStatusService,
  enrollUserService,
} from "@/services/revisionService";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function EnrollBanner() {
  const [isUserEnrolled, setIsUserEnrolled] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const { user, loginUser } = useAppContext();
  const router = useRouter();

  const handleLoginUser = (credentialResponse: CredentialResponse) => {
    loginUser(credentialResponse);
    setShowLoginPrompt(false);
  };

  const enrollUserToProgram = async () => {
    try {
      const payload = { user_id: user?.email, status: "enroll" };
      const response = await enrollUserService(payload);
      setIsUserEnrolled(response);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      // alert("Please login to enrolled in this program");
      setShowLoginPrompt(true);
    } else {
      if (isUserEnrolled) {
        Swal.fire({
          title: "Already Enrolled!",
          text: "You are already enrolled to this revision program! Click OK to access revision program.",
          icon: "success",
        }).then((result) => {
          if (result?.isConfirmed) router.push(`/revision/program`);
        });
      } else {
        await enrollUserToProgram();
        Swal.fire({
          title: "Enrolled successfully!",
          text: "Thank you for enrolling yourself to this revision program! Click OK to access revision program.",
          icon: "success",
        }).then((result) => {
          if (result?.isConfirmed) router.push(`/revision/program`);
        });
      }
    }
  };

  const getUserEnrolledStatus = useCallback(async () => {
    try {
      const response = await checkErollStatusService(user?.email);
      setIsUserEnrolled(response);
      if (response) router.push(`/revision/program`);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }, [user?.email]);

  useEffect(() => {
    getUserEnrolledStatus();
  }, [getUserEnrolledStatus]);

  return (
    <div className="w-[100%] max-w-[1250px] mx-auto flex flex-col items-stretch gap-4 mb-1">
      <CustomImage
        src="/revision/revision_complete.png"
        alt="enroll banner"
        onClick={handleEnroll}
        className="md:hidden"
      />
      <CustomImage
        src="/revision/revision_mobile.png"
        alt="enroll banner"
        onClick={handleEnroll}
        className="hidden md:block"
      />

      <CustomModal
        hideCloseButton
        size="sm"
        isOpen={showLoginPrompt}
        onClose={() => setShowLoginPrompt(false)}>
        <div className="flex flex-col justify-center items-center gap-4 p-2">
          <CustomHeading className="text-center">Login Required!</CustomHeading>
          <CustomText className="text-center mb-6">
            Please login to get enrolled in this program
          </CustomText>
          <GoogleLogin
            onSuccess={(credentialResponse: CredentialResponse) =>
              handleLoginUser(credentialResponse)
            }
            onError={() => alert("Login Failed")}
            useOneTap={true}
          />
        </div>
      </CustomModal>
    </div>
  );
}
