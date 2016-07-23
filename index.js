import { send } from 'micro'
import randomCombo from 'random-a11y-combo'

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, 200, randomCombo())
}
