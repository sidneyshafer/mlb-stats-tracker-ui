import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { division: "AL East", wins: 95, losses: 67 },
  { division: "AL Central", wins: 88, losses: 74 },
  { division: "AL West", wins: 92, losses: 70 },
  { division: "NL East", wins: 94, losses: 68 },
  { division: "NL Central", wins: 85, losses: 77 },
  { division: "NL West", wins: 98, losses: 64 },
]

export function StandingsChart() {
  return (
    <ChartContainer
      config={{
        wins: {
          label: "Wins",
          color: "var(--chart-1)",
        },
        losses: {
          label: "Losses",
          color: "var(--chart-2)",
        },
      }}
      className="h-[350px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="division" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="wins" fill="var(--color-wins)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="losses" fill="var(--color-losses)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}