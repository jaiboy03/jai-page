import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/views/layouts/Header.vue";

@Component({
  components: {
    Header: Header,
  },
})
export default class App extends Vue {
  data() {
    return {
      id: ""
    }
  }

  public getInfo() {

    // this.$store.dispatch('info',).then(response => {
    // })
  }

 
}
