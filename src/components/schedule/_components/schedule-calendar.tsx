import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { weekSchedule, monthSchedule } from "@/data/data"

export function ScheduleCalendar({ view }: { view: "week" | "month" }) {
  if (view === "month") {
    return (
      <div className="space-y-3">
        {monthSchedule.map((week, index) => (
          <Card key={index} className="p-4 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{week.date}</p>
                <p className="text-sm text-muted-foreground mt-1">{week.games} games scheduled</p>
              </div>
              <Badge variant="outline">{week.games}</Badge>
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
                className="p-3 hover:border-primary/50 transition-colors flex items-center justify-between"
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
