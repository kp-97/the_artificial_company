// frontend/my-dashboard/src/mockApi.ts
export function registerMockChat() {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const request = args[0] as Request;
    if (request.url.endsWith('/api/chat') && request.method === 'POST') {
      const body = await request.json();
      const reply = `Echo: ${body.message}`;
      return new Response(JSON.stringify({ reply }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return originalFetch(...args);
  };
  return () => {
    window.fetch = originalFetch; // cleanup
  };
}