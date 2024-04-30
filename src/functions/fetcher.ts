'use server';
export const fetcher = async (path: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${path}?api_key=${process.env.API_KEY}`,
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch data. Status: ' + response.status);
  }

  return data;
};
