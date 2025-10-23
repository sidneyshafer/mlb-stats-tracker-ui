import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatsOverview } from "./_components/stats-overview"
import { RecentGames } from "./_components/recent-games"
import { StandingsChart } from "./_components/standings-chart"
import { TopPerformers } from "./_components/top-performers"

export function Dashboard() {
  return (
    <div className="py-6 px-6 space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">Dashboard</h1>
        <p className="text-muted-foreground mt-2">{"Your complete overview of MLB statistics and performance"}</p>
      </div>

      <StatsOverview />

      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4 bg-transparent border-none shadow-none">
          <CardHeader className="mb-0 pb-0">
            <CardTitle>Division Standings</CardTitle>
            <CardDescription>Current season performance by division</CardDescription>
          </CardHeader>
          <CardContent>
            <StandingsChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 shadow-none border-none bg-accent dark:bg-accent/50">
          <CardHeader className="mb-0 pb-0">
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Leading players this week</CardDescription>
          </CardHeader>
          <CardContent>
            <TopPerformers />
          </CardContent>
        </Card>
      </div>

      <Card className="lg:col-span-4 bg-transparent shadow-none gap-4">
        <CardHeader className="mb-0 pb-0">
          <CardTitle>Recent Games</CardTitle>
          <CardDescription>Latest game results and upcoming matches</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="rounded-sm dark:bg-accent">
              <TabsTrigger 
                value="recent" 
                className="rounded-sm"
                >
                  Recent
              </TabsTrigger>
              <TabsTrigger 
                value="upcoming" 
                className="rounded-sm"
                >
                  Upcoming
                </TabsTrigger>
            </TabsList>
            <TabsContent value="recent" className="mt-6">
              <RecentGames type="recent" />
            </TabsContent>
            <TabsContent value="upcoming" className="mt-6">
              <RecentGames type="upcoming" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
