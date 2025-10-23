"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import type { game } from "@/data/types"

interface GameDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  game: game | null
}

export function GameDetailModal({ open, onOpenChange, game }: GameDetailModalProps) {
  if (!game) return null

  // Mock additional game data
  const gameDetails = {
    date: "October 23, 2025",
    attendance: game.status === "final" ? "42,358" : "TBD",
    weather: "72°F, Partly Cloudy",
    homePitcher: "Gerrit Cole",
    awayPitcher: "Chris Sale",
    homeRecord: "95-67",
    awayRecord: "88-74",
    inning: game.status === "live" ? "7th" : null,
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Game Details</DialogTitle>
            <Badge 
                className={cn(
                    "mr-4",
                    game.status === "live" ? "text-white" : game.status === "final" ? "text-white" : "text-black dark:text-white bg-white dark:bg-white/5"
                )}
                variant={game.status === "live" ? "default" : game.status === "final" ? "secondary" : "outline"}
            >
              {game.time}
            </Badge>
          </div>
          <DialogDescription className="flex items-center gap-2">
            <Calendar className="h-3 w-3" />
            <span>{gameDetails.date}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex flex-col items-center rounded-sm border border-border bg-card p-5">
            {/* Teams row */}
            <div className="flex w-full items-center justify-between">
                {/* Away team */}
                <div className="flex flex-1 flex-col items-center space-y-3 text-center">
                    {game.status !== "upcoming" && (
                    <p className="text-4xl font-bold font-mono">{game.awayScore}</p>
                    )}
                    <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground tracking-wide">
                        {game.awayAbbr}
                    </p>
                    <p className="text-lg font-semibold leading-tight">{game.away}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                        {gameDetails.awayRecord}
                    </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-px h-16 bg-border mx-6 hidden sm:block" />

                {/* Home team */}
                <div className="flex flex-1 flex-col items-center space-y-3 text-center">
                    {game.status !== "upcoming" && (
                    <p className="text-4xl font-bold font-mono">{game.homeScore}</p>
                    )}
                    <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground tracking-wide">
                        {game.homeAbbr}
                    </p>
                    <p className="text-lg font-semibold leading-tight">{game.home}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                        {gameDetails.homeRecord}
                    </p>
                    </div>
                </div>
            </div>

            {/* Live indicator */}
            {game.status === "live" && gameDetails.inning && (
                <div className="mt-4">
                <Badge variant="default" className="text-sm flex items-center gap-1 text-white">
                    <Clock className="h-3 w-3" />
                    {gameDetails.inning} Inning
                </Badge>
                </div>
            )}
        </div>

          {/* Game Information */}
          <div>
            <h3 className="font-semibold mb-4">Game Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Venue</p>
                  <p className="text-sm text-muted-foreground">{game.venue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Attendance</p>
                  <p className="text-sm text-muted-foreground">{gameDetails.attendance}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Weather</p>
                  <p className="text-sm text-muted-foreground">{gameDetails.weather}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pitching Matchup */}
          <div>
            <h3 className="font-semibold mb-4">Pitching Matchup</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs text-muted-foreground mb-1">{game.awayAbbr} Pitcher</p>
                <p className="font-semibold">{gameDetails.awayPitcher}</p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs text-muted-foreground mb-1">{game.homeAbbr} Pitcher</p>
                <p className="font-semibold">{gameDetails.homePitcher}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
