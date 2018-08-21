<template class="applyPage">
  <page-background>
    <nova-hero :header="Strings.get('hero.header', 'apply')" :subheader="Strings.get('hero.subheader', 'apply')"
      page="apply" />

    <b-row class="justify-content-center apply-dates">
      <b-col sm="12" md="5" md-offset="1">
        <h1>{{ Strings.get('info-session.header', 'apply') }}</h1>
        <h3>{{ Strings.get('info-session.subheader', 'apply') }}</h3>
        <div class="apply-description">
          {{ Strings.get('info-session.description', 'apply') }}
        </div>
      </b-col>
      <b-col sm="12" md="5" md-offset="1">
        <h2>{{ Strings.get('info-sessions.1.time', 'apply') }}</h2>
        <h3>{{ `${Strings.get('info-sessions.1.location', 'apply')} • ` }}
          <a class="apply-link" :href="Strings.get('info-sessions.1.link.url', 'apply')">
            {{Strings.get('info-sessions.1.link.text', 'apply')}}
          </a>
        </h3>
        <h2>{{ Strings.get('info-sessions.2.time', 'apply') }}</h2>
        <h3>{{ `${Strings.get('info-sessions.2.location', 'apply')} • ` }}
          <a class="apply-link" :href="Strings.get('info-sessions.2.link.url', 'apply')">
            {{Strings.get('info-sessions.2.link.text', 'apply')}}
          </a>
        </h3>
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
          <h2 class="apply-header" v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${section}.header`, 'apply')">
            {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.header`, 'apply')}}
          </h2>

          <div class="apply-list" v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${section}.content.lines`, 'apply')">
            <div class="apply-list-item" v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${section}.content.lines`, 'apply')"
              :key="line">
              {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content.lines.${line}`,
              'apply')}}
            </div>
          </div>
          <div class="apply-description" v-else>
            {{Strings.get(`application-info.${roleId}.${child}.sections.${section}.content`,
            'apply')}}
          </div>
        </div>
        <b-row v-else>

          <b-col sm v-for="col of ['left', 'right']" :key="col">
            <h2 class="apply-header" >{{Strings.get(`application-info.${roleId}.${child}.sections.${col}.header`,
              'apply')}}
            </h2>

            <div class="apply-list" v-if="Strings.exists(`application-info.${roleId}.${child}.sections.${col}.content.lines`, 'apply')">
              <div class="apply-list-item" v-for="line of Strings.childrenOf(`application-info.${roleId}.${child}.sections.${col}.content.lines`, 'apply')"
                :key="line">
                {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content.lines.${line}`,
                'apply')}}
              </div>
            </div>

            <div class="apply-description" v-else>
              {{Strings.get(`application-info.${roleId}.${child}.sections.${col}.content`, 'apply')}}
            </div>
          </b-col>
        </b-row>

        <b-row class="justify-content-center" v-if="Strings.exists(`application-info.${roleId}.${child}.call-to-action-button.content`, 'apply')">
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
.apply-link {
  color: #fff;
}

.apply-description {
  margin: 0.25rem 0 1.5rem;
}

.apply-list {
  margin-bottom: 1rem;
}

.apply-header {
  margin-bottom: 0.25rem;
}
.apply-list-item {
  margin-bottom: 0.1rem;
}

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
  h3,
  p {
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

          h2,
          p {
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
