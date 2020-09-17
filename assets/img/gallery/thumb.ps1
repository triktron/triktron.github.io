Get-ChildItem -recurse "./" -Filter *.png |
Foreach-Object {
    $path = Split-Path -Path $_.FullName
    if ($_.Name.IndexOf("thumb") -eq (-1)) {
      Invoke-Expression -Command "convert -define png:size=200x200 `"$($_.FullName)`"  -thumbnail 200x200^ -gravity center -extent 200x200  `"$($path)\thumb_$($_.Name)`""
    }
}

Get-ChildItem -recurse "./" -Filter *.jpg |
Foreach-Object {
    $path = Split-Path -Path $_.FullName
    if ($_.Name.IndexOf("thumb") -eq (-1)) {
      Invoke-Expression -Command "convert -define jpg:size=200x200 $($_.FullName)  -thumbnail 200x200^ -gravity center -extent 200x200  $($path)\thumb_$($_.Name)"
    }
}

function gendata {
 $files = "picture_path: $($args[0])`r`npictures:`r`n"
 Get-ChildItem "./$($args[0])" -Filter *.jpg |
 Foreach-Object {
     $path = Split-Path -Path $_.FullName
     if ($_.Name.IndexOf("thumb") -eq (-1)) {
      $files = "$($files)- $($_.Name)`r`n"
      }
    }
    Get-ChildItem "./$($args[0])" -Filter *.png |
    Foreach-Object {
        $path = Split-Path -Path $_.FullName
        if ($_.Name.IndexOf("thumb") -eq (-1)) {
         $files = "$($files)- $($_.Name)`r`n"
         }
       }
  Write-Output $files
  $files | Out-File -FilePath "../../../_data/galleries/$($args[0]).yml" -Encoding ASCII
}

gendata "Games"
gendata "Persenal"
gendata "School"
gendata "Sketches"
