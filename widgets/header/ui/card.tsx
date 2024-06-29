import React from "react"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react"

import { siteConfig } from "@/shared/config/site"

export default function CardOfMe() {
  return (
    <Card
      shadow="none"
      className="max-w-[260px] border-none bg-transparent gap-0"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-lg font-semibold leading-none">
              {siteConfig.name}
            </h4>
          </div>
        </div>
      </CardHeader>

      <CardBody className="px-3 py-1">
        <p className="text-sm pl-px text-default-500">
          {siteConfig.description} with 3+ years of experience
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
      </CardBody>

      <CardFooter>
        <Link
          className="w-full"
          href={siteConfig.links.telegram}
          target="_blank"
        >
          <Button
            className="w-full font-bold"
            variant="bordered"
            color="primary"
            radius="full"
          >
            Write me
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
