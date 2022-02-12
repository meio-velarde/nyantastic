import HttpClient from './HttpClient'
import { FindRequest, Storage } from './models'

class CatApiStorage<TEntity = unknown> implements Storage {
    protected readonly primaryKey: string = 'id'

    constructor(
        protected readonly httpClient: HttpClient,
        protected readonly resourceUri: string,
        protected readonly findResourceUri = resourceUri,
    ) {}

    public async get(id: string): Promise<TEntity> {
        const [entity] = await this.httpClient.get<TEntity[]>(
            `${this.resourceUri}?${this.primaryKey}=${id}`
        )

        return entity
    }

    public async find(
        request: FindRequest<TEntity>
    ): Promise<TEntity[]> {
        const { skip, take, filter } = request

        return this.httpClient.get<TEntity[]>(
            `${this.findResourceUri}?page=${skip}&limit=${take ?? 10}${filter ? `&${filter.k}=${filter.v}`: ''}`
        )
    }
}

export default CatApiStorage