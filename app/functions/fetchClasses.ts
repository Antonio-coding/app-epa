// app/functions/fetchClasses.ts

export const fetchClassData = async (classId: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Turmas/${classId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch class data');
    }
    const data = await response.json();
    return data;
};
