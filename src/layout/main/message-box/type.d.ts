export interface MessageRecord {
  id: number
  type: string
  title: string
  subTitle: string
  avatar?: string
  content: string
  time: string
  status: 0 | 1
}
