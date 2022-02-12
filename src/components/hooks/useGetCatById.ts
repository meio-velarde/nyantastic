import { useCallback, useEffect, useState } from 'react'
import Breed from '../../models/Breed'
import CatStorage from '../../util/storages/CatStorage'
import Cat from '../../models/Cat'

interface GetCatByIdResult {
    isLoading: boolean
    error: string
    response: Cat | undefined
}

/**
 * React hook that searches a breed through the data storage class
 */
const useGetCatById = (catId: string, catStorage: CatStorage): GetCatByIdResult => {
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [response, setResponse] = useState<Cat>( )
    const getCatById = useCallback(() => {
        catStorage.get(catId)
            .then(setResponse)
            .catch((err) => setError(err))
            .finally(()=> setLoading(false))
    }, [])

    useEffect(() => { getCatById() } , [getCatById])
    return { isLoading, error, response }
}

export default useGetCatById