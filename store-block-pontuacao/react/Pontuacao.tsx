import React from 'react'
import { useRenderSession } from 'vtex.session-client'
import { useCssHandles } from 'vtex.css-handles'

interface PontucaoProps {}

const CSS_HANDLES = ['pontos']

const Pontucao: StorefrontFunctionComponent<PontucaoProps> = ({}) => {
  const { loading, session, error } = useRenderSession()
  const handles = useCssHandles(CSS_HANDLES)

  if (loading) {
    return <>Session is loading</>
  }
  
  if (error) {
    return <>Session has errors</>
  }
  const pontuacao = 10
  console.log({ session })

  return (
    <div className={`${handles.pontos}`}>
      <h1> Seu saldo é { pontuacao }</h1>
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