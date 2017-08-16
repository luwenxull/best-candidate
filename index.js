import {Quadtree} from './src/Quadtree'
let quadtree = new Quadtree(1000, 500, 30)
quadtree.add(100, 10)
quadtree.renderToOverview('#svg-preview')