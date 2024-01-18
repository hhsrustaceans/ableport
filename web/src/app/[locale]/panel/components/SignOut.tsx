import SignUpButton from "./SignUp";

export function SignOutButton({ status, action } : { status: string, action: string }) {
  return (
    <SignUpButton status={status} action={action} />
  );
}
