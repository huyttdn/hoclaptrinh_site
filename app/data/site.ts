export const site = {
  name: "Học Code",
  legalName: "Học Code",
  tagline: "Học lập trình từ con số 0, dành cho người mới bắt đầu.",
  description:
    "Học Code giúp người mới bắt đầu làm quen với lập trình qua lộ trình rõ ràng, bài giảng tiếng Việt dễ hiểu và nhiều dự án thực hành.",
  email: "hotro@hoccode.vn",
  phone: "0901 234 567",
  phoneHref: "+84901234567",
  address: "Tầng 3, 123 Nguyễn Trãi\nQuận 1, TP. Hồ Chí Minh",
  hours: "Thứ 2 – Thứ 7, 8:00 – 21:00",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
    { label: "GitHub", href: "https://github.com/", icon: "github" },
  ],
} as const;

export const navLinks = [
  { label: "Trang chủ", to: "/" },
  { label: "Lộ trình", to: "/lo-trinh" },
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Đăng ký", to: "/dang-ky" },
] as const;

export type TopicIcon =
  | "thinking"
  | "language"
  | "data"
  | "web"
  | "database"
  | "project";

export type Topic = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  features: string[];
  outcomes: string[];
  bestFor: string;
  icon: TopicIcon;
};

export const topics: Topic[] = [
  {
    slug: "tu-duy-lap-trinh",
    number: "01",
    title: "Tư duy lập trình",
    tagline: "Hiểu cách máy tính “suy nghĩ” trước khi viết dòng code đầu tiên.",
    summary:
      "Làm quen với khái niệm thuật toán, cách chia nhỏ vấn đề và tư duy logic — nền móng cho mọi ngôn ngữ lập trình.",
    description:
      "Bạn sẽ hiểu lập trình thực chất là gì, một chương trình chạy như thế nào, và cách biến một bài toán lớn thành các bước nhỏ rõ ràng. Đây là phần quan trọng nhất mà người mới thường bỏ qua.",
    features: [
      "Lập trình là gì và máy tính hiểu gì",
      "Thuật toán và sơ đồ khối",
      "Chia nhỏ vấn đề (decomposition)",
      "Tư duy logic và gỡ lỗi cơ bản",
    ],
    outcomes: [
      "Hiểu bản chất của lập trình",
      "Biết cách phân tích một đề bài",
      "Sẵn sàng học ngôn ngữ đầu tiên",
    ],
    bestFor: "Người chưa từng viết code và muốn bắt đầu đúng cách.",
    icon: "thinking",
  },
  {
    slug: "ngon-ngu-dau-tien",
    number: "02",
    title: "Ngôn ngữ đầu tiên",
    tagline: "Chọn đúng ngôn ngữ và viết những chương trình đầu tiên.",
    summary:
      "So sánh Python và JavaScript cho người mới, sau đó thực hành biến, kiểu dữ liệu, nhập xuất và câu lệnh điều kiện.",
    description:
      "Chúng ta cùng so sánh hai ngôn ngữ thân thiện nhất với người mới, cài đặt môi trường và viết những chương trình chạy được ngay. Bạn sẽ nắm cú pháp cơ bản mà không bị choáng ngợp.",
    features: [
      "Nên bắt đầu với Python hay JavaScript?",
      "Cài đặt môi trường và chạy chương trình đầu tiên",
      "Biến, kiểu dữ liệu và toán tử",
      "Câu lệnh điều kiện và vòng lặp",
    ],
    outcomes: [
      "Chạy được chương trình đầu tiên",
      "Nắm cú pháp cơ bản của một ngôn ngữ",
      "Biết tự tìm và sửa lỗi đơn giản",
    ],
    bestFor: "Người đã hiểu tư duy lập trình và muốn viết code thật.",
    icon: "language",
  },
  {
    slug: "cau-truc-du-lieu",
    number: "03",
    title: "Cấu trúc dữ liệu & giải thuật",
    tagline: "Lưu trữ và xử lý dữ liệu một cách thông minh.",
    summary:
      "Mảng, danh sách, từ điển và các giải thuật sắp xếp, tìm kiếm cơ bản — kỹ năng cốt lõi khi làm việc và phỏng vấn.",
    description:
      "Dữ liệu được tổ chức tốt sẽ giúp chương trình chạy nhanh và dễ bảo trì. Bạn sẽ học cách chọn cấu trúc dữ liệu phù hợp và viết những giải thuật đầu tiên một cách tự tin.",
    features: [
      "Mảng và danh sách liên kết",
      "Từ điển và tập hợp (map, set)",
      "Thuật toán sắp xếp và tìm kiếm",
      "Độ phức tạp thuật toán (Big-O) nhập môn",
    ],
    outcomes: [
      "Chọn đúng cấu trúc dữ liệu cho bài toán",
      "Viết hàm xử lý dữ liệu gọn gàng",
      "Hiểu độ phức tạp cơ bản của thuật toán",
    ],
    bestFor: "Người muốn nền tảng vững để học nâng cao hoặc phỏng vấn.",
    icon: "data",
  },
  {
    slug: "lap-trinh-web",
    number: "04",
    title: "Lập trình web cơ bản",
    tagline: "Tự tay xây dựng trang web đầu tiên của bạn.",
    summary:
      "HTML, CSS và JavaScript từ con số 0 đến một trang web hoàn chỉnh, có tương tác và hiển thị tốt trên điện thoại.",
    description:
      "Đây là phần mang lại cảm giác thành tựu nhanh nhất. Bạn sẽ thấy kết quả ngay trên trình duyệt khi ghép HTML, CSS và JavaScript thành một trang web thật, rồi đưa nó lên internet.",
    features: [
      "HTML — cấu trúc của trang web",
      "CSS — giao diện và responsive",
      "JavaScript — tương tác với người dùng",
      "Đưa trang web lên internet",
    ],
    outcomes: [
      "Một trang web cá nhân hoàn chỉnh",
      "Hiểu cách trình duyệt hiển thị trang",
      "Biết cách đưa sản phẩm lên mạng",
    ],
    bestFor: "Người muốn thấy kết quả trực quan và nhanh chóng.",
    icon: "web",
  },
  {
    slug: "co-so-du-lieu",
    number: "05",
    title: "Cơ sở dữ liệu",
    tagline: "Cho ứng dụng của bạn biết ghi nhớ.",
    summary:
      "Hiểu cơ sở dữ liệu quan hệ, viết truy vấn SQL và kết nối dữ liệu vào ứng dụng của bạn.",
    description:
      "Hầu hết ứng dụng đều cần lưu dữ liệu. Bạn sẽ học cách thiết kế bảng, viết truy vấn SQL và hiểu luồng dữ liệu chảy từ giao diện xuống cơ sở dữ liệu và ngược lại.",
    features: [
      "Cơ sở dữ liệu là gì và khi nào cần dùng",
      "Bảng, khóa chính và quan hệ",
      "Truy vấn SQL: SELECT, INSERT, UPDATE, DELETE",
      "Kết nối cơ sở dữ liệu vào ứng dụng",
    ],
    outcomes: [
      "Thiết kế được vài bảng đơn giản",
      "Viết được truy vấn SQL cơ bản",
      "Hiểu luồng dữ liệu trong một ứng dụng",
    ],
    bestFor: "Người muốn làm ứng dụng có lưu trữ dữ liệu.",
    icon: "database",
  },
  {
    slug: "du-an-thuc-hanh",
    number: "06",
    title: "Dự án thực hành",
    tagline: "Biến kiến thức thành sản phẩm trong hồ sơ của bạn.",
    summary:
      "Áp dụng tất cả kiến thức để xây dựng các dự án thật: trang cá nhân, ứng dụng ghi chú và trang đăng ký.",
    description:
      "Kiến thức chỉ thực sự thuộc về bạn khi bạn tự tay làm ra sản phẩm. Bạn sẽ hoàn thành một vài dự án, học cách dùng Git và trình bày chúng trong hồ sơ cá nhân.",
    features: [
      "Xây dựng 3–5 dự án thật",
      "Sử dụng Git và GitHub",
      "Viết README và trình bày dự án",
      "Chuẩn bị hồ sơ xin việc",
    ],
    outcomes: [
      "Portfolio cá nhân có dự án",
      "Làm quen quy trình làm việc nhóm",
      "Tự tin ứng tuyển vị trí thực tập",
    ],
    bestFor: "Người đã nắm cơ bản và muốn có sản phẩm để chứng minh.",
    icon: "project",
  },
];

