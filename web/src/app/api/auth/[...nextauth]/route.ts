import NextAuth from "next-auth"
import { TypeORMAdapter } from "@auth/typeorm-adapter"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import * as entities from "@/lib/types/models/index";

const handler = NextAuth({
    adapter: TypeORMAdapter({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        entities: entities,
        synchronize: true, // DO NOT USE IN PRODUCTION
    }),
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
        colorScheme: "auto",
        logo: "/icon.png",
    },
})

export { handler as GET, handler as POST }