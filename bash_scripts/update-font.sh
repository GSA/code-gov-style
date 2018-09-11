echo "starting update-font"

cd ..

echo "copying over font files"
cp node_modules/@code.gov/code-gov-font/font/* assets/font/.

echo "copying over font face code"
cp node_modules/@code.gov/code-gov-font/css/code-gov-font-face.css assets/css/.

printf '\e[1;31m%-6s\e[m' "please update _sass/_fontello.scss"
echo ""
