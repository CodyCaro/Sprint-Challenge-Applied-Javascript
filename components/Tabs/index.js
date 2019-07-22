// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = [];
// const topics = [];

const promise = axios.get(`https://lambda-times-backend.herokuapp.com/topics`);
promise
  .then(axiosData => {
    topics.push(axiosData.data.topics);
    axiosData.data.topics.forEach(topic => {
      new Tab(topic);
    });
  })
  .catch(err => {
    console.log("error: " + err);
  });

class Tab {
  constructor(topic) {
    this.topicProperty = topic;

    const topicElement = document.querySelector(".topics");
    topicElement.appendChild(this.createTab(this.topicProperty));
  }

  createTab(topic) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topic;

    return tab;
  }
}
