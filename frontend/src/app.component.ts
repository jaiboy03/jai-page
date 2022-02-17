import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/views/layouts/Header.vue";

@Component({
  components: {
    Header: Header,
  },
})
export default class App extends Vue {}
