import { getStagedDiff } from "../git/getStagedDiff";
import { parseDiff } from "../parser/diffParser";

(async () => {
  const diff = await getStagedDiff();
  const parsed = parseDiff(diff);
  console.log(parsed);
})();