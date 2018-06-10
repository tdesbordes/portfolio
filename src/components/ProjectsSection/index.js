import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import backgroundGeneratorLogo from '../../assets/images/projects/background-generator.png'
import facerecoappLogo from '../../assets/images/projects/facerecoapp-logo.png'
import memphisEventLogo from '../../assets/images/projects/memphis-event.png'
import robofriendsLogo from '../../assets/images/projects/robofriends.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={backgroundGeneratorLogo}
            colour="#FFFFFF"
            title="Background Generator"
            link="https://tdesbordes.github.io/background-generator/"
            timeperiod="2018"
            subtitle="A gradient background generator built during Udemy Training."
          />
          <ExperienceUnit
            logo={facerecoappLogo}
            colour="#FFFFFF"
            title="Face Recognition App"
            link="https://facerecoapp.herokuapp.com/"
            timeperiod="2018"
            subtitle="A funny brain which can recognize a face on a picture. Built using React/Redux."
          />
          <ExperienceUnit
            logo={memphisEventLogo}
            colour="#FFFFFF"
            title="Memphis Events"
            link="https://tdesbordes.github.io/memphis-react/"
            timeperiod="2018"
            subtitle="A website designed in order to show all the events in Memphis. Built with Tachyons"
          />
          <ExperienceUnit
            logo={robofriendsLogo}
            colour="#FFFFFF"
            title="Robofriends"
            link="https://tdesbordes.github.io/robofriends/"
            timeperiod="2018"
            subtitle="A list of robots built in order to learn React."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
