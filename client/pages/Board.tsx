import BottomNav from "@/components/BottomNav";

export default function Board() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs text-slate-900">9:41</div>
        </div>
        <h1 className="text-3xl font-bold">게시판</h1>
      </div>

      {/* Tabs */}
      <div className="px-4 py-4 flex gap-2">
        <button className="px-6 py-2 bg-[#80B3FF] text-white rounded-full font-medium">
          공지사항
        </button>
        <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-full font-medium">
          행사
        </button>
        <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-full font-medium">
          자료실
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-full">
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
      <div className="border-t border-slate-200"></div>

      {/* Posts List */}
      <div className="px-4 py-4 space-y-4">
        {[
          { id: 1, title: "도서관 교육 일정 안내", author: "홍길동", date: "01.01" },
          { id: 2, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 3, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 4, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 5, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 6, title: "공지사항 예시", author: "OOO", date: "00.00" },
          { id: 7, title: "공지사항 예시", author: "OOO", date: "00.00" },
        ].map((post) => (
          <div key={post.id} className="flex items-center gap-3 py-2">
            <div className="text-sm text-slate-600 w-6">{post.id}</div>
            <div className="flex-1">
              <div className="text-sm font-medium underline">{post.title}</div>
            </div>
            <div className="flex gap-4 text-sm text-slate-600">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 py-6">
        <button className="w-8 h-8 flex items-center justify-center">
          <svg className="w-6 h-6 text-[#80B3FF]" viewBox="0 0 19 22" fill="currentColor">
            <path d="M1.38426 13.4779C-0.461419 12.2981 -0.461416 9.60219 1.38426 8.42241L13.8141 0.477165C15.811 -0.799273 18.4298 0.634884 18.4298 3.00489V18.8954C18.4298 21.2654 15.811 22.6995 13.8141 21.4231L1.38426 13.4779Z"/>
          </svg>
        </button>
        <div className="flex gap-2">
          <button className="w-8 h-8 font-semibold text-lg">1</button>
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
