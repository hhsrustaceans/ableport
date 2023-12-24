import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";
import { FilterButton } from "../components/FilterButton";
import type { Content } from "../../types";

export function ContentOverview( { overview, content } : { overview: JSX.Element, content: Content[] } ) {
  return (
    <section className="display-section">
      <article className="article-content">
        {Object.values(content).map((content: Content) => (
          <>
            <h1 className="display-heading">{content.contentHeading}</h1>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
              <SearchBar label={content.searchLabel} placeholder={content.searchPlaceholder} />
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
