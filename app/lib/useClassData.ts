// app/lib/useClassData.ts
"use client"

import { useState, useEffect } from 'react';
import { fetchClassData } from '../functions/fetchClasses';
import { ClassData } from '@/types/ClassData';

export const useClassData = (classId: string) => {
    const [classData, setClassData] = useState<ClassData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getClassData = async () => {
            try {
                const data = await fetchClassData(classId);
                setClassData(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        getClassData();
    }, [classId]);

    return { classData, loading, error };
};
