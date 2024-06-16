import "@/app/theme/globals.css"
import clsx from "clsx"
import { Metadata, Viewport } from "next"

import { Providers } from "./providers"

import { siteConfig } from "@/shared/config/site"
import { fontSans } from "@/shared/config/fonts"
import { Header } from "@/widgets/header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.links.telegram }],
  icons: {
    icon: "/logo.svg",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head />
      <body
        className={clsx(
          "min-h-screen min-w-screen bg-background text-base text-foreground font-sans font-light antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="min-w-screen w-full flex flex-col">
            <Header />
            <main className="max-w-screen flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
