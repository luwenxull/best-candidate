import {quadtree} from 'd3-quadtree'
import {randomUniform} from 'd3-random'
import {distanceBetweenTwoPoints} from './tool'
import {renderToOverview} from './overview'

function getBestCandidate(quadtree, candidateNum) {
  let currentMax = 0
  let bestCandidate = null
  for (let i = 0; i < candidateNum; i++) {
    let x = quadtree._randomGenerator.x()
    let y = quadtree._randomGenerator.y()
    let closest = quadtree._tree.find(x, y)
    if (closest) {
      let max =
        Math.max(
          currentMax, distanceBetweenTwoPoints(x, y, closest.x, closest.y)
        )
      if (max !== currentMax) {
        currentMax = max
        bestCandidate = [x, y, max]
      }
    } else {
      return [x, y]
    }
  }
  return bestCandidate
}
export class Quadtree {
  constructor(width, height, padding) {
    this._tree = quadtree()
    // .extent([10, 10], [width - 10, height - 10])
      .x(datum => datum.x)
      .y(datum => datum.y)
    this._randomGenerator = {
      x: randomUniform(0, width),
      y: randomUniform(0, height),
    }
    this._config = {
      width,
      height,
      padding,
    }
    console.log(this._tree)
  }

  add(number, candidateNum = 1) {
    console.time('add')
    for (let i = 0; i < number; i++) {
      let [x, y, distance] = getBestCandidate(this, candidateNum)
      let validPoint = true
      if (distance && distance < this._config.padding) {
        validPoint = false
      }
      if (validPoint) {
        this._tree.add({
          x, y
        })
      }
    }
    console.timeEnd('add')
  }

  renderToOverview(parent) {
    renderToOverview(parent, this)
  }
}


