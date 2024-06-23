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
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const setName = useStore((state) => state.setName)

  const isInvalid = useMemo(() => {
    return value.trim().length <= 1 || /^\d/.test(value.trim())
  }, [value])

  const handleSave = () => {
    setIsTouched(true)

    if (!isInvalid) {
      setName(value)
      onClose()
    }
  }

  return (
    <Modal
      backdrop="blur"
      placement="bottom-center"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent className="pt-4">
        <ModalHeader className="flex flex-col gap-1">
          Enter your nickname
        </ModalHeader>
        <ModalBody>
          <Input
            classNames={{
              inputWrapper: ["!cursor-text"],
              errorMessage: ["text-danger", "text-sm", "font-semibold"],
            }}
            type="text"
            placeholder="Your nickname"
            variant="bordered"
            size="lg"
            color={isInvalid && isTouched ? "danger" : "primary"}
            isClearable
            isInvalid={isInvalid && isTouched}
            value={value}
            onValueChange={(value) => {
              setValue(value)
              setIsTouched(false)
            }}
            errorMessage={
              isInvalid && isTouched
                ? "Nickname must be more than one letter and cannot start with a digit"
                : ""
            }
          />
        </ModalBody>

        <ModalFooter>
          <Button
            className="font-bold"
            variant="bordered"
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
