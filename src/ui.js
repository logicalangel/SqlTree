import chalk from 'chalk';

// ── Banner ──────────────────────────────────────────────────

export function printBanner() {
  console.log('');
  console.log(chalk.cyan.bold('  ╔══════════════════════════════════════╗'));
  console.log(chalk.cyan.bold('  ║') + chalk.white.bold('   🌳 sqltree ') + chalk.dim('v1.0') + '                      ' + chalk.cyan.bold('║'));
  console.log(chalk.cyan.bold('  ║') + chalk.dim('   PostgreSQL · MySQL · CLI Client   ') + chalk.cyan.bold('║'));
  console.log(chalk.cyan.bold('  ╚══════════════════════════════════════╝'));
  console.log('');
}

// ── Export ───────────────────────────────────────────────────

export function exportCsv(result) {
  const columns = result.columns || Object.keys(result.rows[0]);
  const lines = [columns.join(',')];

  for (const row of result.rows) {
    lines.push(columns.map(c => {
      const val = row[c];
      if (val === null || val === undefined) return '';
      const str = String(val);
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    }).join(','));
  }

  return lines.join('\n');
}
