import BottomNav from "@/components/BottomNav";
import { useEffect, useRef } from "react";

const classes = [
  { name: "수업 1", room: "1학년 1반", color: "bg-[#FF7D7F]" },
  { name: "수업 2", room: "1학년 2반", color: "bg-[#FFB581]" },
  { name: "수업 3", room: "1학년 3반", color: "bg-[#F9DF75]" },
  { name: "수업 4", room: "1학년 4반", color: "bg-[#7CED91]" },
  { name: "수업 5", room: "1학년 5반", color: "bg-[#71E9E1]" },
  { name: "수업 6", room: "1학년 6반", color: "bg-[#88BCFF]" },
  { name: "수업 7", room: "1학년 7반", color: "bg-[#FFB7CD]" },
  { name: "수업 8", room: "1학년 8반", color: "bg-[#C1A2FF]" },
  { name: "수업 9", room: "1학년 9반", color: "bg-[#D2D2D2]" },
];

const timeSlots = [
  { label: "09", period: "AM" },
  { label: "10", period: "AM" },
  { label: "11", period: "AM" },
  { label: "12", period: "PM" },
  { label: "01", period: "PM" },
  { label: "02", period: "PM" },
  { label: "03", period: "PM" },
  { label: "04", period: "PM" },
  { label: "05", period: "PM" },
];

const days = [
  { date: 18, day: "Mon", isToday: true },
  { date: 19, day: "Tue", isToday: false },
  { date: 20, day: "Wed", isToday: false },
  { date: 21, day: "Thu", isToday: false },
  { date: 22, day: "Fri", isToday: false },
];

const AutoFitText = ({
  text,
  max = 12,
  min = 8,
  className,
}: {
  text: string;
  max?: number;
  min?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const parent = element.parentElement;
    if (!parent) return;

    const adjust = () => {
      const target = ref.current;
      if (!target || !parent) return;
      let size = max;
      target.style.fontSize = `${size}px`;
      while (size > min && target.scrollWidth > parent.clientWidth) {
        size -= 0.5;
        target.style.fontSize = `${size}px`;
      }
    };

    adjust();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(adjust);
      observer.observe(parent);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", adjust);
    return () => window.removeEventListener("resize", adjust);
  }, [max, min, text]);

  return (
    <span ref={ref} className={className} style={{ display: "block" }}>
      {text}
    </span>
  );
};

