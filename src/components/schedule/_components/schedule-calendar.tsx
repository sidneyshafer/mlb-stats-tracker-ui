import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const weekSchedule = [
  {
    date: "Mon, Oct 21",
    games: [
      { away: "NYY", home: "BOS", time: "7:05 PM" },
      { away: "LAD", home: "SF", time: "10:10 PM" },
    ],
  },
  {
    date: "Tue, Oct 22",
    games: [
      { away: "ATL", home: "NYM", time: "7:10 PM" },
      { away: "HOU", home: "TEX", time: "8:05 PM" },
      { away: "CHC", home: "STL", time: "7:45 PM" },
    ],
  },
  {
    date: "Wed, Oct 23",
    games: [
      { away: "BOS", home: "TB", time: "6:40 PM" },
      { away: "PHI", home: "WSH", time: "7:05 PM" },
    ],
  },
  {
    date: "Thu, Oct 24",
    games: [{ away: "SEA", home: "LAA", time: "9:38 PM" }],
  },
  {
    date: "Fri, Oct 25",
    games: [
      { away: "NYY", home: "TB", time: "7:10 PM" },
      { away: "LAD", home: "SD", time: "9:40 PM" },
      { away: "CLE", home: "DET", time: "7:10 PM" },
    ],
  },
]

const monthSchedule = [
  { date: "Week of Oct 21", gameCount: 45 },
  { date: "Week of Oct 28", gameCount: 42 },
  { date: "Week of Nov 4", gameCount: 38 },
  { date: "Week of Nov 11", gameCount: 35 },
]

export function ScheduleCalendar({ view }: { view: "week" | "month" }) {
  if (view === "month") {
    return (
      <div className="space-y-3">
        {monthSchedule.map((week, index) => (
          <Card key={index} className="p-4 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{week.date}</p>
                <p className="text-sm text-muted-foreground mt-1">{week.gameCount} games scheduled</p>
              </div>
              <Badge variant="outline">{week.gameCount}</Badge>
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {weekSchedule.map((day, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-semibold text-sm text-muted-foreground">{day.date}</h3>
          <div className="space-y-2">
            {day.games.map((game, gameIndex) => (
              <Card
                key={gameIndex}
                className="p-3 hover:border-primary/50 transition-colors cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="font-medium text-sm">
                    {game.away} @ {game.home}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {game.time}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
