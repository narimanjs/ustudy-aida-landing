import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import IfYouSection from "./components/IfYouSection/IfYouSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import SubjectsSection from "./components/SubjectsSection/SubjectsSection";
import FutureSection from "./components/FutureSection/FutureSection";
import CourseSection from "./components/CourseSection/CourseSection";
import ContactSection from "./components/ContactSection/ContactSection";

import "./App.css";
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
    </div>
  );
}

export default App;
