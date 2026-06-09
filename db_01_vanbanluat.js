// ================================================================
// db_01_vanbanluat.js – VĂN BẢN PHÁP LUẬT
// VKSND TP. Cần Thơ – Hệ thống LEXVIET
// ----------------------------------------------------------------
// Cấu trúc mỗi bản ghi:
//   id           : number       – ID duy nhất
//   soHieu       : string       – Số hiệu văn bản
//   tenVanBan    : string       – Tên đầy đủ
//   coQuan       : string       – Cơ quan ban hành
//   ngayBanHanh  : string       – DD/MM/YYYY
//   ngayHieuLuc  : string       – DD/MM/YYYY
//   hieu         : string       – "Còn hiệu lực" | "Hết hiệu lực" | "Chưa có hiệu lực"
//   loai         : string       – "Bộ luật" | "Luật" | "Nghị định" | "Thông tư" | "Nghị quyết" | "Quyết định" | "Chỉ thị"
//   linhVuc      : number[]     – Mảng ID lĩnh vực (xem LEGAL_FIELDS trong index.html)
//   tomTat       : string       – Tóm tắt nội dung
//   link         : string       – URL toàn văn (để trống "" nếu chưa có)
//   tags         : string[]     – Từ khóa tìm kiếm
// ================================================================

