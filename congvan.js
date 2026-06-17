// ================================================================
// db_05_congvan.js – CÔNG VĂN & HƯỚNG DẪN NGHIỆP VỤ
// VKSND TP. Cần Thơ – Hệ thống LEXVIET
// ----------------------------------------------------------------
// Cấu trúc mỗi bản ghi:
//   id        : string  – VD: "cv-001"
//   soHieu    : string  – Số hiệu văn bản
//   tenVanBan : string  – Tên đầy đủ
//   coQuan    : string  – Cơ quan ban hành
//   nam       : number  – Năm ban hành
//   linhVuc   : string  – Lĩnh vực
//   loai      : string  – "Công văn"|"Hướng dẫn nghiệp vụ"|"Chỉ thị"|"Quy chế"|"Thông tư liên tịch"|"Tài liệu tập huấn"
//   tomTat    : string  – Tóm tắt nội dung (để "" nếu chưa có)
//   file      : string  – Tên file CHM tương ứng (để "" nếu không có)
//   link      : string  – URL toàn văn (để "" nếu không có)
// ================================================================

export const DB_CONG_VAN = [

  // ── CÔNG VĂN – VKSND TỐI CAO ────────────────────────────────
  {
    id: "cv-001",
    soHieu: "CV 1083/2024/VKSTC",
    tenVanBan: "Công văn 1083/2024/VKSTC về hướng dẫn nghiệp vụ kiểm sát",
    coQuan: "VKSND Tối cao",
    nam: 2024,
    linhVuc: "Hình sự",
    loai: "Công văn",
    tomTat: "",
    file: "CV1083-2024VKSTC.htm",
    link: ""
  },
  {
    id: "cv-002",
    soHieu: "CV 1179/2024/VKSTC",
    tenVanBan: "Công văn 1179/2024/VKSTC về kiểm sát thi hành án",
    coQuan: "VKSND Tối cao",
    nam: 2024,
    linhVuc: "Thi hành án",
    loai: "Công văn",
    tomTat: "",
    file: "CV1179-2024VKSTC.htm",
    link: ""
  },
  {
    id: "cv-003",
    soHieu: "CV 183/2025/VKSTC",
    tenVanBan: "Công văn 183/2025/VKSTC hướng dẫn nghiệp vụ 2025",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Nghiệp vụ chung",
    loai: "Công văn",
    tomTat: "",
    file: "CV183-2025VKSTC.htm",
    link: ""
  },
  {
    id: "cv-004",
    soHieu: "CV 4865/2025 KNTC",
    tenVanBan: "Công văn 4865/2025 về khiếu nại tố cáo trong tư pháp",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Khiếu nại – Tố cáo",
    loai: "Công văn",
    tomTat: "",
    file: "CV4865-2025KNTC.htm",
    link: ""
  },
  {
    id: "cv-005",
    soHieu: "CV 3933/2025 HS",
    tenVanBan: "Công văn 3933/2025 hướng dẫn nghiệp vụ hình sự",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Hình sự",
    loai: "Công văn",
    tomTat: "",
    file: "CV3933-2025HS.htm",
    link: ""
  },

  // ── CÔNG VĂN – TAND TỐI CAO ─────────────────────────────────
  {
    id: "cv-006",
    soHieu: "CV 100/2023/TATC",
    tenVanBan: "Công văn 100/2023 của TAND Tối cao về áp dụng pháp luật",
    coQuan: "TAND Tối cao",
    nam: 2023,
    linhVuc: "Xét xử",
    loai: "Công văn",
    tomTat: "",
    file: "CV100-2023TATC.htm",
    link: ""
  },
  {
    id: "cv-007",
    soHieu: "CV 163/2024/TATC",
    tenVanBan: "Công văn 163/2024 hướng dẫn xét xử dân sự",
    coQuan: "TAND Tối cao",
    nam: 2024,
    linhVuc: "Dân sự",
    loai: "Công văn",
    tomTat: "",
    file: "CV163-2024TATC.htm",
    link: ""
  },
  {
    id: "cv-008",
    soHieu: "CV 285/2025/TATC",
    tenVanBan: "Công văn 285/2025 hướng dẫn giải quyết án",
    coQuan: "TAND Tối cao",
    nam: 2025,
    linhVuc: "Nghiệp vụ chung",
    loai: "Công văn",
    tomTat: "",
    file: "CV285-2025TATC.htm",
    link: ""
  },
  {
    id: "cv-009",
    soHieu: "CV 207/2024/TATC",
    tenVanBan: "Công văn 207/2024 về tố tụng hành chính",
    coQuan: "TAND Tối cao",
    nam: 2024,
    linhVuc: "Hành chính",
    loai: "Công văn",
    tomTat: "",
    file: "CV207-2024TATC.htm",
    link: ""
  },

  // ── HƯỚNG DẪN NGHIỆP VỤ – VKSND TỐI CAO ────────────────────
  {
    id: "hd-001",
    soHieu: "HD 04/2026/VKSTC-HS",
    tenVanBan: "Hướng dẫn 04/2026/VKSTC về nghiệp vụ hình sự",
    coQuan: "VKSND Tối cao",
    nam: 2026,
    linhVuc: "Hình sự",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "Hướng dẫn kiểm sát viên thực hiện nghiệp vụ hình sự theo quy định pháp luật mới nhất năm 2026.",
    file: "HD04-2026VKSTC-HS.htm",
    link: ""
  },
  {
    id: "hd-002",
    soHieu: "HD 05/2026/VKSTC-HS",
    tenVanBan: "Hướng dẫn 05/2026/VKSTC về thực hành quyền công tố",
    coQuan: "VKSND Tối cao",
    nam: 2026,
    linhVuc: "Hình sự",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "Hướng dẫn kỹ năng thực hành quyền công tố tại phiên tòa hình sự sơ thẩm và phúc thẩm.",
    file: "HD05-2026VKSTC-HS.htm",
    link: ""
  },
  {
    id: "hd-003",
    soHieu: "HD 07/2026/VKSTC-DS",
    tenVanBan: "Hướng dẫn 07/2026/VKSTC về kiểm sát dân sự",
    coQuan: "VKSND Tối cao",
    nam: 2026,
    linhVuc: "Dân sự",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "Hướng dẫn kiểm sát viên thực hiện kiểm sát xét xử các vụ án dân sự, hôn nhân gia đình.",
    file: "HD07-2026VKSTC-DS.htm",
    link: ""
  },
  {
    id: "hd-004",
    soHieu: "HD 13/2024/KNTC",
    tenVanBan: "Hướng dẫn 13/2024 về kiểm sát khiếu nại tố cáo",
    coQuan: "VKSND Tối cao",
    nam: 2024,
    linhVuc: "Khiếu nại – Tố cáo",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "Hướng dẫn thực hiện kiểm sát việc giải quyết khiếu nại, tố cáo trong hoạt động tư pháp.",
    file: "HD13-2024KNTC.htm",
    link: ""
  },
  {
    id: "hd-005",
    soHieu: "HD 35/2025/VKSTC-HS",
    tenVanBan: "Hướng dẫn 35/2025/VKSTC nghiệp vụ hình sự 2025",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Hình sự",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "",
    file: "HD35-2025VKSTC-HS.htm",
    link: ""
  },
  {
    id: "hd-006",
    soHieu: "HD 15/2024/VKSTC",
    tenVanBan: "Hướng dẫn 15/2024/VKSTC về kiểm sát thi hành án hình sự",
    coQuan: "VKSND Tối cao",
    nam: 2024,
    linhVuc: "Thi hành án hình sự",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "",
    file: "HD15-2024VKSTC.htm",
    link: ""
  },
  {
    id: "hd-007",
    soHieu: "HD 16/2024/VKSTC",
    tenVanBan: "Hướng dẫn 16/2024/VKSTC về kiểm sát giam giữ",
    coQuan: "VKSND Tối cao",
    nam: 2024,
    linhVuc: "Giam giữ",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "",
    file: "HD16-2024VKSTC.htm",
    link: ""
  },
  {
    id: "hd-008",
    soHieu: "HD 19/2024/VKSTC",
    tenVanBan: "Hướng dẫn 19/2024/VKSTC nghiệp vụ năm 2024",
    coQuan: "VKSND Tối cao",
    nam: 2024,
    linhVuc: "Nghiệp vụ chung",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "",
    file: "HD19-2024VKSTC.htm",
    link: ""
  },

  // ── CHỈ THỊ ─────────────────────────────────────────────────
  {
    id: "ct-001",
    soHieu: "CT 05/2022/VKSTC",
    tenVanBan: "Chỉ thị 05/2022/VKSTC về tăng cường công tác kiểm sát",
    coQuan: "VKSND Tối cao",
    nam: 2022,
    linhVuc: "Nghiệp vụ chung",
    loai: "Chỉ thị",
    tomTat: "Chỉ thị về tăng cường công tác kiểm sát, nâng cao chất lượng và hiệu quả hoạt động kiểm sát toàn ngành.",
    file: "CT05-2022VKSTC.htm",
    link: ""
  },
  {
    id: "ct-002",
    soHieu: "CT 06/2021/VKSTC",
    tenVanBan: "Chỉ thị 06/2021/VKSTC về nâng cao chất lượng tranh tụng",
    coQuan: "VKSND Tối cao",
    nam: 2021,
    linhVuc: "Hình sự",
    loai: "Chỉ thị",
    tomTat: "Chỉ thị về nâng cao chất lượng tranh tụng của kiểm sát viên tại phiên tòa hình sự.",
    file: "CT06-2021VKSTC.htm",
    link: ""
  },
  {
    id: "ct-003",
    soHieu: "CT 07/2021/VKSTC",
    tenVanBan: "Chỉ thị 07/2021/VKSTC về công tác phòng chống tham nhũng",
    coQuan: "VKSND Tối cao",
    nam: 2021,
    linhVuc: "Phòng chống tham nhũng",
    loai: "Chỉ thị",
    tomTat: "Chỉ thị tăng cường công tác phòng, chống tham nhũng trong ngành Kiểm sát nhân dân.",
    file: "CT07-2021VKSTC.htm",
    link: ""
  },

  // ── QUY CHẾ ─────────────────────────────────────────────────
  {
    id: "qc-001",
    soHieu: "QC KSGG 2023",
    tenVanBan: "Quy chế kiểm sát giam giữ, tạm giam 2023",
    coQuan: "VKSND Tối cao",
    nam: 2023,
    linhVuc: "Giam giữ",
    loai: "Quy chế",
    tomTat: "Quy chế thực hiện kiểm sát việc tạm giữ, tạm giam tại các cơ sở giam giữ.",
    file: "QCKSGG2023.htm",
    link: ""
  },
  {
    id: "qc-002",
    soHieu: "QC KSXXHS 2017",
    tenVanBan: "Quy chế kiểm sát xét xử hình sự 2017",
    coQuan: "VKSND Tối cao",
    nam: 2017,
    linhVuc: "Hình sự",
    loai: "Quy chế",
    tomTat: "Quy chế về thực hành quyền công tố và kiểm sát xét xử vụ án hình sự.",
    file: "QCKSXXHS2017.htm",
    link: ""
  },
  {
    id: "qc-003",
    soHieu: "QC KSAHC 2017",
    tenVanBan: "Quy chế kiểm sát hành chính 2017",
    coQuan: "VKSND Tối cao",
    nam: 2017,
    linhVuc: "Hành chính",
    loai: "Quy chế",
    tomTat: "Quy chế về kiểm sát xét xử vụ án hành chính.",
    file: "Quy che KSAHC 2017.htm",
    link: ""
  },
  {
    id: "qc-004",
    soHieu: "QC KSDS 2017",
    tenVanBan: "Quy chế kiểm sát dân sự 2017",
    coQuan: "VKSND Tối cao",
    nam: 2017,
    linhVuc: "Dân sự",
    loai: "Quy chế",
    tomTat: "Quy chế về kiểm sát xét xử vụ án dân sự, hôn nhân gia đình, kinh doanh thương mại.",
    file: "Quy che KSDS2017.htm",
    link: ""
  },

  // ── THÔNG TƯ LIÊN TỊCH ──────────────────────────────────────
  {
    id: "ttlt-001",
    soHieu: "TTLT 01/2026 HS",
    tenVanBan: "Thông tư liên tịch 01/2026 về tố tụng hình sự",
    coQuan: "VKSND TC – TAND TC – BCA",
    nam: 2026,
    linhVuc: "Hình sự",
    loai: "Thông tư liên tịch",
    tomTat: "",
    file: "TTLT01-2026HS.htm",
    link: ""
  },
  {
    id: "ttlt-002",
    soHieu: "TTLT 01/2025 GG",
    tenVanBan: "Thông tư liên tịch 01/2025 về tạm giữ tạm giam",
    coQuan: "BCA – VKSND TC – TAND TC",
    nam: 2025,
    linhVuc: "Giam giữ",
    loai: "Thông tư liên tịch",
    tomTat: "",
    file: "TTLT01-2025GG.htm",
    link: ""
  },
  {
    id: "ttlt-003",
    soHieu: "TTLT 01/2025 THA",
    tenVanBan: "Thông tư liên tịch 01/2025 về thi hành án",
    coQuan: "BTP – BCA – VKSND TC – TAND TC",
    nam: 2025,
    linhVuc: "Thi hành án",
    loai: "Thông tư liên tịch",
    tomTat: "",
    file: "TTLT01-2025THA.htm",
    link: ""
  },
  {
    id: "ttlt-004",
    soHieu: "TTLT 01/2025 HS",
    tenVanBan: "Thông tư liên tịch 01/2025 về nghiệp vụ hình sự",
    coQuan: "VKSND TC – BCA – TAND TC",
    nam: 2025,
    linhVuc: "Hình sự",
    loai: "Thông tư liên tịch",
    tomTat: "",
    file: "TTLT01-2025HS.htm",
    link: ""
  },
  {
    id: "ttlt-005",
    soHieu: "TTLT 13/2025 DS",
    tenVanBan: "Thông tư liên tịch 13/2025 về dân sự",
    coQuan: "BTP – TAND TC – VKSND TC",
    nam: 2025,
    linhVuc: "Dân sự",
    loai: "Thông tư liên tịch",
    tomTat: "",
    file: "TTLT13-2025DS.htm",
    link: ""
  },

  // ── TÀI LIỆU TẬP HUẤN ───────────────────────────────────────
  {
    id: "th-001",
    soHieu: "TLTH GG+THAHS 2023",
    tenVanBan: "Tài liệu tập huấn kiểm sát giam giữ và thi hành án hình sự 2023",
    coQuan: "VKSND Tối cao",
    nam: 2023,
    linhVuc: "Giam giữ – Thi hành án hình sự",
    loai: "Tài liệu tập huấn",
    tomTat: "Tài liệu nghiệp vụ kiểm sát việc tạm giữ, tạm giam và kiểm sát thi hành án hình sự.",
    file: "Tai lieu tap huan GG+THAHS 2023.htm",
    link: ""
  },
  {
    id: "th-002",
    soHieu: "TLTH KSTHADS 2023",
    tenVanBan: "Tài liệu tập huấn kiểm sát thi hành án dân sự 2023",
    coQuan: "VKSND Tối cao",
    nam: 2023,
    linhVuc: "Thi hành án dân sự",
    loai: "Tài liệu tập huấn",
    tomTat: "Tài liệu nghiệp vụ kiểm sát việc thi hành án dân sự, các dạng vi phạm thường gặp và cách phát hiện.",
    file: "Tai lieu tap huan KSTHADS2023 CD1.htm",
    link: ""
  },
  {
    id: "th-003",
    soHieu: "TLTH KNTC 2018",
    tenVanBan: "Tài liệu tập huấn kỹ năng kiểm sát khiếu nại tố cáo 2018",
    coQuan: "VKSND Tối cao",
    nam: 2018,
    linhVuc: "Khiếu nại – Tố cáo",
    loai: "Tài liệu tập huấn",
    tomTat: "Kỹ năng tiếp nhận, phân loại và giải quyết đơn khiếu nại, tố cáo trong hoạt động tư pháp.",
    file: "Tai lieu tap huan khieu to 2018.htm",
    link: ""
  },
  {
    id: "th-004",
    soHieu: "TLTH DS 2019",
    tenVanBan: "Tài liệu tập huấn nghiệp vụ kiểm sát dân sự 2019",
    coQuan: "VKSND Tối cao",
    nam: 2019,
    linhVuc: "Dân sự",
    loai: "Tài liệu tập huấn",
    tomTat: "Kỹ năng kiểm sát xét xử vụ án dân sự, hôn nhân gia đình, kinh doanh thương mại.",
    file: "Tai lieu tap huan dan su 2019.htm",
    link: ""
  },

  // ── BỔ SUNG 2025 ────────────────────────────────────────────
  {
    id: "cv-010",
    soHieu: "CV 5120/2025/VKSTC",
    tenVanBan: "Công văn 5120/2025/VKSTC về triển khai Luật Tổ chức VKS 2024",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Tổ chức bộ máy",
    loai: "Công văn",
    tomTat: "Hướng dẫn các đơn vị VKS triển khai Luật Tổ chức Viện kiểm sát nhân dân 2024, sắp xếp bộ máy và phân công nhiệm vụ.",
    file: "CV5120-2025VKSTC.htm",
    link: "https://vksndtc.gov.vn/"
  },
  {
    id: "hd-009",
    soHieu: "45/HD-VKSTC",
    tenVanBan: "Hướng dẫn 45/HD-VKSTC về quản lý trường hợp VKS truy tố, Tòa án tuyên không tội",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Hình sự",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "Hướng dẫn theo dõi, báo cáo và xử lý trách nhiệm khi Viện kiểm sát truy tố nhưng Tòa án xét xử tuyên bị cáo không phạm tội; phòng chống oan sai.",
    file: "HD45-2025VKSTC.htm",
    link: "https://vksndtc.gov.vn/"
  },
  {
    id: "hd-010",
    soHieu: "46/HD-VKSTC",
    tenVanBan: "Hướng dẫn 46/HD-VKSTC về kiểm sát án dân sự theo Luật Đất đai 2024",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Dân sự",
    loai: "Hướng dẫn nghiệp vụ",
    tomTat: "Hướng dẫn kiểm sát viên thực hiện kiểm sát xét xử tranh chấp đất đai, áp dụng Luật Đất đai 2024 và Nghị định 106/2024/NĐ-CP.",
    file: "HD46-2025VKSTC.htm",
    link: ""
  },
  {
    id: "th-005",
    soHieu: "TLTH VKS 2024 2025",
    tenVanBan: "Tài liệu tập huấn nghiệp vụ kiểm sát theo Luật Tổ chức VKS 2024",
    coQuan: "VKSND Tối cao",
    nam: 2025,
    linhVuc: "Nghiệp vụ chung",
    loai: "Tài liệu tập huấn",
    tomTat: "Tài liệu tập huấn về tổ chức, nhiệm vụ, quyền hạn VKS theo Luật 62/2024/QH15 và các quy định hướng dẫn thi hành.",
    file: "Tai lieu tap huan VKS 2024-2025.htm",
    link: ""
  },
  {
    id: "cv-011",
    soHieu: "CV 128/2025/VKSCT",
    tenVanBan: "Công văn 128/2025/VKSCT triển khai LEXVIET và số hóa hồ sơ kiểm sát",
    coQuan: "VKSND TP. Cần Thơ",
    nam: 2025,
    linhVuc: "Nghiệp vụ chung",
    loai: "Công văn",
    tomTat: "Chỉ đạo các phòng, viện triển khai hệ thống LEXVIET, cập nhật dữ liệu pháp luật và ứng dụng tra cứu trong hoạt động kiểm sát.",
    file: "",
    link: ""
  },

  // ─────────────────────────────────────────────────────────────
  // THÊM VĂN BẢN MỚI VÀO PHÍA DƯỚI ĐÂY
  // ─────────────────────────────────────────────────────────────
  // {
  //   id: "cv-xxx",
  //   soHieu: "",
  //   tenVanBan: "",
  //   coQuan: "",
  //   nam: 2024,
  //   linhVuc: "",
  //   loai: "",
  //   tomTat: "",
  //   file: "",
  //   link: ""
  // },

];
