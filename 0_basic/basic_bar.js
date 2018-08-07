function cleardata(id){
    var len = document.getElementById(id).data.length
    for (var i = 0; i < len; i++)
        Plotly.deleteTraces(id, -1)
}

function bar01(id){
    var data = [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
      }
    ];

    Plotly.newPlot(id, data);
}

function bar02(id){
    var trace = []
    trace[0] = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      name: 'SF Zoo',
      type: 'bar'
    };

    trace[1] = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [12, 18, 29],
      name: 'LA Zoo',
      type: 'bar'
    };


    var layout = {barmode: 'group'};

    Plotly.newPlot(id, trace, layout);
}