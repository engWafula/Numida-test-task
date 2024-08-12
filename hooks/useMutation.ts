import apiClient from '@/utils/apiClient';
import React, { useState } from 'react';

interface MutationOptions {
  headers?: { [key: string]: string };
}

interface MutationState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

type MutationFunction<T, U> = (formData: U) => Promise<void>;

export function useMutation<T, U>(url: string, options?: MutationOptions): [MutationFunction<T, U>, MutationState<T>] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const mutate: MutationFunction<T, U> = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post<T>(url, formData, {
        headers: {
          ...options?.headers,
        },
      });

      setData(response.data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return [mutate, { data, loading, error,setData,setError}];
}
