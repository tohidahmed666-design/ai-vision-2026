import React from 'react';
import { Trophy, Cpu, MessageSquare, Video, ExternalLink, GraduationCap, Calendar, MapPin, ChevronRight, Menu, Phone, Share2 } from 'lucide-react';

const App = () => {
  const registrationLink = "https://forms.gle/mAShra47CuXPvig5A";
  const mapsLink = "https://maps.google.com/?q=G-NTTF+Gadag"; 
  const liveSiteLink = "https://g-nttf-ai-vision-2026-d9p1.vercel.app";

  // Function to trigger native mobile sharing
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
      // Fallback for desktop browsers
      alert("Sharing not supported on this browser. You can copy the link manually: " + liveSiteLink);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-100 pb-24">
      
      {/* Navigation - Orange Accent on Logo only */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-blue-100/50">
        <div className="flex items-center justify-between px-5 h-16 max-w-[1126px] mx-auto">
          <div className="font-black text-xl tracking-tighter flex items-center gap-2 text-orange-600">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xs shadow-lg shadow-orange-200">AI</div>
            AI VISION
          </div>
          <button className="p-2 text-blue-900 hover:bg-blue-50 rounded-xl transition">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-8 px-6 text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative p-2 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl shadow-blue-100/50">
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

          <p className="text-slate-500 text-base mb-10 leading-relaxed font-medium px-2">
            Securing your Future with your own Hands.<br/>
            <span className="text-blue-700 font-bold uppercase tracking-widest text-[15px] block mt-2">
              G-NTTF Campus<br/>
              Opp, New DC Office, Hubli Road, Gadag
            </span>
          </p>
        </div>
      </header>

      {/* Challenges Section */}
      <section className="px-5 py-4">
        <h2 className="text-2xl font-black mb-8 text-center text-slate-800 tracking-tight">Two Day Workshop</h2>
        
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <MobileCard 
            icon={<Cpu />} 
            title="AI Video Generation." 
            desc="Create compelling video content using AI tools and techniques."
            color="bg-blue-600"
          />
          <MobileCard 
            icon={<MessageSquare />} 
            title="ChatGPT Prompting." 
            desc="Solve engineering problems using advanced LLM logic."
            color="bg-sky-500"
          />
          <MobileCard 
            icon={<Video />} 
            title="AI Tool Awareness." 
            desc="Learn about the responsible and effective use of AI technologies."
            color="bg-indigo-500"
          />
        </div>
      </section>

      {/* Date, Venue and Contact Section */}
      <section className="px-5 py-12 max-w-md mx-auto">
        <div className="flex flex-col gap-3">
          
          <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm transition-transform active:scale-[0.98]">
            <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
              <Calendar size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400">Date</p>
              <p className="font-bold text-sm text-slate-700">17th & 18th April</p>
            </div>
          </div>

          {/* Location & QR Card */}
          <div className="bg-white/60 backdrop-blur-sm p-5 rounded-3xl border border-white shadow-sm transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                <MapPin size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-400">Venue</p>
                <p className="font-bold text-sm text-slate-700">G-NTTF Campus, Gadag</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-2xl p-4 flex flex-col items-center border border-blue-50">
              <p className="text-[10px] font-bold text-blue-900/40 mb-3 tracking-widest uppercase">Scan for Location</p>
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(mapsLink)}`} 
                alt="Location QR Code" 
                className="w-32 h-32 mb-4 rounded-lg border-4 border-white shadow-sm"
              />
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 font-bold text-xs bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
                Open in Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm transition-transform active:scale-[0.98]">
            <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400">Contact</p>
              <div className="flex flex-col">
                <a href="tel:+917204544383" className="font-bold text-sm text-slate-700 hover:text-blue-600 transition">+91 72045 44383</a>
                <a href="tel:+918123676653" className="font-bold text-sm text-slate-700 hover:text-blue-600 transition">+91 81236 76653</a>
                <a href="tel:+916360362464" className="font-bold text-sm text-slate-700 hover:text-blue-600 transition">+91 63603 62464</a>
                <a href="tel:+917676868301" className="font-bold text-sm text-slate-700 hover:text-blue-600 transition">+91 76768 68301</a>
              </div>
            </div>
          </div>

          {/* Web App Share QR Code Card with Native Sharing */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm mt-8">
            <div className="flex flex-col items-center text-center">
              <button 
                onClick={handleShare}
                className="bg-orange-100 p-4 rounded-2xl text-orange-600 mb-3 hover:bg-orange-200 transition-all active:scale-90"
                title="Share Website"
              >
                <Share2 size={24} />
              </button>
              <h3 className="text-sm font-bold text-slate-700 mb-1">Share with Friends</h3>
              <p className="text-[11px] text-slate-400 mb-4">Tap the icon to share via WhatsApp & others</p>
              
              <div className="bg-white p-3 rounded-2xl border border-orange-50 shadow-inner">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(liveSiteLink)}`} 
                  alt="Site QR Code" 
                  className="w-28 h-28 rounded-lg"
                />
              </div>
              <p className="mt-3 text-[10px] font-mono text-orange-600/60 break-all uppercase tracking-tight">{liveSiteLink}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Fixed Footer Register Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/60 backdrop-blur-md border-t border-blue-100 z-50">
        <div className="max-w-md mx-auto">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full bg-blue-600 text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-95 transition-all">
              Register Now <ChevronRight size={20} />
            </button>
          </a>
        </div>
      </div>

      <footer className="py-12 text-center opacity-50">
        <GraduationCap size={24} className="mx-auto mb-2 text-blue-900" />
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-900">G-NTTF • Gadag</p>
      </footer>
    </div>
  );
};

const MobileCard = ({ icon, title, desc, color }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] border border-white shadow-sm flex flex-col items-start gap-4 transition-all hover:shadow-md w-full">
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