import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';

const Video = ({ name, handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
      <div className="uk-vertical-align uk-text-center">
        <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
      </div>
      <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <h2>I always had a passion for video</h2>
          <p className="uk-text-large">Here are a couple of my best videos I have produced:</p>
          <div className="uk-grid">
            <div className="uk-width-medium-6-10 uk-margin-bottom">
              <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=3zZ7Cq9xXUU" />
            </div>
            <div className="uk-width-medium-4-10">
              <h2>Operation Generation</h2>
              <p>A music video telling my story from the Christchurch earthquake.</p>
            </div>
          </div>
          <div className="uk-grid">
            <div className="uk-width-medium-6-10 uk-margin-bottom">
              <ReactPlayer width="100%"url="https://www.youtube.com/watch?v=cBhLJtG3XdM" />
            </div>
            <div className="uk-width-medium-4-10">
              <h2>Jake & Olivia Erskine</h2>
              <p>My lastest wedding video.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Video.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default Video;
