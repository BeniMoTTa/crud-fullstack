import { getRounds, hashSync } from "bcryptjs";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  NOBINARY = "no binary",
  DEFAULT = "No say",
}

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ type: "varchar", length: 200 })
  password: string;

  @Column()
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dateRegister: Date;

  hashpassword() {
    const encrypted = getRounds(this.password);
    if (!encrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @Column({ type: "enum", enum: Gender, default: Gender.DEFAULT })
  gender: Gender;

  @OneToMany(() => Contact, (contact) => contact.client)
  contact: Contact[];
}
