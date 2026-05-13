// ================================================================
// db_04_anle.js – ÁN LỆ
// VKSND TP. Cần Thơ – Hệ thống LEXVIET
// ----------------------------------------------------------------
// Cấu trúc mỗi bản ghi:
//   id               : string   – VD: "al-001"
//   soAnLe           : string   – VD: "Án lệ số 01/2016/AL"
//   tieuDe           : string   – Tiêu đề án lệ
//   linhVuc          : string   – Lĩnh vực pháp lý
//   ngayBanHanh      : string   – DD/MM/YYYY hoặc năm
//   coQuan           : string   – Cơ quan công bố
//   tomTatVuViec     : string   – Tóm tắt vụ việc dẫn đến án lệ
//   noiDung          : string   – Nội dung chính của án lệ
//   nguyenTacApDung  : string   – Nguyên tắc pháp lý được xác lập
//   vanBanLienQuan   : string[] – Số hiệu văn bản liên quan
//   tags             : string[] – Từ khóa
//   file             : string   – Tên file CHM (nếu có)
// ================================================================

const DB_AN_LE = [

  // ── ÁN LỆ 2016 ──────────────────────────────────────────────
  {
    id: "al-001",
    soAnLe: "Án lệ số 01/2016/AL",
    tieuDe: "Về xác định lãi suất trong hợp đồng vay tài sản",
    linhVuc: "Dân sự – Hợp đồng",
    ngayBanHanh: "06/04/2016",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Tranh chấp hợp đồng vay có lãi suất vượt quy định; xác định lãi suất áp dụng khi không thỏa thuận rõ.",
    noiDung: "Trường hợp hợp đồng vay tài sản có lãi suất thỏa thuận vượt quá mức tối đa theo quy định pháp luật, phần lãi suất vượt quá bị vô hiệu; phần lãi suất trong giới hạn vẫn có hiệu lực.",
    nguyenTacApDung: "Lãi suất cho vay không được vượt 20%/năm (Điều 468 BLDS 2015); phần vượt quá bị vô hiệu; áp dụng lãi suất cơ bản nếu không thỏa thuận.",
    vanBanLienQuan: ["91/2015/QH13"],
    tags: ["lãi suất", "hợp đồng vay", "vô hiệu"],
    file: "An le 01.htm"
  },
  {
    id: "al-002",
    soAnLe: "Án lệ số 02/2016/AL",
    tieuDe: "Về hiệu lực của hợp đồng chuyển nhượng quyền sử dụng đất khi đất chưa được cấp giấy chứng nhận",
    linhVuc: "Đất đai – Dân sự",
    ngayBanHanh: "06/04/2016",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Các bên chuyển nhượng đất chưa có sổ đỏ; một bên không thực hiện hợp đồng sau nhiều năm đã thực hiện ổn định.",
    noiDung: "Hợp đồng chuyển nhượng QSDĐ chưa có GCN nhưng đã được thực hiện ổn định lâu dài, không bị tranh chấp, các bên đã thực hiện phần lớn nghĩa vụ có thể được Tòa công nhận.",
    nguyenTacApDung: "Áp dụng nguyên tắc thiện chí, bảo đảm quyền lợi bên ngay tình; xem xét tình tiết thực tế thực hiện hợp đồng để xử lý.",
    vanBanLienQuan: ["91/2015/QH13", "31/2024/QH15"],
    tags: ["đất đai", "chuyển nhượng", "chưa có sổ đỏ"],
    file: "An le 02.htm"
  },
  {
    id: "al-003",
    soAnLe: "Án lệ số 03/2016/AL",
    tieuDe: "Về công nhận hợp đồng thế chấp quyền sử dụng đất không có công chứng",
    linhVuc: "Đất đai – Ngân hàng",
    ngayBanHanh: "06/04/2016",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Ngân hàng nhận thế chấp QSDĐ bằng hợp đồng không công chứng; tranh chấp khi xử lý tài sản bảo đảm.",
    noiDung: "Hợp đồng thế chấp QSDĐ không công chứng nhưng bên vay đã nhận tiền, sử dụng và thanh toán một phần; nguyên tắc thiện chí bảo vệ bên cho vay ngay tình.",
    nguyenTacApDung: "Áp dụng Điều 129 BLDS: giao dịch vi phạm điều kiện hình thức nhưng đã thực hiện 2/3 nghĩa vụ thì được công nhận hiệu lực.",
    vanBanLienQuan: ["91/2015/QH13"],
    tags: ["thế chấp", "ngân hàng", "công chứng"],
    file: "An le 03.htm"
  },
  {
    id: "al-004",
    soAnLe: "Án lệ số 04/2016/AL",
    tieuDe: "Về xử lý tài sản thế chấp khi vợ chồng ly hôn mà tài sản chung đang thế chấp ngân hàng",
    linhVuc: "Hôn nhân – Ngân hàng",
    ngayBanHanh: "06/04/2016",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Vợ chồng thế chấp tài sản chung tại ngân hàng; khi ly hôn tranh chấp về phân chia tài sản đang thế chấp.",
    noiDung: "Khi chia tài sản chung trong vụ ly hôn mà tài sản đang thế chấp ngân hàng, Tòa phải xem xét nghĩa vụ trả nợ chung trước khi phân chia; không thể chia tách tài sản mà bỏ qua khoản nợ.",
    nguyenTacApDung: "Tài sản thế chấp chỉ được chia sau khi giải quyết xong nghĩa vụ nợ với ngân hàng; cần xác định ai chịu trách nhiệm trả phần nợ tương ứng.",
    vanBanLienQuan: ["91/2015/QH13"],
    tags: ["ly hôn", "thế chấp", "tài sản chung"],
    file: "An le 04.htm"
  },
  {
    id: "al-005",
    soAnLe: "Án lệ số 05/2016/AL",
    tieuDe: "Về xác định di sản thừa kế khi tài sản được tạo ra trong thời kỳ hôn nhân",
    linhVuc: "Dân sự – Thừa kế",
    ngayBanHanh: "06/04/2016",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Tranh chấp thừa kế liên quan đến tài sản do vợ hoặc chồng tạo ra trong thời kỳ hôn nhân.",
    noiDung: "Tài sản tạo ra trong thời kỳ hôn nhân là tài sản chung của vợ chồng; di sản thừa kế của người chết chỉ là phần 1/2 trong tài sản chung đó, không phải toàn bộ.",
    nguyenTacApDung: "Áp dụng Điều 33 Luật Hôn nhân gia đình 2014: tài sản có trong thời kỳ hôn nhân là tài sản chung. Di sản = 1/2 tài sản chung + tài sản riêng của người mất.",
    vanBanLienQuan: ["91/2015/QH13"],
    tags: ["thừa kế", "tài sản chung", "hôn nhân"],
    file: "An le 05.htm"
  },

  // ── ÁN LỆ 2021–2024 ─────────────────────────────────────────
  {
    id: "al-006",
    soAnLe: "Án lệ số 43/2021/AL",
    tieuDe: "Về xác định tội danh khi người phạm tội dùng hung khí nguy hiểm gây thương tích nhẹ",
    linhVuc: "Hình sự",
    ngayBanHanh: "25/11/2021",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Bị cáo dùng dao tấn công bị hại nhưng bị hại chỉ bị thương tích 4% do bị can ngăn kịp thời. Tranh luận về tội cố ý gây thương tích hay tội giết người chưa đạt.",
    noiDung: "Khi xác định tội danh giữa Điều 134 (cố ý gây thương tích) và Điều 123 (giết người), không chỉ dựa vào kết quả thương tích mà phải đánh giá toàn diện: hung khí, vị trí tấn công, diễn biến hành vi, ý thức chủ quan.",
    nguyenTacApDung: "Đánh giá toàn diện 04 yếu tố: hung khí sử dụng – vị trí tấn công trên cơ thể – nguyên nhân dừng hành vi – ý thức chủ quan của người phạm tội.",
    vanBanLienQuan: ["100/2015/QH13"],
    tags: ["cố ý gây thương tích", "giết người", "định tội danh"],
    file: "An le 43.htm"
  },
  {
    id: "al-007",
    soAnLe: "Án lệ số 45/2022/AL",
    tieuDe: "Về tính pháp lý của hợp đồng chuyển nhượng quyền sử dụng đất không công chứng khi đã thực hiện 2/3 nghĩa vụ",
    linhVuc: "Dân sự – Đất đai",
    ngayBanHanh: "12/04/2022",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Bên nhận chuyển nhượng đã thanh toán 80% giá trị, nhận đất và xây nhà từ 2015. Bên chuyển nhượng khởi kiện đòi lại với lý do hợp đồng vô hiệu.",
    noiDung: "Hợp đồng CNQSDĐ không công chứng nhưng một bên đã thực hiện ít nhất 2/3 nghĩa vụ theo Điều 129 BLDS 2015 thì được công nhận hiệu lực; không tuyên vô hiệu để tránh thiệt hại cho bên ngay tình.",
    nguyenTacApDung: "Điều 129 BLDS 2015: Giao dịch vi phạm điều kiện hình thức nhưng một bên hoặc các bên đã thực hiện ít nhất 2/3 nghĩa vụ → Tòa công nhận hiệu lực theo yêu cầu của một bên.",
    vanBanLienQuan: ["91/2015/QH13", "31/2024/QH15"],
    tags: ["chuyển nhượng đất", "công chứng", "vô hiệu"],
    file: "An le 45.htm"
  },
  {
    id: "al-008",
    soAnLe: "Án lệ số 52/2022/AL",
    tieuDe: "Về xác định tội Tham ô tài sản đối với người không có chức vụ nhưng được giao quản lý tài sản",
    linhVuc: "Hình sự – Tham nhũng",
    ngayBanHanh: "30/08/2022",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Bị cáo là nhân viên hợp đồng, được giao quản lý kho hàng nhà nước, đã chiếm đoạt tài sản 500 triệu. Cấp sơ thẩm xử tội Trộm cắp.",
    noiDung: "Người được giao quản lý tài sản nhà nước theo quyết định của cơ quan có thẩm quyền, dù không có chức vụ quyền hạn chính thức, nếu lợi dụng việc quản lý để chiếm đoạt thì cấu thành tội Tham ô theo Điều 353 BLHS.",
    nguyenTacApDung: "Yếu tố quyết định của tội Tham ô là 'được giao quản lý tài sản nhà nước', không nhất thiết phải có chức vụ chính thức trong cơ cấu tổ chức.",
    vanBanLienQuan: ["100/2015/QH13", "36/2018/QH14"],
    tags: ["tham ô", "tham nhũng", "quản lý tài sản"],
    file: "An le 52.htm"
  },
  {
    id: "al-009",
    soAnLe: "Án lệ số 56/2023/AL",
    tieuDe: "Về xác định thiệt hại và bồi thường khi sa thải người lao động trái pháp luật",
    linhVuc: "Lao động",
    ngayBanHanh: "22/02/2023",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Người lao động bị sa thải không đúng quy trình (không họp xét kỷ luật). Tòa sơ thẩm chỉ buộc trả lương thời gian tạm đình chỉ.",
    noiDung: "Sa thải trái pháp luật phải bồi thường đầy đủ theo Điều 41 BLLĐ 2019: tiền lương + phụ cấp trong thời gian không được làm việc; ít nhất 02 tháng lương; trợ cấp thôi việc nếu không nhận lại.",
    nguyenTacApDung: "Sa thải trái pháp luật → bồi thường 3 khoản: (1) lương + phụ cấp các ngày không làm việc; (2) ít nhất 2 tháng lương HĐLĐ; (3) trợ cấp thôi việc nếu NLĐ không muốn quay lại.",
    vanBanLienQuan: ["45/2019/QH14"],
    tags: ["sa thải", "lao động", "bồi thường"],
    file: "An le 56.htm"
  },
  {
    id: "al-010",
    soAnLe: "Án lệ số 58/2023/AL",
    tieuDe: "Về hiệu lực của di chúc khi người lập di chúc không còn năng lực hành vi đầy đủ",
    linhVuc: "Dân sự – Thừa kế",
    ngayBanHanh: "18/07/2023",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Người lập di chúc 85 tuổi, mắc chứng mất trí nhớ theo hồ sơ bệnh án. Di chúc lập 10 ngày trước khi mất. Tranh chấp hiệu lực di chúc.",
    noiDung: "Di chúc lập khi người để lại di sản bị bệnh nặng, không còn nhận thức đầy đủ thì vô hiệu, dù có chữ ký hợp lệ và người làm chứng. Giám định y tế về năng lực hành vi tại thời điểm lập là chứng cứ quyết định.",
    nguyenTacApDung: "Điều 630 BLDS 2015: di chúc hợp lệ phải lập khi người lập minh mẫn, sáng suốt. Giám định y tế là chứng cứ then chốt khi có tranh chấp về năng lực hành vi.",
    vanBanLienQuan: ["91/2015/QH13"],
    tags: ["di chúc", "thừa kế", "năng lực hành vi"],
    file: "An le 58.htm"
  },
  {
    id: "al-011",
    soAnLe: "Án lệ số 61/2024/AL",
    tieuDe: "Về định tội danh hành vi sử dụng mạng xã hội để lừa đảo chiếm đoạt tài sản",
    linhVuc: "Hình sự – Công nghệ số",
    ngayBanHanh: "10/01/2024",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Bị cáo tạo 12 tài khoản Facebook giả, kết thân với 47 bị hại, vay tiền với lý do bịa đặt, chiếm đoạt tổng cộng 2,3 tỷ đồng.",
    noiDung: "Hành vi tạo tài khoản mạng xã hội giả để kết thân, chiếm lòng tin rồi vay tiền không trả đủ yếu tố 'thủ đoạn gian dối' cấu thành tội Lừa đảo chiếm đoạt tài sản Điều 174 BLHS.",
    nguyenTacApDung: "Giả mạo danh tính, bịa đặt hoàn cảnh qua mạng xã hội = thủ đoạn gian dối theo Điều 174 BLHS. Tổng giá trị chiếm đoạt từ nhiều bị hại được cộng dồn để xác định khung hình phạt.",
    vanBanLienQuan: ["100/2015/QH13", "13/2023/NĐ-CP"],
    tags: ["lừa đảo", "mạng xã hội", "tội phạm công nghệ"],
    file: "An le 61.htm"
  },

  // ─────────────────────────────────────────────────────────────
  // THÊM ÁN LỆ MỚI VÀO PHÍA DƯỚI ĐÂY
  // ─────────────────────────────────────────────────────────────
  // {
  //   id: "al-012",
  //   soAnLe: "Án lệ số XX/20XX/AL",
  //   tieuDe: "",
  //   linhVuc: "",
  //   ngayBanHanh: "",
  //   coQuan: "TAND Tối cao",
  //   tomTatVuViec: "",
  //   noiDung: "",
  //   nguyenTacApDung: "",
  //   vanBanLienQuan: [],
  //   tags: [],
  //   file: ""
  // },

];
