export const deleteData = async (id) =>{
  const response = await fetch(`http://localhost:3000/items/${id}`,{
    method: 'DELETE',
    headers:{
        "Content-Type": "application/json"
    }
  })
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${`http://localhost:3000/items/${id}`} , статус ошибки ${response.status}`)
  }
  return await response.json();
}