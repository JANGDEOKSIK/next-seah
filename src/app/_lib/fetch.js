import { useMutation, useQuery } from "@tanstack/react-query";

export const getList = (url, keyValue = []) => {
  if (keyValue.length === 0) {
    throw new Error("key값은 필수입니다.");
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: keyValue.map((item) => item),
    queryFn: async () => {
      const promise = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
      const response = await promise.json();

      return response;
    },
    // staleTime: 10 * 1000
  });
};

export const setMutation = (url, options = {}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
        {
          // const response = await fetch(`http://localhost:4000${url}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    ...options,
  });

  const mutate = (data) => {
    console.log(data);
    return mutation.mutate(data);
  };

  return { mutate, ...mutation };
};
