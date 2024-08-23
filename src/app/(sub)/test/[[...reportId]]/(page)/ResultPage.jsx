"use client";

import PageTransition from "@/app/_components/layout/PageTransition";
import { getList } from "@/app/_lib/fetch";
import { useQuery } from "@tanstack/react-query";

export default function ResultPage() {
  // const { data } = useQuery({
  //   queryKey: ["list"],
  //   queryFn: async () => {
  //     const promise = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/1"
  //     );
  //     const response = promise.json();

  //     return response;
  //   },
  // });

  // console.log(data);

  return (
    <PageTransition>
      <div>resultPage</div>
    </PageTransition>
  );
}
