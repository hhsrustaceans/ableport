import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from "typeorm"

@Entity({ name: "user_roles" })
export default class UserRoles {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "uuid" })
  userId!: string

  @Column({ type: "varchar"})
  role!: string
}