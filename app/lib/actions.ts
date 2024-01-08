'use server';

//todas las funciones que se exporten de este archivo se ejecutan en el servidor
//y no ejecutan ni se envian al cliente

import { z } from 'zod';
import { Invoice } from './definitions';
import { sql } from '@vercel/postgres';

//creas un esquema de validacion para el objeto que se va a recibir con zod

const CreateInvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['paid', 'pending']),
  date: z.string(),
});
//otra forma de obtener los datos del formdata
//const rawFormData2 = Object.fromEntries(formdata.entries());

//creas un subconjunto del esquema de validacion para el objeto que se va a recibir con zod

const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
  id: true,
  date: true,
});

export async function createInvoice(formdata: FormData) {
  const { customerId, amount, status } = CreateInvoiceFormSchema.parse({
    customerId: formdata.get('customerId'),
    amount: formdata.get('amount'),
    status: formdata.get('status'),
  });

  //para evitar errores de redondeo

  const amountInCents = amount * 100;

  //fecha actual en fortamo iso y con el desestructurado solo obtenemos la fecha

  const [date] = new Date().toISOString().split('T');

  //es un metodo de vercel al que se le pasas un parametro, es un template literal y no se le pueden hacer sql injections

  await sql`
    INSERT INTO invoices(customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
   `;
}
