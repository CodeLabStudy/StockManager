export default async function AddressByCep(cep) {
  try {
    const result = await fetch(`https:viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {}
}
