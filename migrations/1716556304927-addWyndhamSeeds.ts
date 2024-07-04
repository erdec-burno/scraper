import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWyndhamSeeds1716556304927 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "hotels_brand" (name, description, url) VALUES('wyndham', '', 'https://www.wyndhamhotels.com/')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "hotels_brand" WHERE name = 'wyndham'`,
    );
  }
}