export const partners = [
  "ĐH Bách Khoa",
  "ĐH Quốc Gia",
  "ĐH FPT",
  "ĐH Kinh Tế",
  "CĐ Công Thương",
  "Học viện CNBC",
];

export const stats = [
  { value: "5.000+", label: "Học viên đã tham gia" },
  { value: "120+", label: "Bài giảng tiếng Việt" },
  { value: "4.8/5", label: "Điểm hài lòng của học viên" },
  { value: "0đ", label: "Học phí cho người mới" },
];

export type FeatureIcon = "users" | "clarity" | "shield" | "spark";

export const whyChooseUs: {
  title: string;
  description: string;
  icon: FeatureIcon;
}[] = [
  {
    title: "Lộ trình rõ ràng từ số 0",
    description:
      "Bạn luôn biết mình đang ở đâu và học gì tiếp theo. Không nhảy cóc, không bỏ sót kiến thức nền tảng.",
    icon: "clarity",
  },
  {
    title: "Học qua dự án thực tế",
    description:
      "Mỗi chủ đề đều gắn với một sản phẩm cụ thể, để bạn vừa hiểu lý thuyết vừa có thứ để khoe trong hồ sơ.",
    icon: "users",
  },
  {
    title: "Cộng đồng & trợ giảng hỗ trợ",
    description:
      "Khi bị mắc kẹt, bạn không học một mình. Cộng đồng và trợ giảng luôn sẵn sàng giải đáp thắc mắc.",
    icon: "shield",
  },
  {
    title: "Nội dung tiếng Việt dễ hiểu",
    description:
      "Bài giảng được viết bằng tiếng Việt, giải thích thuật ngữ rõ ràng, phù hợp cho người mới bắt đầu.",
    icon: "spark",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mình chưa từng viết code. Sau hai tháng học theo lộ trình ở đây, mình đã tự làm được trang web cá nhân đầu tiên.",
    name: "Nguyễn Minh Anh",
    role: "Sinh viên năm 2",
    company: "ĐH Bách Khoa",
    initials: "MA",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    quote:
      "Cách giải thích rất dễ hiểu, có ví dụ ngay sau mỗi khái niệm. Mình không còn sợ những khái niệm như thuật toán nữa.",
    name: "Trần Đức Huy",
    role: "Nhân viên văn phòng",
    company: "Chuyển ngành IT",
    initials: "ĐH",
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    quote:
      "Phần dự án thực hành giúp mình có sản phẩm để đưa vào CV. Mình đã được nhận vào vị trí thực tập nhờ portfolio này.",
    name: "Lê Thu Hà",
    role: "Thực tập sinh",
    company: "FPT Software",
    initials: "TH",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    quote:
      "Điều mình thích nhất là lộ trình liên tục. Học xong phần này là biết ngay phần sau cần nắm gì.",
    name: "Phạm Quốc Bảo",
    role: "Học sinh lớp 12",
    company: "TP. Hồ Chí Minh",
    initials: "QB",
    accent: "from-amber-500 to-orange-400",
  },
];