export default function Timetable() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-24">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-3 flex-shrink-0">
        <div className="text-xs font-normal">9:41</div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 17 11" fill="none">
            <path d="M2 6.667C2.552 6.667 3 7.115 3 7.667V9.667C3 10.219 2.552 10.667 2 10.667H1C0.448 10.667 0 10.219 0 9.667V7.667C0 7.115 0.448 6.667 1 6.667H2Z" fill="#010618" />
            <path d="M6.667 4.667C7.219 4.667 7.667 5.115 7.667 5.667V9.667C7.667 10.219 7.219 10.667 6.667 10.667H5.667C5.115 10.667 4.667 10.219 4.667 9.667V5.667C4.667 5.115 5.115 4.667 5.667 4.667H6.667Z" fill="#010618" />
            <path d="M11.333 2.333C11.885 2.333 12.333 2.781 12.333 3.333V9.667C12.333 10.219 11.885 10.667 11.333 10.667H10.333C9.781 10.667 9.333 10.219 9.333 9.667V3.333C9.333 2.781 9.781 2.333 10.333 2.333H11.333Z" fill="#010618" />
            <path d="M16 0C16.552 0 17 0.448 17 1V9.667C17 10.219 16.552 10.667 16 10.667H15C14.448 10.667 14 10.219 14 9.667V1C14 0.448 14.448 0 15 0H16Z" fill="#010618" />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 16 11" fill="none">
            <path d="M5.448 8.427C6.729 7.344 8.605 7.344 9.886 8.427C9.95 8.485 9.987 8.568 9.989 8.654C9.991 8.741 9.956 8.824 9.895 8.885L7.89 10.907C7.831 10.967 7.751 11 7.667 11C7.583 11 7.503 10.967 7.444 10.907L5.438 8.885C5.377 8.824 5.343 8.741 5.345 8.654C5.347 8.568 5.384 8.485 5.448 8.427Z" fill="#010618" />
            <path d="M2.772 5.729C5.532 3.165 9.804 3.165 12.564 5.729C12.626 5.79 12.661 5.872 12.662 5.959C12.663 6.045 12.629 6.128 12.568 6.189L11.409 7.36C11.29 7.48 11.097 7.481 10.975 7.365C10.069 6.545 8.889 6.092 7.667 6.092C6.446 6.092 5.268 6.546 4.362 7.365C4.24 7.482 4.046 7.48 3.927 7.36L2.769 6.189C2.707 6.128 2.673 6.045 2.674 5.959C2.675 5.872 2.71 5.79 2.772 5.729Z" fill="#010618" />
            <path d="M0.097 3.039C4.328 -1.013 11.004 -1.013 15.236 3.039C15.298 3.099 15.333 3.182 15.333 3.268C15.333 3.353 15.3 3.436 15.239 3.497L14.079 4.667C13.96 4.787 13.765 4.788 13.644 4.67C12.031 3.138 9.892 2.284 7.667 2.284C5.442 2.284 3.302 3.138 1.689 4.67C1.568 4.788 1.374 4.787 1.255 4.667L0.094 3.497C0.033 3.436 -0.0005 3.353 0 3.268C0.0006 3.182 0.035 3.099 0.097 3.039Z" fill="#010618" />
          </svg>
          <div className="w-6 h-3 border border-[#21283F] border-opacity-35 rounded-sm relative">
            <div className="absolute inset-0.5 bg-slate-900 rounded-sm" />
            <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm" />
          </div>
        </div>
      </div>

      <div className="px-6 pt-4">
        <h2 className="text-[32px] font-bold text-[#010618] tracking-tight">시간표</h2>
      </div>

      {/* Calendar Header */}
      <div className="px-6 pt-4 pb-2 flex-shrink-0">
        <div className="flex items-center justify-center gap-6">
          <button className="p-2">
            <svg className="w-6 h-6 text-[#010618]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-[#010618]">2025 / 11</h1>
          <button className="p-2">
            <svg className="w-6 h-6 text-[#010618]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Timetable */}
      <div className="flex-1 px-4 pb-4">
        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-3.5">
          <div className="grid grid-cols-[34px_minmax(0,1fr)] gap-0 items-end">
            <div />
            <div className="grid grid-cols-5 gap-4 -ml-4">
              {days.map((day) => (
                <div key={day.date} className="flex flex-col items-center gap-1">
                  <div className={`text-xl font-bold ${day.isToday ? "text-[#010618]" : "text-[#21283F]"}`}>
                    {day.date}
                  </div>
                  <div className={`text-xs ${day.isToday ? "text-[#010618]" : "text-slate-400"}`}>{day.day}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-1.5">
            {timeSlots.map((slot, index) => (
              <div key={slot.label} className="flex flex-col gap-0.5">
                <div className="w-full h-px bg-[#21283F] opacity-40" />
                <div className="grid grid-cols-[34px_minmax(0,1fr)] gap-0 items-center">
                  <div className="flex flex-col items-start justify-start text-left text-[#010618] leading-tight">
                    <span className="text-[11px] font-semibold">{slot.label}</span>
                    <span className="text-[8px] font-medium uppercase text-[#010618] opacity-80">{slot.period}</span>
                  </div>

                  <div className="grid grid-cols-5 gap-4 -ml-4">
                    {days.map((day) => (
                      <div key={`${day.date}-${slot.label}`} className="flex justify-center items-center py-0">
                        {day.isToday && index < classes.length ? (
                          <div
                            className={`${classes[index].color} w-full max-w-[54px] h-[54px] rounded-[9px] px-1.5 py-1.5 flex flex-col items-start justify-start gap-0.5 text-left overflow-hidden`}
                          >
                            <div className="w-full">
                              <AutoFitText
                                text={classes[index].name}
                                max={9}
                                min={6}
                                className="font-semibold text-black leading-tight tracking-[-0.03em]"
                              />
                            </div>
                            <div className="w-full">
                              <AutoFitText
                                text={classes[index].room}
                                max={6.5}
                                min={4.5}
                                className="text-[#010618] leading-tight tracking-[-0.02em]"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="w-full max-w-[54px] h-[54px] rounded-[9px] bg-[#E6E6F0]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full h-px bg-[#21283F] opacity-40" />
          </div>
        </div>
      </div>

      <BottomNav currentPage="timetable" />
    </div>
  );
}
