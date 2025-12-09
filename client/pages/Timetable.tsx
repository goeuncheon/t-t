import BottomNav from "@/components/BottomNav";

export default function Timetable() {
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

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs text-slate-900">9:41</div>
        </div>
      </div>

      {/* Month/Year */}
      <div className="text-center py-4">
        <h1 className="text-xl font-bold">2025 / 11</h1>
      </div>

      {/* Week Days Header */}
      <div className="flex px-4 gap-4 mb-4">
        {[
          { day: "18", label: "Mon", active: true },
          { day: "19", label: "Tue" },
          { day: "20", label: "Wed" },
          { day: "21", label: "Thu" },
          { day: "22", label: "Fri" },
        ].map((date, i) => (
          <div key={i} className="flex-1 text-center">
            <div className={`text-lg font-bold ${date.active ? "text-slate-900" : "text-slate-900"}`}>
              {date.day}
            </div>
            <div className={`text-xs ${date.active ? "text-slate-900" : "text-slate-400"}`}>
              {date.label}
            </div>
          </div>
        ))}
      </div>

      {/* Timetable Grid */}
      <div className="relative px-4">
        <div className="flex gap-4">
          {/* Time Column */}
          <div className="flex flex-col gap-1 pt-12">
            {Array.from({ length: 9 }, (_, i) => i + 9).map((hour) => (
              <div key={hour} className="h-16 flex flex-col justify-start">
                <div className="text-xs font-bold">{hour < 10 ? `0${hour}` : hour}</div>
                <div className="text-[10px] text-slate-600">{hour < 12 ? "AM" : "PM"}</div>
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="flex-1 flex gap-4">
            {/* Monday - with classes */}
            <div className="flex-1 flex flex-col gap-1">
              {classes.map((cls, i) => (
                <div
                  key={i}
                  className={`${cls.color} rounded-lg p-2 text-center flex flex-col justify-center items-center h-16`}
                >
                  <div className="text-xs font-bold text-slate-900">{cls.name}</div>
                  <div className="text-[10px] text-slate-700">{cls.room}</div>
                </div>
              ))}
            </div>

            {/* Tuesday - empty slots */}
            <div className="flex-1 flex flex-col gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-slate-100 rounded-lg h-16"></div>
              ))}
            </div>

            {/* Wednesday - empty slots */}
            <div className="flex-1 flex flex-col gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-slate-100 rounded-lg h-16"></div>
              ))}
            </div>

            {/* Thursday - empty slots */}
            <div className="flex-1 flex flex-col gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-slate-100 rounded-lg h-16"></div>
              ))}
            </div>

            {/* Friday - empty slots */}
            <div className="flex-1 flex flex-col gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-slate-100 rounded-lg h-16"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav currentPage="timetable" />
    </div>
  );
}
