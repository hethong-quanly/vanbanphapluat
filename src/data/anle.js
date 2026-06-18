// ================================================================
// db_04_anle.js – ÁN LỆ & QUYẾT ĐỊNH TAND TỐI CAO
// VKSND TP. Cần Thơ – Hệ thống LEXVIET
// ----------------------------------------------------------------
// Cấu trúc mỗi bản ghi:
//   id               : string  – VD: "al-01"
//   soAnLe           : string  – Số án lệ / quyết định
//   tieuDe           : string  – Tiêu đề đầy đủ
//   linhVuc          : string  – Lĩnh vực áp dụng
//   ngayBanHanh      : string  – DD/MM/YYYY
//   coQuan           : string  – Cơ quan ban hành
//   tomTatVuViec     : string  – Tóm tắt vụ việc
//   noiDung          : string  – Nội dung chính
//   nguyenTacApDung  : string  – Nguyên tắc áp dụng
//   vanBanLienQuan   : string[]– Văn bản liên quan
//   tags             : string[]– Từ khóa tìm kiếm
//   file             : string  – Tên file đính kèm (nếu có)
// ================================================================

export const DB_AN_LE = [

  // ── ÁN LỆ MỚI (2021–2024) ───────────────────────────────────
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

  // ── ÁN LỆ & QUYẾT ĐỊNH BỔ SUNG (2017–2022) ─────────────────
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
  },
  {
    id: "al-07",
    soAnLe: "Án lệ số 72/2024/AL",
    tieuDe: "Về xác định tội danh đối với hành vi cho vay nặng lãi trong giao dịch dân sự",
    linhVuc: "Hình sự - Kinh tế",
    ngayBanHanh: "15/05/2024",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Bị cáo cho vay với lãi suất vượt 20%/năm, thu lợi bất chính từ hoạt động cho vay; tranh luận giữa tội Cho vay lãi nặng và quan hệ dân sự.",
    noiDung: "Khi lãi suất cho vay vượt 20%/năm và thu lợi bất chính từ 30 triệu đồng trở lên, cấu thành tội Cho vay lãi nặng trong giao dịch dân sự theo Điều 201 BLHS.",
    nguyenTacApDung: "Phân biệt rõ cho vay có lãi suất cao nhưng chưa đủ yếu tố hình sự (quan hệ dân sự) với cho vay lãi nặng có thu lợi bất chính đáng kể.",
    vanBanLienQuan: ["100/2015/QH13", "91/2015/QH13"],
    tags: ["cho vay lãi nặng", "lãi suất", "giao dịch dân sự", "kinh tế"],
    file: "An le 72.htm"
  },
  {
    id: "al-08",
    soAnLe: "Án lệ số 90/2024/AL",
    tieuDe: "Về xác định thẩm quyền và áp dụng Luật Đất đai 2024 trong tranh chấp quyền sử dụng đất",
    linhVuc: "Dân sự - Đất đai",
    ngayBanHanh: "20/11/2024",
    coQuan: "TAND Tối cao",
    tomTatVuViec: "Tranh chấp quyền sử dụng đất phát sinh sau khi Luật Đất đai 2024 có hiệu lực; tranh luận về áp dụng luật mới và thủ tục đăng ký biến động.",
    noiDung: "Vụ án phát sinh sau ngày Luật Đất đai 2024 có hiệu lực phải áp dụng luật mới; Tòa án xem xét hồ sơ đăng ký, GCNQSDĐ theo quy định hiện hành.",
    nguyenTacApDung: "Áp dụng nguyên tắc luật mới (Điều 5 BLDS 2015); xem xét quá trình quản lý, sử dụng đất ổn định kết hợp hồ sơ đăng ký theo Luật Đất đai 2024.",
    vanBanLienQuan: ["31/2024/QH15", "91/2015/QH13", "106/2024/NĐ-CP"],
    tags: ["đất đai", "Luật Đất đai 2024", "quyền sử dụng đất", "đăng ký biến động"],
    file: "An le 90.htm"
  },

];

