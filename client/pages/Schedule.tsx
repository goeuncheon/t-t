import BottomNav from "@/components/BottomNav";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs text-slate-900">9:41</div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 17 11" fill="none">
              <path d="M2 6.667C2.552 6.667 3 7.115 3 7.667V9.667C3 10.219 2.552 10.667 2 10.667H1C0.448 10.667 0 10.219 0 9.667V7.667C0 7.115 0.448 6.667 1 6.667H2Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold">2025 / 11</h1>
      </div>

      {/* Date Section */}
      <div className="px-4 py-4">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            { day: "18", label: "Mon", badge: "2", active: true },
            { day: "19", label: "Tue", badge: "1" },
            { day: "20", label: "Wed" },
            { day: "21", label: "Thu", badge: "3" },
            { day: "22", label: "Fri" },
          ].map((date, i) => (
            <div
              key={i}
              className={`flex flex-col items-center min-w-[60px] py-2 px-3 rounded-lg ${
                date.active ? "bg-[#80B3FF] text-white" : "text-slate-600"
              }`}
            >
              <div className="text-xl font-bold">{date.day}</div>
              <div className="text-xs">{date.label}</div>
              {date.badge && (
                <div className="mt-1 w-5 h-5 bg-[#F66B6B] rounded-full flex items-center justify-center text-xs text-white font-semibold">
                  {date.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="px-4 space-y-4">
        {/* Card 1 */}
        <div className="bg-slate-100 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="flex flex-col items-end text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path d="M11.655 9.6363L12.2913 9L7.20003 3.9087L5.92743 5.1813L9.74523 9L5.92743 12.8187L7.20003 14.0913L11.655 9.6363Z" fill="currentColor"/>
                </svg>
                <span>09:10 AM</span>
              </div>
              <div className="mt-2">10:00 AM</div>
            </div>
            <div className="w-px bg-[#FFC374] mx-2"></div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[#FFC374]">수업 1 홍길동 T</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-600">
                    <span>1학년 1반</span>
                    <span className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-[#F66B6B] rounded-full flex items-center justify-center text-white text-[10px]">
                        1
                      </div>
                      리마인더
                    </span>
                  </div>
                </div>
                <button className="text-xs font-semibold text-slate-600">더보기</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-100 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="flex flex-col items-end text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path d="M11.655 9.6363L12.2913 9L7.20003 3.9087L5.92743 5.1813L9.74523 9L5.92743 12.8187L7.20003 14.0913L11.655 9.6363Z" fill="currentColor"/>
                </svg>
                <span>09:10 AM</span>
              </div>
              <div className="mt-2">10:00 AM</div>
            </div>
            <div className="w-px bg-[#4AD2C9] mx-2"></div>
            <div className="flex-1">
              <h3 className="font-bold text-[#4AD2C9]">수업 2 홍길동 T</h3>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-600">
                <span>1학년 2반</span>
                <span className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-[#F66B6B] rounded-full flex items-center justify-center text-white text-[10px]">
                    1
                  </div>
                  리마인더
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-100 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="flex flex-col items-end text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path d="M11.655 9.6363L12.2913 9L7.20003 3.9087L5.92743 5.1813L9.74523 9L5.92743 12.8187L7.20003 14.0913L11.655 9.6363Z" fill="currentColor"/>
                </svg>
                <span>10:10 AM</span>
              </div>
              <div className="mt-2">11:00 AM</div>
            </div>
            <div className="w-px bg-[#C44EFB] mx-2"></div>
            <div className="flex-1">
              <h3 className="font-bold text-[#C44EFB]">수업 3 홍길동 T</h3>
              <p className="text-xs text-slate-600 mt-1">1학년 3반</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-100 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="flex flex-col items-end text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path d="M11.655 9.6363L12.2913 9L7.20003 3.9087L5.92743 5.1813L9.74523 9L5.92743 12.8187L7.20003 14.0913L11.655 9.6363Z" fill="currentColor"/>
                </svg>
                <span>11:10 AM</span>
              </div>
              <div className="mt-2">12:00 AM</div>
            </div>
            <div className="w-px bg-[#536EFF] mx-2"></div>
            <div className="flex-1">
              <h3 className="font-bold text-[#536EFF]">수업 4 홍길동 T</h3>
              <p className="text-xs text-slate-600 mt-1">1학년 4반</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav currentPage="schedule" />
    </div>
  );
}
