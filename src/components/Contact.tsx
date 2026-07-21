import { useState, useRef, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send, CheckCircle, MessageSquare, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const { toast } = useToast();

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-contact inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-contact", {
        y: 50,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
        }
      });
    }

    // Animation for form elements
    gsap.from(".form-element", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".form-container",
        start: "top 85%",
      }
    });
  }, { scope: sectionRef });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData as unknown as Record<string, unknown>, // Cast to satisfy library type requirements if needed
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: "✅ Protocol Executed",
        description: "Your message has been sent successfully."
      });

      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);

    } catch (err) {
      console.error("EmailJS Error:", err);
      const errorMessage = "Failed to send message. Please try again.";
      setError(errorMessage);
      toast({
        title: "❌ Transmission Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSectionWrapper ref={sectionRef} id="contact" className="py-32 hero-antigravity">
      {/* Premium Background Orbs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto items-center">
          {/* Left Side - Headline and Info */}
          <div>
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-black text-sm mb-10 border border-primary/20 backdrop-blur-md uppercase tracking-[0.2em]">
                Communications Center
              </div>
            </Reveal>

            <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-8 text-foreground leading-[0.85] tracking-tighter uppercase italic text-center lg:text-left">
              Connect
            </h2>
            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg font-medium font-serif italic leading-relaxed">
                Direct engagement protocols are active. Broadcast your requirements and prepare for structural expansion.
              </p>
            </Reveal>

            {/* Contact Info Cards */}
            <div className="space-y-4 max-w-sm">
              <Reveal direction="left" delay={0.6}>
                <Magnetic strength={0.1}>
                  <a href="mailto:nexagrowthsolution@gmail.com" className="block w-full">
                    <div className="rounded-[1.5rem] p-4 md:p-6 border border-border/30 bg-secondary/20 backdrop-blur-xl shadow-xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute -right-2 -top-2 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                          <Mail className="text-black" size={20} />
                        </div>
                        <div>
                          <h4 className="font-black text-foreground uppercase tracking-widest text-[10px] mb-1">Secure Email</h4>
                          <span className="text-sm md:text-base font-bold tracking-tight">nexagrowthsolution@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Magnetic>
              </Reveal>

              <Reveal direction="left" delay={0.75}>
                <Magnetic strength={0.1}>
                  <a href="tel:+923711633762" className="block w-full">
                    <div className="rounded-[1.5rem] p-4 md:p-6 border border-border/30 bg-secondary/20 backdrop-blur-xl shadow-xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute -right-2 -top-2 w-16 h-16 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500" />
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-glow">
                          <Phone className="text-black" size={20} />
                        </div>
                        <div>
                          <h4 className="font-black text-foreground uppercase tracking-widest text-[10px] mb-1">Direct Line</h4>
                          <span className="text-sm md:text-base font-bold tracking-tight">+92 371 1633762</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Magnetic>
              </Reveal>

              <Reveal direction="up" delay={0.9}>
                <div className="rounded-[1.5rem] p-4 md:p-6 bg-gradient-to-r from-primary to-emerald-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.3)] border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/10 flex items-center justify-center animate-pulse">
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black font-display uppercase italic tracking-tighter leading-none">24×7 Active</h3>
                      <p className="text-xs md:text-sm font-bold opacity-70 uppercase tracking-widest">Global Responsiveness</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Social Connect */}
            <Reveal direction="up" delay={1.0}>
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/nexa-growth-solutions/', name: 'LinkedIn' },
                  { icon: Instagram, url: 'https://www.instagram.com/nexagrowthsolution/', name: 'Instagram' },
                  { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61587721904101', name: 'Facebook' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Magnetic key={social.name} strength={0.2}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl border border-white/10 hover:bg-primary hover:border-primary transition-all duration-500"
                      >
                        <Icon className="text-white group-hover:text-black transition-colors" size={16} />
                      </a>
                    </Magnetic>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right Side - Form Card */}
          <div className="relative">
            <Reveal direction="up" delay={0.3}>
              <TiltCard className="w-full form-container">
                <div className="relative rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 border border-white/5 bg-zinc-950/80 backdrop-blur-md shadow-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-2 form-element">
                      <label htmlFor="from_name" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Full Name</label>
                      <Input
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 md:h-14 rounded-2xl border-white/5 bg-white/5 backdrop-blur-md focus:border-primary focus:ring-0 focus:bg-white/10 transition-all text-base md:text-lg font-bold placeholder:text-white/20 px-6"
                      />
                    </div>

                    <div className="space-y-2 form-element">
                      <label htmlFor="from_email" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Email Address</label>
                      <Input
                        id="from_email"
                        name="from_email"
                        type="email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 md:h-14 rounded-2xl border-white/5 bg-white/5 backdrop-blur-md focus:border-primary focus:ring-0 focus:bg-white/10 transition-all text-base md:text-lg font-bold placeholder:text-white/20 px-6"
                      />
                    </div>

                    <div className="space-y-2 form-element">
                      <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={3}
                        required
                        className="rounded-[1.5rem] md:rounded-[2rem] border-white/5 bg-white/5 backdrop-blur-md focus:border-primary focus:ring-0 focus:bg-white/10 transition-all text-base md:text-lg font-bold placeholder:text-white/20 p-6 resize-none"
                      />
                    </div>

                    <Magnetic strength={0.1}>
                      <div className="pt-4 form-element">
                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 md:h-16 rounded-full text-lg md:text-xl font-black group shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all bg-primary text-black hover:bg-white uppercase italic tracking-tighter">
                          <div className="flex items-center justify-center gap-3">
                            {isSuccess ? (
                              <>
                                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 animate-pulse" />
                                Sent Successfully
                              </>
                            ) : isSubmitting ? (
                              <>
                                <div className="w-5 h-5 md:w-6 md:h-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                              </>
                            )}
                          </div>
                        </Button>
                      </div>
                    </Magnetic>

                    {error && (
                      <p className="text-red-500 text-center font-bold mt-4">{error}</p>
                    )}
                  </form>
                </div>
              </TiltCard>
            </Reveal>

            {/* Visual Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none" />
          </div>
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};
