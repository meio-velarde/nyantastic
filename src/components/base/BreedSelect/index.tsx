import Breed from '../../../models/Breed'
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React, { useCallback } from "react"
import styles from './styles'
import useQueryParam from '../../hooks/useQueryParam'

export interface BreedSelectProps {
    breeds: Breed[]
    onSelectBreed: (breedId: string) => void
    areBreedsLoading: boolean
}

const BreedSelect: React.FC<BreedSelectProps> = ({breeds, onSelectBreed, areBreedsLoading}) => {
    const queryParam = useQueryParam()

    const handleChange = useCallback(
        (event:SelectChangeEvent) => {
            onSelectBreed(event.target.value)
        },
    [onSelectBreed],
    )

    const queryParamValue = queryParam.get('breed')

    const defaultText = areBreedsLoading ? 'Loading...' : 'Select Breed'
    const defaultValue = queryParamValue ?? 'sel'

    return <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
            variant="standard"
            defaultValue={defaultValue}
            sx={styles}
            onChange={handleChange}
        >
            { <MenuItem key={defaultValue} value={defaultValue}> {defaultText} </MenuItem> }
            { breeds.map((breed) => <MenuItem key={breed.id} value={breed.id}>{breed.name}</MenuItem>) }
        </Select>
    </FormControl>
}

export default React.memo(BreedSelect)