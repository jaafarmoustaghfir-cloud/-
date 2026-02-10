
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, HandHeart, ArrowLeft, CheckCircle2 } from 'lucide-react';

const BACKGROUND_IMAGE_URL = "https://i.imgur.com/ZE39b6K.jpeg";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={BACKGROUND_IMAGE_URL} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-emerald-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-right">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              معًا من أجل الخير <br />
              <span className="text-emerald-400">والتكافل الاجتماعي</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light leading-relaxed drop-shadow-md">
              نحن نؤمن بأن الرحمة هي جسر التضامن بين قلوبنا. انضم إلينا اليوم لنحدث فرقاً حقيقياً في حياة الأسر والأيتام المحتاجين.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Link 
                to="/donations" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl flex items-center"
              >
                <Heart className="ml-2" fill="currentColor" />
                تبرع الآن
              </Link>
              <Link 
                to="/volunteer" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/50 px-10 py-4 rounded-full font-bold text-xl transition-all flex items-center"
              >
                تطوع معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info / Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-red-500" />, count: "+250", label: "أسرة مستفيدة" },
              { icon: <Users className="text-emerald-600" />, count: "+80", label: "متطوع نشط" },
              { icon: <CheckCircle2 className="text-blue-500" />, count: "+35", label: "مشروع ناجح" },
              { icon: <HandHeart className="text-amber-500" />, count: "+120", label: "مستفيد من العمل الإنساني" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border-b-4 border-emerald-600">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-4">
                  {/* fix: Cast ReactElement to any to allow dynamic injection of 'size' prop during cloning */}
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.count}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">أبرز مبادراتنا</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-emerald-800/70 max-w-3xl mx-auto">
              نعمل على مدار السنة لتغطية احتياجات مجتمعنا عبر مشاريع مستدامة وحملات موسمية مكثفة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "العمل الإنساني",
                desc: "توفير الرعاية الشاملة لليتيم من تعليم، صحة، ودعم معنوي لضمان مستقبل أفضل.",
                image: "https://i.imgur.com/QT7VEWh.jpeg"
              },
              {
                title: "سلة الخير الغذائية",
                desc: "توزيع قفف غذائية متكاملة شهرياً للأسر التي تعاني من الفقر المدقع.",
                image: "https://i.imgur.com/ODVnKQn.jpeg"
              },
              {
                title: "الحملة الطبية المتنقلة",
                desc: "قوافل طبية تجوب المناطق النائية لتوفير الفحوصات والأدوية مجاناً.",
                image: "https://i.imgur.com/5iEM5QZ.jpeg"
              }
            ].map((proj, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <img src={proj.image} alt={proj.title} className="w-full h-56 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-3">{proj.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{proj.desc}</p>
                  <Link to="/activities" className="text-emerald-600 font-bold flex items-center hover:text-emerald-700">
                    اقرأ المزيد <ArrowLeft className="mr-2" size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-700 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">هل ترغب في ترك بصمة إيجابية؟</h2>
          <p className="text-xl text-emerald-50 mb-10 font-light">
            مساهمتك مهما كانت بسيطة، قد تغير حياة أسرة بالكامل. باب التطوع والتبرع مفتوح دائماً.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/volunteer" className="bg-white text-emerald-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
              انضم كمتطوع
            </Link>
            <Link to="/donations" className="bg-emerald-900 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-colors shadow-lg">
              ساهم بمبلغ مالي
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
