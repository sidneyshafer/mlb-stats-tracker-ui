import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { recentGames, upcomingGames } from "@/data/data"

export function RecentGames({ type }: { type: "recent" | "upcoming" }) {
  if (type === "upcoming") {
    return (
      <div className="space-y-4">
        {upcomingGames.map((game, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-8">
              <div className="text-right min-w-[100px]">
                <p className="font-medium">{game.away}</p>
                <p className="text-xs text-muted-foreground">Away</p>
              </div>
              <div className="text-muted-foreground font-bold">@</div>
              <div className="min-w-[100px]">
                <p className="font-medium">{game.home}</p>
                <p className="text-xs text-muted-foreground">Home</p>
              </div>
            </div>
            <Badge variant="outline" className="font-bold text-sm bg-white dark:bg-muted/50">{game.time}</Badge>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {recentGames.map((game, index) => (
        <div 
          key={index} 
          className={cn(
            "flex items-center justify-between p-4 rounded-lg border",
            game?.status?.includes("Live") ? "bg-primary/10 border-primary" : "border-border bg-card"
          )}
          >
          <div className="flex items-center gap-8">
            <div className="text-right min-w-[100px]">
              <p className="font-medium">{game.away}</p>
              <p className="text-2xl font-bold font-mono">{game.awayScore}</p>
            </div>
            <div className="text-muted-foreground font-bold">vs</div>
            <div className="min-w-[100px]">
              <p className="font-medium">{game.home}</p>
              <p className="text-2xl font-bold font-mono">{game.homeScore}</p>
            </div>
          </div>
          <Badge 
            variant={game?.status?.includes("Live") ? "default" : "secondary"}
            className="text-sm text-white"
            >
                {game.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}