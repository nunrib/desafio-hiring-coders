import React, { useState, useEffect } from 'react'
// import { useCssHandles } from 'vtex.css-handles'
import axios from 'axios'

interface PontucaoProps {}

interface Octopontos {
  id: string
  userId: string
  pontos: number
}

// const CSS_HANDLES = ['pontos']

const Pontucao: StorefrontFunctionComponent<PontucaoProps> = ({}) => {
  const [userPoints, setUserPoints] = useState<Octopontos>()

  useEffect(() => {
    const getData = async () => {
      try {
        const userId = await axios.get('/api/vtexid/pub/authenticated/user').then(({ data }) => data.userId)

        console.log("userID", userId)
        
        // 9ac2a78c-d9c5-4ff9-9d9b-f6bf8f2a5675
        const response = axios.get(
          `https://desafiogrupo1--bitsized.myvtex.com/_v/getClientsPoints/${userId}`
        )
        response.then(({ data }) => {
          let octopontos: Octopontos = data
          setUserPoints(octopontos)
        })
      } catch (error) {
        console.error("")
      }
    };

    getData();
  }, []);
  
  // const responseData = axios.get('/api/vtexid/pub/authenticated/user').then(({ data }) => data.userId)

  // console.log(responseData)

  // // console.log("session")
  // // console.log(session)

  // const response = axios.get(
  //   `https://desafiogrupo1--bitsized.myvtex.com/_v/getClientsPoints/9ac2a78c-d9c5-4ff9-9d9b-f6bf8f2a5675`
  // )
  // response.then(data => {
  //   let dados: Octopontos = data.data
  //   setUserPoints(dados)
  // })

  return (
    // className={`${handles.pontos}`}
    <div>
      <h1> {userPoints ? `Seu saldo é ${userPoints.pontos}` : 'Você ainda não possui pontos'} </h1>
    </div>
  )
}

Pontucao.schema = {
  title: 'editor.pontuacao.title',
  description: 'editor.pontuacao.description',
  type: 'object',
  properties: {},
}

export default Pontucao
