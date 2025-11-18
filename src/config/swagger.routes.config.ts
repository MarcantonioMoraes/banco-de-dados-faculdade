/**
 * @openapi
 * /faculdade/turma:
 *   post:
 *     tags:
 *       - Turma
 *     summary: Criar uma nova turma
 *     description: Cria uma nova turma no sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - semestre
 *               - id_disciplina
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Turma A"
 *               semestre:
 *                 type: string
 *                 example: "2025.1"
 *               id_disciplina:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Turma criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turma'
 *   get:
 *     tags:
 *       - Turma
 *     summary: Listar todas as turmas
 *     description: Retorna uma lista com todas as turmas cadastradas
 *     responses:
 *       200:
 *         description: Lista de turmas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Turma'
 *   put:
 *     tags:
 *       - Turma
 *     summary: Atualizar uma turma
 *     description: Atualiza os dados de uma turma existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nome
 *               - semestre
 *               - id_disciplina
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               nome:
 *                 type: string
 *                 example: "Turma A - Atualizada"
 *               semestre:
 *                 type: string
 *                 example: "2025.2"
 *               id_disciplina:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Turma atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 update:
 *                   type: boolean
 *                   example: true
 *                 turmaResponse:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Turma'
 */
