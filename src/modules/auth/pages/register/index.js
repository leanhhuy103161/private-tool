import React from "react";
import EnterToken from "./EnterToken.js";
import ForgotPassword from "./ForgotPassword.js";
import ResetPassword from "./ResetPassword.js";
import { useState } from "react";


function Register() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [step, setStep] = useState(1);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {step === 1 && <ForgotPassword formState={formState} setStep={setStep} />}
      {step === 2 && <EnterToken formState={formState} setStep={setStep} />}
      {step === 3 && <ResetPassword formState={formState} setStep={setStep} />}
    </div>
  );
}

export default Register;
