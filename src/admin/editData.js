export const editData = async (data,id) =>{
  if (data.length < 1) {
    return
  }
  const response = await fetch(`http://localhost:3000/items/${id}`,{
    method: 'PUT',
    body: JSON.stringify(data),
    headers:{
        "Content-Type": "application/json"
    }
  })
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${`http://localhost:3000/items/${id}`} , статус ошибки ${response.status}`)
  }
  return await response.json();
}