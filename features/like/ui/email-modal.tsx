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

import { useLikeStore } from "@/app/store"

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenChange: (isOpen: boolean) => void
}

export default function EmailModal({
  isOpen,
  onClose,
  onOpenChange,
}: EmailModalProps) {
  const setEmail = useLikeStore((state) => state.setEmail)
  const [inputEmail, setInputEmail] = useState("")

  const handleSave = () => {
    setEmail(inputEmail)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Enter your email
        </ModalHeader>

        <ModalBody>
          <Input
            isClearable
            size="lg"
            type="email"
            label="Email"
            variant="flat"
            placeholder="example@example.com"
            onChange={(e) => setInputEmail(e.target.value)}
            className="max-w"
          />
        </ModalBody>

        <ModalFooter>
          <Button
            className="font-bold"
            variant="shadow"
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
