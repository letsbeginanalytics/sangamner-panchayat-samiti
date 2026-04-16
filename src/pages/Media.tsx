import React, { useState } from 'react';
import { ContentPage } from './About';
import { X } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const FORMER_PRESIDENTS = [
  { id: 1, name: "मा. श्री. शंकरराव देवराम काळे", from: "12/08/1962", to: "11/08/1967" },
  { id: 2, name: "मा. श्री. शंकरराव देवराम काळे", from: "12/08/1967", to: "11/08/1972" },
];

const FORMER_CEOS = [
  { id: 1, name: "मा. श्री. जे इनोसंट", from: "19/04/1962", to: "19/05/1964" },
  { id: 2, name: "मा. श्री. जी. के. कसबेकर", from: "03/07/1964", to: "16/06/1965" },
];

const GALLERY_ITEMS = [
  { id: 1, src: `https://picsum.photos/seed/g1/400/300`, name: "कार्यक्रमाचे छायाचित्र 1" },
  { id: 2, src: `https://picsum.photos/seed/g2/400/300`, name: "कार्यक्रमाचे छायाचित्र 2" },
  { id: 3, src: `https://picsum.photos/seed/g3/400/300`, name: "कार्यक्रमाचे छायाचित्र 3" },
  { id: 4, src: `https://picsum.photos/seed/g4/400/300`, name: "कार्यक्रमाचे छायाचित्र 4" },
  { id: 5, src: `https://picsum.photos/seed/g5/400/300`, name: "कार्यक्रमाचे छायाचित्र 5" },
  { id: 6, src: `https://picsum.photos/seed/g6/400/300`, name: "कार्यक्रमाचे छायाचित्र 6" },
];

interface StoryDept {
  name: string;
  icon: string;
  shortDesc: string;
  story: string;
  achievements: string[];
}

