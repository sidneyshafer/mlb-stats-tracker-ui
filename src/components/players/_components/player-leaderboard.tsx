import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PlayerDetailModal } from "@/components/modals/player-detail-modal"

const battingLeaders = [
  { rank: 1, name: "Shohei Ohtani", team: "LAD", stat: ".342", games: 145 },
  { rank: 2, name: "Freddie Freeman", team: "LAD", stat: ".338", games: 152 },
  { rank: 3, name: "Luis Arraez", team: "MIA", stat: ".335", games: 148 },
  { rank: 4, name: "Ronald Acuña Jr.", team: "ATL", stat: ".328", games: 142 },
  { rank: 5, name: "Mookie Betts", team: "LAD", stat: ".325", games: 150 },
  { rank: 6, name: "Corey Seager", team: "TEX", stat: ".322", games: 146 },
  { rank: 7, name: "Yandy Díaz", team: "TB", stat: ".320", games: 144 },
  { rank: 8, name: "Marcus Semien", team: "TEX", stat: ".318", games: 162 },
]

const pitchingLeaders = [
  { rank: 1, name: "Gerrit Cole", team: "NYY", stat: "2.63", games: 32 },
  { rank: 2, name: "Spencer Strider", team: "ATL", stat: "2.85", games: 31 },
  { rank: 3, name: "Blake Snell", team: "SD", stat: "2.92", games: 30 },
  { rank: 4, name: "Zack Wheeler", team: "PHI", stat: "3.05", games: 32 },
  { rank: 5, name: "Kevin Gausman", team: "TOR", stat: "3.12", games: 31 },
  { rank: 6, name: "Pablo López", team: "MIN", stat: "3.18", games: 32 },
  { rank: 7, name: "Sonny Gray", team: "MIN", stat: "3.24", games: 30 },
  { rank: 8, name: "Logan Webb", team: "SF", stat: "3.28", games: 33 },
]

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
