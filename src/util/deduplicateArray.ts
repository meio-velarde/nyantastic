const deduplicateArray = <TObject, TKey extends keyof TObject>(
    items: TObject[],
    deduplicateOn: TKey
) => {
    return items.filter((item, actualIndex, arr) => {
        const findIndexPredicate = (current: TObject) => current[deduplicateOn] === item[deduplicateOn]
        const comparisonIndex = arr.findIndex(findIndexPredicate)

        return comparisonIndex === actualIndex
    })
}

export default deduplicateArray