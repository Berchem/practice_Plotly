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
