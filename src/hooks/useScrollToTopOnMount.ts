import { useEffect } from 'react';

export function useScrollToTopOnMount() {
  useEffect(() => {
    // Scroll to top immediately when component mounts (page loads/refreshes)
    window.scrollTo(0, 0);
  }, []);
}