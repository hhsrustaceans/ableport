"use client";

import { useRouter } from "@/lib/modules/navigation";

export default function SignUpButton({ status, action }: { status: string, action: string }) {
  const router = useRouter();

  function signUp() {
    alert(status);
    router.push("/panel/discover");
  }

  return (
    <button
      onClick={() => signUp()}
      className="px-0 sm:px-16 action action-primary my-2"
    >
      {action}
    </button>
  );
}
