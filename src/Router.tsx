import { Route, Routes } from "react-router-dom";

import { Event } from "./pages/Event.page";
import { Subscribe } from "./pages/Subscribe.page";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
