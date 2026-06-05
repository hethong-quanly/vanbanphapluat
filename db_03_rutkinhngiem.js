// ================================================================
// db_03_rutkinhngiem.js – THÔNG BÁO RÚT KINH NGHIỆM
// VKSND TP. Cần Thơ – Hệ thống LEXVIET
// ----------------------------------------------------------------
// Cấu trúc mỗi bản ghi:
//   id             : string – VD: "rkn-001"
//   soThongBao     : string – Số hiệu thông báo
//   tieuDe         : string – Tiêu đề đầy đủ
//   ngayBanHanh    : string – DD/MM/YYYY hoặc năm
//   linhVuc        : string – Lĩnh vực liên quan
//   capBanHanh     : string – Cơ quan / đơn vị ban hành
//   noiDungViPham  : string – Mô tả tồn tại, vi phạm
//   baiHoc         : string – Bài học kinh nghiệm rút ra
//   bienPhap       : string – Biện pháp khắc phục
//   file           : string – Tên file CHM (nếu có)
// ================================================================

const DB_RUT_KINH_NGHIEM = [

  // ── VKSND TP. CẦN THƠ ───────────────────────────────────────
  {
    id: "rkn-001",
    soThongBao: "01/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về việc kiểm sát viên không phát hiện kịp thời vi phạm thủ tục tố tụng trong giai đoạn điều tra",
    ngayBanHanh: "15/01/2024",
    linhVuc: "Hình sự",
    capBanHanh: "VKSND TP. Cần Thơ",
    noiDungViPham: "Trong quá trình kiểm sát điều tra vụ án cố ý gây thương tích, kiểm sát viên không kịp thời phát hiện Cơ quan điều tra vi phạm thời hạn điều tra theo quy định tại Điều 174 BLTTHS 2015.",
    baiHoc: "Kiểm sát viên cần theo dõi chặt chẽ thời hạn tố tụng; lập bảng theo dõi thời hạn điều tra cho từng vụ án được phân công.",
    bienPhap: "Phân công kiểm sát viên chuyên trách theo dõi thời hạn; tổ chức kiểm tra định kỳ hàng tháng.",
    file: ""
  },
  {
    id: "rkn-002",
    soThongBao: "02/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về chất lượng bản cáo trạng còn thiếu căn cứ pháp lý trong vụ án kinh tế",
    ngayBanHanh: "20/02/2024",
    linhVuc: "Kinh tế",
    capBanHanh: "VKSND TP. Cần Thơ",
    noiDungViPham: "Bản cáo trạng trong vụ án lừa đảo chiếm đoạt tài sản bị Hội đồng xét xử nhận xét còn thiếu phân tích về yếu tố 'thủ đoạn gian dối' theo cấu thành tội phạm Điều 174 BLHS.",
    baiHoc: "Cáo trạng phải phân tích đầy đủ 04 yếu tố cấu thành tội phạm: Chủ thể – Khách thể – Mặt khách quan – Mặt chủ quan.",
    bienPhap: "Tổ chức tập huấn kỹ năng viết cáo trạng; thành lập tổ kiểm tra chất lượng cáo trạng trước khi ban hành.",
    file: ""
  },
  {
    id: "rkn-003",
    soThongBao: "03/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về kiểm sát việc giải quyết tố giác tội phạm quá hạn",
    ngayBanHanh: "10/03/2024",
    linhVuc: "Hình sự",
    capBanHanh: "VKSND TP. Cần Thơ",
    noiDungViPham: "Cơ quan Cảnh sát điều tra để 03 vụ tố giác tội phạm quá thời hạn giải quyết 02 tháng (thay vì 20 ngày theo Điều 147 BLTTHS) nhưng không bị phát hiện kịp thời.",
    baiHoc: "Kiểm sát viên được phân công phải kiểm tra sổ thụ lý tố giác tội phạm ít nhất mỗi tuần một lần.",
    bienPhap: "Xây dựng phần mềm theo dõi thời hạn tố giác tội phạm; giao chỉ tiêu kiểm sát cụ thể cho từng kiểm sát viên.",
    file: ""
  },
  {
    id: "rkn-004",
    soThongBao: "04/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về tranh tụng tại phiên tòa – không phản bác được luận điểm của luật sư bào chữa",
    ngayBanHanh: "25/04/2024",
    linhVuc: "Tố tụng hình sự",
    capBanHanh: "VKSND TP. Cần Thơ",
    noiDungViPham: "Tại phiên tòa xét xử vụ án ma túy, kiểm sát viên không đối đáp được luận điểm của luật sư về vi phạm trong hoạt động thu thập chứng cứ, dẫn đến Tòa trả hồ sơ điều tra bổ sung.",
    baiHoc: "Kiểm sát viên cần chuẩn bị kỹ phương án đối đáp với các tình huống luật sư có thể đặt ra; nắm vững quy định về thu thập, đánh giá chứng cứ.",
    bienPhap: "Thực hành tranh tụng giả định (mock trial) trước các vụ án phức tạp; mời chuyên gia pháp lý hỗ trợ.",
    file: ""
  },
  {
    id: "rkn-005",
    soThongBao: "05/2024/TB-VKSCT",
    tieuDe: "Rút kinh nghiệm về kiểm sát thi hành án dân sự – bỏ sót vi phạm trong kê biên tài sản",
    ngayBanHanh: "15/05/2024",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND TP. Cần Thơ",
    noiDungViPham: "Chấp hành viên kê biên tài sản không đúng thủ tục (thiếu sự chứng kiến của đại diện chính quyền địa phương) theo Điều 93 Luật THADS nhưng kiểm sát viên không phát hiện.",
    baiHoc: "Khi kiểm sát biên bản kê biên, phải đối chiếu từng bước thủ tục với Điều 93 và các điều khoản liên quan của Luật THADS.",
    bienPhap: "Lập checklist kiểm tra biên bản kê biên; tăng cường kiểm sát trực tiếp tại hiện trường kê biên.",
    file: ""
  },

  // ── TAND TỐI CAO – VỤ 11 (Dân sự) ──────────────────────────
  {
    id: "rkn-006",
    soThongBao: "TBRKN 107/2019/V11",
    tieuDe: "Rút kinh nghiệm về xét xử vụ án dân sự – tranh chấp quyền sử dụng đất",
    ngayBanHanh: "2019",
    linhVuc: "Dân sự – Đất đai",
    capBanHanh: "TAND Tối cao (Vụ 11)",
    noiDungViPham: "Sai sót trong việc xác định tư cách người tham gia tố tụng và thu thập chứng cứ về nguồn gốc đất.",
    baiHoc: "Cần xác minh kỹ nguồn gốc đất, lịch sử sử dụng đất trước khi đưa vụ án ra xét xử.",
    bienPhap: "Phối hợp với UBND địa phương xác minh hiện trạng; thu thập đầy đủ bản đồ địa chính.",
    file: "TBRKN107-2019V11.htm"
  },
  {
    id: "rkn-007",
    soThongBao: "TBRKN 143/2019/V11",
    tieuDe: "Rút kinh nghiệm về xét xử hợp đồng mua bán tài sản vô hiệu do nhầm lẫn",
    ngayBanHanh: "2019",
    linhVuc: "Dân sự – Hợp đồng",
    capBanHanh: "TAND Tối cao (Vụ 11)",
    noiDungViPham: "Tòa sơ thẩm tuyên hợp đồng mua bán nhà vô hiệu nhưng không xem xét đầy đủ ý chí thực sự của các bên.",
    baiHoc: "Phân biệt rõ lỗi nhầm lẫn (Điều 126 BLDS) với lỗi lừa dối (Điều 127 BLDS) khi xét xử.",
    bienPhap: "Tổ chức hòa giải kỹ; làm rõ ý chí các bên trước khi xem xét vô hiệu hợp đồng.",
    file: "TBRKN143-2019V11.htm"
  },
  {
    id: "rkn-008",
    soThongBao: "TBRKN 185/2017/V11",
    tieuDe: "Rút kinh nghiệm xét xử vụ tranh chấp thừa kế – di chúc không hợp lệ",
    ngayBanHanh: "2017",
    linhVuc: "Dân sự – Thừa kế",
    capBanHanh: "TAND Tối cao (Vụ 11)",
    noiDungViPham: "Tòa chấp nhận di chúc viết tay không có người làm chứng, không kiểm tra năng lực nhận thức của người lập di chúc.",
    baiHoc: "Kiểm tra chặt chẽ điều kiện hình thức di chúc theo Điều 628, 630 BLDS 2015.",
    bienPhap: "Yêu cầu giám định y tế về năng lực hành vi nếu người lập di chúc có bệnh.",
    file: "TBRKN185-2017V11.htm"
  },
  {
    id: "rkn-009",
    soThongBao: "TBRKN 246/2021/V11",
    tieuDe: "Rút kinh nghiệm về áp dụng biện pháp khẩn cấp tạm thời trong vụ án dân sự",
    ngayBanHanh: "2021",
    linhVuc: "Dân sự – Tố tụng",
    capBanHanh: "TAND Tối cao (Vụ 11)",
    noiDungViPham: "Tòa áp dụng biện pháp phong tỏa tài sản không có căn cứ đầy đủ, gây thiệt hại cho bị đơn.",
    baiHoc: "Chỉ áp dụng BPKCTT khi có đủ căn cứ theo Điều 111 BLTTDS; xem xét tính cân xứng.",
    bienPhap: "Thẩm phán phải nghiên cứu kỹ trước khi ra quyết định BPKCTT.",
    file: "TBRKN246-2021V11.htm"
  },

  // ── VKSND TỐI CAO – Thi hành án dân sự ─────────────────────
  {
    id: "rkn-010",
    soThongBao: "TBRKN 165/2024/THADS",
    tieuDe: "Rút kinh nghiệm về kê biên tài sản là quyền sử dụng đất đang thế chấp",
    ngayBanHanh: "2024",
    linhVuc: "Thi hành án dân sự",
    capBanHanh: "VKSND Tối cao (THADS)",
    noiDungViPham: "Chấp hành viên kê biên QSDĐ đang thế chấp mà không xử lý quyền ưu tiên của ngân hàng theo đúng thứ tự thanh toán.",
    baiHoc: "Xác định rõ tài sản thế chấp, xem hợp đồng thế chấp trước khi kê biên; ưu tiên thanh toán theo Điều 47 Luật THADS.",
    bienPhap: "Yêu cầu ngân hàng cung cấp hợp đồng thế chấp; phối hợp xử lý tài sản bảo đảm.",
    file: "TBRKN165-2024THADS.htm"
  },
  {
    id: "rkn-011",
    soThongBao: "TBRKN 258/2024/THADS",
    tieuDe: "Rút kinh nghiệm về xử lý vi phạm trong định giá tài sản kê biên",
    ngayBanHanh: "2024",
    linhVuc: "Thi hành án dân sự",
    capBanHanh: "VKSND Tối cao (THADS)",
    noiDungViPham: "Chấp hành viên tự định giá tài sản khi chưa có tổ chức thẩm định giá, dẫn đến khiếu nại.",
    baiHoc: "Bắt buộc thuê tổ chức thẩm định giá theo quy định; không tự xác định giá.",
    bienPhap: "Kiểm tra biên bản định giá trước khi tiến hành bán đấu giá.",
    file: "TBRKN258-2024THADS.htm"
  },

  // ── TAND TỐI CAO – VỤ 8 (Hình sự) ──────────────────────────
  {
    id: "rkn-012",
    soThongBao: "TBRKN 411/2021/V8",
    tieuDe: "Rút kinh nghiệm xét xử án bạo lực gia đình – tội cố ý gây thương tích trong gia đình",
    ngayBanHanh: "2021",
    linhVuc: "Hình sự",
    capBanHanh: "TAND Tối cao (Vụ 8)",
    noiDungViPham: "Hội đồng xét xử áp dụng tình tiết giảm nhẹ không đúng, không xem xét tình tiết tăng nặng phạm tội đối với người thân.",
    baiHoc: "Tội phạm trong gia đình phải áp dụng tình tiết tăng nặng tại Điểm đ Khoản 1 Điều 52 BLHS.",
    bienPhap: "Rà soát lại các bản án về bạo lực gia đình; tổ chức tập huấn chuyên đề.",
    file: "TBRKN411-2021V8.htm"
  },

  // ── VKSND TỐI CAO – Khiếu nại tố cáo ───────────────────────
  {
    id: "rkn-013",
    soThongBao: "TBRKN 251/2021/KNTC",
    tieuDe: "Rút kinh nghiệm giải quyết khiếu nại, tố cáo trong hoạt động tư pháp",
    ngayBanHanh: "2021",
    linhVuc: "Khiếu nại – Tố cáo",
    capBanHanh: "VKSND Tối cao (KNTC)",
    noiDungViPham: "Một số đơn vị giải quyết khiếu nại quá hạn, không có văn bản trả lời công dân trong thời hạn quy định.",
    baiHoc: "Nghiêm túc thực hiện thời hạn giải quyết khiếu nại tại Điều 28 Luật Khiếu nại 2011.",
    bienPhap: "Lập sổ theo dõi thời hạn; phân công cán bộ chuyên trách tiếp nhận và xử lý đơn thư.",
    file: "TBRKN251-2021KNTC.htm"
  },

  // ─────────────────────────────────────────────────────────────
  // THÊM THÔNG BÁO MỚI VÀO PHÍA DƯỚI ĐÂY
  // ─────────────────────────────────────────────────────────────
  // {
  //   id: "rkn-014",
  //   soThongBao: "",
  //   tieuDe: "",
  //   ngayBanHanh: "",
  //   linhVuc: "",
  //   capBanHanh: "",
  //   noiDungViPham: "",
  //   baiHoc: "",
  //   bienPhap: "",
  //   file: ""
  // },
// ── CÁC THÔNG BÁO RÚT KINH NGHIỆM BỔ SUNG ────────────────────────

  {
    id: "rkn-014",
    soThongBao: "02/TB-VC3",
    tieuDe: "Thông báo rút kinh nghiệm về công tác kiểm sát việc giải quyết vụ án dân sự (Tranh chấp quyền sử dụng đất)",
    ngayBanHanh: "01/03/2017",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại TP. Hồ Chí Minh",
    noiDungViPham: "Tòa án cấp sơ thẩm bỏ sót yêu cầu khởi kiện (yêu cầu hủy giấy chứng nhận QSDĐ); xác định sai tư cách tham gia tố tụng của Công ty cấp thoát nước; tuyên án không thể thi hành được do đất đã cấp cho Công ty; xác định sai quan hệ tranh chấp để tính án phí (tính án phí không có giá ngạch thay vì có giá ngạch). VKS không phát hiện để kháng nghị[cite: 12].",
    baiHoc: "Kiểm sát viên cần kiểm sát chặt chẽ các yêu cầu khởi kiện, tư cách đương sự, tính khả thi của bản án và cách tính án phí trong vụ án tranh chấp quyền sử dụng đất[cite: 12].",
    bienPhap: "Bản án sơ thẩm và phúc thẩm bị hủy để xét xử lại. Trao đổi để các VKS nghiên cứu rút kinh nghiệm chung, nâng cao chất lượng công tác kiểm sát[cite: 12].",
    file: ""
  },

  {
    id: "rkn-015",
    soThongBao: "02/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp quyền sử dụng đất",
    ngayBanHanh: "05/12/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm và phúc thẩm vi phạm nghiêm trọng thủ tục tố tụng và thu thập, đánh giá chứng cứ: Không đưa người đang thực tế quản lý sử dụng đất và Trưởng khu vào tham gia tố tụng; không lấy đầy đủ lời khai; không thu thập hồ sơ địa chính để làm rõ tính hợp pháp của việc thu hồi và giao đất của HTX[cite: 13].",
    baiHoc: "Khi giải quyết tranh chấp đất đai, bắt buộc phải đưa đầy đủ những người có quyền lợi, nghĩa vụ liên quan (người đang quản lý đất, cơ quan giao đất) vào tham gia tố tụng và phải thu thập đầy đủ hồ sơ địa chính[cite: 13].",
    bienPhap: "Hủy bản án sơ thẩm và phúc thẩm để xét xử lại. Ban hành thông báo rút kinh nghiệm để nâng cao chất lượng giải quyết án dân sự[cite: 13].",
    file: ""
  },

  {
    id: "rkn-016",
    soThongBao: "03/TB-VKS-P9",
    tieuDe: "Thông báo rút kinh nghiệm công tác kiểm sát giải quyết các vụ việc dân sự, hôn nhân và gia đình quý IV/2020",
    ngayBanHanh: "10/12/2020",
    linhVuc: "Dân sự, Hôn nhân gia đình",
    capBanHanh: "VKSND tỉnh Quảng Ninh",
    noiDungViPham: "Một số VKS cấp huyện chậm gửi bản án, quyết định cho Phòng nghiệp vụ (có trường hợp chậm 73-90 ngày) dẫn đến hết thời hạn kháng nghị khi phát hiện vi phạm. Việc chấp hành chế độ báo cáo chưa tốt (chậm gửi, thiếu phụ lục, thiếu chỉ tiêu)[cite: 14].",
    baiHoc: "Kiểm sát viên và Lãnh đạo đơn vị cần nghiêm túc chấp hành thời hạn gửi bản án, quyết định và thời hạn báo cáo theo quy định của Ngành để kịp thời phát hiện vi phạm và thực hiện quyền kháng nghị[cite: 14].",
    bienPhap: "Nhắc nhở, đôn đốc và thông báo rút kinh nghiệm chung toàn tỉnh để chấn chỉnh việc gửi bản án và báo cáo định kỳ[cite: 14].",
    file: ""
  },

  {
    id: "rkn-017",
    soThongBao: "09/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm Vụ án dân sự 'Tranh chấp hợp đồng chuyển nhượng quyền sử dụng đất và tài sản gắn liền với đất'",
    ngayBanHanh: "16/04/2019",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp phúc thẩm đánh giá sai chứng cứ khi cho rằng người được ủy quyền chuyển nhượng tài sản ngoài phạm vi ủy quyền nên tuyên hợp đồng vô hiệu là không đúng. Ngoài ra, khi tuyên hợp đồng vô hiệu lại không giải quyết hậu quả pháp lý của hợp đồng vô hiệu dẫn đến giải quyết không triệt để[cite: 15].",
    baiHoc: "Cần xem xét kỹ nội dung, phạm vi của Hợp đồng ủy quyền. Khi tuyên hợp đồng vô hiệu, bắt buộc phải giải quyết hậu quả pháp lý của hợp đồng vô hiệu để đảm bảo quyền lợi đương sự[cite: 15].",
    bienPhap: "Kháng nghị Giám đốc thẩm hủy bản án phúc thẩm để xét xử lại. Thông báo rút kinh nghiệm cho VKS địa phương[cite: 15].",
    file: ""
  },

  {
    id: "rkn-018",
    soThongBao: "13/TB-VC1-V2",
    tieuDe: "Rút kinh nghiệm công tác kiểm sát giải quyết vụ án 'Kiện đòi tài sản' liên quan đến đấu giá",
    ngayBanHanh: "13/05/2019",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm hủy kết quả đấu giá nhưng không giải quyết hậu quả của việc hủy (xác định lỗi, thiệt hại, bồi thường); Biên bản nghị án thể hiện Chủ tọa và Hội thẩm không khớp với Quyết định đưa vụ án ra xét xử; Xác định sai/thiếu quan hệ tranh chấp. Tổ chức đấu giá cũng vi phạm thủ tục đấu giá[cite: 16].",
    baiHoc: "Phải giải quyết triệt để hậu quả pháp lý khi hủy kết quả đấu giá; kiểm sát chặt chẽ thành phần HĐXX trong biên bản nghị án so với các văn bản tố tụng khác; xác định đầy đủ các quan hệ tranh chấp[cite: 16].",
    bienPhap: "Hủy toàn bộ bản án sơ thẩm để giải quyết lại. Thông báo rút kinh nghiệm trong khu vực[cite: 16].",
    file: ""
  },

  {
    id: "rkn-019",
    soThongBao: "15/TB-VC1-KDTM",
    tieuDe: "Thông báo rút kinh nghiệm về vi phạm trong giải quyết vụ án 'Tranh chấp Hợp đồng tín dụng'",
    ngayBanHanh: "16/05/2019",
    linhVuc: "Kinh doanh thương mại",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án phúc thẩm đánh giá chứng cứ thiếu khách quan, không chấp nhận yêu cầu độc lập của người có quyền lợi nghĩa vụ liên quan về việc tuyên hợp đồng thế chấp vô hiệu và hủy GCNQSDĐ, dù tài sản thế chấp không thuộc quyền sử dụng hợp pháp của cá nhân người vay (GCNQSDĐ cấp sai trình tự)[cite: 17].",
    baiHoc: "Cần xem xét kỹ nguồn gốc tài sản thế chấp, quy trình cấp GCNQSDĐ và quyền lợi của những người đồng thừa kế, người đang trực tiếp quản lý sử dụng đất khi giải quyết tranh chấp hợp đồng tín dụng[cite: 17].",
    bienPhap: "Hủy một phần bản án phúc thẩm (phần giải quyết yêu cầu độc lập) theo thủ tục Giám đốc thẩm. Rút kinh nghiệm đánh giá chứng cứ[cite: 17].",
    file: ""
  },

  {
    id: "rkn-020",
    soThongBao: "16/TB-VC1-V3",
    tieuDe: "Thông báo rút kinh nghiệm đối với bản án hành chính sơ thẩm có vi phạm bị sửa án",
    ngayBanHanh: "28/03/2022",
    linhVuc: "Hành chính",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm đánh giá sai chứng cứ về nguồn gốc và quá trình sử dụng đất. Áp dụng sai căn cứ pháp luật để xác định loại đất, dẫn đến bác yêu cầu khởi kiện của người dân dù họ có đủ điều kiện được công nhận đất ở theo Điều 100 Luật Đất đai 2013[cite: 18].",
    baiHoc: "Cần xem xét toàn diện nguồn gốc đất, quá trình sử dụng ổn định và giấy tờ chuyển nhượng cũ để áp dụng đúng quy định pháp luật về bồi thường, hỗ trợ khi thu hồi đất[cite: 18].",
    bienPhap: "Tòa phúc thẩm sửa bản án sơ thẩm, chấp nhận toàn bộ yêu cầu khởi kiện. Thông báo rút kinh nghiệm công tác kiểm sát án hành chính[cite: 18].",
    file: ""
  },

  {
    id: "rkn-021",
    soThongBao: "19/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp nghĩa vụ trả tiền trong Hợp đồng chuyển nhượng nhà",
    ngayBanHanh: "15/06/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm và phúc thẩm áp dụng sai pháp luật khi xác định khoản tiền nợ chuyển nhượng nhà đất (1/5 giá trị) chỉ là khoản nợ thông thường và buộc trả nợ gốc cộng lãi suất, thay vì buộc thanh toán số tiền tương đương 1/5 giá trị nhà đất theo định giá tại thời điểm xét xử sơ thẩm[cite: 19].",
    baiHoc: "Khi có tranh chấp về khoản tiền chưa thanh toán trong hợp đồng chuyển nhượng quyền sử dụng đất, phải tính theo tỷ lệ giá trị quyền sử dụng đất tại thời điểm xét xử sơ thẩm chứ không tính lãi suất nợ thông thường[cite: 19].",
    bienPhap: "Kháng nghị Giám đốc thẩm hủy cả 2 bản án sơ thẩm và phúc thẩm để xét xử lại[cite: 19].",
    file: ""
  },

  {
    id: "rkn-022",
    soThongBao: "26/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm Vụ án 'Tranh chấp chia di sản thừa kế'",
    ngayBanHanh: "24/05/2021",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm xác định sai di sản thừa kế (chia cả phần đất mà người chết đã cho các con xây nhà ổn định từ lâu); xác minh, thu thập chứng cứ không đầy đủ về chênh lệch diện tích, không thu thập hồ sơ địa chính, biên bản họp gia đình[cite: 20].",
    baiHoc: "Cần xác minh kỹ nguồn gốc đất, quá trình sử dụng, sự đồng ý của chủ cũ trước khi chết, và đối chiếu bản đồ các thời kỳ. Tài liệu mới phát sinh ở giai đoạn phúc thẩm cần được thu thập đầy đủ[cite: 20].",
    bienPhap: "Hủy toàn bộ bản án sơ thẩm để giải quyết lại. Phổ biến rút kinh nghiệm chung[cite: 20].",
    file: ""
  }
// ── CÁC THÔNG BÁO RÚT KINH NGHIỆM TỪ FILE CUNG CẤP ─────────────────────

  {
    id: "rkn-023",
    soThongBao: "02/TB-VC3",
    tieuDe: "Thông báo rút kinh nghiệm về công tác kiểm sát việc giải quyết vụ án dân sự (Tranh chấp quyền sử dụng đất)",
    ngayBanHanh: "01/03/2017",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại TP. Hồ Chí Minh",
    noiDungViPham: "Tòa án cấp sơ thẩm bỏ sót yêu cầu khởi kiện (hủy giấy chứng nhận QSDĐ); xác định sai tư cách của Công ty cấp thoát nước (đưa vào tư cách người có quyền lợi, nghĩa vụ liên quan thay vì bị đơn); tuyên án không thể thi hành được (buộc trả phần đất đã cấp GCN cho bên khác); xác định sai quan hệ tranh chấp để tính án phí (tính án phí không giá ngạch thay vì có giá ngạch)[cite: 12].",
    baiHoc: "Cần kiểm sát chặt chẽ tất cả các yêu cầu khởi kiện để tránh bỏ sót, xác định đúng tư cách người tham gia tố tụng, tính khả thi của phán quyết và việc áp dụng pháp luật về án phí dân sự[cite: 12].",
    bienPhap: "Bản án bị Giám đốc thẩm hủy để xét xử lại. Rút kinh nghiệm chung để nâng cao chất lượng công tác kiểm sát giải quyết án dân sự[cite: 12].",
    file: "02 TB rut Kn an DS.pdf"
  },

  {
    id: "rkn-024",
    soThongBao: "02/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp quyền sử dụng đất",
    ngayBanHanh: "05/12/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm và phúc thẩm vi phạm nghiêm trọng trong việc thu thập và đánh giá chứng cứ: Không đưa người trực tiếp quản lý, sử dụng đất (người đang canh tác) và Trưởng khu (người giao đất) vào tham gia tố tụng để làm rõ cơ sở và tính hợp pháp của việc thu hồi/giao đất; không thu thập hồ sơ địa chính[cite: 13].",
    baiHoc: "Trong tranh chấp đất đai, bắt buộc phải xác minh, thu thập đầy đủ hồ sơ địa chính, lấy lời khai các bên và đưa đầy đủ những người đang quản lý, sử dụng tài sản tranh chấp vào tham gia tố tụng để đảm bảo quyền lợi hợp pháp[cite: 13].",
    bienPhap: "Ủy ban Thẩm phán TAND cấp cao hủy cả bản án sơ thẩm và phúc thẩm để xét xử lại. Thông báo rút kinh nghiệm cho VKS các tỉnh phía Bắc[cite: 13].",
    file: "02 TB rut KN ve tranh chấp quyen SD Đ.pdf"
  },

  {
    id: "rkn-025",
    soThongBao: "03/TB-VKS-P9",
    tieuDe: "Thông báo rút kinh nghiệm công tác kiểm sát giải quyết các vụ việc dân sự, hôn nhân và gia đình quý IV/2020",
    ngayBanHanh: "10/12/2020",
    linhVuc: "Dân sự, Hôn nhân gia đình",
    capBanHanh: "VKSND tỉnh Quảng Ninh",
    noiDungViPham: "Nhiều VKS cấp huyện chậm gửi bản án, quyết định cho Viện kiểm sát tỉnh (có vụ chậm đến 73-90 ngày), dẫn đến hết thời hạn kháng nghị phúc thẩm dù bản án có vi phạm (ví dụ: không tuyên án phí cấp dưỡng nuôi con). Báo cáo chuyên đề chậm, thiếu phụ lục, thiếu chỉ tiêu[cite: 14].",
    baiHoc: "Kiểm sát viên phải tuân thủ nghiêm ngặt thời hạn báo cáo và gửi bản án, quyết định lên VKS cấp trên để đảm bảo quyền kháng nghị không bị tước bỏ[cite: 14].",
    bienPhap: "Nhắc nhở, đôn đốc các VKS cấp huyện thực hiện đúng thời hạn; tổ chức rút kinh nghiệm nghiêm túc về việc để hết thời hạn kháng nghị[cite: 14].",
    file: "03 TBRKN Dân sự hngđ quý IV.pdf"
  },

  {
    id: "rkn-026",
    soThongBao: "09/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm Vụ án dân sự “Tranh chấp hợp đồng chuyển nhượng quyền sử dụng đất và tài sản gắn liền với đất”",
    ngayBanHanh: "16/04/2019",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa phúc thẩm đánh giá sai nội dung Hợp đồng ủy quyền khi cho rằng người đại diện vượt quá phạm vi ủy quyền (chuyển nhượng tài sản gắn liền với đất) và tuyên hợp đồng vô hiệu là không đúng. Đồng thời, tuyên hợp đồng vô hiệu nhưng lại không giải quyết hậu quả của hợp đồng vô hiệu, dẫn đến giải quyết không triệt để[cite: 15].",
    baiHoc: "Phải xem xét cặn kẽ toàn bộ nội dung của Hợp đồng ủy quyền. Khi một hợp đồng bị tuyên vô hiệu, Tòa án bắt buộc phải giải quyết hậu quả pháp lý của việc vô hiệu đó[cite: 15].",
    bienPhap: "Quyết định Giám đốc thẩm hủy bản án phúc thẩm để xét xử lại. Lưu ý các VKS địa phương khi kiểm sát việc Tòa tuyên hợp đồng vô hiệu[cite: 15].",
    file: "09 TB rut KN giai quyet an DS.pdf"
  },

  {
    id: "rkn-027",
    soThongBao: "13/TB-VC1-V2",
    tieuDe: "Rút kinh nghiệm công tác kiểm sát giải quyết vụ án 'Kiện đòi tài sản' liên quan đấu giá",
    ngayBanHanh: "13/05/2019",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp sơ thẩm hủy kết quả bán đấu giá tài sản nhưng không xem xét, giải quyết hậu quả pháp lý của việc hủy (xác định lỗi, thiệt hại, bồi thường thiệt hại). Vi phạm quy định về thành phần HĐXX (thành viên ký Biên bản nghị án không khớp với Quyết định đưa vụ án ra xét xử). Xác định thiếu quan hệ tranh chấp[cite: 16]. Tổ chức đấu giá cũng vi phạm thời hạn niêm yết và nội dung biên bản đấu giá mâu thuẫn[cite: 16].",
    baiHoc: "Khi hủy kết quả đấu giá, phải đồng thời giải quyết hậu quả pháp lý để bảo đảm quyền lợi người trúng đấu giá. Cần kiểm sát hình thức văn bản tố tụng (chữ ký HĐXX) cẩn thận[cite: 16].",
    bienPhap: "Tòa án cấp cao hủy toàn bộ bản án sơ thẩm để giải quyết lại. Tổ chức rút kinh nghiệm về kỹ năng phát hiện vi phạm tố tụng và đánh giá chứng cứ[cite: 16].",
    file: "13 TB rút KN giai quyet VA kiện đòi tài sản.pdf"
  },

  {
    id: "rkn-028",
    soThongBao: "15/TB-VC1-KDTM",
    tieuDe: "Thông báo rút kinh nghiệm về vi phạm trong giải quyết vụ án “Tranh chấp Hợp đồng tín dụng”",
    ngayBanHanh: "16/05/2019",
    linhVuc: "Kinh doanh thương mại",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp phúc thẩm thiếu khách quan trong đánh giá chứng cứ khi không chấp nhận yêu cầu tuyên vô hiệu hợp đồng thế chấp, dù nguồn gốc tài sản thế chấp (đất đai) được cấp GCNQSDĐ không đúng quy định (không có sự đồng ý của các đồng thừa kế, không có sự đồng ý của người đang quản lý sử dụng)[cite: 17].",
    baiHoc: "Trong tranh chấp xử lý tài sản thế chấp, KSV cần kiểm tra kỹ nguồn gốc tài sản, trình tự cấp Giấy chứng nhận QSDĐ, đảm bảo quyền lợi hợp pháp của người đang trực tiếp quản lý, sử dụng và những người có quyền thừa kế[cite: 17].",
    bienPhap: "Kháng nghị Giám đốc thẩm và hủy một phần bản án phúc thẩm (phần giải quyết yêu cầu độc lập về HĐ thế chấp). Rút kinh nghiệm để đảm bảo xử lý tài sản thế chấp đúng luật[cite: 17].",
    file: "15 TBRKN va tranh chấp hợp đồng tín dụng.pdf"
  },

  {
    id: "rkn-029",
    soThongBao: "16/TB-VC1-V3",
    tieuDe: "Thông báo rút kinh nghiệm đối với bản án hành chính sơ thẩm có vi phạm bị sửa án",
    ngayBanHanh: "28/03/2022",
    linhVuc: "Hành chính",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp sơ thẩm đánh giá sai nguồn gốc và quá trình sử dụng đất ổn định của người khởi kiện, áp dụng không đúng căn cứ pháp luật (Luật Đất đai 2013) để xác định loại đất khi bồi thường thu hồi đất, làm ảnh hưởng đến quyền lợi người dân[cite: 18].",
    baiHoc: "Trong án hành chính liên quan đất đai, phải thu thập và đối chiếu giấy tờ chuyển nhượng cũ, quá trình sử dụng ổn định, đóng thuế để xác định đúng loại đất được công nhận, đặc biệt đối với đất có giấy tờ trước ngày 15/10/1993[cite: 18].",
    bienPhap: "Tòa án cấp phúc thẩm sửa án, chấp nhận toàn bộ yêu cầu của người khởi kiện. VKSND cấp cao thông báo rút kinh nghiệm cho VKS cấp dưới[cite: 18].",
    file: "16 TB rkn đối với bản án HCST có vi phạm bị sửa án Nguyễn khắc Hổ và Chủ tịch UBND xã NS.pdf"
  },

  {
    id: "rkn-030",
    soThongBao: "19/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp nghĩa vụ trả tiền trong Hợp đồng chuyển nhượng nhà",
    ngayBanHanh: "15/06/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm và phúc thẩm xác định khoản tiền mua nhà còn nợ (1/5 giá trị hợp đồng) là khoản nợ thông thường và chỉ buộc trả gốc cộng lãi suất, thay vì phải tính theo tỷ lệ giá trị tài sản nhà đất tương ứng (1/5) tại thời điểm xét xử sơ thẩm, gây thiệt hại nghiêm trọng cho nguyên đơn[cite: 19].",
    baiHoc: "Đối với nghĩa vụ thanh toán tiền mua nhà, đất còn thiếu, phải áp dụng quy định về điều chỉnh theo giá trị tài sản tại thời điểm xét xử (theo NQ 02/2004/NQ-HĐTP), không áp dụng tính lãi suất như nợ tiền thông thường[cite: 19].",
    bienPhap: "Ủy ban Thẩm phán TAND cấp cao hủy cả 2 bản án để xét xử sơ thẩm lại. Thông báo rút kinh nghiệm để thống nhất áp dụng pháp luật[cite: 19].",
    file: "19 TBRKN về tranh chấp nghĩa vụ trả tiền.pdf"
  },

  {
    id: "rkn-031",
    soThongBao: "26/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm Vụ án 'Tranh chấp chia di sản thừa kế'",
    ngayBanHanh: "24/05/2021",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm xác định sai di sản thừa kế (đưa phần đất các con đã được bố mẹ cho làm nhà từ lâu vào chia thừa kế); xác minh chứng cứ không đầy đủ (chưa làm rõ diện tích chênh lệch, không lấy ý kiến UBND, không thu thập biên bản họp gia đình cũ)[cite: 20].",
    baiHoc: "KSV phải yêu cầu Tòa án thu thập đầy đủ bản đồ các thời kỳ, hồ sơ cấp GCNQSDĐ, biên bản họp gia đình và ý kiến của chính quyền địa phương để xác định chính xác khối di sản thừa kế[cite: 20].",
    bienPhap: "Hủy toàn bộ bản án sơ thẩm để giải quyết lại. Nhấn mạnh kỹ năng đánh giá chứng cứ nguồn gốc tài sản trong án thừa kế[cite: 20].",
    file: "26 TB rkn an DS Trần Văn Dự-Trần Thành Vinh.pdf"
  },
  
  {
    id: "rkn-032",
    soThongBao: "27/TB-VKS-P9",
    tieuDe: "Thông báo rút kinh nghiệm Vụ án dân sự có vi phạm bị cấp phúc thẩm hủy án (Kiện đòi tài sản)",
    ngayBanHanh: "21/05/2019",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND tỉnh Quảng Ninh",
    noiDungViPham: "Tòa sơ thẩm tuyên hợp đồng vô hiệu nhưng không giải quyết hậu quả pháp lý của hợp đồng vô hiệu. Công tác thẩm định tại chỗ không đầy đủ, không xác định rõ ranh giới, hiện trạng tài sản trên đất. Không tiến hành định giá tài sản mà chấp nhận giá do nguyên đơn tự đưa ra[cite: 23].",
    baiHoc: "KSV phải chú ý kiểm sát chặt chẽ hoạt động thẩm định tại chỗ và định giá tài sản của Tòa án; đảm bảo khi Tòa tuyên hợp đồng vô hiệu thì phải giải quyết triệt để hậu quả pháp lý[cite: 23].",
    bienPhap: "Bản án sơ thẩm bị hủy để xét xử lại. VKS tỉnh yêu cầu các đơn vị nghiên cứu, rút kinh nghiệm chung[cite: 23].",
    file: ""
  },

  {
    id: "rkn-033",
    soThongBao: "30/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp đòi nhà đất cho ở nhờ",
    ngayBanHanh: "10/08/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm vi phạm về xác định đại diện ủy quyền (chấp nhận giấy ủy quyền lập từ nước ngoài nhưng bị Đại sứ quán từ chối chứng nhận). Xác định sai/thiếu quan hệ pháp luật tranh chấp (đòi nhà cho thuê vs đòi đất cho ở nhờ). Thu thập chứng cứ cực kỳ sơ sài, không làm rõ được diện tích, nguồn gốc tạo lập nhà của các bên[cite: 24].",
    baiHoc: "Cần kiểm tra kỹ tính hợp pháp của Giấy ủy quyền có yếu tố nước ngoài; xác định chính xác các quan hệ tranh chấp đan xen trong cùng một vụ án; yêu cầu cung cấp đầy đủ hồ sơ lưu trữ nhà đất qua các thời kỳ[cite: 24].",
    bienPhap: "Hủy toàn bộ bản án sơ thẩm để giải quyết lại. Thông báo rút kinh nghiệm về xác định tư cách tố tụng và đánh giá chứng cứ[cite: 24].",
    file: ""
  },

  {
    id: "rkn-034",
    soThongBao: "30/TB-P10-VKS",
    tieuDe: "Thông báo rút kinh nghiệm Công tác kiểm sát việc giải quyết các vụ án hành chính, Kinh doanh thương mại, lao động Qúy II/2019",
    ngayBanHanh: "06/06/2019",
    linhVuc: "Hành chính, KDTM, Lao động",
    capBanHanh: "VKSND tỉnh Quảng Ninh",
    noiDungViPham: "Nhiều Tòa án/VKS cấp huyện gửi bản án, quyết định chậm trễ (từ 1 đến 4 tháng). Một số Quyết định Tạm đình chỉ giải quyết vụ án dân sự dùng sai biểu mẫu, không ghi rõ căn cứ điều luật. Các Quyết định áp dụng biện pháp xử lý hành chính (cai nghiện bắt buộc) không ghi thời hạn khiếu nại hoặc ghi sai thời gian chấp hành (số và chữ không khớp)[cite: 25].",
    baiHoc: "KSV phải kiểm sát sát sao hình thức, biểu mẫu và nội dung quyết định của Tòa án (đặc biệt là các vụ việc hành chính như đưa đi cai nghiện); chấp hành nghiêm kỷ luật gửi báo cáo, bản án[cite: 25].",
    bienPhap: "VKS tỉnh chấn chỉnh các VKS cấp huyện; yêu cầu kiến nghị Tòa án đính chính, sửa chữa quyết định sai sót; đôn đốc giải quyết án tồn đọng[cite: 25].",
    file: ""
  },

  {
    id: "rkn-035",
    soThongBao: "33/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm Về tranh chấp kiện đòi tài sản (liên quan đến chơi phường/hụi)",
    ngayBanHanh: "21/08/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp sơ thẩm và phúc thẩm đánh giá chứng cứ thiếu căn cứ khi cho rằng khoản nợ 1,4 tỷ đồng đã được gán bằng nhà đất và buộc bị đơn phải trả tiền, trong khi thực tế Hợp đồng chuyển nhượng nhà đất đó đã bị Tòa án trong một vụ án khác tuyên vô hiệu (tức là việc gán nợ chưa thành)[cite: 26].",
    baiHoc: "Khi giải quyết tranh chấp đòi tài sản liên quan đến nhiều giao dịch và nhiều bản án khác nhau, KSV phải tổng hợp, xâu chuỗi sự kiện và chú ý đến hậu quả pháp lý của các giao dịch đã bị tuyên vô hiệu[cite: 26].",
    bienPhap: "Kháng nghị Giám đốc thẩm và được chấp nhận hủy cả 2 bản án sơ thẩm, phúc thẩm. Thông báo rút kinh nghiệm chung[cite: 26].",
    file: ""
  },

  {
    id: "rkn-036",
    soThongBao: "35/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm công tác kiểm sát việc giải quyết vụ án tranh chấp chia tài sản sau khi ly hôn",
    ngayBanHanh: "23/08/2018",
    linhVuc: "Hôn nhân và gia đình",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm không chấp nhận định giá lại tài sản (kết quả định giá cũ từ 5 năm trước không còn phù hợp). Đánh giá sai bản chất tài sản chung của vợ chồng, áp dụng sai quy định về bảo vệ người thứ ba ngay tình (người mua đất vi phạm điều cấm do đất đang tranh chấp). Tính sai án phí đối với yêu cầu không được chấp nhận[cite: 27].",
    baiHoc: "Phải yêu cầu định giá lại tài sản nếu giá trị có biến động lớn. Cần phân tích kỹ thời điểm giao dịch và tính hợp pháp của tài sản khi áp dụng chế định bảo vệ người thứ ba ngay tình trong chia tài sản ly hôn[cite: 27].",
    bienPhap: "Hủy bản án dân sự sơ thẩm để giải quyết lại. Rút kinh nghiệm để nâng cao chất lượng kiểm sát án HNGĐ[cite: 27].",
    file: ""
  },

  {
    id: "rkn-037",
    soThongBao: "36/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm Về vụ án “Tranh chấp quyền sử dụng đất”",
    ngayBanHanh: "29/06/2021",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm thu thập chứng cứ không đầy đủ (chưa làm rõ nguyên đơn được giao khai thác lá cọ hay được giao quyền sử dụng đất). Vi phạm về định giá tài sản: định giá cây cối từ 2018 nhưng đến xét xử 2019 không định giá lại, ảnh hưởng quyền lợi đương sự. Mâu thuẫn trong thẩm định tại chỗ (ghi sai số thửa, hình thể không khớp bản đồ)[cite: 28].",
    baiHoc: "KSV cần kiểm sát chặt chẽ hoạt động thẩm định, định giá tài sản của Tòa án (phải yêu cầu định giá lại nếu tài sản như cây cối, hoa màu đã thay đổi giá trị theo thời gian) và tính đồng nhất giữa hồ sơ với biên bản thẩm định[cite: 28].",
    bienPhap: "Tòa án cấp cao hủy toàn bộ bản án sơ thẩm. Thông báo rút kinh nghiệm nâng cao chất lượng án dân sự[cite: 28].",
    file: ""
  },

  {
    id: "rkn-038",
    soThongBao: "38/TB-VC1-V2 (1)",
    tieuDe: "Thông báo rút kinh nghiệm về giải quyết vụ án “Tranh chấp hủy hợp đồng chuyển nhượng quyền sử dụng đất và hủy văn bản công chứng”",
    ngayBanHanh: "31/05/2022",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án hai cấp không đánh giá khách quan chứng cứ (bỏ qua băng ghi âm và lời khai của nhân chứng là công chứng viên về việc người làm chứng đứng ra giao dịch). Tuyên hợp đồng vô hiệu nhưng lại cho rằng đương sự không yêu cầu giải quyết hậu quả nên không giải quyết (không thu hồi, xử lý giấy chứng nhận QSDĐ đã cấp), gây khó khăn cho thi hành án[cite: 29].",
    baiHoc: "KSV phải yêu cầu Tòa án giải quyết triệt để hậu quả của hợp đồng vô hiệu, nếu đương sự không yêu cầu thì Tòa án vẫn phải giải thích và giải quyết để đảm bảo tính khả thi của bản án[cite: 29].",
    bienPhap: "Giám đốc thẩm hủy cả bản án phúc thẩm và sơ thẩm để giải quyết lại. Rút kinh nghiệm trong đánh giá chứng cứ và xử lý hợp đồng vô hiệu[cite: 29].",
    file: ""
  },

  {
    id: "rkn-039",
    soThongBao: "38/TB-VC1-V2 (2)",
    tieuDe: "Thông báo rút kinh nghiệm Về giải quyết vụ án “Tranh chấp quyền sử dụng đất; buộc di dời tài sản trên đất; yêu cầu hủy một phần GCNQSDĐ”",
    ngayBanHanh: "27/05/2020",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm bỏ sót người tham gia tố tụng (không đưa Trung tâm Phát triển quỹ đất vào tham gia tố tụng dù đất tranh chấp liên quan đến diện tích bị thu hồi giao cho Trung tâm này). Đánh giá chứng cứ mâu thuẫn: Vừa cho rằng cấp GCNQSDĐ không đúng thủ tục, vừa nhận định là đúng thẩm quyền, đối tượng[cite: 30].",
    baiHoc: "Trong án tranh chấp đất đai, bắt buộc phải làm rõ diện tích tranh chấp thuộc quyền quản lý của ai (hộ dân hay nhà nước/tổ chức) và phải đưa cơ quan quản lý đất đai liên quan vào tham gia tố tụng[cite: 30].",
    bienPhap: "Kháng nghị phúc thẩm và được TAND cấp cao chấp nhận hủy toàn bộ bản án sơ thẩm để giải quyết lại[cite: 30].",
    file: ""
  }
// ── CÁC THÔNG BÁO RÚT KINH NGHIỆM BỔ SUNG (ĐỢT 2) ─────────────────────

  {
    id: "rkn-040",
    soThongBao: "27/TB-VC1-HC",
    tieuDe: "Thông báo rút kinh nghiệm đối với bản án hành chính sơ thẩm có vi phạm bị hủy án (Yêu cầu hủy giấy chứng nhận quyền sử dụng đất)",
    ngayBanHanh: "19/05/2022",
    linhVuc: "Hành chính",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp sơ thẩm vi phạm trong thu thập và đánh giá chứng cứ: Chưa làm rõ trước khi ký hợp đồng tặng cho thì quyền sử dụng đất thuộc về cá nhân (cụ Phú) hay thuộc về hộ gia đình; chưa làm rõ việc các đồng thừa kế khác bị giả mạo chữ ký trong hợp đồng tặng cho (người không biết chữ nhưng lại có chữ ký); không xem xét việc trên đất có tài sản chung của hộ gia đình nhưng hợp đồng tặng cho không đề cập[cite: 22].",
    baiHoc: "Trong án hành chính yêu cầu hủy GCNQSDĐ dựa trên hợp đồng tặng cho, KSV phải yêu cầu Tòa án thu thập hồ sơ địa chính để xác định nguồn gốc đất (cá nhân hay hộ gia đình) và giám định chữ ký/chữ điểm chỉ nếu có dấu hiệu giả mạo[cite: 22].",
    bienPhap: "Bản án hành chính phúc thẩm đã hủy toàn bộ bản án sơ thẩm để xét xử lại. Thông báo rút kinh nghiệm cho VKSND các tỉnh khu vực phía Bắc[cite: 22].",
    file: "27 TB rkn bản án HC Dương Văn Trung - UB thị xã H, tỉnh Q.pdf"
  },

  {
    id: "rkn-041",
    soThongBao: "40/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp hợp đồng mua bán tài sản",
    ngayBanHanh: "17/09/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp sơ thẩm và phúc thẩm đánh giá chứng cứ thiếu căn cứ khi cho rằng việc thanh toán tiền cho một nhân viên công ty (không có giấy ủy quyền của người bán) là đã hoàn thành nghĩa vụ thanh toán. Tòa án dựa vào các bản kê thanh toán có chữ ký bị giám định là giả mạo để bác yêu cầu khởi kiện của nguyên đơn[cite: 31].",
    baiHoc: "Phải kiểm tra chặt chẽ giấy ủy quyền nhận tiền trong giao dịch mua bán tài sản. Không được sử dụng các tài liệu, chứng từ có chữ ký đã bị cơ quan giám định kết luận là giả mạo làm căn cứ giải quyết vụ án[cite: 31].",
    bienPhap: "Giám đốc thẩm hủy cả 2 bản án sơ thẩm và phúc thẩm để xét xử lại. Rút kinh nghiệm về việc đánh giá chứng cứ thanh toán và kết luận giám định[cite: 31].",
    file: "27 TB rut KN gq án DS.signed.pdf"
  },

  {
    id: "rkn-042",
    soThongBao: "268/TB-BCC",
    tieuDe: "Thông báo của Ban thực hiện cưỡng chế thu hồi đất Về thời gian tổ chức cưỡng chế thực hiện Quyết định thu hồi đất",
    ngayBanHanh: "05/06/2020",
    linhVuc: "Hành chính (Thông báo thực tế)",
    capBanHanh: "UBND thành phố Hạ Long (Ban cưỡng chế)",
    noiDungViPham: "Đây là tài liệu thông báo thời gian tổ chức cưỡng chế thu hồi đất đối với Công ty cổ phần du lịch Hạ Long để giao cho Trung tâm phát triển quỹ đất, yêu cầu công ty có mặt để chấp hành, nếu vắng mặt sẽ tiến hành tháo dỡ theo quy định[cite: 32].",
    baiHoc: "Tài liệu mang tính chất tham khảo về quy trình thông báo và thực hiện cưỡng chế thu hồi đất trong thực tiễn của chính quyền địa phương[cite: 32].",
    bienPhap: "Giao UBND phường gửi thông báo và tiến hành cưỡng chế đúng quy định[cite: 32].",
    file: "30 TB rut KN tranh chấp đòi nhà.pdf" // Note: Theo nội dung file được cung cấp.
  },

  {
    id: "rkn-043",
    soThongBao: "44/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm về giải quyết vụ án 'Đòi quyền sử dụng đất'",
    ngayBanHanh: "29/06/2022",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp phúc thẩm tuyên giao đất nhưng không xác định rõ mốc giới, số đo các cạnh của thửa đất, không xem xét phần móng bức tường đang sử dụng, và không đính kèm sơ đồ thửa đất tranh chấp vào bản án. Bản án giao 84m2 nhưng thực tế khi cơ quan THADS thi hành thì phần đất chỉ có 76,4m2, dẫn đến bản án không thể thi hành được[cite: 33].",
    baiHoc: "Khi bản án quyết định giao tài sản là quyền sử dụng đất, KSV phải yêu cầu Tòa án tuyên rõ ràng vị trí, kích thước các cạnh, tứ cận và bắt buộc phải có sơ đồ thửa đất kèm theo bản án để đảm bảo tính khả thi trong thi hành án[cite: 33].",
    bienPhap: "Ủy ban Thẩm phán TAND cấp cao chấp nhận kháng nghị tái thẩm, hủy toàn bộ bản án phúc thẩm và sơ thẩm để giải quyết lại[cite: 33].",
    file: "33 TB rut KN kien doi TS.pdf"
  },

  {
    id: "rkn-044",
    soThongBao: "45/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm về giải quyết vụ án 'Tranh chấp hợp đồng chuyển nhượng quyền sử dụng đất'",
    ngayBanHanh: "29/06/2022",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp sơ thẩm và phúc thẩm xác định sai lỗi của các bên khi hợp đồng chuyển nhượng đất vô hiệu (nhận định hoàn toàn do lỗi người bán, trong khi người mua không đủ điều kiện nhận chuyển nhượng đất nông nghiệp và giao dịch không công chứng). Định giá tài sản sai: đối tượng giao dịch là đất nông nghiệp nhưng Hội đồng định giá lại tính theo giá đất ở nông thôn, dẫn đến buộc bồi thường thiệt hại sai pháp luật[cite: 34].",
    baiHoc: "Khi tuyên hợp đồng vô hiệu, phải đánh giá khách quan mức độ lỗi của cả hai bên. Việc định giá bồi thường thiệt hại phải dựa trên loại đất thực tế tại thời điểm giao dịch, không được tự ý định giá theo loại đất khác có giá trị cao hơn[cite: 34].",
    bienPhap: "Giám đốc thẩm hủy toàn bộ bản án phúc thẩm và sơ thẩm để giải quyết sơ thẩm lại. Rút kinh nghiệm đánh giá lỗi và định giá tài sản[cite: 34].",
    file: "35 TB rkn gq tranh chap chia tai san sau ly hon.pdf" 
  },

  {
    id: "rkn-045",
    soThongBao: "45/TB-VC1-V2 (2)",
    tieuDe: "Thông báo rút kinh nghiệm công tác kiểm sát việc giải quyết vụ án tranh chấp đòi tài sản (Cổ phiếu)",
    ngayBanHanh: "17/10/2018",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án hai cấp đánh giá chứng cứ thiếu chính xác: Bỏ qua giao dịch thực tế giữa người mua và chủ sở hữu cổ phiếu (qua trung gian); buộc bị đơn trả bằng tiền mặt (4,06 tỷ đồng) trong khi chứng cứ thể hiện tài sản bị đơn đang giữ hộ là cổ phiếu (1 triệu cổ phiếu). Tuyên hủy hợp đồng chuyển nhượng cổ phần nhưng không giải quyết hậu quả vô hiệu (xử lý số tiền cổ tức phát sinh)[cite: 35].",
    baiHoc: "Khi giải quyết tranh chấp tài sản là cổ phiếu, cổ phần, phải làm rõ đối tượng tranh chấp là hiện vật (cổ phiếu) hay tiền. Tuyên hợp đồng vô hiệu bắt buộc phải đi kèm giải quyết hậu quả pháp lý (bao gồm hoa lợi, lợi tức)[cite: 35].",
    bienPhap: "Hủy toàn bộ bản án phúc thẩm và sơ thẩm theo thủ tục Giám đốc thẩm để giải quyết lại. Rút kinh nghiệm chung toàn khu vực[cite: 35].",
    file: "36 TB rkn vụ TCQSDĐ .pdf" 
  },

  {
    id: "rkn-046",
    soThongBao: "46/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp thừa kế tài sản",
    ngayBanHanh: "23/10/2017",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm tống đạt bản án cho bị đơn bằng niêm yết nhưng chỉ niêm yết tại UBND xã mà không niêm yết tại trụ sở Tòa án và nơi cư trú của bị đơn, làm tước quyền kháng cáo. Về nội dung: Tòa án chưa làm rõ nguồn gốc tài sản (có bị nhà nước trưng mua trong cải cách ruộng đất hay không); đất bao gồm đất ở và đất vườn nhưng Tòa án không định giá riêng biệt từng loại đất và khi chia thừa kế cũng không xác định rõ ai nhận loại đất nào[cite: 36].",
    baiHoc: "KSV phải kiểm sát nghiêm ngặt thủ tục tống đạt, niêm yết bản án. Trong chia thừa kế đất đai, phải yêu cầu định giá rành mạch từng loại đất (đất ở, đất nông nghiệp) để chia kỷ phần cho công bằng[cite: 36].",
    bienPhap: "Hội đồng Giám đốc thẩm hủy cả 2 bản án để xét xử lại. Rút kinh nghiệm nghiêm túc về thủ tục tố tụng và định giá di sản[cite: 36].",
    file: "38 TB rkn vụ án DS Lại Quyết Thắng - Phạm Thị Hồng Phượng.pdf" 
  },

  {
    id: "rkn-047",
    soThongBao: "47/TB-VC1-DS",
    tieuDe: "Thông báo rút kinh nghiệm về tranh chấp kiện đòi tài sản (Chuyển nhượng quyền góp vốn dự án)",
    ngayBanHanh: "23/10/2017",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp phúc thẩm xác định sai thẩm quyền giải quyết theo lãnh thổ (nhầm lẫn giữa nơi đăng ký thường trú và nơi cư trú/tạm trú thực tế). Tòa án xác định sai bản chất giao dịch: cho rằng các bên đã chuyển từ hợp đồng chuyển nhượng quyền sử dụng đất sang giao dịch 'xác nhận nợ', từ đó bỏ sót việc đưa chủ đầu tư dự án và người chuyển nhượng ban đầu vào tham gia tố tụng để làm rõ điều kiện chuyển nhượng lô đất[cite: 37].",
    baiHoc: "Thẩm quyền giải quyết vụ án phải dựa trên nơi cư trú thực tế (tạm trú hợp pháp) tại thời điểm khởi kiện. Phải xác định đúng quan hệ pháp luật cốt lõi (hợp đồng chuyển nhượng) và đưa đầy đủ các bên liên quan chuỗi giao dịch vào tham gia tố tụng[cite: 37].",
    bienPhap: "Giám đốc thẩm hủy cả bản án sơ thẩm và phúc thẩm, giao hồ sơ về Tòa án cấp quận có thẩm quyền để giải quyết lại[cite: 37].",
    file: "38 TBRKN án DS.pdf" // Note: Theo nội dung file.
  },

  {
    id: "rkn-048",
    soThongBao: "56/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm về giải quyết vụ án 'Kiện đòi tài sản là quyền sử dụng đất' có vi phạm bị cấp phúc thẩm hủy án",
    ngayBanHanh: "04/08/2022",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án cấp sơ thẩm giải quyết thiếu yêu cầu khởi kiện (bỏ qua yêu cầu hủy Giấy chứng nhận QSDĐ) nên không đưa UBND thị xã và UBND xã vào tham gia tố tụng. Công nhận hợp đồng tặng cho không đúng pháp luật do diện tích trong hợp đồng mâu thuẫn với hiện trạng thực tế và GCNQSDĐ cấp trùm lên cả nhà của nguyên đơn đang sinh sống (do cán bộ địa chính tự ý ghi thêm diện tích)[cite: 38].",
    baiHoc: "KSV cần kiểm sát chặt chẽ tất cả các yêu cầu khởi kiện của đương sự để xác định đủ tư cách người tham gia tố tụng. Khi có sự sai lệch giữa hợp đồng tặng cho, bản đồ địa chính và hiện trạng, phải yêu cầu đối chất, làm rõ nguồn gốc sai sót[cite: 38].",
    bienPhap: "Tòa án cấp phúc thẩm chấp nhận đề nghị của VKS, hủy toàn bộ bản án sơ thẩm để xét xử lại. Rút kinh nghiệm chung về kiểm sát yêu cầu khởi kiện[cite: 38].",
    file: ""
  },

  {
    id: "rkn-049",
    soThongBao: "56/TB-VC1-V2 (2)",
    tieuDe: "Thông báo rút kinh nghiệm Về việc định giá tài sản là quyền sử dụng đất (Tranh chấp thừa kế)",
    ngayBanHanh: "01/09/2021",
    linhVuc: "Dân sự",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa án sơ thẩm và phúc thẩm xác định sai loại đất: Đất có nguồn gốc trước năm 1980, không tranh chấp, là đất ở nhưng Tòa án lại xác định phần lớn diện tích là đất trồng cây lâu năm. Dẫn đến Hội đồng định giá áp dụng sai đơn giá (định giá đất vườn thay vì đất thổ cư), làm sai lệch giá trị di sản và sai tiền án phí[cite: 39].",
    baiHoc: "Khi xác định di sản thừa kế là quyền sử dụng đất, KSV phải đối chiếu kỹ nguồn gốc đất và quy định pháp luật đất đai để xác định đúng loại đất (đất ở hay đất vườn), từ đó giám sát chặt chẽ tính chính xác của Biên bản định giá tài sản[cite: 39].",
    bienPhap: "Phát hành thông báo rút kinh nghiệm cho VKS cấp tỉnh, huyện khu vực phía Bắc để chấn chỉnh công tác kiểm sát định giá tài sản[cite: 39].",
    file: ""
  },

  {
    id: "rkn-050",
    soThongBao: "58/TB-VC1-V2",
    tieuDe: "Thông báo rút kinh nghiệm Vụ án 'Ly hôn, tranh chấp về nuôi con, chia tài sản khi ly hôn và đòi quyền sử dụng đất'",
    ngayBanHanh: "19/08/2022",
    linhVuc: "Hôn nhân và gia đình",
    capBanHanh: "VKSND Cấp cao tại Hà Nội",
    noiDungViPham: "Tòa sơ thẩm đánh giá sai chứng cứ: Mặc dù Giấy chứng nhận QSDĐ đứng tên hai vợ chồng và mua trong thời kỳ hôn nhân, nhưng Tòa án lại dựa vào lời khai một phía của bố mẹ chồng (cho rằng mua hộ) dù không có văn bản chứng minh, để tuyên giao đất cho bố mẹ chồng và chỉ chia giá trị bằng tiền cho vợ chồng[cite: 40].",
    baiHoc: "Tài sản mua trong thời kỳ hôn nhân và đã cấp GCNQSDĐ tên vợ chồng phải được suy đoán pháp lý là tài sản chung của vợ chồng. Mọi yêu cầu cho rằng 'đứng tên hộ' phải có chứng cứ vật chất rõ ràng (giấy ủy quyền, hợp đồng nhờ mua hộ), không được chỉ dựa vào lời khai[cite: 40].",
    bienPhap: "VKSND cấp cao kháng nghị phúc thẩm. Tòa phúc thẩm sửa bản án sơ thẩm, giao đất cho người vợ/chồng quản lý và chia giá trị theo đúng luật HNGĐ[cite: 40].",
    file: ""
  }
];
