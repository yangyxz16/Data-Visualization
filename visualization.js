var dataArray = [5,11,18];
var margin = {left:0, right: 50, top:0, bottom:0, center: "50%"};

var mid_width = screen.width / 2;
var mid_height = screen.height /2.4;
var radius = 250;
var svg = d3.select("body").append("svg")
            .attr("height","100%")
            .attr("width", "100%");

var template = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");

    template.append("circle")
        .attr("cx",mid_width)
        .attr("cy",mid_height)
        .attr("fill", "#cdc1c5")
        .attr("r",radius + 50);

    template.append("circle")
            .attr("cx",mid_width)
            .attr("cy",mid_height)
            .attr("fill", "white")
            .attr("r", radius);

    template.append("line")
      .attr("stroke-width", "2")
      .attr("stroke", "red")
      .attr("x1", mid_width - radius)
      .attr("y1", mid_height)
      .attr("x2", mid_width + radius)
      .attr("y2", mid_height);
    template.append("line")
        .attr("stroke-width", "2")
        .attr("stroke", "red")
        .attr("x1", mid_width)
        .attr("y1", mid_height - radius)
        .attr("x2", mid_width)
        .attr("y2", mid_height + radius);
