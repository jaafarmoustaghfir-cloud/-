
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'مرحباً بك! أنا المساعد الذكي لجمعية الرحمة. كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن مشاريعنا، كيفية التبرع، أو كيف تصبح متطوعاً.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // fix: Create GoogleGenAI instance directly using process.env.API_KEY per SDK guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: `أنت المساعد الذكي لجمعية "الرحمة" (Al-Rahma Association). 
          أجب باللغة العربية بأسلوب ودود ومهني. 
          معلومات أساسية:
          - الجمعية تأسست عام 2019.
          - مشاريعنا: العمل الإنساني، توزيع القفف الغذائية (سلة الخير)، القوافل الطبية، دعم التمدرس، إفطار الصائم.
          - طرق التبرع: تحويل بنكي (البنك الشعبي)، تبرع مباشر في المقر.
          - التطوع متاح لكل التخصصات عبر الموقع.
          - العنوان: Ouled Teima, Quartier Lhdib.
          - الهاتف: 0662092937
          إذا سأل المستخدم عن شيء خارج اختصاص الجمعية، وجهه بلباقة لما نقوم به.`,
        }
      });

      const aiResponse = response.text || 'عذراً، لم أستطع فهم ذلك بشكل صحيح. هل يمكنك إعادة صياغة السؤال؟';
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'عذراً، حدث خطأ أثناء الاتصال بالخادم. حاول مرة أخرى لاحقاً.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-700 transition-all transform hover:scale-110 z-50 animate-bounce"
      >
        <Sparkles size={32} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[400px] h-full sm:h-[600px] bg-white sm:rounded-[2rem] shadow-2xl flex flex-col z-50 overflow-hidden border border-emerald-100">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center ml-3">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="font-bold">مساعد الرحمة الذكي</h3>
                <span className="text-xs text-emerald-100 flex items-center">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full ml-1 animate-pulse"></span> متصل الآن
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  <div className="flex items-center mb-1">
                    {msg.role === 'user' ? <User size={12} className="ml-1" /> : <Bot size={12} className="ml-1" />}
                    <span className="text-[10px] uppercase font-bold opacity-70">
                      {msg.role === 'user' ? 'أنت' : 'المساعد'}
                    </span>
                  </div>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center">
                  <Loader2 size={16} className="animate-spin ml-2 text-emerald-600" />
                  <span className="text-xs text-gray-400 font-medium">يفكر...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اسألني أي شيء..."
                className="flex-grow bg-transparent border-none focus:outline-none text-sm p-2"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-emerald-600 hover:text-emerald-700 disabled:text-gray-300 transition-colors"
              >
                <Send size={24} className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
