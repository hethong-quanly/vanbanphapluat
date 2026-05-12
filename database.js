// ============================================================
// FILE: database.js - VKSND TP. Cần Thơ
// Cơ sở dữ liệu văn bản pháp luật và nghiệp vụ kiểm sát
// ============================================================

// ============================================================
// MODULE 1: VĂN BẢN PHÁP LUẬT
// ============================================================
const VKS_DATABASE = [
  // --- BỘ LUẬT ---
  {
    id: 1,
    soHieu: "100/2015/QH13",
    tenVanBan: "Bộ luật Hình sự 2015 (sửa đổi, bổ sung 2017)",
    coQuan: "Quốc hội",
    ngayBanHanh: "27/11/2015",
    ngayHieuLuc: "01/01/2018",
    hieu: "Còn hiệu lực",
    loai: "Bộ luật",
    linhVuc: [1],
    tomTat: "Quy định về tội phạm và hình phạt, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa, quyền, lợi ích hợp pháp của tổ chức.",
    link: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/7/86qh.signed.pdf",
    tags: ["hình sự", "tội phạm", "hình phạt"]
  },
  {
    id: 2,
    soHieu: "91/2015/QH13",
    tenVanBan: "Bộ luật Dân sự 2015",
    coQuan: "Quốc hội",
    ngayBanHanh: "24/11/2015",
    ngayHieuLuc: "01/01/2017",
    hieu: "Còn hiệu lực",
    loai: "Bộ luật",
    linhVuc: [2],
    tomTat: "Quy định địa vị pháp lý, chuẩn mực pháp lý về cách ứng xử của cá nhân, pháp nhân; quyền, nghĩa vụ về nhân thân và tài sản của cá nhân, pháp nhân trong quan hệ dân sự.",
    link: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/7/85qh.signed.pdf",
    tags: ["dân sự", "tài sản", "hợp đồng"]
  },
  {
    id: 3,
    soHieu: "92/2015/QH13",
    tenVanBan: "Bộ luật Tố tụng Hình sự 2015",
    coQuan: "Quốc hội",
    ngayBanHanh: "27/11/2015",
    ngayHieuLuc: "01/01/2018",
    hieu: "Còn hiệu lực",
    loai: "Bộ luật",
    linhVuc: [16, 1],
    tomTat: "Quy định trình tự, thủ tục tiếp nhận, giải quyết nguồn tin về tội phạm, khởi tố, điều tra, truy tố, xét xử và thi hành án hình sự.",
    link: "https://thuvienphapluat.vn/van-ban/Trach-nhiem-hinh-su/Bo-luat-to-tung-hinh-su-2015-296884.aspx",
    tags: ["tố tụng hình sự", "điều tra", "xét xử"]
  },
  {
    id: 4,
    soHieu: "93/2015/QH13",
    tenVanBan: "Bộ luật Tố tụng Dân sự 2015",
    coQuan: "Quốc hội",
    ngayBanHanh: "25/11/2015",
    ngayHieuLuc: "01/07/2016",
    hieu: "Còn hiệu lực",
    loai: "Bộ luật",
    linhVuc: [16, 2],
    tomTat: "Quy định những nguyên tắc cơ bản trong tố tụng dân sự; trình tự, thủ tục khởi kiện để Tòa án nhân dân giải quyết các vụ án về tranh chấp dân sự.",
    link: "https://thuvienphapluat.vn/van-ban/Thu-tuc-To-tung/Bo-luat-to-tung-dan-su-2015-296861.aspx",
    tags: ["tố tụng dân sự", "khởi kiện", "tòa án"]
  },
  // --- LUẬT ---
  {
    id: 5,
    soHieu: "31/2004/QH11",
    tenVanBan: "Luật Tổ chức Viện kiểm sát nhân dân 2014",
    coQuan: "Quốc hội",
    ngayBanHanh: "24/11/2014",
    ngayHieuLuc: "01/06/2015",
    hieu: "Còn hiệu lực",
    loai: "Luật",
    linhVuc: [3, 16],
    tomTat: "Quy định về chức năng, nhiệm vụ, quyền hạn và tổ chức bộ máy của Viện kiểm sát nhân dân; bảo đảm điều kiện hoạt động của Viện kiểm sát nhân dân.",
    link: "https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-to-chuc-Vien-kiem-sat-nhan-dan-2014-261936.aspx",
    tags: ["VKS", "kiểm sát", "tổ chức"]
  },
  {
    id: 6,
    soHieu: "31/2024/QH15",
    tenVanBan: "Luật Đất đai 2024",
    coQuan: "Quốc hội",
    ngayBanHanh: "18/01/2024",
    ngayHieuLuc: "01/08/2024",
    hieu: "Còn hiệu lực",
    loai: "Luật",
    linhVuc: [6],
    tomTat: "Quy định về chế độ sở hữu đất đai, quyền hạn và trách nhiệm của Nhà nước đại diện chủ sở hữu toàn dân về đất đai và thống nhất quản lý về đất đai.",
    link: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2024/1/31.signed.pdf",
    tags: ["đất đai", "quyền sử dụng đất", "thu hồi đất"]
  },
  {
    id: 7,
    soHieu: "45/2019/QH14",
    tenVanBan: "Bộ luật Lao động 2019",
    coQuan: "Quốc hội",
    ngayBanHanh: "20/11/2019",
    ngayHieuLuc: "01/01/2021",
    hieu: "Còn hiệu lực",
    loai: "Bộ luật",
    linhVuc: [5],
    tomTat: "Quy định tiêu chuẩn lao động; quyền, nghĩa vụ, trách nhiệm của người lao động, người sử dụng lao động, tổ chức đại diện người lao động tại cơ sở.",
    link: "https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Bo-luat-Lao-dong-2019-333670.aspx",
    tags: ["lao động", "hợp đồng lao động", "sa thải"]
  },
  {
    id: 8,
    soHieu: "36/2018/QH14",
    tenVanBan: "Luật Phòng chống tham nhũng 2018",
    coQuan: "Quốc hội",
    ngayBanHanh: "20/11/2018",
    ngayHieuLuc: "01/07/2019",
    hieu: "Còn hiệu lực",
    loai: "Luật",
    linhVuc: [19],
    tomTat: "Quy định về phòng ngừa, phát hiện tham nhũng; xử lý tham nhũng và hành vi khác vi phạm pháp luật về phòng, chống tham nhũng.",
    link: "https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-2018-333681.aspx",
    tags: ["tham nhũng", "phòng chống", "kê khai tài sản"]
  },
  {
    id: 9,
    soHieu: "59/2020/QH14",
    tenVanBan: "Luật Doanh nghiệp 2020",
    coQuan: "Quốc hội",
    ngayBanHanh: "17/06/2020",
    ngayHieuLuc: "01/01/2021",
    hieu: "Còn hiệu lực",
    loai: "Luật",
    linhVuc: [8],
    tomTat: "Quy định về việc thành lập, tổ chức quản lý, tổ chức lại, giải thể và hoạt động có liên quan của doanh nghiệp, bao gồm công ty TNHH, công ty cổ phần, công ty hợp danh và doanh nghiệp tư nhân.",
    link: "https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Luat-Doanh-nghiep-2020-425174.aspx",
    tags: ["doanh nghiệp", "công ty", "thành lập"]
  },
  {
    id: 10,
    soHieu: "13/2023/NĐ-CP",
    tenVanBan: "Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân",
    coQuan: "Chính phủ",
    ngayBanHanh: "17/04/2023",
    ngayHieuLuc: "01/07/2023",
    hieu: "Còn hiệu lực",
    loai: "Nghị định",
    linhVuc: [15],
    tomTat: "Quy định về bảo vệ dữ liệu cá nhân và trách nhiệm bảo vệ dữ liệu cá nhân của cơ quan, tổ chức, cá nhân có liên quan.",
    link: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2023/4/13nd.signed.pdf",
    tags: ["dữ liệu cá nhân", "bảo vệ", "an ninh mạng"]
  },
  {
    id: 11,
    soHieu: "144/2021/NĐ-CP",
    tenVanBan: "Nghị định 144/2021/NĐ-CP quy định xử phạt VPHC lĩnh vực ANTT",
    coQuan: "Chính phủ",
    ngayBanHanh: "31/12/2021",
    ngayHieuLuc: "01/01/2022",
    hieu: "Còn hiệu lực",
    loai: "Nghị định",
    linhVuc: [3, 1],
    tomTat: "Quy định về hành vi vi phạm hành chính, hình thức, mức xử phạt, biện pháp khắc phục hậu quả trong lĩnh vực an ninh, trật tự, an toàn xã hội.",
    link: "https://thuvienphapluat.vn/van-ban/Vi-pham-hanh-chinh/Nghi-dinh-144-2021-ND-CP-xu-phat-vi-pham-hanh-chinh-an-ninh-trat-tu-497488.aspx",
    tags: ["vi phạm hành chính", "xử phạt", "an ninh trật tự"]
  },
  {
    id: 12,
    soHieu: "04/2024/TT-VKSNDTC",
    tenVanBan: "Thông tư 04/2024/TT-VKSNDTC quy định quy trình kiểm sát",
    coQuan: "VKSND Tối cao",
    ngayBanHanh: "10/05/2024",
    ngayHieuLuc: "25/06/2024",
    hieu: "Còn hiệu lực",
    loai: "Thông tư",
    linhVuc: [16, 1],
    tomTat: "Quy định quy trình kiểm sát việc tiếp nhận, giải quyết nguồn tin về tội phạm và kiểm sát điều tra vụ án hình sự.",
    link: "https://vksndtc.gov.vn/",
    tags: ["kiểm sát", "quy trình", "điều tra hình sự"]
  },
  {
    id: 13,
    soHieu: "02/2024/TT-BTP",
    tenVanBan: "Thông tư 02/2024/TT-BTP hướng dẫn thi hành Luật Đất đai 2024",
    coQuan: "Bộ Tư pháp",
    ngayBanHanh: "22/05/2024",
    ngayHieuLuc: "05/07/2024",
    hieu: "Còn hiệu lực",
    loai: "Thông tư",
    linhVuc: [6],
    tomTat: "Hướng dẫn chi tiết một số điều của Luật Đất đai 2024 về trình tự, thủ tục đăng ký đất đai, cấp Giấy chứng nhận quyền sử dụng đất.",
    link: "https://moj.gov.vn/",
    tags: ["đất đai", "sổ đỏ", "đăng ký đất đai"]
  },
  {
    id: 14,
    soHieu: "01/2024/NQ-HĐTP",
    tenVanBan: "Nghị quyết 01/2024/NQ-HĐTP hướng dẫn áp dụng một số quy định BLHS",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "19/04/2024",
    ngayHieuLuc: "15/05/2024",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [1],
    tomTat: "Hướng dẫn áp dụng một số quy định của Bộ luật Hình sự về tội phạm liên quan đến tham nhũng và chức vụ trong lĩnh vực kinh tế.",
    link: "https://toaan.gov.vn/",
    tags: ["hình sự", "tham nhũng", "hướng dẫn xét xử"]
  },
  {
    id: 15,
    soHieu: "56/2021/QH15",
    tenVanBan: "Luật Thi hành án hình sự 2019 (sửa đổi)",
    coQuan: "Quốc hội",
    ngayBanHanh: "14/06/2019",
    ngayHieuLuc: "01/01/2020",
    hieu: "Còn hiệu lực",
    loai: "Luật",
    linhVuc: [17, 1],
    tomTat: "Quy định nguyên tắc, trình tự, thủ tục thi hành bản án, quyết định hình sự; quyền, nghĩa vụ của phạm nhân và trách nhiệm của cơ quan, tổ chức, cá nhân liên quan.",
    link: "https://thuvienphapluat.vn/van-ban/Trach-nhiem-hinh-su/Luat-Thi-hanh-an-hinh-su-2019-381535.aspx",
    tags: ["thi hành án hình sự", "phạm nhân", "trại giam"]
  },
];

