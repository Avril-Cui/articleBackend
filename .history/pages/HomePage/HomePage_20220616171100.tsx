import MainLayout from "./FrontPage/MainLayout";
import SimulatorMain from './SimulatorSection/SimulatorMain';
import TermsMains from "./TermsSection/TermsMain";
import TheoryMain from "./TheorySection/TheoryMain";
import PageButtom from "../components/PageButtom/PageButtom"

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