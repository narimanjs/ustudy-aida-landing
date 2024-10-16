import "./App.css";

import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import IfYouSection from "./components/IfYouSection/IfYouSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import SubjectsSection from "./components/SubjectsSection/SubjectsSection";
import FutureSection from "./components/FutureSection/FutureSection";
import CourseSection from "./components/CourseSection/CourseSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='app-container'>
      <Header />
      <IntroSection />
      <IfYouSection />
      <AdvantagesSection />
      <SubjectsSection />
      <FutureSection />
      <CourseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
