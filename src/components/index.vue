<template>
  <div>
    <!-- default -->
    <button
      v-if="type == 'default'"
      :id="title"
      v-bind="$attrs"
      :class="{
        'rd-border-gray-300 rd-text-gray-700 rd-border hover:rd-bg-gray-50 focus:rd-outline-none':
          color == '',
        ' rd-px-2.5 rd-py-1.5 rd-text-xs': size === 'mini',
        ' rd-px-3 rd-py-2 rd-text-sm  rd-h-9': size === 'small',
        ' rd-px-4 rd-py-2 rd-text-sm': size === 'medium',
        ' rd-px-4 rd-py-2 rd-text-base': size === 'large',
        ' rd-px-6 rd-py-3 rd-text-base': size === 'xLarge',
        'rd-opacity-60 rd-cursor-not-allowed': disable,
        'rd-bg-teal-600 rd-text-white': color === 'primary',
        'rd-bg-red-600 rd-text-white': color === 'danger',
        'rd-bg-green-600 rd-text-white': color === 'success',
        'rd-w-full rd-justify-center': block ,
        'rd-bg-white rd-border-gray-300 rd-text-gray-700 rd-border hover:rd-bg-gray-50 focus:rd-outline-none':
          color === 'white',
        'rd-border rd-border-teal-500 rd-bg-teal-50 rd-text-gray-700': color === 'selected',
         
      }"
      class="rd-inline-flex rd-items-center rd-shadow-sm rd-font-medium rd-rounded rd-capitalize rd-whitespace-nowrap	"
    >
      {{ title }}
      <component
        :is="prependIcon + '-icon'"
        v-if="prependIcon != null"
        :size="iconSize"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      />
      {{ title }}
      <component
        :is="appendIcon + '-icon'"
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :size="iconSize"
      />
    </button>
    
    <!-- round -->
    <button
      v-else-if="type == 'round'"
      v-bind="$attrs"
      :class="{
        'border-gray-300 rd-text-gray-700 rd-border hover:rd-bg-gray-50 focus:rd-outline-none':
          color == '',
        ' rd-px-2.5 rd-py-1.5 rd-text-xs': size === 'mini',
        ' rd-px-3 rd-py-2 rd-text-sm': size === 'small',
        ' rd-px-4 rd-py-2 rd-text-sm': size === 'medium',
        ' rd-px-4 rd-py-2 rd-text-base': size === 'large',
        ' rd-px-6 rd-py-3 rd-text-base': size === 'xLarge',
        'rd-bg-teal-700 rd-text-white': color === 'primary',
        'rd-bg-red-600 rd-text-white': color === 'danger',
      }"
      
      class="rd-inline-flex rd-items-center rd-shadow-sm rd-rounded-full rd-font-medium rd-capitalize rd-whitespace-nowrap	"
    >
      <component
        :is="prependIcon + '-icon'"
        v-if="prependIcon != null"
        :size="iconSize"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      />
      {{ title }}
      <component
        :is="appendIcon + '-icon'"
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :size="iconSize"
      />
    </button>
    <button
      v-else-if="type == 'text'"
      
      v-bind="$attrs"
      :class="{
        ' rd-text-gray-700  hover:rd-text-gray-900 ': color == '',
        ' rd-px-2.5 rd-py-1.5 rd-text-xs': size === 'mini',
        ' rd-px-3 rd-py-2 rd-text-sm': size === 'small',
        ' rd-px-4 rd-py-2 rd-text-sm': size === 'medium',
        ' rd-px-4 rd-py-2 rd-text-base': size === 'large',
        ' rd-px-6 rd-py-3 rd-text-base': size === 'xLarge',
        ' rd-text-teal-700': color === 'primary',
        ' rd-text-red-600': color === 'danger',
      }"
      class="rd-inline-flex rd-items-center rd-font-medium rd-capitalize rd-whitespace-nowrap	"
    >
      <component
        :is="prependIcon + '-icon'"
        v-if="prependIcon != null"
        :size="iconSize"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      />
      {{ title }}
      <component
        :is="appendIcon + '-icon'"
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :size="iconSize"
      />
    </button>

    <button
      
      v-else-if="type == 'circle'"
      :class="{
        'rd-border-gray-300 rd-text-gray-700 rd-border hover:rd-bg-gray-50 focus:rd-outline-none':
          color == '',
        ' rd-p-1 rd-text-xs': size === 'mini',
        ' rd-p-1.5 rd-text-sm ': size === 'small',
        ' rd-p-2 rd-text-sm ': size === 'medium',
        ' rd-p-2  rd-text-base': size === 'large',
        ' rd-p-3 rd-text-base': size === 'xLarge',
        'rd-bg-teal-700 rd-text-white': color === 'primary',
        'rd-bg-red-600 rd-text-white': color === 'danger',
      }"
      class="rd-inline-flex  rd-items-center rd-shadow-sm rd-font-medium rd-rounded-full rd-capitalize rd-whitespace-nowrap	"
    >
      <component
        :is="prependIcon + '-icon'"
        v-if="prependIcon != null"
        :size="iconSize"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      />
      {{ title }}
      <component
        :is="appendIcon + '-icon'"
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :size="iconSize"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    prependIcon: {
      type: String,
      default: null,
    },
    appendIcon: {
      type: String,
      default: null,
    },
    vertical: Boolean,
    iconstyle: {
      type: String,
      default: null,
    },
    iconSize: {
      type: String,
      default: "20",
    },
    suffix: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "Button",
    },
    color: {
      type: String,
      default: "",
    },
    
    disable: {
      type: Boolean,
      default: false,
    },
     block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return (
          ["mini", "small", "medium", "large", "xLarge" ].indexOf(value) !== -1
        );
      },
      default: "medium",
    },
    type: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ["default", "round", "text", "circle"].indexOf(value) !== -1;
      },
      default: "default",
    },
  },
  data () {
    return {
      test: "123"
    }
  },
  mounted(){
    console.log(this.title, 'this.title')
  }
};
</script>

<style lang="scss" scoped></style>
