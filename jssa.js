$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
Get-ChildItem -Recurse *.sql | foreach {
    $MyPath = $_.FullName;
    $Contents = Get-Content $MyPath
    [System.IO.File]::WriteAllLines($MyPath, $Contents, $Utf8NoBomEncoding)
}