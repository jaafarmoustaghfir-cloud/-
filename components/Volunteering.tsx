
import React, { useState } from 'react';
import { Send, CheckCircle, HelpCircle, AlertTriangle } from 'lucide-react';

const Volunteering: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmSubmit = () => {
    setShowConfirmation(false);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="py-20 min-h-[60vh] flex items-center justify-center bg-emerald-50">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-lg mx-auto">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={56} />
          </div>
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">شكراً لانضمامك!</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            تم استلام طلب التطوع الخاص بك بنجاح. سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن لمناقشة كيفية مشاركتك في أعمالنا القادمة.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors"
          >
            العودة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-gray-50 relative">
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-md w-full shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200 border border-gray-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                <AlertTriangle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">تأكيد الإرسال</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                هل أنت متأكد من رغبتك في إرسال طلب التطوع؟ يرجى التأكد من صحة البيانات المدخلة ليتمكن فريقنا من التواصل معك.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <button 
                  onClick={confirmSubmit}
                  className="flex-1 bg-emerald-600 text-white py-3.5 rounded-2xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                >
                  نعم، إرسال
                </button>
                <button 
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-200 transition-all"
                >
                  مراجعة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              كن جزءاً من التغيير <br />
              <span className="text-emerald-600">وتطوع معنا اليوم</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              التطوع ليس مجرد عمل مجاني، بل هو استثمار في إنسانيتك. نحن في جمعية الرحمة نرحب بكل المهارات والقدرات، فكل يد تساعد تصنع فرقاً.
            </p>

            <div className="space-y-8">
              {[
                { title: "لماذا تتطوع؟", desc: "اكتساب خبرات جديدة، بناء علاقات اجتماعية هادفة، والشعور بالرضا من خلال مساعدة الآخرين." },
                { title: "مجالات التطوع", desc: "التنظيم الميداني، الدعم الطبي، التعليم، التصميم والإعلام، أو الخدمات اللوجستية." },
                { title: "الشروط", desc: "الرغبة الصادقة في العطاء، الالتزام بالمواعيد، واحترام قيم ومبادئ الجمعية." }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center ml-4 flex-shrink-0 shadow-lg shadow-emerald-200">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-emerald-900 mb-8 text-center">استمارة التسجيل</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="محمد بن علي"
                    className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="06 00 00 00 00"
                    className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@example.com"
                  className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">المدينة</label>
                <select className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                  <option>الدار البيضاء</option>
                  <option>الرباط</option>
                  <option>مراكش</option>
                  <option>طنجة</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">مجال التطوع المفضل</label>
                <select className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                  <option>التنظيم الميداني والحملات</option>
                  <option>الدعم الطبي والتمريض</option>
                  <option>التعليم والدعم المدرسي</option>
                  <option>الإعلام وصناعة المحتوى</option>
                  <option>الأعمال الإدارية والتقنية</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 shadow-lg shadow-emerald-200 flex items-center justify-center transition-all transform hover:scale-[1.02]"
              >
                ارسال الطلب <Send className="mr-2 rotate-180" size={20} />
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-6 text-center italic">
              * سيتم التعامل مع بياناتك بسرية تامة طبقاً لقانون حماية المعطيات الشخصية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
