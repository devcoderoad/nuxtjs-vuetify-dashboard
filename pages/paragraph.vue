<template>
  <v-row>
    <v-col class="text-left">
      <v-container fluid>
        <PageHeader title="Paragraph Page" />
        <v-row>
          <v-col>
            <div id="sub-header" class="row">
              <div class="col-lg-3">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
              </div>
              <div class="col-lg-3">
                <h1 class="font-lead-base">Heading 1</h1>
                <h2 class="font-lead-base">Heading 2</h2>
                <h3 class="font-lead-base">Heading 3</h3>
                <h4 class="font-lead-base">Heading 4</h4>
                <h5 class="font-lead-base">Heading 5</h5>
              </div>
              <div class="col-lg-3">
                <h1 class="font-head-base">Heading 1</h1>
                <h2 class="font-head-base">Heading 2</h2>
                <h3 class="font-head-base">Heading 3</h3>
                <h4 class="font-head-base">Heading 4</h4>
                <h5 class="font-head-base">Heading 5</h5>
              </div>
            </div>
            <div id="sub-lead" class="row">
              <div class="col-lg-6">
                <h4>Paragraph Lead</h4>
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </div>
              <div class="col-lg-6">
                <h4>Blockquote</h4>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </blockquote>
              </div>
            </div>
            <div id="sub-content" class="row">
              <div class="col-lg-12">
                <h4>Paragraph Content</h4>
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
                <h4>Paragraph Default</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </div>
            </div>
            <div id="sub-section" class="row">
              <div class="col-lg-12">
                <h4>Section Content</h4>
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-col class="text-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

import PageHeader from '@/components/Header/PageHeader.vue'

export default {
  name: 'ParagraphPage',
  components: { PageHeader },
  computed: {
    ...mapGetters({ getIsDarkMode: 'core/getIsDarkMode' })
  }
}
</script>
