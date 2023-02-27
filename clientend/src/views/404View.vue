<template>
  <v-container class="not-found">
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-container fluid>
        <v-card class="text-center" height="200" style="margin-top:150px;">
          <v-card-title>
            Oops! Page not found.
          </v-card-title>
          <v-card-text>
            The requested page could not be found. Please check the URL and try again.
          </v-card-text>
          <v-card-actions>
            <router-link to="/" style="text-decoration:none;color:#673AB7">
              <v-btn style="color:#673AB7">Go to Home</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

