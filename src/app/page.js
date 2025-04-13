import IntroSection from '../sections/IntroSection'
import ComplimentsSection from '../sections/ComplimentsSection'
import ProposalSection from '../sections/ProposalSection'
import DecisionSection from '../sections/DecisionSection'
import TestConnection from '../components/test'

export default function Home() {
  return (
    <main>
      <IntroSection />
      <ComplimentsSection />
      <ProposalSection />
      <DecisionSection />
      {/* <h1>ello</h1>
      <TestConnection /> */}
    </main>
  )
}
