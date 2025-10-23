import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { GameDetailModal } from "@/components/modals/game-detail-modal"
import { games } from "@/data/data"

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