export const assignments = [
  {
    id: 1,
    baiTap: "Bài 1",
    title: "Quản lý tệp và thư mục trên Windows",
    icon: "📁",
    tags: ["Quản lý tệp", "File Explorer", "Windows"],
    pdfLink:
      "https://drive.google.com/file/d/1AxBICdNFTRa1eVL9U2cTxStzwhumTZB2/view?usp=drive_link",
    goal: "Thực hành và nắm vững các thao tác cơ bản để quản lý tệp và thư mục trên hệ điều hành Windows, giúp tổ chức và lưu trữ dữ liệu học tập một cách khoa học.",
    summary:
      "Hướng dẫn chi tiết các thao tác làm việc với File Explorer: mở ổ đĩa, tạo và đổi tên thư mục/tệp tin, sao chép (Copy-Paste), di chuyển (Cut-Paste), xóa tệp, xóa vĩnh viễn và khôi phục dữ liệu từ Thùng rác.",
    sections: [
      {
        title: "Mục tiêu bài tập",
        content:
          "Làm quen và thao tác thành thạo với tệp tin, thư mục trên hệ điều hành Windows. Bài tập giúp sinh viên nắm vững kỹ năng quản lý file — nền tảng quan trọng trong việc học tập và làm việc trên máy tính.",
      },
      {
        title: "Các bước thực hiện",
        steps: [
          {
            step: "01",
            title: "Mở File Explorer",
            desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
          },
          {
            step: "02",
            title: "Truy cập ổ đĩa/thư mục",
            desc: "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.",
          },
          {
            step: "03",
            title: "Tạo thư mục mới",
            desc: "Nhấp chuột phải vào một khoảng trống → chọn New → Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter.",
          },
          {
            step: "04",
            title: "Vào thư mục vừa tạo",
            desc: "Nhấp đúp vào thư mục ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA) vừa tạo.",
          },
          {
            step: "05",
            title: "Tạo tệp tin văn bản",
            desc: "Nhấp chuột phải vào khoảng trống → New → Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.",
          },
          {
            step: "06",
            title: "Đổi tên tệp tin",
            desc: "Nhấp chuột phải vào tệp GhiChu.txt → chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.",
          },
          {
            step: "07",
            title: "Tạo thư mục con",
            desc: "Trong thư mục ThucHanh_hotensinhvien, nhấp chuột phải → New → Folder. Đặt tên là TaiLieu.",
          },
          {
            step: "08",
            title: "Sao chép tệp tin (Copy & Paste)",
            desc: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt → chọn Copy (hoặc chọn tệp rồi nhấn Ctrl+C). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong → chọn Paste (hoặc nhấn Ctrl+V).",
          },
          {
            step: "09",
            title: "Di chuyển tệp tin (Cut & Paste)",
            desc: "Quay lại thư mục ThucHanh_NguyenVanA. Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt → chọn Cut (hoặc nhấn Ctrl+X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống → chọn Paste (hoặc nhấn Ctrl+V).",
          },
          {
            step: "10",
            title: "Xóa tệp tin",
            desc: "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt → chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).",
          },
          {
            step: "11",
            title: "Xóa vĩnh viễn",
            desc: "Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra, đồng ý để xóa vĩnh viễn mà không qua Thùng rác.",
          },
          {
            step: "12",
            title: "Khôi phục từ Thùng rác (Tùy chọn)",
            desc: "Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore. Tệp sẽ quay trở lại vị trí ban đầu.",
          },
        ],
      },
      {
        title: "Kết quả đạt được",
        highlights: [
          {
            emoji: "✅",
            text: "Thành thạo thao tác tạo, đổi tên, sao chép, di chuyển và xóa tệp tin/thư mục, kể cả thư mục con lồng nhau.",
          },
          {
            emoji: "✅",
            text: "Phân biệt rõ Copy-Paste (giữ bản gốc) và Cut-Paste (di chuyển, xóa bản gốc khỏi vị trí cũ).",
          },
          {
            emoji: "✅",
            text: "Hiểu sự khác biệt giữa xóa thông thường (Recycle Bin) và xóa vĩnh viễn (Shift+Delete).",
          },
          {
            emoji: "✅",
            text: "Biết cách khôi phục dữ liệu từ Thùng rác khi cần thiết.",
          },
          {
            emoji: "✅",
            text: "Xây dựng thói quen quản lý tệp tin khoa học, ngăn nắp ngay từ năm nhất.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    baiTap: "Bài 2",
    title: "Tìm kiếm và đánh giá thông tin: AI trong học thuật",
    icon: "🔍",
    tags: [
      "AI tạo sinh",
      "Viết tiếng Anh",
      "Đánh giá thông tin",
      "Liêm chính học thuật",
    ],
    pdfLink:
      "https://drive.google.com/file/d/1M1OVb2exVr8NZucQHzIJRIydhwFeP6Au/view?usp=drive_link",
    goal: "Tìm kiếm, tổng hợp và đánh giá chuyên sâu độ tin cậy của các nguồn tài liệu học thuật về vai trò của Trí tuệ nhân tạo tạo sinh trong việc nâng cao kỹ năng viết tiếng Anh.",
    summary:
      "Xác định chiến lược tìm kiếm tài liệu từ 2021-2026 trên các nền tảng học thuật. Lập bảng tổng hợp 12 nguồn thông tin (bài báo, sách, luận văn). Thực hiện đánh giá chi tiết tính uy tín, phương pháp và ưu nhược điểm của một nghiên cứu tiêu biểu. Cuối cùng, rút ra kết luận về việc cân bằng giữa sử dụng AI và giữ vững liêm chính ngôn ngữ.",
    sections: [
      {
        title: "I. Giới thiệu và Chiến lược tìm kiếm",
        highlights: [
          {
            emoji: "🎯",
            text: "Ý nghĩa: Khám phá cách tích hợp công cụ AI (ChatGPT, Gemini) vào viết học thuật mà không làm mất đi tính liêm chính ngôn ngữ.",
          },
          {
            emoji: "📏",
            text: "Phạm vi: Các nghiên cứu thực nghiệm từ năm 2021-2026, đối tượng là sinh viên đại học học tiếng Anh (ESL).",
          },
          {
            emoji: "🔑",
            text: "Từ khóa: AI in language learning, LLMs and Academic Integrity, AI-driven feedback, Neuroplasticity in language learning.",
          },
          {
            emoji: "🌐",
            text: "Nền tảng: Google Scholar, ResearchGate, ScienceDirect và Thư viện số của các trường đại học lớn.",
          },
        ],
      },
      {
        title: "II. Bảng tổng hợp các nguồn thông tin",
        table: {
          headers: [
            "STT",
            "Tên tài liệu",
            "Loại nguồn",
            "Tác giả / Năm XB",
            "Độ tin cậy",
            "Tóm tắt đánh giá",
          ],
          rows: [
            [
              "1",
              "AI Chatbots in ESL Writing",
              "Bài báo KH",
              "Schmidt (2024)",
              "5/5",
              "Chỉ số tác động cao, thiết kế thực nghiệm có nhóm đối chứng.",
            ],
            [
              "2",
              "LLMs & Acquisition",
              "Bài báo KH",
              "Brown & Lee (2023)",
              "5/5",
              "Có phản biện kín, tập trung vào khung phương pháp giảng dạy.",
            ],
            [
              "3",
              "Generative AI Education",
              "Bài báo KH",
              "UNESCO (2023)",
              "5/5",
              "Tiêu chuẩn quốc tế về đạo đức và chính sách giáo dục.",
            ],
            [
              "4",
              "Vietnamese Perceptions",
              "Bài báo KH",
              "Nguyen (2024)",
              "4.5/5",
              "Bối cảnh địa phương cụ thể, phương pháp nghiên cứu hỗn hợp.",
            ],
            [
              "5",
              "Neuroplasticity & AI",
              "Bài báo KH",
              "Garcia (2025)",
              "5/5",
              "Khám phá tác động nhận thức dài hạn của việc sử dụng AI.",
            ],
            [
              "6",
              "The Death of the Essay?",
              "Bài báo KH",
              "Williams (2024)",
              "5/5",
              "Phân tích sâu sắc về tính liêm chính học thuật.",
            ],
            [
              "7",
              "Modern CALL Environments",
              "Sách chuyên khảo",
              "Hubbard (2022)",
              "5/5",
              "Lý thuyết nền tảng về học ngôn ngữ qua máy tính.",
            ],
            [
              "8",
              "Digital Pedagogy",
              "Sách chuyên khảo",
              "Thorne (2021)",
              "5/5",
              "Tác giả là chuyên gia đầu ngành, tính ứng dụng thực tiễn cao.",
            ],
            [
              "9",
              "Future of Learning",
              "Nguồn mở",
              "World Economic Forum (2024)",
              "4/5",
              "Cái nhìn vĩ mô về yêu cầu của thị trường lao động tương lai.",
            ],
            [
              "10",
              "AI Writing Ethics",
              "Nguồn mở",
              "Stanford University (2024)",
              "4.5/5",
              "Hướng dẫn từ học viện hàng đầu thế giới.",
            ],
            [
              "11",
              "EFL Motivation & AI",
              "Luận văn CSDL",
              "Lu (2024)",
              "3.5/5",
              "Nghiên cứu nội bộ, giá trị tham khảo thực tế cao.",
            ],
            [
              "12",
              "AI Feedback Loops",
              "Kỷ yếu hội thảo",
              "Tan (2026)",
              "4.5/5",
              "Công nghệ tiên phong về phản hồi thời gian thực.",
            ],
          ],
        },
      },
      {
        title: "III. Đánh giá chi tiết (Nguyen, T. 2024)",
        highlights: [
          {
            emoji: "👤",
            text: "Uy tín (Authority): Tác giả là chuyên gia TESOL hơn 10 năm kinh nghiệm; xuất bản trên tạp chí phản biện uy tín Asia CALL.",
          },
          {
            emoji: "🔬",
            text: "Phương pháp: Sử dụng Tam giác đạc (Triangulation) kết hợp khảo sát, phỏng vấn và quan sát, đảm bảo giá trị nội tại cao.",
          },
          {
            emoji: "✅",
            text: "Ưu điểm: Phản ánh chính xác cách sinh viên Việt Nam tương tác với AI (điều nghiên cứu toàn cầu thường bỏ lỡ).",
          },
          {
            emoji: "⚠️",
            text: "Nhược điểm: Quy mô mẫu (500) chủ yếu ở các đại học đô thị, có thể dẫn đến thiên kiến thành thị.",
          },
          {
            emoji: "💡",
            text: "Giá trị tổng thể: Cực kỳ quan trọng để thiết kế chương trình học phù hợp với thực tiễn tại Việt Nam.",
          },
        ],
      },
      {
        title: "IV. Kết luận và phản hồi cá nhân",
        content:
          'Dữ liệu thu thập xác nhận rằng mặc dù AI giúp tăng tốc độ viết, nhưng nó có nguy cơ gây ra "sự mờ nhạt về nhận thức" nếu sử dụng không có sự hướng dẫn. Đối với sự nghiệp tương lai trong ngành Ngôn ngữ Anh, sinh viên phải làm chủ kỹ năng viết cơ bản, chứ không để AI trở thành sự thay thế.',
      },
      {
        title: "V. Danh mục tài liệu tham khảo",
        highlights: [
          {
            emoji: "📄",
            text: "Brown, A. and Lee, S. (2023). 'Large Language Models and Language Acquisition', TESOL Quarterly, 57(2), tr. 112-130.",
          },
          {
            emoji: "📄",
            text: "Garcia, M. (2025). 'Neuroplasticity and AI-assisted Language Learning', Brain and Language Journal, 42(1), tr. 15-29.",
          },
          {
            emoji: "📄",
            text: "Hubbard, P. (2022). Modern CALL Environments: Research and Practice. tái bản lần 2. London: Taylor & Francis.",
          },
          {
            emoji: "📄",
            text: "Lu, T.M. (2024). The Impact of Generative AI on EFL Learners' Motivation. Luận văn Thạc sĩ. Đại học Ngoại ngữ - ĐHQGHN.",
          },
          {
            emoji: "📄",
            text: "Miller, J. (2023). The Ethics of AI in Linguistics. London: Oxford Academic.",
          },
          {
            emoji: "📄",
            text: "Nguyen, T. (2024). 'Vietnamese Student Perceptions of AI Tools in English Writing', Asia CALL Online Journal, 19(1), tr. 45-60.",
          },
          {
            emoji: "📄",
            text: "Schmidt, K. (2024). 'AI Chatbots in ESL Writing: An Experimental Study', Journal of Educational Technology, 12(4), tr. 201-215.",
          },
          {
            emoji: "📄",
            text: "Stanford University (2024). Guidelines for AI in Academic Writing.",
          },
          {
            emoji: "📄",
            text: "Thorne, S.L. (2021). Digital Pedagogy for Languages. New York: Routledge.",
          },
          {
            emoji: "📄",
            text: "UNESCO (2023). Guidance for Generative AI in Education and Research. Paris: UNESCO Publishing.",
          },
          {
            emoji: "📄",
            text: "Williams, R. (2024). 'The Death of the Essay? AI and Academic Integrity', Oxford Review of Education, 50(2), tr. 88-104.",
          },
          {
            emoji: "📄",
            text: "World Economic Forum (2024). AI and the Future of Learning: Global Trends Report. Geneva: WEF Press.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    baiTap: "Bài 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    icon: "🤖",
    tags: ["Trí tuệ nhân tạo", "AI", "Prompt Engineering"],
    pdfLink:
      "https://drive.google.com/file/d/1gTJZ-nrP6NHJU11PsJk5-PY4eT1tRf0v/view?usp=drive_link",
    goal: "Có cái nhìn tổng quát về trí tuệ nhân tạo (AI) và rèn kỹ năng Prompt Engineering để khai thác hiệu quả các mô hình ngôn ngữ lớn trong học tập.",
    summary:
      "Thử nghiệm và đánh giá hiệu quả của 3 mức độ prompt (cơ bản – cải tiến – nâng cao) trên 3 tác vụ cốt lõi: tóm tắt tài liệu học thuật, giải thích khái niệm phức tạp và tạo bộ câu hỏi ôn tập. So sánh kết quả thực nghiệm theo các tiêu chí hình thức, độ chính xác, văn phong và tính ứng dụng; từ đó đúc kết công thức viết prompt tối ưu C-T-C-O cùng các nguyên tắc tương tác hiệu quả với AI.",
    sections: [
      {
        title: "Mục tiêu bài tập",
        content:
          "Nghiên cứu và thực hành kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn như ChatGPT trong học tập. Qua việc thử nghiệm nhiều dạng prompt ở 3 cấp độ khác nhau trên các tác vụ học thuật, người học hiểu rõ cách đặt yêu cầu giúp AI tạo ra kết quả chính xác, đầy đủ và hữu ích hơn.",
      },
      {
        title: "3 Cấp độ Prompt đã thử nghiệm",
        steps: [
          {
            step: "🔵",
            title: "Prompt Cơ bản",
            desc: "Câu lệnh ngắn gọn, thiếu bối cảnh và ràng buộc → Đầu ra thô, chung chung, nhiều thông tin nhiễu và chưa đáp ứng nhu cầu nghiên cứu học thuật.",
          },
          {
            step: "🟡",
            title: "Prompt Cải tiến",
            desc: "Bổ sung yêu cầu cụ thể về nội dung trọng tâm, độ dài và cấu trúc phân đoạn → Đầu ra rõ ràng hơn, tập trung đúng từ khóa chính và có bố cục hợp lý.",
          },
          {
            step: "🟢",
            title: "Prompt Nâng cao",
            desc: "Áp dụng kỹ thuật đóng vai chuyên gia (Role-play), chuỗi tư duy (Chain-of-Thought) và thiết lập ràng buộc chặt chẽ → Đầu ra cực kỳ sâu sắc, chuyên sâu, văn phong chuyên gia và đạt chuẩn học thuật cao.",
          },
        ],
      },
      {
        title: "Các tác vụ thực nghiệm",
        highlights: [
          {
            emoji: "📄",
            text: "Tóm tắt tài liệu học thuật: So sánh 3 cấp độ prompt trên bài viết nghiên cứu về chủ đề 'Can Social Media pave the way for the Preservation and Promotion of Heritage sites?'",
          },
          {
            emoji: "💡",
            text: "Giải thích khái niệm phức tạp: Giải thích hiện tượng tâm lý - sinh học 'TikTok Brain' (Sự suy giảm dopamine và khả năng chú ý do tiêu thụ video ngắn liên tục) cho một học sinh trung học hiểu.",
          },
          {
            emoji: "📝",
            text: "Tạo bộ câu hỏi ôn tập: Thiết kế bộ câu hỏi trắc nghiệm, tự luận và các mức độ nhận thức theo thang Bloom cho chủ đề 'Sự phát triển của Giáo dục và Nho giáo thời Lý - Trần (Trọng tâm: legacy của Văn Miếu - Quốc Tử Giám)'.",
          },
        ],
      },
      {
        title: "Kết quả thử nghiệm theo từng tác vụ",
        table: {
          headers: ["Tác vụ", "Loại prompt", "Kết quả chi tiết"],
          rows: [
            [
              "Tóm tắt tài liệu học thuật",
              "Cơ bản",
              "AI tạo bản tóm tắt thô, ngắn gọn nhưng thiếu chi tiết, chưa làm nổi bật được bản chất học thuật của bài viết di sản.",
            ],
            [
              "Tóm tắt tài liệu học thuật",
              "Cải tiến",
              "Nội dung đầy đủ khoảng 200 từ, nêu rõ mục đích nghiên cứu, phương pháp thực hiện và kết quả chính.",
            ],
            [
              "Tóm tắt tài liệu học thuật",
              "Nâng cao",
              "Trích xuất xuất sắc 3 luận điểm cốt lõi, định dạng phát hiện chính thành danh sách bullet points dễ hiểu và đưa ra nhận xét khách quan về hạn chế.",
            ],
            [
              "Giải thích khái niệm phức tạp",
              "Cơ bản",
              "AI định nghĩa khái niệm TikTok Brain khá chung chung như một thuật ngữ không chính thức, mô tả sơ bộ về sự suy giảm tập trung.",
            ],
            [
              "Giải thích khái niệm phức tạp",
              "Cải tiến",
              "Giải thích khoa học và dễ hiểu dưới góc nhìn tâm lý, chỉ rõ cơ chế tác động đến dopamine và hệ quả đối với sinh viên.",
            ],
            [
              "Giải thích khái niệm phức tạp",
              "Nâng cao",
              "Sử dụng ẩn dụ thực tế sinh động (kẹo ngọt/đồ ăn nhanh), giải thích logic 3 bước (hiện tượng lâm sàng -> nguyên nhân sinh học -> giải pháp khắc phục).",
            ],
            [
              "Tạo bộ câu hỏi ôn tập",
              "Cơ bản",
              "Tạo câu hỏi rất chung chung và sơ sài về văn hóa giáo dục thời Lý Trần.",
            ],
            [
              "Tạo bộ câu hỏi ôn tập",
              "Cải tiến",
              "Thiết kế gồm 5 câu hỏi trắc nghiệm và 2 câu hỏi tự luận phù hợp, đi kèm đáp án đúng và lời giải thích ngắn gọn.",
            ],
            [
              "Tạo bộ câu hỏi ôn tập",
              "Nâng cao",
              "Thiết kế bộ câu hỏi theo các cấp độ nhận thức của thang Bloom (Biết, Hiểu, Vận dụng), phân tách rõ ràng câu hỏi, cấp độ và hướng dẫn trả lời chi tiết.",
            ],
          ],
        },
      },
      {
        title: "So sánh hiệu quả giữa các loại prompt",
        table: {
          headers: [
            "Tiêu chí đánh giá",
            "Phiên bản 1 (Cơ bản)",
            "Phiên bản 2 (Cải tiến)",
            "Phiên bản 3 (Nâng cao)",
          ],
          rows: [
            [
              "Độ dài & Định dạng đầu ra",
              "Tùy hứng, thường là một khối văn bản thô dài dòng, không cấu trúc, rất khó theo dõi nhanh thông tin.",
              "Đạt chuẩn độ dài giới hạn hình thức (~200 từ), văn bản đã được chia đoạn logic nhưng kết cấu còn đơn điệu.",
              "Chuẩn cấu trúc các bước yêu cầu; sử dụng linh hoạt bảng biểu, danh sách gạch đầu dòng và in đậm khoa học.",
            ],
            [
              "Độ chính xác & Tính trúng đích",
              "Chung chung, giữ lại nhiều thông tin nhiễu, không làm nổi bật được bản chất nội dung học thuật cần nghiên cứu.",
              "Tập trung đúng vào các từ khóa chính, giải quyết tốt khoảng 75-80% yêu cầu cốt lõi của nội dung bài học.",
              "Cực kỳ sâu sắc và trúng đích, làm nổi bật bản chất khoa học và cấu trúc dữ liệu nhờ chuỗi tư duy thiết lập sẵn.",
            ],
            [
              "Văn phong & Ngữ điệu",
              "Mang tính chất máy móc, rập khuôn, giống như công cụ dịch thuật thô thông thường, thiếu tính chuyên gia.",
              "Nghiêm túc, chuẩn mực, phù hợp làm tài liệu đọc tham khảo hoặc ghi chép thông thường.",
              "Văn phong sắc sảo, uyên bác của một giảng viên thực thụ; ngữ điệu lôi cuốn và mang tính định hướng giáo dục cao.",
            ],
            [
              "Khả năng ứng dụng thực tế",
              "Thấp. Người học phải mất nhiều lượt hỏi phụ để gọt giũa và làm sạch dữ liệu mới có thể sử dụng được.",
              "Trung bình. Có thể ứng dụng ngay để làm flashcard ghi chú hoặc đọc hiểu sơ bộ bề nổi của chủ đề.",
              "Rất xuất sắc. Kết quả có thể đóng gói làm giáo trình tự học, tài liệu giảng dạy hoặc đề cương ôn thi chất lượng cao.",
            ],
          ],
        },
      },
      {
        title: "Nguyên tắc viết prompt hiệu quả",
        highlights: [
          {
            emoji: "🧱",
            text: "Công thức C-T-C-O: Xây dựng câu lệnh tối ưu dựa trên 4 yếu tố thiết yếu bao gồm Context (Bối cảnh), Task (Nhiệm vụ), Constraint (Ràng buộc), và Output (Đầu ra)",
          },
          {
            emoji: "🎭",
            text: "Kỹ thuật Đóng vai (Role Prompting): Giới hạn không gian xác suất của từ vựng, kích hoạt phân vùng kiến thức chuyên sâu để dùng thuật ngữ chuyên ngành chuẩn xác nhất",
          },
          {
            emoji: "🪜",
            text: "Chuỗi tư duy (Chain-of-Thought): Ép AI tư duy qua các bước tuần tự bắt buộc mô hình phải tính toán chuỗi mã logic từ trước, giảm thiểu tối đa hiện tượng ảo tưởng",
          },
          {
            emoji: "🗣️",
            text: "Tương tác đa bước (Multi-turn chat): Chia nhỏ quy trình và trò chuyện tuần tự thay vì nhồi nhét tất cả yêu cầu vào một câu lệnh giúp AI tối ưu hóa kết quả",
          },
          {
            emoji: "🔄",
            text: "Linh hoạt điều chỉnh và Kiểm chứng độc lập: Chủ động yêu cầu hạ thấp hoặc nâng cao bậc từ vựng phù hợp, đồng thời luôn thực hiện kiểm chứng thực tế (Fact-check) để đảm bảo độ chính xác",
          },
        ],
      },
      {
        title: "Kết luận",
        content:
          "Prompt Engineering là kỹ năng tư duy hệ thống, không phải chỉ gõ lệnh. Chất lượng đầu ra của AI phụ thuộc trực tiếp vào chất lượng câu hỏi mà người dùng đặt ra — prompt càng rõ ràng, có cấu trúc và giàu ngữ cảnh thì kết quả càng chính xác, hữu ích. Đây là kỹ năng ngày càng quan trọng trong môi trường học tập và làm việc hiện đại, cần được rèn luyện thường xuyên.",
      },
    ],
  },
  {
    id: 4,
    baiTap: "Bài 4",
    title: "Sử dụng công cụ hợp tác trực tuyến trong dự án nhóm",
    icon: "🤝",
    tags: ["Làm việc nhóm", "Excel", "Google Workspace"],
    pdfLink:
      "https://drive.google.com/file/d/1L1_FNHYQTKYdiMV_Ak-a-NIcIaaLTCvp/view?usp=drive_link",
    goal: "Phát triển kỹ năng sử dụng các công cụ cộng tác trực tuyến (Excel, Google Docs, Google Meet) để quản lý công việc cá nhân, soạn thảo tài liệu và giao tiếp nhóm hiệu quả trong dự án thực tế.",
    summary:
      "Báo cáo cá nhân về việc ứng dụng 3 công cụ trong dự án nhóm 'Các biện pháp nuôi dưỡng sức khỏe tinh thần cho sinh viên': Excel (quản lý dự án), Google Docs (soạn thảo cộng tác, lưu trữ tệp) và Google Meet (giao tiếp nhóm). Trình bày quá trình sử dụng, nhiệm vụ cá nhân, đánh giá ưu nhược điểm của từng công cụ, cũng như cách giải quyết các thách thức như khó theo dõi tiến độ, nội dung bị ghi đè hay tài liệu phân tán.",
    sections: [
      {
        title: "1. Giới thiệu dự án",
        content:
          "Dự án nhóm mang tên 'Các biện pháp nuôi dưỡng sức khỏe tinh thần cho sinh viên', thực hiện trong 01 tuần. Vai trò cá nhân: tìm kiếm tài liệu, biên soạn nội dung và hỗ trợ tổng hợp thông tin. Để phối hợp, nhóm đã sử dụng 3 công cụ chính: Excel (quản lý dự án), Google Docs (soạn thảo cộng tác, lưu trữ và chia sẻ tệp) và Google Meet (giao tiếp nhóm).",
      },
      {
        title: "2. Quá trình sử dụng & Nhiệm vụ cá nhân",
        steps: [
          {
            step: "📊",
            title: "Excel — Quản lý tác vụ",
            desc: "Theo dõi các nhiệm vụ cá nhân: Tìm kiếm tài liệu tham khảo, soạn thảo nội dung phần mở đầu, kiểm tra và chỉnh sửa nội dung cuối. Thiết lập mô tả công việc, thời hạn và cập nhật trạng thái liên tục từ 'To Do' sang 'Doing' và 'Done' để nhóm dễ theo dõi tiến độ.",
          },
          {
            step: "📝",
            title: "Google Docs — Soạn thảo & Lưu trữ",
            desc: "Tham gia viết nội dung, chỉnh sửa bố cục. Sử dụng tính năng Comment để trao đổi phần cần sửa, dùng Version History để theo dõi đóng góp và khôi phục nội dung. Đồng thời dùng làm không gian lưu trữ tập trung, chia sẻ toàn bộ tài liệu tham khảo của dự án.",
          },
          {
            step: "🎥",
            title: "Google Meet — Giao tiếp nhóm",
            desc: "Công cụ giao tiếp chính để thảo luận báo cáo, phân chia nhiệm vụ, nhắc nhở deadline và giải đáp thắc mắc. Việc trao đổi thường xuyên giúp duy trì tiến độ làm việc, hạn chế chậm trễ (tương tác nhiều lượt trong tuần).",
          },
        ],
      },
      {
        title: "3. Thách thức & Giải pháp",
        highlights: [
          {
            emoji: "📈",
            text: "Khó theo dõi tiến độ do chưa thống nhất cách quản lý → Giải pháp: Sử dụng Excel để giao nhiệm vụ, đặt deadline và cập nhật trạng thái thường xuyên.",
          },
          {
            emoji: "🔄",
            text: "Nội dung thay đổi liên tục, bị ghi đè khi nhiều người cùng sửa → Giải pháp: Sử dụng tính năng Version History trên Google Docs để kiểm tra và khôi phục khi cần thiết.",
          },
          {
            emoji: "📁",
            text: "Tài liệu bị phân tán ở nhiều nơi gây khó tìm kiếm → Giải pháp: Tập trung toàn bộ tài liệu lưu trữ vào một không gian chung trên Google Docs.",
          },
        ],
      },
      {
        title: "4. Đánh giá hiệu quả công cụ",
        table: {
          headers: ["Công cụ", "Ưu điểm", "Nhược điểm"],
          rows: [
            [
              "Excel",
              "Quản lý nhiệm vụ rõ ràng, dễ theo dõi tiến độ và thời hạn",
              "Nhiều tính năng gây khó khăn cho người mới sử dụng",
            ],
            [
              "Google Docs",
              "Hỗ trợ chỉnh sửa đồng thời, lưu lịch sử thay đổi, lưu trữ tập trung",
              "Phụ thuộc vào kết nối Internet ổn định",
            ],
            [
              "Google Meet",
              "Môi trường trao đổi nhanh chóng, giải quyết vấn đề ngay lập tức",
              "Có thể khiến thông tin bị trôi khi nhóm trao đổi quá nhiều",
            ],
          ],
        },
      },
      {
        title: "5. Kết luận",
        content:
          "Việc khai thác hiệu quả các công cụ hợp tác trực tuyến như Excel, Google Docs và Google Meet giúp quản lý công việc cá nhân tốt hơn, nâng cao khả năng làm việc nhóm và cải thiện hiệu quả phối hợp. Lựa chọn đúng công cụ đóng vai trò rất quan trọng đối với thành công của dự án, đồng thời là kỹ năng cần thiết cho học tập và công việc sau này.",
      },
    ],
  },
  {
    id: 5,
    baiTap: "Bài 5",
    title: "Sáng tạo nội dung số: Chiến dịch Digital Detox",
    icon: "🧠",
    tags: ["Digital Detox", "AI tạo sinh", "Gemini", "Sáng tạo nội dung"],
    pdfLink:
      "https://drive.google.com/file/d/1zKn6LHhk9WZjJjnKaUMt5GwMpyEj-AIE/view?usp=drive_link",
    goal: "Áp dụng thành thạo các công cụ AI tạo sinh (Gemini, DALL-E 3, Canva AI) vào quy trình sản xuất nội dung số, nhằm nâng cao nhận thức của sinh viên về hội chứng 'TikTok brain' và đề xuất giải pháp Digital Detox.",
    summary:
      "Báo cáo chi tiết quá trình ứng dụng 3 công cụ AI để sản xuất bài viết và infographic truyền thông: Google Gemini (tạo văn bản), DALL-E 3 (tạo hình minh họa) và Canva AI (thiết kế layout). Trình bày rõ các prompt đã sử dụng, đánh giá ưu/nhược điểm, các bước tinh chỉnh của con người (sửa văn phong, sửa lỗi ảnh, chỉnh font chữ), sự chuyển dịch sang vai trò 'Đạo diễn sáng tạo', và phân tích các vấn đề đạo đức như bản quyền và liêm chính học thuật.",
    sections: [
      {
        title: "1. Giới thiệu dự án",
        content:
          "Chiến dịch nâng cao nhận thức 'Digital Detox: Lấy lại sự tập trung trong kỷ nguyên video ngắn'. Mục tiêu nhằm giúp cộng đồng sinh viên hiểu rõ tác động tiêu cực của các nền tảng video dưới 60 giây (TikTok, Reels, Shorts) đến hệ thống phần thưởng Dopamine, gây ra hội chứng suy giảm tập trung. Sản phẩm đầu ra gồm một bài viết chuyên sâu kết hợp hình ảnh minh họa và infographic thiết kế bằng AI.",
      },
      {
        title: "2. Nhật ký ứng dụng & Tinh chỉnh AI",
        steps: [
          {
            step: "📝",
            title: "Google Gemini — Tạo nội dung văn bản",
            desc: "Prompt: Yêu cầu đóng vai chuyên gia tâm lý viết 400 từ về hội chứng 'TikTok brain' và 3 mẹo Digital Detox. Kết quả: AI tạo cấu trúc 3 phần rất nhanh nhưng lạm dụng từ vựng học thuật nặng nề, văn phong rập khuôn. Tinh chỉnh (Con người): Biên tập lại, hạ độ phức tạp của từ vựng sang giọng văn chia sẻ gần gũi, chèn thêm các từ lóng (slang) sinh viên hay dùng để tăng tính kết nối.",
          },
          {
            step: "🎨",
            title: "DALL-E 3 — Tạo hình ảnh minh họa",
            desc: "Prompt: 'A minimalist 3D illustration of a young Asian student drowning in a sea of colorful smartphone app icons...'. Kết quả: Ảnh trực quan ấn tượng, màu sắc rực rỡ nhưng các logo mạng xã hội bị méo hoặc sai font chữ. Tinh chỉnh (Con người): Đưa ảnh vào phần mềm cắt ghép, làm mờ nhẹ các chi tiết lỗi ở hậu cảnh và vẽ thêm bộ lọc màu xanh dịu để ảnh bớt rối mắt, nghệ thuật hơn.",
          },
          {
            step: "📐",
            title: "Canva AI (Magic Studio) — Thiết kế Layout",
            desc: "Prompt: 'Digital detox and mental health minimal infographic layout'. Kết quả: Gợi ý template màu xanh/vàng thư thái nhưng bị lỗi font tiếng Việt (lỗi dấu) và các hộp text quá khít nhau gây ngột ngạt. Tinh chỉnh (Con người): Đổi toàn bộ sang font Inter/Montserrat, kéo dãn khoảng trắng (white space) cho dễ thở, thay icon có sẵn bằng ảnh của DALL-E 3 để đồng bộ.",
          },
        ],
      },
      {
        title: "3. So sánh hiệu quả các công cụ AI",
        table: {
          headers: [
            "Tiêu chí",
            "AI Văn bản (Gemini)",
            "AI Hình ảnh (DALL-E 3)",
            "AI Thiết kế (Canva AI)",
          ],
          rows: [
            [
              "Tốc độ",
              "Cực nhanh (vài giây), tạo được nhiều phiên bản để lựa chọn.",
              "Mất khoảng 1 phút để xử lý và tạo ảnh độ phân giải cao.",
              "Nhanh ở khâu lên khung, nhưng mất thời gian chỉnh sửa thủ công.",
            ],
            [
              "Độ chính xác",
              "Cao về cấu trúc và logic thông tin.",
              "Ý tưởng tốt nhưng hay lỗi chi tiết nhỏ (chữ, ngón tay).",
              "Gợi ý màu sắc tốt, nhưng hay lỗi font tiếng Việt và bố cục thô.",
            ],
            [
              "Khả năng tùy biến",
              "Rất linh hoạt, chỉ cần ra lệnh bằng lời nói để sửa lại.",
              "Khó sửa chi tiết, thường phải viết lại prompt mới từ đầu.",
              "Rất trực quan, cho phép con người trực tiếp can thiệp, kéo thả.",
            ],
          ],
        },
      },
      {
        title: "4. Sản phẩm hoàn thiện: 3 Bước Digital Detox",
        highlights: [
          {
            emoji: "🌙",
            text: "Áp dụng quy tắc 'Không màn hình' 30 phút trước khi ngủ: Sạc điện thoại xa giường, thay bằng viết nhật ký hoặc nghe nhạc nhẹ.",
          },
          {
            emoji: "⏳",
            text: "Sử dụng tính năng giới hạn thời gian app: Cài đặt ứng dụng (Screen Time/StayFree) giới hạn tối đa 30 phút/ngày cho các app video ngắn.",
          },
          {
            emoji: "🧹",
            text: "Thiết lập không gian học tập 'sạch công nghệ': Úp điện thoại xuống hoặc để sang phòng khác để không bị cám dỗ.",
          },
        ],
      },
      {
        title: "5. Đánh giá vai trò AI & Vấn đề đạo đức",
        highlights: [
          {
            emoji: "🔄",
            text: "Sự chuyển dịch quy trình: Chuyển từ 'sản xuất thủ công' sang 'giám sát và tinh chỉnh'. Người dùng đóng vai trò 'Đạo diễn sáng tạo' (Creative Director), mài giũa sản phẩm thô của AI.",
          },
          {
            emoji: "⚠️",
            text: "Hạn chế cốt lõi: AI xóa bỏ tốt 'nỗi sợ tờ giấy trắng' nhưng thiếu trải nghiệm thực tế và cảm xúc; sản phẩm nguyên bản của AI thường sáo rỗng, máy móc.",
          },
          {
            emoji: "⚖️",
            text: "Bản quyền dữ liệu (Copyright): AI sinh ảnh học từ tranh nghệ sĩ chưa xin phép, do đó chỉ nên dùng cho mục đích học tập, phi thương mại.",
          },
          {
            emoji: "🎓",
            text: "Liêm chính học thuật: Lạm dụng AI viết hộ toàn bộ bài tập mà không có tư duy phản biện là gian lận học thuật. Con người phải luôn làm chủ công cụ.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    baiTap: "Bài 6",
    title: "Sử dụng AI có trách nhiệm và Liêm chính học thuật",
    icon: "⚖️",
    tags: ["Liêm chính học thuật", "AI Companion", "Đạo đức số"],
    pdfLink:
      "https://drive.google.com/file/d/1uViLKc7GlpD-Jm9D-KzUM59xOXyKys9E/view?usp=drive_link",
    goal: "Nghiên cứu chính sách của nhà trường về sử dụng AI, thực hành ứng dụng công cụ AI (Gemini) vào học tập một cách minh bạch và xây dựng bộ nguyên tắc đạo đức cá nhân trong môi trường số.",
    summary:
      "Báo cáo tìm hiểu chính sách của ĐHQGHN/ULIS về việc coi AI như 'người bạn đồng hành' (AI Companion), khuyến khích hỗ trợ học tập nhưng nghiêm cấm gian lận. Thực hành dùng Gemini lập dàn ý bài thuyết trình về 'Tác động của video ngắn đến sự tập trung', đánh giá và tinh chỉnh đầu ra bằng 'bộ lọc cá nhân', đồng thời trích dẫn theo chuẩn APA. Phân tích ranh giới giữa hỗ trợ hợp lý và gian lận, vấn đề sở hữu trí tuệ, nguy cơ 'lười tư duy', từ đó thiết lập Bộ 5 nguyên tắc vàng về sử dụng AI có trách nhiệm.",
    sections: [
      {
        title: "1. Chính sách của trường về sử dụng AI",
        content:
          "ĐHQGHN và ULIS định hướng sử dụng AI như một 'người bạn đồng hành' (AI Companion). Nhà trường khuyến khích sinh viên dùng AI để hỗ trợ tìm kiếm ý tưởng, sửa lỗi ngữ pháp, tối ưu bố cục nhằm nâng cao hiệu suất . Tuy nhiên, các quy định về liêm chính học thuật được thắt chặt: hành vi sử dụng AI tạo ra 100% nội dung rồi sao chép nguyên văn (Copy-Paste) mà không tự tư duy hay khai báo nguồn sẽ bị coi là gian lận (tương đương đạo văn) và bị kỷ luật .",
      },
      {
        title: "2. Thực hành: Tương tác với AI (Gemini)",
        steps: [
          {
            step: "01",
            title: "Prompt sử dụng",
            desc: "Dùng Gemini chuẩn bị bài thuyết trình 2 phút về 'Tác động của video ngắn đến sự tập trung'. Prompt 1: Yêu cầu lập dàn ý 3 phần với ngôn từ gần gũi. Prompt 2: Yêu cầu bổ sung các thuật ngữ khoa học (TikTok Brain, Attentional Residue) và tên nhà nghiên cứu để tăng tính thuyết phục .",
          },
          {
            step: "02",
            title: "Đánh giá đầu ra",
            desc: "AI cung cấp bộ khung logic, gợi ý được các từ khóa đắt giá như 'TikTok Brain', 'Attention span'. Tuy nhiên, nếu bê nguyên văn sẽ bị quá tải thuật ngữ và thiếu bản sắc cá nhân .",
          },
          {
            step: "03",
            title: "Chỉnh sửa & Tích hợp",
            desc: "Sử dụng 'bộ lọc cá nhân': Hạ cấp bậc từ vựng (chuyển giải thích cơ chế Dopamine thành ngôn ngữ nói tự nhiên) và cá nhân hóa dẫn chứng bằng câu chuyện thực tế của bản thân .",
          },
          {
            step: "04",
            title: "Trích dẫn minh bạch",
            desc: "Thực hiện trích dẫn việc sử dụng AI rõ ràng theo chuẩn APA (7th Edition) bao gồm cả trích dẫn trong văn bản (In-text citation) và danh mục tài liệu tham khảo .",
          },
        ],
      },
      {
        title: "3. Hỗ trợ hợp lý vs Gian lận học thuật",
        table: {
          headers: [
            "Hỗ trợ hợp lý (Khuyến khích ✅)",
            "Gian lận học thuật (Nghiêm cấm ❌)",
          ],
          rows: [
            [
              "AI là 'trợ lý', người phản biện hoặc hướng dẫn ",
              "Giao khoán toàn bộ bài tập cho AI ",
            ],
            [
              "Dùng AI kiểm tra cấu trúc, tìm lỗi ngữ pháp, giải thích khái niệm ",
              "Lạm dụng AI viết tự động, ký tên mình để nộp ",
            ],
            [
              "Chất xám và quyền quyết định thuộc về người học ",
              "Sao chép nguyên văn không có đóng góp tư duy ",
            ],
          ],
        },
      },
      {
        title: "4. Quyền sở hữu trí tuệ & Tác động đến kỹ năng",
        content:
          "Do AI quét dữ liệu từ internet mà không trích nguồn chi tiết, việc sao chép nguyên văn sản phẩm AI dễ dẫn đến 'đạo văn' gián tiếp, vi phạm quyền sở hữu trí tuệ của cộng đồng khoa học . Bên cạnh đó, nếu lạm dụng AI như một 'chiếc nạng', sinh viên sẽ rơi vào hội chứng 'lười tư duy', làm thui chột các kỹ năng phân tích, tổng hợp và tư duy phản biện (Critical thinking) .",
      },
      {
        title: "5. Bộ 5 nguyên tắc vàng khi làm việc với AI",
        highlights: [
          {
            emoji: "💡",
            text: "1. Ý tưởng gốc luôn là của mình: AI chỉ hỗ trợ, không thay thế tư duy gốc .",
          },
          {
            emoji: "🔍",
            text: "2. Bộ lọc cá nhân: Viết lại (paraphrase) bằng ngôn ngữ, văn phong và góc nhìn cá nhân .",
          },
          {
            emoji: "🔬",
            text: "3. Hoài nghi khoa học (Fact-checking): Luôn kiểm chứng số liệu, sự kiện từ AI qua nguồn chính thống để tránh 'ảo giác AI' .",
          },
          {
            emoji: "📖",
            text: "4. Minh bạch tuyệt đối: Khai báo trung thực công cụ và mức độ sử dụng AI .",
          },
          {
            emoji: "🎓",
            text: "5. Học sâu, không học đối phó: Dùng AI để hiểu sâu kiến thức, không dùng để 'đi tắt' chạy deadline .",
          },
        ],
      },
    ],
  },
];
