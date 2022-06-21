import MainLayout from "./FrontPage/MainLayout";
import SimulatorMain from './SimulatorSection/SimulatorMain';
import TermsMains from "./TermsSection/TermsMain";
import TheoryMain from "./TheorySection/TheoryMain";

const HomePage = () => {
  return (
    <div>
      <MainLayout />
      <SimulatorMain />
      <TermsMains />
      <TheoryMain />
  </div>
  )
}

export default HomePage;