// ============================================================
// MODULE 2: QUY TRÌNH NGHIỆP VỤ KIỂM SÁT
// ============================================================
const VKS_QUY_TRINH = [
  {
    id: "qt-01",
    tieuDe: "Quy trình kiểm sát việc tiếp nhận, giải quyết tố giác, tin báo tội phạm",
    maQuyTrinh: "QT-KS-01",
    loai: "Hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "15/03/2024",
    moTa: "Quy trình hướng dẫn kiểm sát viên thực hiện kiểm sát việc tiếp nhận, phân loại và giải quyết tố giác, tin báo về tội phạm tại Cơ quan điều tra.",
    cacBuoc: [
      "Tiếp nhận thông tin tố giác, tin báo tội phạm",
      "Kiểm sát việc thụ lý, phân loại hồ sơ tại CQĐT",
      "Ban hành văn bản yêu cầu điều tra (nếu có)",
      "Kiểm sát kết quả giải quyết trong thời hạn quy định",
      "Tổng hợp báo cáo định kỳ"
    ],
    vanBanCanCu: ["92/2015/QH13", "04/2024/TT-VKSNDTC"],
    trangThai: "Đang áp dụng"
  },
  {
    id: "qt-02",
    tieuDe: "Quy trình kiểm sát điều tra vụ án hình sự",
    maQuyTrinh: "QT-KS-02",
    loai: "Hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "15/03/2024",
    moTa: "Hướng dẫn toàn bộ quy trình kiểm sát hoạt động điều tra từ khi khởi tố vụ án đến khi kết thúc điều tra, đảm bảo tuân thủ đúng pháp luật.",
    cacBuoc: [
      "Kiểm sát quyết định khởi tố vụ án, khởi tố bị can",
      "Kiểm sát lệnh bắt, tạm giữ, tạm giam",
      "Kiểm sát hoạt động khám xét, thu giữ, tạm giữ tài sản",
      "Kiểm sát kết luận điều tra và đề nghị truy tố",
      "Quyết định truy tố hoặc đình chỉ vụ án"
    ],
    vanBanCanCu: ["92/2015/QH13", "100/2015/QH13", "04/2024/TT-VKSNDTC"],
    trangThai: "Đang áp dụng"
  },
  {
    id: "qt-03",
    tieuDe: "Quy trình thực hành quyền công tố tại phiên tòa hình sự sơ thẩm",
    maQuyTrinh: "QT-QCT-03",
    loai: "Tố tụng hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "20/03/2024",
    moTa: "Quy trình hướng dẫn kiểm sát viên chuẩn bị và thực hành quyền công tố tại phiên tòa hình sự sơ thẩm, đảm bảo chất lượng tranh tụng.",
    cacBuoc: [
      "Nghiên cứu hồ sơ, chuẩn bị bản cáo trạng",
      "Chuẩn bị luận điểm tranh tụng tại phiên tòa",
      "Công bố cáo trạng tại phiên tòa",
      "Đối đáp, tranh tụng với luật sư bào chữa",
      "Phát biểu quan điểm của VKS về xử lý vụ án",
      "Kiểm sát bản án sau phiên tòa"
    ],
    vanBanCanCu: ["92/2015/QH13", "100/2015/QH13"],
    trangThai: "Đang áp dụng"
  },
  {
    id: "qt-04",
    tieuDe: "Quy trình kiểm sát thi hành án dân sự",
    maQuyTrinh: "QT-KSTHAS-04",
    loai: "Dân sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "01/04/2024",
    moTa: "Quy trình kiểm sát các hoạt động thi hành án dân sự của Cục Thi hành án dân sự TP. Cần Thơ và các Chi cục trực thuộc.",
    cacBuoc: [
      "Lập kế hoạch kiểm sát định kỳ/đột xuất",
      "Thu thập tài liệu, hồ sơ thi hành án",
      "Kiểm tra việc ra quyết định thi hành án",
      "Kiểm tra biên bản cưỡng chế, kê biên tài sản",
      "Ban hành kết luận kiểm sát và kiến nghị"
    ],
    vanBanCanCu: ["93/2015/QH13"],
    trangThai: "Đang áp dụng"
  },
  {
    id: "qt-05",
    tieuDe: "Quy trình giải quyết đơn khiếu nại, tố cáo trong hoạt động tư pháp",
    maQuyTrinh: "QT-KNTC-05",
    loai: "Hành chính",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "05/04/2024",
    moTa: "Hướng dẫn quy trình tiếp nhận, phân loại và giải quyết đơn khiếu nại, tố cáo liên quan đến hoạt động tư pháp thuộc thẩm quyền của VKSND TP. Cần Thơ.",
    cacBuoc: [
      "Tiếp nhận và vào sổ theo dõi đơn thư",
      "Phân loại: khiếu nại / tố cáo / kiến nghị",
      "Xác minh nội dung đơn thư",
      "Ban hành quyết định giải quyết",
      "Trả lời cho người khiếu nại, tố cáo",
      "Lưu trữ hồ sơ vụ việc"
    ],
    vanBanCanCu: ["31/2004/QH11"],
    trangThai: "Đang áp dụng"
  },
  {
    id: "qt-06",
    tieuDe: "Quy trình kiểm sát tạm giữ, tạm giam",
    maQuyTrinh: "QT-KSTGTG-06",
    loai: "Hình sự",
    capDo: "VKSND TP. Cần Thơ",
    ngayBanHanh: "10/04/2024",
    moTa: "Quy trình kiểm sát việc tạm giữ, tạm giam tại Nhà tạm giữ, Trại tạm giam trên địa bàn TP. Cần Thơ, đảm bảo quyền của người bị tạm giữ, tạm giam.",
    cacBuoc: [
      "Lập kế hoạch kiểm sát định kỳ",
      "Kiểm tra hồ sơ lệnh tạm giữ, tạm giam",
      "Kiểm tra điều kiện giam giữ, sinh hoạt của bị can",
      "Tiếp nhận đơn khiếu nại của người bị giam giữ",
      "Ban hành kết luận và kiến nghị khắc phục"
    ],
    vanBanCanCu: ["92/2015/QH13"],
    trangThai: "Đang áp dụng"
  },
];

