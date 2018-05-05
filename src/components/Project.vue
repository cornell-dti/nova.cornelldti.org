<template>
  <b-container fluid>
    <div>

      <b-row>
        <b-col cols="2">
          <div class="h-100 project-content-border-left" />
        </b-col>
        <b-col>
          <b-row>
            <h3>{{ipsum(projectData.header1, 20)}}</h3>
            <p> {{ipsum(projectData.description1, 80)}}</p>

            <h3>{{ipsum(projectData.header2, 20)}}</h3>
            <p> {{ipsum(projectData.description2, 60)}}</p>

            <b-col sm="12" md="auto">
              <b-img :src="currentScreenshot" blank width="300" height="400" blank-color="#aaa" />
            </b-col>
            <b-col sm="12" md="auto">
              <!-- TODO ADD LOGIC -->
              <b-row>
                <b-button variant="link" class="filter-btn">{{projectData.feature1}}</b-button>
                <b-button variant="link" class="filter-btn">{{projectData.feature2}}</b-button>
                <b-button variant="link" class="filter-btn">{{projectData.feature3}}</b-button>
              </b-row>
              <p>{{currentFeatureDescription}}</p>
            </b-col>
          </b-row>

          <h1>Team</h1>
          <headshot-grid v-for="team of teams" :key="team.name" v-if="team.teamname === projectData.team" :members="team.members"
          />

          <b-row align-h="center">
            <b-col cols="auto">

              <b-row align-h="center">
                <b-col cols="auto">
                  <h3>Find us on</h3>
                </b-col>
              </b-row>

              <b-row align-h="center">
                <b-col>
                  <a v-if="typeof projectData.github !== 'undefined'" href="projectData.github" />
                </b-col>
                <b-col>
                  <a v-if="typeof projectData.medium !== 'undefined'" href="projectData.medium" />
                </b-col>
              </b-row>

              <b-row align-h="center">
                <b-col>
                  <store-badge store="playstore" :url="projectData.playstore" />
                </b-col>
                <b-col>
                  <store-badge store="appstore" :url="projectData.appstore" />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="2">
          <div class="h-100 project-content-border-right" />
        </b-col>
      </b-row>
      <b-modal ref="downloadModal" id="downloadModal">
        <b-container fluid>
          <b-row align-h="center">
            <b-col cols="auto">
              <p>Download on</p>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="auto">
              <b-row align-h="center" v-if="typeof projectData.playstore !== 'undefined'">
                <b-col cols="auto">
                  <store-badge store="playstore" :url="projectData.playstore" />
                </b-col>
              </b-row>
              <br />
              <b-row align-h="center" v-if="typeof projectData.appstore !== 'undefined'">
                <b-col cols="auto">
                  <store-badge store="appstore" :url="projectData.appstore" />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>
    </div>
  </b-container>
  </div>

</template>

<script>
import HeadshotGrid from "./HeadshotGrid";
import bus from "../bus";

export default {
  props: {
    project: {
      type: String,
      required: true
    },
    projects: Array,
    teams: Array
  },
  components: { HeadshotGrid },
  mounted() {
    const projectData = this.projectData;

    bus.$emit("update-hero", {
      type: "productDisplay",
      bg: "",
      header: projectData.title,
      subheader: projectData.description,
      img: projectData.logo
    });
  },
  data() {
    return {
      currentFeatureDescription: "",
      currentScreenshot: "",
      ipsumText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit sapien at nibh iaculis condimentum. Nam non laoreet lorem. Vivamus sed maximus risus. Etiam eu dolor a turpis finibus bibendum. Nullam aliquam quam in felis commodo, ut luctus metus commodo. Duis gravida nibh vitae fermentum feugiat. Aenean leo sem, tincidunt dignissim felis vel, gravida consectetur tellus. Phasellus ex nulla, convallis quis eleifend non, dignissim eu metus. Sed iaculis, augue at volutpat interdum, ligula ante dignissim quam, vel imperdiet neque mauris sit amet sem. Vivamus facilisis mauris volutpat, luctus mi lacinia, congue justo.
              Ut sit amet felis a justo rutrum dapibus. Nulla facilisis dolor ac consequat hendrerit. Donec tempor consequat neque sit amet rhoncus. Fusce molestie sollicitudin vestibulum. Aenean ac nibh at diam elementum venenatis id vestibulum dolor. In ante odio, tincidunt quis feugiat sit amet, iaculis vel tellus. Praesent quis dolor ut dui dapibus rutrum. Nam tempor sed libero nec semper. Etiam mauris ligula, porttitor a metus vehicula, pretium dictum tellus.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis fringilla diam, vitae accumsan dolor. In blandit sed massa a aliquet. In in efficitur magna. Donec nisl arcu, sagittis ac vehicula in, faucibus vitae eros. Ut aliquam non neque quis tempus. Mauris et mattis purus.
              Curabitur pretium blandit ullamcorper. Donec pretium ex ac libero feugiat consectetur eget vitae ex. Donec a pharetra turpis, ac posuere ipsum. Nam mattis, sapien nec mattis venenatis, dolor ex interdum felis, ac feugiat nulla magna non risus. Integer vel nulla vitae arcu sagittis scelerisque. Aliquam erat volutpat. Donec vitae imperdiet felis. Ut sagittis auctor quam in convallis. Donec ut turpis et enim imperdiet venenatis. Proin gravida, ipsum id cursus bibendum, sem velit congue tortor, id scelerisque risus lectus nec purus. Morbi sodales sapien nulla, eget gravida tortor tempus nec. In at nibh lorem. Etiam fringilla placerat lorem, id aliquam lacus luctus vitae. Suspendisse congue lorem sed pretium rhoncus. Nam elementum, diam ut imperdiet lacinia, lorem ligula ornare elit, in pulvinar mauris nisl et odio.`
    };
  },
  computed: {
    projectData() {
      return this.getProject(this.project);
    }
  },
  methods: {
    getProject(project) {
      let projectA = null;

      this.projects.forEach(projectData => {
        if (projectData.subUrl === project) {
          projectA = projectData;
        }
      });

      return projectA;
    },
    ipsum(text, amount = 50) {
      if (typeof text === "undefined" || text === null || text === "") {
        return (
          this.ipsumText.substr(
            0,
            Math.min(amount, this.ipsumText.length - 1)
          ) + "..."
        );
      }

      return text;
    }
  }
};
</script>


<style lang="scss" scoped>
.project-hero-logo {
  margin: 1vw;
}

.project-hero {
  height: 50vh;
  background-color: #aaa;
}

.project-hero-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40vw;
}

$border-color: #ddd;
$border-dash-length: 2rem;
$border-dash-width: 0.1rem;

.project-content-border-right {
  background-image: linear-gradient($border-color 50%, transparent 50%);
  background-position: left;
  background-repeat: repeat-y;
  background-size: $border-dash-width $border-dash-length;
}

.project-content-border-left {
  background-image: linear-gradient($border-color 50%, transparent 50%);
  background-position: right;
  background-repeat: repeat-y;
  background-size: $border-dash-width $border-dash-length;
}
</style>

<style lang="scss">
@import "../index.scss";

$radius: 20px;

#downloadModal {
  @include media-breakpoint-up(md) {
    max-width: 80vw;
  }

  max-width: 20vw;

  .modal-content {
    border: none !important;
    border-radius: ($radius + 5) !important;
  }

  .modal-header,
  .modal-footer {
    display: none;
  }
}
</style>
