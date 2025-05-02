import simpleGit from "simple-git"

export async function getStagedDiff(): Promise<string> {
    const git = simpleGit();
    return await (git.diff(["--cached"]));
}