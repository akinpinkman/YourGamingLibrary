import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GameLibrary from "./pages/GameLibrary";
import PlayLater from "./pages/PlayLater";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="homepage" />} />

          <Route path="gamelibrary" element={<GameLibrary />} />

          <Route path="homepage" element={<Homepage />} />

          <Route path="playlater" element={<PlayLater />} />
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
