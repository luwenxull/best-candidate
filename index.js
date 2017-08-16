import {Quadtree} from './src/Quadtree'
window.quadtree = new Quadtree(1000, 500, 0)
quadtree.add(200, 10)
quadtree.renderToOverview('#svg-preview')