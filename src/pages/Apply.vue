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
          <b-col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </b-col>
        </b-row>
      </section>

      <role-selector v-model="roleId" dropdownText="I want to be..." :bold="true" :showAll="false"
      />

      <timeline-section v-for="child of Strings.childrenOf(`application-info.${roleId}`, `apply`)"
        :key="child" :header="Strings.get(`application-info.${roleId}.${child}.header`, `apply`)"
        :rightHeader="Strings.get(`application-info.${roleId}.${child}.right-header`, `apply`)">
        <div v-if="Strings.exists(`application-info.${roleId}.${child}.sections.1`, 'apply')"
          v-for="section of Strings.childrenOf(`application-info.${roleId}.${child}.sections`, 'apply')"
          :key="section">
          <h2>{{Strings.get(`application-info.${roleId}.${child}.sections.${section}.header`,
            'apply')}}
          </h2>

          <div v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${section}.content.lines`,
              'apply')">
            <p v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${section}.content.lines`,
              'apply')" :key="line">
              {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content.lines.${line}`,
              'apply')}}
            </p>
          </div>
          <p v-else>
            {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content`,
            'apply')}}
          </p>
        </div>
        <!--TODO explicitely check for left/right and that they exist... -->
        <b-row v-else>

          <b-col sm v-for="col of ['left', 'right']" :key="col">
            <h2>{{Strings.get(`application-info.${roleId}.${child}.sections.${col}.header`,
              'apply')}}
            </h2>

            <p v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${col}.content.lines`,
              'apply')" v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${col}.content.lines`,
              'apply')" :key="line">
              {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content.lines.${line}`,
              'apply')}}
            </p>

            <p v-else>
              {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content`, 'apply')}}
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-col cols="auto">
            <b-button size="lg" variant="secondary" class="text-center">
              {{Strings.get(`application-info.${roleId}.${child}.call-to-action-button.content`,
              'apply')}}
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
