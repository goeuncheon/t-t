import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-8 py-5 bg-white border-b border-[#EBEBF5]">
        <div className="text-sm font-semibold text-[#010618]">9:41</div>
        <div className="flex items-center gap-3 text-[#010618]">
          <svg className="w-5 h-5" viewBox="0 0 17 11" fill="none">
            <path d="M2 6.667C2.552 6.667 3 7.115 3 7.667V9.667C3 10.219 2.552 10.667 2 10.667H1C0.448 10.667 0 10.219 0 9.667V7.667C0 7.115 0.448 6.667 1 6.667H2Z" fill="#010618" />
            <path d="M6.667 4.667C7.219 4.667 7.667 5.115 7.667 5.667V9.667C7.667 10.219 7.219 10.667 6.667 10.667H5.667C5.115 10.667 4.667 10.219 4.667 9.667V5.667C4.667 5.115 5.115 4.667 5.667 4.667H6.667Z" fill="#010618" />
            <path d="M11.333 2.333C11.885 2.333 12.333 2.781 12.333 3.333V9.667C12.333 10.219 11.885 10.667 11.333 10.667H10.333C9.781 10.667 9.333 10.219 9.333 9.667V3.333C9.333 2.781 9.781 2.333 10.333 2.333H11.333Z" fill="#010618" />
            <path d="M16 0C16.552 0 17 0.448 17 1V9.667C17 10.219 16.552 10.667 16 10.667H15C14.448 10.667 14 10.219 14 9.667V1C14 0.448 14.448 0 15 0H16Z" fill="#010618" />
          </svg>
          <svg className="w-5 h-5" viewBox="0 0 16 11" fill="none">
            <path d="M5.448 8.427C6.729 7.344 8.605 7.344 9.886 8.427C9.95 8.485 9.987 8.568 9.989 8.654C9.991 8.741 9.956 8.824 9.895 8.885L7.89 10.907C7.831 10.967 7.751 11 7.667 11C7.583 11 7.503 10.967 7.444 10.907L5.438 8.885C5.377 8.824 5.343 8.741 5.345 8.654C5.347 8.568 5.384 8.485 5.448 8.427Z" fill="#010618" />
            <path d="M2.772 5.729C5.532 3.165 9.804 3.165 12.564 5.729C12.626 5.79 12.661 5.872 12.662 5.959C12.663 6.045 12.629 6.128 12.568 6.189L11.409 7.36C11.29 7.48 11.097 7.481 10.975 7.365C10.069 6.545 8.889 6.092 7.667 6.092C6.446 6.092 5.268 6.546 4.362 7.365C4.24 7.482 4.046 7.48 3.927 7.36L2.769 6.189C2.707 6.128 2.673 6.045 2.674 5.959C2.675 5.872 2.71 5.79 2.772 5.729Z" fill="#010618" />
            <path d="M0.097 3.039C4.328 -1.013 11.004 -1.013 15.236 3.039C15.298 3.099 15.333 3.182 15.333 3.268C15.333 3.353 15.3 3.436 15.239 3.497L14.079 4.667C13.96 4.787 13.765 4.788 13.644 4.67C12.031 3.138 9.892 2.284 7.667 2.284C5.442 2.284 3.302 3.138 1.689 4.67C1.568 4.788 1.374 4.787 1.255 4.667L0.094 3.497C0.033 3.436 -0.0005 3.353 0 3.268C0.0006 3.182 0.035 3.099 0.097 3.039Z" fill="#010618" />
          </svg>
          <div className="w-7 h-3.5 border border-[#21283F] border-opacity-35 rounded-sm relative">
            <div className="absolute inset-0.5 bg-slate-900 rounded-sm"></div>
            <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm"></div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex justify-center px-4 sm:px-8 pb-10">
        <div className="relative w-full max-w-4xl flex flex-col items-center pt-10">
          {/* Logo */}
          <div className="relative z-0 mb-4">
            <a href="https://schoolapp-e9fa3.web.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F54789b7bb2db40c3bb59c5ad8b27d3a0%2Ff0eeec29ef7f412cb99b3b5c48754d71?format=webp&width=800"
                alt="School Mate Logo"
                className="w-[420px] max-w-[85vw] h-auto opacity-95"
              />
            </a>
          </div>

          {/* Navigation Cards Grid */}
          <div className="relative z-20 w-full grid grid-cols-2 gap-8 sm:gap-12 -mt-14">
            <Link to="/schedule" className="block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F54789b7bb2db40c3bb59c5ad8b27d3a0%2Fe5b1b32ad6c74a479a7bf5f02f606293?format=webp&width=800"
                alt="일정"
                className="w-full rounded-[40px] border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
              />
            </Link>

            <Link to="/timetable" className="block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F54789b7bb2db40c3bb59c5ad8b27d3a0%2F1e94785afedf4f0886ae0ecbfcdbd64c?format=webp&width=800"
                alt="시간표"
                className="w-full rounded-[40px] border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
              />
            </Link>

            <Link to="/reminder" className="block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F54789b7bb2db40c3bb59c5ad8b27d3a0%2Ffd21b7a522404c22baadca1259a59266?format=webp&width=800"
                alt="리마인더"
                className="w-full rounded-[40px] border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
              />
            </Link>

            <Link to="/board" className="block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F54789b7bb2db40c3bb59c5ad8b27d3a0%2F6a91e79c89444c628bc46138f251a42f?format=webp&width=800"
                alt="게시판"
                className="w-full rounded-[40px] border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
              />
            </Link>
          </div>

          {/* Login Button */}
          <button className="relative z-20 mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F54789b7bb2db40c3bb59c5ad8b27d3a0%2Fea9e28917f9f4d5aa91678914842b384?format=webp&width=800"
              alt="LOGIN"
              className="h-24 w-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
