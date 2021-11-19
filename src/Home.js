import React from "react";

function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="#">
          <div class="logobg"></div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <button
            id="login_button"
            class="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Sign in with Metamask
          </button>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col col-md-6 offset-md-3" id="window">
            <h4>Swap</h4>
            <div id="form">
              <div class="swapbox">
                <div class="swapbox_select token_select" id="from_token_select">
                  <img class="token_image" id="from_token_img" />
                  <span id="from_token_text"></span>
                </div>
                <div class="swapbox_select">
                  <input
                    class="number form-control"
                    placeholder="amount"
                    id="from_amount"
                  />
                </div>
              </div>
              <div class="swapbox">
                <div class="swapbox_select token_select" id="to_token_select">
                  <img class="token_image" id="to_token_img" />
                  <span id="to_token_text"></span>
                </div>
                <div class="swapbox_select">
                  <input
                    class="number form-control"
                    placeholder="amount"
                    id="to_amount"
                  />
                </div>
              </div>
              <div>
                Estimated Gas: <span id="gas_estimate"></span>
              </div>
              <button
                disabled
                class="btn btn-large btn-primary btn-block"
                id="swap_button"
              >
                Swap
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="token_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Select token</h5>
              <button
                id="modal_close"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div id="token_list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
