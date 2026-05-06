// File database.js - Quản lý danh mục văn bản
const LEXVIET_DATABASE = [
  { 
    id: 1, 
    soHieu: "100/2015/QH13", 
    tenVanBan: "Bộ luật Hình sự 2015", 
    coQuan: "Quốc hội", 
    ngayBanHanh: "27/11/2015", 
    hieu: "Còn hiệu lực", 
    loai: "Bộ luật", 
    linhVuc: [1], 
    tomTat: "Quy định về tội phạm và hình phạt, bảo vệ quyền con người, quyền công dân.", 
    link: "van-ban/bo-luat-hinh-su-2015.html" // Đường dẫn tới file nội dung chi tiết
  },
  { 
    id: 2, 
    soHieu: "91/2015/QH13", 
    tenVanBan: "Bộ luật Dân sự 2015", 
    coQuan: "Quốc hội", 
    ngayBanHanh: "24/11/2015", 
    hieu: "Còn hiệu lực", 
    loai: "Bộ luật", 
    linhVuc: [2], 
    tomTat: "Quy định địa vị pháp lý, chuẩn mực pháp lý về cách ứng xử của cá nhân, pháp nhân.", 
    link: "van-ban/bo-luat-dan-su-2015.html"
  },
  // Anh có thể copy paste thêm các văn bản khác vào đây theo mẫu trên
];