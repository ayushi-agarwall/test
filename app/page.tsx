import Header from '@/components/header'
import HeroSection from '@/components/sections/hero'
import Logos from '@/components/sections/logos'
import Problem from '@/components/sections/problem'
import Solution from '@/components/sections/solution'
import HowItWorks from '@/components/sections/how-it-works'
import FAQ from '@/components/sections/faq'
import Testimonials from '@/components/sections/testimonials'
import { Footer } from '@/components/footer'
import MyForm from '@/components/sections/agent'

export default function Home() {
  return (
    <main>
      <Header />
      <MyForm />
    </main>
  )
}
