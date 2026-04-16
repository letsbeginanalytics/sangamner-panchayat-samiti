import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, FileText, Users, Info, ExternalLink, Phone, ShieldAlert, HeartPulse, Flame, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';
import bdoImage from '../images/bdo.jpeg';
import qr1 from '../images/qr1.png';
import qr2 from '../images/qr2.png';
import qr3 from '../images/qr3.png';
import image from '../images/image.jpeg';
import khandgoanImage from '../images/khangoan.jpeg';
import rameshwer from '../images/rameshwer.jpeg';

import marutitemple from '../images/marutitemple.png';

interface GpInfoType {
  GPNAME?: string;
  VILLAGE?: string;
  TALUKA?: string;
  DISTRICT?: string;
  STATE?: string;
}

interface HomeProps {
  gpInfo?: GpInfoType;
}

export const notices = [
  {
    id: 1,
    date: "१५",
    month: "मार्च",
    title: "शासनाच्या ३० विभागांची अधिसूचित सेवांची माहिती मिळवण्यासाठी",
    published: "१५ मार्च २०२४",
    category: "घोषणा",
    pdf: "/pdfs/notice1.pdf",
    image: qr1,
  },
  {
    id: 1,
    date: "१५",
    month: "मार्च",
    title: "आपली तक्रार नोंदविण्यासाठी खालील QR कोड स्कॅन करा",
    published: "१५ मार्च २०२४",
    category: "घोषणा",
    pdf: "/pdfs/notice1.pdf",
    image: qr2,
  },
  {
    id: 1,
    date: "१५",
    month: "मार्च",
    title: "दाखला मागणी करण्यासाठी खालील QR कोड स्कॅन करा",
    published: "१५ मार्च २०२४",
    category: "घोषणा",
    pdf: "/pdfs/notice1.pdf",
    image: qr3,
  }
];

