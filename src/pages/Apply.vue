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
        <b-row class="mobile-picker-container text-center">
          <b-col>
            I want to be a
            <b-form-select @change="handleMobileDropdown" id="mobile-apply-dropdown" :options="mobileDropdownOpts" v-model="mobileDropdownDefault">
            </b-form-select>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center apply-row desktop-picker-container">
          <b-tabs pills card class="apply-pills" v-model="tabIndex">
            <b-tab title="Business Analyst" active>
              <h2>What We're Looking For</h2>
              We're looking for people who can advertise, get sponsorships, and be savvy on Excel
              <h2>What You'll Do</h2>
              You'll help us design cool tech initiatives
            </b-tab>
            <b-tab title="Product Designer">
              <h2>What We're Looking For</h2>
              We're looking for people who can help us design cool tech initiatives
              <h2>What You'll Do</h2>
              You'll help us design cool tech initiatives
            </b-tab>
            <b-tab title="Product Management">
              <h2>What We're Looking For</h2>
              We're looking for people who can manage our amazing design and tech initiatives
              <h2>What You'll Do</h2>
              You'll help us design cool tech initiatives
            </b-tab>
            <b-tab title="Software Developer">
              <h2>What We're Looking For</h2>
              We're looking for people who can code our amazing design and tech initiatives
              <h2>What You'll Do</h2>
              You'll help us design cool tech initiatives
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

const valTabMap = {
  ba: 0,
  pd: 1,
  pm: 2,
  sd: 3
};

export default {
  data() {
    return {
      email: '',
      mobileDropdownDefault: 'ba',
      mobileDropdownOpts: [
        { value: 'ba', text: 'business analyst' },
        { value: 'pd', text: 'product designer' },
        { value: 'pm', text: 'product manager' },
        { value: 'sd', text: 'software developer' },
      ],
      msgContent: 'banana',
      msgShow: false,
      msgVariant: 'success',
      tabIndex: 0
    };
  },
  computed: {

  },
  methods: {
    handleMobileDropdown(val) {
      this.tabIndex = valTabMap[val];
    },
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
  .mobile-picker-container {
    display: none;
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

    .desktop-picker-container {
      .apply-pills {
        .card-header {
          display: none;
        }
      }
    }

    .mobile-picker-container {
      display: flex;
      font-weight: bold;

      #mobile-apply-dropdown {
        background: transparent;
        border: 0;
        box-shadow: none;
        display: inline;
        font-weight: bold;
        padding: 0;
        text-decoration: underline;
        width: auto;
      }
    }
  }
</style>
