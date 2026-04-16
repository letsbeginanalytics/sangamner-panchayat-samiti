import React, { useState } from 'react';
import { ContentPage } from './About';
import { ExternalLink, Download, X, Calendar, MapPin, Gift, FileText, Globe, ChevronRight, Eye } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Scheme {
  id: number;
  name: string;
  date: string;
  area: string;
  benefit: string;
  howToApply: string;
  website: string;
  pdfFile: string;
  pdfLabel: string;
}



// ─── State Schemes Data ───────────────────────────────────────────────────────
const STATE_SCHEMES: Scheme[] = [
  {
    id: 1,
    name: "मुख्यमंत्री लाडकी बहीण योजना",
    date: "२०२४-०२-०१",
    area: "महाराष्ट्र राज्य",
    benefit: "दरमहा ₹१५०० आर्थिक सहाय्य महिलांना थेट बँक खात्यात मिळते.",
    howToApply: "जवळच्या ग्रामपंचायत / सेतू केंद्रात जाऊन अर्ज करावा किंवा आपले सरकार पोर्टलवर ऑनलाईन अर्ज करावा.",
    website: "https://aaplesarkar.mahaonline.gov.in",
    pdfFile: "LadkiBahin.pdf",
    pdfLabel: "LadkiBahin.pdf",
  },
  {
    id: 2,
    name: "मुख्यमंत्री सौर कृषी पंप योजना",
    date: "२०२४-०१-१०",
    area: "महाराष्ट्र राज्य",
    benefit: "शेतकऱ्यांना अनुदानावर सौर कृषी पंप उपलब्ध करून देणे.",
    howToApply: "महावितरण कार्यालय किंवा आपले सरकार पोर्टलवर अर्ज करावा.",
    website: "https://aaplesarkar.mahaonline.gov.in",
    pdfFile: "SolarPump.pdf",
    pdfLabel: "SolarPump.pdf",
  },
];

// ─── Central Schemes Data ─────────────────────────────────────────────────────
const CENTRAL_SCHEMES: Scheme[] = [
  {
    id: 1,
    name: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    date: "२०२४-०१-१५",
    area: "संपूर्ण भारत (ग्रामीण क्षेत्र)",
    benefit: "पक्के घर बांधण्यासाठी ₹१,२०,००० अनुदान (डोंगराळ भागासाठी ₹१,३०,०००).",
    howToApply: "ग्रामपंचायतीत नाव नोंदणी करावी. PMAY-G यादीत नाव असल्यास ग्रामसेवकाशी संपर्क साधावा.",
    website: "https://pmayg.nic.in",
    pdfFile: "samiti.pdf",
    pdfLabel: "samiti.pdf",
  },
  {
    id: 2,
    name: "स्वच्छ भारत अभियान (ग्रामीण)",
    date: "२०२३-१२-१०",
    area: "संपूर्ण भारत",
    benefit: "घरगुती शौचालय बांधकामासाठी ₹१२,००० अनुदान.",
    howToApply: "ग्रामपंचायतीत अर्ज सादर करावा. ग्रामसेवकाशी संपर्क साधावा.",
    website: "https://swachhbharatmission.gov.in",
    pdfFile: "SwachhBharat.pdf",
    pdfLabel: "SwachhBharat.pdf",
  },
  {
    id: 3,
    name: "प्रधानमंत्री किसान सन्मान निधी",
    date: "२०२४-०२-२०",
    area: "संपूर्ण भारत",
    benefit: "शेतकऱ्यांना वर्षाला ₹६,००० (तीन हप्त्यात) थेट बँक खात्यात.",
    howToApply: "PM-KISAN पोर्टलवर ऑनलाईन अर्ज करावा किंवा जवळच्या CSC केंद्रात जावे.",
    website: "https://pmkisan.gov.in",
    pdfFile: "PMKisan.pdf",
    pdfLabel: "PMKisan.pdf",
  },
  {
    id: 4,
    name: "VBG-RAM-G (MGNREGA)",
    date: "२०२३-१०-०५",
    area: "संपूर्ण भारत (ग्रामीण)",
    benefit: "वर्षाला किमान १०० दिवस रोजगार हमी. रोजंदारी सरकार-निर्धारित दराने दिली जाते. पैसे थेट बँक खात्यात जमा होतात.",
    // eligibility: "१८ वर्षांवरील ग्रामीण नागरिक, जॉब कार्ड आवश्यक.",
    howToApply: "ग्रामपंचायतीत अर्ज करून जॉब कार्ड मिळवा आणि कामासाठी नोंदणी करा.",
    website: "https://nrega.nic.in",
    pdfFile: "MNREGA.pdf",
    pdfLabel: "MNREGA.pdf"
  }
];

