async function getContent(){
  try {
    const response = await fetch('http://localhost:1337/clientes/count')
    const data = await response.json()

    return data;

  } catch (error) {

    console.error(error)

  }
}

export default getContent;