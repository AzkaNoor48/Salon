import React ,{Component} from 'react';
import ServicesCard from './ServicesCard';
import Servicesdata from './ServicesData';

const categ = [];
const Services = () =>{

    function onClick(c,i,categ) 
    {
        for (var j=0; j<categ.length; j++)
        {
          document.getElementById(j).style.display='none';
          document.getElementById(categ[j]).style.display='none';
        }
        if(document.getElementById(c).style.display==='none')
        {
          document.getElementById(i).style.display='block';
          document.getElementById(c).style.display='flex';
        }
    }
    function onAllClick(categ) {
        for (var i=0; i<categ.length; i++)
        {
          document.getElementById(i).style.display='block';
          document.getElementById(categ[i]).style.display='flex';
          
        }

        }
  return (
 
   <>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
   <link rel="stylesheet" type="text/css" href="assets/css/services.css" />
   <section id="package" className="packageList">
        <div className="container">
            <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
                <div className="col-md-8 text-center w-md-50 mx-auto mb-0">
                <h2 className="mb-md-2">Services</h2>
                <p className="lead text-muted">WenTo creative technology company providing key digital services for everyone.</p>
                </div>
            </div>
{/*removing redundant elements from array */}
        { Servicesdata.map((val) =>{
            if (categ.indexOf(val.category) === -1)
            {
                categ.push(val.category)
            }
            })
        }
{/*displaying categories */}
<div align="center">
<button className="navitem" onClick={() => onAllClick(categ)}>All</button>
        { categ.map((val,index) =>{
            return(
                <button className="navitem" onClick={() => onClick(val,index,categ)}>{val}</button>
                );
            })
        }
        
        </div>

        { categ.map((val1,index) => {
        return (
            <>
            <h2 id={index} style={{ display:"" }}>{val1}</h2><br/>
            <div id={val1} className="row" style={{ display:"" }}>
            { Servicesdata.map((val) => {
            if(val.category===val1)
            {
                return(
                    <ServicesCard
                    serviceName={val.serviceName}
                    price={val.price}
                    serviceDesc={val.serviceDesc}
                />
            );
            }
            })}
            </div>
            </>
        );
        })}
        
        </div>
    </section>
</>
  );
}

export default Services;
