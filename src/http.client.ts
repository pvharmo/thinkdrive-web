const client = fetch

const apiUri = 'http://localhost:3000/'

export const get = async (path: string): Promise<any> => {
  return await (await client(apiUri + path, {
    headers: { 'user': '123456' }
  })).json()
}

export const post = async (path: string, body?: any): Promise<any> => {
  return await (
    await client(apiUri + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-user': '123456' },
      body: JSON.stringify(body)
    })
  ).json()
}

export const del = async (path: string): Promise<any> => {
  return await (
    await client(apiUri + path, {
      method: 'DELETE',
      headers: {
        'user': '123456'
      }
    })
  ).json()
}

export const put = async (path: string, body?: any) => {
  return await (
    await client(apiUri + path, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'user': '123456' },
      body: JSON.stringify(body)
    })
  ).json()
}

export const action = async (action: string, params: any|undefined): Promise<any> => {
  return (await client(apiUri, {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
      'user': '123456',
      api: 'filesystem',
      action,
      'data-source': 's3'
    },
    body: JSON.stringify(params)
  })).json()
}
