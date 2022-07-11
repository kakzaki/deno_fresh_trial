import { MysqlDriver } from "./mysql_driver.ts";

import {
  ColumnType,
  Generated,
  Kysely,
  Selectable,
  MysqlAdapter,
  MysqlIntrospector,
  MysqlQueryCompiler,
} from "kysely";

interface PersonTable {
  id: Generated<number>;
  first_name: string;
  last_name: string | null;
  gender: "female" | "male" | "other";
  modified_at: ColumnType<Date, string | undefined, never>;
}

export type Person = Selectable<PersonTable>;

export interface DbSchema {
  person: PersonTable;
}

// Singleton
export class Db {
  static #instance: Kysely<DbSchema>;

  private constructor() {}

  public static getInstance(): Kysely<DbSchema> {
    if (!Db.#instance) {
      Db.#instance = Db.#initDb();
    }

    return Db.#instance;
  }

  static #initDb() {
    return new Kysely<DbSchema>({
      dialect: {
        createAdapter() {
          return new MysqlAdapter();
        },
        createDriver() {
          return new MysqlDriver();
        },
        createIntrospector(db: Kysely<unknown>) {
          return new MysqlIntrospector(db);
        },
        createQueryCompiler() {
          return new MysqlQueryCompiler();
        },
      },
    });
  }
}
