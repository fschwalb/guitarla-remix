import { getGuitarra } from '~/models/guitarras.server';

export async function loader ({ params }) {

  const { guitarraUrl } = params;

  const guitarra = await getGuitarra( guitarraUrl )
  
  console.log(guitarra);

  return {}
}

function Guitarra() {
  return (
    <div>estoy en guitarraUrl</div>
  )
}

export default Guitarra;