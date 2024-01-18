"use client";

import Link from "next/link";
import PanelPreview from "@/app/[locale]/panel/components/PanelPreview";
import { panels } from "@/lib/modules/panel";
import { ChangeEvent, useState } from "react";
import Search from "~icons/mdi/search";

export default function PanelSearch({ filter }: { filter: string }) {
  const items: string[] = [
    "name",
    "description",
    "websiteUrl",
    "imageUrl",
    "disabilities",
  ];
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-md mb-2 py-1 px-2">
        <i className="mr-1">
          <Search width={32} />
        </i>
        <input
          type="search"
          placeholder={filter}
          className="bg-inherit w-full outline-none"
          onChange={(event: ChangeEvent<Element>) =>
            setSearch((event.target as HTMLInputElement).value)
          }
        />
      </div>
      <ul className="space-y-2 overflow-y-auto max-h-48">
        {panels
          .filter((panel: any) =>
            items.some((item: string) =>
              panel[item].toString().includes(search)
            )
          )
          .map((panel, key) => (
            <li key={key}>
              <Link
                href={`../view/${panel.id}`}
                className={`block action ${
                  panel.active ? "action-li-inactive" : "action-li"
                }`}
                aria-disabled={panel.active ? "true" : "false"}
              >
                <PanelPreview panel={panel} />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
