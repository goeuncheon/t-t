import { Link, useNavigate } from "react-router-dom";

interface BottomNavProps {
  currentPage: "home" | "schedule" | "timetable" | "reminder" | "board";
}

export default function BottomNav({ currentPage }: BottomNavProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 pb-6">
      <div className="flex items-center justify-around py-3 gap-4">
        {/* 일정 */}
        <Link
          to="/schedule"
          className={`flex flex-col items-center gap-1.5 px-6 py-2 ${
            currentPage === "schedule" ? "text-[#80B3FF]" : "text-slate-600"
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" />
          </svg>
          <span className="text-xs">일정</span>
        </Link>

        {/* 시간표 */}
        <Link
          to="/timetable"
          className={`flex flex-col items-center gap-1.5 px-6 py-2 ${
            currentPage === "timetable" ? "text-[#80B3FF]" : "text-slate-600"
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.75 19C13.4667 19 13.229 18.904 13.037 18.712C12.845 18.52 12.7493 18.2827 12.75 18V6C12.75 5.71667 12.846 5.479 13.038 5.287C13.23 5.095 13.4673 4.99934 13.75 5H15.125C15.4083 5 15.646 5.096 15.838 5.288C16.03 5.48 16.1257 5.71734 16.125 6V18C16.125 18.2833 16.029 18.521 15.837 18.713C15.645 18.905 15.4077 19.0007 15.125 19H13.75ZM8.875 19C8.59167 19 8.354 18.904 8.162 18.712C7.97 18.52 7.87434 18.2827 7.875 18V6C7.875 5.71667 7.971 5.479 8.163 5.287C8.355 5.095 8.592 4.99934 8.874 5H10.249C10.5323 5 10.77 5.096 10.962 5.288C11.154 5.48 11.25 5.71734 11.25 6V18C11.25 18.2833 11.154 18.521 10.962 18.713C10.77 18.905 10.5327 19.0007 10.25 19H8.875ZM4 19C3.71667 19 3.479 18.904 3.287 18.712C3.095 18.52 2.99934 18.2827 3 18V6C3 5.71667 3.096 5.479 3.288 5.287C3.48 5.095 3.71734 4.99934 4 5H5.375C5.65834 5 5.896 5.096 6.088 5.288C6.28 5.48 6.37567 5.71734 6.375 6V18C6.375 18.2833 6.279 18.521 6.087 18.713C5.895 18.905 5.658 19.0007 5.376 19H4ZM18.625 19C18.3417 19 18.104 18.904 17.912 18.712C17.72 18.52 17.6247 18.2827 17.626 18V6C17.626 5.71667 17.722 5.479 17.914 5.287C18.106 5.095 18.343 4.99934 18.625 5H20C20.2833 5 20.521 5.096 20.713 5.288C20.905 5.48 21.0007 5.71734 21 6V18C21 18.2833 20.904 18.521 20.712 18.713C20.52 18.905 20.2827 19.0007 20 19H18.625Z" />
          </svg>
          <span className="text-xs">시간표</span>
        </Link>

        {/* 리마인더 */}
        <Link
          to="/reminder"
          className={`flex flex-col items-center gap-1.5 px-6 py-2 ${
            currentPage === "reminder" ? "text-[#80B3FF]" : "text-slate-600"
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.5 2 11 2.19 10.59 2.59C10.2 3 10 3.5 10 4V4.29C7.03 5.17 5 7.9 5 11V17L3 19V20H21V19L19 17V11C19 7.9 16.97 5.17 14 4.29V4C14 3.5 13.8 3 13.41 2.59C13 2.19 12.5 2 12 2M12 23C10.9 23 10 22.1 10 21H14C14 22.1 13.1 23 12 23Z"/>
          </svg>
          <span className="text-xs">리마인더</span>
        </Link>

        {/* 게시판 */}
        <Link
          to="/board"
          className={`flex flex-col items-center gap-1.5 px-6 py-2 ${
            currentPage === "board" ? "text-[#80B3FF]" : "text-slate-600"
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H17V12H7V10ZM7 14H17V16H7V14ZM7 6H17V8H7V6Z" />
          </svg>
          <span className="text-xs">게시판</span>
        </Link>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="w-32 h-1 bg-slate-900 rounded-full"
        />
      </div>
    </div>
  );
}
