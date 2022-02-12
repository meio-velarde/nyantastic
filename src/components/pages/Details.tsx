import {Box, CircularProgress, Container} from '@mui/material'
import React from 'react'
import DetailsCard from '../base/DetailsCard'
import useGetCatById from '../hooks/useGetCatById'
import StorageProvider, { catStorageKey } from '../../util/storages/StorageProvider'
import CatStorage from '../../util/storages/CatStorage'
import Cat from '../../models/Cat'
import ApiAlert from '../base/ApiAlert'
import getCatErrorMessage from '../../util/constants/getCatErrorMessage'

export interface DetailsProps {
    storageProvider: StorageProvider
}

export const Details: React.FC<DetailsProps> = ({storageProvider}) => {
    const [, catId] = window.location.pathname.split('/')
    const { isLoading, error, response } = useGetCatById(
        catId,
        storageProvider.provide(catStorageKey) as CatStorage
    )
    return (
        <div>
            { error && <ApiAlert message={getCatErrorMessage} />}
            <Container>
                <Box sx={{margin: 2}}>
                { isLoading ? <CircularProgress /> : <DetailsCard cat={response as Cat}/> }
                </Box>
            </Container>
        </div>
    )
}

export default Details