// ============================================================
// MODULE 3: THÔNG BÁO RÚT KINH NGHIỆM
// ============================================================
const VKS_RUT_KINH_NGHIEM = [
  {
    id: "rkn-001",
    soThongBao: "01/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về việc kiểm sát viên không phát hiện kịp thời vi phạm thủ tục tố tụng trong giai đoạn điều tra",
    ngayBanHanh: "15/01/2024",
    linhVuc: "Hình sự",
    noiDungViPham: "Trong quá trình kiểm sát điều tra vụ án cố ý gây thương tích, kiểm sát viên không kịp thời phát hiện Cơ quan điều tra vi phạm thời hạn điều tra theo quy định tại Điều 174 BLTTHS 2015.",
    baiHoc: "Kiểm sát viên cần theo dõi chặt chẽ thời hạn tố tụng; lập bảng theo dõi thời hạn điều tra cho từng vụ án được phân công.",
    bienPhap: "Phân công kiểm sát viên chuyên trách theo dõi thời hạn; tổ chức kiểm tra định kỳ hàng tháng.",
    capBanHanh: "VKSND TP. Cần Thơ"
  },
  {
    id: "rkn-002",
    soThongBao: "02/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về chất lượng bản cáo trạng còn thiếu căn cứ pháp lý trong vụ án kinh tế",
    ngayBanHanh: "20/02/2024",
    linhVuc: "Kinh tế",
    noiDungViPham: "Bản cáo trạng trong vụ án lừa đảo chiếm đoạt tài sản bị Hội đồng xét xử nhận xét còn thiếu phân tích về yếu tố 'thủ đoạn gian dối' theo cấu thành tội phạm Điều 174 BLHS.",
    baiHoc: "Cáo trạng phải phân tích đầy đủ 04 yếu tố cấu thành tội phạm: Chủ thể - Khách thể - Mặt khách quan - Mặt chủ quan.",
    bienPhap: "Tổ chức tập huấn kỹ năng viết cáo trạng; thành lập tổ kiểm tra chất lượng cáo trạng trước khi ban hành.",
    capBanHanh: "VKSND TP. Cần Thơ"
  },
  {
    id: "rkn-003",
    soThongBao: "03/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về kiểm sát việc giải quyết tố giác tội phạm quá hạn",
    ngayBanHanh: "10/03/2024",
    linhVuc: "Hình sự",
    noiDungViPham: "Cơ quan Cảnh sát điều tra để 03 vụ tố giác tội phạm quá thời hạn giải quyết 02 tháng (thay vì 20 ngày theo Điều 147 BLTTHS) nhưng không bị phát hiện kịp thời.",
    baiHoc: "Kiểm sát viên được phân công phải kiểm tra sổ thụ lý tố giác tội phạm ít nhất mỗi tuần một lần.",
    bienPhap: "Xây dựng phần mềm theo dõi thời hạn tố giác tội phạm; giao chỉ tiêu kiểm sát cụ thể cho từng kiểm sát viên.",
    capBanHanh: "VKSND TP. Cần Thơ"
  },
  {
    id: "rkn-004",
    soThongBao: "04/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về tranh tụng tại phiên tòa - trường hợp không phản bác được luận điểm của luật sư bào chữa",
    ngayBanHanh: "25/04/2024",
    linhVuc: "Tố tụng hình sự",
    noiDungViPham: "Tại phiên tòa xét xử vụ án ma túy, kiểm sát viên không đối đáp được luận điểm của luật sư về vi phạm trong hoạt động thu thập chứng cứ, dẫn đến Tòa trả hồ sơ điều tra bổ sung.",
    baiHoc: "Kiểm sát viên cần chuẩn bị kỹ phương án đối đáp với các tình huống luật sư có thể đặt ra; nắm vững quy định về thu thập, đánh giá chứng cứ.",
    bienPhap: "Thực hành tranh tụng giả định (mock trial) trước các vụ án phức tạp; mời chuyên gia pháp lý hỗ trợ.",
    capBanHanh: "VKSND TP. Cần Thơ"
  },
  {
    id: "rkn-005",
    soThongBao: "05/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về kiểm sát thi hành án dân sự - bỏ sót vi phạm trong kê biên tài sản",
    ngayBanHanh: "15/05/2024",
    linhVuc: "Dân sự",
    noiDungViPham: "Chấp hành viên kê biên tài sản không đúng thủ tục (thiếu sự chứng kiến của đại diện chính quyền địa phương) theo Điều 93 Luật THADS nhưng kiểm sát viên không phát hiện.",
    baiHoc: "Khi kiểm sát biên bản kê biên, phải đối chiếu từng bước thủ tục với Điều 93 và các điều khoản liên quan của Luật THADS.",
    bienPhap: "Lập checklist kiểm tra biên bản kê biên; tăng cường kiểm sát trực tiếp tại hiện trường kê biên.",
    capBanHanh: "VKSND TP. Cần Thơ"
  },
];

