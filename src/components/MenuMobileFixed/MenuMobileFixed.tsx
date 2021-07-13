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
  optionSelected: string;
}

export default function MenuMobileFixed({
  fontColor,
  fontSelectedColor,
  bgColor,
  optionSelected,
}: Props): ReactElement {
  const history = useHistory();
  return (
    <Menu bgColor={bgColor}>
      <ListMenuItem>
        <BoxMenuItem
          onClick={() => history.push('/dashboard')}
          fill={optionSelected === 'dashboard' ? fontSelectedColor : fontColor}
        >
          <DashboardIcon />
          <MenuItemButton
            fontColor={
              optionSelected === 'dashboard' ? fontSelectedColor : fontColor
            }
          >
            Dashboard
          </MenuItemButton>
        </BoxMenuItem>

        <BoxMenuItem
          onClick={() => history.push('/music/new')}
          fill={optionSelected === 'newMusic' ? fontSelectedColor : fontColor}
        >
          <NewMusicIcon />
          <MenuItemButton
            fontColor={
              optionSelected === 'newMusic' ? fontSelectedColor : fontColor
            }
          >
            New music
          </MenuItemButton>
        </BoxMenuItem>

        <BoxMenuItem
          onClick={() => history.push('/options')}
          fill={optionSelected === 'more' ? fontSelectedColor : fontColor}
        >
          <MoreIcon />
          <MenuItemButton
            fontColor={
              optionSelected === 'more' ? fontSelectedColor : fontColor
            }
          >
            More
          </MenuItemButton>
        </BoxMenuItem>
      </ListMenuItem>
    </Menu>
  );
}
