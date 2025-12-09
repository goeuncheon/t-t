import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Timetable from "./pages/Timetable";
import Reminder from "./pages/Reminder";
import ReminderForm from "./pages/ReminderForm";
import Board from "./pages/Board";
import BoardWrite from "./pages/BoardWrite";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/reminder/add" element={<ReminderForm />} />
          <Route path="/reminder/edit/:id" element={<ReminderForm />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/board/:tab/:id" element={<BoardDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

declare global {
  interface Window {
    __appRoot?: Root;
  }
}

type RootedContainer = HTMLElement & {
  __appRoot?: Root;
  _reactRootContainer?: Root;
};

const container = document.getElementById("root") as RootedContainer | null;
if (!container) {
  throw new Error("Root container not found");
}

let root = container.__appRoot ?? container._reactRootContainer ?? window.__appRoot;

if (!root) {
  root = createRoot(container);
  container._reactRootContainer = root;
}

container.__appRoot = root;
window.__appRoot = root;

root.render(<App />);
