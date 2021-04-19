// https://www.tutorialspoint.com/How-to-get-a-number-of-days-in-a-specified-month-using-JavaScript
// Bulma documentation was used to help create the select
<template>
    <!-- Select options -->
    <section class="hero has-background-link-light is-halfheight">
        <div class="columns is-centered">
            <div class="column is-3">
                <div class="box has-background-dark">
                    <div ref="selector">
                        <div class="select is-dark mx-1">
                        <!-- Select for the year -->
                            <select ref="Year">
                                <option>Year</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                        <!-- Select for the month -->
                        <div class="select mx-2 is-dark">
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
                        <!-- Select for the day(will be dynamically loaded depending on the month chosen) -->
                        <div class="select mx-2 is-dark ">
                            <select ref="Day">
                                <option>Day</option>
                                <option v-for="index in getDays()" v-bind:key="index" :value="index">{{index}}</option>
                            </select>

                        </div>
                        <!-- Submit button -->
                        <div class="button mx-1  is-dark" v-on:click="submit()" >
                            <span>
                                Submit
                            </span>
                        </div>
                        <p class="has-text-danger has-text-weight-bold has-text-centered my-3" ref="errorMessage"></p>

                    </div>
                </div>
            </div>
        </div>
        <!-- Graph placement with columns spacing between -->
        <div class ="columns">
            <div class ="column is-1">

            </div>
            <div class ="column mx-5 is-5">
                <div class ="graphVisitors">

                </div>
            </div>
            <div class ="column is-1">

            </div>
            <div class ="column mx-5 is-5">
                <div class ="graphTimespent">

                </div>
            </div>
        </div>

    </section>
    <section class="hero has-background-link-light is-halfheight">
    </section>


</template>

<script>
// importing axios
import axios from 'axios';
axios.defaults.withCredentials = true;
// importing d3
// https://dev.to/andre347/d3js-and-vuejs--30c8 link taught how to import d3 in vuejs
import * as d3 from 'd3';
export default{

    // initailizing variables
    data(){
        return{
            Year: null,
            Month: null,
            Day: null,
                
        }
    },
    // Methods section
    methods:{
        // Makes a bargraph
        makeVisitorsBarGraph(dict){
            // Please note this d3 bargraph code was used from Saenthuran Vignarajah's labs  which was taken from Randy Fortiers lectures!
        // Removes any previous bar graphs 
        d3.selectAll('svg').remove();
        // initailizing graph variables such as margin, height etc...
        const margin = 40;
        const width = 600;
        const height = 500;
        const chartWidth = width - 2 * margin;
        const chartHeight = height - 2 * margin;
        // Colour scale
        const colourScale = d3.scaleLinear()
                                .domain([2,2])
                                .range(['#00FF00','blue']);
        // X axis 
        const xScale = d3.scaleBand() 
                            .domain(dict.map((data) => data.Day))
                            .range([0, chartWidth])
                            .padding(0.3);
        // Y axis
        const yScale = d3.scaleLinear()
                            .domain([0, 10000])
                            .range([chartHeight, 0]);
        // creating svg and appending it to graphTimeSpent column 
        let svg = d3.select('.graphTimespent')
                        .append('svg')
                        
                            .attr('width', width)
                            .attr('height', height);
        
        // This is the title of the graph with some minor position tweeks 
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin)
                .attr('text-anchor', 'middle')
                .text('Number of Visitors by day ');

        // X axis title with some minor position tweeks
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin+455)
                .attr('text-anchor', 'middle')
                .text('Days');
        // Y axis title with some position tweeks
        svg.append('text')
                .attr('transform','rotate(-90)')
                .attr('x', width-850) 
                .attr('y', margin-35)
                .attr('text-anchor', 'middle')
                .text('Number of visitors');
        // Creating agroup g for the bar graphs
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
        const width = 600;
        const height = 500;
        const chartWidth = width - 2     * margin;
        const chartHeight = height - 2 * margin;
        console.log(dict);
        const colourScale = d3.scaleLinear()
                                .domain([2,2])
                                .range(['#00FF00','blue']);
        
        const xScale = d3.scaleBand() // discrete, bucket
                            .domain(dict.map((data) => data.Day))
                            .range([0, chartWidth])
                            .padding(0.3);
        
        const yScale = d3.scaleLinear()
                            .domain([0, 1000])
                            .range([chartHeight, 0]);
        let svg = d3.select('.graphVisitors')
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
                .attr('y', margin+455)
                .attr('text-anchor', 'middle')
                .text('Days');
        svg.append('text')
                .attr('transform','rotate(-90)')
                .attr('x', width-850) 
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
            d3.selectAll('svg').remove();
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
.box{
    border-radius:0px 0px 10px 10px!important;
}
</style>