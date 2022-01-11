import React from 'react';
import DirectoryContainer from '../../components/directory/directory.container';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <DirectoryContainer />
  </div>
);

export default HomePage;
