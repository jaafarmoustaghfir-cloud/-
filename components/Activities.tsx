
import React from 'react';
import { Droplets, Sparkles, Heart, Users, HeartHandshake, Baby, BookOpen } from 'lucide-react';

const activities = [
  {
    icon: <Droplets className="text-red-600" />,
    title: "حملات التبرع بالدم",
    desc: "تنظيم حملات دورية بشراكة مع مراكز تحقن الدم لترسيخ ثقافة التبرع وإنقاذ الأرواح في مجتمعنا وتلبية الخصاص في المستشفيات.",
    image: "https://i.imgur.com/5iEM5QZ.jpeg"
  },
  {
    icon: <HeartHandshake className="text-emerald-600" />,
    title: "دعم الأسر المحتاجة",
    desc: "تقديم مساعدات عينية ومادية للأسر في وضعية صعبة، تشمل توزيع المواد الغذائية، الملابس، وتغطية المصاريف الضرورية لضمان حياة كريمة.",
    image: "https://i.imgur.com/ODVnKQn.jpeg"
  },
  {
    icon: <Baby className="text-blue-600" />,
    title: "العمل الإنساني",
    desc: "نقدم رعاية شاملة للأطفال الأيتام تضمن لهم حياة كريمة، تعليماً متميزاً، ودعماً نفسياً واجتماعياً متواصلاً لبناء جيل واعد.",
    image: "https://i.imgur.com/QT7VEWh.jpeg"
  },
  {
    icon: <BookOpen className="text-emerald-700" />,
    title: "أنشطة دينية",
    desc: "تنظيم دورات لتحفيظ القرآن الكريم، محاضرات توعوية دينية، وإحياء المناسبات الدينية لترسيخ القيم الإسلامية والروابط الروحية في المجتمع.",
    image: "https://i.imgur.com/ZP4SIoq.jpeg"
  }
];

const Activities: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">أنشطتنا الميدانية</h1>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نعمل في الميدان لترسيخ قيم التضامن والتكافل الاجتماعي من خلال مشاريع مستدامة وحملات دورية هادفة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative h-56">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-lg">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-50 text-sm">
                    ساهم الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-24 bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-emerald-100 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Sparkles className="ml-3 text-amber-500" />
              أثرنا في أرقام
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "كيس دم تم جمعه", value: "450+", color: "text-red-600" },
                { label: "أسرة مستفيدة", value: "250+", color: "text-emerald-600" },
                { label: "مستفيد من العمل الإنساني", value: "120+", color: "text-blue-600" },
                { label: "مستفيد من الأنشطة الدينية", value: "450+", color: "text-emerald-800" }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border-r-4 border-emerald-500">
                  <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-500 italic text-sm">
              * يتم تحديث هذه الأرقام دورياً بناءً على التقارير الميدانية لجمعية الرحمة.
            </p>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-2xl">
              <img src="https://i.imgur.com/5iEM5QZ.jpeg" className="w-full h-32 object-cover group-hover:scale-110 transition-transform" alt="حملة تبرع" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img src="https://i.imgur.com/ODVnKQn.jpeg" className="w-full h-32 object-cover group-hover:scale-110 transition-transform" alt="دعم أسر" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img src="https://i.imgur.com/QT7VEWh.jpeg" className="w-full h-32 object-cover group-hover:scale-110 transition-transform" alt="العمل الإنساني" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img src="https://i.imgur.com/ZP4SIoq.jpeg" className="w-full h-32 object-cover group-hover:scale-110 transition-transform" alt="نشاط ديني" />
            </div>
            <div className="col-span-2 bg-emerald-900 rounded-3xl p-8 text-white flex items-center justify-between shadow-2xl">
              <div>
                <p className="text-emerald-400 text-sm font-bold mb-2 uppercase tracking-widest">تطوع معنا</p>
                <p className="text-2xl font-bold">كن أنت التغيير الذي تنشده</p>
              </div>
              <Users className="text-emerald-400 opacity-50" size={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
