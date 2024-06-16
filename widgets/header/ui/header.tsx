"use client"

import React from "react"
import {
  Navbar,
  NavbarContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react"
import { motion } from "framer-motion"

import CardOfMe from "./card"

import ThemeSwitcher from "@/widgets/theme-switcher"
import { siteConfig } from "@/shared/config/site"

export function Header() {
  return (
    <Navbar
      className="flex flex-row z-50"
      maxWidth="xl"
      position="sticky"
      isBlurred
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <NavbarContent justify="start">
          <Popover showArrow backdrop="blur" placement="bottom">
            <PopoverTrigger>
              <User
                as="button"
                classNames={{
                  name: "text-md font-medium leading-[1]",
                  description: "text-sm font-regular text-gray-400 leading-[1]",
                }}
                name={siteConfig.name}
                description={siteConfig.description}
                className="transition-transform"
                avatarProps={{
                  hidden: true,
                }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <CardOfMe />
            </PopoverContent>
          </Popover>
        </NavbarContent>
      </motion.div>

      <NavbarContent className="data-[justify=end]:flex-grow-0" justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  )
}
