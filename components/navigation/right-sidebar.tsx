import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/tag-card";

const hotQuestions = [
  { _id: "1", title: "How to craete a custom hook in react" },
  { _id: "2", title: "How to craete a custom hook in react" },
  { _id: "3", title: "How to craete a custom hook in react" },
  { _id: "4", title: "How to craete a custom hook in react and nextjs" },
  { _id: "5", title: "How to craete a custom hook in react" },
];

const popularTags = [
  { _id: "1", name: "reactjs", questions: 100 },
  { _id: "2", name: "nextjs", questions: 23 },
  { _id: "3", name: "tailwind", questions: 50 },
  { _id: "4", name: "css", questions: 60 },
  { _id: "5", name: "html", questions: 1 },
  { _id: "6", name: "javascript", questions: 80 },
  { _id: "7", name: "python", questions: 8 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700 ">{title}</p>

              <Image
                src={"/icons/chevron-right.svg"}
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
