import express from "express";
import faculdadeRoutes from "./routes/FaculdadeRoutes";
import { AppDataSource } from "./database";
import { setupSwagger } from "./swagger";

const app = express();
app.use(express.json());
app.use("/faculdade", faculdadeRoutes);

// Monta o Swagger UI em /docs
setupSwagger(app);

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida");
        app.listen(3000, () => {
            console.log("Servidor rodando com sucesso na porta 3000");
        });
    })
    .catch((error) => {
        console.error("Erro ao conectar com o banco de dados:", error);
    });