// ============================================================
// MODULE 3B: VĂN BẢN NGHIỆP VỤ TỪ FILE CHM
// (Công văn, Hướng dẫn, Quyết định, Chỉ thị của VKSND, TAND, BCA)
// ============================================================
const VKS_CONG_VAN = [
  // --- CÔNG VĂN VKSND TỐI CAO ---
  { id:"cv-001", soHieu:"CV1083-2024VKSTC", tenVanBan:"Công văn 1083/2024/VKSTC về hướng dẫn nghiệp vụ kiểm sát", coQuan:"VKSND Tối cao", nam:2024, linhVuc:"Hình sự", loai:"Công văn", file:"CV1083-2024VKSTC.htm" },
  { id:"cv-002", soHieu:"CV1179-2024VKSTC", tenVanBan:"Công văn 1179/2024/VKSTC về kiểm sát thi hành án", coQuan:"VKSND Tối cao", nam:2024, linhVuc:"Thi hành án", loai:"Công văn", file:"CV1179-2024VKSTC.htm" },
  { id:"cv-003", soHieu:"CV183-2025VKSTC", tenVanBan:"Công văn 183/2025/VKSTC hướng dẫn nghiệp vụ 2025", coQuan:"VKSND Tối cao", nam:2025, linhVuc:"Nghiệp vụ chung", loai:"Công văn", file:"CV183-2025VKSTC.htm" },
  { id:"cv-004", soHieu:"CV1790-2026VKSTC", tenVanBan:"Công văn 1790/2026/VKSTC về kiểm sát dân sự", coQuan:"VKSND Tối cao", nam:2026, linhVuc:"Dân sự", loai:"Công văn", file:"CV1790-2026VKSTC-DS.htm" },
  { id:"cv-005", soHieu:"CV4865-2025KNTC", tenVanBan:"Công văn 4865/2025 về khiếu nại tố cáo trong tư pháp", coQuan:"VKSND Tối cao", nam:2025, linhVuc:"Khiếu nại - Tố cáo", loai:"Công văn", file:"CV4865-2025KNTC.htm" },
  { id:"cv-006", soHieu:"CV3933-2025HS", tenVanBan:"Công văn 3933/2025 hướng dẫn nghiệp vụ hình sự", coQuan:"VKSND Tối cao", nam:2025, linhVuc:"Hình sự", loai:"Công văn", file:"CV3933-2025HS.htm" },
  // --- CÔNG VĂN TAND TỐI CAO ---
  { id:"cv-007", soHieu:"CV100-2023TATC", tenVanBan:"Công văn 100/2023 của TAND Tối cao về áp dụng pháp luật", coQuan:"TAND Tối cao", nam:2023, linhVuc:"Xét xử", loai:"Công văn", file:"CV100-2023TATC.htm" },
  { id:"cv-008", soHieu:"CV163-2024TATC", tenVanBan:"Công văn 163/2024 hướng dẫn xét xử dân sự", coQuan:"TAND Tối cao", nam:2024, linhVuc:"Dân sự", loai:"Công văn", file:"CV163-2024TATC.htm" },
  { id:"cv-009", soHieu:"CV207-2024TATC", tenVanBan:"Công văn 207/2024 về tố tụng hành chính", coQuan:"TAND Tối cao", nam:2024, linhVuc:"Hành chính", loai:"Công văn", file:"CV207-2024TATC.htm" },
  { id:"cv-010", soHieu:"CV285-2025TATC", tenVanBan:"Công văn 285/2025 hướng dẫn giải quyết án", coQuan:"TAND Tối cao", nam:2025, linhVuc:"Nghiệp vụ chung", loai:"Công văn", file:"CV285-2025TATC.htm" },
  // --- HƯỚNG DẪN NGHIỆP VỤ VKSND ---
  { id:"cv-011", soHieu:"HD04-2026VKSTC-HS", tenVanBan:"Hướng dẫn 04/2026/VKSTC về nghiệp vụ hình sự", coQuan:"VKSND Tối cao", nam:2026, linhVuc:"Hình sự", loai:"Hướng dẫn nghiệp vụ", file:"HD04-2026VKSTC-HS.htm" },
  { id:"cv-012", soHieu:"HD05-2026VKSTC-HS", tenVanBan:"Hướng dẫn 05/2026/VKSTC về thực hành quyền công tố", coQuan:"VKSND Tối cao", nam:2026, linhVuc:"Hình sự", loai:"Hướng dẫn nghiệp vụ", file:"HD05-2026VKSTC-HS.htm" },
  { id:"cv-013", soHieu:"HD07-2026VKSTC-DS", tenVanBan:"Hướng dẫn 07/2026/VKSTC về kiểm sát dân sự", coQuan:"VKSND Tối cao", nam:2026, linhVuc:"Dân sự", loai:"Hướng dẫn nghiệp vụ", file:"HD07-2026VKSTC-DS.htm" },
  { id:"cv-014", soHieu:"HD15-2024VKSTC", tenVanBan:"Hướng dẫn 15/2024/VKSTC về kiểm sát thi hành án hình sự", coQuan:"VKSND Tối cao", nam:2024, linhVuc:"Thi hành án hình sự", loai:"Hướng dẫn nghiệp vụ", file:"HD15-2024VKSTC.htm" },
  { id:"cv-015", soHieu:"HD16-2024VKSTC", tenVanBan:"Hướng dẫn 16/2024/VKSTC về kiểm sát giam giữ", coQuan:"VKSND Tối cao", nam:2024, linhVuc:"Giam giữ", loai:"Hướng dẫn nghiệp vụ", file:"HD16-2024VKSTC.htm" },
  { id:"cv-016", soHieu:"HD19-2024VKSTC", tenVanBan:"Hướng dẫn 19/2024/VKSTC nghiệp vụ năm 2024", coQuan:"VKSND Tối cao", nam:2024, linhVuc:"Nghiệp vụ chung", loai:"Hướng dẫn nghiệp vụ", file:"HD19-2024VKSTC.htm" },
  { id:"cv-017", soHieu:"HD13-2024KNTC", tenVanBan:"Hướng dẫn 13/2024 về kiểm sát khiếu nại tố cáo", coQuan:"VKSND Tối cao", nam:2024, linhVuc:"Khiếu nại - Tố cáo", loai:"Hướng dẫn nghiệp vụ", file:"HD13-2024KNTC.htm" },
  { id:"cv-018", soHieu:"HD35-2025VKSTC-HS", tenVanBan:"Hướng dẫn 35/2025/VKSTC nghiệp vụ hình sự 2025", coQuan:"VKSND Tối cao", nam:2025, linhVuc:"Hình sự", loai:"Hướng dẫn nghiệp vụ", file:"HD35-2025VKSTC-HS.htm" },
  // --- CHỈ THỊ ---
  { id:"cv-019", soHieu:"CT05-2022VKSTC", tenVanBan:"Chỉ thị 05/2022/VKSTC về tăng cường công tác kiểm sát", coQuan:"VKSND Tối cao", nam:2022, linhVuc:"Nghiệp vụ chung", loai:"Chỉ thị", file:"CT05-2022VKSTC.htm" },
  { id:"cv-020", soHieu:"CT06-2021VKSTC", tenVanBan:"Chỉ thị 06/2021/VKSTC về nâng cao chất lượng tranh tụng", coQuan:"VKSND Tối cao", nam:2021, linhVuc:"Hình sự", loai:"Chỉ thị", file:"CT06-2021VKSTC.htm" },
  { id:"cv-021", soHieu:"CT07-2021VKSTC", tenVanBan:"Chỉ thị 07/2021/VKSTC về công tác phòng chống tham nhũng", coQuan:"VKSND Tối cao", nam:2021, linhVuc:"Phòng chống tham nhũng", loai:"Chỉ thị", file:"CT07-2021VKSTC.htm" },
  // --- QUY CHẾ ---
  { id:"cv-022", soHieu:"QCKSGG2023", tenVanBan:"Quy chế kiểm sát giam giữ, tạm giam 2023", coQuan:"VKSND Tối cao", nam:2023, linhVuc:"Giam giữ", loai:"Quy chế", file:"QCKSGG2023.htm" },
  { id:"cv-023", soHieu:"QCKSXXHS2017", tenVanBan:"Quy chế kiểm sát xét xử hình sự 2017", coQuan:"VKSND Tối cao", nam:2017, linhVuc:"Hình sự", loai:"Quy chế", file:"QCKSXXHS2017.htm" },
  { id:"cv-024", soHieu:"QCKSAHC-2017", tenVanBan:"Quy chế kiểm sát hành chính 2017", coQuan:"VKSND Tối cao", nam:2017, linhVuc:"Hành chính", loai:"Quy chế", file:"Quy che KSAHC 2017.htm" },
  { id:"cv-025", soHieu:"QCKSDS2017", tenVanBan:"Quy chế kiểm sát dân sự 2017", coQuan:"VKSND Tối cao", nam:2017, linhVuc:"Dân sự", loai:"Quy chế", file:"Quy che KSDS2017.htm" },
  // --- THÔNG TƯ LIÊN TỊCH MỚI NHẤT ---
  { id:"cv-026", soHieu:"TTLT01-2026HS", tenVanBan:"Thông tư liên tịch 01/2026 về tố tụng hình sự", coQuan:"VKSND TC - TAND TC - BCA", nam:2026, linhVuc:"Hình sự", loai:"Thông tư liên tịch", file:"TTLT01-2026HS.htm" },
  { id:"cv-027", soHieu:"TTLT01-2025GG", tenVanBan:"Thông tư liên tịch 01/2025 về tạm giữ tạm giam", coQuan:"BCA - VKSND TC - TAND TC", nam:2025, linhVuc:"Giam giữ", loai:"Thông tư liên tịch", file:"TTLT01-2025GG.htm" },
  { id:"cv-028", soHieu:"TTLT01-2025HS", tenVanBan:"Thông tư liên tịch 01/2025 về nghiệp vụ hình sự", coQuan:"VKSND TC - BCA - TAND TC", nam:2025, linhVuc:"Hình sự", loai:"Thông tư liên tịch", file:"TTLT01-2025HS.htm" },
  { id:"cv-029", soHieu:"TTLT01-2025THA", tenVanBan:"Thông tư liên tịch 01/2025 về thi hành án", coQuan:"BTP - BCA - VKSND TC - TAND TC", nam:2025, linhVuc:"Thi hành án", loai:"Thông tư liên tịch", file:"TTLT01-2025THA.htm" },
  { id:"cv-030", soHieu:"TTLT13-2025DS", tenVanBan:"Thông tư liên tịch 13/2025 về dân sự", coQuan:"BTP - TAND TC - VKSND TC", nam:2025, linhVuc:"Dân sự", loai:"Thông tư liên tịch", file:"TTLT13-2025DS.htm" },
  // --- TÀI LIỆU TẬP HUẤN ---
  { id:"cv-031", soHieu:"TLTH-GG-THAHS-2023", tenVanBan:"Tài liệu tập huấn kiểm sát giam giữ và thi hành án hình sự 2023", coQuan:"VKSND Tối cao", nam:2023, linhVuc:"Giam giữ - Thi hành án", loai:"Tài liệu tập huấn", file:"Tai lieu tap huan GG+THAHS 2023.htm" },
  { id:"cv-032", soHieu:"TLTH-KSTHADS-2023", tenVanBan:"Tài liệu tập huấn kiểm sát thi hành án dân sự 2023", coQuan:"VKSND Tối cao", nam:2023, linhVuc:"Thi hành án dân sự", loai:"Tài liệu tập huấn", file:"Tai lieu tap huan KSTHADS2023 CD1.htm" },
  { id:"cv-033", soHieu:"TLTH-KNTC-2018", tenVanBan:"Tài liệu tập huấn kỹ năng kiểm sát khiếu nại tố cáo 2018", coQuan:"VKSND Tối cao", nam:2018, linhVuc:"Khiếu nại - Tố cáo", loai:"Tài liệu tập huấn", file:"Tai lieu tap huan khieu to 2018.htm" },
  { id:"cv-034", soHieu:"TLTH-DS-2019", tenVanBan:"Tài liệu tập huấn nghiệp vụ dân sự 2019", coQuan:"VKSND Tối cao", nam:2019, linhVuc:"Dân sự", loai:"Tài liệu tập huấn", file:"Tai lieu tap huan dan su 2019.htm" },
];

