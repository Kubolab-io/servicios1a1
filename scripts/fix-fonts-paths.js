const fs = require('fs');
const path = require('path');

const basePath = '/servicios1a1';
const cssDir = path.join(__dirname, '../out/assets/css');

// Archivos CSS a modificar
const cssFiles = ['flaticon.css', 'font-awesome-all.css'];

cssFiles.forEach(file => {
  const filePath = path.join(cssDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Reemplazar ../../fonts/ con /servicios1a1/fonts/
    content = content.replace(/url\(['"]?\.\.\/\.\.\/fonts\//g, `url('${basePath}/fonts/`);
    // También reemplazar /fonts/ con /servicios1a1/fonts/ por si acaso
    content = content.replace(/url\(['"]?\/fonts\//g, `url('${basePath}/fonts/`);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed font paths in ${file}`);
  }
});

console.log('✅ All font paths fixed!');

