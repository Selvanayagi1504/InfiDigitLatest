import React, { useEffect, useRef } from "react";
import {useState} from "react";
import Chart from "react-google-charts";
import "antd/dist/antd.css";
import { Table, Breadcrumb } from "antd";
import {useLocation} from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NotificationSEO } from "./index";
import 'rsuite/dist/rsuite.css';
import {SideNavBarCustomClosed, SideNavBarCustom} from './index'

function DashboardCustomers() {
    const [sidenavToggle, setSidenavToggle] = useState(true);
    const [sidenav,setsidenav] = useState(false);
    const [sidenavsales, setsidenavsales] = useState(false);
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const [proj,setproj] = useState(id);
    const [clientchosen, setclientchosen] = useState([
  
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
  ]);
  const [projectslisttop, setprojectslisttop] = useState([
    {
      title:"Myntra",
      projects:[
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
      ]
    },
    {
      title:"Amazon",
      projects:[
        {
          projname:"Amazon - Fashion"
        },
        {
          projname:"Amazon - Jewellery"
        }
      ]
    }
  ])
  function showProjects(a){
    var proj = projectslisttop.filter(item => item.title == a);
    console.log(proj[0].projects)
    setclientchosen(proj[0].projects)
  }
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
return (
<>
<section class="outer-wrapper dashboard-sales dashboard-seo">
  <div class="top-nav-bar">
      <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
      <div className="wrapper dashboard-seo-dropdown" ref={ref}>
          <button
            className="button"
            onClick={() => setIsMenuOpen(oldState => !oldState)}
          >
            All data View <i class="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          {isMenuOpen && (
           <div className="row">
              <div className="col-md-6" style={{borderRight:'1px solid rgba(0,0,0,.15)'}}>
                
                <ul className="Clients-list">
                  <li  onClick={()=>{showProjects("Myntra")}}><span>Myntra</span> <i class="fa fa-angle-right"></i></li>
                  <li  onClick={()=>{showProjects("Amazon")}}><span>Amazon</span> <i class="fa fa-angle-right"></i></li>
                </ul>
              </div>
              <div className="col-md-6">
               <ul class="projectsList">
               {clientchosen.map((i)=>{
                 return(
                   <li onClick={()=>{setproj(i.projname);setIsMenuOpen(false)}}>{i.projname}</li>
                 )
               })}
               </ul>
              </div>
           </div>

          )}
        </div>
      </div>
      {/* <div class="nav-bar-center">&nbsp;</div> */}
      <div class="nav-bar-right">
        <ul class="list-unstyled nav-right-menu">
          <li>
         <NotificationSEO/>


                    </li>
          <li class="dropdown">
            <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
            <span class="profile-name">Customers</span>
          </button>
            
              
              
              <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/">Log Out</a></li>
              </ul>
            
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
    <div className="custom-row-dashboard-seo">
      <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
          <div class="sidebar-nav-bar sidebar-sales">
          {sidenavToggle 
                            ?
                            <>
                                {/* <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i>Home</a></li>
                                <li><a href="module-expand-da"><span class="icon"><i class="fa fa-check"></i></span><span>DA/ PA Checker</span></a></li>
                                <li><a href="module-expand-google-trends"><span class="icon"><i class="fa fa-line-chart" aria-hidden="true"></i></span><span>Google Trends</span></a></li>
                                <li><a href="module-expand-page-speed"><span class="icon"><i class="fa fa-tachometer" aria-hidden="true"></i></span><span>Page Speed and Core Web Vitals</span></a></li>
                                <li><a href="module-expand-click-share"><span class="icon"><i class="fa fa-share"></i></span><span>Click Share</span></a></li>
                                <li><a href="module-expand-rank-tracking"><span class="icon"><i class="fa fa-trophy"></i></span><span>Rank Tracking</span></a></li>
                                <li><a href="module-expand-site-uptime"><span class="icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span><span>Site Uptime Monitor</span></a></li>
                                <li><a href="module-expand-gsc"><span class="icon"><i class="fa fa-database" aria-hidden="true"></i></span><span>GSC Data Extractor</span></a></li>
                                <li><a href="module-expand-organic-research"><span class="icon"><i class='fa fa-flask' aria-hidden="true"></i></span><span>Organic Research module</span></a></li>
                                <li><a href="module-expand-roi"><span class="icon"><i class="fa fa-calculator" aria-hidden="true"></i></span><span>ROI Calculator</span></a></li>
                                <li><a href="content-word-count"><span class="icon"><i class="fa fa-file" aria-hidden="true"></i></span><span>Content Word Count on a Page</span></a></li>
                                <li><a href="module-expand-backlinks"><span class="icon"><i class="fa fa-external-link" aria-hidden="true"></i></span><span>BackLinks</span></a></li>
                                <li><a href="module-expand-keyword-research"><span class="icon"><i class="fa fa-keyboard-o" aria-hidden="true"></i></span><span>Keyword Research</span></a></li>
                                <li><a href="module-expand-seo-volatality"><span class="icon"><i class="fa fa-building-o"></i></span><span>SEO Volatality</span></a></li>
                                <li><a href="module-expand-google-analytics"><span class="icon"><i class="fa fa-bar-chart" aria-hidden="true"></i></span><span>Google Analytics</span></a></li>
                                <li><a href="module-expand-seo-audit"><span class="icon"><i class="fa fa-pagelines"></i></span><span>SEO Audit</span></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i>Tickets</a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i>Configuration</a></li>
                                </ul> */}
                                <SideNavBarCustom />
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-left"></i>
                                </button>
                            </>
                            :
                            <>
                                {/* <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i></a></li>
                                <li><a href="module-expand-da"><i class="fa fa-check"></i></a></li>
                                <li><a href="module-expand-google-trends"><i class="fa fa-line-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-page-speed"><i class="fa fa-tachometer" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-click-share"><i class="fa fa-share"></i></a></li>
                                <li><a href="module-expand-rank-tracking"><i class="fa fa-trophy"></i></a></li>
                                <li><a href="module-expand-site-uptime"><i class="fa fa-clock-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-gsc"><i class="fa fa-database" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-organic-research"><i class='fa fa-flask' aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-roi"><i class="fa fa-calculator" aria-hidden="true"></i></a></li>
                                <li><a href="content-word-count"><i class="fa fa-file" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-backlinks"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-keyword-research"><i class="fa fa-keyboard-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-volatality"><i class="fa fa-building-o"></i></a></li>
                                <li><a href="module-expand-google-analytics"><i class="fa fa-bar-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-audit"><i class="fa fa-pagelines"></i></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i></a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i></a></li>
                                </ul> */}
                                <SideNavBarCustomClosed />
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                        }      
          </div>
      </div>
      <div className={sidenavToggle?"custom-column-80-dashboard-seo main-dashboard dashboard-customers":"custom-column-90-dashboard-seo main-dashboard dashboard-customers"}>
      <Breadcrumb>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="/dashboard-customers">Dashboard</a>
            </Breadcrumb.Item>
            
        </Breadcrumb>
        
            
        <div class="row common-mb-24">
            <div class="col-sm-5 pad-lzero">
            <div class="main-title">{proj}</div>
            </div>
            <div className="col-sm-7 add-new-btnw common-mb-24">
            <button class="outline-btn">Export</button>
            </div>
        </div>
        <div className="row common-mb-24">
            <div className="col-sm-5 pad-lzero">

            </div>
            <div className="col-sm-7 add-new-btnw common-mb-24 customers-right">
                <span className="heading-customers">
                    <span>Project Health</span>
                    <span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>
                </span>
                <span className="heading-customers">
                    <span>Audit Progress</span>
                    <span class="progress-bar-customer">
                        <CircularProgressbar value="50" text="50%" />
                    </span>
                </span>
            </div>
        </div>
        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            DA / PA Checker
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x','https://www.infidigit.com/', 'https://www.ezrankings.org/'],
                        ['Aug 1',28,31],
                        ['Aug 4',30,28],
                        ['Aug 8',31,20],
                        ['Aug 10',32,40],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,10,20,30,40]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-da">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Page Speed
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'https://www.infidigit.com/'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                        ["Aug 4", 32],
                        ["Aug 5", 20],
                        ["Aug 6", 57],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        minValue:0,
                        maxValue:40
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-page-speed">View Full report</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Rank Tracking
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x', 'Shoes'],
                        ["Aug 1", 1],
                        ["Aug 8", 3],
                        ["Aug 16", 5],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,25,50,75,100]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-rank-tracking">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Site Uptime Monitor
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'https://www.metroshoes.net/'],
                        ["Aug 1", 1],
                        ["Aug 2", 0],
                        ["Aug 3", 1],
                        ["Aug 4", 1],
                        ["Aug 5", 0],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "Pass/ Fail",
                        },
                        vAxis: {
                        title: "https://www.metroshoes.net/",
                        ticks:[0.00,0.25,0.50,0.75,1.00]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-site-uptime">View Full report</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            ROI Calculator
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x', 'ROI'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,10,20,30,40,50],
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-roi">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Google Trends
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'shoes'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                        ["Aug 4", 32],
                        ["Aug 5", 20],
                        ["Aug 6", 57],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "Keyword",
                        },
                        vAxis: {
                        title: "Shoes",
                        ticks:[0,20,40,60]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-google-trends">View Full report</a>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
  {/* <div class="content-wrapper">
    <div class="dashboard-wrapper dashboard-customers">
        
    </div>
  </div> */}

  
</section>
</>
);
}

export default DashboardCustomers;