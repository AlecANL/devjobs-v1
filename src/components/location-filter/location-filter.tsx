import { IconLocation } from '@components/icons/icons.tsx'
import { type onChangeFilter } from '@models/job-state.interface.ts'
import { LocationFilterSelect, LocationFilterStyled } from '@components/location-filter/location-filter.styled.tsx'

interface Props {
  options: Array<string>
  filterValue: string
  className?: string
  onChange: (value: onChangeFilter) => void
}
export function LocationFilter (props: Props) {
  const { options, filterValue, onChange, className } = props

  return (
    <>
      <LocationFilterStyled className={className}>
        <IconLocation/>
        <LocationFilterSelect name='location' value={filterValue} onChange={onChange}>
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
