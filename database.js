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
