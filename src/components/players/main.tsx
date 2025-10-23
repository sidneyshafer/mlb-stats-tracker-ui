import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayerLeaderboard } from "./_components/player-leaderboard"
import { PlayerPerformanceChart } from "./_components/player-performance-chart"

export function Players() {
  return (
    <div className="py-6 px-6 space-y-4">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">Players</h1>
        <p className="text-muted-foreground mt-2">{"Track individual player statistics and performance metrics"}</p>
      </div>

      <Card className="rounded-sm shadow-none">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>Season statistics comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="batting" className="w-full">
            <TabsList className="rounded-sm dark:bg-accent">
              <TabsTrigger value="batting" className="rounded-sm">Batting Stats</TabsTrigger>
              <TabsTrigger value="pitching" className="rounded-sm">Pitching Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="batting" className="mt-6">
              <PlayerPerformanceChart type="batting" />
            </TabsContent>
            <TabsContent value="pitching" className="mt-6">
              <PlayerPerformanceChart type="pitching" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="mb-0 pb-0">
            <CardTitle>Batting Leaders</CardTitle>
            <CardDescription>Top hitters by batting average</CardDescription>
          </CardHeader>
          <CardContent>
            <PlayerLeaderboard category="batting" />
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="mb-0 pb-0">
            <CardTitle>Pitching Leaders</CardTitle>
            <CardDescription>Top pitchers by ERA</CardDescription>
          </CardHeader>
          <CardContent>
            <PlayerLeaderboard category="pitching" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}