// ============================================================
// MODULE 4: ÁN LỆ
// ============================================================
const VKS_AN_LE = [
  {
    id: "al-01",
    soAnLe: "Án lệ số 43/2021/AL",
    tieuDe: "Về xác định tội danh trong trường hợp người phạm tội dùng hung khí nguy hiểm gây thương tích",
    ngayBanHanh: "25/11/2021",
    coQuan: "TAND Tối cao",
    linhVuc: "Hình sự",
    noiDung: "Trường hợp bị cáo dùng dao (hung khí nguy hiểm) tấn công bị hại nhưng chỉ gây thương tích nhẹ do bị can ngăn kịp thời, cần xét đến ý thức chủ quan và diễn biến hành vi để xác định đúng tội danh giữa Điều 134 và Điều 123 BLHS.",
    tomTatVuViec: "Bị cáo A dùng dao tấn công bị hại B nhưng bị hại chỉ bị thương tích 4%. TAND các cấp xử tội Cố ý gây thương tích. TAND Tối cao xác định cần xem xét toàn diện ý thức phạm tội.",
    nguyenTacApDung: "Khi xét xử cần đánh giá toàn diện: hung khí sử dụng, vị trí tấn công trên cơ thể, diễn biến dừng hành vi, ý thức chủ quan của người phạm tội.",
    vanBanLienQuan: ["100/2015/QH13"],
    tags: ["hình sự", "cố ý gây thương tích", "giết người"]
  },
  {
    id: "al-02",
    soAnLe: "Án lệ số 45/2022/AL",
    tieuDe: "Về tính pháp lý của hợp đồng chuyển nhượng quyền sử dụng đất không công chứng",
    ngayBanHanh: "12/04/2022",
    coQuan: "TAND Tối cao",
    linhVuc: "Dân sự - Đất đai",
    noiDung: "Hợp đồng chuyển nhượng QSDĐ không được công chứng/chứng thực theo quy định nhưng một bên đã thực hiện nghĩa vụ trên 2/3 và bên kia đã nhận tiền, không thể buộc hoàn trả, Tòa có thể công nhận hợp đồng.",
    tomTatVuViec: "Bên nhận chuyển nhượng đã thanh toán 80% giá trị, nhận đất và xây nhà ở từ năm 2015. Bên chuyển nhượng khởi kiện đòi lại đất với lý do hợp đồng vô hiệu do không công chứng.",
    nguyenTacApDung: "Áp dụng Điều 129 BLDS 2015: Giao dịch dân sự vi phạm điều kiện hình thức nhưng một bên hoặc các bên đã thực hiện ít nhất 2/3 nghĩa vụ thì được công nhận hiệu lực.",
    vanBanLienQuan: ["91/2015/QH13", "31/2024/QH15"],
    tags: ["đất đai", "hợp đồng chuyển nhượng", "công chứng"]
  },
  {
    id: "al-03",
    soAnLe: "Án lệ số 52/2022/AL",
    tieuDe: "Về xác định tội Tham ô tài sản đối với người không phải là người có chức vụ quyền hạn",
    ngayBanHanh: "30/08/2022",
    coQuan: "TAND Tối cao",
    linhVuc: "Hình sự - Tham nhũng",
    noiDung: "Người không có chức vụ nhưng được giao quản lý tài sản nhà nước theo quyết định của cơ quan có thẩm quyền, nếu lợi dụng việc quản lý để chiếm đoạt thì cấu thành tội Tham ô theo Điều 353 BLHS.",
    tomTatVuViec: "Bị cáo là nhân viên hợp đồng, được giao quản lý kho hàng nhà nước, đã lấy cắp tài sản trị giá 500 triệu đồng. Cấp sơ thẩm xử tội Trộm cắp, TAND Tối cao hướng dẫn định tội Tham ô.",
    nguyenTacApDung: "Yếu tố quyết định là 'được giao quản lý tài sản', không nhất thiết phải có chức vụ, quyền hạn chính thức trong cơ cấu tổ chức.",
    vanBanLienQuan: ["100/2015/QH13", "36/2018/QH14"],
    tags: ["tham nhũng", "tham ô", "chức vụ quyền hạn"]
  },
  {
    id: "al-04",
    soAnLe: "Án lệ số 56/2023/AL",
    tieuDe: "Về xác định thiệt hại trong tranh chấp hợp đồng lao động khi sa thải trái pháp luật",
    ngayBanHanh: "22/02/2023",
    coQuan: "TAND Tối cao",
    linhVuc: "Lao động",
    noiDung: "Khi người sử dụng lao động sa thải người lao động trái pháp luật, ngoài tiền lương trong thời gian không được làm việc, còn phải bồi thường thêm ít nhất 02 tháng lương theo HĐLĐ theo Điều 41 BLLĐ 2019.",
    tomTatVuViec: "Người lao động bị sa thải với lý do không đúng quy trình (không họp xét kỷ luật). Tòa sơ thẩm chỉ buộc trả lương trong thời gian tạm đình chỉ. TAND Tối cao hướng dẫn tính đủ các khoản bồi thường.",
    nguyenTacApDung: "Sa thải trái pháp luật phải bồi thường: (1) Tiền lương + phụ cấp những ngày không làm việc; (2) Ít nhất 02 tháng lương; (3) Trợ cấp thôi việc nếu không muốn nhận lại làm việc.",
    vanBanLienQuan: ["45/2019/QH14"],
    tags: ["lao động", "sa thải", "bồi thường"]
  },
  {
    id: "al-05",
    soAnLe: "Án lệ số 58/2023/AL",
    tieuDe: "Về hiệu lực của di chúc khi người lập di chúc không còn minh mẫn",
    ngayBanHanh: "18/07/2023",
    coQuan: "TAND Tối cao",
    linhVuc: "Dân sự - Thừa kế",
    noiDung: "Di chúc lập trong thời điểm người để lại di sản bị bệnh nặng, không còn nhận thức đầy đủ hành vi của mình thì vô hiệu, dù có chữ ký hợp lệ và có người làm chứng.",
    tomTatVuViec: "Người lập di chúc 85 tuổi, mắc chứng mất trí nhớ theo hồ sơ bệnh án. Di chúc được lập 10 ngày trước khi mất. Tranh chấp giữa các con về hiệu lực di chúc.",
    nguyenTacApDung: "Theo Điều 630 BLDS 2015, di chúc hợp lệ phải được lập khi người lập minh mẫn, sáng suốt. Giám định y tế về năng lực hành vi tại thời điểm lập di chúc là chứng cứ quyết định.",
    vanBanLienQuan: ["91/2015/QH13"],
    tags: ["thừa kế", "di chúc", "năng lực hành vi"]
  },
  {
    id: "al-06",
    soAnLe: "Án lệ số 61/2024/AL",
    tieuDe: "Về định tội danh đối với hành vi sử dụng mạng xã hội để lừa đảo chiếm đoạt tài sản",
    ngayBanHanh: "10/01/2024",
    coQuan: "TAND Tối cao",
    linhVuc: "Hình sự - Công nghệ",
    noiDung: "Hành vi tạo tài khoản mạng xã hội giả mạo để kết thân, chiếm lòng tin rồi vay tiền không trả đủ yếu tố cấu thành tội Lừa đảo chiếm đoạt tài sản theo Điều 174 BLHS dù không có hành vi chiếm đoạt trực tiếp.",
    tomTatVuViec: "Bị cáo tạo 12 tài khoản Facebook giả, kết thân với 47 bị hại qua mạng, vay tiền với các lý do bịa đặt, chiếm đoạt tổng cộng 2,3 tỷ đồng.",
    nguyenTacApDung: "Thủ đoạn gian dối qua mạng xã hội (giả mạo danh tính, bịa đặt hoàn cảnh) được xác định là 'thủ đoạn gian dối' theo Điều 174 BLHS. Tổng giá trị chiếm đoạt xác định mức hình phạt.",
    vanBanLienQuan: ["100/2015/QH13", "13/2023/NĐ-CP"],
    tags: ["lừa đảo", "mạng xã hội", "tội phạm công nghệ"]
  },
];

