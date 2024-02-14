import resumeData from '../../assets/resume.json' assert {type: 'json'};

export const GET = ({ params }) =>  {
  const id = params.id;

  if (!resumeData[id]) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(
    JSON.stringify(resumeData[id]), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export const ALL = () => {
  return new Response(JSON.stringify(resumeData));
}