const STATIC_LEADERS = [
  { name: "मा.श्री. देवेंद्र फडणवीस", role: "मुख्यमंत्री, महाराष्ट्र राज्य", image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241226554268834.png" },
  { name: "मा.श्री. एकनाथ शिंदे", role: "उपमुख्यमंत्री, महाराष्ट्र राज्य", image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241210519881483.jpeg" },
  { name: "मा.श्रीमती. सुनेत्रा अजित पवार", role: "उपमुख्यमंत्री, महाराष्ट्र राज्य", image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2026/02/2026020373151347.jpg" },
  { name: "मा.श्री. राधाकृष्ण विखे पाटील", role: "पालकमंत्री, अहिल्यानगर", image: "https://th.bing.com/th/id/OIP.PtWLJfggaxIYbKDoXBtlnwHaEK?w=264&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { name: "मा.श्री. जयकुमार गोरे", role: "मंत्री, ग्रामविकास व पंचायतराज विभाग", image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241226862517803.png" },
  { name: "मा.श्री. योगेश कदम", role: "राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग", image: "https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/08/20250821253170636.png" },
  { name: "मा.श्री. एकनाथ डवले", role: "प्रधान सचिव, ग्रामविकास विभाग", image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/202412261951170016.png" },
  { name: "मा.श्री.आनंद भंडारी ( भा.प्र.से )", role: "मुख्य कार्यकारी अधिकारी, जिल्हा परिषद अहिल्यानगर", image: "https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/07/20250728469510874.jpg" },
  { name: "मा.श्री. विजय मुळीक", role: "अतिरिक्त मुख्य कार्यकारी अधिकारी , जिल्हा परिषद अहिल्यानगर", image: "https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/08/20250801671286796.jpg" },
  { name: "मा.श्री. प्रविण अण्णासाहेब सिनारे", role: "गट विकास अधिकारी (उ.श्रे.), पंचायत समिती संगमनेर", image: bdoImage },
];

const bannerSlides = [
  {
    image: image,
    title: "माझी वसुंधरा अभियान",
    subtitle: "पर्यावरण संवर्धनासाठी उत्कृष्ट योगदान देणाऱ्यांचा सन्मान",
  },
  {
    image: "https://explorexp.com/wp-content/uploads/2025/07/217-Sangamner.svg_-1024x822.webp",
    title: "संगमनेर तालुक्याचा सविस्तर नकाशा",
    subtitle: "तालुक्यातील सर्व गावांचे स्थान दर्शविणारा नकाशा",
  },
  {
    image: khandgoanImage,
    title: "खांडगाव, संगमनेर",
    subtitle: "निसर्गरम्य ग्रामीण परिसर",
  },
  {
    image: rameshwer,
    title: "श्री रामेश्वर मंदिर, धांदरफळ",
    subtitle: "प्राचीन धार्मिक वारसा",
  },
  {
    image: marutitemple,
    title: "मारुती मंदिर, पेमगिरी",
    subtitle: "आस्था व श्रद्धेचे केंद्र",
  },
  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweovkYnfpUQQc67NzcgGICruJ1vcUSIdspdQjY8pDbXRY77-YyhIQRDmGi803e5pjKdZxM1pWevt4apvNTIq4B_HO3qzuRqgJMmNA9jcAJM2ZeLlaz_992RInhRQp26_ZacNrjc=w1920-h1080",
    title: "चंदनापुरी घाट, संगमनेर",
    subtitle: "सुंदर घाट व निसर्ग दृश्य",
  },

  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomZu5B6j_kpLkedIWENb7gkR85n9jy69Xq5Hfmk4qMeipGyZsuM8Erzf8-ZTGURL5dppoBCS9lMjuFhRUnbFThgPx9tITVmVGwLgAgEqw5bheHCRVzSmP_Njmso8n5Ouo9IKy3YA=w1920-h1080",
    title: "वटवृक्ष, पेमगिरी",
    subtitle: "ऐतिहासिक व विशाल वडाचे झाड",
  },
];

const emergencyNumbers = [
  { name: "पोलीस", number: "100", icon: <ShieldAlert className="text-blue-600" size={22} /> },
  { name: "रुग्णवाहिका", number: "108", icon: <HeartPulse className="text-red-600" size={22} /> },
  { name: "अग्निशमन दल", number: "101", icon: <Flame className="text-orange-600" size={22} /> },
  { name: "महिला हेल्पलाइन", number: "1091", icon: <Siren className="text-purple-600" size={22} /> },
  { name: "बाल हेल्पलाइन", number: "1098", icon: <Phone className="text-green-600" size={22} /> },
  { name: "आपत्कालीन सेवा", number: "112", icon: <ExternalLink className="text-gray-600" size={22} /> },
];

export const Home: React.FC<HomeProps> = ({ gpInfo }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      <section className="flex justify-center mt-10">
        <div className="relative w-[100%] md:w-[80%] h-[350px] md:h-[450px] overflow-hidden rounded-[50px] md:rounded-[80px] shadow-lg bg-gray-100">

          {bannerSlides.map((slide, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-1000 flex items-center justify-center bg-gray-100"
              style={{ opacity: idx === currentSlide ? 1 : 0 }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-blue-gov/70 to-transparent flex items-center px-4">
            <div className="container mx-auto">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white max-w-2xl"
              >
                {/* <h2 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">
                पंचायत समिती{gpInfo?.TALUKA ? ` ${gpInfo.TALUKA}` : " संगमनेर"} मध्ये आपले स्वागत आहे
              </h2> */}
                <p className="text-xl font-semibold text-orange-500 mb-2">
                  {bannerSlides[currentSlide].title}
                </p>
                <div className="h-1 w-24 bg-orange-gov mb-4" />
                <p className="text-lg text-orange-500">
                  {bannerSlides[currentSlide].subtitle}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {bannerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide
                  ? "bg-orange-gov scale-125"
                  : "bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {STATIC_LEADERS.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="p-0.5 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-green-600 shadow-lg">
                  <div className="p-0.5 rounded-full bg-white">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-20 h-20 object-cover rounded-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          `https://via.placeholder.com/80x80?text=${encodeURIComponent(leader.name.charAt(0))}`;
                      }}
                    />
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-800 text-center leading-tight">{leader.name}</p>
                <span className="text-center text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-0.5 rounded-full leading-tight">
                  {leader.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
        {/* <div className="bg-blue-gov text-white px-6 py-3 flex justify-between items-center">
          <h3 className="font-bold flex items-center gap-2 text-sm">
            <Bell size={18} /> सूचना
          </h3>
        </div> */}
        <div className="p-2">
          <div className="h-full overflow-y-auto custom-scrollbar grid grid-cols-1 md:grid-cols-3 gap-3">
            {notices.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-start p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {/* <div className="bg-orange-gov/10 text-orange-gov px-3 py-1 rounded text-center min-w-[65px] border border-orange-gov/20">
                        <span className="block text-lg font-bold leading-none">{item.date}</span>
                        <span className="text-[10px] font-bold uppercase">{item.month}</span>
                      </div> */}
                <div className="flex-1 w-15pc h-15pc">
                  {item.image && (
                    <img
                      src={item.image}
                      // alt={item.title}
                      className="w-[25pc] h-[18pc] object-contain rounded-xl mb-3 border border-gray-200 shadow-lg"
                    />
                  )}
                  <h4 className="text-[12px] font-bold text-center text-gray-800 group-hover:text-blue-gov">
                    {item.title}
                  </h4>
                  {/* <p className="text-[11px] text-gray-500 mt-1 font-bold">
                          प्रकाशित दिनांक: {item.published} | श्रेणी: {item.category}
                        </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 shadow-sm rounded border border-gray-200 mt-10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">

          <div className="lg:col-span-8 space-y-8">

            {/* Notices */}
            <div className="bg-blue-gov rounded shadow-sm p-6 text-white">
              <h3 className="text-md font-bold mb-4 border-b border-white/20 pb-2">
                आमच्याशी संपर्क साधा
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Phone size={18} className="text-orange-gov shrink-0" />
                  <p>02425-272798</p>
                </div>
                <div className="flex gap-3">
                  <Bell size={18} className="text-orange-gov shrink-0" />
                  <p>bdosangamner@rediffmail.com</p>
                </div>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://maps.google.com/maps?q=19.5744681,74.2201134&output=embed"
                  width="100%"
                  height="250"
                  className="rounded border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>


          </div>

          <div className="lg:col-span-4 space-y-6">

            <div className="bg-white rounded shadow-sm border border-gray-200 p-3">
              <h3 className="text-sm font-bold mb-1 text-blue-gov border-l-4 border-orange-gov pl-3">
                महत्वाचे दुवे
              </h3>
              <div className="space-y-0.5">
                {[
                  { name: 'महाराष्ट्र शासन', url: 'https://www.maharashtra.gov.in' },
                  { name: 'जिल्हा परिषद अहिल्यानगर', url: 'https://nagarzp.gov.in/' },
                  { name: 'आपले सरकार पोर्टल', url: 'https://aaplesarkar.mahaonline.gov.in' },
                  { name: 'डिजिटल इंडिया', url: 'https://www.digitalindia.gov.in' },
                  { name: 'महा-भूलेख', url: 'https://mahabhulekh.maharashtra.gov.in' },
                  { name: 'दिव्यांग पोर्टल', url: 'https://divyangsahayak.maharashtra.gov.in/' },
                  { name: 'उमेद पोर्टल', url: 'https://www.umed.in/' },
                  { name: 'VBG-RAM-G (MGNREGA)', url: "https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx" },

                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100 hover:bg-orange-gov hover:text-orange-500 transition-all group"
                  >
                    <span className="text-sm font-medium">{link.name}</span>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>


          </div>

        </div>
      </section>
      <div className="bg-white rounded shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold mb-6 text-blue-gov border-b border-orange-gov/20 pb-2 flex items-center gap-2">
          <ShieldAlert size={20} className="text-orange-gov" />
          आपत्कालीन संपर्क (Emergency Numbers)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {emergencyNumbers.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-50 rounded border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-2">{item.icon}</div>
              <span className="text-xs font-bold text-gray-600 mb-1">{item.name}</span>
              <span className="text-xl font-black text-blue-gov">{item.number}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="py-16 bg-white shadow-sm border border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 shadow-sm border border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-bold text-center mb-12 text-blue-gov mt-3">महत्वाच्या सेवा</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'योजना', icon: <FileText className="text-orange-gov" />, path: '/schemes/state' },
              { name: 'निर्देशिका', icon: <Users className="text-blue-gov" />, path: '/directory' },
              { name: 'नागरी सेवा', icon: <Info className="text-orange-gov" />, path: '/citizens/services' },
              { name: 'कागदपत्रे', icon: <FileText className="text-blue-gov" />, path: '/documents' },
            ].map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="p-8 bg-gray-50 rounded border border-gray-100 hover:border-orange-gov transition-all group text-center"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform text-3xl">
                  {service.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-sm">{service.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;