import React, { useEffect } from 'react';
import { Trophy, Cpu, MessageSquare, Video, ExternalLink, GraduationCap, Calendar, MapPin, ChevronRight, Menu, Phone, Share2, Sparkles, Zap, ShieldCheck, Rocket, Brain, CheckCircle2, QrCode } from 'lucide-react';

const App = () => {
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdQTk_xGc7W456aQrPe2gmilPXX15PmTmXrjW7oOh3_BTZhWg/viewform";
  const mapsLink = "https://maps.google.com/?q=G-NTTF+Gadag"; 
  const liveSiteLink = "https://g-nttf-ai-vision-2026-d9p1.vercel.app";

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = '/logo-2.png?v=1';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI VISION 2K26',
          text: 'Join us for the Two Day Workshop at G-NTTF Campus!',
          url: liveSiteLink,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert("Sharing not supported on this browser. You can copy the link manually: " + liveSiteLink);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-100 pb-24 bg-slate-50/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-blue-100/50">
        <div className="flex items-center justify-between px-5 h-16 max-w-[1126px] mx-auto">
          <div className="font-black text-xl tracking-tighter flex items-center gap-2 text-orange-600">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xs shadow-lg shadow-orange-200">AI</div>
            AI VISION
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-8 px-6 text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative p-2 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl shadow-blue-100/50">
              <img 
                src="/logo.png" 
                alt="AI Vision Logo" 
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/80?text=LOGO";
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-6 text-orange-600">
            AI VISION 2K26
          </h1>

          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-6 border border-blue-100">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">Two Day Technical Workshop</span>
          </div>

          <p className="text-slate-500 text-base mb-10 leading-relaxed font-medium px-2">
            Securing your Future with your own Hands.<br/>
            <span className="text-blue-900 font-bold uppercase tracking-widest text-[13px] block mt-4 bg-white/50 py-2 rounded-xl border border-white/80 shadow-sm">
              G-NTTF Campus, Gadag
            </span>
          </p>
        </div>
      </header>

      {/* Workshop Modules */}
      <section className="px-5 py-4">
        <h2 className="text-2xl font-black mb-8 text-center text-slate-800 tracking-tight">Technical Sessions</h2>
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <MobileCard icon={<Cpu />} title="AI Video Generation" desc="Create compelling video content using AI tools and techniques." color="bg-blue-600" />
          <MobileCard icon={<MessageSquare />} title="ChatGPT Prompting" desc="Solve engineering problems using advanced LLM logic." color="bg-sky-500" />
          <MobileCard icon={<Video />} title="AI Tool Awareness" desc="Learn about the responsible and effective use of AI technologies." color="bg-indigo-500" />
        </div>
      </section>

      {/* Professional "What's Included" Section */}
      <section className="px-5 py-12 mt-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Workshop Benefits</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Everything you need to master AI tools</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Zap className="text-orange-500" />, title: "Hands-on", desc: "Lab Practice" },
              { icon: <Trophy className="text-blue-500" />, title: "Certified", desc: "Official Paper" },
              { icon: <Brain className="text-purple-500" />, title: "Toolkits", desc: "Premium Prompts" },
              { icon: <Rocket className="text-emerald-500" />, title: "Careers", desc: "Tech Guidance" }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-4 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 bg-slate-50 w-10 h-10 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-sm font-black text-slate-800">{item.title}</h4>
                <p className="text-[11px] font-medium text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-blue-600 rounded-3xl p-5 flex items-center justify-between text-white shadow-lg shadow-blue-100">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Verified Training</p>
                <p className="text-sm font-bold">Standard Certification</p>
              </div>
            </div>
            <CheckCircle2 className="opacity-50" size={24} />
          </div>
        </div>
      </section>

      {/* Web App QR Code Section */}
      <section className="px-5 py-6">
        <div className="max-w-md mx-auto bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
          <div className="bg-orange-50 p-3 rounded-2xl text-orange-600 mb-4">
            <QrCode size={24} />
          </div>
          <h3 className="text-lg font-black text-slate-800 mb-1 tracking-tight">Access on Mobile</h3>
          <p className="text-xs text-slate-400 font-medium mb-6">Scan to open this dashboard on your phone</p>
          
          <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-inner mb-6">
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(liveSiteLink)}`} 
              alt="Web App QR Code" 
              className="w-32 h-32 rounded-lg"
            />
          </div>
          
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-blue-600 font-bold text-xs bg-blue-50 px-6 py-2.5 rounded-full hover:bg-blue-100 transition-all active:scale-95"
          >
            <Share2 size={14} /> Share Link
          </button>
        </div>
      </section>

      {/* Venue and Contact Section */}
      <section className="px-5 py-12 max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-2 rounded-xl text-blue-600"><MapPin size={20} /></div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Venue Location</p>
                <p className="font-bold text-sm text-slate-700">G-NTTF Campus, Opp New DC Office, Hubli Road, Gadag</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center border border-slate-100">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(mapsLink)}`} 
                alt="Location QR Code" 
                className="w-32 h-32 mb-4 rounded-lg border-4 border-white shadow-sm"
              />
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 font-bold text-xs bg-white px-5 py-2.5 rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition-colors">
                Open in Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-2 rounded-xl text-orange-600"><Phone size={20} /></div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Contact Organizers</p>
                <p className="font-bold text-sm text-slate-700">For Queries & Assistance</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {['+91 72045 44383', '+91 81236 76653', '+91 63603 62464', '+91 76768 68301'].map((num) => (
                <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="flex justify-between items-center bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                  {num} <ChevronRight size={16} className="opacity-30" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-50">
        <div className="max-w-md mx-auto">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full bg-blue-600 text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-95 transition-all">
              Register for Workshop <ChevronRight size={20} />
            </button>
          </a>
        </div>
      </div>

      <footer className="py-16 text-center">
        <GraduationCap size={28} className="mx-auto mb-3 text-blue-900 opacity-20" />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900/40">
          G-NTTF • Gadag • 2026
        </p>
      </footer>
    </div>
  );
};

const MobileCard = ({ icon, title, desc, color }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-start gap-4 transition-all hover:shadow-md w-full active:scale-[0.98]">
    <div className={`w-12 h-12 ${color} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div className="text-left">
      <h3 className="text-lg font-black mb-1 text-slate-800 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export default App;