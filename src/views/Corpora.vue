<template>
  <div>
    <h1>Corpora NLP Items</h1>
    <div class="filters">
      
      <label>
         Search Your Item
      <input v-model="searchQuery" type="text" placeholder="Search items" />
      </label>
      <br>
      <label>
        Filter by tag:
        <select v-model="selectedTag" @change="filterItems">
          <option value="all">All</option>
          <option v-for="tag in tags" :value="tag">{{ tag }}</option>
        </select>
      </label>
      <br>
    </div>
    <div class="items-section">
      <div class="item" v-for="(item, index) in itemsToDisplay" :key="item.name" >
        <h3 class="item-name">{{ item.name }}</h3>
        <p>{{ item.tags.join(', ') }}</p>
        <a class="linkToRef" :href="item.url" target="_blank">Link to source</a>
        <br>
        <br>
      <div>
          
          <transition :duration="{ enter: 800, leave: 100 }" name="fade" mode="out-in" >
            <div class="expandable" v-if="item.expanded">
              {{ item.description }}
              <br>
              <br>
            </div>
          </transition>
          <button class="expand-button" @click="toggleExpanded(item.name)">{{item.buttonText}}</button>
        </div>
      </div>

      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      expanded: false,
      items: [
      ],
      tags: ['Structured Corpora', 'Annotated Datasets', 'Corpora Sources'],
      selectedTag: 'all'
    }
  },
  computed: {
    itemsToDisplay() {
      let withButtons = this.items.map((item) => {
        return {
          ...item,
          buttonText: item.expanded ? 'Collapse' : 'Expand',
        };
      });
      withButtons = withButtons.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      if (this.selectedTag === 'all') {
        return withButtons
      }
      return withButtons.filter(item => item.tags.includes(this.selectedTag))
    },

  },
  beforeMount(){
    let sites = require("@/assets/Corpora.json").map(url => ( {...url, expanded: false}))
    this.items = sites;
 },
  methods: {
    filterItems() {
      // The itemsToDisplay computed property will update automatically based on the selectedTag value
    },
    toggleExpanded(name) {
      const itemToFind = this.items.find(dictionary => dictionary.name === name)
      itemToFind.expanded = !itemToFind.expanded
    }
  }
}
</script>

<style>
  /* Add some style to make the page look better */
  
  body {
    font-family: "Muli", sans-serif;
    background-color: #F7F7F7;

  }
  .items-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;

  }
  .item {
    width: calc(33% - 20px);
    margin: 10px;
    text-align: center;
    position: relative;
	  margin-bottom: 10px; 
    padding-left: 10px; 
    padding-right: 10px; 
	  padding-bottom: 20px;
    /* background: #f3f3f3; */
    background: #fffee6;
    box-shadow: 0 4px 8px 0 rgba(0, 1, 1, 0.2);

  }


  .item p {
    font-size: 14px;
    margin: 0;
    color: gray;
  }
  .expandable-item {
  transition: height 10s ease;
  height: 0;
  overflow: hidden;
  height: 200px;
  /* margin-bottom: 10px; */
}
.item-name{
  font-size: 20px;
    margin: 10px 0;
  display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: 'Trebuchet MS', Sans-Serif
;


}
.expand-button{
  display: inline-block;
  /* padding: 0.5em 1.7em;
  margin: 0 0.1em 0.1em 0; */
  border: 0.16em solid rgba(255, 255, 255, 0);
  background-color: rgb(43, 143, 75);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  position: absolute;
  bottom: 10px;
  left: 49%; /* Position the left edge of the button at the center of the container */
  transform: translateX(-50%); /* Shift the button to the left by half of its width to center it horizontally */
}
.expand-button:hover {
  border-color: rgb(153, 0, 0);
}
.linkToRef{
  padding-bottom: 20px;
}
</style>
