import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Mon", games: 12 },
  { day: "Tue", games: 15 },
  { day: "Wed", games: 14 },
  { day: "Thu", games: 8 },
  { day: "Fri", games: 15 },
  { day: "Sat", games: 15 },
  { day: "Sun", games: 15 },
]

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
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="day" className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <YAxis className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="games" fill="var(--color-games)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
