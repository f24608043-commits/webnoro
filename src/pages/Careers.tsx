import { useState, useRef, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { VariableProximity } from '@/components/VariableProximity';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle, Mail } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';

const Careers = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    document.title = "Careers | Nexa Growth";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join the Nexa Growth team. Explore career opportunities in e-commerce, digital marketing, and technology. Performance-driven growth environment.");
    }
  }, []);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-career inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-career", {
        y: 70,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
      });
    }
  }, { scope: heroRef });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsUploading(true);
      setTimeout(() => { setIsUploading(false); setIsUploaded(true); }, 2000);
    }
  };

  const handleUploadClick = () => { fileInputRef.current?.click(); };

  const resetUpload = () => {
    setIsUploaded(false);
    setFileName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-48 pb-32 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Join The Elite
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-12 text-foreground tracking-tighter leading-[0.9] italic max-w-5xl mx-auto text-center">
              Careers
            </h1>
            <Reveal delay={0.4}>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-medium italic font-serif">
                Passionate about advancing your career with abundant learning and leadership prospects? Step into the future of performance-driven growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Resume Upload Section */}
      <section className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal direction="up">
              <h2 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight italic uppercase">Submit <span className="text-primary not-italic">Intel</span></h2>
              <p className="text-2xl text-muted-foreground mb-16 font-medium font-serif italic">Take the first step towards a geometric career expansion.</p>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              {!isUploaded ? (
                <div className="space-y-12">
                  <Magnetic strength={0.1}>
                    <div onClick={handleUploadClick} className="relative border-4 border-dashed border-border/50 hover:border-primary/50 rounded-[3rem] p-24 cursor-pointer transition-all duration-700 hover:bg-primary/5 group overflow-hidden bg-secondary/10 backdrop-blur-sm">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-500" />
                      <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                      {isUploading ? (
                        <div className="flex flex-col items-center gap-8">
                          <div className="w-24 h-24 rounded-full border-8 border-primary border-t-transparent animate-spin" />
                          <p className="text-2xl font-black text-primary italic uppercase tracking-widest">Transferring {fileName}...</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-8 relative z-10">
                          <div className="w-28 h-28 rounded-[2rem] bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-glow">
                            <Upload className="w-12 h-12 text-black" />
                          </div>
                          <div>
                            <p className="text-3xl font-black text-foreground mb-3 italic uppercase tracking-tighter">Deploy Your Resume</p>
                            <p className="text-xl text-muted-foreground font-medium font-serif italic">PDF, DOC, or DOCX (Max 10MB)</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <div className="inline-block">
                      <Button onClick={handleUploadClick} size="lg" className="px-20 py-10 rounded-full text-2xl font-black bg-primary text-black hover:bg-white shadow-2xl shadow-primary/40 uppercase tracking-widest" disabled={isUploading}>
                        <Upload className="w-6 h-6 mr-4" />
                        Upload CV
                      </Button>
                    </div>
                  </Magnetic>
                </div>
              ) : (
                <div className="space-y-12">
                  <div className="flex flex-col items-center gap-10 p-20 bg-primary/5 rounded-[3rem] border-2 border-primary/20 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse" />
                    <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase italic leading-none">Transmission <span className="text-primary not-italic">Confirmed</span></h3>
                    <p className="text-2xl text-muted-foreground max-w-2xl font-serif italic">Our analysts will review your profile shortly. Prepare for potential expansion.</p>
                    <p className="text-lg font-black text-primary/60 uppercase tracking-widest">Manifest: {fileName}</p>
                  </div>
                  <Button variant="ghost" onClick={resetUpload} className="text-muted-foreground font-black uppercase tracking-widest hover:text-white transition-colors">Abort & Replace</Button>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Job Openings / Contact */}
      <section className="py-48 bg-background/80 backdrop-blur-sm relative border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal direction="left">
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-foreground tracking-tight italic uppercase leading-none">Open <span className="text-primary not-italic">Channels</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-2xl text-muted-foreground mb-12 font-medium font-serif italic">Direct manifestations and tactical inquiries can be broadcasted via:</p>
            </Reveal>
            <Reveal delay={0.4}>
              <Magnetic strength={0.3}>
                <a href="mailto:nexagrowthsolution@gmail.com" className="group inline-flex items-center gap-6 text-3xl md:text-5xl font-black text-primary hover:text-foreground transition-all duration-500 tracking-tighter uppercase italic">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-10 h-10" />
                  </div>
                  nexagrowthsolution@gmail.com
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
