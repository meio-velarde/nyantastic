import { useEffect, useRef } from 'react'

const useRefValue = <TValue>(value: TValue) => {
    const ref = useRef<TValue>()
    useEffect(() => {
        ref.current = value
    }, [value])
    return ref.current
}

export default useRefValue
