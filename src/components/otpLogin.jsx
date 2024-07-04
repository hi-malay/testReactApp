import React, { useEffect, useRef, useState } from "react";

const OptLogin = ({ otpInputCount }) => {
  const inputRefs = useRef([]);
  const [otpNumber, setOtpNumber] = useState([
    { name: "otpNumber1", value: 3 },
    { name: "otpNumber2", value: 6 },
    { name: "otpNumber3", value: 1 },
  ]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (e, name, index) => {
    setOtpNumber(
      otpNumber.map((otp) => {
        if (otp.name === name) {
          return { ...otp, value: e.target.value };
        }
        return otp;
      })
    );
    if (
      e.target.value <= 9 &&
      e.target.value >= 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    const handlePaste = async (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "v") {
        try {
          // Get clipboard data
          const text = await navigator.clipboard.readText();
          setOtpNumber(
            otpNumber.map((data, index) => {
              return {
                ...data,
                value: [...text].map((subData) => parseInt(subData))[index],
              };
            })
          );
        } catch (error) {
          console.error("Failed to read clipboard contents: ", error);
        }
      }
    };

    // Add event listener for the 'keydown' event
    window.addEventListener("keydown", handlePaste);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handlePaste);
    };
  }, []);
  console.log("otpNumber :>> ", otpNumber);
  return (
    <div className="container">
      {[...Array(otpInputCount)].map((_, index) => {
        return (
          <input
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            name={otpNumber[index].name}
            type="number"
            value={otpNumber[index].value}
            onChange={(e) => handleOtpChange(e, otpNumber[index].name, index)}
          />
        );
      })}
    </div>
  );
};

export default OptLogin;
