import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
