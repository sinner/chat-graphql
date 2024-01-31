import { MigrationInterface, QueryRunner } from "typeorm";

export class UserDetails1706671209491 implements MigrationInterface {
    name = 'UserDetails1706671209491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "avatarUrl" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "user" ADD "verifiedEmailAt" date`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastLoginAt" date`);
        await queryRunner.query(`ALTER TABLE "user" ADD "resetPasswordToken" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "user" ADD "resetPasswordRequestAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "resetPasswordRequestAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "resetPasswordToken"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastLoginAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "verifiedEmailAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatarUrl"`);
    }

}