const SUCCESS_STORIES: StoryDept[] = [
  {
    name: "कृषी",
    icon: "🌾",
    shortDesc: "शेतकऱ्यांच्या जीवनात सकारात्मक बदल घडविणे",
    story:
      "पंचायत समिती संगमनेर जिल्हा परिषदेच्या कृषी विभागाने जिल्ह्यातील शेतकऱ्यांच्या जीवनमानात आमूलाग्र बदल घडवून आणला आहे. दुष्काळप्रवण भागात ठिबक सिंचन व तुषार सिंचन योजनांचा व्यापक प्रसार करण्यात आला. सेंद्रिय शेतीला प्रोत्साहन देऊन शेतकऱ्यांचे उत्पन्न वाढविण्यात यश आले. शेतकरी मेळावे, कृषी प्रदर्शने व प्रशिक्षण कार्यक्रमांद्वारे आधुनिक शेती तंत्राचे ज्ञान दिले गेले. पीएम किसान व कर्जमाफी योजनांची प्रभावी अंमलबजावणी करून हजारो शेतकऱ्यांना थेट लाभ मिळवून दिला.",
    achievements: [
      "५,२०० हेक्टर क्षेत्रावर ठिबक सिंचन योजना राबविली",
      "१२,००० शेतकऱ्यांना पीक विमा योजनेचा लाभ",
      "३५० शेतकरी मेळावे व प्रशिक्षण शिबिरे आयोजित",
      "सेंद्रिय शेती अंतर्गत ८०० शेतकऱ्यांची नोंदणी",
    ],
  },
  {
    name: "सार्वजनिक बांधकाम विभाग (उत्तर)",
    icon: "🛣️",
    shortDesc: "उत्तर भागातील ग्रामीण रस्ते व पायाभूत सुविधांचा विकास",
    story:
      "जिल्ह्याच्या उत्तर भागातील दुर्गम गावे मुख्य प्रवाहाशी जोडण्यासाठी सार्वजनिक बांधकाम विभाग (उत्तर) ने महत्त्वपूर्ण काम केले आहे. PMGSY अंतर्गत अनेक वर्षे दुर्गम राहिलेल्या गावांना पक्के रस्ते मिळाले. पूल व कल्व्हर्ट बांधकामामुळे पावसाळ्यात बंद पडणाऱ्या रस्त्यांची समस्या सुटली. शाळा, रुग्णालये व ग्रामपंचायत इमारतींची दुरुस्ती व नवनिर्मिती करण्यात आली. स्थानिक नागरिकांच्या सहभागाने गुणवत्तापूर्ण बांधकाम सुनिश्चित केले गेले.",
    achievements: [
      "१८५ किमी नवीन ग्रामीण रस्त्यांचे बांधकाम",
      "४२ पूल व कल्व्हर्ट बांधकाम पूर्ण",
      "७८ शासकीय इमारतींची दुरुस्ती व नूतनीकरण",
      "२३ गावे प्रथमच पक्क्या रस्त्याने जोडली",
    ],
  },
  {
    name: "सार्वजनिक बांधकाम विभाग (दक्षिण)",
    icon: "🏗️",
    shortDesc: "दक्षिण भागात दर्जेदार रस्ते व इमारतींची निर्मिती",
    story:
      "जिल्ह्याच्या दक्षिण भागातील ग्रामीण संपर्क व्यवस्था बळकट करण्यात सार्वजनिक बांधकाम विभाग (दक्षिण) ने उल्लेखनीय योगदान दिले आहे. डोंगराळ व खडकाळ भूप्रदेशातून रस्ते बांधण्याचे आव्हान यशस्वीपणे पूर्ण केले. ग्रामीण रुग्णालये, अंगणवाडी व शाळा इमारतींचे बांधकाम वेळेत पूर्ण केले. पर्यावरणस्नेही पद्धतींचा वापर करून टिकाऊ बांधकाम साकारले. नागरिकांच्या तक्रारींवर त्वरित कार्यवाही करून विश्वास संपादन केला.",
    achievements: [
      "१५२ किमी रस्त्यांचे डांबरीकरण व मजबुतीकरण",
      "३१ नवीन पूल व छोटे पूल बांधले",
      "५५ अंगणवाडी व शाळा इमारती बांधल्या",
      "१२ प्राथमिक आरोग्य केंद्र इमारतींचे नूतनीकरण",
    ],
  },
  {
    name: "प्राथमिक शिक्षण विभाग",
    icon: "📚",
    shortDesc: "गुणवत्तापूर्ण प्राथमिक शिक्षणाचे स्वप्न साकार",
    story:
      "जिल्हा परिषदेच्या प्राथमिक शिक्षण विभागाने शिक्षणाच्या गुणवत्तेत लक्षणीय सुधारणा घडवून आणली आहे. डिजिटल शाळा उपक्रमांतर्गत शेकडो शाळांमध्ये स्मार्टबोर्ड व संगणक उपलब्ध करून दिले. शाळाबाह्य मुलांचा शोध घेऊन त्यांना मुख्य प्रवाहात आणले. शिक्षक प्रशिक्षण कार्यक्रमांमुळे अध्यापनाचा दर्जा उंचावला. मध्यान्ह भोजन योजनेत पौष्टिक आहाराचा समावेश केल्याने गळतीचे प्रमाण कमी झाले. पालक-शिक्षक संघाच्या सहभागाने शाळा व्यवस्थापन अधिक प्रभावी झाले.",
    achievements: [
      "४२० शाळांमध्ये डिजिटल साधने उपलब्ध",
      "१,२५० शाळाबाह्य मुले मुख्य प्रवाहात",
      "शाळा गळतीचे प्रमाण ८.२% वरून ३.१% पर्यंत घट",
      "९५% शाळांमध्ये स्वच्छतागृह सुविधा पूर्ण",
    ],
  },
  {
    name: "माध्यमिक शिक्षण विभाग",
    icon: "🎓",
    shortDesc: "माध्यमिक विद्यार्थ्यांना उज्ज्वल भविष्याची वाट",
    story:
      "माध्यमिक शिक्षण विभागाने जिल्ह्यातील विद्यार्थ्यांच्या शैक्षणिक गुणवत्तेत मोठी भर घातली आहे. व्यावसायिक अभ्यासक्रमांचा समावेश करून विद्यार्थ्यांना रोजगारक्षम केले. मुलींच्या शिक्षणासाठी विशेष योजना राबवून त्यांचे प्रमाण वाढविले. शिष्यवृत्ती, स्पर्धा परीक्षा मार्गदर्शन व करिअर समुपदेशन उपक्रम यशस्वी ठरले. क्रीडा व सांस्कृतिक उपक्रमांद्वारे विद्यार्थ्यांच्या सर्वांगीण विकासावर भर दिला.",
    achievements: [
      "दहावीचा निकाल ७२% वरून ८४% पर्यंत वाढला",
      "मुलींचे नामांकन ६,५०० नवीन विद्यार्थिनींनी वाढले",
      "५० शाळांमध्ये व्यावसायिक प्रशिक्षण सुरू",
      "३,२०० विद्यार्थ्यांना शिष्यवृत्तीचा लाभ",
    ],
  },
  {
    name: "लघु पाटबंधारे",
    icon: "💧",
    shortDesc: "जलसंचय व सिंचनाद्वारे शेतीची भरभराट",
    story:
      "लघु पाटबंधारे विभागाने जिल्ह्यातील पाणी टंचाईवर मात करण्यासाठी अत्यंत महत्त्वाचे काम केले आहे. जुन्या व मोडकळीस आलेल्या तलावांची दुरुस्ती व गाळ काढण्याचे काम हाती घेतले. कोल्हापूर पद्धतीचे बंधारे बांधून पाण्याचा साठा वाढविला. शेत तळे योजनेद्वारे शेतकऱ्यांना वैयक्तिक पाणी साठवण सुविधा उपलब्ध केली. जलयुक्त शिवार अभियानाशी समन्वय साधून मृद व जलसंधारणाची कामे प्राधान्याने पूर्ण केली.",
    achievements: [
      "८७ तलावांची दुरुस्ती व गाळ उपसा पूर्ण",
      "३४ कोल्हापूर पद्धतीचे बंधारे बांधले",
      "१८,५०० हेक्टर अतिरिक्त सिंचन क्षमता निर्माण",
      "४२० शेत तळे बांधून शेतकऱ्यांना लाभ",
    ],
  },
  {
    name: "म.न.रे.गा",
    icon: "👷",
    shortDesc: "रोजगार हमीद्वारे ग्रामीण कुटुंबांना आधार",
    story:
      "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजनेच्या (मनरेगा) माध्यमातून जिल्ह्यातील लाखो मजुरांना वर्षभर रोजगार उपलब्ध करून दिला जात आहे. विशेषतः दुष्काळी काळात मजुरांना गाव न सोडता रोजगार मिळाल्याने स्थलांतर थांबले. महिलांचा सहभाग ५०% पेक्षा अधिक राहिल्याने महिला सशक्तीकरणाला चालना मिळाली. रस्ते, तलाव, विहिरी, शेत बांध यांसारख्या टिकाऊ मालमत्ता निर्मितीमुळे गावांचा कायमस्वरूपी विकास झाला. मजुरी थेट बँक खात्यात जमा होत असल्याने पारदर्शकता आली.",
    achievements: [
      "३,४५,००० कुटुंबांना जॉब कार्ड वितरण",
      "सरासरी ८२ दिवस प्रति कुटुंब रोजगार",
      "महिला सहभाग ५४% — राज्य सरासरीपेक्षा अधिक",
      "१,२०० किमी शेत रस्ते व ४५० विहिरी निर्मिती",
    ],
  },
];

