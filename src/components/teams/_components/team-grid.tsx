import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teams = [
  { name: "New York Yankees", abbr: "NYY", league: "AL", division: "East", wins: 95, losses: 67, logo: "⚾" },
  { name: "Los Angeles Dodgers", abbr: "LAD", league: "NL", division: "West", wins: 98, losses: 64, logo: "⚾" },
  { name: "Atlanta Braves", abbr: "ATL", league: "NL", division: "East", wins: 94, losses: 68, logo: "⚾" },
  { name: "Houston Astros", abbr: "HOU", league: "AL", division: "West", wins: 92, losses: 70, logo: "⚾" },
  { name: "Tampa Bay Rays", abbr: "TB", league: "AL", division: "East", wins: 91, losses: 71, logo: "⚾" },
  { name: "San Francisco Giants", abbr: "SF", league: "NL", division: "West", wins: 89, losses: 73, logo: "⚾" },
  { name: "Boston Red Sox", abbr: "BOS", league: "AL", division: "East", wins: 88, losses: 74, logo: "⚾" },
  { name: "Chicago Cubs", abbr: "CHC", league: "NL", division: "Central", wins: 85, losses: 77, logo: "⚾" },
  { name: "Cleveland Guardians", abbr: "CLE", league: "AL", division: "Central", wins: 88, losses: 74, logo: "⚾" },
  { name: "Philadelphia Phillies", abbr: "PHI", league: "NL", division: "East", wins: 87, losses: 75, logo: "⚾" },
  { name: "Seattle Mariners", abbr: "SEA", league: "AL", division: "West", wins: 86, losses: 76, logo: "⚾" },
  { name: "St. Louis Cardinals", abbr: "STL", league: "NL", division: "Central", wins: 84, losses: 78, logo: "⚾" },
]

export function TeamGrid({ league }: { league: "all" | "al" | "nl" }) {
  const filteredTeams = teams.filter((team) => {
    if (league === "all") return true
    return team.league === league.toUpperCase()
  })

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTeams.map((team) => {
        const winPct = (team.wins / (team.wins + team.losses)) * 100
        return (
          <Card key={team.abbr} className="hover:border-primary transition-colors cursor-pointer rounded-sm">
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
  )
}
