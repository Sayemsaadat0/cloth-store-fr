import { AboutSection } from "@/components/pages/AboutSection"
import { Hero } from "../components/pages/Hero"
import { PeoductSection } from "@/components/pages/PeoductSection"
import { WhyUs } from "@/components/pages/WhyUs"
import { Membership } from "@/components/pages/MemberShip"
import { Clients } from "@/components/pages/Clients"
import { WorkProcess } from "@/components/pages/WorkProcess"
import { ExportCountries } from "@/components/pages/ExportCountries"
// import { MemberShip } from "@/components/pages/MemberShip"

function Home() {
  return (
    <div >
      <Hero />
      <AboutSection />
      <PeoductSection />
      <WhyUs />
      <Membership />
      <Clients />
      <WorkProcess/>
      <ExportCountries />
    </div>
  )
}

export default Home