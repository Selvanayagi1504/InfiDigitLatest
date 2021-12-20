import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col, Checkbox } from "antd";
import {Dropdown} from 'react-bootstrap'
import Item from "antd/lib/list/Item";

import { SideNavBarCustom, SideNavBarCustomClosed } from '.';



function ModuleExpandDesignation() {
    const [sidenavToggle, setSidenavToggle] = useState(true);
    const [sidenav,setsidenav] = useState(false);
    const [option, setoption] = useState('Director');
    const [data,setData]= useState(
    [
        {
            designation: "Director",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "HR",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "Sales",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "SEO",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: true
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        }
        
    ])
    
    useEffect(()=>{
        
    },[])
    
    function checkbox(){
        console.log(data)
    }
    

    return (
        <>
            <section class="outer-wrapper ModuleExpandDesignation">
            <div class="top-nav-bar">
                <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
                <div class="nav-bar-center">&nbsp;</div>
                <div class="nav-bar-right">
                    <ul class="list-unstyled nav-right-menu">
                        <li>
                        <Dropdown id="notification-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                        <i class="fa fa-bell"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">
                                <div className="notification-item">
                                    <h4>Notification 1!!</h4>
                                    <p>21 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="" style={{backgroundColor:"#85C1E9"}}>
                                <div className="notification-item" >
                                    <h4>Notification 2!!</h4>
                                    <p>8 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                        </li>

                        <li class="dropdown">
                            <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                                <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                                <span class="profile-name">M.Subash</span>
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

            
            <div class="content-wrapper">
                <div class="dashboard-wrapper">
                    <div class="sidebar-nav-bar">
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
                    
                            <div className="row ">
                                <div className="col-md-3 my-3 my-md-0"><h2>Choose Designation</h2></div>
                                <div className="col-md-6 "></div>
                                <div className="col-md-2 my-3 my-md-0">
                                    <select id="choose" onChange={()=>{setoption(document.getElementById('choose').value)}}>
                                        <option value="Director">Director</option>
                                        <option value="HR">HR</option>
                                        <option value="Sales">Sales</option>
                                        <option value="SEO">SEO</option>
                                    </select>
                                </div>
                                <div className="col-md-1 my-3 my-md-0"><button className="outline-btn" onClick={checkbox}>Save</button></div>
                            </div>
                            <div className="designation-box mt-5">
                                <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                                    <div className="col-2 ">
                                        <h4>Client</h4>
                                    </div>
                            {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.clientDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}}  style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                            }
                            
                            </div>
                            </div>
                            {/* <div className="designation-box">
                                <div className="row my-3 px-3 py-4 align-item-center justify-content-between">
                                    <div className="col-2 ">
                                        <h4>Client</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <label><input style={{ marginRight: "10px" }} type="checkbox" /> Add </label>
                                    </div>
                                    <div className="col-md-2">
                                        <label><input style={{ marginRight: "10px" }} type="checkbox" /> Update </label>
                                    </div>
                                    <div className="col-md-2">
                                        <label><input style={{ marginRight: "10px" }} type="checkbox" /> Activate/Deactivate </label>
                                    </div>
                                    <div className="col-md-2">
                                        <label><input style={{ marginRight: "10px" }} type="checkbox" /> View </label>
                                    </div>
                                </div>
                            </div> */}
                            
                            <div className="designation-box">

                                <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                                    <div className="col-md-2 ">
                                        <h4>Team Member</h4>
                                    </div>
                                    {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.teamMemberDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                            }
                                </div>
                            </div>
                            <div className="designation-box">

                                <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                                    <div className="col-md-2 ">
                                        <h4>Modules</h4>
                                    </div>
                                    {
                                        data.map(item=>{
                                            if(item.designation==option){
                                                return(
                                                    item.modulesDataFields.map(item=>{
                                                        return(
                                                        <div className="col-md-2">
                                                            <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                        </div>
                                                        )
                                                    })     
                                                )     
                                            } 
                                        }) 
                                    }
                                </div>
                            </div>
                            <div className="designation-box">

                                <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                                    <div className="col-md-2 ">
                                        <h4>Projects</h4>
                                    </div>
                                    {
                                        data.map(item=>{
                                            if(item.designation==option){
                                                return(
                                                    item.projectsDataFields.map(item=>{
                                                        return(
                                                        <div className="col-md-2">
                                                            <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                        </div>
                                                        )
                                                    })     
                                                )     
                                            } 
                                        }) 
                                    }
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="designation-box">

                                <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                                    <div className="col-md-2 ">
                                        <h4>Project Configurations</h4>
                                    </div>
                                    {
                                        data.map(item=>{
                                            if(item.designation==option){
                                                return(
                                                    item.projectConfigDataFields.map(item=>{
                                                        return(
                                                        <div className="col-md-2">
                                                            <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                        </div>
                                                        )
                                                    })     
                                                )     
                                            } 
                                        }) 
                            }
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>

                                </div>
                            </div>
                           
                        
                </div>
            </div>
        </section>
       
        </>
    );
}

export default ModuleExpandDesignation;