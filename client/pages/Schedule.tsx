import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

type Reminder = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type ScheduleItem = {
  id: number;
  startTime: string;
  endTime: string;
  title: string;
  class: string;
  color: string;
  reminders?: Reminder[];
};

type WeekData = {
  weekStart: Date;
  days: Array<{
    date: number;
    day: string;
    badge?: string;
    badgeColor?: string;
  }>;
  schedules: {
    [key: number]: ScheduleItem[];
  };
};

const weeksData: WeekData[] = [
  {
    weekStart: new Date(2025, 10, 11),
    days: [
      { date: 11, day: "Mon", badge: "1", badgeColor: "#FFC374" },
      { date: 12, day: "Tue", badge: "2", badgeColor: "#4AD2C9" },
      { date: 13, day: "Wed" },
      { date: 14, day: "Thu", badge: "1", badgeColor: "#C44EFB" },
      { date: 15, day: "Fri" },
    ],
    schedules: {
      11: [
        {
          id: 101,
          startTime: "09:00 AM",
          endTime: "10:00 AM",
          title: "수학 시험",
          class: "1학년 1반",
          color: "#FFC374",
          reminders: [
            { id: 1, title: "시험지 준비", description: "객관식 30문항", completed: true },
          ],
        },
      ],
      12: [
        {
          id: 102,
          startTime: "10:00 AM",
          endTime: "11:00 AM",
          title: "과학 실험",
          class: "1학년 2반",
          color: "#4AD2C9",
          reminders: [
            { id: 2, title: "실험 도구 준비", description: "현미경, 슬라이드", completed: false },
            { id: 3, title: "안전 교육", description: "보안경 착용", completed: true },
          ],
        },
      ],
      14: [
        {
          id: 103,
          startTime: "14:00 PM",
          endTime: "15:00 PM",
          title: "체육 대회",
          class: "1학년 전체",
          color: "#C44EFB",
          reminders: [
            { id: 4, title: "운동복 챙기기", description: "체육복 상하의", completed: false },
          ],
        },
      ],
    },
  },
  {
    weekStart: new Date(2025, 10, 18),
    days: [
      { date: 18, day: "Mon", badge: "2", badgeColor: "#21283F" },
      { date: 19, day: "Tue", badge: "1", badgeColor: "#F66B6B" },
      { date: 20, day: "Wed" },
      { date: 21, day: "Thu", badge: "3", badgeColor: "#4AD2C9" },
      { date: 22, day: "Fri" },
    ],
    schedules: {
      18: [
        {
          id: 1,
          startTime: "08:00 AM",
          endTime: "09:00 AM",
          title: "수업 1 홍길동 T",
          class: "1학년 1반",
          color: "#FFC374",
          reminders: [
            { id: 1, title: "저번 시간 숙제", description: "상세내용", completed: true },
            { id: 2, title: "프린트 챙겨오기", description: "상세내용 (글자추가)", completed: true },
            { id: 3, title: "형성평가 X차시", description: "상세내용", completed: false },
          ],
        },
        {
          id: 2,
          startTime: "09:10 AM",
          endTime: "10:00 AM",
          title: "수업 2 홍길동 T",
          class: "1학년 2반",
          color: "#4AD2C9",
          reminders: [
            { id: 4, title: "교과서 읽기", description: "3단원", completed: false },
          ],
        },
        {
          id: 3,
          startTime: "10:10 AM",
          endTime: "11:00 AM",
          title: "수업 3 홍길동 T",
          class: "1학년 3반",
          color: "#C44EFB",
        },
        {
          id: 4,
          startTime: "11:10 AM",
          endTime: "12:00 PM",
          title: "수업 4 홍길동 T",
          class: "1학년 4반",
          color: "#536EFF",
        },
      ],
      19: [
        {
          id: 5,
          startTime: "09:00 AM",
          endTime: "10:00 AM",
          title: "영어 회화",
          class: "1학년 1반",
          color: "#F66B6B",
          reminders: [
            { id: 5, title: "발표 준비", description: "자기소개 영어로", completed: false },
          ],
        },
      ],
      21: [
        {
          id: 6,
          startTime: "13:00 PM",
          endTime: "14:00 PM",
          title: "음악 수업",
          class: "1학년 1반",
          color: "#4AD2C9",
          reminders: [
            { id: 6, title: "악보 가져오기", description: "리코더 악보", completed: false },
            { id: 7, title: "리코더 준비", description: "청소하기", completed: false },
            { id: 8, title: "연습곡 복습", description: "3곡", completed: true },
          ],
        },
      ],
    },
  },
  {
    weekStart: new Date(2025, 10, 25),
    days: [
      { date: 25, day: "Mon", badge: "1", badgeColor: "#536EFF" },
      { date: 26, day: "Tue" },
      { date: 27, day: "Wed", badge: "2", badgeColor: "#FFC374" },
      { date: 28, day: "Thu" },
      { date: 29, day: "Fri", badge: "1", badgeColor: "#F66B6B" },
    ],
    schedules: {
      25: [
        {
          id: 201,
          startTime: "09:00 AM",
          endTime: "10:00 AM",
          title: "독서 토론",
          class: "1학년 1반",
          color: "#536EFF",
          reminders: [
            { id: 9, title: "독서 감상문", description: "A4 1장", completed: false },
          ],
        },
      ],
      27: [
        {
          id: 202,
          startTime: "10:00 AM",
          endTime: "11:00 AM",
          title: "미술 수업",
          class: "1학년 2반",
          color: "#FFC374",
          reminders: [
            { id: 10, title: "스케치북 준비", description: "8절 스케치북", completed: false },
            { id: 11, title: "물감 세트", description: "12색 물감", completed: false },
          ],
        },
      ],
      29: [
        {
          id: 203,
          startTime: "14:00 PM",
          endTime: "15:00 PM",
          title: "과학 발표",
          class: "1학년 3반",
          color: "#F66B6B",
          reminders: [
            { id: 12, title: "PPT 준비", description: "10장 이내", completed: false },
          ],
        },
      ],
    },
  },
];

