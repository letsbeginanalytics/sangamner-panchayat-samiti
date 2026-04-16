import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../images/logo.jpeg';
import opi from '../images/OIP.png';
const navItems = [
  { name: 'मुख्यपृष्ठ', path: '/' },
  {
    name: 'विभागाविषयी',
    path: '/about/intro',
    children: [
      { name: 'प्रस्तावना', path: '/about/intro' },
      { name: 'दृष्टी आणि ध्येय', path: '/about/vision' },
      { name: 'उद्दिष्टे आणि कार्ये', path: '/about/objectives' },
      { name: 'प्रशासकीय रचना', path: '/about/structure' },
      // { name: 'संस्था', path: '/about/organizations' },
      { name: 'कोणाचे कोण', path: '/about/whos-who' },
    ],
  },
  {
    name: 'योजना / कार्यक्रम',
    path: '/schemes/state',
    children: [
      { name: 'राज्य सरकार', path: '/schemes/state' },
      { name: 'केंद्र सरकार', path: '/schemes/central' },
    ],
  },
  { name: 'निर्देशिका', path: '/directory' },
  {
    name: 'प्रशासकीय विभाग',
    path: '/admin-depts/ps',
    children: [
      // { name: 'जिल्हा परिषद', path: '/admin-depts/zp' },
      { name: 'पंचायत समिती', path: '/admin-depts/ps' },
    ],
  },
  {
    name: 'नागरिकांविषयी',
    path: '/citizens/grievance',
    children: [
      { name: 'तक्रार निवारण', path: '/citizens/grievance' },
      { name: 'सेवा', path: '/citizens/services' },
      // { name: 'सार्वजनिक सेवेचा अधिकार', path: '/citizens/rts' },
      // { name: 'अर्ज', path: '/citizens/forms' },
      { name: 'स्वयम पोर्टल', path: '/citizens/swayam' },
    ],
  },
  { name: 'कागदपत्रे', path: '/documents' },
  { name: 'सूचना', path: '/notices' },
  // {
  //   name: 'मीडिया कॉर्नर',
  //   path: '/media/gallery',
  // children: [
  //   { name: 'छायाचित्र दालन', path: '/media/gallery' },
  //   { name: 'यशोगाथा', path: '/media/stories' },
  // ],
  // },
];

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-gov text-white py-1 hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center text-[12px]">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> 02425-272798</span>
            <span className="flex items-center gap-1"><Mail size={12} /> 	bdosangamner@rediffmail.com</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative group flex gap-2 border-r border-white/20 pr-4">
              <a
                href="https://www.facebook.com/share/17KxUgoVvR/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-orange-gov"
              >
                <Facebook size={20} />
              </a>

              <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Panchayat Samiti Sangamner Facebook Page
              </span>
            </div>
            {/* <div className="flex gap-3">
              <span className="cursor-pointer hover:underline">A-</span>
              <span className="cursor-pointer hover:underline font-bold">A</span>
              <span className="cursor-pointer hover:underline">A+</span>
            </div> */}
            <select className="bg-transparent border-none outline-none cursor-pointer text-white text-[11px]">
              <option className="text-black">Marathi</option>
              <option className="text-black">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        
        <div className="cover mx-auto px-4 py-3">
          <Link to="/" className="flex gap-3">
               
            <img src={opi} alt="Emblem" className="h-15 mt-3" />
            <img src="https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/04/20250415379430117.png" alt="Digital India" className="h-13 mt-3" />
            <img src="https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/04/202504111579669448.png" alt="Swachh Bharat" className="h-13 mt-3" />  
            {/* <img src={logo} alt="Swachh Bharat" className="h-14 mt-3" />     */}
            <div className="border-l border-gray-200 pl-3">
              <p className="text-[11px] md:text-[13px] text-orange-gov font-bold uppercase tracking-wider">महाराष्ट्र शासन,</p>
               <p className="text-[11px] md:text-[13px] text-orange-gov font-bold uppercase tracking-wider">ग्रामविकास व पंचायत राज विभाग,</p>
              <p className="text-[11px] md:text-[13px] text-orange-gov font-bold uppercase tracking-wider">जिल्हा परिषद अहिल्यानगर,</p>
              <h1 className="text-xl md:text-2xl font-bold text-blue-gov leading-tight">पंचायत समिती संगमनेर</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-orange-gov">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <nav className="hidden lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "px-4 py-3 text-[13px] font-bold transition-all hover:bg-blue-gov text-white flex items-center gap-1 border-r border-white/10",
                    location.pathname === item.path || location.pathname.startsWith(item.path.split('/')[1]) ? "bg-blue-gov" : ""
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown size={12} />}
                </Link>
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-56 bg-white border-t-2 border-blue-gov shadow-2xl z-[100]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2.5 text-[13px] text-gray-700 hover:bg-orange-gov hover:text-green-500 border-b border-gray-50 last:border-0 font-medium"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="lg:hidden flex w-full justify-between items-center py-2">
            <span className="text-white font-bold text-sm">MENU</span>
            <button className="p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-xl">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-50">
              <div className="flex justify-between items-center px-4 py-3">
                <Link to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-bold text-blue-gov">
                  {item.name}
                </Link>
                {item.children && (
                  <button onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}>
                    <ChevronDown size={16} className={cn("transition-transform", activeDropdown === item.name && "rotate-180")} />
                  </button>
                )}
              </div>
              {item.children && activeDropdown === item.name && (
                <div className="bg-gray-50 py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-2.5 text-[13px] text-gray-600 hover:text-orange-gov border-b border-white last:border-0"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  const footerLinks = [
    // { name: 'अभिप्राय', path: '/#' },
    { name: 'सूचना', path: '/notices' },
    { name: 'वेबसाइट धोरणे', path: '/website-policies' },
    { name: 'आमच्याशी संपर्क साधा', path: '/admin-depts/ps' },
    // { name: 'मदत', path: '/help' },
    { name: 'वेब माहिती व्यवस्थापक', path: '/web-info-manager' },
    // { name: 'संकेतस्थळ अभ्यागत सारांश', path: '#' },
    // { name: 'हेल्पलाइन', path: '#' },
    // { name: 'साइट मॅप', path: '#' },
  ];

  return (
    <footer className="bg-blue-gov text-white">
      {/* <div className="bg-white/5 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 border-b border-orange-gov/30 pb-2 inline-block">महत्वाचे दुवे</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-blue-100">
              <Link to="/about/intro" className="hover:text-orange-gov flex items-center gap-1">» प्रस्तावना</Link>
              <Link to="/admin-depts/ps" className="hover:text-orange-gov flex items-center gap-1">» योजना</Link>
              <Link to="/notices" className="hover:text-orange-gov flex items-center gap-1">» सूचना</Link>
              <Link to="/directory" className="hover:text-orange-gov flex items-center gap-1">» निर्देशिका</Link>
              <a href="https://www.maharashtra.gov.in" target="_blank" className="hover:text-orange-gov flex items-center gap-1">» महाराष्ट्र शासन</a>
              <a href="https://nagarzp.gov.in/" target="_blank" className="hover:text-orange-gov flex items-center gap-1">» जिल्हा परिषद अहिल्यानगर</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-orange-gov/30 pb-2 inline-block">संपर्क</h3>
            <div className="space-y-2 text-sm text-blue-100">
              <p>पंचायत समिती संगमनेर,</p>
              <p>अहिल्यानगर, महाराष्ट्र - 422605</p>
              <p>फोन: 02425-272798</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-orange-gov/30 pb-2 inline-block">सोशल मीडिया</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17KxUgoVvR/" className="p-2 bg-white/10 rounded hover:bg-orange-gov transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-blue-900/50 py-4 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] mb-4">
            {footerLinks.map(link => (
              <Link key={link.name} to={link.path} className="hover:text-orange-gov border-r border-white/20 pr-6 last:border-0">{link.name}</Link>
            ))}
          </div>
          <div className="text-center text-[11px] text-blue-200 flex justify-between items-center flex-wrap gap-2">
            <p>© २०२४ पंचायत समिती संगमनेर. सर्व हक्क राखीव.</p>
            <p className="mt-1">
              डिझाइन आणि विकसित:{" "}
              <a
                href="https://avakinfotech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                AVAK INFOTECH
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
