import { TitleFilterInput, TitleFilterStyled } from '@components/title-filter/title-filter.styled.tsx'
import { IconSearch } from '@components/icons/icons.tsx'
import { type onChangeFilter } from '@models/job-state.interface.ts'

interface Props {
  filterValue: string
  onChange: (value: onChangeFilter) => void
}
export function TitleFilter (props: Props) {
  const { filterValue, onChange } = props

  return (
    <>
      <TitleFilterStyled>
        <IconSearch/>
        <TitleFilterInput name='title' value={filterValue} onChange={onChange} type='search' placeholder='Senior software enginner...'/>
      </TitleFilterStyled>
    </>
  )
}
