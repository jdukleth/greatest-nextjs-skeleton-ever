import { Flex, } from '@radix-ui/themes'
import { AccountBadge } from 'components/auth/AccountBadge'
import { Centered } from 'components/radix-ui/Centered'
import Image from 'next/image'
import Link from 'next/link'

export const SideNavigation = () => {
  return (
    <Flex direction="column" style={css.sidebar}>
      <Flex direction="column" grow="1">
        {/* logo */}
        <Centered>
          <Link href="/">
            <Image src="/assets/icons/code.svg" width="100" height="100" alt="Logo" />
          </Link>
        </Centered>

        {/* links */}
        <Flex direction="column" grow="1" style={css.links}>
          <Link style={css.link} href="/">Home</Link>
          <Link style={css.link} href="/protected-example">Protected Example</Link>
          <Link style={css.link} href="/rest-api-example">REST API Example</Link>
          <Link style={css.link} href="/firebase-example">Firebase Example</Link>
        </Flex>
      </Flex>

      {/* account badge */}
      <AccountBadge />
    </Flex>
  )
}

const css = {
  sidebar: {
    width: '200px',
    height: '100%',
    maxHeight: '100%',
    backgroundColor: '#121212',
  },

  links: {
    height: '0',
    overflowY: 'auto',
  },

  link: {
    padding: '8px 16px'
  },
}