<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
=======
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomeSection from './components/HomeSection'
import PastEventsSection from './components/PastEventsSection'
import OurTeamSection from './components/OurTeamSection'
import PlanOfActionSection from './components/PlanOfActionSection'
import FlagshipProgramsSection from './components/FlagshipProgramsSection'
import WorkshopsSection from './components/WorkshopsSection'
import WeeklyCadenceSection from './components/WeeklyCadenceSection'
import SignatureEventsSection from './components/SignatureEventsSection'
import CommunityImpactSection from './components/CommunityImpactSection'
import Footer from './components/Footer'

const sections = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'past-events', name: 'Past Events', path: '/past-events' },
  { id: 'our-team', name: 'Our Team', path: '/our-team' },
  { id: 'plan-of-action', name: 'Plan of Action', path: '/plan-of-action' },
  { id: 'flagship-programs', name: 'Flagship Programs', path: '/flagship-programs' },
  { id: 'workshops', name: 'Workshops', path: '/workshops' },
  { id: 'weekly-cadence', name: 'Weekly Cadence', path: '/weekly-cadence' },
  { id: 'signature-events', name: 'Signature Events', path: '/signature-events' },
  { id: 'community-impact', name: 'Community & Impact', path: '/community-impact' }
]

function AppContent() {
  const location = useLocation()
  
  const getCurrentPage = () => {
    const path = location.pathname
    const section = sections.find(s => s.path === path)
    return section ? section.id : 'home'
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation sections={sections} currentPage={getCurrentPage()} />
      
      <main>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/past-events" element={<PastEventsSection />} />
          <Route path="/our-team" element={<OurTeamSection />} />
          <Route path="/plan-of-action" element={<PlanOfActionSection />} />
          <Route path="/flagship-programs" element={<FlagshipProgramsSection />} />
          <Route path="/workshops" element={<WorkshopsSection />} />
          <Route path="/weekly-cadence" element={<WeeklyCadenceSection />} />
          <Route path="/signature-events" element={<SignatureEventsSection />} />
          <Route path="/community-impact" element={<CommunityImpactSection />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
>>>>>>> 01b593279a1db87916349044951021493075028a

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <AppLayout />
    </Router>
  );
}

export default App;
=======
      <AppContent />
    </Router>
  )
}

export default App
>>>>>>> 01b593279a1db87916349044951021493075028a
