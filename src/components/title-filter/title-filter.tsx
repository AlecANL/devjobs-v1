import { IconSearch } from '@components/icons/icons.tsx'
import { TitleFilterInput, TitleFilterStyled } from '@components/title-filter/title-filter.styled.tsx'
import { type onChangeFilterEvent } from '@models/job-state.interface.ts'

interface Props {
  filterValue: string
  onFieldChange: onChangeFilterEvent
}
export function TitleFilter (props: Props) {
  const { filterValue, onFieldChange } = props

  return (
    <>
      <TitleFilterStyled>
        <IconSearch/>
        <TitleFilterInput value={filterValue} onChange={onFieldChange} data-testid='title' name='title' type='search' placeholder='Senior software enginner...'/>
      </TitleFilterStyled>
    </>
  )
}
