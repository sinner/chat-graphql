import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
export class User extends BaseEntity {
    @Column({
        type: "varchar",
        nullable: false,
        length: 70
    })
    firstName?: string;

    @Column({
        type: "varchar",
        nullable: true,
        length: 70
    })
    lastName?: string;

    @Column({
        type: "date",
        nullable: false,
    })
    birthday?: Date;

    @Column({
        type: "varchar",
        unique: true,
        length: 30
    })
    username?: string;

    @Column({
        type: "varchar",
        unique: true,
        length: 255,
        nullable: false,
    })
    email?: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: false,
    })
    password?: string;
}
