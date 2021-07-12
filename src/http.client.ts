const client = fetch

const apiUri = 'http://localhost:3000/'

export const get = async (path: string): Promise<any> => {
  return await (await client(apiUri + path)).json()
}

export const post = async (path: string, body?: any): Promise<any> => {
  return await (
    await client(apiUri + path, {
      method: 'POST',
      body
    })
  ).json()
}

export const del = async (path: string): Promise<any> => {
  return await (
    await client(apiUri + path, {
      method: 'DELETE'
    })
  ).json()
}