// ─── Detail Modal ─────────────────────────────────────────────────────────────
const SchemeDetailModal = ({
  scheme,
  onClose,
}: {
  scheme: Scheme;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-blue-900 text-white px-6 py-4 rounded-t-2xl flex justify-between items-start gap-4">
          <h2 className="text-lg font-bold leading-snug">{scheme.name}</h2>
          <button
            onClick={onClose}
            className="shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-5">
          <div className="flex gap-3 items-start">
            <Calendar size={20} className="text-orange-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">तारीख</p>
              <p className="text-sm font-semibold text-gray-800">{scheme.date}</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <MapPin size={20} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">क्षेत्र</p>
              <p className="text-sm font-semibold text-gray-800">{scheme.area}</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Gift size={20} className="text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">लाभ</p>
              <p className="text-sm text-gray-700 leading-relaxed">{scheme.benefit}</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <FileText size={20} className="text-purple-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">अर्ज कसा करावा</p>
              <p className="text-sm text-gray-700 leading-relaxed">{scheme.howToApply}</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Globe size={20} className="text-teal-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">Website</p>
              <a
                href={scheme.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline font-medium break-all flex items-center gap-1"
              >
                {scheme.website} <ExternalLink size={13} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-100" />
          <div className="flex items-center gap-3">
            <a
              href={`/pdfs/${scheme.pdfFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors"
            >
              <Eye size={16} /> PDF पहा
            </a>
            <a
              href={`/pdfs/${scheme.pdfFile}`}
              download={scheme.pdfLabel ?? scheme.pdfFile}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-bold transition-colors"
            >
              <Download size={16} /> PDF डाउनलोड करा
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Schemes Component ────────────────────────────────────────────────────────
export const Schemes = ({ type }: { type: 'state' | 'central' }) => {
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const schemes = type === 'state' ? STATE_SCHEMES : CENTRAL_SCHEMES;
  const title = type === 'state' ? "राज्य सरकार योजना" : "केंद्र सरकार योजना";
  const accentColor = type === 'state' ? "bg-orange-500" : "bg-blue-900";

  return (
    <ContentPage title={title}>
      <div className="flex gap-2 mb-6">
        <span className={`px-4 py-1.5 rounded-full text-white text-xs font-bold ${accentColor}`}>
          {title}
        </span>
        <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-bold">
          एकूण योजना: {schemes.length}
        </span>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3 text-left text-sm font-bold">अ.क्र.</th>
              <th className="p-3 text-left text-sm font-bold">योजनेचे नाव</th>
              <th className="p-3 text-left text-sm font-bold">दिनांक</th>
              <th className="p-3 text-left text-sm font-bold">क्षेत्र</th>
              <th className="p-3 text-center text-sm font-bold">तपशील</th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((s, idx) => (
              <tr
                key={s.id}
                className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
              >
                <td className="p-3 text-sm text-gray-500 font-medium">{idx + 1}</td>
                <td className="p-3 text-sm font-semibold text-gray-800">{s.name}</td>
                <td className="p-3 text-sm text-gray-600">{s.date}</td>
                <td className="p-3 text-sm text-gray-600">{s.area}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => setSelectedScheme(s)}
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    तपशील <ChevronRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedScheme && (
        <SchemeDetailModal
          scheme={selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />
      )}
    </ContentPage>
  );
};

// ─── Directory ────────────────────────────────────────────────────────────────
export { Directory } from './Directory';

// ─── AdminDepts ───────────────────────────────────────────────────────────────
interface DeptInfo {
  name: string;
  title: string;
  intro?: string;
  points: string[];
  contact?: string[];
  note?: string;
  phone?: string;
  pdfFile?: string;
  pdfLabel?: string;
}

const ZP_DEPARTMENTS: DeptInfo[] = [
  {
    name: "सामान्य प्रशासन",
    title: "रचना व कार्यपध्दती",
    intro: "सामान्य प्रशासन विभाग १, जिल्हा परिषद अंतर्गत आस्थापनाविषयक कामकाज, कर्मचाऱ्यांच्या सेवा विषयक बाबी, अनुकंपा विषयक, जिल्हा परिषद सर्वसाधारण सभेचे कामकाज, मा.अध्यक्ष, जिल्हा परिषद पंचायत समिती संगमनेर यांचे अधिनस्त स्थायी समिती सभा, वार्षिक प्रशासन अहवाल, खाते प्रमुख व पंचायत समिती स्तरावरील सर्व कार्यालय प्रमुख यांच्या बैठका, कर्मचारी प्रशिक्षण इ. बाबतचे संनियंत्रण करण्यात येते.",
    points: [
      "आस्थापना विभाग – वर्ग १, २, ३ व ४ च्या अधिकारी व कर्मचाऱ्यांचे संपूर्ण आस्थापनाविषयक कामकाज, सेवा विषयक बाबी, वेतन व भत्त्यांबाबत अनुदान उपलब्ध करुन देणे, सेवानिवृत्ती प्रकरणे, कर्मचाऱ्यांच्या बदल्या, अनुकंपा, पदोन्नती, वेतनवाढी, बडतर्फी, निलंबन, गोपनीय अभिलेखे, चौकशी प्रकरणे इ.",
      "रचना व कार्यपध्दती – सर्व खाते प्रमुख व पंचायत समिती स्तरावरील कार्यालयांवर नियंत्रण, बैठकांचे आयोजन, यशवंत पंचायत राज अभियान, राजीव गांधी प्रशासकीय गतिमानता अभियान यांचे संनियंत्रण.",
      "परिषद विभाग – जिल्हा परिषदेच्या सर्वसाधारण सभा, स्थायी समितीचे कामकाज, इतिवृत्तांवर योग्य ती कार्यवाही, न्यायालयीन केसेस बाबत वकीलांच्या नियुक्ती बाबतचे कामकाज.",
      "प्रशासन विभाग – जिल्हा परिषद व पंचायत समिती यांचा एकत्रित वार्षिक प्रशासन अहवाल तयार करणे, कर्मचाऱ्यांच्या अपिलांवर निर्णय घेणे, पंचायत राज समितीचे संपूर्ण कामकाज.",
      "जनतेच्या तक्रारींबाबत – जनतेच्या तक्रारी बाबत चौकशी करणे, आवश्यक माहिती उपलब्ध करुन देणे.",
      "माहिती अधिकार अधिनियम २००५ व ग्रामस्थ दिन योजना यांचे कामकाज पहाणे.",
    ],
    contact: [
      "मा. उप मुख्य कार्यकारी अधिकारी (सामान्य), जिल्हा परिषद पंचायत समिती संगमनेर",
      "कक्ष अधिकारी, सामान्य प्रशासन विभाग १, जिल्हा परिषद पंचायत समिती संगमनेर",
      "कार्यालयीन अधिक्षक, सामान्य प्रशासन विभाग १, जिल्हा परिषद पंचायत समिती संगमनेर",
    ],
    phone: "०२४१ – २३५३६९५",
  },
  {
    name: "ग्रामपंचायत",
    title: "रचना व कार्यपध्दती",
    intro: "पंचायत समिती संगमनेर जिल्ह्यामध्ये १४ पंचायत समित्या, आणि १३२३ ग्रामपंचायती आहेत.",
    points: [
      "ग्रामपंचायत विभागाचे विभाग प्रमुख म्हणून जिल्हा परिषदेचे उपमुख्य कार्यकारी अधिकारी (ग्रामपंचायत) हे कामकाज पहातात.",
      "ग्रामपंचायत ही स्वतंत्र स्थानिक स्वराज्य संस्था असून त्याचे पर्यवेक्षण व संनियंत्रण ग्रामपंचायत विभागामार्फत केले जाते.",
      "ग्रामपंचायतींना मुलभूत सुविधा पुरविण्यासाठी व उत्पन्न वाढीसाठी जिल्हा ग्राम विकास निधीमधून कर्ज दिले जाते.",
      "ग्रामसेवक, ग्राम विकास अधिकारी, विस्तार अधिकारी यांचे आस्थापनाविषयक सर्व बाबी, नियुक्त्या, पदोन्नत्या, बदल्या, पुरस्कार, वेतनवाढी, आदर्श ग्रामसेवक सत्कार, शिस्तभंगविषयक कार्यवाही इ. प्रशासकीय कामे या विभागामार्फत केले जातात.",
      "१५ / १६ वा केंद्रीय वित्त आयोग, सुंदर ग्राम पुरस्कार योजना, जनसुविधा, नागरी सुविधा, लोकप्रतिनिधींनी सुचविलेली कामे, अल्पसंख्याक व ग्रामपंचायत कार्यालय बांधकाम, आदर्श ग्रामपंचायत, नमो ग्राम, सौर ग्राम, पेसा ५% अबंधित निधी, तिर्थक्षेत्र विकास योजना यांचे मंजूर कामांना ग्रामपंचायतींना अनुदान वाटप.",
      "लोक नियुक्त सरपंच / उप सरपंच व सदस्यांना गावाचा कारभार चालविण्यासाठी प्रशिक्षण देण्यात येते.",
    ],
  },
  {
    name: "अर्थ",
    title: "रचना व कार्यपध्दती",
    intro: "अर्थ विभागांतर्गत मा. मुख्य लेखा व वित्त अधिकारी यांचे नियंत्रणाखाली कामकाज चालते. तसेच ते जिल्हा परिषदेचे आर्थिक बाबींचे सल्लागार असतात.",
    points: [
      "जिल्हा परिषदेच्या लेख्यांचे संकलन करणे.",
      "प्रारंभिक लेखे व देयकाची तपासणी करणे, अर्थ संकल्पीय अंदाज व बिलांची तपासणी व प्रदान करणे.",
      "जिल्हा परिषदेच्या वर्ग-३ व ४ कर्मचाऱ्यांचे भविष्य निर्वाह निधी लेखे ठेवणे व गट विमा रकमा प्रदान करणे.",
      "वर्ग-३ व ४ कर्मचाऱ्यांचे वेतन व भत्ते प्रदान करणे.",
      "सेवानिवृत्ती वेतन प्रकरणास मंजुरी देणे तसेच सर्व अभिलेख नोंदवहया अद्ययावत ठेवणे.",
      "अर्थसंकल्पीय अंदाज पत्रक तयार करणे, आर्थिक जमाखर्चाच्या लेख्याचे विवरणपत्र तयार करणे.",
      "जिल्हा परिषदेच्या आर्थिक बाबीवर सल्ला देणे व आर्थिक दायीत्वावर लक्ष ठेवणे.",
      "आक्षेपार्ह व नियमबाह्य बाबी मु.का.अ. / मुख्य लेखा परिक्षकांच्या नजरेस आणून देणे.",
      "मासिक व वार्षिक हिशेबांचे संकलन करणे.",
      "सर्व पंचायत समिती कार्यालयांचे वर्षातून दोनदा अंतर्गत लेखा परिक्षण करून घेणे.",
      "निविदांची तपासणी करणे व आर्थिक अधिकारांच्या उल्लंघनावर नियंत्रण ठेवणे.",
    ],
  },
  {
    name: "पाणी पुरवठा व स्वच्छता",
    title: "रचना व कार्यपध्दती",
    points: [
      "ग्रामीण भागातील पिण्याच्या पाण्याच्या योजनांचे नियोजन, अंमलबजावणी व देखभाल.",
      "जल जीवन मिशन अंतर्गत प्रत्येक घराला नळजोडणी देण्याचे काम.",
      "स्वच्छ भारत अभियान (ग्रामीण) अंतर्गत हागणदारीमुक्त गाव उपक्रम राबविणे.",
      "ग्रामपंचायत स्तरावर घनकचरा व सांडपाणी व्यवस्थापन.",
      "पाणी गुणवत्ता तपासणी व देखरेख.",
    ],
  },
  {
    name: "म. प्रा. रो.ह.यो. (मनरेगा)",
    title: "रचना व कार्यपध्दती",
    points: [
      "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजनेची अंमलबजावणी.",
      "जॉब कार्ड नोंदणी व वितरण.",
      "वर्षाला किमान १०० दिवस रोजगार हमी देणे.",
      "मस्टर रोल, मजुरी अदायगी, सामाजिक लेखापरीक्षण यांचे व्यवस्थापन.",
      "कामांचे नियोजन, मंजुरी व अंमलबजावणी.",
    ],
  },
  {
    name: "महिला व बालकल्याण",
    title: "रचना व कार्यपध्दती",
    points: [
      "एकात्मिक बाल विकास सेवा योजना (ICDS) अंतर्गत अंगणवाडी सेवांचे संनियंत्रण.",
      "बाल विकास प्रकल्प अधिकाऱ्यांचे नियंत्रण.",
      "पोषण अभियान अंतर्गत कुपोषण निर्मूलन कार्यक्रम.",
      "महिलांसाठी विविध शासकीय योजनांची अंमलबजावणी.",
      "बालसंगोपन, प्रि-स्कूल शिक्षण व आरोग्य तपासणी.",
    ],
  },
  {
    name: "आरोग्य",
    title: "रचना व कार्यपध्दती",
    points: [
      "प्राथमिक आरोग्य केंद्रे व उपकेंद्रांचे नियंत्रण.",
      "राष्ट्रीय आरोग्य अभियान (NHM) अंतर्गत विविध कार्यक्रमांची अंमलबजावणी.",
      "माता व बाल आरोग्य सेवा, लसीकरण कार्यक्रम.",
      "साथरोग नियंत्रण, आरोग्य तपासणी शिबिरे.",
      "तालुका आरोग्य अधिकारी व आरोग्य कर्मचाऱ्यांचे आस्थापनाविषयक कामकाज.",
    ],
  },
  {
    name: "पशुसंवर्धन",
    title: "रचना व कार्यपध्दती",
    points: [
      "जनावरांचे लसीकरण, आजार नियंत्रण व उपचार.",
      "पशुधन विकास अधिकारी यांचे नियंत्रण.",
      "दूध उत्पादन वाढीसाठी संकरित गोपालन, शेळी-मेंढी पालन योजना.",
      "कुक्कुटपालन, मत्स्यपालन विकास कार्यक्रम.",
      "गोशाळा, चारा विकास योजना.",
    ],
  },
  {
    name: "कृषि",
    title: "रचना व कार्यपध्दती",
    points: [
      "तालुका कृषि अधिकारी यांचे नियंत्रण व संनियंत्रण.",
      "शेतकऱ्यांना बियाणे, खते, कीटकनाशके यांचे वितरण.",
      "कृषि प्रदर्शन, शेतकरी मेळावे, प्रशिक्षण कार्यक्रम.",
      "पीक विमा, कर्जमाफी योजनांची अंमलबजावणी.",
      "मृद व जलसंधारण कार्यक्रम.",
    ],
  },
  {
    name: "लघु पाटबंधारे",
    title: "रचना व कार्यपध्दती",
    points: [
      "लघु पाटबंधारे तलाव, बंधारे, कोल्हापूर पद्धतीचे बंधारे यांची देखभाल व दुरुस्ती.",
      "सिंचन सुविधा विकास.",
      "जलसंधारण व मृद संधारण कामे.",
      "उप विभागीय जलसंधारण अधिकाऱ्यांचे नियंत्रण.",
    ],
  },
  {
    name: "बांधकाम (दक्षिण)",
    title: "रचना व कार्यपध्दती",
    points: [
      "जिल्ह्याच्या दक्षिण भागातील रस्ते, पूल, इमारती यांचे बांधकाम व देखभाल.",
      "ग्रामीण रस्ते विकास कार्यक्रम (PMGSY) अंमलबजावणी.",
      "शासकीय इमारतींची देखभाल व दुरुस्ती.",
      "निविदा प्रक्रिया व कामांचे तांत्रिक परीक्षण.",
    ],
  },
  {
    name: "बांधकाम (उत्तर)",
    title: "रचना व कार्यपध्दती",
    points: [
      "जिल्ह्याच्या उत्तर भागातील रस्ते, पूल, इमारती यांचे बांधकाम व देखभाल.",
      "ग्रामीण रस्ते विकास कार्यक्रम (PMGSY) अंमलबजावणी.",
      "शासकीय इमारतींची देखभाल व दुरुस्ती.",
      "निविदा प्रक्रिया व कामांचे तांत्रिक परीक्षण.",
    ],
  },
  {
    name: "ग्रामीण पाणी पुरवठा",
    title: "रचना व कार्यपध्दती",
    points: [
      "ग्रामीण पाणी पुरवठा योजनांचे नियोजन, अंमलबजावणी व देखभाल.",
      "जल जीवन मिशन अंतर्गत नळजोडणी कार्यक्रम.",
      "पाणी गुणवत्ता तपासणी व देखरेख.",
      "हातपंप दुरुस्ती व देखभाल.",
      "ग्रामीण पाणी पुरवठा विभागाच्या उप अभियंत्यांचे नियंत्रण.",
    ],
  },
  {
    name: "शिक्षण (प्राथमिक)",
    title: "रचना व कार्यपध्दती",
    points: [
      "जिल्ह्यातील जिल्हा परिषद प्राथमिक शाळांचे प्रशासन व संनियंत्रण.",
      "शिक्षक नियुक्ती, बदली, पदोन्नती व आस्थापनाविषयक बाबी.",
      "सर्व शिक्षा अभियान (SSA) अंतर्गत योजनांची अंमलबजावणी.",
      "मध्यान्ह भोजन योजना (MDM) व्यवस्थापन.",
      "शैक्षणिक साहित्य, गणवेश, पाठ्यपुस्तक वितरण.",
    ],
  },
  {
    name: "शिक्षण (माध्यमिक)",
    title: "रचना व कार्यपध्दती",
    points: [
      "जिल्ह्यातील माध्यमिक व उच्च माध्यमिक शाळांचे प्रशासन.",
      "शिक्षक नियुक्ती, बदली व आस्थापनाविषयक बाबी.",
      "राष्ट्रीय माध्यमिक शिक्षा अभियान (RMSA) अंमलबजावणी.",
      "परीक्षा व निकाल संनियंत्रण.",
    ],
  },
  {
    name: "शिक्षण (योजना)",
    title: "रचना व कार्यपध्दती",
    points: [
      "शैक्षणिक योजनांचे नियोजन व समन्वय.",
      "शाळा बांधकाम, दुरुस्ती व अनुदान व्यवस्थापन.",
      "शिष्यवृत्ती व शैक्षणिक अनुदान वितरण.",
      "शाळाबाह्य मुलांसाठी विशेष कार्यक्रम.",
    ],
  },
  {
    name: "समाज कल्याण विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "अनुसूचित जाती, अनुसूचित जमाती, इतर मागासवर्गीय व विमुक्त जाती भटक्या जमातींसाठी योजना.",
      "शिष्यवृत्ती, वसतिगृह, आश्रमशाळा व्यवस्थापन.",
      "अपंग कल्याण योजना व अनुदान वितरण.",
      "सामाजिक न्याय व विशेष सहाय्य विभागाशी समन्वय.",
    ],
  },
  {
    name: "जिल्हा ग्रामीण विकास यंत्रणा (जि.ग्रा.वि.यं.)",
    title: "रचना व कार्यपध्दती",
    points: [
      "केंद्र पुरस्कृत ग्रामीण विकास कार्यक्रमांची अंमलबजावणी.",
      "दारिद्र्य निर्मूलन कार्यक्रम, स्वयंसहायता गट प्रशिक्षण व बळकटीकरण.",
      "NRLM (राष्ट्रीय ग्रामीण उपजीविका अभियान) अंतर्गत महिला बचत गट उभारणी.",
      "ग्रामीण भागातील पायाभूत सुविधा विकास.",
      "जिल्हास्तरीय विविध ग्रामीण विकास योजनांचे समन्वय.",
    ],
  },
];

const PS_DEPARTMENTS: DeptInfo[] = [
  {
    name: "पंचायत समिती संगमनेर",
    title: "रचना व कार्यपध्दती",
    intro: "पंचायत समिती संगमनेर ही तालुका स्तरावरील महत्वाची संस्था असून ती जिल्हा परिषद आणि ग्रामपंचायत यांच्यातील दुवा म्हणून काम करते.",
    points: [
      "तालुक्यातील सर्व ग्रामपंचायतींवर पर्यवेक्षण व संनियंत्रण.",
      "शासकीय योजनांची तालुका स्तरावर अंमलबजावणी.",
      "जिल्हा परिषदेच्या विविध विभागांशी समन्वय.",
      "तालुका स्तरावरील अधिकारी व कर्मचाऱ्यांचे प्रशासन.",
      "ग्रामसभा व पंचायत समिती सभांचे आयोजन व संनियंत्रण.",
      "तालुक्यातील विकास कामांचे नियोजन व अंमलबजावणी.",
    ],
    contact: [
      "गट विकास अधिकारी (उ.श्रे.), पंचायत समिती संगमनेर",
      "सहायक गट विकास अधिकारी, पंचायत समिती संगमनेर",
      "सहाय्यक प्रशासन अधिकारी ,पंचायत समिती संगमनेर",
    ],
    phone: "02425-272798",
  },
  {
    name: "एकात्मिक बाल विकास सेवा विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "अंगणवाडी सेवांचे नियोजन व संनियंत्रण.",
      "बाल विकास प्रकल्प अधिकाऱ्यांचे नियंत्रण.",
      "पोषण अभियान अंतर्गत कुपोषण निर्मूलन कार्यक्रम.",
      "महिलांसाठी विविध शासकीय योजनांची अंमलबजावणी.",
      "बालसंगोपन, प्रि-स्कूल शिक्षण व आरोग्य तपासणी.",
    ],
    note: "ICDS विभागाच्या पर्यवेक्षीय अधिकारी यांची माहिती खालील PDF मध्ये उपलब्ध आहे.",
    pdfFile: "एकात्मिक बाल विकास सेवा विभाग.pdf",
    pdfLabel: "एकात्मिक बाल विकास सेवा विभाग.pdf",
  },
  {
    name: "ग्रामीण पाणी पुरवठा उपविभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "ग्रामीण पाणी पुरवठा योजनांचे नियोजन, अंमलबजावणी व देखभाल.",
      "जल जीवन मिशन अंतर्गत नळजोडणी कार्यक्रम.",
      "पाणी गुणवत्ता तपासणी व देखरेख.",
      "हातपंप दुरुस्ती व देखभाल.",
    ],
    note: "ग्रामीण पाणी पुरवठा उपविभागीय अधिकारी यांची माहिती खालील PDF उपलद्ध आहे.",
    pdfFile: "ग्रामीण पाणी पुरवठा उपविभाग.pdf",
    pdfLabel: "ग्रामीण पाणी पुरवठा उपविभाग.pdf",
  },
  {
    name: "बांधकाम विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "रस्ते, पूल, इमारती यांचे बांधकाम व देखभाल.",
      "ग्रामीण रस्ते विकास कार्यक्रम (PMGSY) अंमलबजावणी.",
      "शासकीय इमारतींची देखभाल व दुरुस्ती.",
      "निविदा प्रक्रिया व कामांचे तांत्रिक परीक्षण.",
    ],
    note: "बांधकाम विभाग मधील क्षेत्रीयअधिकारी यांची माहिती खालील PDF मध्ये उपलद्धआहे.",
    pdfFile: "बांधकाम विभाग.pdf",
    pdfLabel: "बांधकाम विभाग.pdf",
  },
  {
    name: "पशुसंवर्धन विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "जनावरांचे लसीकरण, आजार नियंत्रण व उपचार.",
      "पशुधन विकास अधिकारी यांचे नियंत्रण.",
      "दूध उत्पादन वाढीसाठी संकरित गोपालन, शेळी-मेंढी पालन योजना.",
      "कुक्कुटपालन, मत्स्यपालन विकास कार्यक्रम.",
    ],
    note: "पशुसंवर्धन विभाग मधील क्षेत्रीय अधिकारी यांची माहिती खालील PDF मध्ये उपलद्ध आहे",
    pdfFile: "पशुसंवर्धन विभाग.pdf",
    pdfLabel: "पशुसंवर्धन विभाग.pdf",
  },
  {
    name: "तालुका आरोग्य विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "प्राथमिक आरोग्य केंद्रे व उपकेंद्रांचे नियंत्रण.",
      "माता व बाल आरोग्य सेवा, लसीकरण कार्यक्रम.",
      "साथरोग नियंत्रण, आरोग्य तपासणी शिबिरे.",
      "आरोग्य कर्मचाऱ्यांचे आस्थापनाविषयक कामकाज.",
    ],
    note: "तालुक्यातील आरोग्य विभाग मधील क्षेत्रीय अधिकारी कर्मचारी यांची माहिती खालील PDF उपलद्ध आहे.",
    pdfFile: "तालुका आरोग्य विभाग पंचाय समिती संगमनेर कार्यरत कर्मचारी माहिती.pdf",
    pdfLabel: "तालुका आरोग्य विभाग कर्मचारी माहिती.pdf",
  },
  {
    name: "शिक्षण विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "जिल्हा परिषद प्राथमिक व माध्यमिक शाळांचे प्रशासन.",
      "शिक्षक नियुक्ती, बदली, पदोन्नती व आस्थापनाविषयक बाबी.",
      "मध्यान्ह भोजन योजना (MDM) व्यवस्थापन.",
      "शैक्षणिक साहित्य, गणवेश, पाठ्यपुस्तक वितरण.",
    ],
    note: "शिक्षण विभाग मधील क्षेत्रीय अधिकारी यांची माहिती खालीली PDF उपलद्ध आहे.",
    pdfFile: "शिक्षण.pdf",
    pdfLabel: "शिक्षण.pdf",
  },
  {
    name: "ग्रामपंचायत विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "ग्रामपंचायतींवर पर्यवेक्षण व संनियंत्रण.",
      "ग्रामसेवक, ग्राम विकास अधिकारी यांचे प्रशासकीय कामे.",
      "ग्रामपंचायतींना अनुदान वाटप.",
      "लोकनियुक्त प्रतिनिधींना प्रशिक्षण.",
    ],
    note: "ग्रामपंचायत विभाग मधील क्षेत्रीय अधिकारी माहिती खालील PDF मध्ये उपलद्ध आहे.",
    pdfFile: "ग्रामपंचायत विभाग.pdf",
    pdfLabel: "ग्रामपंचायत विभाग.pdf",
  },
  {
    name: "लघुपाटबंधारे विभाग",
    title: "रचना व कार्यपध्दती",
    points: [
      "लघु पाटबंधारे तलाव, बंधारे यांची देखभाल व दुरुस्ती.",
      "सिंचन सुविधा विकास.",
      "जलसंधारण व मृद संधारण कामे.",
      "उप विभागीय जलसंधारण अधिकाऱ्यांचे नियंत्रण.",
    ],
    note: "लघुपाटबंधारे विभाग मधील क्षेत्रीय अधिकारी यांची माहिती खालील PDF मध्ये उपलद्ध आहे",
    pdfFile: "लघुपाठबंधारे विभाग.pdf",
    pdfLabel: "लघुपाठबंधारे विभाग.pdf",
  },
];

const DeptAccordion: React.FC<{ dept: DeptInfo; defaultOpen?: boolean }> = ({
  dept,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-3 bg-white hover:bg-gray-50 border-b border-gray-100 transition-colors text-left"
      >
        <span className="font-bold text-sm text-gray-800">{dept.name}</span>
        {open
          ? <ChevronRight size={18} className="text-gray-400 rotate-90 transition-transform" />
          : <ChevronRight size={18} className="text-gray-400 transition-transform" />}
      </button>
      {open && (
        <div className="p-6 bg-white space-y-4">
          <h4 className="font-bold text-blue-900 text-sm border-b border-gray-100 pb-2">{dept.title}</h4>
          {dept.intro && (
            <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg px-4 py-3 border-l-4 border-gray-300">
              {dept.intro}
            </p>
          )}
          <ul className="space-y-2">
            {dept.points.map((pt, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                {pt}
              </li>
            ))}
          </ul>
          {dept.contact && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">संपर्क अधिकारी</p>
              <ul className="space-y-1">
                {dept.contact.map((c, i) => (
                  <li key={i} className="text-sm text-gray-700">• {c}</li>
                ))}
              </ul>
              {dept.phone && (
                <p className="text-sm text-blue-700 font-semibold mt-2">📞 {dept.phone}</p>
              )}
            </div>
          )}
          {dept.pdfFile && (
            <div className="mt-4 pt-4 border-t border-gray-100">

              {dept.note && (
                <p className="text-sm text-gray-600 mb-2 font-bold">
                  {dept.note}
                </p>
              )}

              <div className="flex items-center gap-3">
                <a
                  href={`/pdfs/${dept.pdfFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <Eye size={14} /> PDF पहा
                </a>

                <a
                  href={`/pdfs/${dept.pdfFile}`}
                  download={dept.pdfLabel ?? dept.pdfFile}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <Download size={14} /> PDF डाउनलोड करा
                </a>
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const AdminDepts = ({ type }: { type: 'zp' | 'ps' }) => {
  const isZP = type === 'zp';
  const departments = isZP ? ZP_DEPARTMENTS : PS_DEPARTMENTS;
  const title = isZP ? "" : "पंचायत समिती";
  // const title = isZP ? "मुख्यालय – जिल्हा परिषद" : "पंचायत समिती";
  return (
    <ContentPage title="प्रशासकीय विभाग">
      <div className="flex gap-3 mb-8">
        {/* <a
          href="?type=zp"
          className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${isZP ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-gray-600 border-gray-300 hover:border-blue-900 hover:text-blue-900'}`}
        >
          मुख्यालय – जिल्हा परिषद
        </a> */}
        <a
          href="?type=ps"
          className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${!isZP ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-gray-600 border-gray-300 hover:border-blue-900 hover:text-blue-900'}`}
        >
          पंचायत समिती
        </a>
      </div>
      <h3 className="text-lg font-extrabold text-gray-800 mb-4 border-l-4 border-blue-900 pl-3">{title}</h3>
      <div className="flex mb-6">
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
          एकूण विभाग: {departments.length}
        </span>
      </div>
      <div className="space-y-3">
        {departments.map((dept, idx) => (
          <DeptAccordion key={dept.name} dept={dept} defaultOpen={idx === 0} />
        ))}
      </div>
    </ContentPage>
  );
};

// ─── Citizens ─────────────────────────────────────────────────────────────────

interface RtsItem { title: string; pdfFile: string; }
interface RtsCategory { label: string; items: RtsItem[]; }

const RTS_CATEGORIES: RtsCategory[] = [
  // Add categories when PDFs are available
];

const RtsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ContentPage title="सार्वजनिक सेवेचा अधिकार">
      <div className="flex flex-wrap gap-2 mb-6">
        {RTS_CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${activeTab === idx
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-white text-gray-600 border-gray-300 hover:border-blue-900 hover:text-blue-900'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 px-4 py-2 pt-3">
          <span className="text-sm font-bold">शीर्षक</span>
          <span className="text-sm font-bold">डाउनलोड करा</span>
        </div>
        {/* {RTS_CATEGORIES[activeTab].items.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 px-4 py-3 items-center border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
          >
            <span className="text-sm text-gray-800">{item.title}</span>
            <div className="flex items-center gap-3">
              <a
                href={`/pdfs/${item.pdfFile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1"
              >
                पहा <Eye size={14} />
              </a>
              <a
                href={`/pdfs/${item.pdfFile}`}
                download={item.pdfFile}
                className="text-blue-600 hover:text-blue-800"
                title="डाउनलोड करा"
              >
                <Download size={16} />
              </a>
            </div>
          </div>
        ))} */}
        <div className="text-center py-12 text-gray-400 text-sm font-medium border border-gray-200 rounded-xl bg-gray-50">
          कोणतीही सूचना उपलब्ध नाही.
        </div>
      </div>
    </ContentPage>
  );
};

const ServicesSection = () => (
  <ContentPage title="नागरी सुविधा केंद्र">
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-white px-4 py-4">

        <p className="text-sm text-gray-700 leading-relaxed">
          कॉमन सर्व्हिस सेंटर (सीएससी) हे ग्रामीण भागात असलेले सेवा केंद्र आहेत. या केंद्रांमधून
          नागरिकांना विविध सरकारी सेवा उपलब्ध होतात. जसे की आधार कार्ड बनवणे, बँक खाते उघडणे,
          विमा काढणे, बिल भरणे, पासपोर्ट, पॅनकार्ड बनवणे आणि इतर अनेक सेवा. या केंद्रांमुळे
          ग्रामीण भागातील नागरिकांना सरकारी सेवा सहज उपलब्ध होतात आणि त्यांचे जीवन सुलभ होते.
        </p>

        <a
          href="https://digitalseva.csc.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 hover:underline font-semibold"
        >
          भेट : https://digitalseva.csc.gov.in/ <ExternalLink size={13} />
        </a>

        <div className="mt-5 pt-4 border-t border-gray-300">
          <p className="text-sm font-semibold text-gray-800 mb-1">
            माहितीचा अधिकार अधिनियम २००५
          </p>
          <p className="text-xs text-gray-600 mb-3">
            कलम ४ अन्वये १ ते १७ बाबींची माहिती खालील PDF मध्ये उपलब्ध आहे.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="/pdfs/1 to 17.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <Eye size={14} /> PDF पहा
            </a>

            <a
              href="/pdfs/1 to 17.pdf"
              download="1 to 17.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <Download size={14} /> PDF डाउनलोड करा
            </a>
          </div>
        </div>

      </div>
    </div>
  </ContentPage>
);

const GRIEVANCE_LINKS = [
  { label: "प्रशासकीय सुधारणा आणि सार्वजनिक तक्रारी विभाग (सीपीजीआरएमएस)", url: "https://pgportal.gov.in/" },
  { label: "तक्रार निवारण प्रणाली (महाराष्ट्र राज्य)", url: "https://grievances.maharashtra.gov.in/mr" },
  { label: "आपले सरकार", url: "https://aaplesarkar.mahaonline.gov.in" },
];

const GrievanceSection = () => (
  <ContentPage title="तक्रार निवारण">
    <div className="space-y-4">
      {GRIEVANCE_LINKS.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-900">{link.label}</span>
          <ExternalLink size={16} className="text-blue-600 shrink-0 ml-3" />
        </a>
      ))}
    </div>
  </ContentPage>
);

interface FormItem { title: string; pdfFile: string; size?: string; }

const FORMS: FormItem[] = [
  // Add forms when PDFs are available
];

const FormsSection = () => (
  <ContentPage title="अर्ज">
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="grid grid-cols-2 pt-4">
        <span className="text-sm font-bold pl-4">शीर्षक</span>
        <span className="text-sm font-bold">डाउनलोड करा</span>
      </div>
      {FORMS.map((form, i) => (
        <div
          key={i}
          className={`grid grid-cols-2 px-4 py-3 items-center border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
        >
          <span className="text-sm text-gray-800 pr-4">{form.title}</span>
          <div className="flex items-center gap-3">
            <a
              href={`/pdfs/${form.pdfFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              पहा{form.size ? `(${form.size})` : ''}
            </a>
            <FileText size={16} className="text-gray-500" />
            <a
              href={`/pdfs/${form.pdfFile}`}
              download={form.pdfFile}
              className="text-blue-600 hover:text-blue-800"
              title="डाउनलोड करा"
            >
              <Download size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </ContentPage>
);

export const Citizens = ({ section }: { section: string }) => {
  if (section === 'rts') return <RtsSection />;
  if (section === 'services') return <ServicesSection />;
  if (section === 'grievance') return <GrievanceSection />;
  if (section === 'forms') return <FormsSection />;
  return (
    <ContentPage title="माहिती">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h3 className="text-base font-extrabold text-blue-900 mb-3">स्वयम पोर्टल</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          स्वयंम हा भारत सरकारने सुरू केलेला एक कार्यक्रम आहे आणि शैक्षणिक धोरणाची तीन मुख्य
          तत्त्वे उदा., प्रवेश, समानता आणि गुणवत्ता साध्य करण्यासाठी डिझाइन केलेले आहे. या
          प्रयत्नाचा उद्देश हा आहे की सर्वात वंचितांसह, सर्वोत्कृष्ट अध्यापन संसाधने सर्वांपर्यंत
          पोहोचवणे. जे विद्यार्थी आतापर्यंत डिजिटल क्रांतीमुळे अस्पर्श राहिले आहेत आणि ज्ञान
          अर्थव्यवस्थेच्या मुख्य प्रवाहात सामील होऊ शकले नाहीत त्यांच्यासाठी स्वयंम डिजिटल
          डिव्हाईड कमी करण्याचा प्रयत्न करतो.
        </p>
        <a
          href="https://swayam.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 hover:underline font-semibold"
        >
          भेट : https://swayam.gov.in <ExternalLink size={13} />
        </a>
      </div>
    </ContentPage>
  );
};

// ─── Documents ────────────────────────────────────────────────────────────────

interface DocItem {
  title: string;
  date?: string;
  pdfFile: string;
  size?: string;
}

interface DocCategory {
  label: string;
  items: DocItem[];
}

const DOC_CATEGORIES: DocCategory[] = [
  // Add categories when PDFs are available
  // {
  //   label: "नागरिकांची सनद",
  //   items: [
  //     {
  //       title: "कृषी विभाग समिती संगमनेर",
  //       pdfFile: "CitizenCharter_Krushi.pdf",
  //     },
  //     {
  //       title: "पंचायत समिती संगमनेर-नागरिकांची सनद",
  //       pdfFile: "CitizenCharter_ZP.pdf",
  //     },
  //   ],
  // },
  // {
  //   label: "स्थायी समिती सभा इतिवृत्त",
  //   items: [
  //     {
  //       title: "स्थायी समिती सभा इतिवृत्त",
  //       date: "27/02/2026",
  //       pdfFile: "SthaiyiSamiti_27022026.pdf",
  //       size: "849 KB",
  //     },
  //     {
  //       title: "स्थायी समिती सभा इतिवृत्त",
  //       date: "30/01/2026",
  //       pdfFile: "SthaiyiSamiti_30012026.pdf",
  //       size: "3 MB",
  //     },
  //   ],
  // },
  // {
  //   label: "सर्व साधारण सभा इतिवृत्त",
  //   items: [
  //     {
  //       title: "सर्व साधारण सभा इतिवृत्त",
  //       date: "10/02/2026",
  //       pdfFile: "SarvSadharan_10022026.pdf",
  //       size: "5 MB",
  //     },
  //     {
  //       title: "सर्व साधारण सभा इतिवृत्त",
  //       date: "08/01/2026",
  //       pdfFile: "SarvSadharan_08012026.pdf",
  //       size: "1 MB",
  //     },
  //     {
  //       title: "सर्व साधारण सभा इतिवृत्त",
  //       date: "01/12/2025",
  //       pdfFile: "SarvSadharan_01122025.pdf",
  //       size: "8 MB",
  //     },
  //   ],
  // },
  // {
  //   label: "परिपत्रके / सूचना",
  //   items: [
  //     {
  //       title: "खाते प्रमुख व विकास अधिकारी यांना प्रदान केलेले अधिकार (सन 2016 ते सन 2020 पर्यंत सुधारित)",
  //       pdfFile: "Adhikar_2016_2020.pdf",
  //       size: "6 MB",
  //     },
  //     {
  //       title: "कुणबी नोंद ",
  //       pdfFile: "Kumbhi_Nonan.pdf",
  //       size: "2 MB",
  //     }
  //   ],
  // },
];

export const Documents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = DOC_CATEGORIES[activeTab] || { items: [] };

  return (
    <ContentPage title="कागदपत्रे">
      <div className="flex flex-wrap gap-2 mb-6">
        {DOC_CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${activeTab === idx
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-white text-gray-600 border-gray-300 hover:border-blue-900 hover:text-blue-900'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {DOC_CATEGORIES.length === 0 ? (
        <div className="text-center py-12 text-gray-400 text-sm font-medium border border-gray-200 rounded-xl bg-gray-50">
          कोणतीही कागदपत्रे उपलब्ध नाही.
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] px-4 py-3 bg-blue-900 text-white">
            <span className="text-sm font-bold">शीर्षक</span>
            <span className="text-sm font-bold px-6">तारीख</span>
            <span className="text-sm font-bold text-center">पहा / डाउनलोड करा</span>
          </div>
          {active.items.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_auto] px-4 py-3 items-center border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-blue-50 transition-colors`}
            >
              <div>
                <p className="text-sm text-gray-800">{item.title}</p>
                {/* <p className="text-xs text-gray-400 mt-0.5">प्रवेशयोग्य आवृत्ती</p> */}
              </div>
              <span className="text-sm text-gray-600 px-6 whitespace-nowrap">
                {item.date ?? '—'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`/pdfs/${item.pdfFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1 whitespace-nowrap"
                >
                  पहा{item.size ? ` (${item.size})` : ''} <Eye size={14} />
                </a>
                <a
                  href={`/pdfs/${item.pdfFile}`}
                  download={item.pdfFile}
                  className="text-blue-600 hover:text-blue-800"
                  title="डाउनलोड करा"
                >
                  <Download size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </ContentPage>
  );
};

export const WebInfoManager = () => (
  <ContentPage title="वेब माहिती व्यवस्थापक">
    <div className="max-w-3xl mx-auto px-4 py-6">
      <WebInfoManagerCard />
    </div>
  </ContentPage>
);

export const HelpSection = () => (
  <ContentPage title="मदत">
    <div className="max-w-3xl mx-auto px-4 py-6">
      <HelpSectionContent />
    </div>
  </ContentPage>
);

// ─── Notices ─────────────────────────────────────────────────────────────────
// Notices is in its own file → src/Notices.tsx
export { Notices } from './Notices';

// ─── Media ────────────────────────────────────────────────────────────────────
export { Media } from './Media';

const WebInfoManagerCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 mb-6">
      <h2 className="text-lg font-bold text-blue-900 border-l-4 border-orange-500 pl-3 mb-4">
        वेब माहिती व्यवस्थापक
      </h2>

      <div className="space-y-2 text-sm text-gray-700">
        <p><span className="font-semibold">नाव:</span> श्री. प्रविण अण्णासाहेब सिनारे</p>
        <p><span className="font-semibold">पदनाम:</span> गट विकास अधिकारी (उ.श्रे.)</p>
        <p><span className="font-semibold">पत्ता:</span> पंचायत समिती संगमनेर 422605</p>
        <p><span className="font-semibold">दूरध्वनी:</span> 02425-272798</p>
        <p>
          <span className="font-semibold">ईमेल:</span>{" "}
          <a
            href="mailto:bdosangamner@rediffmail.com"
            className="text-blue-600 hover:underline"
          >
            bdosangamner@rediffmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

const HelpSectionContent = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-900 pl-3 mb-4">
        मदत
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        या संकेतस्थळावरील माहिती / पृष्ठांवर प्रवेश / नॅव्हिगेट करणे आपणास कठीण जाते आहे का?
        या भागात हे संकेतस्थळ ब्राउझ करताना आपल्याला एक सुखद अनुभव यावा यासाठी मदत करण्याचा प्रयत्न केला आहे.
      </p>

      {/* Usability Section */}
      <h3 className="text-lg font-bold text-blue-900 mb-2">वापरसुलभता</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        कोणत्याही उपकरणांचा, तंत्रज्ञानाचा किवा क्षमतेचा वापर करून हे संकेतस्थळ बघता येईल हे सुनिश्चित करण्यासाठी सर्वोत्तम प्रयत्न केले गेले आहेत.
        संकेत स्थळला भेट देणाऱ्या व्यक्तीला जास्तीत जास्त उपयोगता व सुलभता व्हावी या उद्देशाने हे संकेत स्थळ तयार करण्यात आले आहे.
        दिव्यांग व्यक्तींकरीता या वेबसाइटवरील सर्व माहिती उपलब्ध व्ह्यावी हे सुनिश्चित करण्यासाठी सर्वोत्तम प्रयत्न केले गेले आहेत.
        उदाहरणार्थ, अंध दिव्यांग असलेले वापरकर्ता सहायक तंत्रज्ञानाचा वापर करून पोर्टलचा प्रवेश करू शकतो,
        जसे की स्क्रीन वाचक. ही वेबसाइट वर्ल्ड वाइड वेब कंसोर्टियम (डब्ल्यू3 सी) द्वारे घालून दिलेल्या
        वेब सामग्री प्रवेशनिर्धारण मार्गदर्शक तत्त्वांचे (डब्ल्यूसीएजी 2.0) स्तर एएची पूर्तता करते.
      </p>

      {/* Screen Reader Section */}
      <h3 className="text-lg font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-3">
        स्क्रीन रीडर प्रवेश
      </h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="border p-3 text-left">स्क्रीन रीडर</th>
              <th className="border p-3 text-left">संकेतस्थळ</th>
              <th className="border p-3 text-left">विनामूल्य / व्यावसायिक</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border p-3">स्क्रीन ऍक्सेस फॉर ऑल (SAFA)</td>
              <td className="border p-3 text-blue-600">
                <a href="https://lists.sourceforge.net/lists/listinfo/safa-developer" target="_blank">
                  लिंक
                </a>
              </td>
              <td className="border p-3">मोफत</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border p-3">NVDA</td>
              <td className="border p-3 text-blue-600">
                <a href="https://www.nvaccess.org/download/" target="_blank">
                  लिंक
                </a>
              </td>
              <td className="border p-3">मोफत</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border p-3">System Access To Go</td>
              <td className="border p-3 text-blue-600">
                <a href="http://www.satogo.com" target="_blank">
                  लिंक
                </a>
              </td>
              <td className="border p-3">मोफत</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border p-3">Thunder</td>
              <td className="border p-3 text-blue-600">
                <a href="http://www.webbie.org.uk/thunder" target="_blank">
                  लिंक
                </a>
              </td>
              <td className="border p-3">मोफत</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border p-3">HAL</td>
              <td className="border p-3 text-blue-600">
                <a href="http://www.yourdolphin.co.uk/productdetail.asp?id=5" target="_blank">
                  लिंक
                </a>
              </td>
              <td className="border p-3">व्यावसायिक</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border p-3">JAWS</td>
              <td className="border p-3 text-blue-600">
                <a href="http://www.freedomscientific.com/Downloads/JAWS" target="_blank">
                  लिंक
                </a>
              </td>
              <td className="border p-3">व्यावसायिक</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border p-3">Supernova</td>
              <td className="border p-3 text-blue-600">
                <a href="http://www.yourdolphin.co.uk/productdetail.asp?id=1" target="_blank">
                  लिंक
                </a>
              </td>
              <td className="border p-3">व्यावसायिक</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ─── Website Policies ─────────────────────────────────────────────────────────

interface PolicySection {
  title: string;
  content: string;
}

const POLICY_SECTIONS: PolicySection[] = [
  {
    title: "वापरण्याच्या अटी",
    content: "संकेतस्थळावरील माहितीचे प्रकाशन व व्यवस्थापन पंचायत समिती संगमनेर यांच्या मार्फत केले जाते. संकेतस्थळावरील मजकुराच्या सत्यतेबाबत सर्वतोपरी खबरदारी घेतली गेली असली, तरी हा मजकूर कोणत्याही कायदेशीर कारणासाठी पुरावा म्हणून वापरता येणार नाही. या संकेतस्थळाचा वापर करीत असताना कोणत्याही प्रकारचा खर्च, तोटा, दुष्पपरिणाम अथवा हानी झाल्यास त्यासाठी पंचायत समिती संगमनेर जिल्हा प्रशासन व राष्ट्रीय सूचना विज्ञान केंद्र, पंचायत समिती संगमनेर जबाबदार राहणार नाही. या संकेतस्थळावर समाविष्ट असलेल्या इतर संकेतस्थळाच्या लिंक्स फक्त नागरिकांच्या सोयीसाठी दिल्या आहेत. आम्ही नेहमी अशा लिंक केलेल्या पृष्ठांच्या उपलब्धतेची हमी देत नाही. भारतीय कायद्यानुसार या अटी आणि नियमांचे नियंत्रण केले जाईल."
  },
  {
    title: "कॉपीराइट धोरण",
    content: "या संकेत स्थळावरील माहिती आम्हाला एक मेल पाठवून योग्य परवानगी घेतल्यानंतर विनामूल्य पुन: प्रस्तुत केली जाऊ शकते. तथापि, संकेत स्थळावरील माहिती अचूकपणे पुन: प्रस्तुत करणे आवश्यक आहे आणि अप्रतिष्ठाकारक पद्धतीने अथवा दिशाभूल करण्याच्या संदर्भात वापरता येणार नाही. जेव्हा या माहितीचे किवा सामग्रीचे प्रकाशन किवा वापर कराल त्या वेळेस स्रोत प्रामुख्याने अभिस्वीकृत केला गेला पाहिजे. तथापि ह्या संकेत स्थळावरील माहितीचे पुन: प्रस्तुत करण्याची अनुमती त्रयस्थ पक्षाच्या सर्वाधिकार (कॉपीराइट) माहिती पर्यत विस्तारीत करू शकत नाही, अशा प्रकारच्या माहितीचे पुनरुत्पादित करण्यासाठी संबंधित विभाग / सर्वाधिकार (कॉपीराइट) धारकांकडून परवानगी प्राप्त करणे आवश्यक आहे।"
  },
  {
    title: "गोपनीयता धोरण",
    content: "हे संकेतस्थळ तुमची व्यक्तिगत ओळख स्पष्ट करणारी कोणत्याही प्रकारची माहिती (जसे नाव, दूरध्वनी क्र. अथवा ई-मेल) स्वयंचलितरित्या आपल्याकडे ठेवत नाही. जर हे संकेतस्थळद्वारा आपल्याला वैयक्तिक माहिती देण्याची विनंती केली असेल, तर आपल्याला अशी माहिती का घेतली जाते आहे त्याचा उद्देश स्प्ष्ट दिला जाईल उदा. प्रतिक्रिया अर्ज. आणि आपली वैयक्तिक माहिती संरक्षित करण्यासाठी पर्याप्त सुरक्षिततेच्या उपाययोजना घेतल्या जातील. आम्ही ह्या संकेतस्थळावरील कोणत्याही वैयक्तिकरित्या ओळखण्यायोग्य माहितीची विक्री कोणत्याही तृतीय पक्ष (सार्वजनिक / खाजगी) करीत नाही किंवा सामायिक करीत नाही. या संकेतस्थळावर प्रदान केलेली कोणतीही माहिती नुकसान, गैरवापर, अनधिकृत प्रवेश किंवा प्रकटीकरण, फेरबदल किंवा विनाश यापासून संरक्षित केली जाईल. आम्ही भेटी दिलेल्या पृष्ठांबद्दल विशिष्ट माहिती गोळा करतो जसे इंटरनेट प्रोटोकॉल, आय. पी. एड्रेस, डोमेन नेम, ब्राउजर प्रकार, ऑपरेटिंग सिस्टम, भेटीची तारीख आणि वेळ, भेटी दिलेल्या पृष्ठ इ. या संकेत स्थळाच्या सुरक्षेला बाधा पोहोचवण्याचा प्रयत्न झाल्यास त्याचा मागोवा घेण्यासाठी आम्हांला या माहितीचा उपयोग होतो।"
  },
  {
    title: "हायपर लिंकिंग धोरण",
    content: "या संकेतस्थळावर अनेक ठिकाणी आपल्याला इतर संकेतस्थळाचे / पोर्टल्सचे दुवे सापडतील. हे दुवे आपल्या सोयीसाठी ठेवण्यात आले आहेत. आम्ही हमी देऊ शकत नाही की हे लिंक्स सर्व वेळ काम करतील आणि जोडलेल्या पृष्ठांची उपलब्धता यावर आमचे कोणतेही नियंत्रण नाही।"
  },
  {
    title: "आर्किव्हल धोरण",
    content: "पंचायत समिती संगमनेर च्या संकेतस्थळावर प्रकाशित करण्यात येणारी माहिती ही पंचायत समिती संगमनेर विभागाची सामान्य व स्थायी स्वरूपाची असून, प्रकाशित झालेल्या माहितीसाठी कोणताही कालबद्ध मर्यादा ठरवलेली नसते. त्यामुळे ही माहिती सतत संकेतस्थळावर उपलब्ध राहते."
  }
];

const PolicyAccordion: React.FC<{ policy: PolicySection; defaultOpen?: boolean }> = ({
  policy,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-3 bg-white hover:bg-gray-50 border-b border-gray-100 transition-colors text-left"
      >
        <span className="font-bold text-sm text-gray-800">{policy.title}</span>
        {open
          ? <ChevronRight size={18} className="text-gray-400 rotate-90 transition-transform" />
          : <ChevronRight size={18} className="text-gray-400 transition-transform" />}
      </button>
      {open && (
        <div className="p-6 bg-white">
          <p className="text-sm text-gray-700 leading-relaxed">{policy.content}</p>
        </div>
      )}
    </div>
  );
};

export const WebsitePolicies = () => (
  <ContentPage title="वेबसाइट धोरणे">
    <div className="space-y-3">
      {POLICY_SECTIONS.map((policy, idx) => (
        <PolicyAccordion key={policy.title} policy={policy} defaultOpen={idx === 0} />
      ))}
    </div>
  </ContentPage>
);