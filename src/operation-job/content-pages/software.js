import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';
import ohLogo from '../../assets/images/oh-logo.png';
import atLogo from '../../assets/images/at-logo.png';
import ucLogo from '../../assets/images/uc-logo.png';
import codenameRambo from '../../assets/images/codename-rambo.jpg';
import teamMarvel from '../../assets/images/team-marvel.jpg';
import grantMiller from '../../assets/images/grant-miller.jpg';

const Software = ({ handleClick }) => {
  const whatDrivesMe = 'Software Development is a lot of fun! I enjoy creating websites and I have become passionate about web ' +
    'technologies like npm, react and uikit from my time at Orion Health. This website was built with these technologies. ' +
     'I also have experience with Java, Python and a few others. Code, motivation and my thoughts for this website can be ' +
     'found in my Github repo ';
  const teamsParagraph = ' teams; the first \'Codename: Rambo\', the second \'Team Marvel:\'';
  const healthcareSoftware = 'Healthcare software has very high standards. Because of this I learnt to write code that was accessible, ' +
    'secure, multilingual, responsive, well unit tested and worked on the latest browsers.';
  const dualRole = 'I also had a dual role at Orion Health for 6 months on their Junior Development Board. ' +
    'See the Leader page for more details.';
  const grantReference = '"In the two years I have worked with Joe I have found him to be a most enthusiastic young developer. ' +
    'Joe is a very committed team player, always keen to put his hand up for work and is confident and willing to pick up ' +
    'different technologies as displayed by his recent found passion for React. Friendly and approachable with a good ' +
    'understanding of working in an open, Agile environment, Joe would make a great addition to any team looking for a ' +
    'young person with a tonne of passion to burn."';

  return (
    <div className="operation-job-page uk-height-viewport">
      <NavBar handleClick={handleClick} />
      <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
        <div className="uk-vertical-align uk-text-center">
          <h1 className="oj-title uk-vertical-align-middle uk-margin-top">Software Developer</h1>
        </div>
        <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
          <div className="uk-width-1-1">
            <h2>What Drives Me</h2>
            <p className="uk-text-large">
              {whatDrivesMe}
              <a href="https://github.com/slimjim181/operation-job">here</a>.
            </p>
            <h2>Experience</h2>
            <div className="uk-grid" data-uk-grid-margin>
              <div className="uk-width-medium-1-2">
                <div className="uk-grid">
                  <div>
                    <img width="90px" height="90px" src={ohLogo} alt="Orion Health Logo" />
                  </div>
                  <div className="oj-full-flex">
                    <h3 className="oj-no-margin">Orion Health</h3>
                    <p className="uk-text-bold oj-no-margin">Software Engineer</p>
                    <p className="oj-no-margin">Jan 2015 - Apr 2017 - 2 yrs 4 mos</p>
                  </div>
                </div>
              </div>
              <div className="uk-width-medium-1-2">
                <div className="uk-grid">
                  <div>
                    <img width="85px" height="51px" src={atLogo} alt="Allied Telesis Logo" />
                  </div>
                  <div className="oj-full-flex">
                    <h3 className="oj-no-margin">Allied Telesis</h3>
                    <p className="uk-text-bold oj-no-margin">Summer Internship</p>
                    <p className="oj-no-margin">Nov 2013 - Feb 2014 - 4 mos</p>
                  </div>
                </div>
              </div>
            </div>
            <h2>Education</h2>
            <div className="uk-width-medium-1-2">
              <div className="uk-grid">
                <div>
                  <img width="80px" src={ucLogo} alt="University of Canterbury Logo" />
                </div>
                <div className="oj-full-flex">
                  <h3 className="oj-no-margin">University of Canterbury</h3>
                  <p className="uk-text-bold oj-no-margin">Bachelor of Science in Computer Science</p>
                  <p className="oj-no-margin">2012 - 2014</p>
                </div>
              </div>
            </div>
            <h2>Software Developer at Orion Health</h2>
            <p>At Orion Health I spent my entire time working on one product: Patient Portal (marketed as
              <a href="https://orionhealth.com/nz/products/engage/"> Engage</a>) with two different
              <a href="https://www.scrum.org/resources/what-is-scrum"> Scrum</a>{teamsParagraph}
            </p>
            <div className="uk-grid uk-margin-bottom">
              <div className="uk-width-medium-1-2 uk-margin-bottom">
                <img src={codenameRambo} width="600px" alt="Codename: Rambo" title="Codename: Rambo" />
              </div>
              <div className="uk-width-medium-1-2">
                <img src={teamMarvel} width="600px" alt="Team Marvel" title="Team Marvel" />
              </div>
            </div>
            <p>{healthcareSoftware} At Orion Health we used
              <a href="https://www.atlassian.com/"> Atlassians </a>
              software development tools to manage and collaborate on our software. {dualRole}</p>
            <p>Sadly my time came to a sudden end at Orion Health with redundancy due to
              <a
                href="http://www.stuff.co.nz/business/industries/91796675/scores-of-job-losses-expected-at-orion-health"
              > financial reasons</a>.
            </p>
            <h2>Recommendations</h2>
            <div className="uk-grid">
              <div className="uk-width-medium-3-10 uk-margin-bottom">
                <div className="uk-grid">
                  <div>
                    <a href="https://www.linkedin.com/in/grant-miller-b1b99276/">
                      <img
                        className="oj-border-radius"
                        width="56px"
                        src={grantMiller}
                        alt="Grant Miller"
                      />
                    </a>
                  </div>
                  <div className="oj-full-flex">
                    <h3 className="oj-no-margin">Grant Miller</h3>
                    <p className="uk-text-bold oj-no-margin">Senior Team Lead at Orion Health</p>
                    <p className="oj-no-margin">My direct manager in Team Marvel</p>
                  </div>
                </div>
              </div>
              <div className="uk-width-medium-7-10">
                <p>{grantReference}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Software.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Software;
