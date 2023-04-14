<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <PageHeader title="Landing" />
        <v-row class="text-left">
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title tag="h2">Yearly Sales Summary</v-card-title>
              <v-card-subtitle>Data samples</v-card-subtitle>
              <v-card-text class="pl-0">
                <v-row no-gutters>
                  <v-col>
                    <client-only>
                      <ApexCharts
                        :options="options"
                        :series="series"
                        :height="260"
                        :width="300"
                        chart-id="lineChart"
                      />
                    </client-only>
                  </v-col>
                  <v-col>
                    <h3>Apex Charts</h3>
                    <p>
                      Yearly summary, organically grow the holistic world view
                      of disruptive innovation via workplace diversity and
                      empowerment.
                    </p>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution.
                    </p>
                    <p>
                      User generated content in real-time will have multiple
                      touchpoints for offshoring
                    </p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" light>
            <v-card light>
              <v-card-title tag="h2">Card Half</v-card-title>
              <v-card-subtitle>Data examples</v-card-subtitle>
              <v-card-text>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail.
                </p>
                <p>
                  Keeping your eye on the ball while performing a deep dive on
                  the start-up mentality to derive convergence on cross-platform
                  integration. Collaboratively administrate empowered markets
                  via plug-and-play networks.
                </p>
                <p>
                  Dynamically procrastinate B2C users after installed base
                  benefits. Dramatically visualize customer directed convergence
                  without revolutionary ROI.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1>What are cookies?</h1>
        <p>
          This Cookie Policy explains what cookies are and how we use them, the
          types of cookies we use i.e, the information we collect using cookies
          and how that information is used, and how to manage the cookie
          settings. Cookies are small text files that are used to store small
          pieces of information. They are stored on your device when the website
          is loaded on your browser. These cookies help us make the website
          function properly, make it more secure, provide better user
          experience, and understand how the website performs and to analyze
          what works and where it needs improvement.
        </p>
        <h1>How do we use cookies?</h1>
        <p>
          As most of the online services, our website uses first-party and
          third-party cookies for several purposes. First-party cookies are
          mostly necessary for the website to function the right way, and they
          do not collect any of your personally identifiable data. The
          third-party cookies used on our website are mainly for understanding
          how the website performs, how you interact with our website, keeping
          our services secure, providing advertisements that are relevant to
          you, and all in all providing you with a better and improved user
          experience and help speed up your future interactions with our
          website.
        </p>
        <h1>Manage cookie preferences</h1>
        <p>
          You can change your cookie preferences any time by clicking the above
          button. This will let you revisit the cookie consent banner and change
          your preferences or withdraw your consent right away. In addition to
          this, different browsers provide different methods to block and delete
          cookies used by websites.
        </p>
        <p>
          You can change the settings of your browser to block/delete the
          cookies. Listed below are the links to the support documents on how to
          manage and delete cookies from the major web browsers.
        </p>
        Chrome:
        <a href="https://support.google.com/accounts/answer/32050"
          >https://support.google.com/accounts/answer/32050</a
        >
        <br />
        Safari:
        <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
          >https://support.apple.com/en-in/guide/safari/sfri11471/mac</a
        >
        <br />
        Firefox:
        <a
          href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
          >https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US</a
        >
        <br />
        Internet Explorer:
        <a
          href="
        https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
        >
          https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc</a
        >
        <br /><br />
        <p>
          If you are using any other web browser, please visit your browser’s
          official support documents.
        </p>
      </v-col></v-row
    >
    <v-row
      ><v-col>
        <v-alert
          class="py-5"
          border="top"
          colored-border
          type="info"
          elevation="2"
          dismissible
          dense
        >
          <v-row align="center">
            <v-col class="grow">
              <h3>We value your privacy</h3>
              <div class="font-weight-thin">
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By
                clicking "Accept All", you consent to our use of cookies.
              </div>
              <a href="#">Read More</a>
            </v-col>
            <v-col class="shrink">
              <v-btn color="info">Accept All</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col></v-row
    >
  </v-container>
</template>

<script>
import PageHeader from '@/components/Header/PageHeader.vue'

export default {
  name: 'LandingPage',
  components: {
    PageHeader
  },
  data() {
    return {
      options: {
        chart: {
          toolbar: { show: false },
          id: 'vuechart-example',
          type: 'bar'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        tooltip: {
          theme: 'light',
          fillSeriesColor: false
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81]
        }
      ]
    }
  }
}
</script>
