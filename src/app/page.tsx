import SchedulePage from "../app/schedule/page";

export default function Home() {
  return (
      
      <div className="dashboard-layout">
        <main className="dashboard-main">
          <h1>Schedule Buses</h1>
          <div className="schedule-placeholder">
              <SchedulePage/>
          </div>
        </main>
      </div>
  );
}
