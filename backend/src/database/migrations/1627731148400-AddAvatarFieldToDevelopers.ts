import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddAvatarFieldToDevelopers1627731148400
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'developers',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('developers', 'avatar');
  }
}
