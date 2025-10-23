import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/teams", label: "Teams" },
  { href: "/players", label: "Players" },
  { href: "/schedule", label: "Schedule" },
];

export function Nav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="sticky px-6 top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="w-full flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-balance">MLB Tracker</span>
        </Link>

        <nav className="ml-auto flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                pathname === item.href
                  ? "border-b-2 border-black dark:border-white"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-r-1 border-accent h-8" />
          <div className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              SS
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}