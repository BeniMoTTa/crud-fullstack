import { Client } from "./client.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

export enum GenderContact {
  MALE = "male",
  FEMALE = "female",
  NOBINARY = "no binary",
  DEFAULT = "uniformed",
}

@Entity("contact")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  contactName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dateRegister: Date;

  @Column({ type: "enum", enum: GenderContact, default: GenderContact.DEFAULT })
  gender: GenderContact;

  @ManyToOne(() => Client, (client) => client.contact)
  client: Client;
}
