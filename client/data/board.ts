export type BoardTab = "공지사항" | "행사" | "자료실";

export interface BoardPostDetail {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  attachment?: string;
}

const createFillerPosts = (options: {
  startId: number;
  count: number;
  title: string;
  author?: string;
  date?: string;
  contentPrefix?: string;
}): BoardPostDetail[] => {
  const {
    startId,
    count,
    title,
    author = "OOO",
    date = "00.00",
    contentPrefix = title,
  } = options;
  return Array.from({ length: count }, (_, index) => {
    const id = startId + index;
    return {
      id,
      title: `${title} ${id}`,
      author,
      date,
      content: `${contentPrefix} 상세내용 ${id}`,
    };
  });
};

const noticePosts: BoardPostDetail[] = [
  {
    id: 1,
    title: "도서관 교육 일정 안내",
    author: "홍길동",
    date: "01.01",
    content:
      "도서관 교육 일정과 관련된 세부 안내 내용입니다. 참여 대상, 시간표, 준비물을 확인해 주세요.",
    attachment: "https://example.com/library-schedule.pdf",
  },
  ...createFillerPosts({
    startId: 2,
    count: 14,
    title: "공지사항 예시",
    contentPrefix: "공지사항",
  }),
];

const eventPosts: BoardPostDetail[] = [
  {
    id: 1,
    title: "겨울방학식 안내",
    author: "학생지원팀",
    date: "12.22",
    content:
      "겨울방학식 일정과 행사 프로그램을 안내드립니다. 당일 진행 순서를 참고하세요.",
    attachment: "https://example.com/winter-event.pdf",
  },
  ...createFillerPosts({
    startId: 2,
    count: 14,
    title: "행사 예시",
    contentPrefix: "행사",
  }),
];

const archivePosts: BoardPostDetail[] = [
  {
    id: 1,
    title: "급식 신청서 양식",
    author: "행정실",
    date: "03.01",
    content: "급식 신청서 양식과 작성 예시를 확인하고 제출 기한을 지켜 주세요.",
    attachment: "https://example.com/lunch-form.hwp",
  },
  ...createFillerPosts({
    startId: 2,
    count: 14,
    title: "자료실 예시",
    contentPrefix: "자료",
  }),
];

export const boardData: Record<BoardTab, BoardPostDetail[]> = {
  공지사항: noticePosts,
  행사: eventPosts,
  자료실: archivePosts,
};

export const POSTS_PER_PAGE = 3;
export const TOTAL_PAGES = 5;

export const getPostsForTabAndPage = (
  tab: BoardTab,
  page: number,
): BoardPostDetail[] => {
  const posts = boardData[tab] ?? [];
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
};

export const getPostByTabAndId = (
  tab: BoardTab,
  id: number,
): BoardPostDetail | undefined =>
  boardData[tab]?.find((post) => post.id === id);
