import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScheduleCalendar } from "./_components/schedule-calendar"
import { GamesList } from "./_components/games-list"
import { GamesChart } from "./_components/games-chart"

export function Schedule() {
  return (
    <div className="py-6 px-6 space-y-2">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">Schedule</h1>
        <p className="text-muted-foreground mt-2">{"View upcoming games and season schedule"}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-transparent shadow-none gap-4 border-none">
          <CardHeader className="m-0 p-0">
            <CardTitle>{"Today's Games"}</CardTitle>
            <CardDescription>Live and upcoming matchups</CardDescription>
          </CardHeader>
          <CardContent className="h-92 overflow-y-scroll border-1 border-border rounded-sm py-4 px-4">
            <GamesList />
          </CardContent>
        </Card>

        <Card className="bg-transparent rounded-sm shadow-none border-none">
          <CardHeader>
            <CardTitle>Games This Week</CardTitle>
            <CardDescription>Daily game count</CardDescription>
          </CardHeader>
          <CardContent>
            <GamesChart />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-transparent rounded-sm shadow-none border-none">
        <CardHeader>
          <CardTitle>Season Schedule</CardTitle>
          <CardDescription>Browse games by date</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="week" className="w-full">
            <TabsList>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
            </TabsList>
            <TabsContent value="week" className="mt-6">
              <ScheduleCalendar view="week" />
            </TabsContent>
            <TabsContent value="month" className="mt-6">
              <ScheduleCalendar view="month" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