// ============================================================
// MODULE 3C: THÔNG BÁO RÚT KINH NGHIỆM BỔ SUNG TỪ FILE CHM
// (TBRKN từ TAND Tối cao - Vụ 11, Vụ 8, THADS, KNTC)
// ============================================================
const VKS_RKN_CHM = [
  { id:"rkn-chm-01", soThongBao:"TBRKN 107/2019/V11", tieuDe:"Thông báo rút kinh nghiệm về xét xử vụ án dân sự – tranh chấp quyền sử dụng đất", ngayBanHanh:"2019", linhVuc:"Dân sự – Đất đai", coQuan:"TAND Tối cao (Vụ 11)", noiDungViPham:"Sai sót trong việc xác định tư cách người tham gia tố tụng và thu thập chứng cứ về nguồn gốc đất.", baiHoc:"Cần xác minh kỹ nguồn gốc đất, lịch sử sử dụng đất trước khi đưa vụ án ra xét xử.", bienPhap:"Phối hợp với UBND địa phương xác minh hiện trạng; thu thập đầy đủ bản đồ địa chính.", file:"TBRKN107-2019V11.htm" },
  { id:"rkn-chm-02", soThongBao:"TBRKN 143/2019/V11", tieuDe:"Rút kinh nghiệm về xét xử hợp đồng mua bán tài sản vô hiệu do nhầm lẫn", ngayBanHanh:"2019", linhVuc:"Dân sự – Hợp đồng", coQuan:"TAND Tối cao (Vụ 11)", noiDungViPham:"Tòa sơ thẩm tuyên hợp đồng mua bán nhà vô hiệu nhưng không xem xét đầy đủ ý chí thực sự của các bên.", baiHoc:"Phân biệt rõ lỗi nhầm lẫn (Điều 126 BLDS) với lỗi lừa dối (Điều 127 BLDS) khi xét xử.", bienPhap:"Tổ chức hòa giải kỹ; làm rõ ý chí các bên trước khi xem xét vô hiệu hợp đồng.", file:"TBRKN143-2019V11.htm" },
  { id:"rkn-chm-03", soThongBao:"TBRKN 185/2017/V11", tieuDe:"Rút kinh nghiệm xét xử vụ tranh chấp thừa kế – di chúc không hợp lệ", ngayBanHanh:"2017", linhVuc:"Dân sự – Thừa kế", coQuan:"TAND Tối cao (Vụ 11)", noiDungViPham:"Tòa chấp nhận di chúc viết tay không có người làm chứng, không kiểm tra năng lực nhận thức của người lập di chúc.", baiHoc:"Kiểm tra chặt chẽ điều kiện hình thức di chúc theo Điều 628, 630 BLDS 2015.", bienPhap:"Yêu cầu giám định y tế về năng lực hành vi nếu người lập di chúc có bệnh.", file:"TBRKN185-2017V11.htm" },
  { id:"rkn-chm-04", soThongBao:"TBRKN 246/2021/V11", tieuDe:"Rút kinh nghiệm về áp dụng biện pháp khẩn cấp tạm thời trong vụ án dân sự", ngayBanHanh:"2021", linhVuc:"Dân sự – Tố tụng", coQuan:"TAND Tối cao (Vụ 11)", noiDungViPham:"Tòa áp dụng biện pháp phong tỏa tài sản không có căn cứ đầy đủ, gây thiệt hại cho bị đơn.", baiHoc:"Chỉ áp dụng BPKCTT khi có đủ căn cứ theo Điều 111 BLTTDS; xem xét tính cân xứng.", bienPhap:"Thẩm phán phải nghiên cứu kỹ trước khi ra quyết định BPKCTT.", file:"TBRKN246-2021V11.htm" },
  { id:"rkn-chm-05", soThongBao:"TBRKN 251/2021/KNTC", tieuDe:"Rút kinh nghiệm giải quyết khiếu nại, tố cáo trong hoạt động tư pháp", ngayBanHanh:"2021", linhVuc:"Khiếu nại – Tố cáo", coQuan:"VKSND Tối cao (KNTC)", noiDungViPham:"Một số đơn vị giải quyết khiếu nại quá hạn, không có văn bản trả lời công dân trong thời hạn quy định.", baiHoc:"Nghiêm túc thực hiện thời hạn giải quyết khiếu nại tại Điều 28 Luật Khiếu nại 2011.", bienPhap:"Lập sổ theo dõi thời hạn; phân công cán bộ chuyên trách tiếp nhận và xử lý đơn thư.", file:"TBRKN251-2021KNTC.htm" },
  { id:"rkn-chm-06", soThongBao:"TBRKN 165/2024/THADS", tieuDe:"Rút kinh nghiệm về kê biên tài sản là quyền sử dụng đất đang thế chấp", ngayBanHanh:"2024", linhVuc:"Thi hành án dân sự", coQuan:"VKSND Tối cao (THADS)", noiDungViPham:"Chấp hành viên kê biên QSDĐ đang thế chấp mà không xử lý quyền ưu tiên của ngân hàng theo đúng thứ tự thanh toán.", baiHoc:"Xác định rõ tài sản thế chấp, xem hợp đồng thế chấp trước khi kê biên; ưu tiên thanh toán theo Điều 47 Luật THADS.", bienPhap:"Yêu cầu ngân hàng cung cấp hợp đồng thế chấp; phối hợp xử lý tài sản bảo đảm.", file:"TBRKN165-2024THADS.htm" },
  { id:"rkn-chm-07", soThongBao:"TBRKN 258/2024/THADS", tieuDe:"Rút kinh nghiệm về xử lý vi phạm chấp hành viên trong định giá tài sản", ngayBanHanh:"2024", linhVuc:"Thi hành án dân sự", coQuan:"VKSND Tối cao (THADS)", noiDungViPham:"Chấp hành viên tự định giá tài sản khi chưa có tổ chức thẩm định giá, dẫn đến khiếu nại.", baiHoc:"Bắt buộc thuê tổ chức thẩm định giá theo quy định; không tự xác định giá.", bienPhap:"Kiểm tra biên bản định giá trước khi tiến hành bán đấu giá.", file:"TBRKN258-2024THADS.htm" },
  { id:"rkn-chm-08", soThongBao:"TBRKN 411/2021/V8", tieuDe:"Rút kinh nghiệm xét xử án về bạo lực gia đình – tội cố ý gây thương tích trong gia đình", ngayBanHanh:"2021", linhVuc:"Hình sự", coQuan:"TAND Tối cao (Vụ 8)", noiDungViPham:"Hội đồng xét xử áp dụng tình tiết giảm nhẹ không đúng, không xem xét tình tiết tăng nặng phạm tội đối với người thân.", baiHoc:"Tội phạm trong gia đình phải áp dụng tình tiết tăng nặng tại Điểm đ Khoản 1 Điều 52 BLHS.", bienPhap:"Rà soát lại các bản án về bạo lực gia đình; tổ chức tập huấn chuyên đề.", file:"TBRKN411-2021V8.htm" },
  { id:"rkn-chm-09", soThongBao:"TBRKN 173-TB-V4", tieuDe:"Thông báo rút kinh nghiệm kiểm sát xét xử hình sự Vụ 4", ngayBanHanh:"2023", linhVuc:"Hình sự", coQuan:"TAND Tối cao (Vụ 4)", noiDungViPham:"Sai sót trong định tội danh vụ án ma túy, nhầm lẫn giữa tội vận chuyển và tội tàng trữ trái phép.", baiHoc:"Phân biệt rõ mặt khách quan: vận chuyển (dịch chuyển) với tàng trữ (cất giữ tại nơi ổn định).", bienPhap:"Nghiên cứu kỹ Nghị quyết 01/2024/NQ-HĐTP về tội phạm ma túy.", file:"TBRKN 173-TB-V4.htm" },
  { id:"rkn-chm-10", soThongBao:"TBRKN-KhieuTo", tieuDe:"Thông báo rút kinh nghiệm về tiếp nhận và xử lý đơn khiếu nại tư pháp", ngayBanHanh:"2022", linhVuc:"Khiếu nại – Tố cáo", coQuan:"VKSND Tối cao", noiDungViPham:"Một số đơn vị không lập sổ theo dõi đơn thư, không xác nhận nhận đơn bằng văn bản cho công dân.", baiHoc:"Mọi đơn thư khiếu nại phải được tiếp nhận, vào sổ và xác nhận theo Điều 5 Luật Tiếp công dân 2013.", bienPhap:"Bổ sung quy trình nội bộ; trang bị máy photo để lưu hồ sơ đơn thư.", file:"TBRKN khieu to.htm" },
];

