<template class="applyPage">
  <page-background>
    <page-hero>
      <b-row align-h="center" class="text-center no-gutters h-50">
        <b-col cols="auto" class="my-auto">
          <b-row align-h="center" class="no-gutters">
            <b-col cols="auto">
              <h2 class="text-header">Applications are currently closed.</h2>
              <p>Subscribe to our newsletter to stay updated on the application process.</p>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-form inline @submit="onSubscribe">
              <b-input-group>
                <label class="sr-only" for="newsletterEmailSubscribeInput">Email</label>
                <b-input required id="newsletterEmailSubscribeInput" v-model="email" type="email"
                  placeholder="Email" />
              </b-input-group>
              <b-button type="submit">Subscribe</b-button>
            </b-form>
          </b-row>
          <b-row align-h="center">
            <b-alert :show="msgShow" :variant="msgVariant" v-html="msgContent">
            </b-alert>
          </b-row>
        </b-col>
      </b-row>
    </page-hero>
    <b-container>
      <section>
        <h1 class="container-section-heading">Join Us</h1>
        <b-row class="justify-content-left">
          OBI-WAN: Hello, there! GENERAL GRIEVOUS: General Kenobi, you are a bold one. I find
          your behavior bewildering . . . Surely you realize you're doomed, (to droids)
          Kill him!
        </b-row>
      </section>
      <hr>
      <section>
        <b-row align-v="center">
          <b-col class="left-col-text" sm>
            <h1 class="container-section-heading">Apply</h1>
          </b-col>
          <b-col class="right-col-text" sm>
            due 11:59 PM on Friday, 9/8
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center apply-row">
          <b-tabs pills card class="apply-pills">
            <b-tab title="Product Design" active>
              <br>Treasure Planet
            </b-tab>
            <b-tab title="Software Development">
              <br>POT OF GREED ALLOWS ME TO DRAW TWO CARDS FROM MY DECK TO MY HAND
            </b-tab>
            <b-tab title="Product Management">
              <br>What could possibly go wrong?
            </b-tab>
            <b-tab title="Business">
              <br>Pet rock!
            </b-tab>
          </b-tabs>
        </b-row>
        <b-row class="justify-content-center">
          <b-button size="lg" variant="secondary" class="text-center">
            Apply
          </b-button>
        </b-row>
      </section>
      <section>
        <b-row align-v="center">
          <b-col sm class="left-col-text">
            <h1 class="container-section-heading">Information</h1>
          </b-col>
          <b-col sm class="right-col-text">
            on Tuesday and Thursday
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center apply-row">
          <b-col sm offset-md="2">
            <h3>Info Session 1</h3>
            Date: Tuesday, 09/03<br> Time: 5:30 PM<br> Location: Death Star 101<br>Link: not yet
          </b-col>
          <b-col sm>
            <h3>Info Session 2</h3>
            Date: Tuesday, 09/03<br> Time: 5:30 PM<br> Location: Death Star 101<br>Link: not yet
          </b-col>
        </b-row>
      </section>
      <section>
        <b-row align-v="center">
          <b-col sm class="left-col-text">
            <h1 class="container-section-heading">Next Steps</h1>
          </b-col>
          <b-col sm class="right-col-text">
            Saturday, 9/12 through Monday, 9/14
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center apply-row">
          <b-col md="8" sm="12">
            <h2>Application Review</h2>
            Jazz Fenton: Wow! Isn't this great? We just caught three ghosts tonight!
            Danny Fenton: No, actually, you've just caught one ghost, three times, all of them me!
            <h2>Interview</h2>
            Samantha "Sam" Manson: Hi. I'm Sam. I don't believe I caught your name. I suggest you shout
            it out loud, along with your motive.
            Technus: I am technus! Master of all things mechanical! Wizard of integrated soicuittry! And destroyer of woilds!
          </b-col>
        </b-row>
      </section>
      <section>
        <b-row align-v="center">
          <b-col class="left-col-text" sm>
            <h1 class="container-section-heading">Decision</h1>
          </b-col>
          <b-col class="right-col-text" sm>
            by 11:59 PM on Tuesday, 9/14
          </b-col>
        </b-row>
      </section>
    </b-container>
  </page-background>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      msgContent: 'banana',
      msgShow: false,
      msgVariant: 'success'
    };
  },
  computed: {

  },
  methods: {
    onSubscribe(event) {
      event.preventDefault();
      axios.post('/email', {
        email: this.email
      }).then(response => {
        this.msgContent = response.data.msg;
        this.msgVariant = 'success';
        this.msgShow = true;
      }, error => {
        console.log(error);
        this.msgContent = 'There was an error subscribing you to the email list!';
        this.msgVariant = 'error';
        this.msgShow = true;
      });
    }
  }
};
</script>


<style lang="scss">
  .alert {
    display: block;
    margin-top: 1em;
  }
  .apply-pills {
    .card-header {
      background-color: transparent !important;
      border-bottom: none;

      li a, li a.active {
        background-color: transparent;
        color: black;
        font-weight: bold;
        text-decoration: none;

        &.active {
          border-bottom: 2px solid black;
          border-radius: 0px;
        }
      }
    }
  }
  .apply-row {
    border-left: 3px solid black;
  }
  button[type='submit'] {
    margin-left: 15px;
  }
  .col, div[class*='col-'] {
    &.left-col-text {
      text-align: left;
    }
    &.right-col-text {
      color: grey;
      font-weight: bold;
      text-align: right;
    }
  }
  #newsletterEmailSubscribeInput {
    border-radius: 5px;
  }
  .text-header {
    color: #fff;
    text-shadow: 0 0 20px rgba(0,0,0,.6);

    & + p {
      color: grey;
    }
  }

  @media screen and (max-width: 768px) {
    .col, div[class*='col-'] {
      &.right-col-text {
        color: grey;
        font-weight: bold;
        text-align: left;
      }
    }
  }
</style>
