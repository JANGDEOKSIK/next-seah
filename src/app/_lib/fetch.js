import { useMutation, useQuery } from "@tanstack/react-query"

export const getList = (url, key = []) => {
  if (key.length === 0) {
    throw new Error("key값은 필수입니다.")
  }
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const promise = await fetch(url);
      const response = promise.json();

      return response;
    }
  })
}

export const setMutation = (url, options = {}) => {
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    ...options,
  });

  const mutate = (data) => {
    return mutation.mutate(data);
  };

  return { mutate, ...mutation };
};
