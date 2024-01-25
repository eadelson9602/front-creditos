<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white main_header">
      <q-toolbar class="text-primary toolbar">
        <img src="/img/logo.png" alt="logo RapiPlata" class="logo" />
        <q-space />
        <!-- Menu mobil -->
        <q-btn color="primary" icon="menu" flat>
          <q-menu>
            <q-list style="min-width: 170px">
              <q-item clickable v-close-popup to="/">
                <q-item-section>Inicio</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Pasos para tu credito</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section> Ingreso </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section avatar style="padding-right: 0; min-width: 3px">
                  <q-icon name="phone" class="phone" />
                </q-item-section>
                <q-item-section> 601125438 </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <!-- Menu escritorio -->
        <div class="row q-gutter-x-lg" v-if="$q.screen.gt.sm">
          <q-btn flat no-caps color="black" rounded label="Inicio" to="/" />
          <q-btn
            flat
            no-caps
            color="black"
            rounded
            label="Pasos para tu credito"
            @click="scrollTo('steps')"
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

<script setup lang="ts">
import { scroll } from 'quasar';

const { setVerticalScrollPosition } = scroll;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollTo = (id: any) => {
  const el = document.getElementById(id);

  if (el) {
    scrollPage(el);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollPage = (el: any) => {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop,
    offset = rect.top + scrollTop - 50; // allow for toolbar height

  setVerticalScrollPosition(window, offset, 500);
};
</script>
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
