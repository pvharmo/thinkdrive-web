const client = fetch

const apiUri = 'http://localhost:3000/'

export const get = async (path: string): Promise<any> => {
  return await (await client(apiUri + path)).json()
}

export const post = async (path: string, body?: any): Promise<any> => {
  return await (
    await client(apiUri + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
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

export const put = async (path: string, body: any) => {
  return await (
    await client(apiUri + path, {
      method: 'Put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
  ).json()
}
