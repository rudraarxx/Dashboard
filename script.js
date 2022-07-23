var ctx = document.getElementById('myChart').getContext("2d");
var pie = document.getElementById('pieChart').getContext("2d");

var myGraph = new Chart(ctx, {
    type:"line",
    data:{
        labels: ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan"],
        datasets: [
            {
                data: [60, 35, 75, 55, 80, 40, 60, 35, 60, 60],
                borderColor: "#75FBAC",
                fill:'+1',
                tension: 0.5,
                pointRadius: 0,
                backgroundColor: "rgba(117, 251, 172, 0.4)",
            },
            {
                data: [40, 20, 45, 20, 30, 5, 45, 20, 15, 10],
                borderColor: "#FFF",
                fill:{
                    target:'start',
                    above:"rgba(255, 255, 255, 0.2)",
                },
                tension: 0.5,
                pointRadius: 0,
                borderDash: [10, 5],
                borderColor:"#fff"
            }
        ],
        // datasets: [
            
        // ],
    },
    options:{
        responsive:false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
                
            }
    },
}
});

var pieGraph= new Chart(pie, {
    type:"pie",
    data : {
        datasets: [{
            // data: [11.9, 9.5, 11.9, 11.9, 9.5, 9.5, 7.1, 7.1, 4.8, 4.8, 2.4, 4.8, 2.4, 2.4],
            data: [3,3,4,2,2,1,4,20,17,12,8,5,6,6],
            backgroundColor: [
                '#4FCF7B',
                '#E0F5E5',
                '#C9EAD4',
                '#A9DEBA',
                '#88D1A1',
                '#59AA76',
                '#4B8F64',
                '#3E7553',
                '#305A41',
                '#223F30',
                '#67C587',
                '#EAF6ED',
                '#C9EAD4',
                '#A9DEBA'
              ],
              
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ['Art','P2P lending','NFTs','Collectibles','Wine','Students','Cash','Startup','Cryptocurrencies','Listed equities','Real estate','Equipment fin...','Litigation fin...','Agronomy'],
       
    },
    options:{
        plugins: {
            legend: {
                display: false,
                
            }
    },
    responsive:false,
    elements: {
        arc: {
            borderWidth: 0
        }
    }
    }
   

})