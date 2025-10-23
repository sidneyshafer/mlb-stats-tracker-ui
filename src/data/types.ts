import type { LucideIcon } from "lucide-react";

export type game = {
    id?: number,
    home: string
    homeAbbr?: string
    homeScore?: number
    away: string
    awayScore?: number
    awayAbbr?: string
    status?: string
    time?: string
    venue?: string
}

export type schedule = {
    date: string
    games: number
}

export type monthlySchedule = {
    date: string
    games: game[]
}

export type division = {
    division: string
    wins: number
    losses: number
}

export type team = {
    name: string
    abbr: string
    league: string
    division: string
    wins: number
    losses: number
    logo: string
}

export type kpi = {
    title: string
    value: string
    change: string
    trend: string
    icon: LucideIcon
}

export type leagueStat = {
    month: string
    alAvg: number
    nlAvg: number
}

export type player = {
    rank?: number
    name: string
    team: string
    stat: string
    image?: string
    games?: number
}

export type monthlyStat = {
    month: string
    homeRuns?: number
    rbi?: number
    avg?: number
    strikeouts?: number
    era?: number
    wins?: number
}