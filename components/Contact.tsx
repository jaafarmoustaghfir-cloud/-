
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            فريقنا جاهز للإجابة على تساؤلاتكم وتلقي مقترحاتكم. تواصلكم معنا يسعدنا ويقوي مسيرتنا.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Details Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-md border-r-4 border-emerald-600">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">العنوان</h3>
              <p className="text-gray-600 leading-relaxed">
                Ouled Teima, Quartier Lhdib
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border-r-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">الهاتف</h3>
              <p className="text-gray-600 font-mono" dir="ltr">+212 662 09 29 37</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border-r-4 border-amber-500">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600">contact@rahma-asso.org</p>
              <p className="text-gray-600">donations@rahma-asso.org</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <MessageSquare className="ml-3 text-emerald-600" size={28} />
              ارسل لنا رسالة
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
                  <input type="text" className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">الموضوع</label>
                <input type="text" className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">نص الرسالة</label>
                <textarea rows={5} className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"></textarea>
              </div>
              <button className="bg-emerald-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 shadow-lg flex items-center justify-center transition-all w-full md:w-auto">
                ارسال الرسالة <Send size={20} className="mr-2 rotate-180" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Integration Placeholder */}
        <div className="bg-white p-4 rounded-[2.5rem] shadow-xl overflow-hidden h-[450px] relative border border-gray-100">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center px-6">
              <MapPin size={48} className="text-red-500 mx-auto mb-4" />
              <p className="text-gray-500 text-xl font-bold mb-2">موقعنا على الخريطة</p>
              <p className="text-gray-400 max-w-sm mx-auto">
                هذا نموذج لخريطة جوجل يوضح موقع المقر الرئيسي للجمعية في أولاد تايمة.
              </p>
            </div>
          </div>
          {/* Updated Map Query for Ouled Teima */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13775.25049594537!2d-9.2152862!3d30.4004113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdadb304f4c28135%3A0x67909e46a784615!2sOuled%20Teima!5e0!3m2!1sen!2s!4v1715423000000!5m2!1sen!2s" 
            className="w-full h-full relative z-10 border-none"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
