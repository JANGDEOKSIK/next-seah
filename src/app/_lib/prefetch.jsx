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
        `${process.env.NEXT_PUBLIC_BASE_URL}${url}`
        //,{method: 'GET', next: { revalidate: 60 * 60 * 1} }
      );
      return response.json();
    },
    // staleTime: 60 * 1000,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
