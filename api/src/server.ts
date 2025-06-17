import app from "./app";
import dotenv from "dotenv";
import prisma, { prismaConnect } from "./config/prisma";
import { initializeGlobalCategories } from "./services/globalCategories.service";
dotenv.config();

const PORT = Number(process.env.PORT);

const startServer = async () => {
	try {

		await prismaConnect();

		await initializeGlobalCategories();

		await app.listen({ port: PORT }).then(() => {
			console.log(`Servidor is running on port ${PORT}`)
		})
	} catch (err) {
		console.error("err", err);
	}
};

startServer()