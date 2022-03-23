export const sendData = async (url,data) =>{
  if (data.length < 1) {
    return
  }
  const response = await fetch(url,{
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        "Content-Type": "application/json"
    }
  })
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url} , статус ошибки ${response.status}`)
  }
  return await response.json();
}