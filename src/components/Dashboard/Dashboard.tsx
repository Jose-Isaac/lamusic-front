import React from 'react';
import { themeStructure } from '../../types/themeStructure';

import { Container } from './styles';

interface DashboardProps {
  theme: themeStructure;
}

const Dashboard: React.FC<DashboardProps> = ({ theme }) => {
  return <Container></Container>;
};

export default Dashboard;
