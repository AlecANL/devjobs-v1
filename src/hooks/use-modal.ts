import { useEffect, useState } from 'react'

export function useModal () {
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openModal])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return

    if (event.target.classList.contains('modal-overlay')) {
      closeModal()
    }
  }

  const closeModal = () => {
    setTimeout(() => {
      toggleModal()
    }, 100)
  }

  const toggleModal = () => {
    setOpenModal(prev => !prev)
  }

  return {
    toggleModal,
    openModal
  }
}
