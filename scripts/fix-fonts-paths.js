const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, '../out/assets/css');

// Archivos CSS a modificar
const cssFiles = ['flaticon.css', 'font-awesome-all.css'];

cssFiles.forEach(file => {
  const filePath = path.join(cssDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Reemplazar ../../fonts/ con /fonts/ (ruta absoluta desde la raíz)
    content = content.replace(/url\(['"]?\.\.\/\.\.\/fonts\//g, `url('/fonts/`);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed font paths in ${file}`);
  }
});

console.log('✅ All font paths fixed!');

