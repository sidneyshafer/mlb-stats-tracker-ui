import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const battingData = [
  { month: "Apr", homeRuns: 42, rbi: 156, avg: 0.265 },
  { month: "May", homeRuns: 58, rbi: 189, avg: 0.278 },
  { month: "Jun", homeRuns: 64, rbi: 205, avg: 0.285 },
  { month: "Jul", homeRuns: 71, rbi: 218, avg: 0.292 },
  { month: "Aug", homeRuns: 68, rbi: 201, avg: 0.288 },
  { month: "Sep", homeRuns: 55, rbi: 178, avg: 0.281 },
]

const pitchingData = [
  { month: "Apr", strikeouts: 245, era: 3.85, wins: 42 },
  { month: "May", strikeouts: 268, era: 3.72, wins: 48 },
  { month: "Jun", strikeouts: 285, era: 3.65, wins: 52 },
  { month: "Jul", strikeouts: 292, era: 3.58, wins: 55 },
  { month: "Aug", strikeouts: 278, era: 3.62, wins: 51 },
  { month: "Sep", strikeouts: 261, era: 3.68, wins: 46 },
]

export function PlayerPerformanceChart({ type }: { type: "batting" | "pitching" }) {
  if (type === "pitching") {
    return (
      <ChartContainer
        config={{
          strikeouts: {
            label: "Strikeouts",
            color: "var(--chart-1)",
          },
          wins: {
            label: "Wins",
            color: "var(--chart-2)",
          },
        }}
        className="h-[350px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={pitchingData}>
            <defs>
              <linearGradient id="strikeouts" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="wins" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
            <YAxis className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="strikeouts"
              stroke="var(--color-strikeouts)"
              fill="url(#strikeouts)"
              strokeWidth={2}
            />
            <Area type="monotone" dataKey="wins" stroke="var(--color-wins)" fill="url(#wins)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }

  return (
    <ChartContainer
      config={{
        homeRuns: {
          label: "Home Runs",
          color: "var(--chart-1)",
        },
        rbi: {
          label: "RBI",
          color: "var(--chart-2)",
        },
      }}
      className="h-[350px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={battingData}>
          <defs>
            <linearGradient id="homeRuns" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="rbi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <YAxis className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="homeRuns"
            stroke="var(--color-homeRuns)"
            fill="url(#homeRuns)"
            strokeWidth={2}
          />
          <Area type="monotone" dataKey="rbi" stroke="var(--color-rbi)" fill="url(#rbi)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
