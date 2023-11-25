export const mutationLogin = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmJhMjIzZjJjNTQ4ZjllZDk0Y2Y4MmE3MWEwMzI3NyIsInN1YiI6IjY1NWZmNDI0ZWZlMzdjMDExZDJhY2JkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-KXLc0yLtVRCA9oKjOET5ITYjdiHnv1S2gFPBdxOSM'
      },
    }
  );

  return await response.json();
};

