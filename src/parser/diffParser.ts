export type ParsedChange = { file: string; content: string };

export function parseDiff(diffText: string): ParsedChange[] {
  const changes: ParsedChange[] = [];
  const blocks = diffText.split(/^diff --git/gm).slice(1);

  for (const block of blocks) {
    const match = block.match(/a\/(.+?) b\//);
    const file = match ? match[1] : 'unknown';
    changes.push({ file, content: block.trim() });
  }

  return changes;
}
