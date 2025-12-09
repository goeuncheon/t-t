import BottomNav from "@/components/BottomNav";
import { boardData, BoardTab, getPostByTabAndId } from "@/data/board";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const isBoardTab = (value: string): value is BoardTab =>
  ["공지사항", "행사", "자료실"].includes(value as BoardTab);

export default function BoardDetail() {
  const navigate = useNavigate();
  const { tab = "", id = "" } = useParams<{ tab: string; id: string }>();

  const decodedTab = decodeURIComponent(tab);

  const validTab = isBoardTab(decodedTab) ? decodedTab : "공지사항";
  const postId = Number(id);

  const posts = boardData[validTab];
  const post = getPostByTabAndId(validTab, postId) ?? posts[0];

  const currentIndex = useMemo(
    () => posts.findIndex((item) => item.id === post.id),
    [posts, post.id],
  );
  const prevPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  return (
    <div className="min-h-screen bg-white pb-24 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-xs font-normal">9:41</div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 17 11" fill="none">
            <path
              d="M2 6.667C2.552 6.667 3 7.115 3 7.667V9.667C3 10.219 2.552 10.667 2 10.667H1C0.448 10.667 0 10.219 0 9.667V7.667C0 7.115 0.448 6.667 1 6.667H2Z"
              fill="#010618"
            />
            <path
              d="M6.667 4.667C7.219 4.667 7.667 5.115 7.667 5.667V9.667C7.667 10.219 7.219 10.667 6.667 10.667H5.667C5.115 10.667 4.667 10.219 4.667 9.667V5.667C4.667 5.115 5.115 4.667 5.667 4.667H6.667Z"
              fill="#010618"
            />
            <path
              d="M11.333 2.333C11.885 2.333 12.333 2.781 12.333 3.333V9.667C12.333 10.219 11.885 10.667 11.333 10.667H10.333C9.781 10.667 9.333 10.219 9.333 9.667V3.333C9.333 2.781 9.781 2.333 10.333 2.333H11.333Z"
              fill="#010618"
            />
            <path
              d="M16 0C16.552 0 17 0.448 17 1V9.667C17 10.219 16.552 10.667 16 10.667H15C14.448 10.667 14 10.219 14 9.667V1C14 0.448 14.448 0 15 0H16Z"
              fill="#010618"
            />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 16 11" fill="none">
            <path
              d="M5.448 8.427C6.729 7.344 8.605 7.344 9.886 8.427C9.95 8.485 9.987 8.568 9.989 8.654C9.991 8.741 9.956 8.824 9.895 8.885L7.89 10.907C7.831 10.967 7.751 11 7.667 11C7.583 11 7.503 10.967 7.444 10.907L5.438 8.885C5.377 8.824 5.343 8.741 5.345 8.654C5.347 8.568 5.384 8.485 5.448 8.427Z"
              fill="#010618"
            />
            <path
              d="M2.772 5.729C5.532 3.165 9.804 3.165 12.564 5.729C12.626 5.79 12.661 5.872 12.662 5.959C12.663 6.045 12.629 6.128 12.568 6.189L11.409 7.36C11.29 7.48 11.097 7.481 10.975 7.365C10.069 6.545 8.889 6.092 7.667 6.092C6.446 6.092 5.268 6.546 4.362 7.365C4.24 7.482 4.046 7.48 3.927 7.36L2.769 6.189C2.707 6.128 2.673 6.045 2.674 5.959C2.675 5.872 2.71 5.79 2.772 5.729Z"
              fill="#010618"
            />
            <path
              d="M0.097 3.039C4.328 -1.013 11.004 -1.013 15.236 3.039C15.298 3.099 15.333 3.182 15.333 3.268C15.333 3.353 15.3 3.436 15.239 3.497L14.079 4.667C13.96 4.787 13.765 4.788 13.644 4.67C12.031 3.138 9.892 2.284 7.667 2.284C5.442 2.284 3.302 3.138 1.689 4.67C1.568 4.788 1.374 4.787 1.255 4.667L0.094 3.497C0.033 3.436 -0.0005 3.353 0 3.268C0.0006 3.182 0.035 3.099 0.097 3.039Z"
              fill="#010618"
            />
          </svg>
          <div className="w-6 h-3 border border-[#21283F] border-opacity-35 rounded-sm relative">
            <div className="absolute inset-0.5 bg-slate-900 rounded-sm" />
            <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm" />
          </div>
        </div>
      </div>

      <div className="px-6 pt-4 flex items-center justify-between">
        <button
          type="button"
          className="text-sm text-[#80B3FF]"
          onClick={() => navigate(-1)}
        >
          목록으로
        </button>
        <h2 className="text-[28px] font-bold text-[#010618]">게시물 상세</h2>
        <div className="w-16" />
      </div>

      <div className="flex-1 px-6 py-6 space-y-6">
        <div>
          <p className="text-xs text-slate-500">{validTab}</p>
          <h3 className="text-2xl font-bold text-[#010618] mt-2">
            {post.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-slate-500 mt-2">
            <span>{post.author}</span>
            <span className="w-px h-3 bg-slate-200" />
            <span>{post.date}</span>
          </div>
        </div>

        <div className="text-sm leading-6 text-[#010618] whitespace-pre-line">
          {post.content}
        </div>

        {post.attachment && (
          <div className="border border-slate-200 rounded-2xl px-4 py-3">
            <p className="text-sm font-semibold text-[#010618] mb-1">
              첨부파일
            </p>
            <a
              href={post.attachment}
              className="text-sm text-[#80B3FF] underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              {post.attachment.split("/").slice(-1)[0]}
            </a>
          </div>
        )}

        <div className="flex justify-between items-center pt-4">
          <button
            type="button"
            onClick={() =>
              prevPost &&
              navigate(`/board/${encodeURIComponent(validTab)}/${prevPost.id}`)
            }
            disabled={!prevPost}
            className={`text-sm font-semibold ${prevPost ? "text-[#010618]" : "text-slate-300"}`}
          >
            이전 글
          </button>
          <button
            type="button"
            onClick={() =>
              nextPost &&
              navigate(`/board/${encodeURIComponent(validTab)}/${nextPost.id}`)
            }
            disabled={!nextPost}
            className={`text-sm font-semibold ${nextPost ? "text-[#010618]" : "text-slate-300"}`}
          >
            다음 글
          </button>
        </div>
      </div>

      <BottomNav currentPage="board" />
    </div>
  );
}
