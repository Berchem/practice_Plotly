// plot0
// function get_data(){
//     return Math.random();
// }

// var plot_area = document.getElementById("plot0")
// Plotly.plot(plot_area, [{
//     y: [get_data()],
//     type: 'line'
// }]);

// function random_line(id){
//     var ct = 0
//     setInterval(function(){

//         Plotly.extendTraces(id, {y: [[get_data()]]}, [0]);
//         ct++;
        
//         if (ct > 300){
//             Plotly.relayout(id,{
//                 xaxis: {range: [ct-300, ct]}
//             })
//         }
//     }, 10);
// }

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
    for (var i = 0; i < 8; i++){
        xi[i] = i
        yi[i] = Math.pow(2, i)
    }
    Plotly.plot(ele, [{
        x: xi,
        y: yi}]
    )
}

// plot1
function prac_01(id){
    set_division(id)
    var ele = document.getElementById(id)
    var xi = []
    var yi = []
    for (var i = 0; i < 9; i++){
        xi[i] = i - 4
        yi[i] = Math.pow(2, -(i-4))
    }
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

        for (var j = 0; j < 4; j++){
            xi[j] = i + j
            yi[j] = Math.random() * (j + 1) * 3
        }

        tracei['x'] = xi
        tracei['y'] = yi
        tracei['type'] = 'scatter'
        trace[i] = tracei
    }
    
    trace[0]['mode'] = 'markers'
    trace[1]['mode'] = 'lines'
    trace[2]['mode'] = 'lines+markers'

    Plotly.plot(ele, trace)

}