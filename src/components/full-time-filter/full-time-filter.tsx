import {
  FilterCheckLabel,
  FilterFullTimeContainer,
  FilterTextLabel
} from '@components/full-time-filter/full-time-filter.styled.tsx'
import { type onChangeFilter } from '@models/job-state.interface.ts'
import { useId } from 'react'
import { IconCheck } from '@components/icons/icons.tsx'

interface Props {
  filterValue: boolean
  onChange: (value: onChangeFilter) => void
  className?: string
}
export function FullTimeFilter (props: Props) {
  const inputId = useId()
  const { filterValue, onChange, className } = props

  return (
    <>
      <FilterFullTimeContainer className={className}>
         <input name='fullTime' checked={filterValue} onChange={onChange} id={inputId} type='checkbox'/>
        <FilterCheckLabel htmlFor={inputId} >
          <IconCheck/>
        </FilterCheckLabel>
        <FilterTextLabel htmlFor={inputId}>Full time only</FilterTextLabel>
      </FilterFullTimeContainer>
    </>
  )
}
