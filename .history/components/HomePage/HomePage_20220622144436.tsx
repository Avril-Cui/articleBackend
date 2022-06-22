import MainLayout from "./FrontPage/MainLayout";
import SimulatorMain from './SimulatorSection/SimulatorMain';
import TermsMains from "./TermsSection/TermsMain";
import TheoryMain from "./TheorySection/TheoryMain";
import TestFirst from "./Test"

const HomePage = () => {
  return (
    <div>
      <MainLayout />
      <TestFirst />
      <SimulatorMain />
      <TermsMains />
      <TheoryMain />
    </div>
  )
}

export default HomePage;