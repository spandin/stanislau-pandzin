"use client"

import { useState } from "react"
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

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenChange: (isOpen: boolean) => void
}

export function UserModal({ isOpen, onClose, onOpenChange }: EmailModalProps) {
  const setName = useStore((state) => state.setName)
  const [inputName, setInputName] = useState<string>("")

  const handleSave = () => {
    setName(inputName)
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
            size="lg"
            type="text"
            label="Name"
            placeholder="First Name or Nickname"
            variant="flat"
            onChange={(e) => setInputName(e.target.value)}
            className="max-w"
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
