import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import SearchDate from "./SearchDate";
import MemberInfo from "./MemberInfo";
import DataInfo from "./DataInfo";
import SearchMemberId from "./SearchMemberId";

class MemberDetailArticle extends Component {
  state = {
      mode: "search",
      mode1:"",
    };
  
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div>
            <SearchMemberId
              onSubmit={function() {
                this.setState({ mode: "dateSearch" });
              }.bind(this)}
            />
          </div>
          <div>
            {this.state.mode === "dateSearch" && (
              <SearchDate
                onSubmit={function(device, start, end) {
                  this.setState({ mode1: "all" });
                }.bind(this)}
              />
            )}
          </div>
        </Grid>
        <div>
          {this.state.mode === "dateSearch" && <MemberInfo />}
        </div>
        <div>{this.state.mode1 === "all" && <DataInfo />}</div>
      </Grid>
    );
  }
}

export default MemberDetailArticle;
