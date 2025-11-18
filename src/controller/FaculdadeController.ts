import { Body, Controller, Get, Post, Put, StatusResponse } from "express-swagger-autoconfigure";
import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Turma } from "../entities/Turma";

const repoTurma = AppDataSource.getRepository(Turma);

@Controller("/faculdade")
export class FaculdadeController {

    @StatusResponse(200, "Turma criada com sucesso")
    @StatusResponse(400, "Erro ao criar turma")
    @Body({
        nome: "Nome da turma",
        semestre: "Semestre da turma (ex: 2025.1)",
        id_disciplina: "ID da disciplina"
    })
    @Post("/turma")
    async criarTurma(request: Request, response: Response): Promise<Response> {
        const { nome, semestre, id_disciplina } = request.body;
        const turma = repoTurma.create({nome, semestre, id_disciplina});
        const turmaResponse = await repoTurma.save(turma);
        return response.json(turmaResponse);
    }

    @StatusResponse(200, "Lista de turmas retornada com sucesso")
    @StatusResponse(400, "Erro ao consultar turmas")
    @Get("/turma")
    async consultarTurmas(request: Request, response: Response): Promise<Response> {
        const sql = "SELECT * FROM turma";
        const turmas = await repoTurma.query(sql);
        return response.json(turmas);
    }

    @StatusResponse(200, "Turma atualizada com sucesso")
    @StatusResponse(400, "Erro ao atualizar turma")
    @Body({
        id: "ID da turma",
        nome: "Nome da turma",
        semestre: "Semestre da turma (ex: 2025.2)",
        id_disciplina: "ID da disciplina"
    })
    @Put("/turma")
    async updateturma(request: Request, response: Response): Promise<Response> {
        const { id, nome, semestre, id_disciplina } = request.body;
        const sql = "UPDATE turma SET nome = $1, semestre = $2, id_disciplina = $3 WHERE id = $4 RETURNING *";
        const turmas = await repoTurma.query(sql, [nome, semestre, id_disciplina, id]);
        return response.json({
            update: true,
            turmaResponse: turmas
        });
    }
}