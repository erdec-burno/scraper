import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialTables1716547736919 implements MigrationInterface {
  name = 'CreateInitialTables1716547736919';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "hotels_brand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "url" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_8b7daca271e216f28317a715cf8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."scraper_sessions_status_enum" AS ENUM('PROCESSING', 'DONE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "scraper_sessions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "status" "public"."scraper_sessions_status_enum" NOT NULL DEFAULT 'PROCESSING', "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2bf4576d91f642d9788b3c744da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cities_by_hotelbrand" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cityId" integer, "brandId" bigint, "scraperSessionId" integer, CONSTRAINT "PK_006a6aad354640359a671cb6dc2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "hotels" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "hotelCode" character varying NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "phone" character varying NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "postalCode" character varying NOT NULL, "logo" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "citiesByHotelBrandId" integer, CONSTRAINT "PK_2bb06797684115a1ba7c705fc7b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "rooms" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "description" character varying NOT NULL, "images" json NOT NULL, "amenities" json NOT NULL, "hotelId" integer, CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `ALTER TABLE "cities_by_hotelbrand" ADD CONSTRAINT "FK_02363a7158a3a4b3cdf8dcfd5e0" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities_by_hotelbrand" ADD CONSTRAINT "FK_7d633eca01b76b02b56040d9ac5" FOREIGN KEY ("brandId") REFERENCES "hotels_brand"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities_by_hotelbrand" ADD CONSTRAINT "FK_afa317d21cf32d664f53d0682a7" FOREIGN KEY ("scraperSessionId") REFERENCES "scraper_sessions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "hotels" ADD CONSTRAINT "FK_dec19b596bc2b18450a26222751" FOREIGN KEY ("citiesByHotelBrandId") REFERENCES "cities_by_hotelbrand"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" ADD CONSTRAINT "FK_e9d4d68c8c47b7fe47b8e233f60" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rooms" DROP CONSTRAINT "FK_e9d4d68c8c47b7fe47b8e233f60"`,
    );
    await queryRunner.query(
      `ALTER TABLE "hotels" DROP CONSTRAINT "FK_dec19b596bc2b18450a26222751"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities_by_hotelbrand" DROP CONSTRAINT "FK_afa317d21cf32d664f53d0682a7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities_by_hotelbrand" DROP CONSTRAINT "FK_7d633eca01b76b02b56040d9ac5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cities_by_hotelbrand" DROP CONSTRAINT "FK_02363a7158a3a4b3cdf8dcfd5e0"`,
    );

    await queryRunner.query(`DROP TABLE "rooms"`);
    await queryRunner.query(`DROP TABLE "hotels"`);
    await queryRunner.query(`DROP TABLE "cities_by_hotelbrand"`);
    await queryRunner.query(`DROP TABLE "scraper_sessions"`);
    await queryRunner.query(
      `DROP TYPE "public"."scraper_sessions_status_enum"`,
    );
    await queryRunner.query(`DROP TABLE "hotels_brand"`);
  }
}
