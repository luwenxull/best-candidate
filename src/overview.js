import {select} from 'd3-selection'

function drawPoints(svg, points){
  svg.selectAll('.point')
    .data(points)
    .enter()
    .append('circle')
    .attr('class', 'point')
    .attr('cx', function(d) {
      return d.x;
    })
    .attr('cy', function(d) {
      return d.y;
    })
    .attr('r', 5);
}

export function renderToOverview(parent, quadtree) {
  let svg = select(parent)
    .append('svg')
    .attr('width', quadtree._config.width)
    .attr('height', quadtree._config.height)
  drawPoints(svg, quadtree._tree.data())
}