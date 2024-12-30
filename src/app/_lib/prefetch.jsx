import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function PrefetchElement({ children, url, keyValue }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: keyValue.map((item) => item),
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );
      return response.json();
    },
    // staleTime: 0,
    // gcTime: 0,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
