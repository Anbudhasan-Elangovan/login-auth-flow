"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import SubmitButton from "./submit-button";
import { login } from "./action";

export default function SigninForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <>
      <form className="flex w-[400] flex-col gap-2" action={loginAction}>
        <h1 className="flex p-2 items-center justify-center text-2xl font-medium">
          Auth Sign
        </h1>
        <div className="flex flex-col gap-2">
          <input
            className="p-2 border bg-gray-100"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        {state?.errors?.email && <p className="text-red-500">{state?.errors?.email}</p>}
        <div className="flex flex-col gap-2">
          <input
            className="p-2 border bg-gray-100"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        {state?.errors?.password && <p className="text-red-500">{state?.errors?.password}</p>}
        <SubmitButton />
      </form>
    </>
  );
}
