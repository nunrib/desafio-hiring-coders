import React from 'react'
import { useRenderSession } from 'vtex.session-client'

interface PontucaoProps {}

const Pontucao: StorefrontFunctionComponent<PontucaoProps> = ({}) => {
  const { loading, session, error } = useRenderSession()

  if (loading) {
    return <>Session is loading</>
  }
  
  if (error) {
    return <>Session has errors</>
  }

  console.log({ session })

  return (
    <div>
      <h1>Hello World!</h1>
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