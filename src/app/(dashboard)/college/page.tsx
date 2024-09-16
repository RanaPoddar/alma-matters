import Announcements from "@/Components/dashboard/college/Announcements";
import AttendanceChart from "@/Components/dashboard/college/AttendanceChart";
import CountChart from "@/Components/dashboard/college/CountChart";
import EventCalendar from "@/Components/dashboard/college/EventCalendar";
import FinanceChart from "@/Components/dashboard/college/FinanceChart";
import UserCard from "@/Components/dashboard/college/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Total Students" numberCount="754" />
          <UserCard type="Total alumni" numberCount="1467" />
          <UserCard type="Total Donations" numberCount="458704" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <FinanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          
           {/* <AttendanceChart /> */}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;
