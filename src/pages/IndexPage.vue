<template>
  <q-page>
    <section class="row justify-evenly container">
      <div class="col-xs-12 col-md-6">
        <h1 class="text-primary text-h2 text-bold">
          ¡Obtén El Apoyo Financiero Que Necesitas Hoy Mismo!
        </h1>
        <h2 class="text-secondary text-h5">
          Bienvenido a RapiPlata, tu aliado financiero confiable. Estamos aquí
          para ayudarte a alcanzar tus metas financieras.
        </h2>
        <div class="row justify-center q-mt-xl">
          <q-btn
            color="primary"
            label="Solicitar cupo de crédito"
            no-caps
            rounded
            unelevated
          />
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <q-img
          src="/img/ahorro.png"
          alt="Alcancia"
          fit="contain"
          style="height: 450px"
        />
      </div>
    </section>

    <section class="section_simulator row container">
      <div class="col-xs-12 col-md-6 q-px-md">
        <h3 class="text-h6">
          Tenemos la mejor herramienta perfecta para planificar tu futuro
          financiero con confianza. ¿Te preguntas cuánto podrías solicitar o
          cuál sería la mejor opción de crédito para tus necesidades? Con
          nuestro calculador, obtendrás respuestas rápidas y precisas.
        </h3>

        <div class="q-mt-xl">
          <p class="text-body1 text-bold">Ventajas del simulador:</p>
          <ol class="advantages">
            <li>
              Ajusta el monto del crédito y el plazo de pago según tus
              necesidades únicas. Nuestro calculador te permite personalizar
              cada detalle para obtener resultados específicos.
            </li>
            <li>
              Visualiza de manera clara y detallada los pagos mensuales,
              incluyendo la tasa de interés y cualquier cargo adicional. Así
              podrás tomar decisiones informadas sobre tu capacidad de pago.
            </li>
          </ol>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 q-px-md row justify-end">
        <q-card class="card_simulator" style="max-width: 90vw; width: 450px">
          <q-card-section>
            <div class="text-h6 text-center text-secondary q-my-md">
              Calculadora de crédito
            </div>
            <q-separator />
            <q-list dense>
              <q-item class="text-secondary text-bold">
                <q-item-section> Cuanto dinero necesitas? </q-item-section>
                <q-item-section avatar class="text-h6">
                  $ {{ new Intl.NumberFormat().format(amount) }}
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <q-slider
                      v-model="amount"
                      :min="min"
                      :max="max"
                      :step="2"
                      color="primary"
                      track-size="10px"
                      thumb-size="35px"
                    />
                  </q-item-label>
                  <q-item-label class="row">
                    <span> $ {{ new Intl.NumberFormat().format(min) }} </span>
                    <q-space />
                    <span> $ {{ new Intl.NumberFormat().format(max) }} </span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-secondary text-bold">
                    A cuantas cuotas quieres pagarlo?
                  </q-item-label>
                  <div class="row justify-center">
                    <div v-for="(option, index) in options" :key="index">
                      <q-radio
                        :val="option.value"
                        v-model="monthlyFees"
                        size="70px"
                        :label="option.label"
                      />
                    </div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item class="text-secondary text-bold">
                <q-item-section> Cantidad a solicitar </q-item-section>
                <q-item-section avatar>
                  $ {{ new Intl.NumberFormat().format(amount) }}
                </q-item-section>
              </q-item>
              <q-item class="text-secondary text-bold">
                <q-item-section> Interés corriente </q-item-section>
                <q-item-section avatar>
                  $ {{ new Intl.NumberFormat().format(amount) }}
                </q-item-section>
              </q-item>
            </q-list>

            <q-separator />

            <q-list dense>
              <q-item class="text-secondary text-bold">
                <q-item-section> Fecha </q-item-section>
                <q-item-section avatar> Cuota </q-item-section>
              </q-item>
              <q-item v-for="(k, i) in monthlyFees" :key="i">
                <q-item-section>{{ formatMonth(k) }}</q-item-section>
                <q-item-section avatar> $ 12000 </q-item-section>
              </q-item>
            </q-list>

            <q-separator />
            <q-list dense>
              <q-item class="text-secondary text-bold">
                <q-item-section> Total a pagar </q-item-section>
                <q-item-section avatar> Cuota </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn
              color="primary"
              no-caps
              rounded
              unelevated
              label="Solicitar cupo de crédito"
            />
          </q-card-actions>
        </q-card>
      </div>
    </section>
    <section class="section_steps row container">
      <div class="col-xs-12 q-my-xl">
        <h4 class="text-h5 text-center text-bold text-white">
          Pide tu crédito 100% en línea en cinco pasos.
        </h4>
      </div>
      <div class="col-xs-12 row text-white">
        <div class="col q-px-md">
          <p class="text-h2 text-bold">01</p>
          <p class="subtitle">Ser empleado</p>
          <p>Verifica que eres colaborador de nuestra compañia</p>
        </div>
        <div class="col q-px-md">
          <p class="text-h2 text-bold">02</p>
          <p class="subtitle">Calcula tu crédito</p>
          <p>
            Escoge el valor, el plazo de tu crédito y valida que se acomode a
            tus necesidades
          </p>
        </div>
        <div class="col q-px-md">
          <p class="text-h2 text-bold">03</p>
          <p class="subtitle">Realiza tu solicitud</p>
          <p>Llena el formulario con la información requerida</p>
        </div>
        <div class="col q-px-md">
          <p class="text-h2 text-bold">04</p>
          <p class="subtitle">Espera nuestra aprobación</p>
          <p>Realizaremos el estudio y te notificamos cuando sea aprobado</p>
        </div>
        <div class="col q-px-md">
          <p class="text-h2 text-bold">05</p>
          <p class="subtitle">Recibe tu dinero</p>
          <p>Desembolsamos tu dinero a tu cuenta de nómia</p>
        </div>
      </div>
    </section>

    <footer class="footer row container">
      <div class="col q-px-md">
        <q-img src="/img/logo.png" fit="contain" style="height: 35px" />
      </div>
      <div class="col q-px-md">
        <p class="subtitle">Contacto</p>
        <ul>
          <li><q-icon name="mail" /> email@gmail.com</li>
          <li><q-icon name="phone" /> 60132342</li>
          <li><q-icon name="smartphone" /> 3123213112</li>
        </ul>
      </div>
      <div class="col q-px-md">
        <p class="subtitle">Nosotros</p>
        <ul>
          <li>RapiPlata</li>
          <li>Nit. 12131231-2</li>
          <li>Cl 12 #12-2</li>
          <li>gerencia@gmail.com</li>
        </ul>
      </div>
      <div class="col q-px-md">
        <p class="subtitle">Legales</p>
        <ul>
          <li>Términos y condiciones</li>
          <li>Política de privacidad</li>
        </ul>
      </div>
      <div class="col q-px-md">
        <p class="subtitle">Redes</p>
        <ul>
          <li><q-icon name="fa-brands fa-facebook" /> empleo.com</li>
          <li><q-icon name="fa-brands fa-instagram" /> @empleo.com</li>
        </ul>
      </div>
    </footer>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { date } from 'quasar';

const min = ref(100000);
const max = ref(10000000);
const amount = ref(100000);
const monthlyFees = ref(2);
const options = [
  { label: '2 Cuotas', value: 2 },
  { label: '3 Cuotas', value: 3 },
  { label: '4 Cuotas', value: 4 },
];

const formatMonth = (months: number) => {
  const timeStamp = Date.now();
  const newDate = date.addToDate(timeStamp, { months });
  const formattedString = date.formatDate(newDate, 'YYYY-MM-DD');

  return formattedString;
};
</script>
<style lang="scss" scoped>
.subtitle {
  font-size: 18px;
  font-weight: bold;
}
</style>
