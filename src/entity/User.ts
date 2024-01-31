import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
export class User extends BaseEntity {
    @Column({
        type: "varchar",
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
    })
    email?: string;

    @Column({
        type: "varchar",
        length: 255,
    })
    password?: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: true,
    })
    avatarUrl?: string;

    @Column({
        type: "date",
        nullable: true,
    })
    verifiedEmailAt?: Date;

    @Column({
        type: "date",
        nullable: true,
    })
    lastLoginAt?: Date;

    @Column({
        type: "varchar",
        length: 255,
        nullable: true,
    })
    resetPasswordToken?: string;

    @Column({
        type: "date",
        nullable: true,
    })
    resetPasswordRequestAt?: Date;
}
