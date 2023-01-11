<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="3">
        <dd-Button
          color="danger"
        >
          kamil
        </dd-Button>
        
        <p class="text-green-400">
          The quick brown fox...
        </p>
      </v-col>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
        <div
          v-if="n == 1"
          class="text-center"
        >
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                color="red lighten-2"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Click Me
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider />

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
      <v-col cols="4" />
      <ValidationObserver ref="addNewAccount">
        <Validation-provider
          v-slot="{ errors, value, field}"
          v-model="selected_category"
          name="category"
          rules="required"
        >
          <el-select
            v-bind="field"
            :model-value="value"
            name="category"
            class="w-full"
            :class="{'error-border': errors.length> 0}"
            filterable
            placeholder="Select Category"
          >
            <el-option
              v-for="item in categoryList"
              :key="'catpart'+item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
          <span
            v-if="errors.length > 0"
            class="error-text f10"
          >{{ errors[0] }}</span>
        </Validation-provider>
        <!-- <Validation-provider
          v-slot="{ errors, value, field}"
          v-model="account"
          name="account"
          rules="required"
        >
          <el-select
            :class="{'error-border': errors.length> 0}"
            v-bind="field"
            :model-value="value"
            class="m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in categoryList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <p v-if="errors.length > 0">
            {{ errors[0] }}
          </p>
        </Validation-provider> -->
        <Validation-provider
          v-slot="{ errors, value, field}"
          v-model="account1"
          name="account1"
          rules="required"
        >
          <el-input
            :class="{'error-border': errors.length> 0}"
            v-bind="field"
            :model-value="value"
            name="account1"              
            placeholder="Name of Account"
          />
          <span v-if="errors.length > 0">
            {{ errors[0] }}
          </span>
        </Validation-provider>
        <Validation-provider
          v-slot="{ errors, value, field}"
          v-model="account2"
          name="account2"
          rules="max:6"
        >
          <el-input
            :class="{'error-border': errors.length> 0}"
            v-bind="field"
            :model-value="value"
            name="account2"              
            placeholder="Name of Account"
          />
          <span v-if="errors.length > 0">
            {{ errors[0] }}
          </span>
        </Validation-provider>
        <el-button
          type="primary"
          @click="test"
        >
          Primary
        </el-button>
      </ValidationObserver>
    </v-row>
  </v-container>
</template>

<script>
import { method } from 'lodash';
import {DdButton} from "desk-design-system"
export default {
  components:{
DdButton,
  },
  data () {
    return {
      dialog: false,
      account: '',
      account1: '',
      account2: '',
      selected_category: '',
      categoryList: [
  {
    id: 123,
    name: 'Option1',
  },
  {
    id: 11,
    name: 'Option2',
  },
  {
    id: 12345,
    name: 'Option3',
  },
  {
    id: 234567,
    name: 'Option4',
  },
  {
    id: 98765,
    name: 'Option5',
  }
    ]
  }
  },
  methods:{
    async test(){
       const result = await  this.$refs.addNewAccount.validate()
       if(result.valid){
          console.log(this.$refs.addNewAccount)
       }
       console.log(result, "result")
      
    }
  }
}
</script>

<style lang="scss" scoped></style>
