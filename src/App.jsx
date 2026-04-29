import React, { useState, useEffect, useRef } from 'react';

const customStyles = {
  body: {
    fontFamily: "'DM Sans', sans-serif",
    backgroundColor: '#ffbdf1',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
    backgroundAttachment: 'fixed',
    color: '#0028e5',
    overflowX: 'hidden',
  },
};

const MusicBars = ({ visible }) => (
  <div style={{ display: visible ? 'flex' : 'none', alignItems: 'flex-end', gap: '2px', height: '12px', marginLeft: '8px' }}>
    {[0, 0.2, 0.4, 0.1].map((delay, i) => (
      <div key={i} style={{
        width: '3px',
        backgroundColor: '#f15a24',
        animation: `bounce 1s ${delay}s infinite alternate`,
        height: '100%',
      }} />
    ))}
  </div>
);

const PortfolioCard = ({ className, children, animClass }) => (
  <div className={`portfolio-card ${animClass || ''} ${className}`}>
    {children}
  </div>
);

const CopyIcon = ({ value }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={handleCopy} className="ml-auto w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 hover:bg-white/30 transition-colors" title="Copy">
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,189,241,0.85)', fontFamily: "'DM Sans', sans-serif" }}>
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-md" style={{ animation: 'popIn 0.3s ease-out forwards' }}>
        {/* Floating close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-[#f15a24] border-3 border-white flex items-center justify-center text-white shadow-[3px_3px_0px_#0028e5] hover:scale-110 hover:bg-[#0028e5] transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Card */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden border-4 border-[#0028e5] shadow-[8px_8px_0px_#f15a24]">
          <div className="p-8 pb-4">
            <h3 className="text-3xl font-bold text-[#0028e5] mb-1">Let's Talk</h3>
            <p className="text-sm text-gray-400">Pick your favorite way to reach me</p>
          </div>
          <div className="px-8 pb-8 space-y-3">
            <a href="tel:+919748961402" className="flex items-center gap-4 p-4 bg-[#1f7b44] rounded-2xl border-2 border-[#1f7b44] shadow-[4px_4px_0px_#0028e5] hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-white">Mobile / Whatsapp</p>
                <p className="text-sm font-semibold text-white/80">+91 9748961402</p>
              </div>
              <CopyIcon value="+919748961402" />
            </a>
            <a href="mailto:ankitaagarwal1402@gmail.com" className="flex items-center gap-4 p-4 bg-[#f15a24] rounded-2xl border-2 border-[#f15a24] shadow-[4px_4px_0px_#0028e5] hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-white">Email</p>
                <p className="text-sm font-semibold text-white/80">ankitaagarwal1402@gmail.com</p>
              </div>
              <CopyIcon value="ankitaagarwal1402@gmail.com" />
            </a>
            <a href="https://www.linkedin.com/in/ankita-agarwal14/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#0028e5] rounded-2xl border-2 border-[#0028e5] shadow-[4px_4px_0px_#f15a24] hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-white">LinkedIn</p>
                <p className="text-sm font-semibold text-white/80">ankita-agarwal14</p>
              </div>
              <CopyIcon value="https://www.linkedin.com/in/ankita-agarwal14/" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoModal = ({ isOpen, onClose, src, title }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,189,241,0.85)', fontFamily: "'DM Sans', sans-serif" }}>
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-3xl" style={{ animation: 'popIn 0.3s ease-out forwards' }}>
        {/* Close button - floating outside the card */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-[#f15a24] border-3 border-white flex items-center justify-center text-white shadow-[3px_3px_0px_#0028e5] hover:scale-110 hover:bg-[#0028e5] transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Card */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden border-4 border-[#0028e5] shadow-[8px_8px_0px_#f15a24]">
          {/* Video */}
          <div className="p-5 pb-0">
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl"
              style={{ aspectRatio: '16/9', objectFit: 'cover', background: '#000' }}
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>

          {/* Title bar below video */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-[#0028e5]">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [videoModal, setVideoModal] = useState({ open: false, src: '', title: '' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);
  const [hasPointer, setHasPointer] = useState(false);
  const audioRef = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onVisible = () => { if (!document.hidden) tryPlay(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  useEffect(() => {
    setHasPointer(window.matchMedia('(pointer: fine) and (min-width: 768px)').matches);
  }, []);

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

      @media (pointer: fine) and (min-width: 768px) {
        *, *::before, *::after,
        a, button, input, textarea, select, label,
        a *, button *, video, video::-webkit-media-controls,
        [role="button"], [onclick] { cursor: none !important; }
      }

      @keyframes float-1 {
        0% { transform: translateY(0px) rotate(-3deg); }
        50% { transform: translateY(-15px) rotate(-1deg); }
        100% { transform: translateY(0px) rotate(-3deg); }
      }
      @keyframes float-2 {
        0% { transform: translateY(0px) rotate(4deg); }
        50% { transform: translateY(-10px) rotate(6deg); }
        100% { transform: translateY(0px) rotate(4deg); }
      }
      @keyframes float-3 {
        0% { transform: translateY(0px) rotate(-5deg); }
        50% { transform: translateY(-20px) rotate(-2deg); }
        100% { transform: translateY(0px) rotate(-5deg); }
      }
      .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
      .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
      .animate-float-3 { animation: float-3 8s ease-in-out infinite; }

      .portfolio-card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .portfolio-card:hover {
        transform: scale(1.05) rotate(0deg) !important;
        z-index: 20;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        animation-play-state: paused;
      }

      @keyframes bounce {
        0% { height: 20%; }
        100% { height: 100%; }
      }

      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }
      @keyframes blink-caret {
        0%, 100% { border-color: transparent; }
        50% { border-color: #0028e5; }
      }
      @keyframes remove-caret {
        to { border-color: transparent; border-width: 0; }
      }
      .typewriter {
        overflow: hidden;
        white-space: nowrap;
        border-right: 3px solid #0028e5;
        animation: typing 2s steps(20, end), blink-caret 0.75s step-end 3, remove-caret 0.01s forwards 2.3s;
        display: inline-block;
      }

      @keyframes popIn {
        0% { transform: scale(0.95); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }

      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); box-shadow: 0 0 0px rgba(255,255,255,0); }
        50% { opacity: 0.6; transform: scale(1.5); box-shadow: 0 0 8px rgba(255,255,255,0.4); }
      }

      .scroll-flower {
        position: absolute;
        width: 60px;
        height: 100px;
        z-index: 1;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .scroll-flower.blooming { opacity: 1; }
      .flower-stem {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 0;
        background-color: #1f7b44;
        transform-origin: bottom center;
        transition: height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .flower-leaves {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .flower-leaf {
        position: absolute;
        width: 0;
        height: 0;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .flower-head {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) scale(0);
        width: 30px;
        height: 30px;
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .scroll-flower.blooming .flower-stem { height: 50px; transition-delay: 0ms; }
      .scroll-flower.blooming .flower-leaves { opacity: 1; transition-delay: 300ms; }
      .scroll-flower.blooming .flower-head { transform: translateX(-50%) scale(1); transition-delay: 500ms; }

      /* Footer flower bloom system - handles variable sizes */
      .footer-flower {
        position: absolute;
        bottom: 0;
        z-index: 100;
        opacity: 0;
        transition: opacity 0.3s ease;
        width: var(--flower-size);
        height: calc(var(--flower-size) + var(--stem-height));
      }
      .footer-flower.blooming {
        opacity: 1;
      }
      .footer-flower .flower-stem {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 4px;
        height: 0;
        background: linear-gradient(to bottom, #1f7b44, #2d9c5a);
        transition: height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        transform-origin: bottom center;
      }
      .footer-flower.blooming .flower-stem {
        height: var(--stem-height);
        transition-delay: 0ms;
      }
      .footer-flower .flower-leaf {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        transition: opacity 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .footer-flower.blooming .flower-leaf {
        opacity: 1;
        transition-delay: 300ms;
      }
      .footer-flower .flower-head {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) rotate(var(--head-rotation, 0deg)) scale(0);
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        z-index: 3;
      }
      .footer-flower.blooming .flower-head {
        transform: translateX(-50%) rotate(var(--head-rotation, 0deg)) scale(1);
        transition-delay: 500ms;
      }

      .font-serif-elegant { font-family: 'Playfair Display', serif; }
    `;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  useEffect(() => {
    if (!hasPointer) return;
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setCursorScale(0.9);
    const handleMouseUp = () => setCursorScale(1);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [hasPointer]);

  useEffect(() => {
    const flowerColors = ['#f15a24', '#0028e5', '#FFD700'];
    function createFlowerSVG(color, type) {
      if (type === 0) {
        return `<svg width="30" height="30" viewBox="0 0 5 5" fill="none">
          <rect x="2" y="2" width="1" height="1" fill="#FFD700"/>
          <rect x="2" y="1" width="1" height="1" fill="${color}"/>
          <rect x="2" y="3" width="1" height="1" fill="${color}"/>
          <rect x="1" y="2" width="1" height="1" fill="${color}"/>
          <rect x="3" y="2" width="1" height="1" fill="${color}"/>
        </svg>`;
      } else if (type === 1) {
        return `<svg width="30" height="30" viewBox="0 0 7 7" fill="none">
          <rect x="3" y="0" width="1" height="1" fill="${color}"/>
          <rect x="3" y="6" width="1" height="1" fill="${color}"/>
          <rect x="0" y="3" width="1" height="1" fill="${color}"/>
          <rect x="6" y="3" width="1" height="1" fill="${color}"/>
          <rect x="2" y="2" width="1" height="1" fill="${color}"/>
          <rect x="4" y="2" width="1" height="1" fill="${color}"/>
          <rect x="2" y="4" width="1" height="1" fill="${color}"/>
          <rect x="4" y="4" width="1" height="1" fill="${color}"/>
          <rect x="3" y="3" width="1" height="1" fill="#FFD700"/>
        </svg>`;
      } else {
        return `<svg width="30" height="30" viewBox="0 0 6 6" fill="none">
          <rect x="2" y="0" width="2" height="2" fill="${color}"/>
          <rect x="0" y="2" width="2" height="2" fill="${color}"/>
          <rect x="4" y="2" width="2" height="2" fill="${color}"/>
          <rect x="2" y="4" width="2" height="2" fill="${color}"/>
          <rect x="2" y="2" width="2" height="2" fill="#FFD700"/>
        </svg>`;
      }
    }

    function addFlowersToToolkit() {
      const allSections = document.querySelectorAll('section');
      let toolkitSection = null;
      allSections.forEach(s => {
        const h2 = s.querySelector('h2');
        if (h2 && h2.textContent.includes('Toolkit')) toolkitSection = s;
      });
      if (!toolkitSection) return;
      // Prevent duplicates - check if flowers already exist
      if (toolkitSection.querySelectorAll('.scroll-flower').length > 0) return;

      toolkitSection.style.position = 'relative';
      toolkitSection.style.minHeight = '350px';
      toolkitSection.style.overflow = 'visible';
      const positions = [
        { x: 8, y: 22 }, { x: 12, y: 35 }, { x: 5, y: 55 },
        { x: 88, y: 18 }, { x: 92, y: 32 }, { x: 85, y: 50 },
        { x: 20, y: 75 }, { x: 78, y: 70 }
      ];
      for (let i = 0; i < positions.length; i++) {
        const flower = document.createElement('div');
        flower.className = 'scroll-flower';
        flower.style.left = positions[i].x + '%';
        flower.style.top = positions[i].y + '%';
        flower.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        const color = flowerColors[Math.floor(Math.random() * flowerColors.length)];
        const type = Math.floor(Math.random() * 3);
        flower.innerHTML = `
          <div class="flower-head">${createFlowerSVG(color, type)}</div>
          <div class="flower-stem"></div>
          <div class="flower-leaves">
            <div class="flower-leaf" style="left:-8px;transform:rotate(-45deg);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:12px solid #1f7b44;"></div>
            <div class="flower-leaf" style="left:0px;transform:rotate(45deg);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:12px solid #1f7b44;"></div>
          </div>`;
        toolkitSection.appendChild(flower);
      }
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const flowers = entry.target.querySelectorAll('.scroll-flower');
            flowers.forEach((f, idx) => setTimeout(() => f.classList.add('blooming'), idx * 150));
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: [0.6] });
      obs.observe(toolkitSection);
    }

    function addFooterGarden() {
      const garden = document.getElementById('flower-garden');
      if (!garden) return;

      // Prevent duplicates
      if (garden.querySelectorAll('.footer-flower').length > 0) return;

      const gardenColors = ['#f15a24', '#0028e5', '#FFD700'];
      const numFlowers = 20;

      for (let i = 0; i < numFlowers; i++) {
        // Generate random properties
        const flowerSize = 35 + Math.random() * 20; // 35-55px
        const stemHeight = 30 + Math.random() * 25; // 30-55px
        const leftPos = (i / numFlowers) * 92 + 4;
        const color = gardenColors[Math.floor(Math.random() * gardenColors.length)];
        const type = Math.floor(Math.random() * 3);
        const rotation = Math.random() * 20 - 10; // -10 to +10 degrees
        const hasLeftLeaf = Math.random() > 0.3;
        const hasRightLeaf = Math.random() > 0.3;

        // Create flower container
        const fc = document.createElement('div');
        fc.className = 'footer-flower';

        // Set CSS custom properties for this specific flower
        fc.style.setProperty('--flower-size', `${flowerSize}px`);
        fc.style.setProperty('--stem-height', `${stemHeight}px`);
        fc.style.setProperty('--head-rotation', `${rotation}deg`);
        fc.style.left = `${leftPos}%`;

        // Build flower structure
        fc.innerHTML = `
          <div class="flower-head">
            ${createFlowerSVG(color, type)}
          </div>
          <div class="flower-stem"></div>
          ${hasLeftLeaf ? `
            <div class="flower-leaf" style="
              bottom: ${stemHeight * 0.4}px;
              left: 50%;
              transform: translateX(-100%) rotate(-35deg);
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 16px solid #1f7b44;
            "></div>
          ` : ''}
          ${hasRightLeaf ? `
            <div class="flower-leaf" style="
              bottom: ${stemHeight * 0.6}px;
              left: 50%;
              transform: rotate(35deg);
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 16px solid #2d9c5a;
            "></div>
          ` : ''}
        `;

        garden.appendChild(fc);
      }

      // Set up IntersectionObserver to trigger bloom when footer is visible
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const flowers = garden.querySelectorAll('.footer-flower');
            flowers.forEach((f, idx) => {
              setTimeout(() => {
                f.classList.add('blooming');
              }, idx * 150);
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: [0.1] });

      obs.observe(garden);
    }

    addFlowersToToolkit();
    addFooterGarden();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(error => {
              console.error('Audio play failed:', error);
              setIsPlaying(false);
            });
        } else {
          setIsPlaying(true);
        }
      }
    }
  };

  return (
    <div style={customStyles.body} className="antialiased min-h-screen flex flex-col">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        onEnded={() => setIsPlaying(false)}
        crossOrigin="anonymous"
      />

      {/* Custom Cursor (desktop only) */}
      {hasPointer && (
        <div
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 10000,
            width: '32px',
            height: '32px',
            top: 0,
            left: 0,
            transform: `translate(${cursorPos.x - 4}px, ${cursorPos.y - 4}px) scale(${cursorScale})`,
            willChange: 'transform',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.15))' }}>
            <path d="M1,1 V15 L4,12 H7 L1,1 Z" fill="#f15a24" stroke="#0028e5" strokeWidth="1.5" strokeLinejoin="miter" />
          </svg>
        </div>
      )}

      {/* Nav */}
      <nav className="w-full px-4 py-3 md:px-8 md:py-6 flex justify-end items-center fixed top-0 z-40 bg-transparent mix-blend-color-burn">
        <button
          onClick={() => setContactOpen(true)}
          className="px-4 py-2 md:px-6 md:py-3 bg-[#0028e5] text-white border-2 border-[#0028e5] rounded-full font-semibold tracking-wide text-sm shadow-[4px_4px_0px_#f15a24] hover:-translate-y-1 transition-all"
        >
          Let's Talk
        </button>
      </nav>

      {/* Header */}
      <header className="w-full flex items-center justify-center relative pt-32 pb-16 px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-[#f15a24] rounded-[3rem] border-4 border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
              <video
                ref={heroVideoRef}
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline=""
                controls={false}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-full h-full object-cover pointer-events-none"
                style={{
                  objectPosition: 'center',
                }}
                onLoadedData={() => heroVideoRef.current?.play().catch(() => {})}
              >
                <source src="/video-avatar.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="font-serif-elegant italic text-5xl md:text-7xl lg:text-8xl text-[#f15a24] leading-tight mb-6">
              <span className="typewriter">Hi, I'm Ankita!</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 max-w-xl">
              From Series A startups to billion-dollar enterprises, I build systems that drive growth. Currently deep in <strong>Claude Code</strong> — upskilling at the intersection of AI, Automations and GTM.
            </p>
            <a href="https://www.linkedin.com/in/ankita-agarwal14/" target="_blank" rel="noreferrer" className="text-sm font-medium text-[#0028e5] underline underline-offset-4 hover:text-[#f15a24] transition-colors">Connect on LinkedIn →</a>
          </div>
        </div>
      </header>

      {/* Work Highlights */}
      <section id="work" className="w-full py-20 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif-elegant italic text-5xl md:text-7xl mb-16 text-center text-[#0028e5]">Work Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PortfolioCard animClass="animate-float-1" className="w-full bg-[#f15a24] text-white rounded-[2.5rem] p-8 shadow-[8px_8px_0px_#0028e5] relative overflow-hidden group border-4 border-[#f15a24]">
              <h3 className="text-3xl font-bold mb-2">ZOCA.COM</h3>
              <p className="text-sm text-white/70 font-medium mb-3">Pre-series A (Accel), Marketing SaaS for local businesses in US</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-[#0028e5] text-white rounded-full text-xs font-bold tracking-wider">HEAD OF MARKETING &amp; GROWTH</span>
                <span className="px-4 py-2 bg-white text-[#f15a24] rounded-full text-xs font-bold tracking-wider">2025</span>
              </div>
              <p className="text-white text-lg leading-relaxed mb-6 font-medium">
                First marketing hire. Built the GTM engine from scratch — cold email, SEO, social, influencer partnerships, and growth-hacked FB groups. <strong>$400K pipeline</strong> and <strong>50+ customers</strong> in 6 months.
              </p>
            </PortfolioCard>

            <PortfolioCard animClass="animate-float-2" className="w-full bg-white text-[#0028e5] rounded-[2.5rem] p-8 shadow-[8px_8px_0px_#0028e5] relative overflow-hidden group border-4 border-[#0028e5]">
              <h3 className="text-3xl font-bold mb-2">SAAS LABS</h3>
              <p className="text-sm text-gray-500 font-medium mb-3">Series B (Sequoia), Sales and support SaaS for US SMBs</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-[#f15a24] text-white rounded-full text-xs font-bold tracking-wider">ASSOCIATE DIRECTOR</span>
                <span className="px-4 py-2 bg-[#0028e5] text-white rounded-full text-xs font-bold tracking-wider">2022–2024</span>
              </div>
              <p className="text-[#0028e5] text-lg leading-relaxed mb-6 font-medium">
                Ran Helpwise end-to-end — from <strong>$100K to $1M ARR</strong>, profitably. Cut CAC by <strong>60%</strong>, tripled signup-to-paid conversion (<strong>8% → 22%</strong>), and reduced churn from <strong>5% to 3%</strong>. Built and led an <strong>11-person</strong> cross-functional team. Promoted <strong>twice</strong> in 2.5 years.
              </p>
            </PortfolioCard>

            <PortfolioCard animClass="animate-float-3" className="w-full bg-white text-[#0028e5] rounded-[2.5rem] p-8 shadow-[8px_8px_0px_#1f7b44] relative overflow-hidden group border-4 border-[#0028e5]">
              <h3 className="text-3xl font-bold mb-2">ANAROCK</h3>
              <p className="text-sm text-gray-500 font-medium mb-3">Consultancy firm for real estate</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-[#1f7b44] text-white rounded-full text-xs font-bold tracking-wider">AVP STRATEGY & BUSINESS DEVELOPMENT</span>
                <span className="px-4 py-2 bg-[#f15a24] text-white rounded-full text-xs font-bold tracking-wider">2020</span>
              </div>
              <p className="text-[#0028e5] text-lg leading-relaxed mb-6 font-medium">
                Managed a <strong>$15M portfolio</strong>, sourced <strong>$4.5M</strong> in new business. Built a channel partner tracking system that drove a <strong>10% lift in revenue</strong>. Piloted a new business model with <strong>$100M+ yearly revenue potential</strong>.
              </p>
            </PortfolioCard>

            <PortfolioCard animClass="animate-float-1" className="w-full bg-[#1f7b44] text-white rounded-[2.5rem] p-8 shadow-[8px_8px_0px_#f15a24] relative overflow-hidden group border-4 border-[#1f7b44]">
              <h3 className="text-3xl font-bold mb-2">THE LODHA GROUP</h3>
              <p className="text-sm text-white/70 font-medium mb-3">$1B+ annual revenue, India's largest real estate developer</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-[#f15a24] text-white rounded-full text-xs font-bold tracking-wider">DY. GENERAL MANAGER</span>
                <span className="px-4 py-2 bg-white text-[#1f7b44] rounded-full text-xs font-bold tracking-wider">2017–2019</span>
              </div>
              <p className="text-white text-lg leading-relaxed mb-6 font-medium">
                Automated <strong>15+ business processes</strong> to transform the customer journey. Drove Salesforce integration across tools and <strong>org-wide adoption</strong> — cut support queries by <strong>35%</strong> and lifted NPS by <strong>20 points</strong>. Won <strong>3 awards</strong> for impact.
              </p>
            </PortfolioCard>
          </div>
        </div>
      </section>

      {/* Playground */}
      <section className="w-full py-20 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif-elegant italic text-5xl md:text-7xl mb-16 text-center text-[#0028e5]">Playground</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="portfolio-card bg-[#1f7b44] text-white rounded-[2rem] p-8 shadow-[8px_8px_0px_#f15a24] border-4 border-[#1f7b44] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f15a24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Video Channel</h3>
                <p className="text-sm text-[#ffbdf1] font-medium uppercase tracking-wider mb-3">Greek Mythology</p>
                <p className="text-base text-white/90 leading-relaxed">Built a custom Manus skill that takes a script and auto-generates keyframe images, video clips, voiceover — then syncs and stitches everything into a final video. Fully autonomous, end to end.</p>
              </div>
              <a href="https://instagram.com/unfilteredmythtv" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-bold text-sm hover:text-[#f15a24] transition-colors group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @unfilteredmythtv
              </a>
            </div>

            <div className="portfolio-card bg-white text-[#0028e5] rounded-[2rem] p-8 shadow-[8px_8px_0px_#0028e5] border-4 border-[#0028e5] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg width="28" height="20" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5 3.5c-.3-1.1-1.1-1.9-2.2-2.2C19.8.5 12 .5 12 .5s-7.8 0-9.3.8C1.6 1.6.8 2.4.5 3.5 0 5.3 0 9 0 9s0 3.8.5 5.5c.3 1.1 1.1 1.9 2.2 2.2C4.2 17.5 12 17.5 12 17.5s7.8 0 9.3-.8c1.1-.3 1.9-1.1 2.2-2.2.5-1.7.5-5.5.5-5.5s0-3.8-.5-5.5z" fill="#FF0000" />
                    <path d="M9.5 12.5l6-3.5-6-3.5v7z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Youtube Channel</h3>
                <p className="text-sm text-[#f15a24] font-medium uppercase tracking-wider mb-3">Claude Code</p>
                <p className="text-base text-[#0028e5] leading-relaxed">Tutorials on Claude Code for non-technical professionals. Making AI tools accessible to business teams.</p>
              </div>
              <div>
                <button
                  onClick={() => setVideoModal({ open: true, src: '/claude-code-trailer.mp4', title: 'Made this for fun!' })}
                  className="mt-4 w-full bg-[#0028e5]/10 hover:bg-[#0028e5]/20 rounded-xl p-3 flex items-center justify-center gap-2 transition-colors group"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0028e5" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="text-sm font-bold text-[#0028e5]">Watch Trailer</span>
                </button>
                <a href="https://www.youtube.com/@ClaudeToldme" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 font-bold text-sm hover:text-[#f15a24] transition-colors group">
                <svg width="20" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5 3.5c-.3-1.1-1.1-1.9-2.2-2.2C19.8.5 12 .5 12 .5s-7.8 0-9.3.8C1.6 1.6.8 2.4.5 3.5 0 5.3 0 9 0 9s0 3.8.5 5.5c.3 1.1 1.1 1.9 2.2 2.2C4.2 17.5 12 17.5 12 17.5s7.8 0 9.3-.8c1.1-.3 1.9-1.1 2.2-2.2.5-1.7.5-5.5.5-5.5s0-3.8-.5-5.5z" fill="#FF0000" />
                  <path d="M9.5 12.5l6-3.5-6-3.5v7z" fill="white" />
                </svg>
                @ClaudeToldme
              </a>
              </div>
            </div>

            <div className="portfolio-card bg-[#f15a24] text-white rounded-[2rem] p-8 shadow-[8px_8px_0px_#1f7b44] border-4 border-[#f15a24] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Nutrition Tracker</h3>
                <p className="text-sm text-[#ffbdf1] font-medium uppercase tracking-wider mb-3">GPT + Supabase</p>
                <p className="text-base text-white/90 leading-relaxed">Custom GPT + Supabase app — log meals via photo or text, get instant nutrition breakdown, and query your history. Built before Claude Code existed.</p>
              </div>
              <div>
                <button
                  onClick={() => setVideoModal({ open: true, src: '/nutrition-tracker.mp4', title: 'Nutrition Tracker Demo' })}
                  className="mt-4 w-full bg-white/15 hover:bg-white/25 rounded-xl p-3 flex items-center justify-center gap-2 transition-colors group"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="text-sm font-bold text-white">Watch Demo</span>
                </button>
                <span className="mt-3 inline-flex items-center gap-2 font-bold text-sm text-white/70">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  Personal Project
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="w-full pt-20 pb-40 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif-elegant italic text-4xl mb-12 text-[#0028e5] relative z-10">Toolkit</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 max-w-3xl mx-auto">
            {[
              { label: 'Claude Code', bg: 'bg-[#0028e5]', text: 'text-white', border: 'border-[#0028e5]', shadow: 'shadow-[4px_4px_0px_#f15a24]' },
              { label: 'Linear + PM tools', bg: 'bg-[#f15a24]', text: 'text-white', border: 'border-[#f15a24]', shadow: 'shadow-[4px_4px_0px_#0028e5]' },
              { label: 'Notion', bg: 'bg-white', text: 'text-[#0028e5]', border: 'border-[#0028e5]', shadow: 'shadow-[4px_4px_0px_#0028e5]' },
              { label: 'AI Vid Gen', bg: 'bg-[#1f7b44]', text: 'text-white', border: 'border-[#1f7b44]', shadow: 'shadow-[4px_4px_0px_#0028e5]' },
              { label: 'Salesforce + CRMs', bg: 'bg-white', text: 'text-[#0028e5]', border: 'border-[#0028e5]', shadow: 'shadow-[4px_4px_0px_#0028e5]' },
              { label: 'Google Ads', bg: 'bg-[#0028e5]', text: 'text-white', border: 'border-[#0028e5]', shadow: 'shadow-[4px_4px_0px_#f15a24]' },
              { label: 'SEO tools', bg: 'bg-[#f15a24]', text: 'text-white', border: 'border-[#f15a24]', shadow: 'shadow-[4px_4px_0px_#0028e5]' },
              { label: 'lnstantly + Outbound', bg: 'bg-[#1f7b44]', text: 'text-white', border: 'border-[#1f7b44]', shadow: 'shadow-[4px_4px_0px_#0028e5]' },
            ].map((item, i) => (
              <div key={i} className={`px-6 py-3 ${item.bg} ${item.text} border-2 ${item.border} rounded-full text-sm font-medium tracking-wide ${item.shadow} hover:-translate-y-1 transition-all`}>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Screen */}
      <section className="w-full py-20 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif-elegant italic text-5xl md:text-7xl mb-16 text-center text-[#0028e5]">Beyond the Screen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-[2rem] p-6 shadow-[6px_6px_0px_#0028e5] border-2 border-[#0028e5] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1f7b44] rounded-2xl flex items-center justify-center mb-4 border-4 border-[#0028e5]">
                <svg width="48" height="40" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="4" height="2" fill="#FFD700" />
                  <rect x="1" y="2" width="3" height="6" fill="#FF4500" />
                  <rect x="2" y="3" width="1" height="4" fill="#FFD700" />
                  <rect x="8" y="2" width="3" height="6" fill="#FF4500" />
                  <rect x="9" y="3" width="1" height="4" fill="#FFD700" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0028e5] text-lg mb-2">Fitness</h3>
              <p className="text-sm text-gray-600">Lost 8% body fat last year 😎</p>
            </div>

            <div className="bg-[#0028e5] rounded-[2rem] p-6 shadow-[6px_6px_0px_#f15a24] border-2 border-[#0028e5] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ffe4c4] rounded-2xl flex items-center justify-center mb-4 border-4 border-white relative overflow-hidden">
                <svg width="48" height="48" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="12" height="16" rx="2" fill="white" />
                  <rect x="2" y="2" width="10" height="14" rx="1" fill="#fff8dc" />
                  <rect x="3" y="3" width="2" height="2" fill="#f15a24" />
                  <rect x="3" y="12" width="2" height="2" fill="#f15a24" />
                  <rect x="5" y="5" width="1" height="5" fill="#0028e5" />
                  <rect x="5" y="5" width="3" height="1" fill="#0028e5" />
                  <rect x="5" y="9" width="3" height="1" fill="#0028e5" />
                  <rect x="7" y="6" width="1" height="2" fill="#0028e5" />
                  <rect x="7" y="8" width="2" height="2" fill="#0028e5" />
                  <rect x="9" y="11" width="2" height="2" fill="#f15a24" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Poker</h3>
              <p className="text-sm text-white/70">Recreational friendly games. I won't take your money (maybe)!</p>
            </div>

            <div className="bg-[#f15a24] rounded-[2rem] p-6 shadow-[6px_6px_0px_#1f7b44] border-2 border-[#f15a24] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ffbdf1] rounded-2xl flex items-center justify-center mb-4 border-4 border-white overflow-hidden">
                <svg width="48" height="48" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="6" width="3" height="2" fill="#f15a24" />
                  <rect x="7" y="4" width="3" height="2" fill="#f15a24" />
                  <rect x="4" y="3" width="1" height="4" fill="#0028e5" />
                  <rect x="9" y="1" width="1" height="4" fill="#0028e5" />
                  <rect x="4" y="3" width="6" height="1" fill="#0028e5" />
                  <rect x="5" y="4" width="1" height="1" fill="#0028e5" />
                  <rect x="10" y="2" width="1" height="1" fill="#0028e5" />
                  <rect x="1" y="4" width="1" height="1" fill="#FFD700" />
                  <rect x="11" y="7" width="1" height="1" fill="#FFD700" />
                  <rect x="6" y="9" width="1" height="1" fill="#FFD700" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Singing</h3>
              <p className="text-sm text-white/80">Trained in Indian classical music. Play the ukulele.</p>
            </div>

            <div className="bg-white rounded-[2rem] p-6 shadow-[6px_6px_0px_#1f7b44] border-2 border-[#1f7b44] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#f15a24] rounded-2xl flex items-center justify-center mb-4 border-4 border-[#1f7b44]">
                <svg width="36" height="48" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="0" width="1" height="12" fill="#FFD700" />
                  <rect x="2" y="3" width="2" height="3" fill="#ffbdf1" />
                  <rect x="2" y="1" width="2" height="2" fill="#ffbdf1" />
                  <rect x="5" y="2" width="3" height="1" fill="#ffbdf1" />
                  <rect x="5" y="3" width="1" height="1" fill="#ffbdf1" />
                  <rect x="1" y="6" width="2" height="1" fill="#ffbdf1" />
                  <rect x="5" y="6" width="2" height="1" fill="#ffbdf1" />
                  <rect x="0" y="7" width="2" height="1" fill="#ffbdf1" />
                  <rect x="6" y="7" width="2" height="1" fill="#ffbdf1" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1f7b44] text-lg mb-2">Pole Dancing</h3>
              <p className="text-sm text-gray-600">Who doesn't love flying in the air?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kind Words */}
      <section className="w-full pt-20 pb-8 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif-elegant italic text-5xl md:text-7xl mb-16 text-center text-[#0028e5]">Kind Words</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-[8px_8px_0px_#0028e5] border-2 border-[#0028e5] transform rotate-1 hover:rotate-0 transition-all duration-300">
              <div className="text-6xl font-serif-elegant text-[#f15a24] leading-none mb-4">"</div>
              <p className="text-[#0028e5] text-lg leading-relaxed mb-6 font-medium">Helpwise became a profitable business by itself, doing a mn$, through and through profitable, team of 12 people, Ankita is running the show at Helpwise.</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0028e5] flex items-center justify-center text-white font-bold text-lg">GS</div>
                <div>
                  <p className="font-bold text-[#0028e5]">Gaurav Sharma</p>
                  <p className="text-sm text-gray-500">CEO, SaaS Labs (Series B, Sequoia-backed)</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0028e5] rounded-[2rem] p-8 shadow-[8px_8px_0px_#f15a24] border-2 border-[#0028e5] transform -rotate-1 hover:rotate-0 transition-all duration-300">
              <div className="text-6xl font-serif-elegant text-[#ffbdf1] leading-none mb-4">"</div>
              <p className="text-white text-lg leading-relaxed mb-6 font-medium">Ankita shows a determination to work hard against all odds and achieve the goals set out for her. She can work collaboratively in an unstructured environment to bring everything together and ensure a project's success.</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f15a24] flex items-center justify-center text-white font-bold text-lg">SK</div>
                <div>
                  <p className="font-bold text-white">Sumit Kumar</p>
                  <p className="text-sm text-white/70">MD and Partner - Boston Consulting Group</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1f7b44] rounded-[2rem] p-8 shadow-[8px_8px_0px_#0028e5] border-2 border-[#1f7b44] transform rotate-2 hover:rotate-0 transition-all duration-300">
              <div className="text-6xl font-serif-elegant text-[#ffbdf1] leading-none mb-4">"</div>
              <p className="text-white text-lg leading-relaxed mb-6 font-medium">She has a great attitude and is an able problem solver. She is a quick learner, focus on impact and never shies away from taking the initiative in any situation. Has an understanding of and aptitude for all things tech — and is able to drive complex tecno-process changes in organizational settings.</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1f7b44] font-bold text-lg">MM</div>
                <div>
                  <p className="font-bold text-white">Mayank Mohan</p>
                  <p className="text-sm text-white/70">Ex-BCG, Former Director at Ola</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Garden */}
      <footer id="footer-garden" className="w-full py-4 relative overflow-visible min-h-[180px] bg-transparent">
        <p className="text-center text-xs text-[#0028e5]/50 font-medium tracking-wide relative z-10 mb-2">Built with Claude Code</p>
        <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none" id="flower-garden" style={{ zIndex: 100 }} />
      </footer>

      {/* Music Player */}
      <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />

      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.open}
        onClose={() => setVideoModal({ open: false, src: '', title: '' })}
        src={videoModal.src}
        title={videoModal.title}
      />
    </div>
  );
};

const MusicPlayer = ({ isPlaying, toggleMusic }) => (
  <div className="fixed bottom-6 right-6 z-50 bg-white border-2 border-[#0028e5] rounded-full p-2 pr-4 shadow-[4px_4px_0px_#0028e5] flex items-center gap-3 hover:scale-105 transition-transform">
    <button
      onClick={toggleMusic}
      className={`w-10 h-10 ${isPlaying ? 'bg-[#1f7b44]' : 'bg-[#f15a24]'} rounded-full flex items-center justify-center text-white hover:bg-[#0028e5] transition-colors focus:outline-none`}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '2px' }}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )}
    </button>
    <div className="flex flex-col">
      <span className="text-xs font-bold text-[#0028e5] leading-none">{isPlaying ? 'Music is Magic' : 'Play some music'}</span>
    </div>
    <MusicBars visible={isPlaying} />
  </div>
);

export default App;
