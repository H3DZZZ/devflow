import Link from "next/link";

import QuestionCard from "@/components/cards/question-card";
import HomeFilter from "@/components/filters/home-filter";
import LocalSearch from "@/components/search/local-search";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "data:image/jpeg;base64,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",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2023-09-01"),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "React" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECBAUHAwj/xAA5EAABAwMBBQYDBwMFAQAAAAABAAIDBAURIQYSMUFRE2FxgZGhByIyFBVCYrHB0SMzchZSU7LwNf/EABsBAAEFAQEAAAAAAAAAAAAAAAACAwQFBgEH/8QALBEAAgIBAwIFAwQDAAAAAAAAAAECAwQFERIhMRMyQVFhIkKBM5GhsSM0cf/aAAwDAQACEQMRAD8A7iiIgAiIgAqZVVadAgCuUyFgXK7UNth7Wuqo4W8snJPgOahtz+IoyY7ZRl3SSbT2TU7oQ8zJNGJfe/8AHE6BvhN8LjNZtdfasnernRNP4YQGgefFauSurJdZqupkP5pnH91GlnR+1blpDQrmt5SSO9b7eqFwC4CJ5gciaUH/ADKyYLtcqdwMFwq2Y6TOI9CUlZ69ULegWek0d2DgUDgVyS37dXmmdid0VUzpI3B9QpZaNvbbWuayqD6SQ6Av1YT48vNSIZNc+zK+/S8mnq47r4JflVXlFMyRodG5r2kZDmnIK9VIK8IiIAIiIAIiIAIiIAKiqrHkcygA52ASTgDqoNtPty2ndJS2ctllGjpiMtYe7qVq9tdrHVcklvtryyBrsSStOsh6A9P1ULwq/JytnxgaHTtJ5JWXL8HtVVU9ZO6eqmfNITq55yvFF41lRHSUz5pfpaPU8gq/aU5GhfCqHskex0BceHUrxNZSg4NTAD0Mg/lQqur56+Qvmed08GA/KAsXwVrDTG19bKK3Xfq2rj0+TobJY3jLHtd/i4FXrnLSWnLCQeo0WRHX1cf9upmGPzkrktLf2yCGvR+6H7Mnqde9RCl2hrYXjtiJowdQRgnzUrpp46mFk0Jyx4yFBvxZ0+YtMXOqyvL3RurJtBcLLIPssxdDnJhfq0/wupbPbR0l7hzA/cnaP6kLsbzf5C4vyxyXtS1M1HUMqKaR0crDlrmrtGTKt7PqhjO0yvIW8ekjvrTlVUb2R2livtO5kmGVkQ/qMHB35h3KRg5VvGSkt0ZG2qVU3Ca6oqiIlDYREQAQoqHggCmQFBviHtCaeL7ro3kTSNzM8fhaeXiVK7xXxW23VFXN9MTCfE8guI1lTNWVUtTUOzLK7ecVDy7uC4ot9Iw1db4ku0Tx8OCIiqTXhRraur3pIqRjs7nzv8eSky59UyvmqppCMue8n30Vhp1alY5P0KbWr3ClVr7iyNjpZGxxNc97jhrWjJPgFnVFju1MwPnttUxh4OMRI9l1jYvZqCx0EU0sbXXCVuZZCMlufwDoOGepUlJJ4k+qmWZ6jLaKKGvD5R3kfPMVFVzO3YaWd7ujYnH9ltRshtC6nM/3XUboGcHGceGcruA04aeCY6pD1CT7IUsGPufOj2uY4tkbuuBwQRggqS7ISudFUxE/KwtIz35/hbj4q2iOCqprrA0NFR/SnAHFw1DvEjTyWm2Q3eyqccd5ufQpeVYrcXkO6bGVeYo7kgREVGbAybfWz2+siqaVxbKx2R0PcV2ixXaC72yKsh03h8zf9ruYXDlKvh/eDQXcUkzsU9VoM8A/l68FMxLeMuL7MptXw1bX4kV1X9HWRwVVRp0TKtjJFUREAFQ8FVWu4IAgPxQuJbFS26N2C89q/XkOHv8Aoudrf7dVP2raerOcti3YgOmB/JK0Cpcmblazb6ZSqsWHz1CIijk8qOpUKo6Y/wCoYKU6kVbWkc8b4U0XtX09LS3DZqsfGwF1WBI/GC4luRnzCnYNvCTXuU2s1KdcZezJHetrbdaZ305ZU1czD87KWIv3OeCeAPcvOzbZ2m7VLKRhmp6p/wBMM8ZaXLK2knu9HbamezNgLoGb+5ul75SXYIa0YHDXOpPRU2WkuNbaIK68xwsqpC7DOxLJGAHAJB6jwPcl8I8OW38lTzfPbf8Ag3JIAyeAUUrPiBZoJ3Q0zaqsc04cYIsjyzxUs8M57lF9sa6+2iKmlsMMUrZpC18cNOXub3uxjj4eaRRGMnsxy2biuhrNqrnRbTbKVn2MSNqKXdndBNGWSAA6nB4jB4hQvZIn7XUNbq3sxnxzp+67Cw1LKGY3kU8ojjJMkQOHs3Muy0/SeIIyRp6QTZ2igi2Op6hsbBLId8uxqQXEAZT07FGmUQxI75MJ7lURFVmsCuY90b2vjduvaQ4HvHBWourvuJkt1szuVirhcbTS1bT/AHIwT48x6rYhQv4Y1Qls0tKdTBMceDtf1JU0CvapcoJmByqvCulD5KoiJwYCo7gqq13BcfYDhN5k7W7VsnN07/1Kw1kXEYuVWDymf/2Kx1QS8zPQqf04/wDAiIkjhVeG2rnO2Wt80bsOhqm4PQ7rsH2C9lr9pHvdYZoW4LBKyTHQg4/dSMVpWrcg6jW548tvTqdI2fucd3s1JXxn+7GN8Z+l40cPXK2C538JJpBS3Nj3H7Mx7XDPBpwc+wWfQ7c1N0dJ92WKWenY7BldUNYBnqTgZxrjOVJtx3zlFehn67lxTfqTRMqJ/wCoLoMYs57MH5R94M3s/mzy81ZR7ay/fVPbLpaZaJ9Q7dY/tA4a8OGhHLI6ptUzfYcdsV3Pf4jXRtv2bmhD8TVn9Bg7vxH0C1VCey2Pt7P+RjTj3Uf+KksztqBHMXdlHTMMbegO9vEeJHstrDJI6hpIpMAQwta0DwS8iPCiK9x7Tou3Kb9EVREVeaQIiIAnfwrfipuEf5GOHuujjK5t8Kv/AKFeeQib+pXSgrnE/SRi9W/25fj+iqIiklaFa/6VcrX6jCAOIbTQGmv9fGeUziPPX91rFLviXQup75HVDG5UxDX8zePtj0URVFfHjY0bvBtVmPCXwERE0SwvKrgFTSywk432kZ/ReqLsXxe4mcVOLjLsyLW+83LZxtfb2Rs3aqMtfvg6ZGN5pHcV0r4exsj2Rt7qNzQ7Dy4lodl+9qD7eijFTQ09e1kFQzebvABwOrc9CsOOm2i2VdJJZp+3pHHeezc3vMt694VsrlkR27SMvkYjxLN+8WdRZc5ZZ307HWwzM+trGNL2+I81Dvie4UlLaqsOBqoqoOa4gDONeXLTkoDbrzdKW/SXKkO/cZt7faY97e3uII6cPRb/AO5brfJ/t20NSRut+WPTex0wNGj3SvDVUlKcuhFUvFXCEdmzUVdXXbW3s1dU2NmA1jtxpDWMBOB38T6qUeHBWQQx08TY4GBjBwACvVfkX+K+i2SNLg4Sxovd7yfcIiKMTwiKqDvodC+FcBEddUHQFzWDvwM/uugBRrYOiNFs3T74w+bMrvM6e2FJQryiPGtIwefZ4mTOS9yqIieIgVHDIwqogCMbe2t1xscjomb81Oe1aOZA4j0XIl9AvbkYxkHiuO7ZWQ2a6vEbCKacl8RxoOrfJV2bV2mjRaHlJb0S/BoETy8kVeaQIr4opJ3hkMT5XHg1jS4+y3tDslcajBqGfZmlpID9XHuxy80qFU59kMW5VNPnlsam2RGatiGCWt+Z2O5bqWmLMuj1HTmF60tHFSNMbAd78RPFe66lt3KzIuV0t49jV7jWu3t0Bx46aquCRgLZOY131NB8lRscbNWsA8EpvcZT49iKSMdHI5juLTjCsUuZY4rvORvGN4YT2gGfULV12zF0pGdo2B08fEPhGfbiueDNrlsWVWfS3wk+ppUVXAscWvBa4cQ7Qqia7E5NPsFn2O3Put1p6Njc77vn7mjUn0WB4rp3w7sZoqM3GoYRPUD5ARq1nL14+ifx6vEn8EDUctY9D932JlBG2OJjGtAa1oAA5L0VBwVVdmIfUIiIAIiIALV7QWqC8UElJUab2rH41Y7kQtoqFuea40mtmdjKUWpR7o5jR7CObvC51RGCcNhHEdcn+Ft6bZS0U+Cad0pHOV+97KYzwNlbh3EcD0WulidE7Dh59UiGPVHsiTdqOTY+sjHgp4KZu5TwxxN6MaB+ivkaXNBafnbq096qnPVSNtuxBc5Se7ZHrvb3FzqulaS1xy9gGrTzWp4gnl1U1cwklzDuu5nkfFYdRQU05LpqcteeL4+ag3YfJ8oFjj5/BcZ9SK5V8UUk0gjiaXPP4QFIG2miyMCc92qzYKdsLdynibC08TxJTUMGW/1Mes1GG30rqY9uoxSwmDO9I/WVw5Dp/wC6rY9caeCta0MBAHj3qqsowjFbIqZzlOXJmPVUNJWNxU00Uo/O0E+q09TsdaZz8jJYTy7N+nocqQarKpqUyYc8Yb06pMq4S8yHasq6vySZD7ZsDG24Rzy1JmpGHPZvZhzjyB7lP2tDQGgYAVQ3A00Vd3vTcK4Q8qHL8i29p2PcDgqoiWMhERABERABERABWPja9uHDIV6IA18tEc5iOe4rFcxzThwIPQhbpWuaHDBAPiF1SEuJpUWzdRwu5FvgvM0DOT3BL5oTxZgIs77AP+Q+iubQx83OK5yQcWYC9IoJJfpGnU6LYsp42ahg816gacFzkd4mLDSMZgv+Z3ssoBVRJbbFbIIiIOhERABERABERABERABERABERAFEREAECIg6VREQcCIiACIiACIiACIiAP/Z",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;

    return matchesQuery && matchFilter;
  });
  return (
    <>
      <section className="w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
