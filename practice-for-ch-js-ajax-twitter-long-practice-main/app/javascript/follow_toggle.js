import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton
    toggleButton.addEventListener("click",(e)=>this.handleClick(e));

  }

  // bindEvents() {
  //   const followButton = document.getElementsByClassName('.follow-toggle')[0];

  //   followButton.addEventListener("click", (e) => this.handleClick(e));
  // }
 
  

  async handleClick(event) {
    // Your code here
    event.preventDefault()
    console.log(this.followState)
    if (this.followState === 'followed') {
      this.unfollow()
    } else {
      this.follow()
    }
    
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}