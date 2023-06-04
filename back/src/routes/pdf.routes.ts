import { Router, Request, Response } from "express";
import PDFDocument from "pdfkit";
import { Client } from "../entities/client.entity";
import { AppDataSource } from "../data-source";
import { ensureTokenValid } from "../middlewares/ensureTokenIsValid.middleware";
import { returnClientSchema } from "../schemas/client.schema";

export const pdfRoutes: Router = Router();

pdfRoutes.get("", ensureTokenValid, async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthenticated client." });
    }

    const clientId = req.user.id;

    const clientRepository = AppDataSource.getRepository(Client);

    const queryBuilder = clientRepository
      .createQueryBuilder("client")
      .leftJoinAndSelect("client.contact", "contact")
      .where("client.id = :clientId", { clientId });

    const client = await queryBuilder.getOne();

    if (!client) {
      return res.status(404).json({ message: "Client not found." });
    }

    const doc = new PDFDocument();

    doc.fontSize(20).text("Client List", { align: "center" }).moveDown();

    const validatedClient = returnClientSchema.parse(client);
    doc
      .fontSize(16)
      .text(
        ` ClientName: ${validatedClient.clientName}, E-mail:${validatedClient.email}, Phone: ${validatedClient.phone}, Date: ${validatedClient.dateRegister}`
      )
      .moveDown();

    doc.fontSize(14).text("Contact:", { align: "left" }).moveDown();

    client.contact.forEach((item) => {
      doc
        .fontSize(12)
        .text(
          ` Name: ${item.contactName}, E-mail: ${item.email}, Phone: ${item.phone}`
        );
    });

    doc.end();

    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating." });
  }
});
