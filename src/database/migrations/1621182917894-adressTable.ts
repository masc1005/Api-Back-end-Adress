import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class adressTable1621182917894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                'name': 'Adress',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isUnique: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'adress',
                        type: 'varchar',
                        length: '128',
                        isNullable: false
                    },
                    {
                        name: 'number',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'complement',
                        type: 'varchar',
                        length: '128',
                        isNullable: false
                    },
                    {
                        name: 'cep',
                        type: 'varchar',                    
                        isNullable: false
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('Adress')
        await queryRunner.query(`DROP EXTENSION "uuid-ossp"`)

    }

}
