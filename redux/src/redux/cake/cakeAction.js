import { BUY_CAKE } from './cakeTypes'

export function byCake(payload = 1) {
  return {
    type: BUY_CAKE,
    payload: payload
  }
}
