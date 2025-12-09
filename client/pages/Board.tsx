import { useState } from "react";
import BottomNav from "@/components/BottomNav";

export default function Board() {
  const [selectedTab, setSelectedTab] = useState("공지사항");

  return (
    <div className="min-h-screen bg-white pb-24 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-xs font-normal">9:41</div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 17 11" fill="none">
            <path d="M2 6.667C2.552 6.667 3 7.115 3 7.667V9.667C3 10.219 2.552 10.667 2 10.667H1C0.448 10.667 0 10.219 0 9.667V7.667C0 7.115 0.448 6.667 1 6.667H2Z" fill="#010618"/>
            <path d="M6.667 4.667C7.219 4.667 7.667 5.115 7.667 5.667V9.667C7.667 10.219 7.219 10.667 6.667 10.667H5.667C5.115 10.667 4.667 10.219 4.667 9.667V5.667C4.667 5.115 5.115 4.667 5.667 4.667H6.667Z" fill="#010618"/>
            <path d="M11.333 2.333C11.885 2.333 12.333 2.781 12.333 3.333V9.667C12.333 10.219 11.885 10.667 11.333 10.667H10.333C9.781 10.667 9.333 10.219 9.333 9.667V3.333C9.333 2.781 9.781 2.333 10.333 2.333H11.333Z" fill="#010618"/>
            <path d="M16 0C16.552 0 17 0.448 17 1V9.667C17 10.219 16.552 10.667 16 10.667H15C14.448 10.667 14 10.219 14 9.667V1C14 0.448 14.448 0 15 0H16Z" fill="#010618"/>
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 16 11" fill="none">
            <path d="M5.448 8.427C6.729 7.344 8.605 7.344 9.886 8.427C9.95 8.485 9.987 8.568 9.989 8.654C9.991 8.741 9.956 8.824 9.895 8.885L7.89 10.907C7.831 10.967 7.751 11 7.667 11C7.583 11 7.503 10.967 7.444 10.907L5.438 8.885C5.377 8.824 5.343 8.741 5.345 8.654C5.347 8.568 5.384 8.485 5.448 8.427Z" fill="#010618"/>
            <path d="M2.772 5.729C5.532 3.165 9.804 3.165 12.564 5.729C12.626 5.79 12.661 5.872 12.662 5.959C12.663 6.045 12.629 6.128 12.568 6.189L11.409 7.36C11.29 7.48 11.097 7.481 10.975 7.365C10.069 6.545 8.889 6.092 7.667 6.092C6.446 6.092 5.268 6.546 4.362 7.365C4.24 7.482 4.046 7.48 3.927 7.36L2.769 6.189C2.707 6.128 2.673 6.045 2.674 5.959C2.675 5.872 2.71 5.79 2.772 5.729Z" fill="#010618"/>
            <path d="M0.097 3.039C4.328 -1.013 11.004 -1.013 15.236 3.039C15.298 3.099 15.333 3.182 15.333 3.268C15.333 3.353 15.3 3.436 15.239 3.497L14.079 4.667C13.96 4.787 13.765 4.788 13.644 4.67C12.031 3.138 9.892 2.284 7.667 2.284C5.442 2.284 3.302 3.138 1.689 4.67C1.568 4.788 1.374 4.787 1.255 4.667L0.094 3.497C0.033 3.436 -0.0005 3.353 0 3.268C0.0006 3.182 0.035 3.099 0.097 3.039Z" fill="#010618"/>
          </svg>
          <div className="w-6 h-3 border border-[#21283F] border-opacity-35 rounded-sm relative">
            <div className="absolute inset-0.5 bg-slate-900 rounded-sm"></div>
            <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm"></div>
          </div>
        </div>
      </div>

      <div className="px-6 pt-4">
        <h2 className="text-[32px] font-bold text-[#010618] tracking-tight">게시판</h2>
      </div>

      {/* Segmented Control */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex h-11 p-0.5 justify-center items-center rounded-3xl bg-[rgba(235,235,245,0.6)]">
          <button
            onClick={() => setSelectedTab("공지사항")}
            className={`flex-1 h-full flex items-center justify-center rounded-3xl transition-all ${
              selectedTab === "공지사항" 
                ? "bg-[#80B3FF] shadow-sm" 
                : "bg-transparent"
            }`}
          >
            <span className={`text-sm ${
              selectedTab === "공지사항" ? "font-semibold text-white" : "font-normal text-[#010618]"
            }`}>
              공지사항
            </span>
          </button>
          
          <div className="w-px h-3 bg-[#21283F] opacity-30 rounded-full" />
          
          <button
            onClick={() => setSelectedTab("행사")}
            className={`flex-1 h-full flex items-center justify-center rounded-3xl transition-all ${
              selectedTab === "행사" 
                ? "bg-[#80B3FF] shadow-sm" 
                : "bg-transparent"
            }`}
          >
            <span className={`text-sm ${
              selectedTab === "행사" ? "font-semibold text-white" : "font-normal text-[#010618]"
            }`}>
              행사
            </span>
          </button>
          
          <div className="w-px h-3 bg-[#21283F] opacity-30 rounded-full" />
          
          <button
            onClick={() => setSelectedTab("자료실")}
            className={`flex-1 h-full flex items-center justify-center rounded-3xl transition-all ${
              selectedTab === "자료실" 
                ? "bg-[#80B3FF] shadow-sm" 
                : "bg-transparent"
            }`}
          >
            <span className={`text-sm ${
              selectedTab === "자료실" ? "font-semibold text-white" : "font-normal text-[#010618]"
            }`}>
              자료실
            </span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-full bg-white">
            <input
              type="text"
              placeholder="Search ..."
              className="flex-1 outline-none text-sm"
            />
            <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.4217 2.75 18.8923 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.655 21.1083 7.11733 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 mb-4"></div>

      {/* Posts List - Flex grow to push pagination to bottom */}
      <div className="flex-1 px-6 space-y-4">
        {[
          { id: 1, title: "도서관 교육 일정 안내", author: "홍길동", date: "01.01" },
          { id: 2, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 3, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 4, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 5, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 6, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 7, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 8, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 9, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 10, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 11, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 12, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 13, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 14, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 15, title: "공지사항 예시", author: "OOO", date: "00.00" },
        ].map((post) => (
          <div key={post.id} className="flex items-center gap-3 py-2">
            <div className="text-sm text-slate-600 w-6">{post.id}</div>
            <div className="flex-1">
              <div className="text-sm font-medium underline text-[#010618]">{post.title}</div>
            </div>
            <div className="flex gap-4 text-sm text-slate-600">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination - Now at bottom */}
      <div className="flex justify-center items-center gap-2 py-4 mt-4">
        <button className="w-8 h-8 flex items-center justify-center">
          <svg className="w-6 h-6 text-[#80B3FF]" viewBox="0 0 19 22" fill="currentColor">
            <path d="M1.38426 13.4779C-0.461419 12.2981 -0.461416 9.60219 1.38426 8.42241L13.8141 0.477165C15.811 -0.799273 18.4298 0.634884 18.4298 3.00489V18.8954C18.4298 21.2654 15.811 22.6995 13.8141 21.4231L1.38426 13.4779Z"/>
          </svg>
        </button>
        <div className="flex gap-2">
          <button className="w-8 h-8 font-semibold text-lg text-[#010618]">1</button>
          <button className="w-8 h-8 text-slate-400">2</button>
          <button className="w-8 h-8 text-slate-400">3</button>
          <button className="w-8 h-8 text-slate-400">4</button>
          <button className="w-8 h-8 text-slate-400">5</button>
        </div>
        <button className="w-8 h-8 flex items-center justify-center">
          <svg className="w-6 h-6 text-[#80B3FF]" viewBox="0 0 19 22" fill="currentColor">
            <path d="M17.0456 13.4779C18.8912 12.2981 18.8912 9.60219 17.0455 8.42241L4.61574 0.477165C2.61884 -0.799273 0 0.634884 0 3.00489V18.8954C0 21.2654 2.61884 22.6995 4.61574 21.4231L17.0456 13.4779Z"/>
          </svg>
        </button>
      </div>

      <BottomNav currentPage="board" />
    </div>
  );
}
