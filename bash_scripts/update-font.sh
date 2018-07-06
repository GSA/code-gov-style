echo "starting update-font"

cd ..

echo "copying over font files"
cp node_modules/@code.gov/code-gov-font/font/* assets/font/.

echo "copying over font face code"
cp node_modules/@code.gov/code-gov-font/css/code-gov-font-face.css assets/css/.

echo "please update _fontello.scss"
