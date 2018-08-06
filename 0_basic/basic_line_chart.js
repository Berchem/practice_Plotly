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
    var x1 = get_xy()[0]
    var x2 = [], x3 = []
    for (i in x1){
        x2[i] = Number(i) + 1
        x3[i] = Number(i) + 2
    }
    var trace = []
    trace[0] = {
        x: x1,
        y: get_xy()[1],
        mode: "markers",
        marker: {
            size: 8,
            color: 'rgb(200, 85, 85)'
        },
        name: "trace 0"
    }

    trace[1] = {
        x: x2,
        y: get_xy()[1],
        mode: "lines",
        line: {
            width: 2,
            color: 'rgb(55, 128, 191)'
        },
        name: "trace 1"
    }

    trace[2] = {
        x: x3,
        y: get_xy()[1],
        mode: "lines+markers",
        line: {
            color: "rgb(170, 85, 170)",
            width: 1
        },
        marker: {
            size: 12
        },
        name: "trace 2"
    }

    var layout = {title: "line & scatter styling"}

    Plotly.plot(ele, trace)
}

function plot04(id){
    var ele = document.getElementById(id)
    var x = get_xy()[0]
    var trace = []
    trace[0] = {
        x: x,
        y: get_xy()[1],
        mode: "lines",
        line: {
            width: 1,
            color: 'rgb(170, 85, 85)'
        },
        name: "red"
    }

    trace[1] = {
        x: x,
        y: get_xy()[1],
        name: "green",
        mode: "lines",
        line:{
            width: 3,
            color: "rgb(85, 170, 85",
            dash: "dash"
        }
    }

    var layout = {
        width: 560,
        height: 480,
        title: "styling line plot"
    }

    Plotly.plot(ele, trace, layout)
}

function plot05(id){
    var ele = document.getElementById(id)
    var trace = []
    trace[0] = {
        x: [52698, 43117],
        y: [53, 31],
        name: 'North America',
        text: ['United States', 'Canada'],
        mode: "markers",
        marker: {
            size: 12
        }
    }

    trace[1] = {
        x: [39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
        y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
        name: 'Europe',
        text: ['Germany', 'Britain', 'France', 'Spain', 'Italy', 'Czech Rep.', 'Greece', 'Poland'],
        mode: "markers",
        marker: {
            size: 12
        }
    }

    trace[2] = {
        x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
        y: [23, 42, 54, 89, 14, 99, 93, 70],
        name: 'Asia/Pacific',
        text: ['Australia', 'Japan', 'South Korea', 'Malaysia', 'China', 'Indonesia', 'Philippines', 'India'],
        mode: "markers",
        marker: {
            size: 12
        }
    }

    trace[3] = {
        x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
        y: [43, 47, 56, 80, 86, 93, 80],
        mode: 'markers',
        name: 'Latin America',
        text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
        mode: "markers",
        marker: {
            size: 12
        }
    }

    var layout = {
        title: 'Quarter 1 Growth',
        xaxis: {
            title: 'GDP per Capita',
            showgrid: false,
//            zeroline: true
        },
        yaxis: {
            title: 'Percent',
            showline: false
        }
    }

    Plotly.plot(ele, trace, layout)
}

function plot06(id){
    var ele = document.getElementById(id)
    var trace = []
    for (var i = 0; i < 6; i++)
        trace[i] = {
            x: get_xy()[0],
            y: get_xy()[1],
            type: "scatter"
        }
    for (i = 0; i < trace.length; i++){
        for (var j = 0; j < trace[i]['x'].length; j++)
            trace[i]['y'][j] = 3 * (trace[i]['y'][j] + i)
    }


    Plotly.plot(ele, trace)
}

