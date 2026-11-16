export const site = {
  name: "HọcLậpTrình",
  legalName: "HọcLậpTrình",
  tagline: "Học lập trình từ con số 0, dành cho người mới bắt đầu.",
  description:
    "HọcLậpTrình giúp người mới bắt đầu làm quen với lập trình qua lộ trình rõ ràng, bài giảng tiếng Việt dễ hiểu và nhiều dự án thực hành.",
  email: "admin@hoclaptrinh.site",
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
  { label: "Nội dung học", to: "/#noi-dung" },
  { label: "Vì sao chọn", to: "/#vi-sao" },
  { label: "Học viên", to: "/#danh-gia" },
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
  summary: string;
  features: string[];
  icon: TopicIcon;
};

export const topics: Topic[] = [
  {
    slug: "tu-duy-lap-trinh",
    number: "01",
    title: "Tư duy lập trình",
    summary:
      "Làm quen với khái niệm thuật toán, cách chia nhỏ vấn đề và tư duy logic — nền móng cho mọi ngôn ngữ lập trình.",
    features: [
      "Lập trình là gì và máy tính hiểu gì",
      "Thuật toán và sơ đồ khối",
      "Chia nhỏ vấn đề (decomposition)",
      "Tư duy logic và gỡ lỗi cơ bản",
    ],
    icon: "thinking",
  },
  {
    slug: "ngon-ngu-dau-tien",
    number: "02",
    title: "Ngôn ngữ đầu tiên",
    summary:
      "So sánh Python và JavaScript cho người mới, sau đó thực hành biến, kiểu dữ liệu, nhập xuất và câu lệnh điều kiện.",
    features: [
      "Nên bắt đầu với Python hay JavaScript?",
      "Cài đặt môi trường và chạy chương trình đầu tiên",
      "Biến, kiểu dữ liệu và toán tử",
      "Câu lệnh điều kiện và vòng lặp",
    ],
    icon: "language",
  },
  {
    slug: "cau-truc-du-lieu",
    number: "03",
    title: "Cấu trúc dữ liệu & giải thuật",
    summary:
      "Mảng, danh sách, từ điển và các giải thuật sắp xếp, tìm kiếm cơ bản — kỹ năng cốt lõi khi làm việc và phỏng vấn.",
    features: [
      "Mảng và danh sách liên kết",
      "Từ điển và tập hợp (map, set)",
      "Thuật toán sắp xếp và tìm kiếm",
      "Độ phức tạp thuật toán (Big-O) nhập môn",
    ],
    icon: "data",
  },
  {
    slug: "lap-trinh-web",
    number: "04",
    title: "Lập trình web cơ bản",
    summary:
      "HTML, CSS và JavaScript từ con số 0 đến một trang web hoàn chỉnh, có tương tác và hiển thị tốt trên điện thoại.",
    features: [
      "HTML — cấu trúc của trang web",
      "CSS — giao diện và responsive",
      "JavaScript — tương tác với người dùng",
      "Đưa trang web lên internet",
    ],
    icon: "web",
  },
  {
    slug: "co-so-du-lieu",
    number: "05",
    title: "Cơ sở dữ liệu",
    summary:
      "Hiểu cơ sở dữ liệu quan hệ, viết truy vấn SQL và kết nối dữ liệu vào ứng dụng của bạn.",
    features: [
      "Cơ sở dữ liệu là gì và khi nào cần dùng",
      "Bảng, khóa chính và quan hệ",
      "Truy vấn SQL: SELECT, INSERT, UPDATE, DELETE",
      "Kết nối cơ sở dữ liệu vào ứng dụng",
    ],
    icon: "database",
  },
  {
    slug: "du-an-thuc-hanh",
    number: "06",
    title: "Dự án thực hành",
    summary:
      "Áp dụng tất cả kiến thức để xây dựng các dự án thật: trang cá nhân, ứng dụng ghi chú và trang đăng ký.",
    features: [
      "Xây dựng 3–5 dự án thật",
      "Sử dụng Git và GitHub",
      "Viết README và trình bày dự án",
      "Chuẩn bị hồ sơ xin việc",
    ],
    icon: "project",
  },
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
