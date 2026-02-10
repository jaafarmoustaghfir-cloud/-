
import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const newsItems = [
  {
    title: "نشاط ميداني جديد لتعزيز قيم التكافل",
    date: "20 أبريل 2024",
    author: "لجنة الإعلام",
    image: "https://i.imgur.com/8RnEaXU.jpeg",
    excerpt: "نظمت الجمعية نشاطاً متميزاً بحي لدهيب، عرف مشاركة واسعة من المتطوعين واستحسان الساكنة، حيث تم تقديم خدمات متنوعة تعكس روح التعاون."
  },
  {
    title: "اختتام حملة توزيع القفف الرمضانية بنجاح باهر",
    date: "15 أبريل 2024",
    author: "أحمد بنسعيد",
    image: "https://i.imgur.com/ODVnKQn.jpeg",
    excerpt: "استفادت أكثر من 500 أسرة في ضواحي المدينة من حصص غذائية متكاملة بفضل مساهماتكم الكريمة..."
  },
  {
    title: "افتتاح مركز الرحمة لتعليم الأيتام في حلته الجديدة",
    date: "28 مارس 2024",
    author: "إدارة الجمعية",
    image: "https://i.imgur.com/ZP4SIoq.jpeg",
    excerpt: "بفرحة عارمة، قمنا بافتتاح القاعات الدراسية الجديدة التي ستستقبل 120 يتيماً لتعزيز مهاراتهم..."
  },
  {
    title: "قافلة طبية تجوب المناطق الجبلية بإقليم الحوز",
    date: "10 مارس 2024",
    author: "د. ليلى فوزي",
    image: "https://i.imgur.com/5iEM5QZ.jpeg",
    excerpt: "قدمت القافلة فحوصات متخصصة وتوزيع الأدوية مجاناً لساكنة الدواوير النائية المتضررة من البرد..."
  }
];

// Array of authentic association images for the gallery
const galleryImages = [
  "https://i.imgur.com/3W74ghP.jpeg",
  "https://i.imgur.com/HlsqiBI.jpeg",
  "https://i.imgur.com/vyXKnbl.jpeg",
  "https://i.imgur.com/8RnEaXU.jpeg",
  "https://i.imgur.com/ZE39b6K.jpeg",
  "https://i.imgur.com/5iEM5QZ.jpeg",
  "https://i.imgur.com/ODVnKQn.jpeg",
  "https://i.imgur.com/QT7VEWh.jpeg"
];

const News: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Latest News Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 border-r-8 border-emerald-500 pr-6">آخر الأخبار</h1>
          <p className="text-gray-600 mt-4 text-lg">ابق على اطلاع بأحدث الأنشطة والمستجدات في جمعية الرحمة.</p>
        </div>

        {/* Featured News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {newsItems.map((news, idx) => (
            <article key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                {idx === 0 && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    عاجل
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4 space-x-reverse">
                  <span className="flex items-center"><Calendar size={14} className="ml-1" /> {news.date}</span>
                  <span className="flex items-center"><User size={14} className="ml-1" /> {news.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 leading-tight hover:text-emerald-700 cursor-pointer transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {news.excerpt}
                </p>
                <button className="text-emerald-600 font-bold flex items-center mt-auto hover:mr-2 transition-all">
                  اقرأ التفاصيل <ArrowLeft size={18} className="mr-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">معرض الصور</h2>
              <p className="text-emerald-200">لقطات حية توثق لحظات العطاء والبسمة في الميدان.</p>
            </div>
            <a href="https://www.facebook.com/profile.php?id=100071742792669" target="_blank" rel="noopener noreferrer" className="mt-6 md:mt-0 border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 hover:text-emerald-900 transition-all">
              عرض المزيد على فيسبوك
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((imgUrl, i) => (
              <div key={i} className="relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
                <img src={imgUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={`Gallery image ${i+1}`} />
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-bold">تكبير</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
