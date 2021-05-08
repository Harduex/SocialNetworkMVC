import React from 'react';
import Layout from './layouts/layout';


const Profile = (props) => (
  <Layout title={props.title}>
    <div className="container">
      <div className="row flex-lg-nowrap">
        <div className="col-12 col-lg-auto mb-3" style={{ width: '200px' }}>
          <div className="card p-3">
            <div className="e-navlist e-navlist--active-bg">
              <ul className="nav">
                <li className="nav-item"><a className="nav-link px-2" href="/"><i className="fa fa-fw fa-home mr-1" /><span>Home</span></a></li>
                <li className="nav-item"><a className="nav-link px-2" href="/profile"><i className="fa fa-fw fa-th mr-1" /><span>Profile</span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col mb-3">
              <div className="card">
                <div className="card-body">
                  <form method="POST" enctype="multipart/form-data" className="e-profile form" noValidate >
                    <div className="row">
                      <div className="col-12 col-sm-auto mb-3">
                        <div className="mx-auto" style={{ width: '140px' }}>
                          <div className="d-flex justify-content-center align-items-center rounded" style={{ height: '140px', backgroundColor: 'rgb(233, 236, 239)' }}>
                            <img src={`data:image/jpeg;base64,${props?.user?.profilePic}`} alt="profile image" width="140" height="140" id="change-profile-image" />
                          </div>
                        </div>
                      </div>
                      <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{props?.user?.fullName}</h4>
                          <p className="mb-0">{props?.user?.email}</p>
                          <div className="text-muted"><small>email address</small></div>
                          <div className="mt-2">
                            <button className="btn btn-primary change-profile-pic__button" type="button">
                              <i className="fa fa-fw fa-camera" />
                              <span>Change Photo</span>
                              <input type="file" name="profilePic" accept="image/*" className="change-profile-pic__input" id="upload-profile-image-input"/>
                            </button>
                          </div>
                        </div>
                        <div className="text-center text-sm-right">
                          <span className="badge badge-secondary">{props?.user?.username}</span>
                          <div className="text-muted"><small>Joined {props?.user?.createdAt.toDateString()}</small></div>
                        </div>
                      </div>
                    </div>
                    <ul className="nav nav-tabs">
                      <li className="nav-item"><a href className="active nav-link">Settings</a></li>
                    </ul>
                    <div className="tab-content pt-3">
                      <div className="tab-pane active">
                        {/* <form method="POST" className="form" noValidate> */}
                        <div className="row">
                          <div className="col">
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label>Full Name</label>
                                  <input className="form-control" type="text" name="fullName" placeholder="Two Names" defaultValue={props?.user?.fullName} />
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <label>Username</label>
                                  <input className="form-control" type="text" name="username" placeholder="username" defaultValue={props?.user?.username} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label>Email</label>
                                  <input className="form-control" type="text" placeholder="user@example.com" defaultValue={props?.user?.email} name="email" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <div className="form-group">
                                  <label>Bio</label>
                                  <textarea className="form-control" rows={5} placeholder="My Bio" defaultValue={props?.user?.bio} name="bio" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="mb-2"><b>Change Password</b></div>
                            {props?.passwordError &&
                              <div className="mb-2 text-danger"><b>{props?.passwordError}</b></div>
                            }
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label>Current Password</label>
                                  <input className="form-control" type="password" placeholder="••••••" name="currentPassword" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label>New Password</label>
                                  <input className="form-control" type="password" placeholder="••••••" name="newPassword" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                  <input className="form-control" type="password" placeholder="••••••" name="newPasswordConfirm" /></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                            <div className="row">
                              <div className="col">
                                <div className="custom-controls-stacked px-2">
                                  <h6 className="card-title font-weight-bold">Support</h6>
                                  <p className="card-text">Get fast, free help from our friendly assistants.</p>
                                  <a href="/contact" type="button" className="btn btn-primary">Contact Us</a>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="row">
                          <div className="col d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit">Save Changes</button>
                          </div>
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="px-xl-3">
                    <a href="/auth/logout" className="btn btn-block btn-secondary">
                      <i className="fa fa-sign-out" />
                      <span>Logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)




export default Profile;
