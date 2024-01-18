"use client";

import Link from "next/link";
import PanelPreview from "@/app/[locale]/panel/components/PanelPreview";
import { panels } from "@/lib/modules/panel";
import { ChangeEvent, useState } from "react";
import Search from "~icons/mdi/search";

export default function PanelSearch({ filter } : { filter: string }) {
  const items: string[] = ["name", "description", "websiteUrl", "imageUrl", "disabilities"];
  const [search, setSearch] = useState("");

  return (
    <>
      <i className="absolute pl-3 hidden sm:inline-block">
        <Search width={33} height={66} />
      </i>
      <input 
        type="search" 
        placeholder={filter}
        className="cta action rounded-2xl text-lg w-full mt-0 text-center sm:text-left sm:px-10 duration-500 ease-in-out 
        max-w-md placeholder:text-black placeholder:dark:text-white"
        onChange={(event: ChangeEvent<Element>) => setSearch((event.target as HTMLInputElement).value)}
      />
      <ul className="max-w-md m-auto space-y-2 overflow-y-auto max-h-48">
        {panels.filter((panel: any) => (
          items.some((item: string) => panel[item].toString().includes(search))
        )).map((panel, key) => (
          <li key={key}>
            <Link
              href={`../view/${panel.id}`}
              className={`block action ${panel.active ? "action-li" : "action-li-inactive"}`}
              aria-disabled={panel.active ? "false" : "true"}
            >
              <PanelPreview panel={panel} />
            </Link>
          </li>
        ))}
    </ul>
  </>
  );
}