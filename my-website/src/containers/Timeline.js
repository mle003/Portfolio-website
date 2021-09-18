import React from "react";
import '../styles/Timeline.css'

const TimeLine = () => {
  return (
    <div id='timeline' className='mt-20 text-left px-48 text-black'>
      <h1 className='mb-10 mt-36 text-2xl font-bold text-white'>Life Events</h1>
      <div class="timeline">
        <div class="container left">

          <div class="content">

            <h2>May 2018</h2>

            <p>Graduate from High School</p>

          </div>

        </div>

        <div class="container right">

          <div class="content">

            <h2>June 2018</h2>

            <p>Start learning programming</p>

          </div>

        </div>


        <div class="container left">

          <div class="content">

            <h2>August 2018</h2>

            <p>Start college's life at SUNY Plattsburgh</p>

          </div>


        </div>

        <div class="container right">

          <div class="content">

            <h2>May 2019</h2>

            <p>Finish first coding project</p>

          </div>
        </div>
        <div class="container left">

          <div class="content">

            <h2>May 2020</h2>

            <p>First Internship at Hanpu Technology</p>

          </div>

        </div>
        <div class="container right">

          <div class="content">

            <h2>November 2020</h2>

            <p>Have a new journey with as Software developer at Benit</p>

          </div>
        </div>
        <div class="container left">

          <div class="content">

            <h2>Summer 2021</h2>

            <p>First offical developer job at Hivetech</p>

          </div>

        </div>
        <div class="container right">

          <div class="content">

            <h2>Fall 2021</h2>

            <p>First time having teacher assistant role at SUNY Plattsburgh</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine;