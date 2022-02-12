import CatApiStorage from './CatApiStorage'
import HttpClient from './HttpClient'
import constants from '../../constants'
import {Storage} from './models'
import CatStorage from './CatStorage'
import Breed from '../../models/Breed'

export const breedStorageKey = 'BreedStorage'
export const catStorageKey = 'CatStorage'

class StorageProvider {
    private _stores = new Map<string, Storage>()

    public static init(): StorageProvider {
        const client = new HttpClient(constants.theCatApiBaseUrl, {
            'x-api-key': constants.theCatApiKey,
        })
        const provider = new StorageProvider()

        provider.register(catStorageKey, new CatStorage(
            client,
            '/images',
            '/images/search'
        ))
        provider.register(breedStorageKey, new CatApiStorage<Breed>(
            client,
            '/breeds'
        ))

        return provider
    }

    public provide(storageKey: string): Storage | undefined {
        return this._stores.get(storageKey)
    }

    private register(storageKey: string, storage: CatApiStorage): void {
        this._stores.set(storageKey, storage)
    }
}

export default StorageProvider