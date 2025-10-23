import { Calendar, TrendingUp, Users } from "lucide-react";
import type { 
    game, 
    division,
    kpi,
    player,
    monthlyStat,
    team,
    leagueStat,
    schedule,
    monthlySchedule
} from "./types";

export const recentGames: game[] = [
  { home: "Yankees", homeScore: 5, away: "Red Sox", awayScore: 3, status: "Final" },
  { home: "Dodgers", homeScore: 8, away: "Giants", awayScore: 2, status: "Final" },
  { home: "Astros", homeScore: 4, away: "Rangers", awayScore: 4, status: "Live - 7th" },
  { home: "Braves", homeScore: 6, away: "Mets", awayScore: 1, status: "Final" },
]

export const upcomingGames: game[] = [
  { home: "Cubs", away: "Cardinals", time: "7:05 PM ET" },
  { home: "Mariners", away: "Angels", time: "9:40 PM ET" },
  { home: "Phillies", away: "Nationals", time: "7:15 PM ET" },
  { home: "Padres", away: "Diamondbacks", time: "8:40 PM ET" },
]

export const dailySchedule: schedule[] = [
  { date: "Mon", games: 12 },
  { date: "Tue", games: 15 },
  { date: "Wed", games: 14 },
  { date: "Thu", games: 8 },
  { date: "Fri", games: 15 },
  { date: "Sat", games: 15 },
  { date: "Sun", games: 15 },
]

export const games: game[] = [
  {
    id: 1,
    home: "New York Yankees",
    homeAbbr: "NYY",
    away: "Boston Red Sox",
    awayAbbr: "BOS",
    time: "7:05 PM ET",
    venue: "Yankee Stadium",
    status: "upcoming",
  },
  {
    id: 2,
    home: "Los Angeles Dodgers",
    homeAbbr: "LAD",
    away: "San Francisco Giants",
    awayAbbr: "SF",
    time: "10:10 PM ET",
    venue: "Dodger Stadium",
    status: "upcoming",
  },
  {
    id: 3,
    home: "Houston Astros",
    homeAbbr: "HOU",
    homeScore: 4,
    away: "Texas Rangers",
    awayAbbr: "TEX",
    awayScore: 4,
    time: "Live - 7th",
    venue: "Minute Maid Park",
    status: "live",
  },
  {
    id: 4,
    home: "Atlanta Braves",
    homeAbbr: "ATL",
    homeScore: 6,
    away: "New York Mets",
    awayAbbr: "NYM",
    awayScore: 1,
    time: "Final",
    venue: "Truist Park",
    status: "final",
  },
  {
    id: 5,
    home: "Chicago Cubs",
    homeAbbr: "CHC",
    away: "St. Louis Cardinals",
    awayAbbr: "STL",
    time: "8:05 PM ET",
    venue: "Wrigley Field",
    status: "upcoming",
  },
]

export const divisionStandings: division[] = [
  { division: "AL East", wins: 95, losses: 67 },
  { division: "AL Central", wins: 88, losses: 74 },
  { division: "AL West", wins: 92, losses: 70 },
  { division: "NL East", wins: 94, losses: 68 },
  { division: "NL Central", wins: 85, losses: 77 },
  { division: "NL West", wins: 98, losses: 64 },
]

export const stats: kpi[] = [
  {
    title: "Total Games",
    value: "2,430",
    change: "+12.5%",
    trend: "up",
    icon: Calendar,
  },
  {
    title: "Active Players",
    value: "1,200",
    change: "+4.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Avg Attendance",
    value: "28,456",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
  },
  {
    title: "Games Today",
    value: "15",
    change: "Schedule",
    trend: "neutral",
    icon: Calendar,
  },
]

export const performers: player[] = [
  {
    name: "Shohei Ohtani",
    team: "LAD",
    stat: ".342 AVG",
    image: "",
  },
  {
    name: "Aaron Judge",
    team: "NYY",
    stat: "52 HR",
    image: "",
  },
  {
    name: "Ronald Acuña Jr.",
    team: "ATL",
    stat: "45 SB",
    image: "",
  },
  {
    name: "Gerrit Cole",
    team: "NYY",
    stat: "2.85 ERA",
    image: "",
  },
  {
    name: "Mookie Betts",
    team: "LAD",
    stat: "115 RBI",
    image: "",
  },
]

export const battingLeaders: player[] = [
  { rank: 1, name: "Shohei Ohtani", team: "LAD", stat: ".342", games: 145 },
  { rank: 2, name: "Freddie Freeman", team: "LAD", stat: ".338", games: 152 },
  { rank: 3, name: "Luis Arraez", team: "MIA", stat: ".335", games: 148 },
  { rank: 4, name: "Ronald Acuña Jr.", team: "ATL", stat: ".328", games: 142 },
  { rank: 5, name: "Mookie Betts", team: "LAD", stat: ".325", games: 150 },
  { rank: 6, name: "Corey Seager", team: "TEX", stat: ".322", games: 146 },
  { rank: 7, name: "Yandy Díaz", team: "TB", stat: ".320", games: 144 },
  { rank: 8, name: "Marcus Semien", team: "TEX", stat: ".318", games: 162 },
]

