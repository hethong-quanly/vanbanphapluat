import json
import csv

# Đường dẫn file JSON của bạn
json_file = r"D:\vbpl_database.json"     
csv_file  = r"D:\documents.csv"   

with open(json_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Các cột cần xuất (phải khớp với bảng Supabase)
fieldnames = ['id', 'title', 'content', 'filename', 'category', 'created_at']

with open(csv_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    
    for item in data:
        writer.writerow({
            'id': item.get('id', ''),
            'title': item.get('title', ''),
            'content': item.get('content', ''),
            'filename': item.get('filename', ''),
            'category': item.get('category', ''),   # Nếu chưa có thì để trống hoặc tự gán
            'created_at': item.get('created_at', '')
        })

print(f"✅ Đã tạo file CSV tại: {csv_file}")
print(f"Tổng số dòng: {len(data)}")
