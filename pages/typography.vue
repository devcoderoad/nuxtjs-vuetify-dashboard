<template>
  <v-container fluid>
    <v-col class="text-center">
      <h1 class="title-page">Typography</h1>
      <v-row class="text-left">
        <v-col>
          <h3>Paragraph</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sit vitae dolor, blanditiis recusandae maxime, officiis
            necessitatibus, fugit voluptatibus ullam distinctio reiciendis vel
            earum porro inventore quisquam cumque beatae minus expedita neque
            suscipit.
          </p>
          <p class="grey--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sit vitae dolor, blanditiis recusandae maxime, officiis
            necessitatibus, fugit voluptatibus ullam distinctio reiciendis vel
            earum porro inventore quisquam cumque beatae minus expedita neque
            suscipit.
          </p>
          <hr />
          <blockquote class="blockquote">
            <h3 class="font-weight-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quasi similique!
            </h3>
            <footer>
              <cite>&dash; Lorem Ipsum</cite>
            </footer>
          </blockquote>
        </v-col>
        <v-col>
          <h3>Code</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
            <code> { "name": "Nuxtify" } </code>
            Aliquam ducimus similique voluptates odit eligendi nemo maiores
            autem quis sapiente, at nam. Sequi autem quis sapiente nemo.
          </p>
          <p>
            <code> export default { name: 'TypographyPage' } </code>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            nobis nisi deserunt unde, aperiam quisquam consequuntur eaque
            placeat optio perferendis deleniti atque fuga rem itaque, at labore
            reprehenderit sed! Modi eius aperiam nam!
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'TypographyPage'
}
</script>
