import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'

export function initBScroll(){
  BScroll.use(PullUp);
}
