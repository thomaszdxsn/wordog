const fs = require('fs');
const extractMdxMeta = require('extract-mdx-metadata');
const join = require('path').join

const POSTS_DIR = join(process.cwd(), 'articles');


async function extractMete(path) {
    const content = fs.readFileSync(path, {encoding: 'utf8'});
    const filename = path.split('/').pop();
    return extractMdxMeta(content).then(r => ({...r, filename}))
}


async function readPostDir(path) {
    const files =  fs.readdirSync(path).filter(file => file.endsWith('.mdx'));
    return Promise.all(files.map(async file => extractMete(join(path, file))));
}


async function getTechPostsMetadata() {
    const techDir = join(POSTS_DIR, 'tech')
    return readPostDir(techDir)
}



async function main() {
    const metaFile = join(POSTS_DIR, 'metadata.json')
    const metadata = {
        tech: await getTechPostsMetadata()
    };
    fs.writeFileSync(metaFile, JSON.stringify(metadata), 'utf-8')
}

(async () => {
    await main();
})();

