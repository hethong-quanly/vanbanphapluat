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
// ── CÁC ÁN LỆ & QUYẾT ĐỊNH MỚI BỔ SUNG ─────────────────────────────────────────

  {
    id: "al-013",
    soAnLe: "Án lệ số 13/2017/AL",
    tieuDe: "Về hiệu lực thanh toán của thư tín dụng (L/C) trong trường hợp hợp đồng mua bán hàng hóa quốc tế là cơ sở của L/C bị hủy bỏ",
    linhVuc: "Kinh doanh thương mại",
    ngayBanHanh: "14/12/2017",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Hợp đồng mua bán hàng hóa quốc tế thỏa thuận phương thức thanh toán bằng L/C theo tập quán thương mại quốc tế (UCP 600). Sau đó, hợp đồng mua bán hàng hóa quốc tế là cơ sở của L/C bị hủy bỏ.",
    noiDung: "Xác định tính độc lập của thư tín dụng (L/C) đối với hợp đồng mua bán hàng hóa cơ sở.",
    nguyenTacApDung: "Tòa án phải xác định thư tín dụng (L/C) không bị mất hiệu lực thanh toán vì lý do hợp đồng mua bán hàng hóa quốc tế là cơ sở của thư tín dụng (L/C) bị hủy bỏ.",
    vanBanLienQuan: ["Bộ luật Dân sự 2005", "Bộ luật Dân sự 2015", "Quyết định 226/2002/QĐ-NHNN"],
    tags: ["Thư tín dụng", "L/C", "UCP 600", "Tập quán thương mại quốc tế", "Hợp đồng mua bán hàng hóa quốc tế", "Hợp đồng bị hủy bỏ"],
    file: "Án lệ 13.doc"
  },
  {
    id: "al-014",
    soAnLe: "Án lệ số 14/2017/AL",
    tieuDe: "Về công nhận điều kiện của hợp đồng tặng cho quyền sử dụng đất mà điều kiện đó không được ghi trong hợp đồng",
    linhVuc: "Dân sự",
    ngayBanHanh: "14/12/2017",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Hợp đồng tặng cho QSDĐ không ghi điều kiện tặng cho nhưng tại các văn bản, tài liệu khác có liên quan thể hiện các bên đã có thỏa thuận, thống nhất về điều kiện tặng cho và điều kiện tặng cho là hợp pháp.",
    noiDung: "Công nhận tính có điều kiện của hợp đồng tặng cho dù điều kiện không nằm trực tiếp trong văn bản hợp đồng chính.",
    nguyenTacApDung: "Tòa án phải công nhận điều kiện của hợp đồng tặng cho quyền sử dụng đất và xác định hợp đồng tặng cho quyền sử dụng đất đó là hợp đồng tặng cho tài sản có điều kiện.",
    vanBanLienQuan: ["Bộ luật Dân sự 2005", "Bộ luật Dân sự 2015"],
    tags: ["Hợp đồng tặng cho quyền sử dụng đất", "Giao dịch dân sự có điều kiện", "Tặng cho tài sản có điều kiện"],
    file: "Án lệ 14.doc"
  },
  {
    id: "al-017",
    soAnLe: "Án lệ số 17/2018/AL",
    tieuDe: "Về tình tiết “Có tính chất côn đồ” trong tội “Giết người” có đồng phạm",
    linhVuc: "Hình sự",
    ngayBanHanh: "17/10/2018",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Chỉ vì mâu thuẫn nhỏ, các đồng phạm rủ nhau đánh dằn mặt bị hại. Người thực hành dùng mã tấu chém liên tiếp vào vùng trọng yếu; bị hại không chết là ngoài ý muốn. Người xúi giục không có mặt, không biết việc dùng mã tấu nhưng đã để mặc hậu quả xảy ra.",
    noiDung: "Phân hóa trách nhiệm hình sự và tình tiết định khung giữa người thực hành và người xúi giục trong vụ án đồng phạm.",
    nguyenTacApDung: "Người thực hành bị truy cứu tội Giết người với tình tiết “Có tính chất côn đồ”. Người xúi giục bị truy cứu tội Giết người nhưng không bị áp dụng tình tiết định khung “Có tính chất côn đồ”.",
    vanBanLienQuan: ["Bộ luật Hình sự 1999", "Bộ luật Hình sự 2015"],
    tags: ["Đồng phạm", "Có tính chất côn đồ", "Vùng trọng yếu trên cơ thể", "Người thực hành", "Người xúi giục", "Tội giết người"],
    file: "Án lệ 17.doc"
  },
  {
    id: "al-022",
    soAnLe: "Án lệ số 22/2018/AL",
    tieuDe: "Về không vi phạm nghĩa vụ cung cấp thông tin tình trạng bệnh lý trong hợp đồng bảo hiểm nhân thọ",
    linhVuc: "Dân sự - Bảo hiểm",
    ngayBanHanh: "17/10/2018",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Hợp đồng bảo hiểm nhân thọ, đơn yêu cầu bảo hiểm có yêu cầu không rõ ràng về việc kê khai tình trạng bệnh lý. Thông tin yêu cầu kê khai không phải là căn cứ quyết định việc các bên xác lập hợp đồng bảo hiểm.",
    noiDung: "Bảo vệ quyền lợi của người mua bảo hiểm khi các điều khoản yêu cầu kê khai thông tin từ phía doanh nghiệp bảo hiểm không rõ ràng.",
    nguyenTacApDung: "Phải xác định người mua bảo hiểm không vi phạm nghĩa vụ cung cấp thông tin khi ký hợp đồng bảo hiểm, đơn yêu cầu bảo hiểm.",
    vanBanLienQuan: ["Bộ luật Dân sự 2005", "Bộ luật Dân sự 2015", "Luật Kinh doanh bảo hiểm 2000"],
    tags: ["Hợp đồng bảo hiểm", "Đơn yêu cầu bảo hiểm", "Vi phạm nghĩa vụ cung cấp thông tin", "Yêu cầu kê khai thông tin không rõ ràng", "Tình trạng bệnh lý"],
    file: "Án lệ 22.doc"
  },
  {
    id: "al-023",
    soAnLe: "Án lệ số 23/2018/AL",
    tieuDe: "Về hiệu lực của hợp đồng bảo hiểm nhân thọ khi bên mua bảo hiểm không đóng phí bảo hiểm do lỗi của doanh nghiệp bảo hiểm",
    linhVuc: "Dân sự - Bảo hiểm",
    ngayBanHanh: "17/10/2018",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Hồ sơ yêu cầu bảo hiểm nhân thọ thể hiện người mua chọn hình thức thu phí tại nhà. Đến hạn đóng phí và trong thời gian gia hạn, nhân viên công ty bảo hiểm không đến thu phí của người mua.",
    noiDung: "Xác định hợp đồng bảo hiểm vẫn giữ nguyên hiệu lực khi việc không đóng phí xuất phát từ lỗi của doanh nghiệp bảo hiểm.",
    nguyenTacApDung: "Xác định người mua bảo hiểm không có lỗi. Hợp đồng bảo hiểm nhân thọ không bị mất hiệu lực vì lý do bên mua không đóng phí trong thời hạn theo thỏa thuận.",
    vanBanLienQuan: ["Luật Kinh doanh bảo hiểm 2000"],
    tags: ["Hợp đồng bảo hiểm nhân thọ", "Hiệu lực của hợp đồng bảo hiểm nhân thọ", "Thời hạn đóng phí", "Gia hạn đóng phí"],
    file: "Án lệ 23.doc"
  },
  {
    id: "al-025",
    soAnLe: "Án lệ số 25/2018/AL",
    tieuDe: "Về không phải chịu phạt cọc vì lý do khách quan",
    linhVuc: "Dân sự",
    ngayBanHanh: "17/10/2018",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Hợp đồng đặt cọc mua bán nhà có thỏa thuận thời hạn để bên nhận đặt cọc hoàn tất thủ tục cấp giấy chứng nhận, vi phạm sẽ bị phạt cọc. Tuy nhiên, hết thời hạn mà vẫn chưa được cấp giấy chứng nhận do nguyên nhân từ phía cơ quan nhà nước.",
    noiDung: "Giải trừ trách nhiệm phạt cọc cho bên nhận đặt cọc khi vi phạm thời hạn hợp đồng do nguyên nhân khách quan từ cơ quan nhà nước có thẩm quyền.",
    nguyenTacApDung: "Phải xác định việc bên nhận đặt cọc không thể thực hiện đúng cam kết là do khách quan và bên nhận đặt cọc không phải chịu phạt cọc.",
    vanBanLienQuan: ["Bộ luật Dân sự 2005", "Bộ luật Dân sự 2015"],
    tags: ["Hợp đồng đặt cọc", "Hợp đồng mua bán nhà", "Phạt cọc", "Lý do khách quan"],
    file: "Án lệ 25.doc"
  },
  {
    id: "al-026",
    soAnLe: "Án lệ số 26/2018/AL",
    tieuDe: "Về xác định thời điểm bắt đầu tính thời hiệu và thời hiệu yêu cầu chia di sản thừa kế là bất động sản",
    linhVuc: "Dân sự - Thừa kế",
    ngayBanHanh: "17/10/2018",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Người để lại di sản thừa kế là bất động sản chết trước ngày công bố Pháp lệnh Thừa kế (30/8/1990). Khi xét xử sơ thẩm, Bộ luật Dân sự 2015 đang có hiệu lực pháp luật.",
    noiDung: "Hướng dẫn thống nhất mốc thời gian bắt đầu tính thời hiệu thừa kế đối với các trường hợp mở thừa kế trước ngày ban hành Pháp lệnh Thừa kế.",
    nguyenTacApDung: "Thời điểm bắt đầu tính thời hiệu yêu cầu chia di sản thừa kế là ngày công bố Pháp lệnh Thừa kế (30-8-1990). Thời hiệu được xác định theo quy định của BLDS 2015.",
    vanBanLienQuan: ["Bộ luật Dân sự 2015", "Pháp lệnh thừa kế 1990"],
    tags: ["Chia di sản thừa kế", "Thời hiệu yêu cầu chia di sản", "Thời điểm bắt đầu tính thời hiệu", "Bất động sản"],
    file: "Án lệ 26.doc"
  },
  {
    id: "al-036",
    soAnLe: "Án lệ số 36/2020/AL",
    tieuDe: "Về hiệu lực của hợp đồng thế chấp quyền sử dụng đất khi giấy chứng nhận quyền sử dụng đất bị thu hồi, hủy bỏ",
    linhVuc: "Dân sự - Ngân hàng",
    ngayBanHanh: "05/02/2020",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Hợp đồng thế chấp tuân thủ đúng pháp luật nhưng sau đó GCNQSDĐ bị thu hồi, hủy bỏ do sai sót của cơ quan nhà nước về diện tích và trình tự cấp. Việc này không làm mất đi quyền sử dụng đất hợp pháp của người sử dụng đất.",
    noiDung: "Bảo vệ quyền lợi của bên nhận thế chấp ngay tình khi GCNQSDĐ bị thu hồi do lỗi sai sót thủ tục hành chính, không phải do người thế chấp mất quyền sử dụng đất.",
    nguyenTacApDung: "Trường hợp này, phải xác định hợp đồng thế chấp quyền sử dụng đất vẫn có hiệu lực pháp luật.",
    vanBanLienQuan: ["Bộ luật Dân sự 2005", "Bộ luật Dân sự 2015", "Luật Đất đai 2003", "Luật Đất đai 2013"],
    tags: ["Giấy chứng nhận quyền sử dụng đất", "Thu hồi GCNQSDĐ", "Hủy bỏ GCN", "Hiệu lực hợp đồng thế chấp"],
    file: "Án lệ  36.docx"
  },
  {
    id: "qd-60-2022",
    soAnLe: "Quyết định số 60/2022/DS-GĐT",
    tieuDe: "Về tranh chấp thừa kế quyền sử dụng đất",
    linhVuc: "Dân sự - Thừa kế",
    ngayBanHanh: "19/12/2022",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Tranh chấp thừa kế QSDĐ giữa nguyên đơn (Nguyễn Thị G) và bị đơn (Nguyễn Văn U). Tranh chấp liên quan đến hiệu lực di chúc, biên bản họp gia đình và quá trình đăng ký, quản lý, sử dụng đất đai từ năm 1998.",
    noiDung: "Tòa án cấp sơ thẩm và phúc thẩm căn cứ vào nội dung di chúc, biên bản họp gia đình, lời khai và quá trình sử dụng đất liên tục để công nhận quyền thừa kế đối với di sản.",
    nguyenTacApDung: "Công nhận quyền thừa kế đối với di sản đất đai dựa trên sự kết hợp xem xét tính hợp pháp của di chúc, biên bản thỏa thuận gia đình và thực tế quản lý sử dụng đất liên tục.",
    vanBanLienQuan: ["Bộ luật Tố tụng dân sự 2015"],
    tags: ["Tranh chấp thừa kế", "Quyền sử dụng đất", "Di chúc", "Biên bản họp gia đình", "Quản lý sử dụng đất"],
    file: "60_2022_DS-GDT_TANDTC (2).pdf"
  }
  {
    id: "al-042",
    soAnLe: "Án lệ số 42/2021/AL",
    tieuDe: "Về quyền lựa chọn Tòa án giải quyết tranh chấp của người tiêu dùng trong trường hợp hợp đồng theo mẫu có thỏa thuận trọng tài",
    linhVuc: "Dân sự – Bảo vệ người tiêu dùng",
    ngayBanHanh: "24/02/2021",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Trong hợp đồng theo mẫu giao kết với người tiêu dùng có điều khoản lựa chọn Trọng tài nước ngoài để giải quyết tranh chấp. Khi xảy ra tranh chấp, người tiêu dùng không đồng ý lựa chọn trọng tài và khởi kiện ra Tòa án Việt Nam.",
    noiDung: "Xác định quyền lựa chọn Tòa án Việt Nam giải quyết tranh chấp của người tiêu dùng khi hợp đồng theo mẫu có sẵn điều khoản thỏa thuận trọng tài.",
    nguyenTacApDung: "Trường hợp này, phải xác định người tiêu dùng không lựa chọn trọng tài và có quyền lựa chọn Tòa án Việt Nam giải quyết.",
    vanBanLienQuan: ["Luật Bảo vệ quyền lợi người tiêu dùng 2010", "Luật Trọng tài thương mại 2010"],
    tags: ["người tiêu dùng", "hợp đồng theo mẫu", "thỏa thuận trọng tài", "trọng tài nước ngoài", "thẩm quyền tòa án"],
    file: "Án lệ 42.docx"
  },
  {
    id: "al-044",
    soAnLe: "Án lệ số 44/2021/AL",
    tieuDe: "Về việc xác định thời hiệu khởi kiện đối với yêu cầu phản tố",
    linhVuc: "Tố tụng dân sự",
    ngayBanHanh: "25/11/2021",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Trong vụ án dân sự, bị đơn có yêu cầu phản tố đối với nguyên đơn, người có quyền lợi, nghĩa vụ liên quan có yêu cầu độc lập nhưng phát sinh tranh chấp hoặc nhầm lẫn về việc liệu yêu cầu phản tố có bị giới hạn bởi thời hiệu khởi kiện hay không.",
    noiDung: "Xác định bản chất pháp lý của yêu cầu phản tố tương đương với yêu cầu khởi kiện độc lập và tính áp dụng của các quy định thời hiệu.",
    nguyenTacApDung: "Tòa án phải xác định yêu cầu phản tố của bị đơn chính là yêu cầu khởi kiện và phải tuân thủ theo các quy định của pháp luật về thời hiệu khởi kiện.",
    vanBanLienQuan: ["Bộ luật Tố tụng dân sự 2015"],
    tags: ["yêu cầu phản tố", "thời hiệu khởi kiện", "bị đơn", "yêu cầu độc lập", "tố tụng dân sự"],
    file: "Án lệ 44.docx"
  },
  {
    id: "al-052",
    soAnLe: "Án lệ số 52/2021/AL",
    tieuDe: "Về hiệu lực của hợp đồng tặng cho quyền sử dụng đất khi chưa đăng ký quyền sử dụng đất",
    linhVuc: "Dân sự – Đất đai",
    ngayBanHanh: "25/11/2021",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Hợp đồng tặng cho quyền sử dụng đất được lập thành văn bản đã được công chứng, chứng thực hợp pháp; bên được tặng cho chưa đăng ký quyền sử dụng đất do trở ngại khách quan thì bên tặng cho tài sản chết.",
    noiDung: "Xác định hiệu lực pháp luật của hợp đồng tặng cho quyền sử dụng đất đã hoàn thành thủ tục công chứng nhưng người tặng cho qua đời trước khi thực hiện xong thủ tục sang tên đăng ký.",
    nguyenTacApDung: "Hợp đồng tặng cho quyền sử dụng đất có hiệu lực pháp luật nếu đã thỏa mãn các điều kiện theo quy định và cho đến khi chết, người tặng cho không có văn bản nào khác để thay thế hợp đồng tặng cho đã ký kết.",
    vanBanLienQuan: ["Bộ luật Dân sự 2015"],
    tags: ["tặng cho tài sản", "quyền sử dụng đất", "chưa đăng ký", "công chứng", "hiệu lực hợp đồng"],
    file: "Án lệ 52.docx"
  }
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
