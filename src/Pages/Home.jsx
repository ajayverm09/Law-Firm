import React from 'react'
import HomeHero from '../Components/HomeHero'
import OnlineServicesSection from '../Components/HomeService'
import IntegratedExperienceSection from '../Components/HomeExperience'
import TestimonialSection from '../Components/HomeTestimonial'
import StatsSection from '../Components/HomeStats'
import TeamSection from '../Components/HomeTeam'
import CaseResultsSection from '../Components/HomeCases'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HomeHero/>
      <OnlineServicesSection/>
      <IntegratedExperienceSection/>
      <TestimonialSection/>
      <TeamSection/> 
      <CaseResultsSection/>
      <StatsSection/>
      
    </div>
  )
}

export default Home
