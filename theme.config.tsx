import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Home } from 'lucide-react'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Rig Crate Documentation" />
      <meta name="author" content="0xPlaygrounds" />
      <meta name="keywords" content="Rig, Docs, 0xPlaygrounds" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  logo: (
    <>
      <img src="/rig-dark.svg" style={{ height: '2.5rem' }} alt="Rig Logo" className="dark-mode-logo" />
      <img src="/rig-light.svg" style={{ height: '2.5rem' }} alt="Rig Logo" className="light-mode-logo" />
      <style jsx>{`
        .dark-mode-logo {
          display: none;
        }
        .light-mode-logo {
          display: none;
        }
        @media (prefers-color-scheme: dark) {
          .dark-mode-logo {
            display: block;
          }
        }
        @media (prefers-color-scheme: light) {
          .light-mode-logo {
            display: block;
          }
        }
      `}</style>
    </>
  ),
  project: {
    link: 'https://github.com/0xPlaygrounds/rig',
  },
  chat: {
    link: 'https://discord.gg/playgrounds',
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  docsRepositoryBase: 'https://github.com/0xPlaygrounds/rig-docs',
  footer: {
    content: (
        <div className="flex w-full flex-col items-center sm:items-start">
          <div>
            <a
              className="nextra-focus flex items-center gap-1 text-current"
              target="_blank"
              rel="noreferrer"
              title="Playgrounds homepage"
              href="https://playgrounds.network"
            >
              <span>Powered by &nbsp;</span>
              <img src="https://playgrounds.network/assets/PG-Logo.png" style={{ height: '2rem', display: 'inline' }} alt="Playgrounds Logo" />
            </a>
          </div>
          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} Rig Docs.
          </p>
        </div>
      )
  }
}

export default config
