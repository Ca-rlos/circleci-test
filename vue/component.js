module.exports = {
  buttonComponent: {
    data: function() {
      return {
        message: 'Hello CircleCI!',
        hide: false
      }
    },
    template: `
      <div>
        <button id="mainButton" class="glow-on-hover" v-on:click="hide = !hide">Click here to display the message!</button>
        <h1 id="mainMessage" v-if="hide">{{message}}</h1>
      </div>`
  }
};