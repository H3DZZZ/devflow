import React from "react";

import { EMPTY_ANSWERS } from "@/constants/states";
import { ActionResponse, AnswerParams } from "@/types/global";

import AnswerCard from "../cards/answer-card";
import DataRenderer from "../data-renderer";

interface Props extends ActionResponse<AnswerParams[]> {
  totalAnswers: number;
}

const AllAnswers = ({ data, success, error, totalAnswers }: Props) => {
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? " Answer" : " Answers"}
        </h3>
        <p>Filters</p>
      </div>

      <DataRenderer
        data={data}
        error={error}
        success={success}
        empty={EMPTY_ANSWERS}
        render={(answers) =>
          answers.map((answer) => <AnswerCard key={answer._id} {...answer} />)
        }
      />
    </div>
  );
};

export default AllAnswers;
