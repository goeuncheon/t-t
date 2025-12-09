import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const formatDisplayDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  const dayLabels = ["일", "월", "화", "수", "목", "금", "토"];
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const weekday = dayLabels[date.getDay()];
  return `${year}/${month}/${day}(${weekday})`;
};

interface ReminderFormData {
  title: string;
  classId: string;
  description: string;
  date: string;
  isImportant: boolean;
  allDay: boolean;
  alarm: boolean;
  alarmTime: string;
}

const classes = [
  { id: "1", name: "수업 1", color: "#FFC374" },
  { id: "2", name: "수업 2", color: "#4AD2C9" },
  { id: "3", name: "수업 3", color: "#C44EFB" },
  { id: "4", name: "수업 4", color: "#536EFF" },
  { id: "5", name: "수업 5", color: "#7CED91" },
];

export default function ReminderForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  const dateInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ReminderFormData>({
    title: "",
    classId: "5",
    description: "",
    date: "2025-11-18",
    isImportant: false,
    allDay: true,
    alarm: true,
    alarmTime: "하루 전",
  });

  const handleSave = () => {
    navigate("/reminder");
  };

  const handleCancel = () => {
    navigate("/reminder");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pb-24">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-xs font-normal">9:41</div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 17 11" fill="none">
            <path d="M2 6.667C2.552 6.667 3 7.115 3 7.667V9.667C3 10.219 2.552 10.667 2 10.667H1C0.448 10.667 0 10.219 0 9.667V7.667C0 7.115 0.448 6.667 1 6.667H2Z" fill="#010618" />
            <path d="M6.667 4.667C7.219 4.667 7.667 5.115 7.667 5.667V9.667C7.667 10.219 7.219 10.667 6.667 10.667H5.667C5.115 10.667 4.667 10.219 4.667 9.667V5.667C4.667 5.115 5.115 4.667 5.667 4.667H6.667Z" fill="#010618" />
            <path d="M11.333 2.333C11.885 2.333 12.333 2.781 12.333 3.333V9.667C12.333 10.219 11.885 10.667 11.333 10.667H10.333C9.781 10.667 9.333 10.219 9.333 9.667V3.333C9.333 2.781 9.781 2.333 10.333 2.333H11.333Z" fill="#010618" />
            <path d="M16 0C16.552 0 17 0.448 17 1V9.667C17 10.219 16.552 10.667 16 10.667H15C14.448 10.667 14 10.219 14 9.667V1C14 0.448 14.448 0 15 0H16Z" fill="#010618" />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 16 11" fill="none">
            <path d="M5.448 8.427C6.729 7.344 8.605 7.344 9.886 8.427C9.95 8.485 9.987 8.568 9.989 8.654C9.991 8.741 9.956 8.824 9.895 8.885L7.89 10.907C7.831 10.967 7.751 11 7.667 11C7.583 11 7.503 10.967 7.444 10.907L5.438 8.885C5.377 8.824 5.343 8.741 5.345 8.654C5.347 8.568 5.384 8.485 5.448 8.427Z" fill="#010618" />
            <path d="M2.772 5.729C5.532 3.165 9.804 3.165 12.564 5.729C12.626 5.79 12.661 5.872 12.662 5.959C12.663 6.045 12.629 6.128 12.568 6.189L11.409 7.36C11.29 7.48 11.097 7.481 10.975 7.365C10.069 6.545 8.889 6.092 7.667 6.092C6.446 6.092 5.268 6.546 4.362 7.365C4.24 7.482 4.046 7.48 3.927 7.36L2.769 6.189C2.707 6.128 2.673 6.045 2.674 5.959C2.675 5.872 2.71 5.79 2.772 5.729Z" fill="#010618" />
            <path d="M0.097 3.039C4.328 -1.013 11.004 -1.013 15.236 3.039C15.298 3.099 15.333 3.182 15.333 3.268C15.333 3.353 15.3 3.436 15.239 3.497L14.079 4.667C13.96 4.787 13.765 4.788 13.644 4.67C12.031 3.138 9.892 2.284 7.667 2.284C5.442 2.284 3.302 3.138 1.689 4.67C1.568 4.788 1.374 4.787 1.255 4.667L0.094 3.497C0.033 3.436 -0.0005 3.353 0 3.268C0.0006 3.182 0.035 3.099 0.097 3.039Z" fill="#010618" />
          </svg>
          <div className="w-6 h-3 border border-[#21283F] border-opacity-35 rounded-sm relative">
            <div className="absolute inset-0.5 bg-slate-900 rounded-sm" />
            <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm" />
          </div>
        </div>
      </div>

      {/* Header with Cancel/Save */}
      <div className="flex justify-between items-center px-6 py-3 mb-5">
        <button
          type="button"
          onClick={handleCancel}
          className="text-base text-[#80B3FF] font-semibold"
        >
          취소
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="text-base text-[#80B3FF] font-semibold"
        >
          저장
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 px-6 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#010618]">
            {isEditMode ? "리마인더 수정" : "새 리마인더"}
          </h2>
          <button
            type="button"
            className="text-xl font-bold text-[#010618]"
            onClick={() => dateInputRef.current?.showPicker()}
          >
            {formatDisplayDate(formData.date)}
          </button>
          <input
            ref={dateInputRef}
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="sr-only"
          />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <label className="text-sm text-[#21283F]">제목</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="상세내용"
            className="w-full h-11 px-3 py-2 border border-[#21283F] rounded-lg text-sm placeholder:text-[#21283F] placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#80B3FF]"
          />
        </div>

        {/* Class Selector */}
        <div className="space-y-2">
          <label className="text-sm text-[#21283F]">수업</label>
          <div className="relative">
            <select
              value={formData.classId}
              onChange={(e) => setFormData({ ...formData, classId: e.target.value })}
              className="w-full h-11 px-3 py-2 border border-[#21283F] rounded-lg text-sm text-[#010618] appearance-none focus:outline-none focus:ring-2 focus:ring-[#80B3FF]"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M4 6L8 10L12 6" stroke="#21283F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm text-[#21283F]">설명</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="상세내용"
            className="w-full h-20 px-3 py-2 border border-[#21283F] rounded text-sm placeholder:text-[#21283F] placeholder:opacity-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#80B3FF]"
          />
        </div>

        {/* Important Checkbox */}
        <label className="flex items-center gap-2 cursor-pointer">
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center ${
              formData.isImportant ? "bg-[#010618] border-[#010618]" : "border-[#010618]"
            }`}
            onClick={() => setFormData({ ...formData, isImportant: !formData.isImportant })}
          >
            {formData.isImportant && (
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 11 8" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.2686 0.230941C10.4163 0.378689 10.4993 0.579052 10.4993 0.787968C10.4993 0.996884 10.4163 1.19725 10.2686 1.34499L4.36321 7.25037C4.28517 7.32843 4.19251 7.39035 4.09054 7.43259C3.98856 7.47484 3.87927 7.49658 3.76889 7.49658C3.65851 7.49658 3.54921 7.47484 3.44724 7.43259C3.34526 7.39035 3.25261 7.32843 3.17457 7.25037L0.240528 4.31685C0.165279 4.24417 0.105257 4.15724 0.063965 4.06111C0.0226733 3.96499 0.000938809 3.8616 2.97474e-05 3.75699C-0.000879314 3.65238 0.0190553 3.54863 0.0586703 3.4518C0.0982852 3.35498 0.156787 3.26701 0.230763 3.19303C0.304738 3.11906 0.392706 3.06056 0.489533 3.02094C0.586359 2.98133 0.690106 2.96139 0.79472 2.9623C0.899333 2.96321 1.00272 2.98494 1.09884 3.02624C1.19496 3.06753 1.2819 3.12755 1.35458 3.2028L3.76863 5.61684L9.154 0.230941C9.22717 0.157727 9.31405 0.0996475 9.40967 0.0600216C9.50529 0.0203956 9.60778 0 9.71129 0C9.8148 0 9.91729 0.0203956 10.0129 0.0600216C10.1085 0.0996475 10.1954 0.157727 10.2686 0.230941Z"
                />
              </svg>
            )}
          </div>
          <span className="text-sm text-[#010618]">중요 알림으로 설정</span>
        </label>

        <div className="h-px bg-slate-200" />

        {/* All Day Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-[#010618]">하루 종일</span>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, allDay: !formData.allDay })}
            className={`w-11 h-6 rounded-full transition-colors relative ${
              formData.allDay ? "bg-[#4AD2C9]" : "bg-slate-300"
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                formData.allDay ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* Alarm Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-[17px] font-bold text-[#010618]">알람</span>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, alarm: !formData.alarm })}
            className={`w-11 h-6 rounded-full transition-colors relative ${
              formData.alarm ? "bg-[#4AD2C9]" : "bg-slate-300"
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                formData.alarm ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* Alarm Time Selector */}
        {formData.alarm && (
          <div className="relative">
            <select
              value={formData.alarmTime}
              onChange={(e) => setFormData({ ...formData, alarmTime: e.target.value })}
              className="w-32 h-6 px-2 border border-[#010618] rounded-lg text-sm text-[#21283F] appearance-none focus:outline-none focus:ring-2 focus:ring-[#80B3FF]"
            >
              <option>하루 전</option>
              <option>1시간 전</option>
              <option>30분 전</option>
              <option>정시</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M4 6L8 10L12 6" stroke="#21283F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
