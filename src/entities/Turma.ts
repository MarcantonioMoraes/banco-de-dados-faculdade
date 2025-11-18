import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * @openapi
 * components:
 *   schemas:
 *     Turma:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: "Turma A"
 *         semestre:
 *           type: string
 *           example: "2025.1"
 *         id_disciplina:
 *           type: integer
 *           example: 2
 *       required:
 *         - nome
 *         - semestre
 *         - id_disciplina
 */
@Entity("turma")
export class Turma {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    nome!: string;

    @Column()
    semestre!: string;

    @Column()
    id_disciplina!: number;
}