export type ValueIcon = "compass" | "layers" | "heart";

export const values: { title: string; description: string; icon: ValueIcon }[] =
  [
    {
      title: "Dạy từ gốc, không học vẹt",
      description:
        "Chúng tôi giải thích “vì sao” trước “làm thế nào”, để bạn hiểu bản chất thay vì ghi nhớ máy móc.",
      icon: "compass",
    },
    {
      title: "Thực hành nhiều hơn lý thuyết",
      description:
        "Mỗi buổi học đều có bài tập và dự án nhỏ. Bạn viết code mỗi ngày, không chỉ đọc tài liệu.",
      icon: "layers",
    },
    {
      title: "Kiên nhẫn với người mới",
      description:
        "Không có câu hỏi nào là ngớ ngẩn. Chúng tôi đi chậm ở đúng chỗ cần chậm để bạn không bị bỏ lại.",
      icon: "heart",
    },
  ];

export const team = [
  {
    name: "Trần Quốc Bảo",
    role: "Người sáng lập & Giảng viên chính",
    initials: "QB",
    accent: "from-brand-500 to-cyan-400",
    bio: "10 năm kinh nghiệm giảng dạy và phát triển phần mềm, chuyên đưa kiến thức phức tạp về với người mới.",
  },
  {
    name: "Lê Thu Hà",
    role: "Cố vấn lộ trình học",
    initials: "TH",
    accent: "from-violet-500 to-fuchsia-400",
    bio: "Thiết kế lộ trình từ số 0 đến có việc làm, giúp học viên luôn biết bước tiếp theo của mình.",
  },
  {
    name: "Phạm Đức Huy",
    role: "Giảng viên lập trình web",
    initials: "ĐH",
    accent: "from-emerald-500 to-teal-400",
    bio: "Kỹ sư front-end, thích biến mọi bài học thành một sản phẩm chạy được trên trình duyệt.",
  },
  {
    name: "Võ Ngọc Lan",
    role: "Giảng viên cơ sở dữ liệu",
    initials: "NL",
    accent: "from-amber-500 to-orange-400",
    bio: "Giúp học viên hiểu dữ liệu chảy như thế nào, từ giao diện xuống cơ sở dữ liệu và ngược lại.",
  },
];

