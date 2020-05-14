const fs = require('fs');
const join = require('path').join;
const extractMdxMeta = require('extract-mdx-metadata');

const POSTS_DIR = join(process.cwd(), 'articles');

const getPostsMeta = () => {
    const metadata = fs.readFileSync(join(process.cwd(), 'articles', 'metadata.json'), 'utf-8');
    // TODO: verify metadata
    return JSON.parse(metadata);
};


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



async function genMetadata() {
    const metaFile = join(POSTS_DIR, 'metadata.json');
    const metadata = {
        tech: await getTechPostsMetadata()
    };
    fs.writeFileSync(metaFile, JSON.stringify(metadata), 'utf-8')
}


function genSiteMap() {
    const sitemapFile = join(process.cwd(), 'public', 'sitemap.xml');
    const date = new Date().toISOString().split('T')[0];
    const postsMeta = getPostsMeta();

    const techUrlTags = postsMeta.tech.map(meta => `<url><loc>https://thomaszdxsn.com/tech/${meta.slug}</loc><lastmod>${date}</lastmod></url>`).join('');

    fs.writeFileSync(sitemapFile, `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
      <loc>https://thomaszdxsn.com/</loc>
      <lastmod>${date}</lastmod>
  </url>
  <url>
      <loc>https://thomaszdxsn.com/about</loc>
      <lastmod>${date}</lastmod>
  </url>
  <url>
    <loc>https://thomaszdxsn.com/tech</loc>
    <lastmod>${date}</lastmod>
  </url>
  ${techUrlTags}
</urlset> 
`.trim(), 'utf-8');
}

(async () => {
    // 必须先生成 metadata 才能生成 sitemap
    await genMetadata();
    genSiteMap()
})();
