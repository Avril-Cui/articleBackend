import MainLayout from "./FrontPage/MainLayout";
import SimulatorMain from './SimulatorSection/SimulatorMain';
import TermsMains from "./TermsSection/TermsMain";
import TheoryMain from "./TheorySection/TheoryMain";
import TestFirst from "./Test"
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={styles.Home}>
      <MainLayout />
      <TestFirst />
      <SimulatorMain />
      <TermsMains />
      <TheoryMain />
    </div>
  )
}

export default HomePage;