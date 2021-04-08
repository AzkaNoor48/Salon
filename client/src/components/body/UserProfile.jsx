import React from 'react';        // UserProfile.jsx


function UserProfile ()
{
  return(
  <>

<link rel="stylesheet" type="text/css" href="assets/css/UserProfile.css" />

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>

<div className="container">
	<div className="view-account">
		<section className="module">
			<div className="module-inner">
				<div className="side-bar">
					<div className="user-info">
						<img className="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
						<ul className="meta list list-unstyled">
							<li className="name">AYEZA KHAN
                      </li>
						</ul>
					</div>
					<nav className="side-menu">
						<ul className="nav">
							<li className="active">
								<a href="#">
									<span className="fa fa-user" /> User Profile
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-cog" /> Settings
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-credit-card" /> Billing
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-envelope" /> Messages
								</a>
							</li>
							<li>
								<a href="user-drive.html">
									<span className="fa fa-th" /> Drive
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-clock-o" /> Reminders
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="content-panel">
					<h2 className="title">Profile</h2>
					<form className="form-horizontal">
						<fieldset className="fieldset">
							<h3 className="fieldset-title">Personal Info</h3>
							<div className="form-group avatar">
								<figure className="figure col-md-2 col-sm-3 col-xs-12">
									<img className="img-rounded img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
								</figure>
								<div className="form-inline col-md-10 col-sm-9 col-xs-12">
									<input type="file" className="file-uploader pull-left" />

									<button type="button">
										<i class="fa fa-fw fa-camera"></i>
										<span>Change Photo</span>
									</button>

								</div>
							</div>
							<div>

        <div className="form-group">
          <label className="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
          <div className="col-md-10 col-sm-9 col-xs-12">
            <input type="text" className="form-control" defaultValue="AYEZA" />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
          <div className="col-md-10 col-sm-9 col-xs-12">
            <input type="text" className="form-control" defaultValue="KHAN" />
          </div>
        </div>

      </div>
						</fieldset>
						<fieldset className="fieldset">

							<h3 className="fieldset-title">Contact Info</h3>
							<div className="form-group">
								<label className="col-md-2 col-sm-3 col-xs-12 control-label">Email</label>
                <div className="col-md-10 col-sm-9 col-xs-12">
								<input type="email" className="form-control" defaultValue="ayezakhan@gmail.com" />
                </div>
							</div>

							<div className="form-group">
          <label className="col-md-2 col-sm-3 col-xs-12 control-label">Phone Number</label>
          <div className="col-md-10 col-sm-9 col-xs-12">
            <input type="text" className="form-control" defaultValue="03**-*******" />
          </div>
        </div>

						</fieldset>

						<fieldset className="fieldset">
							<h3 className="fieldset-title">Change Password</h3>

								<div className="form-group">
									<label className="col-md-2 col-sm-3 col-xs-12 control-label">Current Password</label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
									<input className="form-control" type="password" placeholder="••••••" />
                  </div>
								</div>

								<div className="form-group">
									<label className="col-md-2 col-sm-3 col-xs-12 control-label">New Password</label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
									<input className="form-control" type="password" placeholder="••••••" />
                  </div>
								</div>

								<div className="form-group">
									<label className="col-md-2 col-sm-3 col-xs-12 control-label">Confirm 
										<span className="d-none d-xl-inline">Password</span>
									</label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
									<input className="form-control" type="password" placeholder="••••••" />
                  </div>
								</div>

						</fieldset>
						<hr />
						<div className="form-group">
							<div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
							    <button>Update Profile</button>
								{/* <input className="btn btn-primary" type="submit" defaultValue="Update Profile" /> */}
							</div>
						</div>
						
					</form>
				</div>
			</div>
		</section>
	</div>
</div>
  </>);
}
export default UserProfile;
