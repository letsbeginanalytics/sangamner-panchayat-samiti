/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { Home } from './pages/Home';
import {
  Introduction,
  VisionMission,
  ObjectivesFunctions,
  AdminStructure,
  Organizations,
  WhosWho
} from './pages/About';
import {
  Schemes,
  Directory,
  AdminDepts,
  Citizens,
  Documents,
  Notices,
  Media,
  WebInfoManager,
  HelpSection,
  WebsitePolicies
} from './pages/Pages';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Department */}
            <Route path="/about/intro" element={<Introduction />} />
            <Route path="/about/vision" element={<VisionMission />} />
            <Route path="/about/objectives" element={<ObjectivesFunctions />} />
            <Route path="/about/structure" element={<AdminStructure />} />
            <Route path="/about/organizations" element={<Organizations />} />
            <Route path="/about/whos-who" element={<WhosWho />} />

            {/* Schemes */}
            <Route path="/schemes/state" element={<Schemes type="state" />} />
            <Route path="/schemes/central" element={<Schemes type="central" />} />

            {/* Directory */}
            <Route path="/directory" element={<Directory />} />

            {/* Admin Departments */}
            <Route path="/admin-depts/zp" element={<AdminDepts type="zp" />} />
            <Route path="/admin-depts/ps" element={<AdminDepts type="ps" />} />
            {/* Citizens */}
            <Route path="/citizens/grievance" element={<Citizens section="grievance" />} />
            <Route path="/citizens/services" element={<Citizens section="services" />} />
            <Route path="/citizens/rts" element={<Citizens section="rts" />} />
            <Route path="/citizens/forms" element={<Citizens section="forms" />} />
            <Route path="/citizens/swayam" element={<Citizens section="swayam" />} />

            {/* Documents */}
            <Route path="/documents" element={<Documents />} />

            {/* Web Info Manager */}
            <Route path="/web-info-manager" element={<WebInfoManager />} />
            <Route path="/help" element={<HelpSection />} />

            {/* Website Policies */}
            <Route path="/website-policies" element={<WebsitePolicies />} />

            {/* Notices */}
            <Route path="/notices" element={<Notices />} />

            {/* Media */}
            {/* <Route path="/media/gallery" element={<Media type="gallery" />} />
            <Route path="/media/stories" element={<Media type="stories" />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
