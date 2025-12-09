import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="flex-shrink-0 bg-white px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xs text-slate-900">9:41</div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 17 11" fill="none">
              <path d="M2 6.667C2.552 6.667 3 7.115 3 7.667V9.667C3 10.219 2.552 10.667 2 10.667H1C0.448 10.667 0 10.219 0 9.667V7.667C0 7.115 0.448 6.667 1 6.667H2Z" fill="currentColor"/>
              <path d="M6.667 4.667C7.219 4.667 7.667 5.115 7.667 5.667V9.667C7.667 10.219 7.219 10.667 6.667 10.667H5.667C5.115 10.667 4.667 10.219 4.667 9.667V5.667C4.667 5.115 5.115 4.667 5.667 4.667H6.667Z" fill="currentColor"/>
              <path d="M11.333 2.333C11.885 2.333 12.333 2.781 12.333 3.333V9.667C12.333 10.219 11.885 10.667 11.333 10.667H10.333C9.781 10.667 9.333 10.219 9.333 9.667V3.333C9.333 2.781 9.781 2.333 10.333 2.333H11.333Z" fill="currentColor"/>
              <path d="M16 0C16.552 0 17 0.448 17 1V9.667C17 10.219 16.552 10.667 16 10.667H15C14.448 10.667 14 10.219 14 9.667V1C14 0.448 14.448 0 15 0H16Z" fill="currentColor"/>
            </svg>
            <svg className="w-4 h-4" viewBox="0 0 16 11" fill="none">
              <path d="M5.448 8.427C6.729 7.344 8.605 7.344 9.886 8.427C9.95 8.485 9.987 8.568 9.989 8.654C9.991 8.741 9.956 8.824 9.895 8.885L7.89 10.907C7.831 10.967 7.751 11 7.667 11C7.583 11 7.503 10.967 7.444 10.907L5.438 8.885C5.377 8.824 5.343 8.741 5.345 8.654C5.347 8.568 5.384 8.485 5.448 8.427Z" fill="currentColor"/>
              <path d="M2.772 5.729C5.532 3.165 9.804 3.165 12.564 5.729C12.626 5.79 12.661 5.872 12.662 5.959C12.663 6.045 12.629 6.128 12.568 6.189L11.409 7.36C11.29 7.48 11.097 7.481 10.975 7.365C10.069 6.545 8.889 6.092 7.667 6.092C6.446 6.092 5.268 6.546 4.362 7.365C4.24 7.482 4.046 7.48 3.927 7.36L2.769 6.189C2.707 6.128 2.673 6.045 2.674 5.959C2.675 5.872 2.71 5.79 2.772 5.729Z" fill="currentColor"/>
              <path d="M0.097 3.039C4.328 -1.013 11.004 -1.013 15.236 3.039C15.298 3.099 15.333 3.182 15.333 3.268C15.333 3.353 15.3 3.436 15.239 3.497L14.079 4.667C13.96 4.787 13.765 4.788 13.644 4.67C12.031 3.138 9.892 2.284 7.667 2.284C5.442 2.284 3.302 3.138 1.689 4.67C1.568 4.788 1.374 4.787 1.255 4.667L0.094 3.497C0.033 3.436 -0.0005 3.353 0 3.268C0.0006 3.182 0.035 3.099 0.097 3.039Z" fill="currentColor"/>
            </svg>
            <div className="w-6 h-3 border border-slate-900 border-opacity-35 rounded-sm relative">
              <div className="absolute inset-0.5 bg-slate-900 rounded-sm"></div>
              <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <svg className="w-32 h-32 mb-4" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="80" r="40" fill="#5B9EFF"/>
              <path d="M70 80L100 50L130 80" stroke="#FFB800" strokeWidth="4" fill="none"/>
              <rect x="65" y="85" width="25" height="30" fill="#F9DF75" rx="2"/>
              <rect x="110" y="85" width="25" height="30" fill="#7CED91" rx="2"/>
              <rect x="75" y="95" width="8" height="12" fill="#FFC374" rx="1"/>
              <rect x="117" y="95" width="8" height="12" fill="#71E9E1" rx="1"/>
              <path d="M95 50L100 45L105 50" fill="#F66B6B"/>
              <circle cx="85" cy="65" r="3" fill="#FFB800"/>
              <circle cx="95" cy="60" r="3" fill="#FFB800"/>
              <circle cx="105" cy="60" r="3" fill="#FFB800"/>
              <circle cx="115" cy="65" r="3" fill="#FFB800"/>
            </svg>
            <div className="text-center">
              <div className="flex items-center gap-1 text-4xl font-bold mb-2">
                <span className="text-[#FF7D7F]">SC</span>
                <span className="text-[#FFC374]">HO</span>
                <span className="text-[#7CED91]">OL</span>
                <span className="text-[#536EFF] ml-2">MA</span>
                <span className="text-[#536EFF]">TE</span>
              </div>
              <p className="text-sm text-slate-600">
                ✨ 쉽게 학교 3D백 바라보기 (즐겁)
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Blocks */}
        <div className="w-full max-w-md grid grid-cols-2 gap-6">
          {/* 일정 Block */}
          <Link to="/schedule" className="group">
            <div className="bg-gradient-to-br from-[#FFD97D] to-[#FFC374] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm rounded-full p-2">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/>
                  <text x="8" y="15" fill="currentColor" fontSize="8" fontWeight="bold">12</text>
                </svg>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white">일정</h3>
              </div>
            </div>
          </Link>

          {/* 시간표 Block */}
          <Link to="/timetable" className="group">
            <div className="bg-gradient-to-br from-[#A5C8FF] to-[#80B3FF] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm rounded-full p-2">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12L12 4M7 11V13H17V11H7Z"/>
                </svg>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white">시간표</h3>
              </div>
            </div>
          </Link>

          {/* 리마인더 Block */}
          <Link to="/reminder" className="group">
            <div className="bg-gradient-to-br from-[#FFB7CD] to-[#FF99B3] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm rounded-full p-2">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C11.5 2 11 2.19 10.59 2.59C10.2 3 10 3.5 10 4V4.29C7.03 5.17 5 7.9 5 11V17L3 19V20H21V19L19 17V11C19 7.9 16.97 5.17 14 4.29V4C14 3.5 13.8 3 13.41 2.59C13 2.19 12.5 2 12 2M12 23C10.9 23 10 22.1 10 21H14C14 22.1 13.1 23 12 23Z"/>
                </svg>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white">리마인더</h3>
              </div>
            </div>
          </Link>

          {/* 게시판 Block */}
          <Link to="/board" className="group">
            <div className="bg-gradient-to-br from-[#7CEDCE] to-[#4AD2C9] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm rounded-full p-2">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H17V12H7V10ZM7 14H17V16H7V14ZM7 6H17V8H7V6Z"/>
                </svg>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white">게시판</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Login Button */}
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#FFC374] to-[#FFB87D] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
          LOGIN
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="home" />
    </div>
  );
}
