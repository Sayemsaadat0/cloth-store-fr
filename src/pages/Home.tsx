import { AboutSection } from "@/components/pages/AboutSection"
import { Hero } from "../components/pages/Hero"
import { PeoductSection } from "@/components/pages/PeoductSection"

function Home() {
  return (
    <div >
      <Hero />
      <AboutSection />
      <PeoductSection />
    </div>
  )
}

export default Home