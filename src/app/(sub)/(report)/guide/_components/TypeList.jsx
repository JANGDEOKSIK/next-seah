"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function TypeList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["report", "guide"],
    queryFn: async () => {
      const promise = await fetch(
        `${process.env.NEXT_PUBLIC_DUMMY_URL}/reportType`
      );
      const response = await promise.json();

      return response;
    },
  });
  // console.log(data);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <ul className="type-list">
      {data.map((item, idx) => (
        <li
          className="item"
          key={item.idx}
        >
          <div className="img">
            <Image
              src={item.imgUrl}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <p className="txt f-bdy1-eb">{item.txt}</p>
        </li>
      ))}
    </ul>
  );
}
