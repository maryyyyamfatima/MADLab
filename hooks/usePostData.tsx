// hooks/usePostData.tsx
import { useState } from 'react';
import { API_URL } from '@/src/constants/api';

const usePostData = () => {
  const [response, setResponse] = useState(null);

  const postData = async (dataToSend: any) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const jsonResponse = await response.json();
      setResponse(jsonResponse);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return { response, postData };
};

export default usePostData;