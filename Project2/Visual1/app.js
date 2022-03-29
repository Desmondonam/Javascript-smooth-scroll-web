const data = await d3.csv("D:/javascript/Project2/Data/a1-cars.csv");
console.log(data);
  
  const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);
  const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);
  
  const container = d3.select('svg').classed('container', true);
  
  const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));
  
  setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
  }, 2000);