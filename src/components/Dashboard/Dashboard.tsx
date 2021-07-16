import React from 'react';
import { useRequestData } from '../../Hooks/useRequestData';
import { music } from '../../types/music';
import { themeStructure } from '../../types/themeStructure';
import ListMusics from '../ListMusics/ListMusics';
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

  return (
    <Container>
      <ListMusics
        userName={user.name}
        bgColor={theme.background.tertiary}
        fontColor={theme.font.secondary}
        musics={data.musics}
      />
      <MenuMobileFixed
        bgColor={theme.background.tertiary}
        fontColor={theme.font.tertiary}
        fontSelectedColor={theme.font.primary}
        optionSelected="dashboard"
      />
    </Container>
  );
};

export default Dashboard;
