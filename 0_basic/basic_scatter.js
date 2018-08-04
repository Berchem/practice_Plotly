function set_division(id){
    ele = document.getElementById(id)
    ele.setAttribute("style", "width:100%; height:20rem;")
}

function clearTraces(id){
    var len = document.getElementById(id).data.length
    for (var i = 0; i < len; i++)
        Plotly.deleteTraces(id, 0)
}

// plot0
function prac_00(id){
    set_division(id)
    var ele = document.getElementById(id)
    var xi = []
    var yi = []
    var n = 50
    for (var i = 0; i < n; i++){
        xi[i] = (i - n / 2) * 0.1
        yi[i] = Math.pow(2, xi[i])
    }
    Plotly.plot(ele, [{
        x: xi,
        y: yi}],
        {margin: {t: 1}}
    )
}

// plot1
function prac_01(id){
    set_division(id)
    var ele = document.getElementById(id)
    var xi = []
    var yi = []
    var n = 50
    for (var i = 0; i < n; i++){
        xi[i] = (i - n / 2) * 0.1
        yi[i] = Math.pow(2, -xi[i])
    }

    console.log(xi)
    console.log(yi)
    
    Plotly.plot(ele, [{
        x: xi,
        y: yi,
        marker:{
            color: 'rgb(200, 103, 103)'
        }}]
    )
}

function prac_02(id){
    set_division(id)
    var ele = document.getElementById(id)
    var trace = []

    for (var i = 0; i < 3; i++){
        var xi = []
        var yi = []
        var tracei = {}

        for (var j = 0; j < 30; j++){
            xi[j] = i + j
            yi[j] = (Math.random() + i) * Math.pow(1.05, j)
        }

        tracei['x'] = xi
        tracei['y'] = yi
        tracei['type'] = 'scatter'
        tracei['line'] = {'shape': 'spline'}
        trace[i] = tracei
    }
    
    trace[0]['mode'] = 'markers'
    trace[1]['mode'] = 'lines'
    trace[2]['mode'] = 'lines+markers'

    Plotly.plot(ele, trace)

}

//plot3
function prac_03(id){
    set_division(id)
    var ele = document.getElementById(id)
    var ct = 0
    var trace = [{
        y: [Math.random()],
        type: 'line'
    }]

    Plotly.plot(ele, trace)

    setInterval(function(){
        var trace = {}
        trace['y'] = [[Math.random()]]
        Plotly.extendTraces(id, trace, [0])
        ct++
        if (ct > 50)
            Plotly.relayout(id, {
                xaxis: {range:[ct-50, ct]}
            })
        
    }, 175)
}


//plot4
function prac_04(id){
    set_division(id)
    var ele = document.getElementById(id)
    var x = []
    var y = []
    var trace = {}

    for (var i = 0; i < 50; i++){
        x[i] = i * 0.4
        y[i] = Math.sin(Math.sqrt(x[i]))
//        y[i] = Math.sin(Math.pow(x[i], 0.5))
    }

    trace['x'] = x
    trace['y'] = y
    trace['type'] = "bar"
    trace['marker'] = {"color": "darkorange"}


    Plotly.plot(ele, [trace])
}

//plot5
function prac_05(id){
    var ele = document.getElementById(id)
    var trace = []
    trace[0] = {
        x: [0, 1, 2, 3],
        y: [Math.random(), Math.random(), Math.random(), Math.random()],
        mode: "markers",
        type: "scatter",
        name: "I",
        text: ["I-1", "I-2", "I-3", "I-4"],
        marker: {size: 20}
    }

    trace[1] = {
        x: [4, 5, 6, 7],
        y: [Math.random(), Math.random(), Math.random(), Math.random()],
        mode: "markers",
        type: "scatter",
        name: "II",
        text: ["II-1", "II-2", "II-3", "hello plotly"],
        marker: {size: 10}
    }

    var layout = {
        xaxis: {
            range: [-1, 8],
            title: "x-axis"
        },
        yaxis: {
            range: [-0.5,1.5],
            title: "ylabel"
        },
        title: "practice xlabel, ylabel and title"
    }

    Plotly.plot(ele, trace, layout)
}

//plot6
function prac_06(id){
    var ele = document.getElementById(id)
    var trace = []
    trace[0] = {
        x: [0, 1, 6, 7],
        y: [Math.random(), Math.random(), Math.random(), Math.random()],
        mode: "markers+text",
        type: "scatter",
        name: "data1",
        text: ["data1.a", "data1.b", "data1.c", "data1.d"],
        textposition: "top",
        textfont: {family: "consolas"},
        marker: {size: 12}
    }

    Plotly.plot(ele, trace)
}