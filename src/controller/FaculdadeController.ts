import { AppDataSource } from "../database";
import { Turma } from "../entities/Turma";

const repoTurma = AppDataSource.getRepository(Turma);

export class FaculdadeController {
    async criarTurma(nome: string, semestre: string, id_disciplina: number): Promise<Turma> {
        const turma = repoTurma.create({nome, semestre, id_disciplina});
        const response = await repoTurma.save(turma);
        return response;
    }


    async consultarTurmas(): Promise<Turma[]> {
        const sql = "SELECT * FROM turma";
        const turmas = await repoTurma.query(sql);
        return turmas;
    }

    async updateturma(turma: Turma): Promise<Turma[]> {
        const { id, nome, semestre, id_disciplina } = turma;
        const sql = "UPDATE turma SET nome = $1, semestre = $2, id_disciplina = $3 WHERE id = $4 RETURNING *";
        const turmas = await repoTurma.query(sql, [nome, semestre, id_disciplina, id]);
        return turmas;
    }
}