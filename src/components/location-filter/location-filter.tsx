import { IconLocation } from '@components/icons/icons.tsx'
import { LocationFilterSelect, LocationFilterStyled } from '@components/location-filter/location-filter.styled.tsx'
import { type onChangeFilterEvent } from '@models/job-state.interface.ts'

interface Props {
  options: Array<string>
  filterValue: string
  className?: string
  onFieldChange: onChangeFilterEvent
}
export function LocationFilter (props: Props) {
  const { options, className, onFieldChange, filterValue } = props

  return (
    <>
      <LocationFilterStyled className={className}>
        <IconLocation/>
        <LocationFilterSelect data-testid='location' value={filterValue} onChange={onFieldChange} name='location'>
          <option value=''>Filter by location</option>
          {
            options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))
          }
        </LocationFilterSelect>
      </LocationFilterStyled>

    </>
  )
}
