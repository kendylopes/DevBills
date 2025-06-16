import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = Number(process.env.PORT);

const startServer = async () => {
	try {
		await app.listen({ port: PORT }).then(() => {
			console.log(`Servidor is running on port ${PORT}`)
		})
	} catch (err) {
		console.error("err", err);
	}
};

startServer()