<template>
  <v-row>
    <v-col class="text-left">
      <h1 class="title-page">Paragraph Page</h1>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            molestiae eum sapiente maxime dolorum, necessitatibus sed
            consequuntur labore a at, quia voluptatum velit ipsa atque esse, cum
            hic. Libero nihil quasi saepe officia.
          </p>
        </div>
        <div class="col-lg-6">
          <h4>Blockquote</h4>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            molestiae eum sapiente maxime dolorum, necessitatibus sed
            consequuntur labore a at, quia voluptatum velit ipsa atque esse, cum
            hic. Libero nihil quasi saepe officia.
          </blockquote>
        </div>
      </div>
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
  </v-row>
</template>

<script>
export default {
  name: 'ParagraphPage'
}
</script>