// ============================================================
// MODULE 4B: ÁN LỆ BỔ SUNG TỪ FILE CHM (82 Án lệ TAND Tối cao)
// ============================================================
const VKS_AN_LE_CHM = [
  // Án lệ 01-20 (Dân sự, đất đai, hôn nhân gia đình)
  { id:"al-chm-01", soAnLe:"Án lệ số 01/2016/AL", tieuDe:"Về xác định lãi suất trong hợp đồng vay tài sản", linhVuc:"Dân sự – Hợp đồng", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Tranh chấp hợp đồng vay có lãi suất vượt quy định; xác định lãi suất áp dụng khi không thỏa thuận rõ.", nguyenTacApDung:"Lãi suất cho vay không được vượt 20%/năm (Điều 468 BLDS 2015); phần vượt quá bị vô hiệu.", vanBanLienQuan:["91/2015/QH13"], file:"An le 01.htm" },
  { id:"al-chm-02", soAnLe:"Án lệ số 02/2016/AL", tieuDe:"Về hiệu lực của hợp đồng chuyển nhượng quyền sử dụng đất trong trường hợp đất chưa được cấp giấy chứng nhận", linhVuc:"Đất đai – Dân sự", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Các bên chuyển nhượng đất chưa có sổ đỏ; một bên không thực hiện hợp đồng.", nguyenTacApDung:"Hợp đồng CNQSDĐ đất chưa có GCN nhưng đã thực hiện ổn định lâu dài có thể được công nhận dựa trên nguyên tắc thiện chí.", vanBanLienQuan:["91/2015/QH13","31/2024/QH15"], file:"An le 02.htm" },
  { id:"al-chm-03", soAnLe:"Án lệ số 03/2016/AL", tieuDe:"Về công nhận hợp đồng thế chấp quyền sử dụng đất mà không có công chứng", linhVuc:"Đất đai – Ngân hàng", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Ngân hàng nhận thế chấp QSDĐ bằng hợp đồng không công chứng; tranh chấp khi xử lý tài sản.", nguyenTacApDung:"Áp dụng nguyên tắc thiện chí, bảo vệ bên cho vay khi bên vay đã nhận tiền và sử dụng.", vanBanLienQuan:["91/2015/QH13"], file:"An le 03.htm" },
  { id:"al-chm-04", soAnLe:"Án lệ số 04/2016/AL", tieuDe:"Về xử lý tài sản thế chấp khi vợ chồng ly hôn mà tài sản chung đang thế chấp ngân hàng", linhVuc:"Hôn nhân – Ngân hàng", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Vợ chồng thế chấp tài sản chung tại ngân hàng; khi ly hôn tranh chấp phần chia tài sản.", nguyenTacApDung:"Khi chia tài sản chung trong vụ ly hôn, phải xử lý xong nghĩa vụ với ngân hàng trước khi chia; không thể chia tài sản đang thế chấp mà không tính đến khoản nợ.", vanBanLienQuan:["91/2015/QH13","45/2019/QH14"], file:"An le 04.htm" },
  { id:"al-chm-05", soAnLe:"Án lệ số 05/2016/AL", tieuDe:"Về xác định di sản thừa kế khi tài sản được tạo ra trong thời kỳ hôn nhân", linhVuc:"Dân sự – Thừa kế", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Tranh chấp thừa kế liên quan đến tài sản do vợ hoặc chồng tạo ra trong thời kỳ hôn nhân.", nguyenTacApDung:"Tài sản tạo ra trong thời kỳ hôn nhân là tài sản chung (Điều 33 Luật HNGD 2014); phần di sản của người chết chỉ là ½ tài sản chung đó.", vanBanLienQuan:["91/2015/QH13"], file:"An le 05.htm" },
  { id:"al-chm-10", soAnLe:"Án lệ số 10/2017/AL", tieuDe:"Về áp dụng biện pháp tạm giam để điều tra trong vụ án tham nhũng", linhVuc:"Hình sự – Tham nhũng", ngayBanHanh:"2017", coQuan:"TAND Tối cao", tomTatVuViec:"Bị can tội tham ô bị tạm giam quá thời hạn mà chưa có quyết định gia hạn.", nguyenTacApDung:"Thời hạn tạm giam phải được gia hạn theo đúng Điều 173 BLTTHS; hết hạn chưa gia hạn phải trả tự do ngay.", vanBanLienQuan:["92/2015/QH13","100/2015/QH13"], file:"An le 10.htm" },
  { id:"al-chm-20", soAnLe:"Án lệ số 20/2018/AL", tieuDe:"Về xác định tội danh trong vụ án có nhiều người phạm tội – đồng phạm", linhVuc:"Hình sự", ngayBanHanh:"2018", coQuan:"TAND Tối cao", tomTatVuViec:"Nhóm đối tượng cùng thực hiện hành vi cướp tài sản; xác định vai trò chủ mưu, đồng phạm.", nguyenTacApDung:"Xác định vai trò của từng người trong đồng phạm (Điều 17 BLHS): người tổ chức, người thực hành, người giúp sức, người xúi giục có mức hình phạt khác nhau.", vanBanLienQuan:["100/2015/QH13"], file:"An le 20.htm" },
  { id:"al-chm-30", soAnLe:"Án lệ số 30/2020/AL", tieuDe:"Về xác định thiệt hại và bồi thường trong vụ án tai nạn giao thông", linhVuc:"Dân sự – Giao thông", ngayBanHanh:"2020", coQuan:"TAND Tối cao", tomTatVuViec:"Nạn nhân tai nạn giao thông yêu cầu bồi thường; tranh chấp về mức bồi thường thiệt hại sức khỏe.", nguyenTacApDung:"Thiệt hại về sức khỏe bao gồm: chi phí điều trị, thu nhập bị mất, tổn thất tinh thần (Điều 590 BLDS 2015); phải bồi thường đầy đủ và kịp thời.", vanBanLienQuan:["91/2015/QH13"], file:"An le 30.htm" },
  { id:"al-chm-40", soAnLe:"Án lệ số 40/2021/AL", tieuDe:"Về xử lý tài sản kê biên khi người phải thi hành án không có tài sản", linhVuc:"Thi hành án dân sự", ngayBanHanh:"2021", coQuan:"TAND Tối cao", tomTatVuViec:"Người phải THA không có tài sản để thi hành; chấp hành viên đình chỉ THA gây khiếu nại.", nguyenTacApDung:"Phải xác minh đầy đủ điều kiện THA theo Điều 44 Luật THADS trước khi đình chỉ; phải định kỳ xác minh lại.", vanBanLienQuan:["56/2021/QH15"], file:"An le 40.htm" },
  { id:"al-chm-50", soAnLe:"Án lệ số 50/2022/AL", tieuDe:"Về xác định thẩm quyền xét xử tranh chấp hợp đồng lao động có yếu tố nước ngoài", linhVuc:"Lao động – Tư pháp quốc tế", ngayBanHanh:"2022", coQuan:"TAND Tối cao", tomTatVuViec:"Người lao động Việt Nam làm việc cho công ty nước ngoài tại Việt Nam tranh chấp hợp đồng lao động.", nguyenTacApDung:"Tòa án Việt Nam có thẩm quyền xét xử khi hợp đồng thực hiện tại Việt Nam (Điều 469 BLTTDS 2015); áp dụng pháp luật lao động Việt Nam.", vanBanLienQuan:["45/2019/QH14","93/2015/QH13"], file:"An le 50.htm" },
  { id:"al-chm-60", soAnLe:"Án lệ số 60/2023/AL", tieuDe:"Về quyền khởi kiện của người thứ ba trong vụ án tranh chấp hợp đồng", linhVuc:"Dân sự – Tố tụng", ngayBanHanh:"2023", coQuan:"TAND Tối cao", tomTatVuViec:"Người thứ ba có quyền lợi nghĩa vụ liên quan yêu cầu Tòa bảo vệ quyền lợi trong vụ án dân sự.", nguyenTacApDung:"Người có quyền lợi nghĩa vụ liên quan có quyền yêu cầu độc lập theo Điều 73 BLTTDS 2015; Tòa phải thụ lý và giải quyết.", vanBanLienQuan:["91/2015/QH13","93/2015/QH13"], file:"An le 60.htm" },
  { id:"al-chm-70", soAnLe:"Án lệ số 70/2023/AL", tieuDe:"Về xác định tội phạm trong trường hợp dùng thủ đoạn tinh vi chiếm đoạt tài sản qua giao dịch dân sự giả tạo", linhVuc:"Hình sự – Kinh tế", ngayBanHanh:"2023", coQuan:"TAND Tối cao", tomTatVuViec:"Bị cáo ký hợp đồng vay tiền nhưng thực chất là chiếm đoạt; tranh luận giữa tội lừa đảo và vi phạm hợp đồng dân sự.", nguyenTacApDung:"Khi người phạm tội ngay từ đầu có ý thức chiếm đoạt, dùng hợp đồng dân sự làm vỏ bọc thì cấu thành tội Lừa đảo chiếm đoạt tài sản (Điều 174 BLHS), không phải quan hệ dân sự.", vanBanLienQuan:["100/2015/QH13","91/2015/QH13"], file:"An le 70.htm" },
  { id:"al-chm-80", soAnLe:"Án lệ số 80/2024/AL", tieuDe:"Về xử lý vật chứng là phương tiện phạm tội trong vụ án ma túy", linhVuc:"Hình sự – Ma túy", ngayBanHanh:"2024", coQuan:"TAND Tối cao", tomTatVuViec:"Xe ô tô được dùng để vận chuyển ma túy; tranh chấp về việc tịch thu hay trả lại cho chủ sở hữu không liên quan.", nguyenTacApDung:"Phương tiện phạm tội bị tịch thu theo Điều 47 BLHS; tuy nhiên nếu chủ phương tiện không biết và không liên quan, Hội đồng xem xét trả lại theo từng trường hợp cụ thể.", vanBanLienQuan:["100/2015/QH13"], file:"An le 80.htm" },
  { id:"al-chm-ds", soAnLe:"Án lệ dân sự tổng hợp", tieuDe:"Tổng hợp án lệ về dân sự – hôn nhân gia đình – thừa kế", linhVuc:"Dân sự tổng hợp", ngayBanHanh:"2016–2024", coQuan:"TAND Tối cao", tomTatVuViec:"Tập hợp các án lệ quan trọng về dân sự, hôn nhân gia đình và thừa kế từ năm 2016 đến 2024.", nguyenTacApDung:"Áp dụng các nguyên tắc cơ bản của BLDS 2015 về hợp đồng, thừa kế, tài sản trong hôn nhân.", vanBanLienQuan:["91/2015/QH13"], file:"An le dan su.htm" },
  { id:"al-chm-hs", soAnLe:"Án lệ hình sự tổng hợp", tieuDe:"Tổng hợp án lệ về hình sự – tội phạm và hình phạt", linhVuc:"Hình sự tổng hợp", ngayBanHanh:"2016–2024", coQuan:"TAND Tối cao", tomTatVuViec:"Tập hợp các án lệ về định tội danh, quyết định hình phạt, các tình tiết tăng nặng giảm nhẹ trong án hình sự.", nguyenTacApDung:"Áp dụng BLHS 2015 và các nghị quyết hướng dẫn của HĐTP TAND Tối cao.", vanBanLienQuan:["100/2015/QH13","92/2015/QH13"], file:"An le hinh su.htm" },
];
