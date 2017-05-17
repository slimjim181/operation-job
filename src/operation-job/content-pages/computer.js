import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';
import bumblebeeComponents from '../../assets/images/bumblebee-components.jpg';
import bumblebeeComplete from '../../assets/images/bumblebee-complete.jpg';
import razorComponents from '../../assets/images/razor-components.jpg';
import razorInside from '../../assets/images/razor-inside.jpg';

const Computer = ({ handleClick }) => (
  <div className="operation-job-page uk-height-viewport">
    <NavBar handleClick={handleClick} />
    <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
      <div className="uk-vertical-align uk-text-center">
        <h1 className="oj-title uk-vertical-align-middle uk-margin-top">Computer Builder</h1>
      </div>
      <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <p className="uk-text-large">
            My number one hobby to do in my spare time is to build computers.
          </p>
          <p>Meet two of my favourite builds Bumblebee and Razor. Both computers were built for gaming and video editing.</p>
          <div className="uk-grid uk-margin-bottom">
            <div className="uk-width-medium-1-2 uk-margin-bottom">
              <div className="uk-margin">
                <img src={bumblebeeComponents} width="600px" alt="Bumblebee PC Components" title="Bumblebee PC Components" />
              </div>
              <div className="uk-margin">
                <img src={bumblebeeComplete} width="600px" alt="Bumblebee PC Computer" title="Bumblebee PC Computer" />
              </div>
            </div>
            <div className="uk-width-medium-1-2">
              <div className="uk-margin">
                <h2>Bumblebee (2017)</h2>
                <table className="uk-table uk-table-striped">
                  <tbody>
                    <tr><td className="uk-text-bold">CPU:</td><td>Intel Core i7 7700K</td></tr>
                    <tr><td className="uk-text-bold">RAM:</td><td>Corsair Vengeance LPX DDR4 3200MHz 2x8GB</td></tr>
                    <tr><td className="uk-text-bold">GPU:</td><td>Gigabyte Geforce GTX 1080 G1 Gaming 8GB</td></tr>
                    <tr><td className="uk-text-bold">CASE:</td><td>Corsair Graphite 380T Hornet</td></tr>
                    <tr><td className="uk-text-bold">MOTHERBOARD:</td><td>Asus ROG Strix Z270I Gaming</td></tr>
                    <tr><td className="uk-text-bold">PSU:</td><td>Corsair RM650i 650W</td></tr>
                    <tr><td className="uk-text-bold">SSD:</td><td>Samsung 960 Pro M.2 NVMe 512GB</td></tr>
                    <tr><td className="uk-text-bold">HDD:</td><td>Seagate Enterprise NAS 5TB</td></tr>
                    <tr><td className="uk-text-bold">OS:</td><td>Windows 10 Pro (64-Bit)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="uk-grid uk-margin-bottom">
            <div className="uk-width-medium-1-2 uk-margin-bottom">
              <div className="uk-margin">
                <img src={razorComponents} width="600px" alt="Razor PC Components" title="Razor PC Components" />
              </div>
              <div className="uk-margin">
                <img src={razorInside} width="600px" alt="Inside of Razor PC" title="Inside of Razor PC" />
              </div>
            </div>
            <div className="uk-width-medium-1-2">
              <div className="uk-margin">
                <h2>Razor (2013)</h2>
                <table className="uk-table uk-table-striped">
                  <tbody>
                    <tr><td className="uk-text-bold">CPU:</td><td>Intel Core i7 4771</td></tr>
                    <tr><td className="uk-text-bold">RAM:</td><td>Kingston HyperX DDR3 1600MHz 2x8GB</td></tr>
                    <tr><td className="uk-text-bold">GPU:</td><td>Sapphire Radeon R9 280X 3GB</td></tr>
                    <tr><td className="uk-text-bold">CASE:</td><td>Thermaltake Armor Revo</td></tr>
                    <tr><td className="uk-text-bold">MOTHERBOARD:</td><td>Gigabyte GA-Z87X-D3H</td></tr>
                    <tr><td className="uk-text-bold">PSU:</td><td>Seasonic G-650 650W</td></tr>
                    <tr><td className="uk-text-bold">SSD:</td><td>Intel 530 Series 180GB</td></tr>
                    <tr><td className="uk-text-bold">HDD:</td><td>2x Seagate Barracuda 2TB in RAID 0</td></tr>
                    <tr><td className="uk-text-bold">ODD:</td><td>Lite-On iHBS312 Blu-ray</td></tr>
                    <tr><td className="uk-text-bold">OS:</td><td>Windows 8.1 Pro (64-Bit)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Computer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};


export default Computer;