export const pitchingLeaders: player[] = [
  { rank: 1, name: "Gerrit Cole", team: "NYY", stat: "2.63", games: 32 },
  { rank: 2, name: "Spencer Strider", team: "ATL", stat: "2.85", games: 31 },
  { rank: 3, name: "Blake Snell", team: "SD", stat: "2.92", games: 30 },
  { rank: 4, name: "Zack Wheeler", team: "PHI", stat: "3.05", games: 32 },
  { rank: 5, name: "Kevin Gausman", team: "TOR", stat: "3.12", games: 31 },
  { rank: 6, name: "Pablo López", team: "MIN", stat: "3.18", games: 32 },
  { rank: 7, name: "Sonny Gray", team: "MIN", stat: "3.24", games: 30 },
  { rank: 8, name: "Logan Webb", team: "SF", stat: "3.28", games: 33 },
]

export const battingData: monthlyStat[] = [
  { month: "Apr", homeRuns: 42, rbi: 156, avg: 0.265 },
  { month: "May", homeRuns: 58, rbi: 189, avg: 0.278 },
  { month: "Jun", homeRuns: 64, rbi: 205, avg: 0.285 },
  { month: "Jul", homeRuns: 71, rbi: 218, avg: 0.292 },
  { month: "Aug", homeRuns: 68, rbi: 201, avg: 0.288 },
  { month: "Sep", homeRuns: 55, rbi: 178, avg: 0.281 },
]

export const pitchingData: monthlyStat[] = [
  { month: "Apr", strikeouts: 245, era: 3.85, wins: 42 },
  { month: "May", strikeouts: 268, era: 3.72, wins: 48 },
  { month: "Jun", strikeouts: 285, era: 3.65, wins: 52 },
  { month: "Jul", strikeouts: 292, era: 3.58, wins: 55 },
  { month: "Aug", strikeouts: 278, era: 3.62, wins: 51 },
  { month: "Sep", strikeouts: 261, era: 3.68, wins: 46 },
]

export const teams: team[] = [
  { name: "New York Yankees", abbr: "NYY", league: "AL", division: "East", wins: 95, losses: 67, logo: "⚾" },
  { name: "Los Angeles Dodgers", abbr: "LAD", league: "NL", division: "West", wins: 98, losses: 64, logo: "⚾" },
  { name: "Atlanta Braves", abbr: "ATL", league: "NL", division: "East", wins: 94, losses: 68, logo: "⚾" },
  { name: "Houston Astros", abbr: "HOU", league: "AL", division: "West", wins: 92, losses: 70, logo: "⚾" },
  { name: "Tampa Bay Rays", abbr: "TB", league: "AL", division: "East", wins: 91, losses: 71, logo: "⚾" },
  { name: "San Francisco Giants", abbr: "SF", league: "NL", division: "West", wins: 89, losses: 73, logo: "⚾" },
  { name: "Boston Red Sox", abbr: "BOS", league: "AL", division: "East", wins: 88, losses: 74, logo: "⚾" },
  { name: "Chicago Cubs", abbr: "CHC", league: "NL", division: "Central", wins: 85, losses: 77, logo: "⚾" },
  { name: "Cleveland Guardians", abbr: "CLE", league: "AL", division: "Central", wins: 88, losses: 74, logo: "⚾" },
  { name: "Philadelphia Phillies", abbr: "PHI", league: "NL", division: "East", wins: 87, losses: 75, logo: "⚾" },
  { name: "Seattle Mariners", abbr: "SEA", league: "AL", division: "West", wins: 86, losses: 76, logo: "⚾" },
  { name: "St. Louis Cardinals", abbr: "STL", league: "NL", division: "Central", wins: 84, losses: 78, logo: "⚾" },
]

export const leagueStats: leagueStat[] = [
  { month: "Apr", alAvg: 4.2, nlAvg: 4.5 },
  { month: "May", alAvg: 4.4, nlAvg: 4.3 },
  { month: "Jun", alAvg: 4.6, nlAvg: 4.7 },
  { month: "Jul", alAvg: 4.8, nlAvg: 4.6 },
  { month: "Aug", alAvg: 4.5, nlAvg: 4.8 },
  { month: "Sep", alAvg: 4.3, nlAvg: 4.4 },
]

export const weekSchedule: monthlySchedule[] = [
  {
    date: "Mon, Oct 21",
    games: [
      { away: "NYY", home: "BOS", time: "7:05 PM" },
      { away: "LAD", home: "SF", time: "10:10 PM" },
    ],
  },
  {
    date: "Tue, Oct 22",
    games: [
      { away: "ATL", home: "NYM", time: "7:10 PM" },
      { away: "HOU", home: "TEX", time: "8:05 PM" },
      { away: "CHC", home: "STL", time: "7:45 PM" },
    ],
  },
  {
    date: "Wed, Oct 23",
    games: [
      { away: "BOS", home: "TB", time: "6:40 PM" },
      { away: "PHI", home: "WSH", time: "7:05 PM" },
    ],
  },
  {
    date: "Thu, Oct 24",
    games: [{ away: "SEA", home: "LAA", time: "9:38 PM" }],
  },
  {
    date: "Fri, Oct 25",
    games: [
      { away: "NYY", home: "TB", time: "7:10 PM" },
      { away: "LAD", home: "SD", time: "9:40 PM" },
      { away: "CLE", home: "DET", time: "7:10 PM" },
    ],
  },
]

export const monthSchedule: schedule[] = [
  { date: "Week of Oct 21", games: 45 },
  { date: "Week of Oct 28", games: 42 },
  { date: "Week of Nov 4", games: 38 },
  { date: "Week of Nov 11", games: 35 },
]