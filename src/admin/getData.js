
export const getData = async (url) =>{
  const response = await fetch(url);
  // если от сервера пришел ответ false
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url} , статус ошибки ${response.status}`)
  }
  return await response.json()
  // return await response.json().then((data)=>{
  //   console.log(data);
  // })
}