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
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
      return response.json();
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
