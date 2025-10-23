"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, Award, Target } from "lucide-react"

interface PlayerDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  player: {
    rank: number
    name: string
    team: string
    stat: string
    games: number
  } | null
  category: "batting" | "pitching"
}

export function PlayerDetailModal({ open, onOpenChange, player, category }: PlayerDetailModalProps) {
  if (!player) return null

  const isBatter = category === "batting"
  const statLabel = isBatter ? "AVG" : "ERA"

  // Mock additional stats
  const additionalStats = isBatter
    ? {
        homeRuns: 42,
        rbi: 118,
        stolenBases: 28,
        ops: ".985",
        hits: 187,
        doubles: 38,
      }
    : {
        wins: 15,
        losses: 6,
        strikeouts: 245,
        whip: "1.08",
        innings: "198.2",
        saves: 0,
      }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/baseball-player.png" alt={player.name} />
              <AvatarFallback className="text-lg">
                {player.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl">{player.name}</DialogTitle>
              <DialogDescription className="flex items-center gap-2 mt-1">
                <span>{player.team}</span>
                <span>•</span>
                <span>{isBatter ? "Batter" : "Pitcher"}</span>
                <span>•</span>
                <Badge variant="outline" className="font-mono">
                  #{player.rank} in {statLabel}
                </Badge>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>{statLabel}</span>
              </div>
              <p className="text-4xl font-bold font-mono">{player.stat}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Games Played</p>
              <p className="text-4xl font-bold">{player.games}</p>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold">Season Statistics</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {isBatter ? (
                <>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Home Runs</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.homeRuns}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">RBI</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.rbi}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Stolen Bases</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.stolenBases}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">OPS</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.ops}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Hits</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.hits}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Doubles</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.doubles}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Wins</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.wins}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Losses</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.losses}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Strikeouts</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.strikeouts}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">WHIP</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.whip}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Innings</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.innings}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Saves</p>
                    <p className="text-2xl font-bold font-mono">{additionalStats.saves}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium">Season Performance</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {isBatter
                ? `On pace for ${Math.round((additionalStats.homeRuns ?? 0 / player.games) * 162)} home runs and ${Math.round((additionalStats.rbi ?? 0 / player.games) * 162)} RBI over a full season.`
                : `Averaging ${(additionalStats.strikeouts ?? 0 / Number.parseFloat((additionalStats.innings || "").replace(/\.\d+$/, ""))).toFixed(2)} strikeouts per inning with a ${additionalStats.wins}-${additionalStats.losses} record.`}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
