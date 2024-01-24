<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white main_header">
      <q-toolbar class="text-primary toolbar">
        <img src="/img/logo.png" alt="logo RapiPlata" class="logo" />
        <q-space />
        <!-- Menu mobil -->

        <!-- Menu escritorio -->
        <div class="row q-gutter-x-lg" v-if="$q.screen.gt.sm">
          <q-btn flat no-caps color="black" rounded label="Inicio" />
          <q-btn
            flat
            no-caps
            color="black"
            rounded
            label="Pasos para tu credito"
          />
          <q-btn no-caps color="primary" rounded unelevated label="Ingreso" />
          <q-btn flat no-caps color="black" rounded>
            <q-icon name="phone" class="phone" />
            601125438
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>
<style lang="sass" scoped>
.logo
  height: 40px

.phone
  color: $primary
  margin-right: 8px
  background-color: #E5F1FD
  border-radius: 15px
  padding: 7px
  font-size: 18px

.toolbar
  height: 70px
</style>
