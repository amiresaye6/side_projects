#!/usr/bin/env bash

echo $1
mkdir "$1"
cd "$1"
touch "index.html" "index.js" "style.css"

cat <<EOF > index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Amir</title>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
EOF
