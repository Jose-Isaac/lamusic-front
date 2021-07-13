import React from 'react';
import { useRequestData } from '../../Hooks/useRequestData';
import { music } from '../../types/music';
import { themeStructure } from '../../types/themeStructure';
import MenuMobileFixed from '../MenuMobileFixed/MenuMobileFixed';

import { Container } from './styles';

interface DashboardProps {
  theme: themeStructure;
}

const Dashboard: React.FC<DashboardProps> = ({ theme }) => {
  const user = JSON.parse(localStorage.getItem('user') as string);
  const [data, getData] = useRequestData<{ message: string; musics: music[] }>(
    '/musics/',
    { message: '', musics: [] }
  );

  console.log(data);
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
