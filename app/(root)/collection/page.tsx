import QuestionCard from "@/components/cards/question-card";
import DataRenderer from "@/components/data-renderer";
import CommonFilter from "@/components/filters/common-filter";
import LocalSearch from "@/components/search/local-search";
import { CollectionFilters } from "@/constants/filters";
import ROUTES from "@/constants/routes";
import { EMPTY_QUESTION } from "@/constants/states";
import { getSavedQuestion } from "@/lib/actions/collection.action";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Collections = async ({ searchParams }: SearchParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getSavedQuestion({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query: query || "",
    filter: filter || "",
  });

  const { collections } = data || {};

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route={ROUTES.COLLECTION}
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />

        <CommonFilter
          filters={CollectionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <DataRenderer
        success={success}
        error={error}
        data={collections}
        empty={EMPTY_QUESTION}
        render={(collection) => (
          <div className="mt-10 flex w-full flex-col gap-6">
            {collection.map((item) => (
              <QuestionCard key={item._id} question={item.question} />
            ))}
          </div>
        )}
      />
    </>
  );
};

export default Collections;
