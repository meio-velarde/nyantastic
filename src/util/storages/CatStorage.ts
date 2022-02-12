import CatApiStorage from './CatApiStorage'
import { FindRequest } from './models'
import Cat from '../../models/Cat'
import Breed from '../../models/Breed'

interface FindImageRequest extends FindRequest<Cat> {
    breedId: string | null
}

interface InternalCatResponse {
    id: string
    url: string
    breeds?: Breed[]
}

class CatStorage extends CatApiStorage<Cat> {
    protected readonly primaryKey: string = 'id'

    public async get(id: string): Promise<Cat> {
        const cat = await this.httpClient.get<InternalCatResponse>(
            `${this.resourceUri}/${id}`
        )
        const [breed] = cat.breeds as Breed[]
        return {
            ...cat,
            breed: {
                id: breed.id,
                name: breed.name,
                origin: breed.origin,
                temperament: breed.temperament,
                description: breed.description,
            },
        }
    }

    public async find(
        request: FindImageRequest
    ): Promise<Cat[]> {
        const { breedId } = request

        if(!breedId) {
            return super.find(request)
        }

        const filter = {
            k: 'breed_id',
            v: breedId
        }


        return super.find({...request, filter})
    }
}

export default CatStorage
