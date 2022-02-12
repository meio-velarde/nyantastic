import Breed from '../../models/Breed'
import CatApiStorage from '../../util/storages/CatApiStorage'
import CatStorage from '../../util/storages/CatStorage'
import StorageProvider, { breedStorageKey, catStorageKey } from '../../util/storages/StorageProvider'
import useQueryParam from '../hooks/useQueryParam'
import React, {useCallback, useState} from 'react'
import useFindAllBreeds from '../hooks/useFindAllBreeds'
import useFindCatsForBreed from '../hooks/useFindCatsForBreed'
import TopBar from '../features/TopBar'
import ApiAlert from '../base/ApiAlert'
import findBreedsErrorMessage from '../../util/constants/findBreedsErrorMessage'
import findCatsErrorMessage from '../../util/constants/findCatsErrorMessage'
import LoadMoreButton from '../base/LoadMoreButton'
import { Gallery } from '../features/Gallery'
import {Container} from '@mui/material'

export interface HomeProps {
    storageProvider: StorageProvider
}

const Home: React.FC<HomeProps> = ({storageProvider}) => {
    const breedStorage = storageProvider.provide(breedStorageKey) as CatApiStorage<Breed>
    const catStorage = storageProvider.provide(catStorageKey) as CatStorage

    const currentQueryParam = useQueryParam()
    const [currentBreedId, setCurrentBreedId] = useState<string | null>(
        currentQueryParam.get('breed'),
    )

    const {
        isLoading: areBreedsLoading,
        error: findBreedsError,
        response: breeds,
    } = useFindAllBreeds(breedStorage)

    const {
        isLoading: areCatsLoading,
        error: findCatsError,
        response: cats,
        loadMore,
        isEndOfPage,
    } = useFindCatsForBreed(currentBreedId, catStorage)

    const handleSelectBreed = useCallback(
        (id) => {
            setCurrentBreedId(id)
        },
        []
    )

    const isGalleryLoading = areCatsLoading && cats.length === 0

    const isLoadMoreDisabled =
        isGalleryLoading ||
        !currentBreedId ||
        (!areCatsLoading && isEndOfPage)
    const isLoadMoreLoading = areCatsLoading && cats.length !== 0
    const loadMoreProps = {
        onClick: loadMore,
        isDisabled: isLoadMoreDisabled
    }

    return (
        <div>
            <TopBar title='Nyantastic!'
                    areBreedsLoading={areBreedsLoading}
                    breeds={breeds}
                    onSelectBreed={handleSelectBreed}
            />

            { findBreedsError && <ApiAlert message={findBreedsErrorMessage} />}
            { findCatsError && <ApiAlert message={findCatsErrorMessage} />}
            <Container>
            <Gallery cats={cats} isGalleryLoading={isGalleryLoading} />
            <LoadMoreButton
                onClick={loadMoreProps.onClick}
                isDisabled={loadMoreProps.isDisabled}
                isLoadMoreLoading={isLoadMoreLoading}
            />
            </Container>
        </div>
    )
}

export default React.memo(Home)