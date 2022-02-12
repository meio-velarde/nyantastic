export interface FindRequest<TResource> {
    skip: number,
    take?: number,
    filter?: {
        k: string
        v: string
    }
}

export interface Storage<TInternalEntity = unknown, TEntity = unknown> {
    /**
     * A generic getter for a storage.
     */
    get(id: string): Promise<TEntity>

    /**
     * A generic paginated find for a storage
     * @param request
     */
    find<TRequest extends FindRequest<TInternalEntity>>(
        request: TRequest
    ): Promise<TEntity[]>
}