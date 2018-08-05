function cleardata(id){
    var len = document.getElementById(id).data.length
    for (var i = 0; i < len; i+=1)
        Plotly.deleteTraces(id, -1)
}

function get_xy(){
    var x = [0, 1, 2, 3]
    var y = [Math.random(), Math.random(), Math.random(), Math.random()]
    return [x, y]
}

function plot01(id){
    var ele = document.getElementById(id)
    var trace = []
    trace[0] = {
        x: get_xy()[0],
        y: get_xy()[1],
        type: "scatter"
    }

    trace[1] = {
        x: get_xy()[0],
        y: get_xy()[1],
        type: "scatter"
    }

    Plotly.plot(ele, trace)
}

function plot02(id){
    var ele = document.getElementById(id)
    var trace = []
    var x1 = get_xy()[0]
    var x2 = [], x3 = []
    for (i in  x1){
        x2[i] = Number(i) + 1
        x3[i] = Number(i) + 2
    }
    trace[0] = {
        x: x1,
        y: get_xy()[1],
        type: "scatter",
        mode: "markers",
        name: "markers only"
    }

    trace[1] = {
        x: x2,
        y: get_xy()[1],
        type: "scatter",
        mode: "lines",
        name: "lines only"
    }

    trace[2] = {
        x: x3,
        y: get_xy()[1],
        type: "scatter",
        mode: "markers+lines",
        name: "markers + lines"
    }

    Plotly.plot(ele, trace, {title:"add name to lines and scatter plot"})
}

function plot03(id){
    var ele = document.getElementById(id)

}