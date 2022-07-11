import { Client } from "mysql";
import { CompiledQuery, DatabaseConnection, Driver, QueryResult } from "kysely";

export class MysqlDriver implements Driver {
  readonly #connectionMutex = new ConnectionMutex();

  #db?: Client;
  #connection?: DatabaseConnection;

  async init(): Promise<void> {
    this.#db = await new Client().connect({
      hostname: Deno.env.get("host"),
      username: Deno.env.get("user"),
      db: Deno.env.get("db"),
      password: Deno.env.get("password"),
    });
    this.#connection = new MysqlConnection(this.#db);
    return Promise.resolve();
  }

  async acquireConnection(): Promise<DatabaseConnection> {
    await this.#connectionMutex.lock();
    return this.#connection!;
  }

  async beginTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("begin"));
  }

  async commitTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("commit"));
  }

  async rollbackTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("rollback"));
  }

  releaseConnection(): Promise<void> {
    this.#connectionMutex.unlock();
    return Promise.resolve();
  }

  destroy(): Promise<void> {
    this.#db?.close();
    return Promise.resolve();
  }
}

class MysqlConnection implements DatabaseConnection {
  readonly #db: Client;

  constructor(db: Client) {
    this.#db = db;
  }

  executeQuery<O>(compiledQuery: CompiledQuery): Promise<QueryResult<O>> {
    const { sql } = compiledQuery;
    const stmt = this.#db.query(sql);
    return Promise.resolve(stmt);
  }
}

class ConnectionMutex {
  #promise?: Promise<void>;
  #resolve?: () => void;

  async lock(): Promise<void> {
    while (this.#promise) {
      await this.#promise;
    }

    this.#promise = new Promise((resolve) => {
      this.#resolve = resolve;
    });
  }

  unlock(): void {
    const resolve = this.#resolve;

    this.#promise = undefined;
    this.#resolve = undefined;

    resolve?.();
  }
}