export const process = [
  {
    number: "01",
    title: "Làm quen",
    description:
      "Bắt đầu với tư duy lập trình và cách máy tính xử lý vấn đề — nền móng trước khi viết code.",
  },
  {
    number: "02",
    title: "Nắm nền tảng",
    description:
      "Học ngôn ngữ đầu tiên, cú pháp, điều kiện và vòng lặp qua các bài tập nhỏ, dễ hiểu.",
  },
  {
    number: "03",
    title: "Thực hành",
    description:
      "Luyện cấu trúc dữ liệu, giải thuật và làm web để kiến thức trở thành kỹ năng thật.",
  },
  {
    number: "04",
    title: "Xây dựng dự án",
    description:
      "Hoàn thiện các dự án cá nhân và đưa vào hồ sơ để sẵn sàng cho công việc đầu tiên.",
  },
];

export const engagements = [
  {
    title: "Tự học theo lộ trình",
    duration: "Thời gian tự do",
    description:
      "Học theo lộ trình có sẵn, xem bài giảng và làm bài tập bất cứ lúc nào bạn muốn.",
    items: [
      "Lộ trình từng bước",
      "Bài giảng và bài tập miễn phí",
      "Tài liệu tiếng Việt",
      "Cộng đồng hỏi đáp",
    ],
  },
  {
    title: "Lớp trực tuyến có trợ giảng",
    duration: "8 tuần",
    description:
      "Học theo nhóm nhỏ, có buổi học trực tiếp và trợ giảng đồng hành trong suốt khóa.",
    items: [
      "Buổi học trực tiếp hằng tuần",
      "Trợ giảng sửa bài",
      "Dự án nhóm",
      "Chứng nhận hoàn thành",
    ],
  },
  {
    title: "Kèm cặp 1-1",
    duration: "Theo buổi",
    description:
      "Đồng hành riêng với giảng viên để gỡ vướng, xây dựng lộ trình cá nhân và chuẩn bị phỏng vấn.",
    items: [
      "Lộ trình cá nhân hóa",
      "Gỡ vướng trực tiếp",
      "Ôn phỏng vấn",
      "Phản hồi portfolio",
    ],
  },
];

export const faqs = [
  {
    question: "Tôi chưa biết gì về lập trình, có học được không?",
    answer:
      "Hoàn toàn được. Lộ trình được thiết kế cho người bắt đầu từ số 0, giải thích mọi thuật ngữ từ đầu và đi chậm ở những phần nền tảng.",
  },
  {
    question: "Tôi nên bắt đầu với ngôn ngữ nào?",
    answer:
      "Với người mới, Python hoặc JavaScript đều là lựa chọn tốt. Trong lộ trình chúng tôi so sánh cả hai để bạn chọn theo mục tiêu của mình.",
  },
  {
    question: "Học xong tôi có thể làm được gì?",
    answer:
      "Bạn sẽ có kiến thức nền tảng, một vài dự án trong hồ sơ cá nhân và đủ tự tin để tiếp tục học nâng cao hoặc ứng tuyển vị trí thực tập.",
  },
  {
    question: "Mỗi tuần tôi cần dành bao nhiêu thời gian?",
    answer:
      "Khoảng 5–7 giờ mỗi tuần là đủ để theo kịp lộ trình. Quan trọng là học đều đặn hơn là học dồn.",
  },
  {
    question: "Tôi cần chuẩn bị gì trước khi học?",
    answer:
      "Chỉ cần một chiếc máy tính kết nối internet. Bạn chưa cần biết trước bất kỳ kiến thức lập trình nào.",
  },
];
