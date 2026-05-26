const quyTrinhKiemSat = [
  {
    id: "dan-su",
    typeTitle: "Phần A: Quy trình kiểm sát án Dân sự",
    stages: [
      {
        stageId: "ds-so-tham",
        stageTitle: "I. Giai đoạn Sơ thẩm",
        steps: [
          {
            stepId: "1.1",
            stepTitle: "Bước 1: Kiểm sát trả lại đơn khởi kiện và thụ lý vụ án",
            tasks: "Yêu cầu Tòa án chuyển Thông báo thụ lý/Quyết định trả lại đơn. Kiểm tra thẩm quyền, thời hiệu, điều kiện khởi kiện, tư cách đương sự. Lập Phiếu kiểm sát.",
            branches: [
              { condition: "Đúng pháp luật", action: "Cập nhật phần mềm trạng thái 'Đang giải quyết', vào sổ thụ lý kiểm sát." },
              { condition: "Có vi phạm", action: "KSV dự thảo văn bản Kiến nghị trình Lãnh đạo viện. -> Nếu Tòa án chấp nhận: Thụ lý lại; Nếu Tòa án bác bỏ: Báo cáo VKS cấp trên." }
            ]
          },
          {
            stepId: "1.2",
            stepTitle: "Bước 2: Kiểm sát lập hồ sơ, thu thập chứng cứ và áp dụng BPKCTT",
            tasks: "Kiểm sát các quyết định áp dụng/hủy bỏ biện pháp khẩn cấp tạm thời (BPKCTT). Tham gia lấy lời khai, đối chất, xem xét thẩm định tại chỗ. KSV yêu cầu Tòa án thu thập thêm chứng cứ nếu hồ sơ chưa đầy đủ.",
            branches: [
              { condition: "Vi phạm về BPKCTT", action: "Báo cáo đề xuất ban hành Kiến nghị ngay lập tức do tính cấp bách." },
              { condition: "Vi phạm thu thập chứng cứ", action: "Tập hợp vi phạm để phát biểu tại phiên tòa hoặc ban hành Kiến nghị chung." }
            ]
          },
          {
            stepId: "1.3",
            stepTitle: "Bước 3: Nghiên cứu hồ sơ, lập Báo cáo và Tham gia phiên tòa",
            tasks: "Nhận quyết định đưa vụ án ra xét xử. Trích cứu hồ sơ, lập Báo cáo đề xuất quan điểm giải quyết và dự thảo Bài phát biểu trình duyệt. Tham gia phiên tòa, hỏi làm rõ tình tiết, phát biểu quan điểm của VKS.",
            branches: [
              { condition: "Chung", action: "Báo cáo kết quả xét xử cho Lãnh đạo viện ngay sau phiên tòa. Nếu HĐXX hoãn phiên tòa -> Chuyển trạng thái 'Tạm hoãn', chờ Quyết định mở lại." }
            ]
          },
          {
            stepId: "1.4",
            stepTitle: "Bước 4: Kiểm sát Bản án/Quyết định sơ thẩm",
            tasks: "Nhận và kiểm sát hình thức, nội dung bản án. Đối chiếu biên bản phiên tòa. Lập Phiếu kiểm sát bản án.",
            branches: [
              { condition: "Bản án đúng pháp luật", action: "Chuyển trạng thái 'Chờ hiệu lực/Chờ kháng cáo'." },
              { condition: "Bản án có vi phạm nghiêm trọng", action: "Dự thảo Quyết định Kháng nghị Phúc thẩm trình Lãnh đạo viện trong thời hạn 15 ngày." }
            ]
          }
        ]
      },
      {
        stageId: "ds-phuc-tham",
        stageTitle: "II. Giai đoạn Phúc thẩm",
        steps: [
          {
            stepId: "2.1",
            stepTitle: "Bước 1: Kiểm sát thụ lý Phúc thẩm và Kháng cáo, Kháng nghị",
            tasks: "Kiểm tra tính hợp lệ của đơn kháng cáo, thời hạn nộp. Kiểm sát Thông báo thụ lý phúc thẩm của Tòa án cùng cấp.",
            branches: [
              { condition: "Chung", action: "Nếu kháng cáo quá hạn -> Tham gia phiên họp xét kháng cáo quá hạn. Nếu Tòa án cấp sơ thẩm chậm chuyển hồ sơ -> Ban hành văn bản đôn đốc/kiến nghị." }
            ]
          },
          {
            stepId: "2.2",
            stepTitle: "Bước 2: Chuẩn bị và Tham gia phiên tòa Phúc thẩm",
            tasks: "Nghiên cứu hồ sơ, phân tích tài liệu mới. Lập Báo cáo án trình Lãnh đạo. Tham gia phiên tòa, phát biểu quan điểm (Giữ nguyên, Sửa, hay Hủy bản án sơ thẩm). Kiểm sát bản án phúc thẩm sau khi tuyên.",
            branches: [
              { condition: "Bản án phúc thẩm đúng luật", action: "Kết thúc luồng giải quyết thông thường." },
              { condition: "Bản án phúc thẩm vi phạm nghiêm trọng", action: "Báo cáo VKS cấp cao/VKSND Tối cao đề xuất Kháng nghị Giám đốc thẩm." }
            ]
          }
        ]
      },
      {
        stageId: "ds-gdt-tt",
        stageTitle: "III. Giai đoạn Giám đốc thẩm / Tái thẩm",
        steps: [
          {
            stepId: "3.1",
            stepTitle: "Bước 1: Phân loại đơn và Kháng nghị",
            tasks: "Tiếp nhận đơn. Rút hồ sơ gốc từ Tòa án. Nghiên cứu xác định có sai lầm nghiêm trọng (GĐT) hoặc tình tiết mới (TT) hay không. Lập Báo cáo đề xuất.",
            branches: [
              { condition: "Chung", action: "Không có căn cứ -> Ra Thông báo trả lời đương sự. Có căn cứ -> Tham mưu Lãnh đạo ban hành Quyết định Kháng nghị." }
            ]
          },
          {
            stepId: "3.2",
            stepTitle: "Bước 2: Tham gia phiên tòa và Kiểm sát quyết định",
            tasks: "KSV bảo vệ Quyết định kháng nghị của VKS tại phiên tòa. Đề xuất Hội đồng xét xử. Kiểm sát Quyết định GĐT/TT.",
            branches: []
          }
        ]
      }
    ]
  },
  {
    id: "hanh-chinh",
    typeTitle: "Phần B: Quy trình kiểm sát án Hành chính",
    stages: [
      {
        stageId: "hc-so-tham",
        stageTitle: "I. Giai đoạn Sơ thẩm",
        steps: [
          {
            stepId: "1.1",
            stepTitle: "Bước 1: Kiểm sát việc trả lại đơn khởi kiện và thụ lý vụ án",
            tasks: "Kiểm tra đối tượng khởi kiện (Quyết định hành chính, Hành vi hành chính có thuộc thẩm quyền Tòa án không), thời hiệu, điều kiện khởi kiện. Lập Phiếu kiểm sát.",
            branches: [
              { condition: "Đúng pháp luật", action: "Chuyển trạng thái sang 'Đang giải quyết', đưa vào sổ theo dõi." },
              { condition: "Tòa án trả lại đơn sai", action: "KSV báo cáo Lãnh đạo ký văn bản Kiến nghị. -> Chấp nhận: Thụ lý lại; Bác bỏ: Báo cáo VKS cấp trên." }
            ]
          },
          {
            stepId: "1.2",
            stepTitle: "Bước 2: Kiểm sát đối thoại và thu thập chứng cứ",
            tasks: "Kiểm sát quá trình đối thoại (thủ tục trọng tâm án hành chính). KSV có thể trực tiếp tiến hành xác minh thu thập chứng cứ nếu Tòa án không thực hiện.",
            branches: [
              { condition: "Các bên đối thoại thành", action: "Tòa án ra Quyết định công nhận kết quả đối thoại thành -> KSV kiểm sát và kết thúc luồng." },
              { condition: "Đối thoại không thành", action: "Tòa án ra Quyết định đưa vụ án ra xét xử -> Chuyển sang Bước 3." }
            ]
          },
          {
            stepId: "1.3",
            stepTitle: "Bước 3: Lập hồ sơ kiểm sát, Tham gia phiên tòa và Kiểm sát Bản án",
            tasks: "Lập Báo cáo đề xuất đánh giá tính hợp pháp của Quyết định hành chính/Hành vi hành chính bị kiện. Trình bày Bài phát biểu tại phiên tòa. Kiểm sát Bản án sau khi xét xử.",
            branches: [
              { condition: "Bản án đúng", action: "Lưu hồ sơ, chuyển trạng thái chờ hiệu lực." },
              { condition: "Bản án vi phạm", action: "Soạn dự thảo Quyết định Kháng nghị Phúc thẩm trình Lãnh đạo viện trong 15 ngày." }
            ]
          }
        ]
      },
      {
        stageId: "hc-phuc-tham-gdt",
        stageTitle: "II. Giai đoạn Phúc thẩm / Giám đốc thẩm / Tái thẩm",
        steps: [
          {
            stepId: "2.1",
            stepTitle: "Bước 1: Kiểm sát Phúc thẩm",
            tasks: "Kiểm sát thụ lý phúc thẩm. Rút hồ sơ, phân tích kháng cáo/kháng nghị. Tham gia phiên tòa Phúc thẩm phát biểu quan điểm giải quyết.",
            branches: [
              { condition: "Chung", action: "Nếu HĐXX tuyên án khác với quan điểm VKS -> Báo cáo ngay lên VKS cấp trên bằng văn bản để xem xét Giám đốc thẩm." }
            ]
          },
          {
            stepId: "2.2",
            stepTitle: "Bước 2: Giám đốc thẩm / Tái thẩm",
            tasks: "Tiếp nhận đơn. Rút hồ sơ gốc. Nghiên cứu xác định vi phạm/tình tiết mới. Nếu có căn cứ, dự thảo Quyết định Kháng nghị GĐT/TT. Tham gia phiên tòa GĐT/TT để bảo vệ kháng nghị.",
            branches: []
          }
        ]
      }
    ]
  }
];

// Export để sử dụng trong các file khác (tuỳ thuộc vào framework đang dùng)
export default quyTrinhKiemSat;