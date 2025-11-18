import { Router } from "express";
import { FaculdadeController } from "../controller/FaculdadeController";
// Importa as definições do Swagger (não é usado no código, mas o swagger-jsdoc lê os comentários)
import "../config/swagger.routes.config";

const router = Router()
const faculdadeController = new FaculdadeController();

router.post("/turma", async (req, res) => {
    const { nome, semestre, id_disciplina } = req.body;
    const turma = await faculdadeController.criarTurma(nome, semestre, id_disciplina);
    res.json(turma);
});

router.get("/turma", async (_req, res) => {
    const turmas = await faculdadeController.consultarTurmas();
    res.json(turmas);
});

router.put("/turma", async (req, res) => {
    const turma = req.body;
    const turmaResponse = await faculdadeController.updateturma(turma);
    res.json({
        update: true,
        turmaResponse
    });
});

export default router;