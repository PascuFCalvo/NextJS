'use server';

//todas las funciones que se exporten de este archivo se ejecutan en el servidor
//y no ejecutan ni se envian al cliente

export async function createInvoice(formdata: FormData) {
  console.log('createInvoice', formdata);
  const rawFormData = {
    customerId: formdata.get('customerId'),
    amount: formdata.get('amount'),
    status: formdata.get('status'),
  };

  //otra forma de obtener los datos del formdata
  //const rawFormData2 = Object.fromEntries(formdata.entries());

  console.log('rawFormData', rawFormData);
}
