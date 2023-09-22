import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page when the component mounts
    router.push('/home');
  }, []);

  return null; // You can return null or any component you want
}
