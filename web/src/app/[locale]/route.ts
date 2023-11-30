import { RedirectType, redirect } from "next/navigation";

export async function GET() {
  redirect("panel", RedirectType.push);
}
