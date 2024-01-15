import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";
import { FilterButton } from "../components/FilterButton";
import type { Content } from "../../types";

export function ContentOverview({
  overview,
  content,
}: {
  overview: JSX.Element;
  content: Content[];
}) {
  return (
    <section>
      <article>
        {Object.values(content).map((content: Content) => (
          <>
            <h1>{content.contentHeading}</h1>
            <article>
              <SearchBar
                label={content.searchLabel}
                placeholder={content.searchPlaceholder}
              />
              <FilterButton label={content.filterLabel} />
            </article>
            {overview}
            <CreateButton create={content.createButton} />
          </>
        ))}
      </article>
    </section>
  );
}
