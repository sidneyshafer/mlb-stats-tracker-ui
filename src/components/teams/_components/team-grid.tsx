import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TeamDetailModal } from "@/components/modals/team-detail-modal"
import { teams } from "@/data/data"

export function TeamGrid({ league }: { league: "all" | "al" | "nl" }) {
  const [selectedTeam, setSelectedTeam] = useState<(typeof teams)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredTeams = teams.filter((team) => {
    if (league === "all") return true
    return team.league === league.toUpperCase()
  })

  const handleTeamClick = (team: (typeof teams)[0]) => {
    setSelectedTeam(team)
    setIsModalOpen(true)
  }
  return (
    <>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTeams.map((team) => {
        const winPct = (team.wins / (team.wins + team.losses)) * 100
        return (
          <Card 
            key={team.abbr} 
            className="hover:border-primary transition-colors cursor-pointer rounded-sm"
            onClick={() => handleTeamClick(team)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{team.logo}</div>
                  <div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {team.league} {team.division}
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold font-mono">
                    {team.wins}-{team.losses}
                  </p>
                  <p className="text-xs text-muted-foreground">Win-Loss Record</p>
                </div>
                <Badge 
                    variant={winPct >= 60 ? "default" : winPct >= 50 ? "secondary" : "outline"}
                    className="text-white text-sm"
                >
                  {winPct.toFixed(1)}% WIN
                </Badge>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>

    <TeamDetailModal 
      open={isModalOpen} 
      onOpenChange={setIsModalOpen} 
      team={selectedTeam} 
    />
    </>
  )
}
