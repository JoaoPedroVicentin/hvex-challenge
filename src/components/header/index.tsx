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

export function Header() {
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
            <NavigationButton aria-checked="true">Omni trafo</NavigationButton>
          </li>
          <li>
            <NavigationButton>Sinalizador de faltas</NavigationButton>
          </li>
          <li>
            <NavigationButton>Acoplador DP</NavigationButton>
          </li>
          <li>
            <Button content="Comprar agora" />
          </li>
        </ul>

        <DropdownMenu.Root>
          <DropdownMenuTrigger asChild>
            <IconButton>
              <MenuIcon fontSize="large" />
            </IconButton>
          </DropdownMenuTrigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent sideOffset={4}>
              <DropdownMenu.Item>
                <NavigationButton aria-checked="true">
                  Omni trafo
                </NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <NavigationButton>Sinalizador de faltas</NavigationButton>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <NavigationButton>Acoplador DP</NavigationButton>
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
