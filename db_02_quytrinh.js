// ================================================================
// db_02_quytrinh.js – QUY TRÌNH NGHIỆP VỤ KIỂM SÁT
// VKSND TP. Cần Thơ – Hệ thống LEXVIET
// ----------------------------------------------------------------
// Cấu trúc mỗi bản ghi:
//   id           : string   – VD: "qt-01"
//   maQuyTrinh   : string   – Mã định danh, VD: "QT-KS-01"
//   tieuDe       : string   – Tên đầy đủ quy trình
//   loai         : string   – "Hình sự" | "Dân sự" | "Hành chính" | "Tố tụng hình sự" | ...
//   capDo        : string   – Cấp ban hành
//   ngayBanHanh  : string   – DD/MM/YYYY
//   moTa         : string   – Mô tả tổng quát
//   cacBuoc      : string[] – Các bước thực hiện (theo thứ tự)
//   vanBanCanCu  : string[] – Số hiệu văn bản căn cứ
//   trangThai    : string   – "Đang áp dụng" | "Đã thay thế" | "Tạm dừng"
//   file         : string   – Tên file CHM (nếu có), để "" nếu không có
// ================================================================

const DB_QUY_TRINH = [

  {
    id: "qt-01",
    maQuyTrinh: "QT-KS-01",
    tieuDe: "Quy trình kiểm sát việc tiếp nhận, giải quyết tố giác, tin báo tội phạm",
    loai: "Hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "15/03/2024",
    moTa: "Quy trình hướng dẫn kiểm sát viên thực hiện kiểm sát việc tiếp nhận, phân loại và giải quyết tố giác, tin báo về tội phạm tại Cơ quan điều tra.",
    cacBuoc: [
      "Tiếp nhận thông tin tố giác, tin báo tội phạm từ CQĐT",
      "Kiểm sát việc thụ lý, phân loại hồ sơ tại CQĐT",
      "Ban hành văn bản yêu cầu điều tra (nếu có vi phạm)",
      "Kiểm sát kết quả giải quyết trong thời hạn quy định (20 ngày)",
      "Tổng hợp, báo cáo định kỳ lên VKSND cấp trên"
    ],
    vanBanCanCu: ["92/2015/QH13", "04/2024/TT-VKSNDTC"],
    trangThai: "Đang áp dụng",
    file: ""
  },
  {
    id: "qt-02",
    maQuyTrinh: "QT-KS-02",
    tieuDe: "Quy trình kiểm sát điều tra vụ án hình sự",
    loai: "Hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "15/03/2024",
    moTa: "Hướng dẫn toàn bộ quy trình kiểm sát hoạt động điều tra từ khi khởi tố vụ án đến khi kết thúc điều tra, đảm bảo tuân thủ đúng pháp luật tố tụng.",
    cacBuoc: [
      "Kiểm sát quyết định khởi tố vụ án, khởi tố bị can",
      "Kiểm sát lệnh bắt, tạm giữ, tạm giam – đảm bảo đúng thời hạn",
      "Kiểm sát hoạt động khám xét, thu giữ, tạm giữ tài sản",
      "Kiểm sát việc áp dụng, thay đổi, hủy bỏ biện pháp ngăn chặn",
      "Kiểm sát kết luận điều tra và đề nghị truy tố",
      "Quyết định truy tố hoặc đình chỉ vụ án"
    ],
    vanBanCanCu: ["92/2015/QH13", "100/2015/QH13", "04/2024/TT-VKSNDTC"],
    trangThai: "Đang áp dụng",
    file: ""
  },
  {
    id: "qt-03",
    maQuyTrinh: "QT-QCT-03",
    tieuDe: "Quy trình thực hành quyền công tố tại phiên tòa hình sự sơ thẩm",
    loai: "Tố tụng hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "20/03/2024",
    moTa: "Quy trình hướng dẫn kiểm sát viên chuẩn bị và thực hành quyền công tố tại phiên tòa hình sự sơ thẩm, đảm bảo chất lượng tranh tụng.",
    cacBuoc: [
      "Nghiên cứu hồ sơ toàn diện, chuẩn bị đề cương thẩm vấn",
      "Chuẩn bị luận điểm tranh tụng, dự kiến tình huống",
      "Công bố cáo trạng tại phiên tòa",
      "Thực hiện thẩm vấn bị cáo, người làm chứng, bị hại",
      "Đối đáp, tranh tụng với luật sư bào chữa",
      "Phát biểu luận tội và đề nghị mức hình phạt",
      "Kiểm sát bản án sau phiên tòa, xem xét kháng nghị"
    ],
    vanBanCanCu: ["92/2015/QH13", "100/2015/QH13"],
    trangThai: "Đang áp dụng",
    file: ""
  },
  {
    id: "qt-04",
    maQuyTrinh: "QT-KSTHAS-04",
    tieuDe: "Quy trình kiểm sát thi hành án dân sự",
    loai: "Dân sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "01/04/2024",
    moTa: "Quy trình kiểm sát các hoạt động thi hành án dân sự của Cục Thi hành án dân sự TP. Cần Thơ và các Chi cục trực thuộc.",
    cacBuoc: [
      "Lập kế hoạch kiểm sát định kỳ / đột xuất",
      "Thu thập hồ sơ, quyết định thi hành án",
      "Kiểm tra việc ra quyết định thi hành án đúng hạn",
      "Kiểm tra biên bản cưỡng chế, kê biên tài sản",
      "Kiểm tra việc tổ chức bán đấu giá tài sản",
      "Ban hành kết luận kiểm sát và kiến nghị khắc phục",
      "Theo dõi kết quả thực hiện kiến nghị"
    ],
    vanBanCanCu: ["93/2015/QH13"],
    trangThai: "Đang áp dụng",
    file: ""
  },
  {
    id: "qt-05",
    maQuyTrinh: "QT-KNTC-05",
    tieuDe: "Quy trình giải quyết đơn khiếu nại, tố cáo trong hoạt động tư pháp",
    loai: "Hành chính",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "05/04/2024",
    moTa: "Hướng dẫn quy trình tiếp nhận, phân loại và giải quyết đơn khiếu nại, tố cáo liên quan đến hoạt động tư pháp thuộc thẩm quyền của VKSND TP. Cần Thơ.",
    cacBuoc: [
      "Tiếp nhận đơn thư – vào sổ theo dõi ngay trong ngày",
      "Phân loại: khiếu nại / tố cáo / kiến nghị / phản ánh",
      "Thụ lý hoặc chuyển cơ quan có thẩm quyền trong 7 ngày",
      "Xác minh nội dung – thu thập hồ sơ liên quan",
      "Ban hành quyết định giải quyết đúng thời hạn",
      "Gửi văn bản trả lời người khiếu nại, tố cáo",
      "Lưu trữ hồ sơ vụ việc theo quy định"
    ],
    vanBanCanCu: ["63/2014/QH13"],
    trangThai: "Đang áp dụng",
    file: ""
  },
  {
    id: "qt-06",
    maQuyTrinh: "QT-KSTGTG-06",
    tieuDe: "Quy trình kiểm sát tạm giữ, tạm giam",
    loai: "Hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "10/04/2024",
    moTa: "Quy trình kiểm sát việc tạm giữ, tạm giam tại Nhà tạm giữ, Trại tạm giam trên địa bàn TP. Cần Thơ, đảm bảo quyền của người bị tạm giữ, tạm giam.",
    cacBuoc: [
      "Lập kế hoạch kiểm sát định kỳ (hàng tháng)",
      "Kiểm tra hồ sơ lệnh tạm giữ, tạm giam – đúng thẩm quyền",
      "Kiểm tra thời hạn tạm giữ, tạm giam theo từng vụ án",
      "Kiểm tra điều kiện giam giữ, chế độ sinh hoạt của bị can",
      "Tiếp nhận và giải quyết đơn khiếu nại của người bị giam giữ",
      "Ban hành kết luận kiểm sát và kiến nghị khắc phục vi phạm"
    ],
    vanBanCanCu: ["92/2015/QH13"],
    trangThai: "Đang áp dụng",
    file: ""
  },

  // ─────────────────────────────────────────────────────────────
  // THÊM QUY TRÌNH MỚI VÀO PHÍA DƯỚI ĐÂY
  // ─────────────────────────────────────────────────────────────
  // {
  //   id: "qt-07",
  //   maQuyTrinh: "QT-XX-07",
  //   tieuDe: "",
  //   loai: "",
  //   capDo: "VKSND TP. Cần Thơ",
  //   ngayBanHanh: "",
  //   moTa: "",
  //   cacBuoc: [],
  //   vanBanCanCu: [],
  //   trangThai: "Đang áp dụng",
  //   file: ""
  // },

];
