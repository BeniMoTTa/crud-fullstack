import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

export enum GenderC {
  MALE = "male",
  FEMALE = "female",
  NOBINARY = "no binary",
  DEFAULT = "No say",
}

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  clientName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  clientPhoto: string;

  @Column()
  clientCity: string;

  @Column({ type: "varchar", length: 200 })
  password: string;

  @Column()
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dateRegister: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashpassword() {
    const encrypted = getRounds(this.password);
    if (!encrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @Column({ type: "enum", enum: GenderC, default: GenderC.DEFAULT })
  gender: GenderC;

  @OneToMany(() => Contact, (contact) => contact.client, {
    onDelete: "CASCADE",
  })
  contact: Contact[];
}
