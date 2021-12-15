const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env', (process.env.GITHUB_TOKEN || 'tem git').slice(0, 4));

const options = {
  auth: process.env.GITHUB_TOKEN || process.env.GITHUB_AUTH,
};
if (process.env.NODE_ENV === 'development') {
  options.log = console;
}
const octokit = new Octokit(options);

// octokit.request('/');

const getChangelog = (content, version) => {
  const lines = content.split('\n');
  const changeLog = [];
  // const startPattern = new RegExp(`^#(|#) (|[) ${version}`);
  const startPattern = new RegExp(`^#(|#) .*${version}`);
  const stopPattern = /^#(|#) (|\[)\d+(?:\.\d+){2}/; // 前一个版本
  // eslint-disable-next-line no-unused-vars
  const skipPattern = /^`/; // 需要跳过的正则
  let begin = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (begin && stopPattern.test(line)) {
      break;
    }
    // if (begin && line && !skipPattern.test(line)) {
    if (begin && line) {
      changeLog.push(line);
    }
    if (!begin) {
      begin = startPattern.test(line);
    }
  }
  return changeLog.join('\n');
};

const getMds = (allVersion = false) => {
  const TARGET_DIRECTORY = path.join(__dirname, '../packages');
  const packageFolders = fs.readdirSync(TARGET_DIRECTORY).filter((filename) => filename[0] !== '.');
  console.log('packageFolders', packageFolders);
  packageFolders.forEach((packageFolder) => {
    const directory = path.join(TARGET_DIRECTORY, packageFolder);
    const packageInfoPath = path.join(directory, 'package.json');
    // eslint-disable-next-line no-unused-vars
    const content = fs.readFileSync(path.join(directory, './CHANGELOG.md')).toString();
    console.log('packageInfoPath', packageInfoPath);
    const info = require(packageInfoPath);
    const versions = [info.version];
    const pkgName = info.name;

    console.log('versions', versions);
    versions.forEach((version) => {
      const versionPkg = `${pkgName}@${version}`;
      const changeLog = getChangelog(content, version);
      if (!changeLog) {
        return;
      }
      const releaseData = {
        owner: 'MrSeaWave',
        repo: 'lint-config',
        tag_name: versionPkg,
        name: versionPkg,
        body: changeLog,
      };
      console.log('release', releaseData);
      octokit.repos.createRelease(releaseData).catch((e) => {
        console.log(e);
      });
    });
  });
};

getMds();
