"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, TrendingDown, Users, Trophy } from "lucide-react"

interface TeamDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  team: {
    name: string
    abbr: string
    league: string
    division: string
    wins: number
    losses: number
    logo: string
  } | null
}

export function TeamDetailModal({ open, onOpenChange, team }: TeamDetailModalProps) {
  if (!team) return null

  const winPct = (team.wins / (team.wins + team.losses)) * 100
  const gamesBack = 0 // Mock data
  const streak = "W3" // Mock data
  const runsScored = 745 // Mock data
  const runsAllowed = 678 // Mock data

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="text-5xl">{team.logo}</div>
            <div>
              <DialogTitle className="text-2xl">{team.name}</DialogTitle>
              <DialogDescription>
                {team.league} {team.division} Division
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Record</p>
              <p className="text-3xl font-bold font-mono">
                {team.wins}-{team.losses}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Win Percentage</p>
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold">{winPct.toFixed(1)}%</p>
                <Badge variant={winPct >= 60 ? "default" : winPct >= 50 ? "secondary" : "outline"} className="text-white">
                  {winPct >= 50 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                </Badge>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4" />
                <span>Current Streak</span>
              </div>
              <p className="text-2xl font-bold">{streak}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Games Back</p>
              <p className="text-2xl font-bold">{gamesBack === 0 ? "—" : gamesBack}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Division Rank</p>
              <p className="text-2xl font-bold">1st</p>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold">Team Statistics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">Runs Scored</p>
                <p className="text-2xl font-bold font-mono">{runsScored}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {(runsScored / (team.wins + team.losses)).toFixed(2)} per game
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">Runs Allowed</p>
                <p className="text-2xl font-bold font-mono">{runsAllowed}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {(runsAllowed / (team.wins + team.losses)).toFixed(2)} per game
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm font-medium">Run Differential</p>
            <p className="text-3xl font-bold mt-2">+{runsScored - runsAllowed}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
