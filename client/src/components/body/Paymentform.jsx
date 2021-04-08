import React ,{Component} from 'react';

const i = document.getElementById('button');
const button2 = document.getElementById('button2');
const PaymentForm = () =>{
     


  function onClick1() {
    var deliv = document.getElementById('newpost');
    if (deliv.style.display !== 'none') {
      deliv.style.display = 'none';
    }
    else {
      deliv.style.display = 'block';
    }
};
function onClick2() {
    var deliv2 = document.getElementById('newpost');
    if (deliv2.style.display === 'none') {
      deliv2.style.display = 'block';
    }
    else {
		
      deliv2.style.display = 'none';
    }
};


      return ( 
       
      <>

        <link rel="stylesheet" href="assets/css/paymentform.css" />
        <div className="wrapper">
          <div className="inner">
            <div className="image-holder">
              <img src="assets/img/login/ic12.jpg" alt="" /><br /><br /><br /><br />
              <img src="assets/img/login/pic2.jpg" alt="" /><br /><br /><br /><br />
              <img src="assets/img/login/pic9.jpg" alt="" />
            </div>
            <form action>
              <h3>Select Payment Method</h3>
              <div className="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
                <label className="container">
                  <input type="radio" name="options" id='button' onClick={() => onClick1()} />
                  <span className="checkmark" />
                  <span className="label"> Pay via Cash</span>
                </label><br /><br />
                <label className="container">
                  <input type="radio" name="options"   defaultChecked id='button2' onClick={() => onClick2()}/>
                  <span className="checkmark" />
                  <span className="label">Pay via Credit Card</span>
                </label><br /><br /> 
               <div id="newpost">
               <div className="form-holder active">
                  <input type="text" name="Name" placeholder="Card Holder's Name" className="form-control" />
                </div>
                <div className="form-holder">
                  <input type="text" name="CardNumber" placeholder="Card Number" className="form-control" />
                </div>
                <div className="form-holder">
                  <input type="password" name="CVV" placeholder="Card CVV" className="form-control" style={{fontSize: '15px'}} />
                </div>
                <div class="form-holder">
						<input type="date" name="date" placeholder="MM/DD/YY" class="form-control" style={{fontSize: "15px;"}}/>
					</div>
               </div>
                <div className="form-login">
                  <button>Make Payment</button>
                </div>
              </div></form>
          </div>
        </div>
      </>
      );
    }

  export default PaymentForm;