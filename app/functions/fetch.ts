//app\functions\fetch.ts

export async function fetchWrapper<T = unknown>(
    input: string | URL | globalThis.Request,
    init?: RequestInit & { parseJson?: boolean },
) {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${input}`;
    const data = await fetch(url, init);

    const shouldParseJson = init?.parseJson ?? true;
    const result = shouldParseJson ? await data.json() : await data.text();

    return result as T;
}
