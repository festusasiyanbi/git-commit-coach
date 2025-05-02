import { buildCommitMessage } from "../generator/commitBuilder";

const sample = [
  { type: 'feat', scope: 'utils', summary: 'add math helper' },
  { type: 'fix', scope: 'core', summary: 'fix bug in logic' }
];

console.log(buildCommitMessage(sample));