const DB_VAN_BAN_LUAT = [

  // ── BỘ LUẬT ─────────────────────────────────────────────────
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
    tomTat: "Quy định địa vị pháp lý, chuẩn mực pháp lý về cách ứng xử của cá nhân, pháp nhân; quyền, nghĩa vụ về nhân thân và tài sản trong quan hệ dân sự.",
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
  {
    id: 5,
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

  // ── LUẬT ────────────────────────────────────────────────────
  {
    id: 6,
    soHieu: "63/2014/QH13",
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
    id: 7,
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
    tomTat: "Quy định về việc thành lập, tổ chức quản lý, tổ chức lại, giải thể và hoạt động có liên quan của doanh nghiệp.",
    link: "https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Luat-Doanh-nghiep-2020-425174.aspx",
    tags: ["doanh nghiệp", "công ty", "thành lập"]
  },
  {
    id: 10,
    soHieu: "16/2017/QH14",
    tenVanBan: "Luật Thi hành án hình sự 2019",
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

  // ── NGHỊ ĐỊNH ───────────────────────────────────────────────
  {
    id: 11,
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
    id: 12,
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

  // ── THÔNG TƯ ────────────────────────────────────────────────
  {
    id: 13,
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
    id: 14,
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

  // ── NGHỊ QUYẾT ──────────────────────────────────────────────
  {
    id: 15,
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

  // ─────────────────────────────────────────────────────────────
  // THÊM VĂN BẢN MỚI VÀO PHÍA DƯỚI ĐÂY
  // Copy mẫu bên dưới, tăng id, điền thông tin và uncomment:
  // ─────────────────────────────────────────────────────────────
  // {
  //   id: 16,
  //   soHieu: "",
  //   tenVanBan: "",
  //   coQuan: "",
  //   ngayBanHanh: "",
  //   ngayHieuLuc: "",
  //   hieu: "Còn hiệu lực",
  //   loai: "",
  //   linhVuc: [],
  //   tomTat: "",
  //   link: "",
  //   tags: []
  // },

  // ── CÁC NGHỊ QUYẾT MỚI BỔ SUNG ──────────────────────────────────────────────

  {
    id: 16,
    soHieu: "01/2018/NQ-HĐTP",
    tenVanBan: "Nghị quyết 01/2018/NQ-HĐTP hướng dẫn áp dụng Điều 66 và Điều 106 của Bộ luật Hình sự về tha tù trước thời hạn có điều kiện",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "24/04/2018",
    ngayHieuLuc: "09/06/2018",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [1], // Hình sự
    tomTat: "Hướng dẫn áp dụng Điều 66 và Điều 106 của Bộ luật Hình sự về các điều kiện, trình tự để xét tha tù trước thời hạn có điều kiện đối với người đang chấp hành án phạt tù.",
    link: "",
    tags: ["tha tù trước thời hạn", "Điều 66 BLHS", "Điều 106 BLHS", "hình sự", "01/2018"]
  },
  {
    id: 17,
    soHieu: "03/2019/NQ-HĐTP",
    tenVanBan: "Nghị quyết 03/2019/NQ-HĐTP hướng dẫn áp dụng Điều 324 của Bộ luật Hình sự về tội rửa tiền",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "24/05/2019",
    ngayHieuLuc: "07/07/2019",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [1], // Hình sự
    tomTat: "Hướng dẫn giải thích và áp dụng một số thuật ngữ, tình tiết định khung tại Điều 324 của Bộ luật Hình sự về tội rửa tiền.",
    link: "",
    tags: ["tội rửa tiền", "Điều 324 BLHS", "hình sự", "03/2019"]
  },
  {
    id: 18,
    soHieu: "03/2020/NQ-HĐTP",
    tenVanBan: "Nghị quyết 03/2020/NQ-HĐTP hướng dẫn áp dụng một số quy định của Bộ luật Hình sự trong xét xử tội phạm tham nhũng và tội phạm khác về chức vụ",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "30/12/2020",
    ngayHieuLuc: "15/02/2021",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [1], // Hình sự
    tomTat: "Hướng dẫn áp dụng pháp luật trong xét xử các tội phạm về tham nhũng và chức vụ, thu hồi tài sản tham nhũng, nguyên tắc xử lý người phạm tội.",
    link: "",
    tags: ["tham nhũng", "tội phạm chức vụ", "hình sự", "03/2020"]
  },
  {
    id: 19,
    soHieu: "05/2018/NQ-HĐTP",
    tenVanBan: "Nghị quyết 05/2018/NQ-HĐTP hướng dẫn áp dụng Điều 234 và Điều 244 của Bộ luật Hình sự",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "05/11/2018",
    ngayHieuLuc: "01/12/2018",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [1], // Hình sự
    tomTat: "Hướng dẫn áp dụng Điều 234 về tội vi phạm quy định về bảo vệ động vật hoang dã và Điều 244 về tội vi phạm quy định về bảo vệ động vật nguy cấp, quý, hiếm của BLHS.",
    link: "",
    tags: ["động vật hoang dã", "động vật nguy cấp", "Điều 234 BLHS", "Điều 244 BLHS", "05/2018"]
  },
  {
    id: 20,
    soHieu: "103/2015/QH13",
    tenVanBan: "Nghị quyết 103/2015/QH13 về việc thi hành Bộ luật tố tụng dân sự",
    coQuan: "Quốc hội",
    ngayBanHanh: "25/11/2015",
    ngayHieuLuc: "01/07/2016",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [2], // Tố tụng Dân sự
    tomTat: "Quyết nghị việc thi hành Bộ luật tố tụng dân sự số 92/2015/QH13 và cách thức áp dụng để giải quyết các vụ việc dân sự, hôn nhân gia đình, kinh doanh thương mại, lao động.",
    link: "",
    tags: ["thi hành BLTTDS", "tố tụng dân sự", "103/2015/QH13"]
  },
  {
    id: 21,
    soHieu: "03/2016/NQ-HĐTP",
    tenVanBan: "Nghị quyết 03/2016/NQ-HĐTP hướng dẫn thi hành một số quy định của Luật phá sản",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "26/08/2016",
    ngayHieuLuc: "16/09/2016",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [4], // Kinh tế / Phá sản
    tomTat: "Hướng dẫn thi hành một số quy định tại Điều 8, khoản 14 Điều 9, Điều 70 và Điều 104 của Luật phá sản.",
    link: "",
    tags: ["phá sản", "Luật phá sản", "03/2016"]
  },
  {
    id: 22,
    soHieu: "02/2016/NQ-HĐTP",
    tenVanBan: "Nghị quyết 02/2016/NQ-HĐTP hướng dẫn thi hành một số quy định của Nghị quyết 103/2015/QH13 và Nghị quyết 104/2015/QH13",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "30/06/2016",
    ngayHieuLuc: "01/08/2016",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [2, 5], // Tố tụng dân sự, Tố tụng hành chính
    tomTat: "Hướng dẫn thi hành một số quy định về việc thi hành Bộ luật tố tụng dân sự 2015 và Luật tố tụng hành chính 2015.",
    link: "",
    tags: ["tố tụng dân sự", "tố tụng hành chính", "thi hành", "02/2016"]
  },
  {
    id: 23,
    soHieu: "06/2019/NQ-HĐTP",
    tenVanBan: "Nghị quyết 06/2019/NQ-HĐTP hướng dẫn xét xử vụ án xâm hại tình dục người dưới 18 tuổi",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "01/10/2019",
    ngayHieuLuc: "05/11/2019",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [1], // Hình sự
    tomTat: "Hướng dẫn áp dụng một số quy định từ Điều 141 đến Điều 147 của Bộ luật Hình sự và quy định đặc thù trong xét xử vụ án xâm hại tình dục người dưới 18 tuổi.",
    link: "",
    tags: ["xâm hại tình dục", "người dưới 18 tuổi", "hình sự", "06/2019"]
  },
  {
    id: 24,
    soHieu: "05/2019/NQ-HĐTP",
    tenVanBan: "Nghị quyết 05/2019/NQ-HĐTP hướng dẫn áp dụng Điều 214, Điều 215, Điều 216 của BLHS",
    coQuan: "TAND Tối cao",
    ngayBanHanh: "15/08/2019",
    ngayHieuLuc: "01/09/2019",
    hieu: "Còn hiệu lực",
    loai: "Nghị quyết",
    linhVuc: [1], // Hình sự
    tomTat: "Hướng dẫn áp dụng các quy định về tội gian lận bảo hiểm xã hội, bảo hiểm thất nghiệp (Điều 214), gian lận bảo hiểm y tế (Điều 215) và trốn đóng bảo hiểm (Điều 216).",
    link: "",
    tags: ["bảo hiểm xã hội", "gian lận bảo hiểm", "trốn đóng bảo hiểm", "hình sự", "05/2019"]
  }
];
