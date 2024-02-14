import type { APIRoute} from 'astro';
import resumeData from '../../assets/resume.json' assert {type: 'json'};

export const GET: APIRoute = () =>  {
  const data: string[] = []
  
  Object.keys(resumeData).forEach((key) => {
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
  return new Response(JSON.stringify(resumeData));
}