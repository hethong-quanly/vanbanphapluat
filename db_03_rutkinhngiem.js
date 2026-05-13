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

];
