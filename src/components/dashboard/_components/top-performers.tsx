import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { performers } from "@/data/data"

export function TopPerformers() {
  return (
    <div className="space-y-4">
      {performers.map((performer, index) => (
        <div key={index} className="flex items-center gap-4 border-t-2 pt-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={performer.image || "/placeholder.svg"} alt={performer.name} />
            <AvatarFallback>
              {performer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{performer.name}</p>
            <p className="text-xs text-muted-foreground">{performer.team}</p>
          </div>
          <div className="font-mono text-sm font-bold text-primary">{performer.stat}</div>
        </div>
      ))}
    </div>
  )
}