const ReminderDot = ({
  value,
  color = "#21283F",
  variant = "solid",
}: {
  value?: string;
  color?: string;
  variant?: "solid" | "outline";
}) => {
  if (!value) {
    return <div className="h-5" />;
  }

  return (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center ${
        variant === "solid" ? "bg-white" : "bg-white border"
      }`}
      style={variant === "outline" ? { borderColor: color } : undefined}
    >
      <span className="text-xs font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  );
};

export default function Schedule() {
  const navigate = useNavigate();
  const [currentWeekIndex, setCurrentWeekIndex] = useState(1);
  const [selectedDate, setSelectedDate] = useState(18);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleItem | null>(null);
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const currentWeek = weeksData[currentWeekIndex];
  const currentSchedules = currentWeek.schedules[selectedDate] || [];

  const handlePreviousWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
      setSelectedDate(weeksData[currentWeekIndex - 1].days[0].date);
    }
  };

  const handleNextWeek = () => {
    if (currentWeekIndex < weeksData.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
      setSelectedDate(weeksData[currentWeekIndex + 1].days[0].date);
    }
  };

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  const handleScheduleClick = (schedule: ScheduleItem) => {
    setSelectedSchedule(schedule);
    setReminders(schedule.reminders || []);
  };

  const handleCloseDetail = () => {
    setSelectedSchedule(null);
    setReminders([]);
  };

  const handleToggleReminder = (id: number) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
      )
    );
  };

  const handleAddReminder = () => {
    navigate("/reminder/add");
  };

  return (
    <div className="min-h-screen bg-white pb-24">
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
            <div className="absolute inset-0.5 bg-slate-900 rounded-sm"></div>
            <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm"></div>
          </div>
        </div>
      </div>

      <div className="px-6 pt-4">
        <h2 className="text-[32px] font-bold text-[#010618] tracking-tight">일정</h2>
      </div>

      {/* Calendar Section */}
      <div className="px-6 pt-4 pb-2 flex-shrink-0">
        {/* Date Header with Arrows */}
        <div className="flex items-center justify-center gap-6">
          <button 
            className="p-2 disabled:opacity-30" 
            onClick={handlePreviousWeek}
            disabled={currentWeekIndex === 0}
          >
            <svg className="w-6 h-6 text-[#010618]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-[#010618]">2025 / 11</h1>
          <button 
            className="p-2 disabled:opacity-30" 
            onClick={handleNextWeek}
            disabled={currentWeekIndex === weeksData.length - 1}
          >
            <svg className="w-6 h-6 text-[#010618]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>

        {/* Date Row */}
        <div className="grid grid-cols-5 gap-3 items-end mt-4">
          {currentWeek.days.map((day) => (
            <button 
              key={day.date} 
              className="flex justify-center"
              onClick={() => handleDateClick(day.date)}
            >
              {selectedDate === day.date ? (
                <div className="h-24 w-full max-w-[76px] rounded-3xl bg-[#80B3FF] px-2 py-2 flex flex-col items-center justify-between">
                  <div className="text-2xl font-bold text-white leading-none">{day.date}</div>
                  <div className="text-xs font-bold text-white">{day.day}</div>
                  <ReminderDot value={day.badge} color={day.badgeColor} variant="solid" />
                </div>
              ) : (
                <div className="h-24 w-full max-w-[72px] flex flex-col items-center justify-between py-2">
                  <div className="text-xl font-bold text-[#21283F] leading-none">{day.date}</div>
                  <div className="text-xs text-slate-400">{day.day}</div>
                  <ReminderDot
                    value={day.badge}
                    color={day.badgeColor ?? "#21283F"}
                    variant={day.badge ? "outline" : "solid"}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="px-6 space-y-4 mt-8">
        {currentSchedules.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            일정이 없습니다
          </div>
        ) : (
          currentSchedules.map((schedule) => (
            <div
              key={schedule.id}
              className="flex p-4 gap-2 rounded-lg bg-[rgba(235,235,245,0.6)]"
            >
              <div className="flex flex-col items-end gap-2.5 w-20">
                <button 
                  className="flex items-start gap-1"
                  onClick={() => handleScheduleClick(schedule)}
                >
                  <svg className="w-4.5 h-4.5" viewBox="0 0 18 18" fill="none">
                    <path d="M11.655 9.6363L12.2913 9L7.20003 3.9087L5.92743 5.1813L9.74523 9L5.92743 12.8187L7.20003 14.0913L11.655 9.6363Z" fill="#010618" />
                  </svg>
                  <div className="text-xs text-[#010618] text-center">{schedule.startTime}</div>
                </button>
                <div className="text-xs text-[#010618] text-right">{schedule.endTime}</div>
              </div>

              <div className="w-px" style={{ backgroundColor: schedule.color }} />

              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <div className="text-base font-bold" style={{ color: schedule.color }}>
                      {schedule.title}
                    </div>
                    <button 
                      className="text-xs font-bold text-[#21283F]"
                      onClick={() => handleScheduleClick(schedule)}
                    >
                      더보기
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-xs text-[#21283F]">{schedule.class}</div>
                    {schedule.reminders && schedule.reminders.length > 0 && (
                      <>
                        <div className="w-px h-4.5 bg-[#21283F]" />
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-[#F66B6B] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs text-center">
                              {schedule.reminders.filter((r) => !r.completed).length}
                            </span>
                          </div>
                          <div className="text-xs text-[#010618] text-center">리마인더</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detail Modal */}
      {selectedSchedule && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen flex flex-col">
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
                  <div className="absolute inset-0.5 bg-slate-900 rounded-sm"></div>
                  <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-slate-900 opacity-40 rounded-r-sm"></div>
                </div>
              </div>
            </div>

            {/* Date Header */}
            <div className="flex flex-col gap-6 px-6 pt-2">
              <h1 className="text-xl font-bold text-[#010618] text-center">2025 / 11</h1>
              
              {/* Date Row */}
              <div className="flex items-start gap-6 justify-center relative">
                <div className="absolute left-5 top-14">
                  {currentWeek.days.map((day) => {
                    if (day.badge && day.date === selectedDate) {
                      return (
                        <div
                          key={`badge-${day.date}`}
                          className="w-4 h-4 bg-[#F66B6B] rounded-full flex items-center justify-center"
                        >
                          <span className="text-white text-xs">{day.badge}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                {currentWeek.days.map((day) => (
                  <div
                    key={day.date}
                    className="flex flex-col items-center justify-center gap-0.5"
                  >
                    <div
                      className={`text-xl font-bold ${
                        day.date === selectedDate ? "text-[#21283F]" : "text-[#21283F]"
                      }`}
                    >
                      {day.date}
                    </div>
                    <div
                      className={`text-xs ${
                        day.date === selectedDate ? "text-[#21283F] font-normal" : "text-slate-400"
                      }`}
                    >
                      {day.day}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Detail Card */}
            <div className="flex-1 px-6 mt-4">
              <div className="flex gap-2">
                <div className="flex flex-col items-end pt-1">
                  <button className="flex items-start gap-1 mb-2">
                    <svg className="w-4.5 h-4.5 transform rotate-90" viewBox="0 0 18 18" fill="none">
                      <path d="M8.36371 11.655L9.00001 12.2913L14.0913 7.19997L12.8187 5.92737L9.00001 9.74517L5.18131 5.92737L3.90871 7.19997L8.36371 11.655Z" fill="#010618" />
                    </svg>
                    <div className="text-sm text-[#010618]">{selectedSchedule.startTime}</div>
                  </button>
                  <div className="text-sm text-[#010618] text-right mt-auto">
                    {selectedSchedule.endTime}
                  </div>
                </div>

                <div className="w-px min-h-full" style={{ backgroundColor: selectedSchedule.color }} />

                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-base font-bold" style={{ color: selectedSchedule.color }}>
                      {selectedSchedule.title}
                    </div>
                    <div className="text-xs text-[#21283F]">{selectedSchedule.class}</div>
                  </div>

                  {reminders.length > 0 && (
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-1">
                        <div className="text-base font-bold text-[#010618]">리마인더</div>
                        <div className="w-4 h-4 bg-[#F66B6B] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">
                            {reminders.filter((r) => !r.completed).length}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        {reminders.map((reminder) => (
                          <div key={reminder.id} className="flex flex-col gap-1">
                            <button
                              className="flex items-center gap-2"
                              onClick={() => handleToggleReminder(reminder.id)}
                            >
                              <div className="w-6 h-6 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-sm border border-[#010618] flex items-center justify-center">
                                  {reminder.completed && (
                                    <svg className="w-2.5 h-2" viewBox="0 0 11 8" fill="none">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.2686 0.230941C10.4163 0.378689 10.4993 0.579052 10.4993 0.787968C10.4993 0.996884 10.4163 1.19725 10.2686 1.34499L4.36321 7.25037C4.28517 7.32843 4.19251 7.39035 4.09054 7.43259C3.98856 7.47484 3.87927 7.49658 3.76889 7.49658C3.65851 7.49658 3.54921 7.47484 3.44724 7.43259C3.34526 7.39035 3.25261 7.32843 3.17457 7.25037L0.240528 4.31685C0.165279 4.24417 0.105257 4.15724 0.063965 4.06111C0.0226733 3.96499 0.000938809 3.8616 2.97474e-05 3.75699C-0.000879314 3.65238 0.0190553 3.54863 0.0586703 3.4518C0.0982852 3.35498 0.156787 3.26701 0.230763 3.19303C0.304738 3.11906 0.392706 3.06056 0.489533 3.02094C0.586359 2.98133 0.690106 2.96139 0.79472 2.9623C0.899333 2.96321 1.00272 2.98494 1.09884 3.02624C1.19496 3.06753 1.2819 3.12755 1.35458 3.2028L3.76863 5.61684L9.154 0.230941C9.22717 0.157727 9.31405 0.0996475 9.40967 0.0600216C9.50529 0.0203956 9.60778 0 9.71129 0C9.8148 0 9.91729 0.0203956 10.0129 0.0600216C10.1085 0.0996475 10.1954 0.157727 10.2686 0.230941Z"
                                        fill="#21283F"
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              <div
                                className={`text-sm ${
                                  reminder.completed
                                    ? "text-[#010618] line-through"
                                    : "text-[#010618]"
                                }`}
                              >
                                {reminder.title}
                              </div>
                            </button>
                            <div
                              className={`text-xs ml-8 ${
                                reminder.completed
                                  ? "text-[#21283F] line-through"
                                  : "text-[#21283F]"
                              }`}
                            >
                              {reminder.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2 mt-4">
                    <button
                      className="flex h-9 px-3 justify-center items-center border-1.5 border-[#80B3FF] rounded"
                      onClick={handleCloseDetail}
                    >
                      <span className="text-base font-bold text-[#010618]">닫기</span>
                    </button>
                    <button
                      className="flex h-9 px-3 justify-center items-center rounded border border-[#536EFF] bg-[#80B3FF]"
                      onClick={handleAddReminder}
                    >
                      <span className="text-base font-bold text-[#010618]">+추가</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNav currentPage="schedule" />
    </div>
  );
}
