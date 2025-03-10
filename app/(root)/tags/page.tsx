import React from "react";

import TagCard from "@/components/cards/tag-card";
import DataRenderer from "@/components/data-renderer";
import LocalSearch from "@/components/search/local-search";
import ROUTES from "@/constants/routes";
import { EMPTY_TAGS } from "@/constants/states";
import { getTags } from "@/lib/actions/tag.action";
import { RouteParams } from "@/types/global";

const Tags = async ({ searchParams }: RouteParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getTags({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

  const { tags } = data || {};

  return (
    <>
      <h1 className="h1-bold text-dark100_light900 text-3xl">Tags</h1>

      <section className="mt-11">
        <LocalSearch
          route={ROUTES.TAGS}
          imgSrc="/icons/search.svg"
          placeholder="Search by tag name..."
          otherClasses="flex-1"
        />

        <DataRenderer
          data={tags}
          empty={EMPTY_TAGS}
          success={success}
          error={error}
          render={(tags) => (
            <div className="mt-10 flex w-full flex-wrap gap-4">
              {tags.map((tag) => (
                <TagCard key={tag._id} {...tag} />
              ))}
            </div>
          )}
        />
      </section>
    </>
  );
};

export default Tags;
