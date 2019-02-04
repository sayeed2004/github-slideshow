$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
Get-ChildItem -Recurse *.sql | foreach {
    $MyPath = $_.FullName;
    $Contents = Get-Content $MyPath
    <button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>
}
