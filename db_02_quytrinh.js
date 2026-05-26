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
  // QUY TRÌNH BỔ SUNG TỪ HỆ THỐNG DÂN SỰ & HÀNH CHÍNH
  // ─────────────────────────────────────────────────────────────
  {
    id: "qt-07",
    maQuyTrinh: "QT-XX-07",
    tieuDe: "Quy trình kiểm sát án Dân sự (Sơ thẩm, Phúc thẩm, GĐT/TT)",
    loai: "Dân sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "15/05/2024",
    moTa: "Hệ thống quy trình kiểm sát án dân sự qua các giai đoạn sơ thẩm, phúc thẩm và giám đốc thẩm/tái thẩm, xử lý vi phạm và ban hành kiến nghị/kháng nghị.",
    cacBuoc: [
      "[Sơ thẩm] Bước 1: Yêu cầu Tòa án chuyển Thông báo thụ lý/Quyết định trả lại đơn. Kiểm tra thẩm quyền, thời hiệu, điều kiện khởi kiện.",
      "[Sơ thẩm] Bước 2: Kiểm sát các quyết định áp dụng/hủy bỏ BPKCTT. Tham gia lấy lời khai, đối chất, xem xét thẩm định tại chỗ.",
      "[Sơ thẩm] Bước 3: Trích cứu hồ sơ, lập Báo cáo đề xuất. Tham gia phiên tòa, hỏi làm rõ tình tiết, phát biểu quan điểm của VKS.",
      "[Sơ thẩm] Bước 4: Nhận và kiểm sát hình thức, nội dung bản án. Dự thảo Quyết định Kháng nghị Phúc thẩm nếu có vi phạm nghiêm trọng.",
      "[Phúc thẩm] Bước 1: Kiểm tra tính hợp lệ của đơn kháng cáo, thời hạn nộp. Kiểm sát Thông báo thụ lý phúc thẩm.",
      "[Phúc thẩm] Bước 2: Nghiên cứu hồ sơ tài liệu mới, lập Báo cáo án. Tham gia phiên tòa phát biểu quan điểm.",
      "[GĐT/TT] Bước 1: Tiếp nhận đơn, rút hồ sơ gốc từ Tòa án. Nghiên cứu xác định sai lầm nghiêm trọng (GĐT) hoặc tình tiết mới (TT).",
      "[GĐT/TT] Bước 2: KSV tham gia phiên tòa bảo vệ Quyết định kháng nghị của VKS và kiểm sát Quyết định GĐT/TT."
    ],
    vanBanCanCu: ["92/2015/QH13"],
    trangThai: "Đang áp dụng",
    file: ""
  },
  {
    id: "qt-08",
    maQuyTrinh: "QT-XX-08",
    tieuDe: "Quy trình kiểm sát án Hành chính (Sơ thẩm, Phúc thẩm, GĐT/TT)",
    loai: "Hành chính",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "20/05/2024",
    moTa: "Hệ thống quy trình kiểm sát án hành chính qua các giai đoạn sơ thẩm, phúc thẩm, giám đốc thẩm/tái thẩm, tập trung vào đối thoại và tính hợp pháp của Quyết định/Hành vi hành chính.",
    cacBuoc: [
      "[Sơ thẩm] Bước 1: Kiểm tra đối tượng khởi kiện, thời hiệu, điều kiện khởi kiện. Báo cáo Lãnh đạo ký Kiến nghị nếu Tòa trả lại đơn sai.",
      "[Sơ thẩm] Bước 2: Kiểm sát quá trình đối thoại. KSV trực tiếp tiến hành xác minh thu thập chứng cứ nếu Tòa án không thực hiện.",
      "[Sơ thẩm] Bước 3: Lập Báo cáo đề xuất đánh giá tính hợp pháp của QĐHC/HVHC. Trình bày Bài phát biểu tại phiên tòa và kiểm sát Bản án.",
      "[Phúc thẩm] Bước 1: Kiểm sát thụ lý phúc thẩm. Rút hồ sơ, phân tích kháng cáo/kháng nghị và tham gia phiên tòa Phúc thẩm.",
      "[GĐT/TT] Bước 1: Tiếp nhận đơn, rút hồ sơ gốc. Dự thảo Quyết định Kháng nghị GĐT/TT nếu có vi phạm/tình tiết mới và bảo vệ kháng nghị tại phiên tòa."
    ],
    vanBanCanCu: ["93/2015/QH13"],
    trangThai: "Đang áp dụng",
    file: ""
  }
];

// Export để sử dụng trong các file khác (tuỳ thuộc vào framework đang dùng)
export default DB_QUY_TRINH;