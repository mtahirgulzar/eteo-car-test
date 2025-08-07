# PowerShell script to update all blog posts with consistent styling

# Get the directory where this script is located
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$blogDir = Join-Path $scriptPath "content\blog"
$stylesFile = Join-Path $scriptPath "layouts\partials\blog-styles.html"

# Read the styles content
$stylesContent = Get-Content -Path $stylesFile -Raw

# Function to process a single blog post
function Update-BlogPost {
    param (
        [string]$filePath
    )
    
    Write-Host "Updating: $filePath"
    
    # Read the file content
    $content = Get-Content -Path $filePath -Raw
    
    # Remove any existing style blocks
    $content = $content -replace '<style[^>]*>[\s\S]*?<\/style>', ''
    
    # Add the new styles after the front matter
    if ($content -match '(?s)(---.*?---)(.*)') {
        $frontMatter = $matches[1]
        $blogContent = $matches[2].TrimStart()
        $newContent = "$frontMatter`n`n$stylesContent`n`n$blogContent"
        
        # Write the updated content back to the file
        $newContent | Set-Content -Path $filePath -NoNewline -Encoding UTF8
        Write-Host "Updated: $filePath" -ForegroundColor Green
    } else {
        Write-Host "Skipping (no front matter found): $filePath" -ForegroundColor Yellow
    }
}

# Process all blog posts
Get-ChildItem -Path $blogDir -Recurse -Filter "article.md" | ForEach-Object {
    Update-BlogPost -filePath $_.FullName
}

Write-Host "All blog posts have been updated with the new styling." -ForegroundColor Green
