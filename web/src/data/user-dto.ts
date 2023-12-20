import 'server-only';
import { getServerSession } from "next-auth/next"
import User from "../lib/types/models/user";
 
function canSeeUsername(viewer: User) {
    // Public info for now, but can change
    return viewer.name === "Vertcol";
}
 
function canSeePhoneNumber(viewer: User, team: string) {
  // Privacy rules
  return "admin" in viewer.roles;
}
 
export async function getProfileDTO(slug: string) {
  // Don't pass values, read back cached values, also solves context and easier to make it lazy
 
  // use a database API that supports safe templating of queries
 
  const currentSession = await getServerSession();
  const currentUser = 
 
  // only return the data relevant for this query and not everything
  // <https://www.w3.org/2001/tag/doc/APIMinimization>
  return {
    username: canSeeUsername(currentUser) ? userData.username : null,
    phonenumber: canSeePhoneNumber(currentUser, userData.team)
      ? userData.phonenumber
      : null,
  };
}