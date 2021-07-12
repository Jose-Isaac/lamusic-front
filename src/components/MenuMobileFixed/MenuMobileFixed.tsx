import React, { ReactElement } from 'react';
import { ReactComponent as DashboardIcon } from '../../icons/home.svg';
import { ReactComponent as NewMusicIcon } from '../../icons/plus.svg';
import { ReactComponent as MoreIcon } from '../../icons/more.svg';

import { Menu, ListMenuItem, BoxMenuItem, MenuItemButton } from './styles';
import { useHistory } from 'react-router-dom';

interface Props {
  fontColor: string;
  fontSelectedColor: string;
  bgColor: string;
}

export default function MenuMobileFixed({
  fontColor,
  fontSelectedColor,
  bgColor,
}: Props): ReactElement {
  const history = useHistory();
  return (
    <Menu bgColor={bgColor}>
      <ListMenuItem>
        <BoxMenuItem
          onClick={() => history.push('/dashboard')}
          fill={fontColor}
        >
          <DashboardIcon />
          <MenuItemButton fontColor={fontColor}>Dashboard</MenuItemButton>
        </BoxMenuItem>

        <BoxMenuItem
          onClick={() => history.push('/music/new')}
          fill={fontColor}
        >
          <NewMusicIcon />
          <MenuItemButton fontColor={fontColor}>New music</MenuItemButton>
        </BoxMenuItem>

        <BoxMenuItem onClick={() => history.push('/options')} fill={fontColor}>
          <MoreIcon />
          <MenuItemButton fontColor={fontColor}>More</MenuItemButton>
        </BoxMenuItem>
      </ListMenuItem>
    </Menu>
  );
}
