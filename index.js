const cxEarth = d3.select("#Ea").select(".planet").attr("cx");
const cyEarth = d3.select("#Ea").select(".planet").attr("cy");
const rEarth = d3.select("#Ea").select(".planet").attr("r");

const durSu = 60000;


const dataPlanetsEa = [
    {id: "Su", orbit: [250, cxEarth, cyEarth], planet: [rEarth*2], duration: durSu},
    {id: "Mo", orbit: [50, cxEarth, cyEarth], planet: [rEarth/2], duration: durSu*0.0748}
];

const dataPlanetsSu = [
    {id: "Me", orbit: [75], planet: [rEarth/2], duration: durSu*0.240846},
    {id: "Ve", orbit: [150], planet: [rEarth/2], duration: durSu*0.615},
    {id: "Ma", orbit: [350], planet: [rEarth/2], duration: durSu*1.881},
    {id: "Ju", orbit: [425], planet: [rEarth*2], duration: durSu*11.86},
    {id: "Sa", orbit: [500], planet: [rEarth*2], duration: durSu*29.46}
];



const svg = d3.select("#astroClock");

const planetsEa = svg.selectAll(".planetsEa")
    .data(dataPlanetsEa)
    .enter()
    .append("g")
    .attr("class", "planetsEa")
    .attr("id", d => d.id);

planetsEa.append("circle")
    .attr("class","orbit")
    .attr("r", d => d.orbit[0])
    .attr("cx", d => d.orbit[1])
    .attr("cy", d => d.orbit[2]);

const elPlanetsEa =  planetsEa.append("g")
    .attr("class","element");

elPlanetsEa.append("circle")
    .attr("class", "planet")
    .attr("r", d => d.planet[0]);

elPlanetsEa.append("text")
    .attr("class", "label")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .text(d => d.id);



const planetsSu = d3.select("#Su .element")
    .selectAll(".planetsSu")
    .data(dataPlanetsSu)
    .enter()
    .append("g")
    .attr("class", "planetsSu")
    .attr("id", d => d.id);

planetsSu.append("circle")
    .attr("class","orbit")
    .attr("r", d => d.orbit[0]);

const elPlanetsSu =  planetsSu.append("g")
    .attr("class","element");

elPlanetsSu.append("circle")
    .attr("class", "planet")
    .attr("r", d => d.planet[0]);

elPlanetsSu.append("text")
    .attr("class", "label")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .text(d => d.id);



dataPlanetsEa.forEach(animate);
dataPlanetsSu.forEach(animate);

function animate(item) {
    let orbit = anime.path('#' + item.id + ' .orbit');
    
    anime({
        targets: '#' + item.id + ' .element',
        translateX: orbit('x'),
        translateY: orbit('y'),
        rotate: orbit('angle'),
        easing: 'linear',
        duration: item.duration,
        loop: true
    });
}