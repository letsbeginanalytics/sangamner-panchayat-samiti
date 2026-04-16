// ─── Notices ──────────────────────────────────────────────────────────────────
import React, { useState } from 'react';
import { ContentPage } from './About';
import { Eye, Download } from 'lucide-react';
import function1 from '../images/function1.jpeg';
import function2 from '../images/function2.jpeg';
import function3 from '../images/function3.jpeg';
import function4 from '../images/function4.jpeg';
import function5 from '../images/function5.jpeg';
import function6 from '../images/function6.jpeg';

interface NoticeItem {
  title: string;
  heading?: string;        
  image?: string;          
  description: string;
  // startDate: string;
  // endDate: string;
  // pdfFile: string;
  // size?: string;
}

const KARYAKRAM_ITEMS: NoticeItem[] = [
  {
    title: "“हिंद दी चादर” जनजागृती कार्यक्रम",
    image: function1,
    description: "पंचायत समिती संगमनेर यांच्या वतीने “हिंद दी चादर” या संकल्पनेवर आधारित जनजागृती कार्यक्रमाचे आयोजन करण्यात आले. या कार्यक्रमात अधिकारी, कर्मचारी व स्थानिक नागरिकांनी उत्स्फूर्त सहभाग नोंदवला. या कार्यक्रमास मा.श्री.आनंद भंडारी साहेब व मा.श्री.प्रविण सिनारे साहेब उपस्थित होते.",
    // startDate: "01/05/2026",
    // endDate: "05/05/2026",
    // pdfFile: "HealthCamp.pdf",
    // size: "1.2 MB",
  },
  {
    title: "ग्रामपंचायत कासार दुमाला येथे सेंद्रिय खत (Vermi Compost) प्रकल्पाला भेट",
    image: function2,
    description: "ग्रामपंचायत कासार दुमाला येथे सेंद्रिय खत निर्मिती (Vermi Compost) प्रकल्पाला मा. मुख्य कार्यकारी अधिकारी मा.श्री.आनंद भंडारी साहेब व मा.श्री.प्रविण सिनारे साहेब यांनी भेट दिली.",
    // startDate: "10/06/2026",
    // endDate: "12/06/2026",
    // pdfFile: "AgricultureWorkshop.pdf",
    // size: "850 KB",
  },
  {
    title: "ग्रामपंचायत कासार दुमाला येथे संगणक कक्ष व कार्यालयीन कामकाजाचा आढावा",
    image: function3,
    description: "ग्रामपंचायत कासार दुमाला येथे संगणक कक्षाला भेट देऊन कार्यालयीन कामकाजाचा आढावा घेण्यात आला. यावेळी मा. मुख्य कार्यकारी अधिकारी मा.श्री.आनंद भंडारी व मा.श्री.प्रविण सिनारे साहेब यांनी उपस्थित अधिकारी व कर्मचाऱ्यांशी संवाद साधला.",
    // startDate: "20/07/2026",
    // endDate: "22/07/2026",
    // pdfFile: "WomenEmpowerment.pdf",
    // size: "950 KB",
  },
   {
    title: "मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत पाहणी – ग्रामपंचायत कासार दुमाला",
    image: function4,
    description: "ग्रामपंचायत कासार दुमाला, तालुका संगमनेर, जिल्हा अहिल्यानगर येथे मा.श्री.आनंद भंडारी व मा.श्री.प्रविण सिनारे साहेब यांनी भेट दिली.",
    // startDate: "20/07/2026",
    // endDate: "22/07/2026",
    // pdfFile: "WomenEmpowerment.pdf",
    // size: "950 KB",
  },
  {
    title: "मुख्यमंत्री समृद्ध पंचायत राज अभियान अंतर्गत पाहणी – ग्रामपंचायत धांदरफळ बु.",
    image: function5,
    description: "मुख्यमंत्री समृद्ध पंचायत राज अभियानाच्या अंमलबजावणी संदर्भात ग्रामपंचायत धांदरफळ बु. येथे गटविकास अधिकारी मा.श्री.प्रविण सिनारे साहेब यांनी भेट देऊन पाहणी व मार्गदर्शन केले. यावेळी ग्रामपंचायत अधिकारी, कर्मचारी व ग्रामस्थ उपस्थित होते.",
    // startDate: "20/07/2026",
    // endDate: "22/07/2026",
    // pdfFile: "WomenEmpowerment.pdf",
    // size: "950 KB",
  },
   {
    title: "ई-केवायसी व आरोग्य शिबिर – ग्रामपंचायत राजापूर",
    image: function6,
    description: "ग्रामपंचायत राजापूर येथे Anaemia Mukt Bharat व PMJAY ई-केवायसी शिबिर आयोजित करण्यात आले. या शिबिरास गटविकास अधिकारी मा.श्री.प्रविण सिनारे साहेब उपस्थित होते. मोठ्या प्रमाणात ग्रामस्थ लाभार्थी सहभागी झाले. एकूण ८२८ प्रलंबित लाभार्थ्यांपैकी १८२ जणांची ई-केवायसी पूर्ण करण्यात आली.",
    // startDate: "20/07/2026",
    // endDate: "22/07/2026",
    // pdfFile: "WomenEmpowerment.pdf",
    // size: "950 KB",
  },
];

