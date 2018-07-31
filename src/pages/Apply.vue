<template class="applyPage">
  <page-background>
    <!-- <page-hero>
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
    </page-hero> -->
    <div class="apply-hero">
      <visual :video="Strings.get('pages.apply.hero.video', 'assets')" :poster="Strings.get('pages.apply.hero.lazy', 'assets')"
        background="cover" :fallback="Strings.get('pages.apply.hero.image', 'assets')"
        class="apply-hero" align="top left" autoplay :loop="true" :muted="true"
        preload=auto :fill="true" />
    </div>
    <b-container>
      <page-section>
        <b-row class="justify-content-center apply-top">
          <b-col sm="12" md="10">
            <h2>Join Us</h2>
            <p>
              We are Cornell Design & Tech Initiative. But indivdually, we are a talented, diverse group of students 
              from different colleges and countries striving to make a difference in our community. And that is really cool.
            </p>
          </b-col>
        </b-row>
      </page-section>
    </b-container>
    <b-row class="justify-content-center apply-dates">
      <b-col sm="12" md="5" md-offset="1">
        <h1>Info Sessions</h1>
        <h3>Fall 2018</h3>
        <p>
          We encourage all interested applicants to attend an info session to find 
          out more about what we do and talk to us in person. 
          We hope to see you there!
        </p>
      </b-col>
      <b-col sm="12" md="5" md-offset="1">
        <h2>Tuesday, 9/10 • 5:30 PM</h2>
        <h3>Upson Hall 216 • Facebook Event</h3>
        <h2>Thursday, 9/12 • 5:30 PM</h2>
        <h3>Goldwin Smith Hall 132 • Facebook Event</h3>
      </b-col>
    </b-row>
    <b-container>

      <role-selector v-model="roleId" dropdownText="I want to be..." :bold="true" :showAll="false"
      />

      <timeline-section v-for="child of Strings.childrenOf(`application-info.${roleId}`, `apply`)"
        :key="child" :header="Strings.get(`application-info.${roleId}.${child}.header`, `apply`)"
        :rightHeader="Strings.get(`application-info.${roleId}.${child}.right-header`, `apply`)">
        <div v-if="Strings.exists(`application-info.${roleId}.${child}.sections.1`, 'apply')"
          v-for="section of Strings.childrenOf(`application-info.${roleId}.${child}.sections`, 'apply')"
          :key="section">
          <h2 v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${section}.header`, 'apply')">
            {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.header`, 'apply')}}
          </h2>

          <div v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${section}.content.lines`, 'apply')">
            <p v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${section}.content.lines`, 'apply')" :key="line">
              {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content.lines.${line}`, 'apply')}}
            </p>
          </div>
          <p v-else>
            {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content`, 'apply')}}
          </p>
        </div>
        <b-row v-else>

          <b-col sm v-for="col of ['left', 'right']" :key="col">
            <h2>{{Strings.get(`application-info.${roleId}.${child}.sections.${col}.header`, 'apply')}}</h2>

            <p v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${col}.content.lines`, 'apply')" 
              v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${col}.content.lines`, 'apply')" 
              :key="line">
              {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content.lines.${line}`, 'apply')}}
            </p>

            <p v-else>
              {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content`, 'apply')}}
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center" v-if="Strings.exists(`application-info.${roleId}.${child}.sections.call-to-action-button.content`, 'apply')">
          <b-col cols="auto">
            <b-button size="lg" variant="secondary" class="text-center">
              {{Strings.get(`application-info.${roleId}.${child}.sections.call-to-action-button.content`, 'apply')}}
            </b-button>
          </b-col>
        </b-row>
      </timeline-section>
    </b-container>
  </page-background>
</template>

<script>
import axios from 'axios';
import TimelineSection from '@/components/TimelineSection';
import RoleSelector from '@/components/RoleSelector';

export default {
  components: {
    TimelineSection,
    RoleSelector
  },
  data() {
    return {
      email: '',
      msgContent: 'banana',
      msgShow: false,
      msgVariant: 'success',
      tabIndex: 0,
      roleId: ''
    };
  },
  computed: {},
  methods: {
    onSubscribe(event) {
      event.preventDefault();
      axios
        .post('/email', {
          email: this.email
        })
        .then(
          response => {
            this.msgContent = response.data.msg;
            this.msgVariant = 'success';
            this.msgShow = true;
          },
          error => {
            console.log(error);
            this.msgContent =
              'There was an error subscribing you to the email list!';
            this.msgVariant = 'error';
            this.msgShow = true;
          }
        );
    }
  }
};
</script>


<style lang="scss">
.apply-hero {
  height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.apply-top {
  font-size: 48px;
  text-align: center;

  h2 {
    margin-bottom: 43px;
  }

  p {
    font-size: 24px;
    letter-spacing: 0.4px;
  }
}
.row.apply-dates {
  background-color: #ff324a;
  color: white;
  margin: 4vw 0;
  padding: 4vw;

  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  h3, p {
    font-size: 20px;
  }
}
.alert {
  display: block;
  margin-top: 1em;
}
.apply-pills {
  width: 100%;

  .card-header {
    background-color: transparent !important;
    border-bottom: none;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    li a,
    li a.active {
      background-color: transparent;
      color: black;
      font-weight: 600;
      line-height: 1.06;
      letter-spacing: 0.3px;
      text-decoration: none;

      &.active {
        border-bottom: 2px solid black;
        border-radius: 0px;
      }
    }

    button.apply-button {
      color: #ffffff;
      font-size: 32px;
      font-weight: 500;
      height: 38px;
      padding: 12px 39px;
      letter-spacing: 0.2px;
      text-align: left;
      width: 81px;
    }

    .tab-content {
      .card-body {
        .tab-roleSpecific-content {
          padding-left: 120px;
          border-left: 5px solid black;

          h2, p {
            margin: 0;
          }
          h2 {
            font-size: 22px;
          }
          p {
            font-size: 18px;
          }
          h2 + p {
            margin-top: 22px;
          }

          p + h2 {
            margin-top: 40px;
          }

          & + .row {
            margin-top: 52px;
          }

          @media screen and (max-width: 768px) {
            padding-left: 5px;
          }
        }
      }
    }
  }
  button.apply-button {
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
    height: 38px;
    padding: 12px 39px;
    letter-spacing: 0.2px;
    text-align: left;
    width: 81px;
  }
}

button[type='submit'] {
  margin-left: 15px;
}
.col,
div[class*='col-'] {
  &.left-col-text {
    text-align: left;
  }
  &.right-col-text {
    color: grey;
    font-weight: bold;
    text-align: right;
  }
}
.container-section-heading {
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
}

#newsletterEmailSubscribeInput {
  border-radius: 5px;
}
.text-header {
  color: #fff;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

  & + p {
    color: grey;
  }
}

@media screen and (max-width: 768px) {
  .col,
  div[class*='col-'] {
    &.right-col-text {
      color: grey;
      font-weight: bold;
      text-align: left;
    }
  }
}
</style>
