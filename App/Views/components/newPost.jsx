import React from "react";

function NewPost(props) {
  return (
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="modal fade" id="new-post-modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="ModalLabel">
                    Create New Post
                  </h5>{" "}
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    {" "}
                    <span aria-hidden="true">×</span>{" "}
                  </button>
                </div>
                <div class="modal-body">
                  <form method="POST" action="post/create" enctype="multipart/form-data" id="create-post-form">
                    <div class="form-group">
                      {/* <label for="recipient-name" class="col-form-label">
                        Photo:
                      </label> */}
                      <div className="mb-2">
                        <ul class="nav nav-tabs" role="tablist">
                          <li role="presentation" class="active mr-2">
                            <a href="#uploadTab" aria-controls="uploadTab" role="tab" data-toggle="tab">
                              Upload
                            </a>
                          </li>
                          <span className="mr-2">
                            |
                          </span>
                          <li role="presentation">
                            <a href="#linkTab" aria-controls="linkTab" role="tab" data-toggle="tab">
                              Link
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div role="tabpanel" class="tab-pane active" id="uploadTab">
                            <button className="btn btn-primary change-profile-pic__button" type="button">
                              <i className="fa fa-fw fa-camera" />
                              <span>Choose Media</span>
                              <input type="file" name="postImage" className="change-profile-pic__input" />
                            </button>
                          </div>
                          <div role="tabpanel" class="tab-pane" id="linkTab">
                            <input type="text" name="imageUrl" className="change-profile-pic-url__input" placeholder="Image Url"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="body-text" class="col-form-label">
                        Body:
                      </label>
                      <textarea class="form-control" id="body-text" spellcheck="false" name="body"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-success" form="create-post-form">
                    Publish
                  </button>
                  <button type="button" class="btn btn-light" data-dismiss="modal">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