// ── ÁN LỆ TỔNG HỢP TỪ FILE CHM (TAND Tối cao) ─────────────────
export const CHM_AN_LE = [
  { id:"al-chm-01", soAnLe:"Án lệ số 01/2016/AL", tieuDe:"Về xác định lãi suất trong hợp đồng vay tài sản", linhVuc:"Dân sự – Hợp đồng", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Tranh chấp hợp đồng vay có lãi suất vượt quy định; xác định lãi suất áp dụng khi không thỏa thuận rõ.", nguyenTacApDung:"Lãi suất cho vay không được vượt 20%/năm (Điều 468 BLDS 2015); phần vượt quá bị vô hiệu.", vanBanLienQuan:["91/2015/QH13"], file:"An le 01.htm" },
  { id:"al-chm-02", soAnLe:"Án lệ số 02/2016/AL", tieuDe:"Về hiệu lực của hợp đồng chuyển nhượng quyền sử dụng đất trong trường hợp đất chưa được cấp giấy chứng nhận", linhVuc:"Đất đai – Dân sự", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Các bên chuyển nhượng đất chưa có sổ đỏ; một bên không thực hiện hợp đồng.", nguyenTacApDung:"Hợp đồng CNQSDĐ đất chưa có GCN nhưng đã thực hiện ổn định lâu dài có thể được công nhận dựa trên nguyên tắc thiện chí.", vanBanLienQuan:["91/2015/QH13","31/2024/QH15"], file:"An le 02.htm" },
  { id:"al-chm-03", soAnLe:"Án lệ số 03/2016/AL", tieuDe:"Về công nhận hợp đồng thế chấp quyền sử dụng đất mà không có công chứng", linhVuc:"Đất đai – Ngân hàng", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Ngân hàng nhận thế chấp QSDĐ bằng hợp đồng không công chứng; tranh chấp khi xử lý tài sản.", nguyenTacApDung:"Áp dụng nguyên tắc thiện chí, bảo vệ bên cho vay khi bên vay đã nhận tiền và sử dụng.", vanBanLienQuan:["91/2015/QH13"], file:"An le 03.htm" },
  { id:"al-chm-04", soAnLe:"Án lệ số 04/2016/AL", tieuDe:"Về xử lý tài sản thế chấp khi vợ chồng ly hôn mà tài sản chung đang thế chấp ngân hàng", linhVuc:"Hôn nhân – Ngân hàng", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Vợ chồng thế chấp tài sản chung tại ngân hàng; khi ly hôn tranh chấp phần chia tài sản.", nguyenTacApDung:"Khi chia tài sản chung trong vụ ly hôn, phải xử lý xong nghĩa vụ với ngân hàng trước khi chia; không thể chia tài sản đang thế chấp mà không tính đến khoản nợ.", vanBanLienQuan:["91/2015/QH13","45/2019/QH14"], file:"An le 04.htm" },
  { id:"al-chm-05", soAnLe:"Án lệ số 05/2016/AL", tieuDe:"Về xác định di sản thừa kế khi tài sản được tạo ra trong thời kỳ hôn nhân", linhVuc:"Dân sự – Thừa kế", ngayBanHanh:"06/04/2016", coQuan:"TAND Tối cao", tomTatVuViec:"Tranh chấp thừa kế liên quan đến tài sản do vợ hoặc chồng tạo ra trong thời kỳ hôn nhân.", nguyenTacApDung:"Tài sản tạo ra trong thời kỳ hôn nhân là tài sản chung (Điều 33 Luật HNGD 2014); phần di sản của người chết chỉ là ½ tài sản chung đó.", vanBanLienQuan:["91/2015/QH13"], file:"An le 05.htm" },
  { id:"al-chm-10", soAnLe:"Án lệ số 10/2017/AL", tieuDe:"Về áp dụng biện pháp tạm giam để điều tra trong vụ án tham nhũng", linhVuc:"Hình sự – Tham nhũng", ngayBanHanh:"2017", coQuan:"TAND Tối cao", tomTatVuViec:"Bị can tội tham ô bị tạm giam quá thời hạn mà chưa có quyết định gia hạn.", nguyenTacApDung:"Thời hạn tạm giam phải được gia hạn theo đúng Điều 173 BLTTHS; hết hạn chưa gia hạn phải trả tự do ngay.", vanBanLienQuan:["92/2015/QH13","100/2015/QH13"], file:"An le 10.htm" },
  { id:"al-chm-20", soAnLe:"Án lệ số 20/2018/AL", tieuDe:"Về xác định tội danh trong vụ án có nhiều người phạm tội – đồng phạm", linhVuc:"Hình sự", ngayBanHanh:"2018", coQuan:"TAND Tối cao", tomTatVuViec:"Nhóm đối tượng cùng thực hiện hành vi cướp tài sản; xác định vai trò chủ mưu, đồng phạm.", nguyenTacApDung:"Xác định vai trò của từng người trong đồng phạm (Điều 17 BLHS): người tổ chức, người thực hành, người giúp sức, người xúi giục có mức hình phạt khác nhau.", vanBanLienQuan:["100/2015/QH13"], file:"An le 20.htm" },
  { id:"al-chm-30", soAnLe:"Án lệ số 30/2020/AL", tieuDe:"Về xác định thiệt hại và bồi thường trong vụ án tai nạn giao thông", linhVuc:"Dân sự – Giao thông", ngayBanHanh:"2020", coQuan:"TAND Tối cao", tomTatVuViec:"Nạn nhân tai nạn giao thông yêu cầu bồi thường; tranh chấp về mức bồi thường thiệt hại sức khỏe.", nguyenTacApDung:"Thiệt hại về sức khỏe bao gồm: chi phí điều trị, thu nhập bị mất, tổn thất tinh thần (Điều 590 BLDS 2015); phải bồi thường đầy đủ và kịp thời.", vanBanLienQuan:["91/2015/QH13"], file:"An le 30.htm" },
  { id:"al-chm-40", soAnLe:"Án lệ số 40/2021/AL", tieuDe:"Về xử lý tài sản kê biên khi người phải thi hành án không có tài sản", linhVuc:"Thi hành án dân sự", ngayBanHanh:"2021", coQuan:"TAND Tối cao", tomTatVuViec:"Người phải THA không có tài sản để thi hành; chấp hành viên đình chỉ THA gây khiếu nại.", nguyenTacApDung:"Phải xác minh đầy đủ điều kiện THA theo Điều 44 Luật THADS trước khi đình chỉ; phải định kỳ xác minh lại.", vanBanLienQuan:["56/2021/QH15"], file:"An le 40.htm" },
  { id:"al-chm-50", soAnLe:"Án lệ số 50/2022/AL", tieuDe:"Về xác định thẩm quyền xét xử tranh chấp hợp đồng lao động có yếu tố nước ngoài", linhVuc:"Lao động – Tư pháp quốc tế", ngayBanHanh:"2022", coQuan:"TAND Tối cao", tomTatVuViec:"Người lao động Việt Nam làm việc cho công ty nước ngoài tại Việt Nam tranh chấp hợp đồng lao động.", nguyenTacApDung:"Tòa án Việt Nam có thẩm quyền xét xử khi hợp đồng thực hiện tại Việt Nam (Điều 469 BLTTDS 2015); áp dụng pháp luật lao động Việt Nam.", vanBanLienQuan:["45/2019/QH14","93/2015/QH13"], file:"An le 50.htm" },
  { id:"al-chm-60", soAnLe:"Án lệ số 60/2023/AL", tieuDe:"Về quyền khởi kiện của người thứ ba trong vụ án tranh chấp hợp đồng", linhVuc:"Dân sự – Tố tụng", ngayBanHanh:"2023", coQuan:"TAND Tối cao", tomTatVuViec:"Người thứ ba có quyền lợi nghĩa vụ liên quan yêu cầu Tòa bảo vệ quyền lợi trong vụ án dân sự.", nguyenTacApDung:"Người có quyền lợi nghĩa vụ liên quan có quyền yêu cầu độc lập theo Điều 73 BLTTDS 2015; Tòa phải thụ lý và giải quyết.", vanBanLienQuan:["91/2015/QH13","93/2015/QH13"], file:"An le 60.htm" },
  { id:"al-chm-70", soAnLe:"Án lệ số 70/2023/AL", tieuDe:"Về xác định tội phạm trong trường hợp dùng thủ đoạn tinh vi chiếm đoạt tài sản qua giao dịch dân sự giả tạo", linhVuc:"Hình sự – Kinh tế", ngayBanHanh:"2023", coQuan:"TAND Tối cao", tomTatVuViec:"Bị cáo ký hợp đồng vay tiền nhưng thực chất là chiếm đoạt; tranh luận giữa tội lừa đảo và vi phạm hợp đồng dân sự.", nguyenTacApDung:"Khi người phạm tội ngay từ đầu có ý thức chiếm đoạt, dùng hợp đồng dân sự làm vỏ bọc thì cấu thành tội Lừa đảo chiếm đoạt tài sản (Điều 174 BLHS), không phải quan hệ dân sự.", vanBanLienQuan:["100/2015/QH13","91/2015/QH13"], file:"An le 70.htm" },
  { id:"al-chm-80", soAnLe:"Án lệ số 80/2024/AL", tieuDe:"Về xử lý vật chứng là phương tiện phạm tội trong vụ án ma túy", linhVuc:"Hình sự – Ma túy", ngayBanHanh:"2024", coQuan:"TAND Tối cao", tomTatVuViec:"Xe ô tô được dùng để vận chuyển ma túy; tranh chấp về việc tịch thu hay trả lại cho chủ sở hữu không liên quan.", nguyenTacApDung:"Phương tiện phạm tội bị tịch thu theo Điều 47 BLHS; tuy nhiên nếu chủ phương tiện không biết và không liên quan, Hội đồng xem xét trả lại theo từng trường hợp cụ thể.", vanBanLienQuan:["100/2015/QH13"], file:"An le 80.htm" },
  { id:"al-chm-ds", soAnLe:"Án lệ dân sự tổng hợp", tieuDe:"Tổng hợp án lệ về dân sự – hôn nhân gia đình – thừa kế", linhVuc:"Dân sự tổng hợp", ngayBanHanh:"2016–2024", coQuan:"TAND Tối cao", tomTatVuViec:"Tập hợp các án lệ quan trọng về dân sự, hôn nhân gia đình và thừa kế từ năm 2016 đến 2024.", nguyenTacApDung:"Áp dụng các nguyên tắc cơ bản của BLDS 2015 về hợp đồng, thừa kế, tài sản trong hôn nhân.", vanBanLienQuan:["91/2015/QH13"], file:"An le dan su.htm" },
  { id:"al-chm-hs", soAnLe:"Án lệ hình sự tổng hợp", tieuDe:"Tổng hợp án lệ về hình sự – tội phạm và hình phạt", linhVuc:"Hình sự tổng hợp", ngayBanHanh:"2016–2024", coQuan:"TAND Tối cao", tomTatVuViec:"Tập hợp các án lệ về định tội danh, quyết định hình phạt, các tình tiết tăng nặng giảm nhẹ trong án hình sự.", nguyenTacApDung:"Áp dụng BLHS 2015 và các nghị quyết hướng dẫn của HĐTP TAND Tối cao.", vanBanLienQuan:["100/2015/QH13","92/2015/QH13"], file:"An le hinh su.htm" },
  { id:"al-chm-90", soAnLe:"Án lệ số 90/2024/AL", tieuDe:"Về áp dụng Luật Đất đai 2024 trong giải quyết tranh chấp đất đai", linhVuc:"Đất đai – Dân sự", ngayBanHanh:"2024", coQuan:"TAND Tối cao", tomTatVuViec:"Tranh chấp quyền sử dụng đất sau khi Luật Đất đai 2024 có hiệu lực; xác định luật áp dụng và căn cứ đăng ký biến động.", nguyenTacApDung:"Vụ việc phát sinh sau 01/08/2024 áp dụng Luật Đất đai 2024; kết hợp xem xét quá trình sử dụng đất ổn định và hồ sơ đăng ký.", vanBanLienQuan:["31/2024/QH15","91/2015/QH13"], file:"An le 90.htm" },
  { id:"al-chm-72", soAnLe:"Án lệ số 72/2024/AL", tieuDe:"Về định tội Cho vay lãi nặng trong giao dịch dân sự", linhVuc:"Hình sự – Kinh tế", ngayBanHanh:"2024", coQuan:"TAND Tối cao", tomTatVuViec:"Cho vay với lãi suất vượt 20%/năm, thu lợi bất chính lớn; phân biệt với tranh chấp dân sự về lãi suất.", nguyenTacApDung:"Đủ yếu tố Điều 201 BLHS thì truy cứu trách nhiệm hình sự; phần lãi suất vượt 20%/năm trong quan hệ dân sự bị vô hiệu theo Điều 468 BLDS.", vanBanLienQuan:["100/2015/QH13","91/2015/QH13"], file:"An le 72.htm" },
];