import React from "react";

import QuestionCard from "@/components/cards/question-card";
import DataRenderer from "@/components/data-renderer";
import LocalSearch from "@/components/search/local-search";
import ROUTES from "@/constants/routes";
import { EMPTY_QUESTION } from "@/constants/states";
import { getTagQuestions } from "@/lib/actions/tag.action";
import { RouteParams } from "@/types/global";
import Pagination from "@/components/pagination";

const Page = async ({ params, searchParams }: RouteParams) => {
  const { id } = await params;
  const { page, pageSize, query } = await searchParams;

  const { success, data, error } = await getTagQuestions({
    tagId: id,
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 5,
    query,
  });

  const { tag, questions, isNext } = data || {};

  return (
    <>
      <section className="w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">{tag?.name}</h1>
      </section>
      <section className="mt-11">
        <LocalSearch
          route={ROUTES.TAG(id)}
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          iconPosition="left"
        />
      </section>

      <DataRenderer
        success={success}
        error={error}
        data={questions}
        empty={EMPTY_QUESTION}
        render={(questions) => (
          <div className="mt-10 flex w-full flex-col gap-6">
            {questions.map((question) => (
              <QuestionCard key={question._id} question={question} />
            ))}
          </div>
        )}
      />
      <Pagination page={page} isNext={isNext || false} />
    </>
  );
};

export default Page;
