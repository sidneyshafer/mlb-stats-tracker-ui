import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/navigation/nav";
import { Dashboard } from "./components/dashboard/main";
import { Teams } from "./components/teams/main";
import { Players } from "./components/players/main";
// import Schedule from "./components/Schedule";

export default function App() {
  return (
    <Router>
      <div className="h-screen flex bg-background text-foreground">
        <main className="flex-1 flex flex-col">
          <Nav />
          <Routes>
            <Route path="/" element={
              <div className="flex-1 overflow-y-auto">
                <Dashboard />
              </div>
              } 
            />
            <Route path="/teams" element={
              <div className="flex-1 overflow-y-auto">
                <Teams />
              </div>
              } 
            />
            <Route path="/players" element={
              <div className="flex-1 overflow-y-auto">
                <Players />
              </div>
              } 
            />
            {/* <Route path="/schedule" element={<Schedule />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}