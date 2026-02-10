
import React from 'react';
import { CreditCard, Banknote, ShieldCheck, Heart, Info, Copy } from 'lucide-react';

const Donations: React.FC = () => {
  const bankDetails = {
    bank: "البنك الشعبي",
    rib: "011 780 0000 1234567890 12 34",
    swift: "BCPAMA BX",
    accountName: "جمعية الرحمة للتضامن الاجتماعي"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('تم النسخ بنجاح!');
  };

  return (
    <div className="py-20 bg-emerald-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-full text-emerald-600 mb-6 shadow-sm">
            <Heart size={40} fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">ساهم في صنع الابتسامة</h1>
          <p className="text-lg text-emerald-800/70 leading-relaxed font-light">
            قال رسول الله ﷺ: "ما نقص مال من صدقة". تبرعك اليوم هو استثمار في حياة إنسان آخر، وهو جسر يعبر عليه المحتاجون نحو حياة كريمة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bank Transfer Info */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-600/5 rounded-br-full"></div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-8 flex items-center">
              <Banknote className="ml-3 text-emerald-600" size={32} />
              تحويل بنكي
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl border-r-4 border-emerald-500">
                <p className="text-gray-500 text-sm mb-1">اسم الحساب</p>
                <p className="text-xl font-bold text-gray-800">{bankDetails.accountName}</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border-r-4 border-emerald-500 relative group">
                <p className="text-gray-500 text-sm mb-1">رقم الحساب (RIB)</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-mono font-bold text-gray-800 tracking-wider">{bankDetails.rib}</p>
                  <button 
                    onClick={() => copyToClipboard(bankDetails.rib)}
                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    <Copy size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-50 rounded-2xl border-r-4 border-emerald-500">
                  <p className="text-gray-500 text-sm mb-1">البنك</p>
                  <p className="text-lg font-bold text-gray-800">{bankDetails.bank}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border-r-4 border-emerald-500">
                  <p className="text-gray-500 text-sm mb-1">SWIFT Code</p>
                  <p className="text-lg font-bold text-gray-800">{bankDetails.swift}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-start text-sm text-gray-500 bg-blue-50 p-4 rounded-xl border border-blue-100">
              <Info className="ml-2 text-blue-500 flex-shrink-0" size={18} />
              <p>يرجى إرسال نسخة من وصل التحويل عبر الواتساب أو البريد الإلكتروني لنتمكن من توثيق التبرع وإرسال شهادة شكر.</p>
            </div>
          </div>

          {/* Direct Donation Message */}
          <div className="flex flex-col gap-8">
            <div className="bg-emerald-900 text-white p-12 rounded-[3rem] shadow-xl flex-grow flex flex-col justify-center">
              <ShieldCheck className="text-emerald-400 mb-6" size={56} />
              <h2 className="text-3xl font-bold mb-6">تبرع مباشر آمن</h2>
              <p className="text-emerald-100 text-lg leading-relaxed mb-8">
                نحن نعتمد أعلى معايير الشفافية والمساءلة. يتم توثيق كل تبرع ونشره في تقاريرنا الدورية (مع الحفاظ على سرية المتبرع حسب الرغبة).
              </p>
              <div className="flex items-center space-x-4 space-x-reverse text-emerald-200">
                <div className="flex -space-x-3 space-x-reverse">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${i+50}/64/64`} className="w-12 h-12 rounded-full border-4 border-emerald-900" />
                  ))}
                </div>
                <p className="font-medium mr-4">+2,400 متبرع يثق بنا</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">مجالات الصرف</h3>
              <ul className="space-y-3">
                {["100% تصل للمستفيدين", "دعم طبي طارئ", "مؤونة غذائية شهرية", "كسوة الأيتام"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full ml-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Transparent message */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-10 bg-white/50 backdrop-blur rounded-3xl border border-white">
          <p className="text-emerald-900 font-medium text-lg mb-2 italic">"أين تذهب أموالك؟"</p>
          <p className="text-gray-500">
            تلتزم الجمعية بنشر تقارير مالية سنوية مدققة من قبل خبراء خارجيين، لضمان وصول كل درهم إلى غايته السامية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donations;
