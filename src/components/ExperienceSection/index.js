import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import SBSLogo from '../../assets/images/experience/SBSlogo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={SBSLogo}
            colour='#FFFFF'
            title='Sopra Banking Software'
            link='https://www.soprabanking.com/bienvenue'
            timeperiod='2015 - 2018'
            subtitle='Learnt the ins and outs of software development and
              built various features for banks.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
