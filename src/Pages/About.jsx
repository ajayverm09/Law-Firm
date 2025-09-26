import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutTrustSection from '../Components/AboutTrust'
import DifferentSection from '../Components/AboutDifferent'
import ProcessSection from '../Components/AboutProcess'
import PracticeSection from '../Components/AboutPractice'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutTrustSection/>
      <DifferentSection/>
      <ProcessSection/>
      <PracticeSection/>
    </div>
  )
}

export default About
