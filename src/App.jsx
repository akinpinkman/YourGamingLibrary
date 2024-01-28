import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import GameLibrary from "./pages/GameLibrary/GameLibrary";
import PlayLater from "./pages/PlayLater/PlayLater";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
// NOTE: GlobalStyles ekle.

<QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false} />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>

          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="gamelibrary" element={<GameLibrary />} />
          <Route path="playlater" element={<PlayLater />} />

        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}
