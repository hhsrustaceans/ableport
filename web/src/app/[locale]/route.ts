import { redirect } from "@/lib/modules/navigation";

export async function GET() {
  redirect("/account/login");
}
