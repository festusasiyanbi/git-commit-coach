export type CommitMeta = { type: string; scope: string; summary: string };

export function classify(file: string, content: string): CommitMeta {
  const ext = file.split('.').pop();
  let type = 'chore';

  if (/test/.test(file)) type = 'test';
  else if (/fix|bug/.test(content)) type = 'fix';
  else if (/function|const/.test(content)) type = 'feat';
  else if (ext === 'css' || /style/.test(file)) type = 'style';

  const scope = file.split('/')[0] || 'misc';

  return {
    type,
    scope,
    summary: `update ${file}`
  };
}
