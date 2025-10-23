import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { dailySchedule } from "@/data/data"

export function GamesChart() {
  return (
    <ChartContainer
      config={{
        games: {
          label: "Games",
          color: "var(--chart-1)",
        },
      }}
      className="h-[380px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dailySchedule}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="date" className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <YAxis className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="games" fill="var(--color-games)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
