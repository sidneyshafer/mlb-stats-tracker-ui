import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamGrid } from "./_components/team-grid"
import { TeamStats } from "./_components/team-stats"

export function Teams() {
  return (
    <div className="py-6 px-6 space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">Teams</h1>
        <p className="text-muted-foreground mt-2">{"Explore all MLB teams and their performance statistics"}</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="rounded-sm dark:bg-accent">
          <TabsTrigger value="all" className="rounded-sm">All Teams</TabsTrigger>
          <TabsTrigger value="al" className="rounded-sm">American League</TabsTrigger>
          <TabsTrigger value="nl" className="rounded-sm">National League</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <TeamGrid league="all" />
        </TabsContent>
        <TabsContent value="al" className="mt-6">
          <TeamGrid league="al" />
        </TabsContent>
        <TabsContent value="nl" className="mt-6">
          <TeamGrid league="nl" />
        </TabsContent>
      </Tabs>

      <Card className="lg:col-span-4 bg-transparent border-none shadow-none">
        <CardHeader>
          <CardTitle>League Statistics</CardTitle>
          <CardDescription>Comparative team performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <TeamStats />
        </CardContent>
      </Card>
    </div>
  )
}
