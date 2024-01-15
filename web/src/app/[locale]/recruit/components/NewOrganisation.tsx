import { ReactNode, useState } from "react";
import { Organisation } from "../../types";
import { Context } from "./Context";

export function NewOrganisation({ children } : { children : ReactNode }) {
  const [search, setSearch] = useState("");
  const [showContent, setShowContent] = useState(false);

  const [change, setChange] = useState<Organisation>({
    id: 3,
    type: "",
    name: "",
    description: "",
    logo: "",
    website: "",
    phonenumber: "",
  });

  const organisation: Organisation[] = [
    {
      id: change.id,
      type: change.type,
      name: change.name,
      description: change.description,
      logo: change.logo,
      website: change.website,
      phonenumber: change.phonenumber
    } satisfies Organisation,
    {
      id: 2,
      type: "Test",
      name: "test",
      description: "test",
      logo: "test",
      website: "test",
      phonenumber: "31612345678"
    } satisfies Organisation,
    {
      id: 1,
      type: "More Test",
      name: "more test",
      description: "more test",
      logo: "more test",
      website: "more test",
      phonenumber: "31687654321"
    } satisfies Organisation,
  ];

  return (
    <Context.Provider value={{setChange, change, setShowContent, setSearch, organisation, search, showContent}}>
      {children}
    </Context.Provider>
  )
}
