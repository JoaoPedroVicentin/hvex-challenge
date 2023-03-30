import Link from 'next/link'
import Image from 'next/image'

import {
  DropdownMenuTrigger,
  HeaderContainer,
  NavigationButton,
  IconButton,
  DropdownMenuContent,
  DropdownMenuItem,
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

        {/* Menu versão desktop */}
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

        {/* Menu versão mobile utilizando componente DropdownMenu do Radix */}
        <DropdownMenu.Root>
          <DropdownMenuTrigger
            id="mobile"
            title="menu-mobile"
            name="menu-mobile"
            asChild
          >
            <IconButton>
              <MenuIcon fontSize="large" />
            </IconButton>
          </DropdownMenuTrigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent sideOffset={4}>
              <DropdownMenuItem>
                <NavigationButton href="/" aria-checked="true">
                  Omni trafo
                </NavigationButton>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavigationButton href="/">
                  Sinalizador de faltas
                </NavigationButton>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavigationButton href="/">Acoplador DP</NavigationButton>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Button content="Comprar agora" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </nav>
    </HeaderContainer>
  )
}
