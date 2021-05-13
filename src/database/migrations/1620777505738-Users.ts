import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1620693287188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                'name': 'users',
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isUnique: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'idade',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'peso',
                        type: 'float',
                        isNullable: false
                    },
                    {
                        name: 'etnia',
                        type: 'enum',
                        enum:[
                            'Branco', 'Pardo', 'Negro', 'Indigena', 'Amarela', 'NA'
                        ]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
        await queryRunner.query(`DROP EXTENSION "uuid-ossp"`)
    }

}