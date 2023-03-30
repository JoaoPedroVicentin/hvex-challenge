import Link from 'next/link'
import Image from 'next/image'

import {
  DropdownMenuTrigger,
  HeaderContainer,
  NavigationButton,
  IconButton,
  DropdownMenuContent,
} from './styles'

import MenuIcon from '@mui/icons-material/Menu'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Button } from '../Button'

export function HeaderSection() {
  return (
    <HeaderContainer>
      <nav>
        <Link href="https://hvex.com.br/" target="_blank">
          <Image
            src="/assets/logo-hvex.svg"
            width={115}
            height={54}
            alt="Logo Hvex"
          />
        </Link>

        <ul>
          <li>
            <NavigationButton href="/" aria-checked="true">
              Omni trafo
            </NavigationButton>
          </li>
          <li>
            <NavigationButton href="/">Sinalizador de faltas</NavigationButton>
          </li>
          <li>
            <NavigationButton href="/">Acoplador DP</NavigationButton>
          </li>
          <li>
            <Button content="Comprar agora" />
          </li>
        </ul>

        <DropdownMenu.Root>
          <DropdownMenuTrigger id="mobile" name="menu-mobile" asChild>
            <IconButton>
              <MenuIcon fontSize="large" />
            </IconButton>
          </DropdownMenuTrigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent sideOffset={4}>
              <DropdownMenu.Item>
                <NavigationButton href="/" aria-checked="true">
                  Omni trafo
                </NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <NavigationButton href="/">
                  Sinalizador de faltas
                </NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <NavigationButton href="/">Acoplador DP</NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Button content="Comprar agora" />
              </DropdownMenu.Item>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </nav>
    </HeaderContainer>
  )
}