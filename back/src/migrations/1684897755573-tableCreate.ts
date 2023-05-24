import { MigrationInterface, QueryRunner } from "typeorm";

export class TableCreate1684897755573 implements MigrationInterface {
    name = 'TableCreate1684897755573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "contactName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "dateRegister" TIMESTAMP NOT NULL DEFAULT now(), "gender" "public"."contact_gender_enum" NOT NULL DEFAULT 'uniformed', "clientId" uuid, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying(200) NOT NULL, "phone" character varying NOT NULL, "dateRegister" TIMESTAMP NOT NULL DEFAULT now(), "gender" "public"."client_gender_enum" NOT NULL DEFAULT 'No say', CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
