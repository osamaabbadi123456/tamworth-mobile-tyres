"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Clock3,
  MapPin,
  ShieldCheck,
  Wrench,
  Car,
  Gauge,
  Navigation,
  HelpCircle,
  Zap,
  Star,
  Mail,
  ArrowUp,
} from "lucide-react";

const phoneNumber = "+447737428534";
const whatsappNumber = "447737428534";
const emailAddress = "info@tamworthmobiletyres.co.uk";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20mobile%20tyre%20assistance%20in%20Tamworth.`;

const sliderImages = [
  "/images/slider/slide-1.jpeg",
  "/images/slider/slide-2.jpeg",
  "/images/slider/slide-3.jpeg",
  "/images/slider/slide-4.jpeg",
  "/images/slider/slide-5.jpeg",
  "/images/slider/slide-6.jpeg",
];

const miniSliderImages = [
  "/images/mini-slider/mini-1.jpeg",
  "/images/mini-slider/mini-2.jpeg",
  "/images/mini-slider/mini-3.jpeg",
  "/images/mini-slider/mini-4.jpeg",
  "/images/mini-slider/mini-5.jpeg",
  "/images/mini-slider/mini-6.jpeg",
  "/images/mini-slider/mini-7.jpeg",
  "/images/mini-slider/mini-8.jpeg",
  "/images/mini-slider/mini-9.jpeg",
  "/images/mini-slider/mini-10.jpeg",
  "/images/mini-slider/mini-11.jpeg",
];
const trustItems = [
  "30 Minute Response Time",
  "24/7 Emergency Mobile Tyres",
  "Fast Tamworth Response",
  "Roadside Tyre Assistance",
  "Mobile Tyre Fitting",
  "Puncture Repair",
  "WhatsApp Fast Booking",
  "We Come To You",
];

const services = [
  {
    icon: <Car />,
    title: "Emergency Tyre Replacement",
    text: "Fast mobile tyre replacement at your home, workplace or roadside location in Tamworth.",
  },
  {
    icon: <Wrench />,
    title: "Mobile Tyre Fitting",
    text: "We come to you with the tools needed to fit your tyres safely and quickly.",
  },
  {
    icon: <Gauge />,
    title: "Puncture Repair",
    text: "Quick puncture checks and repairs where safe, helping you get back on the road.",
  },
  {
    icon: <ShieldCheck />,
    title: "Roadside Assistance",
    text: "Stranded with a flat tyre? Call or WhatsApp and we’ll help at your location.",
  },
];

const faqs = [
  {
    q: "Do you offer 24/7 mobile tyre fitting in Tamworth?",
    a: "Yes, Tamworth Mobile Tyres provides emergency mobile tyre help across Tamworth including roadside, home and workplace call-outs.",
  },
  {
    q: "Can you come to my location?",
    a: "Yes. We come to your home, workplace, roadside location or wherever the vehicle is safely accessible.",
  },
  {
    q: "What details should I send on WhatsApp?",
    a: "Send your tyre size, vehicle model and Tamworth location for a fast response.",
  },
  {
    q: "Do you repair punctures or replace tyres?",
    a: "If the puncture is repairable safely we may repair it, otherwise a replacement tyre may be required.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Tamworth Town Centre, Wilnecote, Fazeley, Glascote, Amington, Dosthill, Two Gates, Bolehall, Polesworth, Atherstone, Lichfield and nearby areas.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1,
    );
  };

  return (
    <main className="bg-white text-slate-950 overflow-x-hidden">
      {/* TOP BRAND POSTER */}
      <section className="bg-[#FFFFFF] text-black">
        <header className="relative z-30 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
            <a href={`tel:${phoneNumber}`} className="block shrink-0">
              <img
                src="/images/tamworth-mobile-tyres-logo.png"
                alt="Tamworth Mobile Tyres"
                className="w-[180px] sm:w-[280px] h-auto object-contain"
              />
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="flex bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full px-3 sm:px-6 py-2.5 sm:py-3 items-center gap-1.5 sm:gap-2 font-black text-white shadow-xl shadow-red-600/25 animate-pulse text-xs sm:text-base shrink-0"
            >
              <Phone size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden md:inline">{phoneNumber}</span>
              <span className="md:hidden">Call</span>
            </a>
          </div>
        </header>

        <div className="bg-green-600 text-white text-center py-3 px-4 font-black text-sm sm:text-base shadow-md">
          Top Rated • Servicing Tamworth & All Surrounding Areas Within a 12
          Mile Radius
        </div>

        <div className="bg-white border-y border-gray-200 overflow-hidden py-3">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="flex w-max gap-4 px-4"
          >
            {[...miniSliderImages, ...miniSliderImages].map((img, index) => (
              <div
                key={`${img}-${index}`}
                className="w-28 h-32 sm:w-36 sm:h-40 rounded-2xl bg-white border border-gray-200 shadow-md overflow-hidden shrink-0"
              >
                <img
                  src={img}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-3">
          <a
            href={`tel:${phoneNumber}`}
            className="block w-full rounded-2xl bg-[#5B2C83] px-4 py-3 text-center shadow-xl shadow-blue-700/30 animate-pulse"
            style={{ animationDuration: "0.7s" }}
          >
            <span className="text-white text-sm sm:text-lg font-black uppercase tracking-wide">
              30 Minute Response Time
            </span>
          </a>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-3">
          <a
            href={`tel:${phoneNumber}`}
            className="block w-full rounded-full bg-[#5B2C83] px-5 py-3 shadow-xl shadow-blue-700/30 text-center animate-pulse"
            style={{ animationDuration: "0.7s" }}
          >
            <span className="text-white text-sm sm:text-lg font-black uppercase tracking-wide">
              The City’s Local Mobile Tyre Fleet
            </span>
          </a>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
              <motion.img
                src="/images/tamworth-poster.jpeg"
                alt="Tamworth Mobile Tyres 24/7 emergency tyre service"
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-auto block"
              />
            </div>
          </a>
        </div>
      </section>

      {/* HERO CONTENT */}
      <section className="relative bg-[#5B2C83] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.12),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(18,60,156,0.12),transparent_38%)]"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              <a
                href={`tel:${phoneNumber}`}
                className="w-full bg-white/10 border border-white/15 rounded-2xl px-4 py-4 flex items-center justify-center gap-3 text-green-400 font-black text-base sm:text-xl shadow-xl animate-pulse"
              >
                <Phone size={20} className="shrink-0" />
                <span className="truncate">{phoneNumber}</span>
              </a>

              <div className="w-full bg-red-600 rounded-2xl px-4 py-4 flex items-center justify-center gap-3 text-white font-black text-sm sm:text-lg uppercase shadow-xl shadow-red-600/25 animate-pulse text-center">
                <Clock3 size={20} className="shrink-0" />
                <span>30 Minute Response Time</span>
              </div>
            </div>

            <div className="inline-flex max-w-full items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-5 shadow-lg">
              <Clock3 size={16} className="text-red-500 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold truncate">
                24/7 Emergency Mobile Tyre Service
              </span>
            </div>

            <h1 className="text-[44px] sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.95] uppercase tracking-tight break-words">
              Tamworth
              <span className="block text-red-500">Mobile</span>
              <span className="block text-red-500">Tyres</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
              Emergency mobile tyre fitting in Tamworth. Fast roadside tyre
              replacement, puncture repair and mobile tyre assistance at your
              location.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500 shrink-0" size={21} />
                <span className="font-bold">Tamworth & nearby areas</span>
              </div>

              <div className="flex items-center gap-3">
                <Zap className="text-red-500 shrink-0" size={21} />
                <span className="font-bold">Fast mobile response</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-red-500 shrink-0" size={21} />
                <span className="font-bold">Roadside assistance</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-red-500 shrink-0" size={21} />
                <span className="font-bold">24/7 availability</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <a
                href={`tel:${phoneNumber}`}
                className="bg-red-600 hover:bg-red-700 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 rounded-xl px-6 py-5 flex items-center justify-center gap-3 font-black text-lg text-white shadow-2xl shadow-red-600/30"
              >
                <Phone size={23} />
                Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 rounded-xl px-6 py-5 flex items-center justify-center gap-3 font-black text-lg text-white shadow-2xl shadow-green-500/30"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  width={26}
                  height={26}
                />
                WhatsApp
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="border border-white/20 bg-white/10 hover:bg-white/15 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 rounded-xl px-6 py-5 flex items-center justify-center gap-3 font-black text-lg text-white backdrop-blur-md"
              >
                <Mail size={23} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL WIDTH SLIDER */}
      <section className="relative bg-white py-12 sm:py-16 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-3 sm:px-6">
          <div className="mb-8 max-w-7xl mx-auto rounded-2xl bg-[#5B2C83] text-white p-6 sm:p-8 shadow-2xl border border-slate-800">
            <p className="text-green-400 font-black uppercase text-sm mb-2 animate-pulse">
              30 Minute Response Time
            </p>

            <h2 className="text-3xl sm:text-5xl font-black uppercase leading-tight">
              Real mobile tyre help
              <span className="block text-red-500">across Tamworth</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed max-w-4xl">
              We come to your location for emergency tyre replacement, puncture
              repair and roadside mobile tyre fitting. Send your tyre size and
              Tamworth location on WhatsApp for a fast response.
            </p>
          </div>

          <div className="relative h-[360px] sm:h-[620px] lg:h-[780px] xl:h-[860px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-2xl bg-gray-100">
            {sliderImages.map((slide, index) => (
              <div
                key={slide}
                className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url('${slide}')` }}
              />
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 text-white text-4xl leading-none font-black hover:bg-red-600 transition"
              aria-label="Previous slide"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 text-white text-4xl leading-none font-black hover:bg-red-600 transition"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* MOVING BAR */}
      <section className="bg-[#5B2C83] text-white overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="flex w-max py-4"
        >
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-8 flex items-center gap-2 text-xs sm:text-sm font-black uppercase"
            >
              <Star size={16} className="text-red-400 fill-red-400" />
              {item}
            </div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-5 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-600 font-black uppercase text-sm mb-3">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-12">
            Every Tyre Service,
            <span className="block text-[#5B2C83]">At Your Location</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black mb-3">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-5 sm:px-6 bg-[#5B2C83] text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500 font-black uppercase text-sm mb-3">
            Simple Process
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-12">
            Back On The Road
            <span className="block text-red-500">In 4 Steps</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              [
                "01",
                "Call Or WhatsApp",
                "Tell us your tyre size and location.",
              ],
              ["02", "Send Location", "Share your Tamworth location with us."],
              ["03", "We Come To You", "A mobile tyre fitter is dispatched."],
              ["04", "Drive Away Safely", "Your tyre is fitted and checked."],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="relative rounded-2xl border border-white/10 bg-white/10 p-7 min-h-[190px] hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute right-6 top-4 text-7xl font-black text-white/10">
                  {num}
                </div>

                <div className="relative z-10 pt-16">
                  <h3 className="font-black text-lg mb-2 text-white">
                    {title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-20 px-5 sm:px-6 bg-white text-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-600 font-black uppercase text-sm mb-3">
              Local Coverage
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Mobile Tyre Fitting
              <span className="block text-[#5B2C83]">Across Tamworth</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Tamworth Mobile Tyres provides emergency mobile tyre fitting,
              puncture repair and roadside tyre replacement across Tamworth and
              nearby areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Tamworth Town Centre",
              "Wilnecote",
              "Fazeley",
              "Glascote",
              "Amington",
              "Dosthill",
              "Two Gates",
              "Bolehall",
              "Kettlebrook",
              "Polesworth",
              "Atherstone",
              "Lichfield",
            ].map((area) => (
              <div
                key={area}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-2 text-sm font-bold"
              >
                <Navigation size={16} className="text-red-600 shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-600 font-black uppercase text-sm mb-3">FAQs</p>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-10">
            Got Questions?
            <span className="block text-[#5B2C83]">We Can Help</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-black text-lg">
                  <span>{faq.q}</span>
                  <HelpCircle className="text-red-600 shrink-0 group-open:rotate-180 transition" />
                </summary>

                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* ABOUT US */}
      <section id="about-us" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-red-600 font-black uppercase tracking-[0.2em] text-sm mb-4">
              About Tamworth Mobile Tyres
            </p>

            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight text-slate-950 mb-6">
              Mobile Tyre Fitting Tamworth
              <span className="block text-[#5B2C83]">
                24 Hour Emergency Tyre Replacement
              </span>
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              If you are stranded with a puncture or damaged tyre, Tamworth
              Mobile Tyres can help quickly. We provide emergency mobile tyre
              fitting, roadside tyre replacement, puncture repair and tyre
              assistance throughout Tamworth and the surrounding West Midlands
              areas.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Whether you have a flat tyre at home, a puncture at work, a
              blowout on the motorway or need new tyres fitted urgently, our
              mobile tyre fitting service comes directly to your location. We
              save you time, stress and hassle by bringing professional tyre
              fitting to your home, workplace or roadside location.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our service covers cars, vans, SUVs, 4x4 vehicles and light
              commercial vehicles. We offer budget, mid-range and premium tyre
              options, helping Tamworth drivers get back on the road quickly and
              safely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              "Emergency tyre fitting Tamworth",
              "24 hour mobile tyre fitting",
              "Roadside tyre replacement",
              "Mobile puncture repair",
              "Flat tyre assistance",
              "Same day tyre fitting",
              "Locking wheel nut removal",
              "Mobile tyre replacement near me",
              "Out of hours tyre fitting Tamworth",
              "Home mobile tyre fitting",
              "Workplace tyre fitting",
              "Van mobile tyre fitting Tamworth",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5 font-black text-slate-800 flex items-center gap-3"
              >
                <Star
                  size={18}
                  className="text-red-600 fill-red-600 shrink-0"
                />
                {item}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-start">
            <div>
              <h3 className="text-3xl font-black uppercase text-slate-950 mb-5">
                Trusted Mobile Tyre Fitters In Tamworth
              </h3>

              <p className="text-slate-700 leading-relaxed mb-5">
                We aim to be one of Tamworth’s reliable mobile tyre fitting
                services, focused on speed, convenience and professional
                workmanship. Instead of waiting at a garage, our mobile tyre
                technicians come to your home, workplace, roadside location, car
                park or motorway breakdown location where safe and accessible.
              </p>

              <p className="text-slate-700 leading-relaxed mb-5">
                Our mobile tyre fitting vans are equipped to help with emergency
                tyre replacement, puncture repair, same day tyre fitting and
                roadside tyre assistance. If your tyre is repairable under
                safety standards, we may be able to repair it. If not, a
                replacement tyre may be required.
              </p>

              <h3 className="text-3xl font-black uppercase text-slate-950 mt-10 mb-5">
                24 Hour Emergency Tyre Fitting
              </h3>

              <p className="text-slate-700 leading-relaxed">
                A tyre emergency can happen at any time. That is why our service
                is built around urgent tyre call-outs across Tamworth. If your
                tyre blows out late at night, early in the morning or during a
                busy working day, call or WhatsApp for fast mobile tyre
                assistance.
              </p>
            </div>

            <div className="bg-[#5B2C83] text-white rounded-[2rem] p-8 shadow-2xl">
              <h3 className="text-3xl font-black uppercase mb-6">
                Areas We Cover
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Tamworth Town Centre",
                  "Wilnecote",
                  "Fazeley",
                  "Glascote",
                  "Amington",
                  "Dosthill",
                  "Two Gates",
                  "Bolehall",
                  "Kettlebrook",
                  "Coton Green",
                  "Hockley",
                  "Stonydelph",
                  "Belgrave",
                  "Gillway",
                  "Leyfields",
                  "Polesworth",
                  "Atherstone",
                  "Lichfield",
                  "Sutton Coldfield",
                  "Kingsbury",
                  "Dordon",
                  "Mile Oak",
                  "Hopwas",
                  "Elford",
                ].map((area) => (
                  <div
                    key={area}
                    className="bg-white/10 border border-white/10 rounded-xl p-3 text-sm font-bold"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Fast Response Times",
                text: "Rapid mobile tyre fitting throughout Tamworth and surrounding areas.",
              },
              {
                title: "24/7 Availability",
                text: "Emergency tyre fitting support available day and night.",
              },
              {
                title: "Professional Technicians",
                text: "Experienced mobile tyre fitters for cars, vans, SUVs and light commercial vehicles.",
              },
              {
                title: "Competitive Prices",
                text: "Affordable tyre fitting with clear service options.",
              },
              {
                title: "Convenience",
                text: "We come to your home, workplace or roadside location.",
              },
              {
                title: "Wide Tyre Options",
                text: "Budget, mid-range and premium tyres available depending on your needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="text-xl font-black text-slate-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-950 text-white rounded-[2rem] p-8 sm:p-10">
            <h3 className="text-3xl sm:text-4xl font-black uppercase mb-5">
              Book Mobile Tyre Fitting Tamworth Today
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              If you need emergency tyre fitting, same day tyres, mobile
              puncture repair, roadside tyre replacement, cheap tyres Tamworth,
              24 hour tyre fitting, home tyre fitting or workplace tyre fitting,
              Tamworth Mobile Tyres is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="bg-red-600 hover:bg-red-700 rounded-xl px-7 py-4 flex items-center justify-center gap-3 font-black transition"
              >
                <Phone size={21} />
                Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] rounded-xl px-7 py-4 flex items-center justify-center gap-3 font-black transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-6 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-5">
            Need Emergency Mobile Tyres In Tamworth?
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Call now or message us on WhatsApp for fast tyre help at your
            location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-[#5B2C83] text-white hover:bg-[#472267] hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 rounded-xl px-8 py-5 flex items-center justify-center gap-3 font-black text-lg shadow-xl"
            >
              <Phone size={23} />
              Call Now
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 rounded-xl px-8 py-5 flex items-center justify-center gap-3 font-black text-lg"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={26}
                height={26}
              />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#5B2C83] text-white px-5 sm:px-6 py-10 pb-24 md:pb-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <a href={`tel:${phoneNumber}`} className="block shrink-0">
            <img
              src="/images/tamworth-mobile-tyres-logo.png"
              alt="Tamworth Mobile Tyres"
              className="w-[260px] max-w-full h-auto object-contain"
            />
          </a>

          <div className="text-gray-300 text-sm leading-relaxed">
            <p className="font-black text-white mb-1">Tamworth Mobile Tyres</p>
            <p>24/7 emergency mobile tyre fitting across Tamworth.</p>
            <a href={`mailto:${emailAddress}`} className="text-white underline">
              {emailAddress}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-end gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-red-600 hover:bg-red-700 rounded-xl px-5 py-3 flex items-center justify-center gap-2 font-black transition"
            >
              <Phone size={18} />
              Call
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] rounded-xl px-5 py-3 flex items-center justify-center gap-2 font-black transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={22}
                height={22}
              />
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-red-600 text-white py-4 flex items-center justify-center gap-2 font-black animate-pulse"
        >
          <Phone size={20} />
          Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white py-4 flex items-center justify-center gap-2 font-black animate-pulse"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={22}
            height={22}
          />
          WhatsApp
        </a>
      </div>
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-5 z-[60] w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#5B2C83] text-white shadow-2xl flex items-center justify-center hover:bg-red-600 hover:-translate-y-1 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={34} className="sm:w-11 sm:h-11" />
        </button>
      )}
    </main>
  );
}
