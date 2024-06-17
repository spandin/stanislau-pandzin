"use client"

import { useMemo, useState } from "react"
import {
  Modal,
  Input,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@nextui-org/react"

import { useStore } from "@/app/store"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenChange: (isOpen: boolean) => void
}

export function UserModal({ isOpen, onClose, onOpenChange }: ModalProps) {
  const [value, setValue] = useState<string>("")
  const setName = useStore((state) => state.setName)

  const isInvalid = useMemo(() => {
    if (value.trim().length >= 2) {
      return false
    } else {
      return true
    }
  }, [value])

  const handleSave = () => {
    setName(value)
    onClose()
  }

  return (
    <Modal
      backdrop="blur"
      placement="bottom"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent className="pt-4">
        <ModalHeader className="flex flex-col gap-1">
          Enter your name
        </ModalHeader>
        <ModalBody>
          <Input
            isClearable
            className="max-w text-xl"
            variant="bordered"
            size="lg"
            color={isInvalid ? "secondary" : "primary"}
            type="text"
            placeholder="First Name or Nickname"
            value={value}
            onValueChange={setValue}
            isInvalid={isInvalid}
            errorMessage="Name must be more than one letter"
          />
        </ModalBody>

        <ModalFooter>
          <Button
            className="font-bold"
            variant="light"
            color="primary"
            radius="full"
            onPress={handleSave}
          >
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
