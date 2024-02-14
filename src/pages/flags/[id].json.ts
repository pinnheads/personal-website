import type { APIRoute, Params } from 'astro';
import flagData from '../../assets/flags.json' assert {type: 'json'};

export const GET: APIRoute = ({ params }: {params: Params}) =>  {
  const id = params.id;

  if (!flagData[id]) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(
    JSON.stringify(flagData[id]), {
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