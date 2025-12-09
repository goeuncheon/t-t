import BottomNav from "@/components/BottomNav";

export default function Reminder() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs text-slate-900">9:41</div>
        </div>
        <h1 className="text-3xl font-bold">리마인더</h1>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* 오늘 Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">오늘 - 2025 / 11 / 18</h2>
          
          {/* 수업 1 */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-[#FFC374]">수업 1</h3>
              <button>
                <svg className="w-6 h-6 text-[#FFC374]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.4217 2.75 18.8923 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.655 21.1083 7.11733 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              <label className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 border-2 border-slate-900 rounded flex items-center justify-center bg-slate-900">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 11 8" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2686 0.230941C10.4163 0.378689 10.4993 0.579052 10.4993 0.787968C10.4993 0.996884 10.4163 1.19725 10.2686 1.34499L4.36321 7.25037C4.28517 7.32843 4.19251 7.39035 4.09054 7.43259C3.98856 7.47484 3.87927 7.49658 3.76889 7.49658C3.65851 7.49658 3.54921 7.47484 3.44724 7.43259C3.34526 7.39035 3.25261 7.32843 3.17457 7.25037L0.240528 4.31685C0.165279 4.24417 0.105257 4.15724 0.063965 4.06111C0.0226733 3.96499 0.000938809 3.8616 2.97474e-05 3.75699C-0.000879314 3.65238 0.0190553 3.54863 0.0586703 3.4518C0.0982852 3.35498 0.156787 3.26701 0.230763 3.19303C0.304738 3.11906 0.392706 3.06056 0.489533 3.02094C0.586359 2.98133 0.690106 2.96139 0.79472 2.9623C0.899333 2.96321 1.00272 2.98494 1.09884 3.02624C1.19496 3.06753 1.2819 3.12755 1.35458 3.2028L3.76863 5.61684L9.154 0.230941C9.22717 0.157727 9.31405 0.0996475 9.40967 0.0600216C9.50529 0.0203956 9.60778 0 9.71129 0C9.8148 0 9.91729 0.0203956 10.0129 0.0600216C10.1085 0.0996475 10.1954 0.157727 10.2686 0.230941Z"/>
                  </svg>
                </div>
                <span className="line-through text-slate-600">저번 시간 숙제</span>
              </label>
              <p className="text-xs text-slate-500 ml-7 line-through">상세내용</p>

              <label className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 border-2 border-slate-900 rounded flex items-center justify-center bg-slate-900">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 11 8" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2686 0.230941C10.4163 0.378689 10.4993 0.579052 10.4993 0.787968C10.4993 0.996884 10.4163 1.19725 10.2686 1.34499L4.36321 7.25037C4.28517 7.32843 4.19251 7.39035 4.09054 7.43259C3.98856 7.47484 3.87927 7.49658 3.76889 7.49658C3.65851 7.49658 3.54921 7.47484 3.44724 7.43259C3.34526 7.39035 3.25261 7.32843 3.17457 7.25037L0.240528 4.31685C0.165279 4.24417 0.105257 4.15724 0.063965 4.06111C0.0226733 3.96499 0.000938809 3.8616 2.97474e-05 3.75699C-0.000879314 3.65238 0.0190553 3.54863 0.0586703 3.4518C0.0982852 3.35498 0.156787 3.26701 0.230763 3.19303C0.304738 3.11906 0.392706 3.06056 0.489533 3.02094C0.586359 2.98133 0.690106 2.96139 0.79472 2.9623C0.899333 2.96321 1.00272 2.98494 1.09884 3.02624C1.19496 3.06753 1.2819 3.12755 1.35458 3.2028L3.76863 5.61684L9.154 0.230941C9.22717 0.157727 9.31405 0.0996475 9.40967 0.0600216C9.50529 0.0203956 9.60778 0 9.71129 0C9.8148 0 9.91729 0.0203956 10.0129 0.0600216C10.1085 0.0996475 10.1954 0.157727 10.2686 0.230941Z"/>
                  </svg>
                </div>
                <span className="line-through text-slate-600">프린트 챙겨오기</span>
              </label>
              <p className="text-xs text-slate-500 ml-7 line-through">상세내용</p>

              <label className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 border-2 border-slate-900 rounded"></div>
                <span>형성평가 X차시</span>
              </label>
              <p className="text-xs text-slate-500 ml-7">상세내용</p>
            </div>
          </div>

          {/* 수업 2 */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-[#4AD2C9]">수업 2</h3>
              <button>
                <svg className="w-6 h-6 text-[#4AD2C9]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.4217 2.75 18.8923 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.655 21.1083 7.11733 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              <label className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 border-2 border-slate-900 rounded"></div>
                <span>리마인더 1</span>
              </label>
              <p className="text-xs text-slate-500 ml-7">상세내용</p>
            </div>
          </div>
        </div>

        {/* 내일 Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">내일 - 2025 / 11 / 19</h2>
          
          {/* 수업 4 */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-[#536EFF]">수업 4</h3>
              <button>
                <svg className="w-6 h-6 text-[#536EFF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.4217 2.75 18.8923 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.655 21.1083 7.11733 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              <label className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 border-2 border-slate-900 rounded"></div>
                <span>리마인더 2</span>
              </label>
              <p className="text-xs text-slate-500 ml-7">상세내용</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <button className="fixed right-6 bottom-24 w-14 h-14 bg-[#80B3FF] rounded-full shadow-lg flex items-center justify-center">
        <svg className="w-8 h-8 text-white" viewBox="0 0 20 20" fill="none">
          <path d="M10 4.69403V9.59442H14.9046V10.0026H10V14.903H9.596V10.0026H4.696V9.59442H9.596V4.69403H10Z" fill="white" stroke="#010618" strokeWidth="1.225"/>
        </svg>
      </button>

      <BottomNav currentPage="reminder" />
    </div>
  );
}
