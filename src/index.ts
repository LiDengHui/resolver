type fn = Function;

export default function resolver<T, E>(fn: fn) {
  return async (...args: any[]) => {
    try {
      const data: T = await fn(...args);
      return [null, data] as const;
    } catch (e) {
      return [e as E, null] as const;
    }
  };
}
