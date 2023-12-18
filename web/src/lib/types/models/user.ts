import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ValueTransformer,
  } from "typeorm"
  import Session from "./session"
  import VerificationToken from "./verificationToken"
  import UserRoles from "./userRoles"
import Account from "./account"

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
  
  @Entity({ name: "users" })
  export default class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string
  
    @Column({ type: "varchar", nullable: true })
    name!: string | null
  
    @Column({ type: "varchar", nullable: true})
    email!: string | null
  
    @Column({ type: "varchar", nullable: true, transformer: transformer.date })
    emailVerified!: string | null

    @Column({ type: "varchar", nullable: true})
    phoneNumber!: string | null;
  
    @Column({ type: "varchar", nullable: true })
    image!: string | null

    @OneToMany(() => UserRoles, (roles) => roles.userId)
    roles!: string | null
  
    @OneToMany(() => Session, (session) => session.userId)
    sessions!: Session[]
  
    @OneToMany(() => Account, (account) => account.userId)
    accounts!: Account[]
  }
  
  

  
