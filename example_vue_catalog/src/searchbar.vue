<script>
import {api_search,api_patch} from './flask-connection.js';
export default {
  name: 'searchbar',
  components: {
  },
  data() {
    this.res = api_search(this.searchword);
    return {
      res: [],
      searchword: null
    }
  },
  methods: {
    async search(e){
      if (e.target.value.length < 3) {
        return;
      }
      this.res = await api_search(e.target.value);
      this.searchword = e.target.value;
      this.res.map(r => {
        r.description = r.description.replace(this.searchword, '<b>' + this.searchword + '</b>');
      });
    },
    async updatedescription(e) {
      this.res = await api_patch(e);
        console.log(this.res);
    },
    getImgUrl(pet) {
      return 'http://webapp.uibk.ac.at/ubi/cat/' + pet;
    }
  },
}
</script>

<template>
  <label for="Searchbar">Searchbar</label>
  <div class="input-group mb-3">
    <input :value="searchword" @input="search" type="text" class="form-control" placeholder="search" aria-label="Searchbar" aria-describedby="basic-addon1">
  </div>
  <table v-for="r in res" class="table table-striped">
    <tr>
      <td><span v-html="r.description"></span></td>
      <td><img :src="getImgUrl(r.thumb)"></td>
      <td>
        <input type="text" v-model="r.updatedescription">
        <button class="btn btn-success" @click="updatedescription(r)">Change</button>
      </td>
    </tr>
  </table>
</template>

<style scoped>

</style>
