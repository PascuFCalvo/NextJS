//vamos a hacer el fetching de datos en la parte del servidor
//REACT SERVER COMPONENT
//pueden ser asincronos

//nosotros nos vamos a importar el fecth que esta en lib

import { fetchRevenue } from '../lib/data';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { lusitana } from '../ui/fonts';

export default async function DashboardPage() {
  //ejemplo de fecthing de datos
  // const res = await fetch("http://api.random.com")
  // const json = await res.json()
  // console.log(json)

  const revenue = await fetchRevenue();
  console.log(revenue);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="gird gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
      </div>
    </main>
  );
}
