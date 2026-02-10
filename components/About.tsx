
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Users, Sparkles, Droplets, Baby } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foundation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-2 block">من نحن</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">جمعية الرحمة للتنمية والتعاون</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              هي جمعية مدنية غير ربحية تهدف إلى خدمة المجتمع والمساهمة في التنمية البشرية وتعزيز قيم التضامن والتعاون بين أفراد المجتمع.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              تعمل الجمعية على تنظيم أنشطة متعددة ومتنوعة، يتركز جزء مهم منها في القرى والمناطق النائية، وذلك في إطار دعم الفئات الهشة وتقريب الخدمات الاجتماعية والإنسانية من الساكنة المحتاجة.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              وتسعى الجمعية إلى الإسهام في تحسين ظروف العيش، وترسيخ ثقافة العطاء والعمل التطوعي، وخدمة الصالح العام في احترام تام للقوانين الجاري بها العمل.
            </p>
          </div>
          <div className="relative">
            <img src="https://i.imgur.com/ZE39b6K.jpeg" alt="About Image" className="rounded-3xl shadow-2xl relative z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-500/10 rounded-full z-0"></div>
          </div>
        </div>

        {/* Local Activities Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">أنشطتنا داخل المجال الترابي</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-red-500">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">حملات التبرع بالدم</h3>
              <p className="text-gray-600 leading-relaxed">
                تنظيم حملات دورية للتبرع بالدم بشراكة مع الجهات المختصة لتعزيز المخزون الوطني وإنقاذ الأرواح.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-emerald-600">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Baby size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">أنشطة تربوية وترفيهية</h3>
              <p className="text-gray-600 leading-relaxed">
                برامج خاصة لفائدة الأطفال تهدف إلى إدخال البهجة وتنمية روح المواطنة والمسؤولية لدى الناشئة.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-blue-500">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">مبادرات إنسانية</h3>
              <p className="text-gray-600 leading-relaxed">
                إطلاق مبادرات اجتماعية متنوعة لتقوية الروابط المجتمعية ودعم الفئات الأكثر احتياجاً في محيطنا.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-emerald-600">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-emerald-900">رؤيتنا</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              أن نكون المرجع الرائد في العمل الجمعوي التنموي، متميزين بالقدرة على الوصول للمناطق النائية وتقديم خدمات اجتماعية ذات أثر مستدام.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-blue-500">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">رسالتنا</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              تمكين الفئات الهشة في القرى والمناطق النائية، وترسيخ ثقافة العطاء والعمل التطوعي كركيزة أساسية لبناء المجتمع.
            </p>
          </div>
        </div>

        {/* Human Values */}
        <div className="bg-emerald-900 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">قيمنا الأساسية</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">المبادئ التي تقود كل قرار نتخذه وكل عمل نقوم به في الميدان.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-20 h-20 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <Heart size={40} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold mb-4">العطاء</h3>
              <p className="text-emerald-100 font-light">نؤمن أن العمل التطوعي هو أسمى صور المواطنة الفاعلة.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">التضامن</h3>
              <p className="text-emerald-100 font-light">تقريب المسافات بين المركز والهامش لدعم الساكنة المحتاجة.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">المواطنة</h3>
              <p className="text-emerald-100 font-light">خدمة الصالح العام والالتزام التام بالقوانين الجاري بها العمل.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
