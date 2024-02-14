import type { APIRoute} from 'astro';
import flagData from '../../assets/flags.json' assert {type: 'json'};

export const GET: APIRoute = () =>  {
  const data: string[] = []
  
  Object.keys(flagData).forEach((key) => {
    data.push(key);
  })

  return new Response(
    JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export const ALL: APIRoute = () => {
  return new Response(JSON.stringify(flagData));
}