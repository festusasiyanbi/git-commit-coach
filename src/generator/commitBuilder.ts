import { CommitMeta } from '../classifier/changeClassifier';

export function buildCommitMessage(changes: CommitMeta[]): string {
  return changes.map(c => `${c.type}(${c.scope}): ${c.summary}`).join('\n\n');
}
