const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 1. Interaktif input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2. Hata yönetimli dosya işlemleri
const safeWrite = (filePath, content) => {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✓ ${path.basename(filePath)} güncellendi`);
  } catch (err) {
    console.error(`✗ ${filePath} yazılamadı:`, err.message);
  }
};

// 3. Template kopyalama
const copyTemplate = (src, dest) => {
  if (!fs.existsSync(src)) return;
  fs.copyFileSync(src, dest);
  console.log(`✓ Template ${path.basename(src)} oluşturuldu`);
};

// 4. Ana işlem
rl.question('Proje adı (kebab-case): ', (projectName) => {
  if (!projectName) {
    console.error('Hata: Proje adı gerekli!');
    process.exit(1);
  }

  // package.json güncelle
  const pkgPath = './package.json';
  const pkg = JSON.parse(fs.readFileSync(pkgPath));
  pkg.name = projectName.toLowerCase().replace(/\s+/g, '-');
  safeWrite(pkgPath, JSON.stringify(pkg, null, 2));

  // .env template oluştur
  copyTemplate('.env.example', '.env');

  // Manifest güncelle (opsiyonel)
  const manifestPath = './src/manifest.json';
  const manifest = JSON.parse(fs.readFileSync(manifestPath));
  manifest.name = projectName;
  safeWrite(manifestPath, JSON.stringify(manifest, null, 2));

  rl.close();
});