import React, { useState } from 'react';
import { ContentPage } from './About';
import { ChevronDown, ChevronUp, Users } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Officer {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

interface Department {
  title: string;
  officers: Officer[];
}

// ─── Department Data ──────────────────────────────────────────────────────────
const DEPARTMENTS: Department[] = [
  // {
  //   title: "जिल्हा ग्रामीण विकास यंत्रणा",
  //   officers: [
  //     { name: "श्री. अ. ब. पाटील",      designation: "प्रकल्प संचालक",         email: "drda.ahilyanagar@maharashtra.gov.in", phone: "0241-2355210" },
  //   ],
  // },
  // {
  //   title: "सामान्य प्रशासन विभाग",
  //   officers: [
  //     { name: "श्री. अ. ब. देशमुख",     designation: "विभागीय अधिकारी",        email: "ga.sangamner@maharashtra.gov.in",     phone: "0241-2355211" },
  //   ],
  // },
  // {
  //   title: "अर्थ विभाग",
  //   officers: [
  //     { name: "श्री. र. स. कुलकर्णी",   designation: "लेखाधिकारी",             email: "finance.sangamner@maharashtra.gov.in", phone: "0241-2355212" },
  //   ],
  // },
  // {
  //   title: "ग्रामपंचायत विभाग",
  //   officers: [
  //     { name: "श्री. म. ग. शिंदे",       designation: "विभागीय अधिकारी",        email: "gp.sangamner@maharashtra.gov.in",     phone: "0241-2355213" },
  //   ],
  // },
  // {
  //   title: "महिला व बालकल्याण विभाग",
  //   officers: [
  //     { name: "श्री. निलेश गोवर्धनराव राऊत", designation: "बाल विकास प्रकल्प अधिकारी, एकात्मिक बाल विकास सेवा योजना प्रकल्प संगमनेर / घारगाव-१ / घारगाव-२", email: "cdposangamner@gmail.com", phone: "0241-2355214" },
  //   ],
  // },
  // {
  //   title: "म.गांधी ग्रामीण रो.ह.यो. (मनरेगा)",
  //   officers: [
  //     { name: "श्री. अ. ब. जाधव",       designation: "कार्यक्रम अधिकारी",      email: "mnrega.sangamner@maharashtra.gov.in", phone: "0241-2355215" },
  //   ],
  // },
  // {
  //   title: "पशुसंवर्धन विभाग",
  //   officers: [
  //     { name: "डॉ. पुंडलिक दादाभाऊ येळे", designation: "पशुधन विकास अधिकारी (विस्तार), पशुसंवर्धन विभाग", email: "ldio.ex.sangamner@gmail.com", phone: "0241-2355216" },
  //   ],
  // },
  // {
  //   title: "कृषि विभाग",
  //   officers: [
  //     { name: "श्री. ग. ह. पवार",        designation: "तालुका कृषि अधिकारी",   email: "agri.sangamner@maharashtra.gov.in",   phone: "0241-2355217" },
  //   ],
  // },
  // {
  //   title: "समाज कल्याण विभाग",
  //   officers: [
  //     { name: "श्री. बा. रा. मोरे",      designation: "समाज कल्याण अधिकारी",   email: "sw.sangamner@maharashtra.gov.in",     phone: "0241-2355218" },
  //   ],
  // },
  {
    title: "पंचायत समिती संगमनेर",
    officers: [
      {
        name: "श्री. प्रविण अण्णासाहेब सिनारे",
        designation: "गट विकास अधिकारी (उ.श्रे.)",
        email: "bdosangamner@rediffmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. राजेंद्र रविंद्रनाथ ठाकूर",
        designation: "सहायक गट विकास अधिकारी",
        email: "bdosangamner@rediffmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. हेमंत मुरलीधर चव्हाण",
        designation: "उप अभियंता, जि.प. सार्वजनिक बांधकाम उप विभाग",
        email: "sangamzppwsd2014@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. तेजस दामु बगोडे",
        designation: "उप अभियंता, जि.प. ग्रामीण पाणी पुरवठा विभाग",
        email: "rwssangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. पंडोरे विनायक भाऊसाहेब",
        designation: "उप विभागीय जलसंधारण अधिकारी, जि.प. लघु पाटबंधारे विभाग",
        email: "roi.sangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. निलेश गोरक्षनाथ राऊत",
        designation: "बाल विकास प्रकल्प अधिकारी, एकात्मिक बाल विकास सेवा योजना - संगमनेर / घारगाव-१ / घारगाव-२",
        email: "cdposangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "डॉ. कामेश कृष्णाजी टावरे",
        designation: "तालुका आरोग्य अधिकारी, आरोग्य विभाग",
        email: "thiosangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "डॉ. पुंडलिक दादाभाऊ येवले",
        designation: "पशुधन विकास अधिकारी (विस्तार), पशुसंवर्धन विभाग",
        email: "ldio.ex.sangamner@gmail.com",
        phone: "02425-272798",
      },
      ,
      {
        name: "श्री. वाळीबा नाथु उघडे ",
        designation: "कृषि अधिकारी (सामान्य)",
        email: "bdosangamner@rediffmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. बाळासाहेब हरीभाऊ गुंड",
        designation: "गटशिक्षणाधिकारी",
        email: "ssasangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्रीमती. भाग्यश्री नरहरी शेळके",
        designation: "विस्तार अधिकारी सांख्यिकी तथा कक्ष प्रमुख घरकुल विभाग",
        email: "ssasangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. राजेंद्र कासार",
        designation: "विस्तार अधिकारी पंचायत तथा कक्ष प्रमुख(स्वच्छ भारत मिशन)",
        email: "ssasangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. निलेश पोपटराव कोकाटे ",
        designation: "तालुका अभियान व्यवस्थापक(उमेद)",
        email: "ssasangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. मदन उत्तमराव शेवाळे",
        designation: "विस्तार अधिकारी कक्ष प्रमुख(नरेगा)",
        email: "ssasangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. संजय रंगनाथ अरगडे",
        designation: "वरिष्ठ सहाय्यक(टंचाई)",
        email: "ssasangamner@gmail.com",
        phone: "02425-272798",
      },
      {
        name: "श्री. प्रदीप बेळे",
        designation: "तालुका व्यवस्थापक(राष्ट्रीय ग्राम स्वराज व आपले सरकार केंद्र)",
        email: "ssasangamner@gmail.com",
        phone: "02425-272798",
      }
    ],
  },
];

// ─── Single Department Table ──────────────────────────────────────────────────
const DeptTable: React.FC<{ dept: Department; defaultOpen?: boolean }> = ({
  dept,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header / Toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3 bg-white hover:bg-gray-50 border-b border-gray-200 transition-colors text-left"
      >
        <span className="flex items-center gap-2 font-bold text-sm text-gray-800">
          <Users size={16} className="text-gray-500 shrink-0" />
          {dept.title}
          <span className="ml-1 text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {dept.officers.length} अधिकारी
          </span>
        </span>
        {open
          ? <ChevronUp size={18} className="text-gray-400 shrink-0" />
          : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
      </button>

      {/* Table */}
      {open && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-3 text-left font-semibold text-gray-600 w-8">अ.क्र.</th>
                <th className="p-3 text-left font-semibold text-gray-600">नाव</th>
                <th className="p-3 text-left font-semibold text-gray-600">पदनाम</th>
                <th className="p-3 text-left font-semibold text-gray-600">ईमेल</th>
                <th className="p-3 text-left font-semibold text-gray-600">लँडलाइन क्रमांक</th>
              </tr>
            </thead>
            <tbody>
              {dept.officers.map((o, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-blue-50 transition-colors`}
                >
                  <td className="p-3 text-gray-400 font-medium">{i + 1}</td>
                  <td className="p-3 font-semibold text-gray-800 whitespace-nowrap">{o.name}</td>
                  <td className="p-3 text-gray-700 leading-snug">{o.designation}</td>
                  <td className="p-3">
                    <a
                      href={`mailto:${o.email}`}
                      className="text-blue-600 hover:underline break-all"
                    >
                      {o.email}
                    </a>
                  </td>
                  <td className="p-3 text-gray-700 whitespace-nowrap">{o.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// ─── Directory Component ──────────────────────────────────────────────────────
export const Directory = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = DEPARTMENTS.map((dept) => ({
    ...dept,
    officers: dept.officers.filter(
      (o) =>
        o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.email.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((dept) => dept.officers.length > 0 || searchQuery === '');

  return (
    <ContentPage title="निर्देशिका">

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="नाव, पदनाम किंवा ईमेल शोधा..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>

      {/* Summary chips */}
      {/* <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-blue-900 text-white text-xs font-bold rounded-full">
          एकूण विभाग
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
          एकूण अधिकारी
        </span>
      </div> */}

      {/* Department Tables */}
      <div className="space-y-4">
        {filtered.map((dept, idx) => (
          <DeptTable
            key={dept.title}
            dept={dept}
            defaultOpen={idx === filtered.length - 1} /* पंचायत समिती default open */
          />
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">कोणताही अधिकारी सापडला नाही.</p>
          </div>
        )}
      </div>
    </ContentPage>
  );
};

export default Directory;