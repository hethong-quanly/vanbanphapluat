// ============================================================
// db_02_quytrinh.js – Quy trình Kiểm sát Dân sự & Hành chính
// VKSND TP. Cần Thơ – Hệ thống LEXVIET
// ============================================================

const DB_QUY_TRINH = [

  // ══════════════════════════════════════════════════════════
  // PHẦN A: ÁN DÂN SỰ
  // ══════════════════════════════════════════════════════════

  {
    id: "qt-ds-01",
    maQuyTrinh: "DS-ST-01",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Kiểm sát thụ lý và trả lại đơn khởi kiện – Giai đoạn Sơ thẩm",
    moTa: "Quy trình kiểm sát việc Tòa án thụ lý hoặc trả lại đơn khởi kiện vụ án dân sự. Kiểm sát viên tiến hành kiểm tra thẩm quyền, thời hiệu, điều kiện khởi kiện và tư cách đương sự, sau đó lập Phiếu kiểm sát và cập nhật trạng thái vụ án.",
    cacBuoc: [
      "Yêu cầu Tòa án chuyển Thông báo thụ lý hoặc Quyết định trả lại đơn khởi kiện.",
      "Kiểm tra thẩm quyền giải quyết, thời hiệu khởi kiện, điều kiện khởi kiện và tư cách đương sự.",
      "Lập Phiếu kiểm sát, ghi nhận kết quả kiểm tra.",
      "[Nếu đúng pháp luật] Cập nhật phần mềm trạng thái 'Đang giải quyết', vào sổ thụ lý kiểm sát.",
      "[Nếu có vi phạm] KSV dự thảo văn bản Kiến nghị trình Lãnh đạo viện ký ban hành.",
      "[Tòa án chấp nhận Kiến nghị] Tòa án thụ lý lại vụ án.",
      "[Tòa án bác bỏ Kiến nghị] Báo cáo VKS cấp trên xem xét, chỉ đạo.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 191–203)",
      "Nghị quyết 04/2017/NQ-HĐTP",
      "Quy chế nghiệp vụ kiểm sát dân sự",
    ]
  },

  {
    id: "qt-ds-02",
    maQuyTrinh: "DS-ST-02",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Kiểm sát lập hồ sơ, thu thập chứng cứ và áp dụng BPKCTT – Giai đoạn Sơ thẩm",
    moTa: "Quy trình kiểm sát quá trình Tòa án lập hồ sơ, thu thập chứng cứ và áp dụng hoặc hủy bỏ các biện pháp khẩn cấp tạm thời (BPKCTT). KSV có thể tham gia lấy lời khai, đối chất và yêu cầu thu thập thêm chứng cứ khi hồ sơ chưa đầy đủ.",
    cacBuoc: [
      "Kiểm sát các quyết định áp dụng, thay đổi hoặc hủy bỏ biện pháp khẩn cấp tạm thời (BPKCTT).",
      "Tham gia lấy lời khai đương sự, đối chất, xem xét thẩm định tại chỗ khi được Tòa án mời.",
      "Kiểm tra tính đầy đủ, hợp pháp của chứng cứ trong hồ sơ vụ án.",
      "Yêu cầu Tòa án thu thập thêm chứng cứ nếu hồ sơ chưa đầy đủ.",
      "[Vi phạm về BPKCTT] Báo cáo đề xuất Lãnh đạo ban hành Kiến nghị ngay do tính cấp bách.",
      "[Vi phạm thu thập chứng cứ] Tập hợp vi phạm để phát biểu tại phiên tòa hoặc ban hành Kiến nghị chung.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 95–109, 111–143)",
      "Nghị quyết 02/2020/NQ-HĐTP về BPKCTT",
      "Quy chế nghiệp vụ kiểm sát dân sự",
    ]
  },

  {
    id: "qt-ds-03",
    maQuyTrinh: "DS-ST-03",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Nghiên cứu hồ sơ, lập Báo cáo và Tham gia phiên tòa Sơ thẩm",
    moTa: "Quy trình KSV nghiên cứu hồ sơ sau khi có Quyết định đưa vụ án ra xét xử, lập Báo cáo đề xuất quan điểm giải quyết, dự thảo Bài phát biểu và tham gia phiên tòa sơ thẩm để phát biểu quan điểm của Viện kiểm sát.",
    cacBuoc: [
      "Nhận Quyết định đưa vụ án ra xét xử từ Tòa án.",
      "Trích cứu hồ sơ vụ án, lập phiếu trích cứu đầy đủ.",
      "Lập Báo cáo đề xuất quan điểm giải quyết vụ án trình Lãnh đạo viện phê duyệt.",
      "Dự thảo Bài phát biểu tại phiên tòa, trình Lãnh đạo duyệt trước khi xét xử.",
      "Tham gia phiên tòa, hỏi làm rõ các tình tiết còn mâu thuẫn.",
      "Phát biểu quan điểm của VKS về giải quyết vụ án.",
      "Báo cáo kết quả xét xử cho Lãnh đạo viện ngay sau phiên tòa.",
      "[Trường hợp hoãn phiên tòa] Chuyển trạng thái vụ án sang 'Tạm hoãn', chờ Quyết định mở lại.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 232–258)",
      "Quy chế nghiệp vụ kiểm sát dân sự",
      "Hướng dẫn số 46/HD-VKSTC",
    ]
  },

  {
    id: "qt-ds-04",
    maQuyTrinh: "DS-ST-04",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Kiểm sát Bản án/Quyết định Sơ thẩm và đề xuất Kháng nghị Phúc thẩm",
    moTa: "Sau khi Tòa án tuyên án, KSV nhận và kiểm sát toàn diện bản án sơ thẩm về hình thức và nội dung, đối chiếu biên bản phiên tòa. Nếu phát hiện vi phạm nghiêm trọng, tiến hành dự thảo Quyết định Kháng nghị Phúc thẩm trong thời hạn luật định.",
    cacBuoc: [
      "Nhận bản án/quyết định sơ thẩm từ Tòa án (thường trong 5 ngày kể từ ngày tuyên).",
      "Kiểm sát hình thức bản án: thể thức, ký tên, đóng dấu, công bố.",
      "Kiểm sát nội dung: đánh giá chứng cứ, áp dụng pháp luật, mức giải quyết.",
      "Đối chiếu nội dung bản án với biên bản phiên tòa.",
      "Lập Phiếu kiểm sát bản án, ghi nhận đầy đủ kết quả.",
      "[Bản án đúng pháp luật] Chuyển trạng thái 'Chờ hiệu lực / Chờ kháng cáo'. Theo dõi thời hạn kháng cáo của đương sự.",
      "[Bản án có vi phạm nghiêm trọng] Dự thảo Quyết định Kháng nghị Phúc thẩm trình Lãnh đạo viện trong thời hạn 15 ngày kể từ ngày tuyên án.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 271–281)",
      "Quy chế nghiệp vụ kiểm sát dân sự",
      "Hướng dẫn số 46/HD-VKSTC về kiểm sát bản án",
    ]
  },

  {
    id: "qt-ds-05",
    maQuyTrinh: "DS-PT-01",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Kiểm sát thụ lý Phúc thẩm và xét kháng cáo, kháng nghị",
    moTa: "Quy trình kiểm sát giai đoạn phúc thẩm: kiểm tra tính hợp lệ đơn kháng cáo, thời hạn nộp, kiểm sát Thông báo thụ lý phúc thẩm của Tòa án cấp phúc thẩm. Xử lý các trường hợp kháng cáo quá hạn hoặc Tòa án cấp sơ thẩm chậm chuyển hồ sơ.",
    cacBuoc: [
      "Tiếp nhận thông tin về kháng cáo của đương sự hoặc Quyết định Kháng nghị của VKS.",
      "Kiểm tra tính hợp lệ của đơn kháng cáo: chủ thể, phạm vi, thời hạn nộp.",
      "Kiểm sát Thông báo thụ lý phúc thẩm của Tòa án cùng cấp.",
      "[Kháng cáo quá hạn] Tham gia phiên họp xét chấp nhận kháng cáo quá hạn, phát biểu quan điểm VKS.",
      "[Tòa án sơ thẩm chậm chuyển hồ sơ] Ban hành văn bản đôn đốc hoặc Kiến nghị yêu cầu chuyển hồ sơ đúng hạn.",
      "Vào sổ theo dõi phúc thẩm, cập nhật trạng thái vụ án.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 272–292)",
      "Quy chế nghiệp vụ kiểm sát dân sự",
    ]
  },

  {
    id: "qt-ds-06",
    maQuyTrinh: "DS-PT-02",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Chuẩn bị và Tham gia phiên tòa Phúc thẩm – Kiểm sát Bản án Phúc thẩm",
    moTa: "KSV nghiên cứu hồ sơ phúc thẩm, phân tích các tài liệu, chứng cứ mới. Lập Báo cáo án trình Lãnh đạo. Tham gia phiên tòa phát biểu quan điểm VKS (giữ nguyên, sửa hoặc hủy bản án sơ thẩm). Kiểm sát bản án phúc thẩm và đề xuất Giám đốc thẩm nếu cần.",
    cacBuoc: [
      "Nghiên cứu hồ sơ phúc thẩm, phân tích nội dung kháng cáo/kháng nghị và tài liệu chứng cứ mới (nếu có).",
      "Lập Báo cáo án phúc thẩm, nêu rõ quan điểm VKS về việc Giữ nguyên / Sửa / Hủy bản án sơ thẩm.",
      "Trình Lãnh đạo viện phê duyệt Báo cáo và Bài phát biểu.",
      "Tham gia phiên tòa phúc thẩm, phát biểu quan điểm của VKS.",
      "Kiểm sát bản án phúc thẩm sau khi HĐXX tuyên án.",
      "[Bản án phúc thẩm đúng pháp luật] Kết thúc luồng giải quyết thông thường, lưu hồ sơ kiểm sát.",
      "[Bản án phúc thẩm vi phạm nghiêm trọng] Báo cáo VKS cấp cao / VKSND Tối cao đề xuất Kháng nghị Giám đốc thẩm.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 294–315)",
      "Quy chế nghiệp vụ kiểm sát dân sự",
    ]
  },

  {
    id: "qt-ds-07",
    maQuyTrinh: "DS-GDT-01",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Phân loại đơn, nghiên cứu và Kháng nghị Giám đốc thẩm / Tái thẩm",
    moTa: "Quy trình tiếp nhận và phân loại đơn đề nghị Giám đốc thẩm hoặc Tái thẩm. KSV rút hồ sơ gốc, nghiên cứu xác định có sai lầm nghiêm trọng (GĐT) hoặc tình tiết mới (Tái thẩm) hay không. Tham mưu ban hành Quyết định Kháng nghị nếu có căn cứ.",
    cacBuoc: [
      "Tiếp nhận và phân loại đơn đề nghị Giám đốc thẩm (GĐT) hoặc Tái thẩm (TT) từ đương sự.",
      "Yêu cầu Tòa án chuyển hồ sơ gốc vụ án để nghiên cứu.",
      "Nghiên cứu hồ sơ, xác định có sai lầm nghiêm trọng trong xét xử (GĐT) hoặc tình tiết mới phát sinh (TT) hay không.",
      "Lập Báo cáo đề xuất hướng xử lý trình Lãnh đạo viện.",
      "[Không có căn cứ] Ra Thông báo trả lời đương sự giải thích lý do không kháng nghị.",
      "[Có căn cứ] Tham mưu Lãnh đạo ban hành Quyết định Kháng nghị GĐT/TT.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 325–357)",
      "Thông tư liên tịch 01/2014/TTLT-TANDTC-VKSNDTC",
      "Quy chế nghiệp vụ kiểm sát dân sự",
    ]
  },

  {
    id: "qt-ds-08",
    maQuyTrinh: "DS-GDT-02",
    loai: "Dân sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Tham gia phiên tòa Giám đốc thẩm / Tái thẩm và Kiểm sát Quyết định",
    moTa: "KSV bảo vệ Quyết định kháng nghị của Viện kiểm sát tại phiên tòa Giám đốc thẩm hoặc Tái thẩm. Đề xuất Hội đồng xét xử hướng giải quyết phù hợp pháp luật. Kiểm sát Quyết định GĐT/TT sau khi tuyên.",
    cacBuoc: [
      "Chuẩn bị luận cứ bảo vệ Quyết định Kháng nghị tại phiên tòa GĐT/TT.",
      "Tham gia phiên tòa Giám đốc thẩm hoặc Tái thẩm.",
      "Phát biểu quan điểm VKS, bảo vệ kháng nghị và đề xuất hướng giải quyết của Hội đồng xét xử.",
      "Kiểm sát Quyết định GĐT/TT sau khi Hội đồng tuyên.",
      "Lập Phiếu kiểm sát Quyết định GĐT/TT, báo cáo kết quả cho Lãnh đạo.",
      "Lưu hồ sơ kiểm sát, kết thúc vụ án.",
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Dân sự 2015 (Điều 336–357)",
      "Quy chế nghiệp vụ kiểm sát dân sự",
    ]
  },

  // ══════════════════════════════════════════════════════════
  // PHẦN B: ÁN HÀNH CHÍNH
  // ══════════════════════════════════════════════════════════

  {
    id: "qt-hc-01",
    maQuyTrinh: "HC-ST-01",
    loai: "Hành chính",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Kiểm sát việc trả lại đơn khởi kiện và thụ lý vụ án Hành chính – Sơ thẩm",
    moTa: "Quy trình kiểm sát việc Tòa án hành chính thụ lý hoặc trả lại đơn khởi kiện. Đặc thù của án hành chính là kiểm tra đối tượng khởi kiện phải là Quyết định hành chính hoặc Hành vi hành chính thuộc thẩm quyền của Tòa án hành chính.",
    cacBuoc: [
      "Yêu cầu Tòa án chuyển Thông báo thụ lý hoặc Quyết định trả lại đơn khởi kiện hành chính.",
      "Kiểm tra đối tượng khởi kiện: Quyết định hành chính hoặc Hành vi hành chính có thuộc thẩm quyền xét xử của Tòa án không.",
      "Kiểm tra thời hiệu khởi kiện, điều kiện khởi kiện theo Luật Tố tụng Hành chính.",
      "Lập Phiếu kiểm sát, ghi nhận kết quả.",
      "[Đúng pháp luật] Chuyển trạng thái sang 'Đang giải quyết', đưa vào sổ theo dõi.",
      "[Tòa án trả lại đơn sai] KSV báo cáo Lãnh đạo ký văn bản Kiến nghị yêu cầu thụ lý lại.",
      "[Tòa án chấp nhận Kiến nghị] Thụ lý lại vụ án hành chính.",
      "[Tòa án bác bỏ Kiến nghị] Báo cáo VKS cấp trên xem xét, chỉ đạo.",
    ],
    vanBanCanCu: [
      "Luật Tố tụng Hành chính 2015 (Điều 116–130)",
      "Nghị quyết 02/2011/NQ-HĐTP",
      "Quy chế nghiệp vụ kiểm sát hành chính",
    ]
  },

  {
    id: "qt-hc-02",
    maQuyTrinh: "HC-ST-02",
    loai: "Hành chính",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Kiểm sát đối thoại và thu thập chứng cứ – Giai đoạn Sơ thẩm Hành chính",
    moTa: "Đối thoại là thủ tục đặc thù và trọng tâm của án hành chính (không có hòa giải như dân sự). KSV kiểm sát quá trình đối thoại, có thể trực tiếp xác minh thu thập chứng cứ nếu Tòa án không thực hiện. Kết quả đối thoại quyết định luồng xử lý tiếp theo.",
    cacBuoc: [
      "Kiểm sát quá trình Tòa án tổ chức đối thoại giữa người khởi kiện và người bị kiện (cơ quan hành chính).",
      "KSV có thể trực tiếp tiến hành xác minh, thu thập chứng cứ nếu Tòa án không thực hiện hoặc thực hiện không đầy đủ.",
      "[Các bên đối thoại thành] Tòa án ra Quyết định công nhận kết quả đối thoại thành. KSV kiểm sát Quyết định này và kết thúc luồng giải quyết.",
      "[Đối thoại không thành] Tòa án ra Quyết định đưa vụ án ra xét xử sơ thẩm. Chuyển sang quy trình tham gia phiên tòa.",
      "Lập Phiếu theo dõi kết quả đối thoại, lưu vào hồ sơ kiểm sát.",
    ],
    vanBanCanCu: [
      "Luật Tố tụng Hành chính 2015 (Điều 134–140)",
      "Nghị quyết 02/2020/NQ-HĐTP về đối thoại trong TTHC",
      "Quy chế nghiệp vụ kiểm sát hành chính",
    ]
  },

  {
    id: "qt-hc-03",
    maQuyTrinh: "HC-ST-03",
    loai: "Hành chính",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Lập hồ sơ kiểm sát, Tham gia phiên tòa và Kiểm sát Bản án Hành chính Sơ thẩm",
    moTa: "KSV lập Báo cáo đề xuất đánh giá tính hợp pháp của Quyết định hành chính hoặc Hành vi hành chính bị kiện. Tham gia phiên tòa, phát biểu Bài phát biểu. Kiểm sát Bản án hành chính sau khi tuyên, đề xuất kháng nghị nếu vi phạm.",
    cacBuoc: [
      "Nghiên cứu hồ sơ, đánh giá tính hợp pháp của Quyết định hành chính / Hành vi hành chính bị kiện.",
      "Lập Báo cáo đề xuất quan điểm VKS về tính hợp pháp, trình Lãnh đạo phê duyệt.",
      "Chuẩn bị Bài phát biểu tại phiên tòa (kết luận về tính hợp pháp của quyết định, hành vi bị kiện).",
      "Tham gia phiên tòa sơ thẩm hành chính, phát biểu quan điểm VKS.",
      "Nhận và kiểm sát Bản án hành chính sau khi Hội đồng xét xử tuyên.",
      "[Bản án đúng] Lưu hồ sơ kiểm sát, chuyển trạng thái chờ hiệu lực.",
      "[Bản án vi phạm] Soạn dự thảo Quyết định Kháng nghị Phúc thẩm trình Lãnh đạo viện trong thời hạn 15 ngày kể từ ngày tuyên.",
    ],
    vanBanCanCu: [
      "Luật Tố tụng Hành chính 2015 (Điều 153–193)",
      "Quy chế nghiệp vụ kiểm sát hành chính",
      "Hướng dẫn số 46/HD-VKSTC",
    ]
  },

  {
    id: "qt-hc-04",
    maQuyTrinh: "HC-PT-01",
    loai: "Hành chính",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Kiểm sát giai đoạn Phúc thẩm Hành chính",
    moTa: "Quy trình kiểm sát phúc thẩm án hành chính: kiểm sát thụ lý, rút hồ sơ, phân tích kháng cáo/kháng nghị, tham gia phiên tòa phúc thẩm. Trường hợp HĐXX tuyên khác quan điểm VKS, báo cáo ngay VKS cấp trên để xem xét Giám đốc thẩm.",
    cacBuoc: [
      "Kiểm sát thụ lý phúc thẩm hành chính của Tòa án cấp phúc thẩm.",
      "Rút hồ sơ, nghiên cứu nội dung kháng cáo của đương sự hoặc kháng nghị của VKS.",
      "Phân tích, đánh giá căn cứ kháng cáo/kháng nghị và hồ sơ bổ sung.",
      "Lập Báo cáo án phúc thẩm, trình Lãnh đạo phê duyệt.",
      "Tham gia phiên tòa phúc thẩm hành chính, phát biểu quan điểm giải quyết.",
      "Kiểm sát Bản án phúc thẩm hành chính sau khi tuyên.",
      "[HĐXX tuyên khác quan điểm VKS] Báo cáo ngay VKS cấp trên bằng văn bản để xem xét Kháng nghị Giám đốc thẩm.",
    ],
    vanBanCanCu: [
      "Luật Tố tụng Hành chính 2015 (Điều 204–240)",
      "Quy chế nghiệp vụ kiểm sát hành chính",
    ]
  },

  {
    id: "qt-hc-05",
    maQuyTrinh: "HC-GDT-01",
    loai: "Hành chính",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/01/2024",
    tieuDe: "Giám đốc thẩm / Tái thẩm án Hành chính",
    moTa: "Quy trình xử lý đơn đề nghị Giám đốc thẩm hoặc Tái thẩm án hành chính. KSV rút hồ sơ gốc, nghiên cứu xác định có vi phạm nghiêm trọng hoặc tình tiết mới. Dự thảo Quyết định Kháng nghị nếu có căn cứ và tham gia phiên tòa bảo vệ kháng nghị.",
    cacBuoc: [
      "Tiếp nhận đơn đề nghị Giám đốc thẩm hoặc Tái thẩm án hành chính.",
      "Rút hồ sơ gốc vụ án từ Tòa án để nghiên cứu.",
      "Nghiên cứu xác định vi phạm pháp luật nghiêm trọng (GĐT) hoặc tình tiết mới phát sinh (Tái thẩm).",
      "[Không có căn cứ] Ra Thông báo trả lời đương sự.",
      "[Có căn cứ] Dự thảo Quyết định Kháng nghị GĐT/TT, trình Lãnh đạo có thẩm quyền ký ban hành.",
      "Tham gia phiên tòa Giám đốc thẩm / Tái thẩm, bảo vệ Quyết định Kháng nghị.",
      "Kiểm sát Quyết định GĐT/TT sau khi Hội đồng tuyên, lưu hồ sơ kiểm sát.",
    ],
    vanBanCanCu: [
      "Luật Tố tụng Hành chính 2015 (Điều 241–268)",
      "Quy chế nghiệp vụ kiểm sát hành chính",
      "Thông tư liên tịch 01/2014/TTLT-TANDTC-VKSNDTC",
    ]
  },

];

// Không dùng export vì file được load bằng thẻ <script> trong HTML
// Biến DB_QUY_TRINH sẽ được đọc trực tiếp bởi index.html
