"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Apr", alAvg: 4.2, nlAvg: 4.5 },
  { month: "May", alAvg: 4.4, nlAvg: 4.3 },
  { month: "Jun", alAvg: 4.6, nlAvg: 4.7 },
  { month: "Jul", alAvg: 4.8, nlAvg: 4.6 },
  { month: "Aug", alAvg: 4.5, nlAvg: 4.8 },
  { month: "Sep", alAvg: 4.3, nlAvg: 4.4 },
]

export function TeamStats() {
  return (
    <ChartContainer
      config={{
        alAvg: {
          label: "AL Average Runs",
          color: "var(--chart-1)",
        },
        nlAvg: {
          label: "NL Average Runs",
          color: "var(--chart-2)",
        },
      }}
      className="h-[350px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <YAxis className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line type="monotone" dataKey="alAvg" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="nlAvg" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
