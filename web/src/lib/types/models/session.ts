import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    ValueTransformer,
  } from "typeorm"
import User from "./user";

const transformer: Record<"date" | "bigint", ValueTransformer> = {
    date: {
        from: (date: string | null) => date && new Date(parseInt(date, 10)),
        to: (date?: Date) => date?.valueOf().toString(),
    },
    bigint: {
        from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
        to: (bigInt?: number) => bigInt?.toString(),
    },
}

@Entity({ name: "sessions" })
export default class Session {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ unique: true })
  sessionToken!: string

  @Column({ type: "uuid" })
  userId!: string

  @Column({ transformer: transformer.date })
  expires!: string

  @ManyToOne(() => User, (user) => user.sessions)
  user!: User
}