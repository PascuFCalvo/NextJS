//vamos a hacer el fetching de datos en la parte del servidor
//REACT SERVER COMPONENT
//pueden ser asincronos

//nosotros nos vamos a importar el fecth que esta en lib

import { Suspense } from 'react';
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../lib/data';
import { Card } from '../ui/dashboard/cards';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { lusitana } from '../ui/fonts';
import { RevenueChartSkeleton } from '../ui/skeletons';

export default async function DashboardPage() {
  //ejemplo de fecthing de datos
  // const res = await fetch("http://api.random.com")
  // const json = await res.json()
  // console.log(json)
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="gird gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/*hace que el componene sea asincrono y lo vamos a esperar */}
          <RevenueChart />
        </Suspense>

        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
