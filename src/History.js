import React, { Component } from 'react';

class History extends Component {
  render() {
    return (
      <section id="three" className="wrapper style2">
        <header className="major">
          <h2>Work History</h2>
          <p>Four great companies that have helped get me where I am today</p>
        </header>
          <section className="spotlight" data-aos="fade-right">
            <div className="image"><img src="http://www.deq.idaho.gov/App_Plugins/Articulate/Themes/Shazwazza/assets/img/DEQLogo.gif" alt="" /></div>
            <div className="content">
              <h3>Department of Environmental Quality</h3>
              <p>At DEQ I was the sole UI developer using HTML, CSS, and JS. I was also doing the server side development using ColdFusion. Being the lead UI developer, I was in charge of our site's UI overhaul moving from a very outdated site to a more modern UI.

I created a news archive application for this site. This news application took a daily environmental artical and archived them using a SQL database. On the UI, we gave the user a WYSIWYG editor to create these articals.

I also created a AQI (Air Quality Index) application that allowed the user to enter in the AQI for that day. This was also using a SQL database to keep track of Idaho's AQI history.</p>
            </div>
          </section>
          <section className="spotlight" data-aos="fade-left">
            <div className="image"><img src="https://media.glassdoor.com/sqll/484559/truckstop-com-squarelogo-1466712708736.png" alt="" /></div>
            <div className="content">
              <h3>Internet Truckstop</h3>
              <p>I was a lead developer on a complete rewrite from ASP to C# and asp.net. I was also a primary leader in the adoption and use of Scrum, an iterative and incremental agile software development framework for managing software projects and product or application development. I also had to maintain and create WCF and Restful web services using C# for our customers to integrate into our data along with us using these services for our own site.

Just like at DEQ, I was the lead developer for turning an outdated site into a more usable and responsive site. Truckstop is very data oriented which required a lot of grids to output this data. I chose to display this data using KendoUI. My main goal was to also make the site feel very responsive using Ajax.

Truckstop had a very large code base. Because of that, it's where I learned most of what I know today. We followed all the best practices and patterns like TDD, DRY, Factories, Observers, and Interfaces. We also had about 20 databases with hundreds of tables with most code using an ORM like Entity, Dapper, or LINQ to SQL.</p>
            </div>
          </section>
          <section className="spotlight" data-aos="fade-left">
            <div className="image"><img src="https://i.forbesimg.com/media/lists/companies/urs_416x416.jpg" alt="" /></div>
            <div className="content">
              <h3>URS</h3>
              <p>At URS, I have put most of my focus into HTML 5, CSS 3, and JavaScript technologies like Angular, Durandal, Knockout, and RequireJS. Along with focusing on those newer technologies I have been maintaining older applications using C# and Silverlight. I have also taken on the trainer role for the JR developers. I have been training developers in best practices in SPA (Single Page Applications), databases, factories, interfaces, TDD, MVC, Web API.

My main application has been an Accounts Management app where helpdesk can go to and reset passwords or our Accounts Management team uses this tool to manage access to about 10 different products for thousands of users. Our team also uses this application to manage the Roles and Claims that our other applications use along with managing the credentials to our database or webservices. This application is built in all the latest and greatest using HTML 5 and CSS 3 and is built on the SPA framework using AngularJS.</p>
            </div>
          </section>
          <section className="spotlight" data-aos="fade-right">
            <div className="image"><img src="https://pbs.twimg.com/profile_images/477653536952438784/YH1R3-rW.png" alt="" /></div>
            <div className="content">
              <h3>A10 Networks</h3>
              <p>My main responsibility at A10 was our Microsoft customers, Azure and Office365. My tasks included building a generator in C# that would generate an SDK based on A10's main API that was built in Python.
                I would then build fully developed projects for them that they could then just plug in to their environment and run. This project was for our highest paid customer and I was the sole developer managing this for nearly two years.

                When I would have down time from the Microsoft project I would work on our Ruby on Rails application that was for licensing the devices.

                The first 6 months of A10 was spent writing an Angular app that let our customers manage their devices with several graphs and high data views.
              </p>
            </div>
          </section>
      </section>
    );
  }
}

export default History;
