import { useCallback, useEffect, useState } from 'react'
import Breed from '../../models/Breed'
import CatApiStorage from '../../util/storages/CatApiStorage'

interface FindAllBreedsResult {
    isLoading: boolean
    error: string
    response: Breed[]
}

/**
 * React hook that searches a breed through the data storage class
 */
const useFindAllBreeds = (breedStorage: CatApiStorage<Breed>): FindAllBreedsResult => {
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [response, setResponse] = useState<Breed[]>([])
    const findAllBreeds = useCallback(() => {
        breedStorage.find({skip: 0, take: 100})
            .then(setResponse)
            .catch((err) => setError(err))
            .finally(()=> setLoading(false))
    }, [])

    useEffect(() => { findAllBreeds() } , [findAllBreeds])
    return { isLoading, error, response }
}

export default useFindAllBreeds