import { Fragment, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const tabs = ["공지사항", "행사", "자료실"] as const;
type BoardTab = (typeof tabs)[number];

interface BoardPost {
  id: number;
  title: string;
  author: string;
  date: string;
}

const noticeFirstPagePosts: BoardPost[] = [
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
];

const createFirstPagePosts = (firstPost: BoardPost, fillerTitle: string): BoardPost[] => {
  const filler = Array.from({ length: 14 }, (_, index) => ({
    id: index + 2,
    title: fillerTitle,
    author: "OOO",
    date: "00.00",
  }));
  return [firstPost, ...filler];
};

const eventFirstPagePosts = createFirstPagePosts(
  { id: 1, title: "겨울방학식 안내", author: "학생지원팀", date: "12.22" },
  "행사 예시"
);

const archiveFirstPagePosts = createFirstPagePosts(
  { id: 1, title: "급식 신청서 양식", author: "행정실", date: "03.01" },
  "자료실 예시"
);

const fillerTitleByTab: Record<BoardTab, string> = {
  공지사항: "공지사항 예시",
  행사: "행사 예시",
  자료실: "자료실 예시",
};

const createFillerPosts = (title: string): BoardPost[] =>
  Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title,
    author: "OOO",
    date: "00.00",
  }));

const getPostsByTabAndPage = (tab: BoardTab, page: number): BoardPost[] => {
  if (page === 1) {
    if (tab === "공지사항") return noticeFirstPagePosts;
    if (tab === "행사") return eventFirstPagePosts;
    return archiveFirstPagePosts;
  }
  return createFillerPosts(fillerTitleByTab[tab]);
};

export default function Board() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<BoardTab>("공지사항");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const posts = useMemo(
    () => getPostsByTabAndPage(selectedTab, currentPage),
    [selectedTab, currentPage]
  );

  const handleTabChange = (tab: BoardTab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white pb-36 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-xs font-normal">9:41</div>
      </div>

      <div className="px-6 pt-4">
        <h2 className="text-[32px] font-bold text-[#010618] tracking-tight">게시판</h2>
      </div>

      {/* Segmented Control */}
      <div className="px-6 py-6">
        <div className="flex h-11 p-0.5 justify-center items-center rounded-3xl bg-[rgba(235,235,245,0.6)]">
          {tabs.map((tab, index) => {
            const isActive = selectedTab === tab;
            const isLast = index === tabs.length - 1;
            return (
              <div key={tab} className="flex flex-1 h-full items-center">
                <button
                  onClick={() => handleTabChange(tab)}
                  className={`flex-1 h-full flex items-center justify-center rounded-3xl transition-all ${
                    isActive ? "bg-[#80B3FF] shadow-sm" : "bg-transparent"
                  }`}
                >
                  <span className={`text-sm ${isActive ? "font-semibold text-white" : "font-normal text-[#010618]"}`}>
                    {tab}
                  </span>
                </button>
                {!isLast && (
                  <div className="w-px h-3 bg-[#21283F] opacity-30 rounded-full ml-2" aria-hidden />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 pb-4">
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-full bg-white">
            <input type="text" placeholder="Search ..." className="flex-1 outline-none text-sm" />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200" />

      {/* Posts List */}
      <div className="flex-1 px-6 space-y-4 pt-4 pb-6">
        {posts.map((post) => (
          <div
            key={`${selectedTab}-${currentPage}-${post.id}`}
            className="flex items-center gap-3 py-2 cursor-pointer"
            onClick={() =>
              navigate(`/board/${encodeURIComponent(selectedTab)}/${post.id}`)
            }
          >
            <div className="text-sm text-slate-600 w-6">
              {post.id.toString().padStart(2, "0")}
            </div>

            <div className="flex-1">
              <div className="text-sm font-medium underline text-[#010618]">
                {post.title}
              </div>
            </div>

            <div className="flex gap-4 text-sm text-slate-600">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white shadow-[0_4px_18px_rgba(0,0,0,0.04)]">
          {/* Prev */}
          <button
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center disabled:opacity-40"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                    isActive ? "bg-[#80B3FF] text-white font-semibold" : "text-slate-500"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next */}
          <button
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center disabled:opacity-40"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      <BottomNav currentPage="board" />
    </div>
  );
}
