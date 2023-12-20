import NextAuth from "next-auth"
import { TypeORMAdapter } from "@auth/typeorm-adapter"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import {dataSourceOptions} from "./ORMserver"
import * as entities from "@/lib/types/models/index";

const handler = NextAuth({
    adapter: TypeORMAdapter(dataSourceOptions),
    //adapter: TypeORMAdapter(dataSourceOptions),
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
    // callbacks: {
    //     async session({session, user}) {
    //     // Fetch user details from the database using TypeORM
    //     const userRepository = DataSource(user);
    //     const userDetails = await userRepository.findOne({ where: { email: user.email } });
    
    //     // Attach additional user details to the session
    //     session.user.id = userDetails.id;
    
    //     return session;
    //     },
    // }
    theme: {
        colorScheme: "auto",
        logo: "/icon.png",
    },
})

export { handler as GET, handler as POST }