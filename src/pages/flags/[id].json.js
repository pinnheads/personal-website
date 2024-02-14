import flagData from '../../assets/flags.json' assert {type: 'json'};

export const GET = ({ params }) =>  {
  const id = params.id != undefined ? 'navbarLinks' : '';

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

export const ALL = () => {
  return new Response(JSON.stringify(flagData));
}