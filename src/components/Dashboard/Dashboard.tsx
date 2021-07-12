import React from 'react';
import { themeStructure } from '../../types/themeStructure';
import MenuMobileFixed from '../MenuMobileFixed/MenuMobileFixed';

import { Container } from './styles';

interface DashboardProps {
  theme: themeStructure;
}

const Dashboard: React.FC<DashboardProps> = ({ theme }) => {
  return (
    <Container>
      <MenuMobileFixed
        bgColor={theme.background.tertiary}
        fontColor={theme.font.secondary}
        fontSelectedColor={theme.font.primary}
      />
    </Container>
  );
};

export default Dashboard;
