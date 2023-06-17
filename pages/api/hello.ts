// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

/* 
pages文件夹下的component组件就类似于jsp也面，最主要的作用就是展示
api文件类似于servlet，可以为侯丹提供接口。
*/
