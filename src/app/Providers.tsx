'use client';

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

export function Providers({ children }:{children:ReactNode}) {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
        <UserProvider>{children}</UserProvider>
      </QueryClientProvider>
  );
}
