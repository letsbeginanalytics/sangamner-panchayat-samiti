import React, { useState } from 'react';
import { ContentPage } from './About';
import { ExternalLink, Download, Eye } from 'lucide-react';

// ─── RTS (सार्वजनिक सेवेचा अधिकार) ──────────────────────────────────────────

interface RtsCategory { label: string; items: RtsItem[]; }
interface RtsItem { title: string; pdfFile: string; }

const RTS_CATEGORIES: RtsCategory[] = [
  {
    label: "सार्वजनिक सेवेचा अधिकार",
    items: [{ title: "अधिसूचित सेवा १ ते ७", pdfFile: "RTS_1to7.pdf" }],
  },
  {
    label: "महिला आणि बालकल्याण",
    items: [{ title: "महिला आणि बालकल्याण सेवा", pdfFile: "RTS_WomenChild.pdf" }],
  },
  {
    label: "शालेय शिक्षण आणि क्रीडा",
    items: [{ title: "शालेय शिक्षण आणि क्रीडा सेवा", pdfFile: "RTS_SchoolSports.pdf" }],
  },
  {
    label: "प्राथमिक शिक्षण",
    items: [{ title: "प्राथमिक शिक्षण सेवा", pdfFile: "RTS_PrimaryEdu.pdf" }],
  },
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
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
              activeTab === idx
                ? 'bg-gray-800 text-white border-gray-800'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-800 hover:text-gray-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">
          {RTS_CATEGORIES[activeTab].label}
        </div>
        <div className="grid grid-cols-2 px-4 py-2">
          <span className="text-sm font-bold">शीर्षक</span>
          <span className="text-sm font-bold">डाउनलोड करा</span>
        </div>
        {RTS_CATEGORIES[activeTab].items.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 px-4 py-3 items-center border-b border-gray-100 ${
              i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            } hover:bg-gray-100 transition-colors`}
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
        ))}
      </div>
    </ContentPage>
  );
};

// ─── Services (नागरी सुविधा केंद्र) ─────────────────────────────────────────

const ServicesSection = () => (
  <ContentPage title="नागरी सुविधा केंद्र">
  <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
    
    <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">
      नागरी सुविधा केंद्र
    </div>

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

      {/* ✅ RTI Section (same card me integrated) */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <p className="text-sm font-semibold text-gray-800 mb-1">
          माहितीचा अधिकार अधिनियम २००५
        </p>
        <p className="text-xs text-gray-600 mb-3">
          कलम ४ अन्वये १ ते १७ बाबींची माहिती खालील PDF मध्ये उपलब्ध आहे.
        </p>

        {/* ✅ PDF Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/pdfs/RTI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
          >
            <Eye size={14} /> PDF पहा
          </a>

          <a
            href="/pdfs/RTI.pdf"
            download="RTI.pdf"
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

// ─── Grievance (तक्रार निवारण) ───────────────────────────────────────────────

const GRIEVANCE_LINKS = [
  { label: "प्रशासकीय सुधारणा आणि सार्वजनिक तक्रारी विभाग (सीपीजीआरएमएस)", url: "https://pgportal.gov.in/" },
  { label: "तक्रार निवारण प्रणाली (महाराष्ट्र राज्य)", url: "https://grievances.maharashtra.gov.in/mr" },
  { label: "आपले सरकार", url: "https://aaplesarkar.mahaonline.gov.in" },
];

const GrievanceSection = () => (
  <ContentPage title="तक्रार निवारण">
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">तक्रार निवारण</div>
      {GRIEVANCE_LINKS.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between px-4 py-3 border-b border-gray-100 transition-colors group ${
            i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } hover:bg-gray-100`}
        >
          <span className="text-sm text-gray-800 group-hover:text-gray-900">{link.label}</span>
          <ExternalLink size={15} className="text-gray-500 shrink-0 ml-3" />
        </a>
      ))}
    </div>
  </ContentPage>
);

// ─── Forms / अर्ज ────────────────────────────────────────────────────────────

interface FormItem { title: string; pdfFile: string; size?: string; }

const FORMS: FormItem[] = [
  {
    title: "अनुकंपा तत्वावर नियुक्ती संदिभंत संवर्ग-3 व संवर्ग-4 साठीची तात्पुरती प्रतीक्षा सूची (माही डिसेंबर 2024 अखेर)",
    pdfFile: "AnukampaList.pdf",
    size: "2 MB",
  },
  {
    title: "अनुकंपा तत्वावर नियुक्तीसाठी आवश्यक असलेले सर्व प्रतिज्ञापत्र",
    pdfFile: "AnukampaAffidavit.pdf",
    size: "127 KB",
  },
];

const FormsSection = () => (
  <ContentPage title="अर्ज">
    {/* Swayam Portal — same table design */}
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-4">
      <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">स्वयम पोर्टल</div>
      <div className="bg-white px-4 py-4">
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
          className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 hover:underline font-semibold"
        >
          भेट : https://swayam.gov.in <ExternalLink size={13} />
        </a>
      </div>
    </div>

    {/* Forms table */}
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 font-bold text-sm">अर्ज</div>
      <div className="grid grid-cols-2 px-4 py-2">
        <span className="text-sm font-bold text-gray-800">शीर्षक</span>
        <span className="text-sm font-bold text-gray-800">डाउनलोड करा</span>
      </div>
      {FORMS.map((form, i) => (
        <div
          key={i}
          className={`grid grid-cols-2 px-4 py-3 items-center border-b border-gray-100 ${
            i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } hover:bg-gray-100 transition-colors`}
        >
          <span className="text-sm text-gray-800 pr-4">{form.title}</span>
          <div className="flex items-center gap-3">
            <a
              href={`/pdfs/${form.pdfFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1"
            >
              पहा{form.size ? ` (${form.size})` : ''} <Eye size={14} />
            </a>
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

// ─── Main Citizens export ─────────────────────────────────────────────────────

export const Citizens = ({ section }: { section: string }) => {
  if (section === 'rts')       return <RtsSection />;
  if (section === 'services')  return <ServicesSection />;
  if (section === 'grievance') return <GrievanceSection />;
  if (section === 'forms')     return <FormsSection />;

  // Default — माहिती
  return (
    <ContentPage title="माहिती">
      <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">स्वयम पोर्टल</div>
        <div className="bg-white px-4 py-4">
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
            className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 hover:underline font-semibold"
          >
            भेट : https://swayam.gov.in <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </ContentPage>
  );
};