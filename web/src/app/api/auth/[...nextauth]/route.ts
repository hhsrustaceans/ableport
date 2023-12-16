import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from 'pg'

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

const handler = NextAuth({
    adapter: PostgresAdapter(pool),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    theme: {
        colorScheme: "dark",
        logo: "/icon.png",
    },
})

export { handler as GET, handler as POST }