import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Restaurants1722842096069 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
