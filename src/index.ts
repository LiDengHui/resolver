type Fn<T> = (...args: any[]) => Promise<T>

export default function resolver<T, E>(fn: Fn<T>) {
    return async (...args: any[]) => {
        try {
            const data: T = await fn(...args)
            return [null, data] as const
        } catch (e) {
            return [e as E, null] as const
        }
    }
}
