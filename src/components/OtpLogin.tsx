import React, { useEffect, useRef, useState } from 'react';

type OTPInputType = {
  length: number;
  onOTPSubmit: () => void;
};

const OTPInput = ({ length = 4, onOTPSubmit }: OTPInputType) => {
  const [inputBox, setInputBox] = useState<string[]>(new Array(length).fill(''));

  const inputRefs = useRef<HTMLInputElement[] | null>([]);

  useEffect(() => {
    // put the focus on the 1st input field when the component is loaded
    if (inputRefs?.current[0]) inputRefs?.current[0].focus();
  }, []);

  const onOTPInputBoxChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...inputBox];
    newOtp[index] = value.substring(value.length - 1);
    setInputBox(newOtp);

    const fullOTP = newOtp.join('');
    if (fullOTP.length === length) {
      // trigger verifying OTP logic or send API to backend to check
      onOTPSubmit(fullOTP);
    }

    // move to next input field if the current index is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      // since we have the reference to all the input HTML elements, we can just focus on the next box
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.keyCode === 8 && index > 0) {
      console.log(index);
      const newOtp = [...inputBox];
      newOtp[index] = ''; // Clear the current box
      setInputBox(newOtp);
      console.log(newOtp);

      if (inputRefs.current[index - 1]) {
        // move the focus to previous input box
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-2">
      {inputBox?.map((val, index) => (
        <input
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          type="text"
          className="border border-black p-2 w-12 h-12 rounded-sm gap-1 outline-none text-center"
          value={val}
          onChange={(e) => onOTPInputBoxChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

const OtpLogin = () => {
  const [isOTPVisible, setIsOTPVisible] = useState<boolean>(false);
  const phoneNumber = useRef<React.Ref<HTMLInputElement>>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let phone = phoneNumber?.current?.value;

    // validate phone number
    const regex = /[^0-9]/g;
    if (phone.length != 10 || regex.test(phone)) {
      alert('Invalid phone number');
      return;
    }

    setIsOTPVisible(true);
  };

  const onOTPSubmit = (fullOTP: string) => {
    console.log(fullOTP);
  };

  return (
    <div className="w-full flex items-center justify-center">
      {!isOTPVisible ? (
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <input
            ref={phoneNumber}
            type="text"
            placeholder="Enter phone number to get OTP"
            className="w-72 border border-black p-2 outline-none"
          />
        </form>
      ) : (
        <div>
          <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
        </div>
      )}
    </div>
  );
};

export default OtpLogin;
