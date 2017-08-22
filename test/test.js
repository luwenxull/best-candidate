import Quadtree from '../index'
window.quadtree = new Quadtree(1000, 500, 0)
quadtree.add(200, 1)
quadtree.renderToOverview('#svg-preview')