// @ts-ignore
const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Initial1706591176779 {
    name = 'Initial1706591176779'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("rowId" SERIAL NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying(70) NOT NULL, "lastName" character varying(70), "birthday" date NOT NULL, "username" character varying(30) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_266bc44a18601f893566962df69" UNIQUE ("rowId"), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}