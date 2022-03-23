export const cookie = (data) =>{
  delete data[0].password
  if (data) {
    document.cookie = 'user=' + JSON.stringify(data) + '; max-age=3600'
  }
}