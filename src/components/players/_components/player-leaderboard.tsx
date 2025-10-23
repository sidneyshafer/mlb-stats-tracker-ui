import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PlayerDetailModal } from "@/components/modals/player-detail-modal"
import { battingLeaders, pitchingLeaders } from "@/data/data"

export function PlayerLeaderboard({ category }: { category: "batting" | "pitching" }) {
  const [selectedPlayer, setSelectedPlayer] = useState<(typeof battingLeaders)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const leaders = category === "batting" ? battingLeaders : pitchingLeaders
  const statLabel = category === "batting" ? "AVG" : "ERA"

  const handlePlayerClick = (player: (typeof battingLeaders)[0]) => {
    setSelectedPlayer(player)
    setIsModalOpen(true)
  }

  return (
    <>
    <div className="space-y-3">
      {leaders.map((player) => (
        <div
          key={player.rank}
          className="flex items-center gap-4 p-3 rounded-md cursor-pointer odd:bg-muted hover:bg-primary/10 transition-colors"
          onClick={() => handlePlayerClick(player)}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary font-bold text-sm">
            {player.rank}
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/baseball-player.png" alt={player.name} />
            <AvatarFallback>
              {player.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-none truncate">{player.name}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {player.team} • {player.games}G
            </p>
          </div>
          <Badge variant="outline" className="font-mono font-bold">
            {player.stat} {statLabel}
          </Badge>
        </div>
      ))}
    </div>
    <PlayerDetailModal 
      open={isModalOpen} 
      onOpenChange={setIsModalOpen} 
      player={selectedPlayer} 
      category={category} 
    />
  </>
  )
}
