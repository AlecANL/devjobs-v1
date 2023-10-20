import { type ChangeEvent, useState } from 'react'

export function useFilter () {
  const [filter, setFilter] = useState({
    title: '',
    location: '',
    fullTime: false
  })

  const handleFormControlChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { type, name } = event.currentTarget
    const isChecked = (event.target as HTMLInputElement).checked
    const newValue = type === 'checkbox' ? isChecked : event.target.value
    setFilter({
      ...filter,
      [name]: newValue
    })
  }

  return {
    filter,
    handleFormControlChange
  }
}
