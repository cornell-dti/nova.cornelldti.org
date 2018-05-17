<template>
  <page-background>
    <page-hero>
      <b-row align-h="center" class="text-center no-gutters h-50">
        <b-col cols="auto" class="my-auto">
          <b-row align-h="center" class="no-gutters">
            <b-col cols="auto">
              <h2>Applications are currently closed.</h2>
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
        <h1 class="container-section-heading">Apply</h1>
        <b-row>
          <b-col>
          </b-col>
          <b-col>
            <!-- right-side text -->
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
        <b-row class="justify-content-md-center">
          <b-button size="lg" variant="secondary" class="text-center">
            Apply
          </b-button>
        </b-row>
      </section>
      <section>
        <h1 class="container-section-heading">Information</h1>
        <b-row class="justify-content-md-center apply-row">
          <b-col offset="2">
            <h3>Info Session 1</h3>
            Date: Tuesday, 09/03<br> Time: 5:30 PM<br> Location: Death Star 101<br>            Link: not yet
          </b-col>
          <b-col>
            <h3>Info Session 2</h3>
            Date: Tuesday, 09/03<br> Time: 5:30 PM<br> Location: Death Star 101<br>            Link: not yet
          </b-col>
        </b-row>
      </section>
      <section>
        <h1 class="container-section-heading">Interview</h1>
        <b-row class="justify-content-md-center apply-row">
          <b-col cols="8">
            Aren't you a little short to be a stormtrooper? What? Oh...the uniform. I'm Luke
            Skywalker. I'm here to rescue you. You're who? I'm here to rescue you.
            I've got your R2 unit. I'm here with Ben Kenobi. Ben Kenobi is here!
            Where is he? Come on!<br><br> Let me see your identification.
            You don't need to see his identification. We don't need to see his identification.
            These are not the droids your looking for. These are not the droids we're
            looking for. He can go about his business. You can go about your business.
            Move along. Move along. Move along.<br><br> How did I get into this mess?
            I really don't know how. We seem to be made to suffer. It's our lot in
            life. I've got to rest before I fall apart. My joints are almost frozen.
            What a desolate place this is. Where are you going? Well, I'm not going
            that way. It's much too rocky. This way is much easier. What makes you
            think there are settlements over there? Don't get technical with me.
            What mission? What are you talking about? I've had just about enough
            of you! Go that way! You'll be malfunctioning within a day, you nearsighted
            scrap pile! And don't let me catch you following me begging for help,
            because you won't get it. No more adventures. I'm not going that way.<br>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </page-background>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    onSubscribe(event) {
      event.preventDefault();
      axios.post("/email", {
        email: this.email
      }).then(response => {
        alert(response.data.msg);
      }, error => {
        console.err(error.data.msg);
      });
    }
  }
};
</script>


<style lang="scss" scoped>
#newsletterEmailSubscribeInput {
    border-radius: 5px;
}
.apply-pills {
  .card-header {
    background-color: transparent;
    border-bottom: none;

    li a {
      background-color: transparent;
      color: black;
      font-weight: bold;

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
</style>
