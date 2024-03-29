import { useContext, useEffect } from 'react';

import { ThemeContext } from '../../context';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { lightMode } = useContext(ThemeContext);

  useEffect(() => {
    window.alert(lightMode ? 'lightmode!' : 'darkmode!');
  }, [lightMode]);

  return (
    <div id="monetize-dashboard" style={styles}>
      <div className="screen-title">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
