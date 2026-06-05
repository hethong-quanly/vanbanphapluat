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
];
