import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated, Column } from "typeorm";

export default class BaseEntity {
  @Generated("increment")
  @Column({
    type: "int",
    unique: true,
    nullable: false,
  })
  rowId?: number;

  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}