const https = require('https');
const fs = require('fs');
const path = require('path');

// 常用网站的图标映射
const faviconMap = {
  'google.com': 'https://www.google.com/s2/favicons?domain=google.com&sz=32',
  'baidu.com': 'https://www.google.com/s2/favicons?domain=baidu.com&sz=32',
  'bing.com': 'https://www.google.com/s2/favicons?domain=bing.com&sz=32',
  'github.com': 'https://www.google.com/s2/favicons?domain=github.com&sz=32',
  'stackoverflow.com': 'https://www.google.com/s2/favicons?domain=stackoverflow.com&sz=32',
  'youtube.com': 'https://www.google.com/s2/favicons?domain=youtube.com&sz=32',
  'netflix.com': 'https://www.google.com/s2/favicons?domain=netflix.com&sz=32',
  'notion.so': 'https://www.google.com/s2/favicons?domain=notion.so&sz=32',
  'trello.com': 'https://www.google.com/s2/favicons?domain=trello.com&sz=32',
  'zhihu.com': 'https://www.google.com/s2/favicons?domain=zhihu.com&sz=32',
  'weibo.com': 'https://www.google.com/s2/favicons?domain=weibo.com&sz=32',
};

const faviconsDir = path.join(__dirname, '../public/favicons');

// 确保目录存在
if (!fs.existsSync(faviconsDir)) {
  fs.mkdirSync(faviconsDir, { recursive: true });
}

// 下载图标的函数
function downloadFavicon(domain, url) {
  return new Promise((resolve, reject) => {
    const filename = `${domain}.png`;
    const filepath = path.join(faviconsDir, filename);
    
    // 如果文件已存在，跳过下载
    if (fs.existsSync(filepath)) {
      console.log(`✓ ${filename} already exists`);
      resolve();
      return;
    }

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      } else {
        console.log(`✗ Failed to download ${filename}: ${response.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      console.log(`✗ Error downloading ${filename}: ${err.message}`);
      resolve();
    });
  });
}

// 下载所有图标
async function downloadAllFavicons() {
  console.log('Starting favicon downloads...');
  
  for (const [domain, url] of Object.entries(faviconMap)) {
    await downloadFavicon(domain, url);
  }
  
  console.log('Favicon download completed!');
}

downloadAllFavicons(); 