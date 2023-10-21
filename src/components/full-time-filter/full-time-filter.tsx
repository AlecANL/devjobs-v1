import {
  FilterCheckLabel,
  FilterFullTimeContainer,
  FilterTextLabel
} from '@components/full-time-filter/full-time-filter.styled.tsx'
import { useId } from 'react'
import { IconCheck } from '@components/icons/icons.tsx'
import { type onChangeFilterEvent } from '@models/job-state.interface.ts'

interface Props {
  filterValue: boolean
  onFieldChange: onChangeFilterEvent
  className?: string
}
export function FullTimeFilter (props: Props) {
  const inputId = useId()
  const { className, filterValue, onFieldChange } = props

  return (
    <>
      <FilterFullTimeContainer className={className}>
         <input checked={filterValue} onChange={onFieldChange} name='fullTime' id={inputId} type='checkbox'/>
        <FilterCheckLabel htmlFor={inputId} >
          <IconCheck/>
        </FilterCheckLabel>
        <FilterTextLabel htmlFor={inputId}>Full time only</FilterTextLabel>
      </FilterFullTimeContainer>
    </>
  )
}
