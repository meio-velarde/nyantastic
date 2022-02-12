import {useCallback, useEffect, useMemo, useState} from 'react'
import Cat from '../../models/Cat'
import CatStorage from '../../util/storages/CatStorage'
import useRefValue from './useRefValue'
import deduplicateArray from '../../util/deduplicateArray'

interface FetchCatsForBreedResult {
    isLoading: boolean
    error: string
    response: Cat[]
    loadMore: () => void
    isEndOfPage: boolean
}

/**
 * React hook that searches a breed through the data storage class
 */
const useFindCatsForBreed = (breedId: string | null, catStorage: CatStorage): FetchCatsForBreedResult => {
    const [isLoading, setLoading] = useState(false)
    const [isEndOfPage, setIsEndOfPage] = useState(false)
    const [page, setPage] = useState(0)
    const [error, setError] = useState('')
    const [response, setResponse] = useState<Cat[]>([])

    const prevBreedId = useRefValue(breedId)
    const wasIdChanged = useMemo(
        () => { return prevBreedId !== breedId }, [
        prevBreedId,
        breedId,
    ])

    const findCatsForBreed = useCallback(() => {
        setLoading(true)

        if(wasIdChanged) {
            setIsEndOfPage(false)
            setResponse([])
            setPage(0)
        }

        catStorage.find({skip: page, take: 10, breedId })
            .then((newCats) => {
                const totalFoundCats = wasIdChanged ?
                    newCats : [...response, ...newCats]
                const uniqueCats = deduplicateArray(totalFoundCats, 'id')
                
                const isEndOfPage = uniqueCats.length === response.length  && !wasIdChanged
                setIsEndOfPage(isEndOfPage)
                setResponse(uniqueCats)
            })
            .catch((err) => setError(err))
            .finally(()=> {
                setLoading(false)
                setPage(page + 1)
            })
    }, [breedId, page, wasIdChanged, response])

    useEffect(() => {
        const shouldFetch = breedId && wasIdChanged

        if (shouldFetch) {
            findCatsForBreed()
        }

    }, [
        breedId,
        findCatsForBreed,
        wasIdChanged
        ]
    )

    return { isLoading, error, response, loadMore: findCatsForBreed, isEndOfPage }
}

export default useFindCatsForBreed