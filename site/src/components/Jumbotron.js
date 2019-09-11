import React, { Component } from "react";
import SocialMediaLinks from "./SocialMediaLinks";

export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    timeout: false,
    icon: ""
  };

  render() {
    return (
      <div style={{ flex: 1, width: "auto" }}>
        <div
          className="jumbotron jumbotron-fluid jumbo"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "transparent"
          }}
        >
          <div>
            <div className="container" style={{ alignItems: "center" }}>
              <div className="row">
                <div className="col-sm">
                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignContent: "center"
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",

                        color: "#FEFF01"
                      }}
                    >
                      Christian Gracia
                    </h1>
                  </div>
                  <p
                    className="lead"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white"
                    }}
                  >
                    Full stack web developer <i class="fas fa-laptop-code"></i>
                    {"  "}
                    {"  "}
                    Providence, RI
                  </p>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      color: "#FEFF01",
                      textAlign: "center"
                    }}
                  >
                    React, React Native, C#, and more
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                      fontSize: 15
                    }}
                  >
                    Email{" "}
                    <span style={{ color: "#FEFF01" }}>
                      <i class="fas fa-envelope"></i>
                    </span>{" "}
                    <span
                      style={{
                        color: "#fff",
                        fontWeight: "bold"
                      }}
                    >
                      christianmgracia@gmail.com
                    </span>
                  </p>

                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontWeight: "bold"
                    }}
                  ></div>
                  <div style={{ padding: 5 }}>
                    {" "}
                    <SocialMediaLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
