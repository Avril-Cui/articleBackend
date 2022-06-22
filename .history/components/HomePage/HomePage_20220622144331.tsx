import MainLayout from "./MainLayout";
import SimulatorMain from './SimulatorSection/SimulatorMain';
import TermsMains from "./TermsSection/TermsMain";
import TheoryMain from "./TheorySection/TheoryMain";
import TestFirst from "./FrontPage/Test"

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