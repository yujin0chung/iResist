import React from 'react';
import { Load } from './StyledComponents.jsx';
import Loader from 'halogen/RingLoader';

const Spinner = () => (
  <Load><Loader/></Load>
)

export default Spinner;