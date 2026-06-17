# === CẤU HÌNH ===
$jsonPath   = "D:\vbpl_database.json"
$outputFolder = "D:\VBPL_PhanLoai"

# Tạo thư mục output nếu chưa có
New-Item -ItemType Directory -Path $outputFolder -Force | Out-Null

# Đọc database
Write-Host "Đang đọc database..." -ForegroundColor Cyan
$data = Get-Content $jsonPath -Raw -Encoding UTF8 | ConvertFrom-Json

Write-Host "Tổng số văn bản: $($data.Count)" -ForegroundColor Green

# Hàm xác định nhóm
function Get-Category {
    param($item)
    
    $text = ($item.title + " " + $item.filename).ToLower()

    if ($text -match "ttlt|thông tư liên tịch") {
        return "ThongTuLienTich"
    }
    elseif ($text -match "án lệ|anle|an lệ") {
        return "AnLe"
    }
    elseif ($text -match "rút kinh nghiệm|rut kinh nghiem|rutkinhnghiem") {
        return "RutKinhNghiem"
    }
    elseif ($text -match "thông tư|thong tu") {
        return "ThongTu"
    }
    elseif ($text -match "nghị định|nghi dinh") {
        return "NghiDinh"
    }
    else {
        return "Khac"
    }
}

# Phân loại
$groups = @{}

foreach ($item in $data) {
    $cat = Get-Category -item $item
    
    if (-not $groups.ContainsKey($cat)) {
        $groups[$cat] = @()
    }
    $groups[$cat] += $item
}

# Xuất từng file JSON
foreach ($cat in $groups.Keys) {
    $filePath = Join-Path $outputFolder "$cat.json"
    $groups[$cat] | ConvertTo-Json -Depth 5 -Compress | Out-File $filePath -Encoding UTF8
    
    Write-Host "✅ Đã tạo: $cat.json  ($($groups[$cat].Count) văn bản)" -ForegroundColor Green
}

Write-Host "`nHoàn tất! Các file đã được lưu tại: $outputFolder" -ForegroundColor Yellow