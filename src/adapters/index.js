import { PostgresAdapter } from './postgres.js';
import { MySQLAdapter } from './mysql.js';

export function createAdapter(type) {
  switch (type) {
    case 'postgres':
    case 'postgresql':
    case 'pg':
      return new PostgresAdapter();
    case 'mysql':
    case 'mariadb':
      return new MySQLAdapter();
    default:
      throw new Error(`Unsupported database type: "${type}". Use postgres or mysql.`);
  }
}
