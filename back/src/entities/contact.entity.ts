import { Client } from "./client.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  NOBINARY = "no binary",
  DEFAULT = "No say",
}

@Entity("contact")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dateRegister: Date;

  @Column({ type: "enum", enum: Gender, default: Gender.DEFAULT })
  gender: Gender;

  @ManyToOne(() => Client, (client) => client.contact)
  client: Client;
}
