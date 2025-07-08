const { execSync } = require("child_process");
const fs = require("fs");

const dates = [
  "2024-11-06"
];

const FILE_NAME = "activity.log";

dates.forEach((date, index) => {
  const content = `Commit #${index + 1} on ${date}\n`;
  fs.appendFileSync(FILE_NAME, content);

  const env = {
    ...process.env,
    GIT_AUTHOR_DATE: `${date}T12:00:00`,
    GIT_COMMITTER_DATE: `${date}T12:00:00`
  };

  execSync(`git add ${FILE_NAME}`, { stdio: "inherit" });
  execSync(`git commit -m "fixed UI"`, { stdio: "inherit", env });
  console.log(`✅ Committed for ${date}`);
});
