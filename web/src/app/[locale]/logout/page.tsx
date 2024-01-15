"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform logout actions here (e.g., clear local storage, logout API calls)

    // Redirect to the root page after performing logout actions
    router.push('/');
  }, [router]);

  return null; // This component doesn't render anything, as it immediately redirects
};

export default Logout;
