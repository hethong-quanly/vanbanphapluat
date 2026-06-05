// ============================================================
// db_02_quytrinh.js – Quy trình Kiểm sát Dân sự & Hành chính, THAHS, Hình sự
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

  // ══════════════════════════════════════════════════════════
  // PHẦN C: KIỂM SÁT TẠM GIỮ, TẠM GIAM VÀ THI HÀNH ÁN HÌNH SỰ (THAHS)
  // ══════════════════════════════════════════════════════════

  {
    id: "qt-tg-01",
    maQuyTrinh: "TG-TG-01",
    loai: "Tạm giữ, tạm giam",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "26/01/2024",
    tieuDe: "Trực tiếp kiểm sát việc tạm giữ, tạm giam tại Nhà tạm giữ Công an",
    moTa: "Quy trình kiểm sát định kỳ hoặc đột xuất tại Cơ sở giam giữ nhằm bảo đảm việc thực hiện nghiêm chỉnh lệnh, quyết định của cơ quan có thẩm quyền; bảo đảm quyền con người, các chế độ ăn, ở, chăm sóc y tế đối với người bị tạm giữ, tạm giam.",
    cacBuoc: [
      "Xác định thời điểm, phạm vi kiểm sát (tiến hành toàn diện vào 06 tháng đầu năm và 06 tháng cuối năm) hoặc trực tiếp kiểm sát đột xuất.",
      "Kiểm tra hệ thống hồ sơ, sổ theo dõi tạm giữ, tạm giam: việc lập danh bản, chỉ bản; lưu ý kiểm tra thân thể khi giao nhận người bị tạm giữ, tạm giam phải do cán bộ cùng giới thực hiện.",
      "Kiểm tra cơ sở vật chất phục vụ công tác quản lý: hệ thống loa truyền thanh, buồng kỷ luật, hệ thống camera giám sát an ninh tại các buồng giam.",
      "Kiểm sát việc thực hiện chế độ ăn, ở, cấp phát tư trang, nhu yếu phẩm, và chăm sóc y tế; đặc biệt chế độ ăn nhân đôi/nhân bốn đối với người trích xuất đi xét xử hoặc phụ nữ có thai đi khám bệnh.",
      "Lập Phiếu kiểm sát, tổng hợp vi phạm ban hành Kết luận, Kiến nghị hoặc Kháng nghị yêu cầu Nhà tạm giữ khắc phục.",
      "Tổ chức rút kinh nghiệm trực tiếp với VKS cấp dưới về kết quả kiểm sát sau khi ban hành Kết luận."
    ],
    vanBanCanCu: [
      "Luật Thi hành tạm giữ, tạm giam",
      "Quy chế 259/QĐ-VKSTC ngày 20/7/2023",
      "Thông báo số 20/TB-VKSTC ngày 26/01/2024 của VKSND tối cao"
    ]
  },

  {
    id: "qt-tg-02",
    maQuyTrinh: "TG-TA-01",
    loai: "Tạm giữ, tạm giam",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "14/01/2022",
    tieuDe: "Kiểm sát việc Tòa án áp dụng biện pháp tạm giam và ra quyết định thi hành án",
    moTa: "Quy trình theo dõi, kiểm sát các quyết định của Tòa án trong việc ra lệnh tạm giam, tổng hợp hình phạt, ra quyết định thi hành án, và hoãn chấp hành hình phạt tù nhằm phòng ngừa lạm dụng, kéo dài thời gian giam giữ trái luật.",
    cacBuoc: [
      "Kiểm sát thời hạn và tính liên tục của các quyết định tạm giam do Tòa án ban hành; kiên quyết chống lạm dụng lệnh tạm giam 'cho đến khi kết thúc phiên tòa' dẫn đến vi phạm thời hạn chuẩn bị xét xử.",
      "Kiểm tra việc Tòa án tổng hợp hình phạt: có trừ thời gian tạm giữ, tạm giam không; việc tổng hợp nhiều bản án; và mức hình phạt cao nhất đối với người dưới 18 tuổi.",
      "Kiểm sát thời hạn ban hành và gửi quyết định thi hành án hình sự bảo đảm bản án có hiệu lực phải được thi hành đúng hạn.",
      "Kiểm tra tính có căn cứ pháp luật đối với các Quyết định hoãn chấp hành hình phạt tù (bệnh nặng, lao động duy nhất, nuôi con nhỏ dưới 36 tháng).",
      "Tùy tính chất vi phạm, dự thảo văn bản Kháng nghị hoặc Kiến nghị yêu cầu Tòa án chấm dứt và khắc phục vi phạm."
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Hình sự (Điều 277, 278, 346, 347, 364)",
      "Bộ luật Hình sự (Điều 38, 55, 56, 103, 104)",
      "Thông báo số 14/TB-VKSTC ngày 14/01/2022 của VKSND tối cao"
    ]
  },

  {
    id: "qt-ths-01",
    maQuyTrinh: "THAHS-01",
    loai: "Thi hành án hình sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "11/10/2021",
    tieuDe: "Kiểm sát xét rút ngắn thời gian thử thách (Án treo, Tha tù trước thời hạn)",
    moTa: "Quy trình kiểm sát hồ sơ đề nghị, tham gia phiên họp xét và quyết định rút ngắn thời gian thử thách đối với người được tha tù trước thời hạn có điều kiện hoặc người được hưởng án treo do Tòa án tổ chức.",
    cacBuoc: [
      "Tiếp nhận và kiểm sát hồ sơ đề nghị rút ngắn thời gian thử thách, bao gồm bản sao quyết định tha tù/án treo, tài liệu thể hiện sự tiến bộ và văn bản đề nghị của UBND cấp xã/đơn vị quân đội.",
      "[Trường hợp đủ điều kiện nhưng chưa đề nghị] VKS ban hành văn bản yêu cầu cơ quan có thẩm quyền lập hồ sơ đề nghị rút ngắn thời gian thử thách.",
      "Cử Kiểm sát viên tham gia phiên họp xét rút ngắn thời gian thử thách do Tòa án tổ chức.",
      "Kiểm sát viên trình bày quan điểm của VKS về đề nghị rút ngắn thời gian thử thách và việc tuân theo pháp luật tại phiên họp.",
      "Kiểm sát hình thức, nội dung Quyết định chấp nhận/không chấp nhận của Tòa án.",
      "Thực hiện quyền Kháng nghị theo thủ tục tố tụng nếu phát hiện Quyết định vi phạm pháp luật."
    ],
    vanBanCanCu: [
      "Luật Thi hành án hình sự 2019 (Điều 59, 65, 85, 90)",
      "Thông tư liên tịch số 03/2021/TTLT-TANDTC-VKSNDTC-BCA-BQP"
    ]
  },

  {
    id: "qt-ths-02",
    maQuyTrinh: "THAHS-02",
    loai: "Thi hành án hình sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "30/11/2023",
    tieuDe: "Kiểm sát mô hình thí điểm phạm nhân lao động, hướng nghiệp ngoài trại giam",
    moTa: "Quy trình trực tiếp kiểm sát các trại giam thực hiện thí điểm tổ chức hoạt động lao động, hướng nghiệp, dạy nghề cho phạm nhân tại khu lao động ngoài trại giam do doanh nghiệp hợp tác.",
    cacBuoc: [
      "Kiểm sát thủ tục lựa chọn doanh nghiệp hợp tác: doanh nghiệp không có vốn đầu tư nước ngoài, ngành nghề không thuộc danh mục nặng nhọc, độc hại, khoảng cách đến trại giam dưới 50km.",
      "Kiểm tra việc ký kết hợp đồng hợp tác, thủ tục lập hồ sơ, thẩm định phê duyệt thành lập khu lao động.",
      "Kiểm sát tiêu chí và sự tự nguyện của phạm nhân khi được đưa ra khu lao động ngoài trại giam.",
      "Kiểm tra công tác quản lý giam giữ, an ninh, tuần tra kiểm soát, phát hiện vật cấm và điều kiện cơ sở vật chất (buồng giam, khu bếp, y tế, tường rào).",
      "Kiểm sát chế độ lao động, theo dõi sổ sách hạch toán kết quả thu, chi và phân phối kết quả lao động của phạm nhân.",
      "Kiểm sát việc đưa phạm nhân trở lại trại giam (ít nhất trước 01 tháng đối với người sắp hết hạn tù/đặc xá hoặc đưa ngay về khi có vi phạm kỷ luật).",
      "Chủ động nắm tình hình, phối hợp giải quyết và báo cáo VKSND Tối cao khi xảy ra các vụ việc đột xuất (trốn, chết, phạm tội mới, tai nạn)."
    ],
    vanBanCanCu: [
      "Nghị quyết số 54/2022/QH15 của Quốc hội",
      "Nghị định số 09/2023/NĐ-CP của Chính phủ",
      "Hướng dẫn số 22/HD-VKSTC ngày 30/11/2023 của VKSND tối cao"
    ]
  },

  // ══════════════════════════════════════════════════════════
  // PHẦN D: ÁN HÌNH SỰ (XÉT XỬ SƠ THẨM, PHÚC THẨM, GIÁM ĐỐC THẨM, TÁI THẨM)
  // ══════════════════════════════════════════════════════════

  {
    id: "qt-hs-01",
    maQuyTrinh: "HS-ST-01",
    loai: "Hình sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "09/2022",
    tieuDe: "Kiểm sát xét xử sơ thẩm và Kỹ năng định tội danh, khung hình phạt",
    moTa: "Quy trình và kỹ năng kiểm sát xét xử sơ thẩm án hình sự, tập trung nhận diện vi phạm thủ tục tố tụng, đánh giá chứng cứ, xác định đúng tội danh (VD: Giết người hay Cố ý gây thương tích) và các tình tiết định khung hình phạt, tránh bỏ lọt tội phạm.",
    cacBuoc: [
      "Kiểm sát chặt chẽ thời hạn chuẩn bị xét xử, việc triệu tập người tham gia tố tụng và nội dung Quyết định đưa vụ án ra xét xử của Tòa án.",
      "Tại phiên tòa, theo dõi diễn biến, kiểm sát thủ tục tố tụng của HĐXX và Thư ký, đặc biệt lưu ý việc hoãn phiên tòa hoặc vắng mặt người tham gia tố tụng.",
      "Vận dụng kỹ năng phân tích hành vi khách quan, hung khí, cường độ tấn công, vùng trọng yếu để xác định chính xác tội danh (VD: Giết người vs Cố ý gây thương tích, Cướp tài sản vs Cưỡng đoạt tài sản) và tình tiết định khung (như có tính chất côn đồ).",
      "Đánh giá toàn diện chứng cứ buộc tội và gỡ tội, tránh việc chỉ dựa vào lời nhận tội hoặc thu giữ vật chứng mà bỏ lọt hành vi (như làm giả con dấu) hay người đồng phạm.",
      "Sau phiên tòa, kiểm sát chặt chẽ Biên bản phiên tòa và Bản án sơ thẩm về phần nhận định, định tội, quyết định hình phạt, xử lý vật chứng và án phí."
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Hình sự (Điều 255, 276, 277)",
      "Bộ luật Hình sự (Điều 123, 134, 168...)",
      "Tài liệu Hội nghị tập huấn Rút kinh nghiệm của VKSNDTC (09/2022)"
    ]
  },

  {
    id: "qt-hs-02",
    maQuyTrinh: "HS-PT-01",
    loai: "Hình sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "09/2022",
    tieuDe: "Thực hành quyền công tố, kiểm sát xét xử Phúc thẩm án hình sự",
    moTa: "Kỹ năng THQCT và kiểm sát xét xử phúc thẩm nhằm phát hiện sai lầm về áp dụng pháp luật, thiếu sót về tố tụng của cấp sơ thẩm, từ đó kháng nghị hoặc bảo vệ kháng nghị, kiến nghị yêu cầu khắc phục vi phạm.",
    cacBuoc: [
      "Nghiên cứu hồ sơ, phân tích nội dung kháng cáo, kháng nghị và đánh giá các tình tiết, chứng cứ mới phát sinh sau khi xét xử sơ thẩm.",
      "Đánh giá lại toàn bộ hành vi khách quan của bị cáo và người liên quan để phát hiện các trường hợp cấp sơ thẩm bỏ lọt tội phạm, bỏ lọt đồng phạm hoặc định sai tội danh.",
      "Kiểm tra việc áp dụng các tình tiết định khung hình phạt, tình tiết tăng nặng (như tái phạm, tái phạm nguy hiểm) và giảm nhẹ trách nhiệm hình sự của bản án sơ thẩm xem có căn cứ không.",
      "Báo cáo Lãnh đạo Viện để xem xét rút kháng nghị (nếu không có căn cứ) hoặc tiếp tục bảo vệ kháng nghị tại phiên tòa phúc thẩm.",
      "Kiểm sát bản án phúc thẩm sau khi tuyên, nếu phát hiện vi phạm nghiêm trọng vượt quá phạm vi kháng cáo, kháng nghị thì báo cáo VKSND cấp cao/Tối cao xem xét kháng nghị Giám đốc thẩm."
    ],
    vanBanCanCu: [
      "Bộ luật Tố tụng Hình sự (Phần Phúc thẩm)",
      "Tài liệu Hội nghị tập huấn Rút kinh nghiệm của VKSNDTC (09/2022)"
    ]
  },

  {
    id: "qt-hs-03",
    maQuyTrinh: "HS-GDT-01",
    loai: "Hình sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "04/09/2025",
    tieuDe: "Giải quyết đơn đề nghị và kháng nghị Giám đốc thẩm, Tái thẩm",
    moTa: "Quy định về việc phân công giải quyết đơn đề nghị, văn bản yêu cầu, kiến nghị kháng nghị theo thủ tục Giám đốc thẩm, Tái thẩm đối với bản án, quyết định của Tòa án đã có hiệu lực pháp luật tại VKSND tối cao.",
    cacBuoc: [
      "Tiếp nhận và phân công Kiểm sát viên, Kiểm tra viên lập hồ sơ kiểm sát, nghiên cứu đơn đề nghị kháng nghị Giám đốc thẩm, Tái thẩm.",
      "Đề xuất yêu cầu Tòa án chuyển hồ sơ vụ án hoặc rút hồ sơ kiểm sát của VKS cấp dưới để nghiên cứu, làm rõ vi phạm pháp luật nghiêm trọng hoặc tình tiết mới.",
      "[Nếu không có căn cứ] Tham mưu ký Thông báo không kháng nghị GĐT/TT và trả lời cho người có đơn đề nghị biết.",
      "[Nếu có căn cứ] Báo cáo Phó Viện trưởng VKSND tối cao phụ trách lĩnh vực để ban hành Quyết định kháng nghị GĐT/TT.",
      "Trong trường hợp cần thiết, đề xuất hoãn thi hành án trong quá trình giải quyết đơn đề nghị kháng nghị GĐT/TT.",
      "Trường hợp có quyết định kháng nghị của Chánh án TAND tối cao, VKS lập báo cáo, đề xuất quan điểm và tham gia phiên tòa bảo vệ hoặc nêu rõ quan điểm."
    ],
    vanBanCanCu: [
      "Quyết định số 337/QĐ-VKSTC ngày 04/9/2025 của VKSND tối cao",
      "Bộ luật Tố tụng Hình sự (Phần Giám đốc thẩm, Tái thẩm)"
    ]
  },

  {
    id: "qt-hs-04",
    maQuyTrinh: "HS-QL-01",
    loai: "Hình sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "11/12/2025",
    tieuDe: "Quản lý và xử lý trường hợp Viện kiểm sát truy tố, Tòa án tuyên không tội",
    moTa: "Quy trình theo dõi, báo cáo, và xử lý trách nhiệm đối với các vụ án Viện kiểm sát truy tố nhưng Tòa án xét xử tuyên bị cáo không phạm tội nhằm chống oan sai và hạn chế bỏ lọt tội phạm.",
    cacBuoc: [
      "Khi phát sinh trường hợp Tòa tuyên không phạm tội, VKS các cấp phải báo cáo nhanh (trong 24 giờ) gửi VKS cấp trên trực tiếp và Vụ 7 VKSND tối cao.",
      "Yêu cầu KSV, Lãnh đạo thụ lý báo cáo đề xuất quan điểm xử lý ngay; làm rõ tính có căn cứ, hợp pháp của bản án.",
      "[Nếu Tòa án tuyên không có căn cứ/trái pháp luật] Khẩn trương ban hành kháng nghị hoặc báo cáo đề xuất kháng nghị lên VKS cấp trên.",
      "[Nếu Tòa án tuyên có căn cứ/đúng pháp luật] Tổ chức kiểm điểm, làm rõ trách nhiệm của KSV, Lãnh đạo; tổ chức tiếp nhận và giải quyết yêu cầu bồi thường thiệt hại thuộc trách nhiệm của VKS.",
      "Định kỳ (hàng tháng, 6 tháng, 12 tháng) lập báo cáo tổng hợp, phân tích nguyên nhân và giải pháp khắc phục gửi VKS cấp trên theo quy định."
    ],
    vanBanCanCu: [
      "Hướng dẫn số 45/HD-VKSTC ngày 11/12/2025 của VKSND tối cao",
      "Luật Trách nhiệm bồi thường của Nhà nước"
    ]
  },

  {
    id: "qt-hs-05",
    maQuyTrinh: "HS-VM-01",
    loai: "Hình sự",
    trangThai: "Đang áp dụng",
    ngayBanHanh: "01/07/2025",
    tieuDe: "Phối hợp điều tra, truy tố, xét xử vắng mặt bị can, bị cáo",
    moTa: "Trình tự, thủ tục phối hợp liên ngành khi bị can, bị cáo bỏ trốn, không biết rõ ở đâu (truy nã không kết quả) hoặc đang ở nước ngoài không thể triệu tập, nhằm đảm bảo giải quyết vụ án đúng pháp luật.",
    cacBuoc: [
      "Xác định điều kiện: Đã thu thập đủ chứng cứ chứng minh tội phạm và bảo đảm quyền bào chữa (phải thông báo cho người đại diện hoặc chỉ định người bào chữa nếu vắng mặt).",
      "[Giai đoạn Điều tra] Chậm nhất 20 ngày trước khi kết thúc điều tra, Cơ quan điều tra và VKS họp thống nhất. Nếu đủ điều kiện, CQĐT ban hành Bản kết luận điều tra đề nghị truy tố vắng mặt.",
      "[Giai đoạn Truy tố] VKS kiểm tra, nếu bị can trốn thì yêu cầu truy nã; hết thời hạn truy nã không kết quả, VKS xem xét ban hành Cáo trạng truy tố vắng mặt.",
      "[Giai đoạn Xét xử] Nếu bị cáo trốn sau khi có Quyết định đưa vụ án ra xét xử, HĐXX tạm đình chỉ và yêu cầu truy nã. Quá 15 ngày không kết quả thì phục hồi và ra quyết định xét xử vắng mặt.",
      "Thực hiện việc giao, gửi, hoặc niêm yết công khai các lệnh, quyết định, văn bản tố tụng (kết luận điều tra, cáo trạng, bản án) đối với bị can, bị cáo vắng mặt theo đúng quy định."
    ],
    vanBanCanCu: [
      "Thông tư liên tịch số 05/2025/TTLT-BCA-BQP-VKSNDTC-TANDTC ngày 01/7/2025",
      "Bộ luật Tố tụng Hình sự (Điều 233, 243, 290)"
    ]
  }

];

// Không dùng export vì file được load bằng thẻ <script> trong HTML
// Biến DB_QUY_TRINH sẽ được đọc trực tiếp bởi index.html
