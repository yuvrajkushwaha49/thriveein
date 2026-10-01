$baseUrl = "https://thriveein.com/infetech/assets/images/"
$destDir = "d:\New_Softwares\thriveein\public\assets\images\"

$images = @(
    "banner-icon.png",
    "banner-arrow.png",
    "banner-shape-1.png",
    "banner-shape-2.png",
    "banner-bg-1.jpg",
    "banner-bg-2.jpg",
    "banner-bg-3.jpg",
    "banner-slide-1.jpg",
    "banner-slide-2.jpg",
    "banner-slide-3.jpg",
    "about-thumb-1.jpg",
    "about-thumb-2.jpg",
    "about-logo.png",
    "service-1.jpg",
    "service-2.jpg",
    "service-3.jpg",
    "cta-thumb.png",
    "project-1.jpg",
    "project-2.jpg",
    "project-3.jpg",
    "project-4.jpg",
    "testimonial-thumb-1.png",
    "testimonial-thumb-2.png",
    "testimonial-shape.png",
    "team-1.jpg",
    "team-2.jpg",
    "team-3.jpg",
    "video-shape.png",
    "video-bg.jpg",
    "blog-1.jpg",
    "blog-2.jpg",
    "blog-3.jpg",
    "icon/icon-1.png",
    "icon/icon-2.png",
    "icon/service-icon-1.png",
    "icon/service-icon-2.png",
    "icon/service-icon-3.png",
    "icon/phone.svg"
)

New-Item -ItemType Directory -Force -Path (Join-Path $destDir "icon") | Out-Null

foreach ($img in $images) {
    $target = Join-Path $destDir $img
    $targetParent = Split-Path -Parent $target
    if (!(Test-Path $targetParent)) {
        New-Item -ItemType Directory -Force -Path $targetParent | Out-Null
    }
    
    if (!(Test-Path $target)) {
        $url = $baseUrl + $img
        Write-Host "Downloading $url to $target"
        try {
            Invoke-WebRequest -Uri $url -OutFile $target -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -TimeoutSec 15
            Write-Host "Successfully downloaded $img"
        }
        catch {
            Write-Host "Failed to download $img : $_"
        }
    }
    else {
        Write-Host "Already exists: $img"
    }
}
