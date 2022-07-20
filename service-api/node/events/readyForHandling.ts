import { DATA_ENTITY } from '../utils/constants'

export async function readyForHandlingEvent(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const {
    clients: { oms, masterdata },
  } = ctx

  const orderId = await ctx.body.orderId
  console.info('Dados', orderId)
  const data = await oms.order(orderId)
  // Pegar valores realmente pago pelos produtos menos descontos e não incluindo taxas e frete
  const totalItems = data.totals[0].value
  const discounts = data.totals[1].value
  const amountPaid = totalItems - discounts

  // Removendo os centavos do valor pago
  let amountPaidString = amountPaid.toString()
  amountPaidString = amountPaidString.slice(0, -2)
  const amountNumber = parseInt(amountPaidString)

  // Pegar e-mail e userProfileId do cliente
  const userProfileId = data.clientProfileData.userProfileId

  const documento = await masterdata.searchDocuments<
    Octopontos
  >({
    dataEntity: DATA_ENTITY,
    fields: ['id', 'userId', 'pontos'],
    where: `userId=${userProfileId}`,
    pagination: { 
      page: 1,
      pageSize: 1
    },
    schema: 'v0'
  })

  if(documento.length != 0){
    await masterdata.createOrUpdateEntireDocument({
      dataEntity: DATA_ENTITY,
      fields: {
        userId: userProfileId,
        pontos: documento[0].pontos,
      },
      id: documento[0].id,
    })
  } else {
    await masterdata.createDocument({
      dataEntity: DATA_ENTITY,
      fields: {userId: userProfileId, pontos: amountNumber},
      schema: 'v0'
    })
  }

  await next()
}


interface Octopontos {
  id: string
  userId: string
  pontos: number
}