// ─── Story Modal ──────────────────────────────────────────────────────────────

const StoryModal = ({
  dept,
  onClose,
}: {
  dept: StoryDept;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-blue-900 text-white px-6 py-4 rounded-t-2xl flex justify-between items-start gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{dept.icon}</span>
          <div>
            <h2 className="text-base font-bold leading-snug">{dept.name}</h2>
            <p className="text-xs text-blue-200 mt-0.5">{dept.shortDesc}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors mt-0.5"
        >
          <X size={20} />
        </button>
      </div>
      <div className="p-6 space-y-5">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">यशोगाथा</p>
          <p className="text-sm text-gray-700 leading-relaxed">{dept.story}</p>
        </div>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">प्रमुख उपलब्धी</p>
          <ul className="space-y-2">
            {dept.achievements.map((ach, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                {ach}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// ─── Sub-sections ─────────────────────────────────────────────────────────────

const FormerPresidents = () => (
  <div className="mb-10">
    <h3 className="text-base font-extrabold text-blue-900 mb-1 border-l-4 border-orange-500 pl-3">
      माजी अध्यक्ष
    </h3>
    <p className="text-sm text-gray-500 mb-4 pl-3">
      सन 1962 पासून अहिल्यानगरजिल्हा परिषदेचे अध्यक्ष –
    </p>
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full border-collapse">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-3 text-left text-sm font-bold w-16">अ. क्र.</th>
            <th className="p-3 text-left text-sm font-bold">अध्यक्षांचे नाव</th>
            <th className="p-3 text-left text-sm font-bold whitespace-nowrap">कालावधी – पासून</th>
            <th className="p-3 text-left text-sm font-bold whitespace-nowrap">कालावधी – पर्यंत</th>
          </tr>
        </thead>
        <tbody>
          {FORMER_PRESIDENTS.map((row, idx) => (
            <tr
              key={row.id}
              className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
            >
              <td className="p-3 text-sm text-gray-500 font-medium">{row.id}</td>
              <td className="p-3 text-sm font-semibold text-gray-800">{row.name}</td>
              <td className="p-3 text-sm text-gray-600">{row.from}</td>
              <td className="p-3 text-sm text-gray-600">{row.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const FormerCEOs = () => (
  <div className="mb-10">
    <h3 className="text-base font-extrabold text-blue-900 mb-1 border-l-4 border-orange-500 pl-3">
      माजी मुख्य कार्यकारी अधिकारी
    </h3>
    <p className="text-sm text-gray-500 mb-4 pl-3">
      सन 1962 पासूनचे अहिल्यानगरजिल्हा परिषदेचे मुख्य कार्यकारी अधिकारी –
    </p>
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full border-collapse">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-3 text-left text-sm font-bold w-16">अ. क्र.</th>
            <th className="p-3 text-left text-sm font-bold">नाव</th>
            <th className="p-3 text-left text-sm font-bold whitespace-nowrap">कालावधी (पासून)</th>
            <th className="p-3 text-left text-sm font-bold whitespace-nowrap">कालावधी (पर्यंत)</th>
          </tr>
        </thead>
        <tbody>
          {FORMER_CEOS.map((row, idx) => (
            <tr
              key={row.id}
              className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
            >
              <td className="p-3 text-sm text-gray-500 font-medium">{row.id}</td>
              <td className="p-3 text-sm font-semibold text-gray-800">{row.name}</td>
              <td className="p-3 text-sm text-gray-600">{row.from}</td>
              <td className="p-3 text-sm text-gray-600">{row.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const GallerySection = () => (
  <ContentPage title="छायाचित्र दालन">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {GALLERY_ITEMS.map((item) => (
        <div key={item.id} className="group cursor-pointer">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-2">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-sm font-medium text-gray-700 text-center">{item.name}</p>
        </div>
      ))}
    </div>
  </ContentPage>
);

const StoriesSection = () => {
  const [selected, setSelected] = useState<StoryDept | null>(null);
  return (
    <ContentPage title="यशोगाथा">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {SUCCESS_STORIES.map((dept, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(dept)}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
          >
            <div className="text-3xl mb-3">{dept.icon}</div>
            <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-900 transition-colors leading-snug mb-1">
              {dept.name}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">{dept.shortDesc}</p>
            <span className="text-xs font-bold text-blue-600 group-hover:text-orange-500 transition-colors">
              यशोगाथा वाचा →
            </span>
          </div>
        ))}
      </div>
      {selected && (
        <StoryModal dept={selected} onClose={() => setSelected(null)} />
      )}
    </ContentPage>
  );
};

// ─── Media कॉर्नर ─────────────────────────────────────────────────────────────

type MediaTab = 'presidents' | 'ceos' | 'gallery' | 'stories';

export const Media = () => {
  const [activeTab, setActiveTab] = useState<MediaTab>('presidents');

  const tabs: { key: MediaTab; label: string }[] = [
    { key: 'presidents', label: 'माजी अध्यक्ष' },
    { key: 'ceos', label: 'माजी मु.का.अ.' },
    { key: 'gallery', label: 'छायाचित्र दालन' },
    { key: 'stories', label: 'यशोगाथा' },
  ];

  return (
    <ContentPage title="मीडिया कॉर्नर">
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${activeTab === t.key
                ? 'bg-blue-900 text-white border-blue-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-900 hover:text-blue-900'
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'presidents' && <FormerPresidents />}
      {activeTab === 'ceos' && <FormerCEOs />}
      {activeTab === 'gallery' && <GallerySection />}
      {activeTab === 'stories' && <StoriesSection />}
    </ContentPage>
  );
};