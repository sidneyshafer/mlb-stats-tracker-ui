import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { GameDetailModal } from "@/components/modals/game-detail-modal"

const games = [
  {
    id: 1,
    home: "New York Yankees",
    homeAbbr: "NYY",
    away: "Boston Red Sox",
    awayAbbr: "BOS",
    time: "7:05 PM ET",
    venue: "Yankee Stadium",
    status: "upcoming",
  },
  {
    id: 2,
    home: "Los Angeles Dodgers",
    homeAbbr: "LAD",
    away: "San Francisco Giants",
    awayAbbr: "SF",
    time: "10:10 PM ET",
    venue: "Dodger Stadium",
    status: "upcoming",
  },
  {
    id: 3,
    home: "Houston Astros",
    homeAbbr: "HOU",
    homeScore: 4,
    away: "Texas Rangers",
    awayAbbr: "TEX",
    awayScore: 4,
    time: "Live - 7th",
    venue: "Minute Maid Park",
    status: "live",
  },
  {
    id: 4,
    home: "Atlanta Braves",
    homeAbbr: "ATL",
    homeScore: 6,
    away: "New York Mets",
    awayAbbr: "NYM",
    awayScore: 1,
    time: "Final",
    venue: "Truist Park",
    status: "final",
  },
  {
    id: 5,
    home: "Chicago Cubs",
    homeAbbr: "CHC",
    away: "St. Louis Cardinals",
    awayAbbr: "STL",
    time: "8:05 PM ET",
    venue: "Wrigley Field",
    status: "upcoming",
  },
]

export function GamesList() {
  const [selectedGame, setSelectedGame] = useState<(typeof games)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGameClick = (game: (typeof games)[0]) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="space-y-4">
        {games.map((game) => (
          <div
            key={game.id}
            className={cn(
              "cursor-pointer flex flex-col gap-3 p-4", 
              "rounded-lg border border-border bg-accent",
              "dark:bg-accent/50 hover:border-primary/50 transition-colors"
            )}
            onClick={() => handleGameClick(game)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 flex-1">
                <div className="text-right min-w-[120px]">
                  <p className="font-medium text-sm">{game.away}</p>
                  <p className="text-xs text-muted-foreground">{game.awayAbbr}</p>
                  {game.status !== "upcoming" && <p className="text-2xl font-bold font-mono mt-1">{game.awayScore}</p>}
                </div>
                <div className="text-muted-foreground font-bold text-sm">@</div>
                <div className="min-w-[120px]">
                  <p className="font-medium text-sm">{game.home}</p>
                  <p className="text-xs text-muted-foreground">{game.homeAbbr}</p>
                  {game.status !== "upcoming" && <p className="text-2xl font-bold font-mono mt-1">{game.homeScore}</p>}
                </div>
              </div>
              <Badge 
                  variant={game.status === "live" ? "default" : game.status === "final" ? "secondary" : "outline"}
                  className={cn(
                      "text-sm",
                      game.status === "live" ? "text-white" : game.status === "final" ? "text-white" : "text-black dark:text-white bg-white dark:bg-muted/50"
                  )}
                  >
                {game.time}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{game.venue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GameDetailModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        game={selectedGame}
      />
    </>
  )
}