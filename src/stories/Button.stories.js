// import MyButton from './Button.vue';
import {DdButton} from "desk-design-system"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: DdButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { 
      control:{
        type: 'select' 
      },
      options: ['primary','danger', 'success', 'white'],
      description: "Change color value as per the requirement primary / danger / success / white",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
     },
     title:{
      description: "Change title value as per the requirement",
      table:{
        defaultValue:{
          summary: "Button"
        }
      }
     },
    // onClick: {
    //   action: "clicked"
    // },
    size: {
      control: { type: 'select' },
      options: ['mini','small', 'medium', 'large','xLarge',],
      description: "Accepted value mini / small / medium / large / xLarge ",
      table:{
        defaultValue:{
          summary: "medium"
        }
      }
    },
    block:{
      type: 'boolean',
      description: "To make button width full to parent div chnage boolean value to true",
      table:{
        defaultValue:{
          summary: "False"
        }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['default','round','text', 'circle',],
       description: "By default button type is color less so change the props default / round / text / circle",
      table:{
        defaultValue:{
          summary: "-"
        }
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DdButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const onClickMethod =  (() => action("clicked"))
    return { args, onClickMethod };

  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dd-button @click="onClickMethod" v-bind="args" />  ',
});



export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
console.log(Primary.args, "Primary")
Primary.args = {
  color: 'primary',
  title: 'Button',
  size: 'small',
  type: 'default'
};


