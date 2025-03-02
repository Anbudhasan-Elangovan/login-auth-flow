"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
      <button className="p-2 border bg-green-100 cursor-pointer" disabled={pending} type="submit">
        Login
      </button>
    );
  }
  