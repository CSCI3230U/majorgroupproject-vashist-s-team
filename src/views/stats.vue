// https://www.tutorialspoint.com/How-to-get-a-number-of-days-in-a-specified-month-using-JavaScript
<template>
    <div ref="selector">
        <div class="select">
            <select ref="Year">
                <option>Year</option>
                <option value="2021">2021</option>
            </select>

        </div>
        <div class="select">
            <select ref="Month">
                <option>Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </select>

        </div>
        <div class="select">
            <select ref="Day">
                <option>Day</option>
                <option v-for="index in getDays()" v-bind:key="index" :value="index">{{index}}</option>
            </select>

        </div>
        <div class="button" v-on:click="submit()" >
            <span>
                Submit
            </span>
        </div>
        <p ref="errorMessage">
        </p>
    </div>
    <div class ="graph">

    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
import * as d3 from 'd3';


export default{
    // name: App
    data(){
        return{
            Year: null,
            Month: null,
            Day: null,
                
        }
    },

    methods:{
        makeVisitorsBarGraph(dict){
        d3.selectAll('svg').remove();

        const margin = 40;
        const width = 500;
        const height = 250;
        const chartWidth = width - 2     * margin;
        const chartHeight = height - 2 * margin;
        console.log(dict);
        const colourScale = d3.scaleLinear()
                                .domain([0, 20])
                                .range(['red', 'blue']);
        
        const xScale = d3.scaleBand() // discrete, bucket
                            .domain(dict.map((data) => data.Day))
                            .range([0, chartWidth])
                            .padding(0.3);
        
        const yScale = d3.scaleLinear()
                            .domain([0, 100])
                            .range([chartHeight, 0]);

        let svg = d3.select('.graph')
                        .append('svg')
                        
                            .attr('width', width)
                            .attr('height', height);
        
        // title
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin)
                .attr('text-anchor', 'middle')
                .text('Number of Visitors by day ');
        //Grade on x axis
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin+255)
                .attr('text-anchor', 'middle')
                .text('Days');

        svg.append('text')
                .attr('transform','rotate(-90)')
                .attr('x', width-650) 
                .attr('y', margin-29)
                .attr('text-anchor', 'middle')
                .text('Number of visitors');

            
        // create a group (g) for the bars
        let g = svg.append('g')
                        .attr('transform', `translate(${margin}, ${margin})`);

        // y-axis
        g.append('g')
            .call(d3.axisLeft(yScale));
        
        // x-axis
        g.append('g')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(xScale));
        
        let rectangles = g.selectAll('rect')
            .data(dict)
            .enter()
                .append('rect')
                    .attr('x', (data) => xScale(data.Day))
    // eslint-disable-next-line no-unused-vars
                    .attr('y', (data) => chartHeight)
                    .attr('width', xScale.bandwidth())
    // eslint-disable-next-line no-unused-vars
                    .attr('height', (data) => 0)
                    .attr('fill', (data) => colourScale(data.visitors))

        
        rectangles.transition()
            .ease(d3.easeElastic)
            .attr('height', (data) => chartHeight - yScale(data.visitors))
            .attr('y', (data) => yScale(data.visitors))
            .duration(1000)
            .delay((data, index) => index * 50);
           
           
        },
        makeTimeSpentBarGraph(dict){

        const margin = 40;
        const width = 500;
        const height = 250;
        const chartWidth = width - 2     * margin;
        const chartHeight = height - 2 * margin;
        console.log(dict);
        const colourScale = d3.scaleLinear()
                                .domain([0, 20])
                                .range(['red', 'blue']);
        
        const xScale = d3.scaleBand() // discrete, bucket
                            .domain(dict.map((data) => data.Day))
                            .range([0, chartWidth])
                            .padding(0.3);
        
        const yScale = d3.scaleLinear()
                            .domain([0, 100])
                            .range([chartHeight, 0]);

        let svg = d3.select('.graph')
                        .append('svg')
                        
                            .attr('width', width)
                            .attr('height', height);
        
        // title
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin)
                .attr('text-anchor', 'middle')
                .text('Number of timespent by day ');
        //Grade on x axis
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin+255)
                .attr('text-anchor', 'middle')
                .text('Days');

        svg.append('text')
                .attr('transform','rotate(-90)')
                .attr('x', width-650) 
                .attr('y', margin-29)
                .attr('text-anchor', 'middle')
                .text('Time Spent (Minutes)');

            
        // create a group (g) for the bars
        let g = svg.append('g')
                        .attr('transform', `translate(${margin}, ${margin})`);

        // y-axis
        g.append('g')
            .call(d3.axisLeft(yScale));
        
        // x-axis
        g.append('g')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(xScale));
        
        let rectangles = g.selectAll('rect')
            .data(dict)
            .enter()
                .append('rect')
                    .attr('x', (data) => xScale(data.Day))
    // eslint-disable-next-line no-unused-vars
                    .attr('y', (data) => chartHeight)
                    .attr('width', xScale.bandwidth())
    // eslint-disable-next-line no-unused-vars
                    .attr('height', (data) => 0)
                    .attr('fill', (data) => colourScale(data.timeSpent))

        
        rectangles.transition()
            .ease(d3.easeElastic)
            .attr('height', (data) => chartHeight - yScale(data.timeSpent))
            .attr('y', (data) => yScale(data.timeSpent))
            .duration(1000)
            .delay((data, index) => index * 50);
           
           
        },
        getDays(){
            var date = new Date();
            var newDate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
            return newDate;
        },
        submit(){
            this.Year = this.$refs.Year.value;
            this.Month = this.$refs.Month.value;
            this.Day = this.$refs.Day.value;
            if(this.Year == "Year" || this.Month == "Month"){
                this.$refs.errorMessage.innerHTML = "Please Have Year & Month Filled!"

            }else{
                axios.post('http://localhost:4000/getData',{
                    year: this.Year,
                    month: this.Month,
                    day: this.Day
                })
                .then((response)=>{
                    console.log(response['data'][0]['_id']);
                    var dict = []
                    for(var i=0;i<response['data'].length;i++){
                        dict[i] = {
                            "Day":response['data'][i]['day'],
                            "timeSpent":(response['data'][i]['timeSpent']/1000)/60,
                            "visitors":response['data'][i]['visitors']
                            
                        }
                        console.log(dict);

                        
                    }
                    this.makeVisitorsBarGraph(dict)
                    this.makeTimeSpentBarGraph(dict)

                    },
                    (error) =>{
                        console.log(error);
                    });
            }

        }

                    
    }


}
</script>

<style scoped>

</style>