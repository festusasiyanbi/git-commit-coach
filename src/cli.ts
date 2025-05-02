import { getStagedDiff } from './git/getStagedDiff';
import { parseDiff } from './parser/diffParser';
import { classify } from './classifier/changeClassifier';
import { buildCommitMessage } from './generator/commitBuilder';
import inquirer from 'inquirer';
import { exec } from 'child_process';

async function run() {
  const diff = await getStagedDiff();
  if (!diff) {
    console.log('No staged changes.');
    return;
  }

  const parsed = parseDiff(diff);
  const classified = parsed.map(p => classify(p.file, p.content));
  const message = buildCommitMessage(classified);

  const { confirm, custom } = await inquirer.prompt([
    { type: 'confirm', name: 'confirm', message: `Use this commit message?\n\n${message}`, default: true },
    { type: 'input', name: 'custom', message: 'Edit it if you want:', when: (a) => !a.confirm }
  ]);

  const finalMsg = confirm ? message : custom;
  exec(`git commit -m "${finalMsg.replace(/"/g, '\\"')}"`);
}

run();
