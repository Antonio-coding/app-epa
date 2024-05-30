import { fetchWrapper } from "@/functions/fetch";

type UserProps = {
    id: string;
    nome: string;
    email: string;
    senha: string;
    registrationDate: string;
};

export default async function RestApiTest() {
    const response = await fetchWrapper<{ content: UserProps[] }>('users', {
        method: 'GET',
    });

    const data = response?.content ?? [];

    console.log(data);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">API Test</h1>
            <div className="space-y-4">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((post) => (
                        <div key={post.id} className="border p-4 rounded-lg shadow-md">
                            <p className="text-lg font-semibold">{post.nome}</p>
                            <p className="text-gray-600">{post.email}</p>
                            <p className="text-sm text-gray-500">{new Date(post.registrationDate).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-red-500">No data available</p>
                )}
            </div>
        </>
    );
}