const MAGIL_KARYAKRAM_ITEMS: NoticeItem[] = [
  // {
    // heading: "शिक्षण विभाग",
    // title: "मुलींच्या शिक्षणासाठी विशेष वर्ग – 2025",
    // image: "/images/girls-education.jpg",
    // description: "मुलींच्या शिक्षणाला प्रोत्साहन देण्यासाठी विशेष वर्गांचे आयोजन.",
    // startDate: "15/08/2025",
    // endDate: "15/12/2025",
    // pdfFile: "GirlsEducation.pdf",
    // size: "900 KB",
  // },
];

// ... (keep MAGIL_KARYAKRAM_ITEMS, GHOSHNA_ITEMS, BHARTI_ITEMS, NIVIDA_ITEMS as before)

// ─── Card grid for कार्यक्रम ────────────────────────────────────────────────
const KaryakramGrid = ({ items }: { items: NoticeItem[] }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 text-sm font-medium border border-gray-200 rounded-xl bg-gray-50">
        कोणताही कार्यक्रम उपलब्ध नाही.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Image */}
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover"
            />
          ) : (
            <div className="w-full h-44 bg-blue-50 flex items-center justify-center text-blue-300 text-xs">
              प्रतिमा उपलब्ध नाही
            </div>
          )}

          {/* Body */}
          <div className="p-4">
            {/* Heading (category label) */}
            {item.heading && (
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                {item.heading}
              </p>
            )}

            {/* Title */}
            <p className="text-sm font-bold text-gray-800 leading-snug mb-2">
              {item.title}
            </p>

            {/* Description */}
            {item.description && item.description !== item.title && (
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                {item.description}
              </p>
            )}

            {/* Dates */}
            {/* <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3 mb-3">
              <div>
                <span className="block text-gray-400">प्रारंभ</span>
                <span className="font-medium text-gray-600">{item.startDate}</span>
              </div>
              <div>
                <span className="block text-gray-400">समाप्ती</span>
                <span className="font-medium text-gray-600">{item.endDate}</span>
              </div>
            </div> */}

            {/* Actions */}
            
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Original table (for घोषणा, भरती, निविदा tabs) ────────────────────────
const NoticeTable = ({ items }: { items: NoticeItem[] }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 text-sm font-medium border border-gray-200 rounded-xl bg-gray-50">
        कोणतीही सूचना उपलब्ध नाही.
      </div>
    );
  }

  // return (
  //   <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
  //     <div className="grid grid-cols-[1fr_auto_auto_auto_auto] bg-blue-900 text-white px-4 py-3 gap-4">
  //       <span className="text-sm font-bold">शीर्षक</span>
  //       <span className="text-sm font-bold text-center whitespace-nowrap">प्रारंभ तारीख</span>
  //       <span className="text-sm font-bold text-center whitespace-nowrap">समाप्ती तारीख</span>
  //       <span className="text-sm font-bold text-center whitespace-nowrap">पहा</span>
  //       <span className="text-sm font-bold text-center whitespace-nowrap">डाउनलोड</span>
  //     </div>
  //     {items.map((item, i) => (
  //       <div
  //         key={i}
  //         className={`grid grid-cols-[1fr_auto_auto_auto_auto] px-4 py-3 gap-4 items-start border-b border-gray-100 ${
  //           i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
  //         } hover:bg-blue-50 transition-colors`}
  //       >
  //         <div>
  //           <p className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</p>
  //           {item.description && item.description !== item.title && (
  //             <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
  //           )}
  //         </div>
  //         <span className="text-sm text-gray-600 whitespace-nowrap text-center pt-0.5">{item.startDate}</span>
  //         <span className="text-sm text-gray-600 whitespace-nowrap text-center pt-0.5">{item.endDate}</span>
          
  //           href={`/pdfs/${item.pdfFile}`}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium whitespace-nowrap justify-center pt-0.5"
  //         >
  //           पहा{item.size ? ` (${item.size})` : ''} <Eye size={14} />
  //         </a>
          
  //           href={`/pdfs/${item.pdfFile}`}
  //           download={item.pdfFile}
  //           className="text-blue-600 hover:text-blue-800 flex justify-center pt-0.5"
  //           title="डाउनलोड करा"
  //         >
  //           <Download size={16} />
  //         </a>
  //       </div>
  //     ))}
  //   </div>
  // );
};

// ─── Tab config ─────────────────────────────────────────────────────────────
const NOTICE_TABS = [
  { label: "कार्यक्रम",       items: KARYAKRAM_ITEMS,       layout: "cards" },
  { label: "मागील कार्यक्रम", items: MAGIL_KARYAKRAM_ITEMS, layout: "cards" },
  // { label: "घोषणा (सामान्य)", items: GHOSHNA_ITEMS,         layout: "table" },
  // { label: "भरती",            items: BHARTI_ITEMS,           layout: "table" },
  // { label: "निविदा",          items: NIVIDA_ITEMS,           layout: "table" },
];

export const Notices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = NOTICE_TABS[activeTab];

  return (
    <ContentPage title="सूचना">
      <div className="flex flex-wrap gap-2 mb-6">
        {NOTICE_TABS.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
              activeTab === idx
                ? 'bg-blue-900 text-white border-blue-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-900 hover:text-blue-900'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab.layout === "cards"
        ? <KaryakramGrid items={tab.items} />
        : <NoticeTable items={tab.items} />
      }
    </ContentPage>
  );
};